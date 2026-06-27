import re
import unittest
import base64
import hashlib
from datetime import datetime, timedelta, timezone
from tempfile import TemporaryDirectory
from pathlib import Path

import morning


class MorningNewsTests(unittest.TestCase):
    def setUp(self):
        self.now = datetime(2026, 5, 10, 8, 0, tzinfo=timezone.utc)

    def article(self, title, bucket="random", hours_old=11, source="Feed", source_url=""):
        return morning.Article(
            title=title,
            url=f"https://example.com/{title.replace(' ', '-').lower()}",
            source=source,
            published=self.now - timedelta(hours=hours_old),
            bucket=bucket,
            summary="A measured summary with concrete details.",
            source_url=source_url,
        )

    def test_keeps_articles_between_ten_and_twelve_hours_old(self):
        articles = [
            self.article("too fresh", hours_old=9.99),
            self.article("just right", hours_old=10),
            self.article("also right", hours_old=11.5),
            self.article("too old", hours_old=12.01),
        ]

        kept = morning.filter_by_age(articles, self.now, 10, 12)

        self.assertEqual([article.title for article in kept], ["just right", "also right"])

    def test_political_charge_score_flags_loaded_language(self):
        calm = self.article("City council approves library roof repair")
        charged = self.article("Corrupt radical regime launches outrageous attack")

        self.assertLess(morning.political_charge_score(calm), 2)
        self.assertGreaterEqual(morning.political_charge_score(charged), 4)

    def test_redundancy_filter_prefers_first_clear_phrase(self):
        articles = [
            self.article("NASA telescope maps nearby star nursery"),
            self.article("NASA telescope maps nearby star nursery in new survey"),
            self.article("Researchers publish battery recycling method"),
        ]

        kept = morning.remove_redundant_articles(articles, similarity_threshold=0.55)

        self.assertEqual(
            [article.title for article in kept],
            [
                "NASA telescope maps nearby star nursery",
                "Researchers publish battery recycling method",
            ],
        )

    def test_curates_ten_from_each_bucket_after_filtering(self):
        articles = []
        for bucket in ("scholar", "random", "science", "ai"):
            for index in range(12):
                articles.append(self.article(f"{bucket} article {index}", bucket=bucket))
        articles.append(self.article("corrupt radical attack headline", bucket="random"))

        curated = morning.curate_articles(articles, now=self.now, limit_per_bucket=10)

        self.assertEqual(len(curated), 40)
        self.assertEqual(
            {bucket: sum(1 for article in curated if article.bucket == bucket) for bucket in ("scholar", "random", "science", "ai")},
            {"scholar": 10, "random": 10, "science": 10, "ai": 10},
        )
        self.assertNotIn("corrupt radical attack headline", [article.title for article in curated])

    def test_curate_can_fill_scholar_shortfall_from_broader_recent_articles(self):
        articles = []
        for index in range(12):
            articles.append(self.article(f"scholar fallback {index}", bucket="scholar", hours_old=16))
        for bucket in ("random", "science", "ai"):
            for index in range(10):
                articles.append(self.article(f"{bucket} article {index}", bucket=bucket))

        strict = morning.curate_articles(articles, now=self.now, limit_per_bucket=10)
        filled = morning.curate_articles(
            articles,
            now=self.now,
            limit_per_bucket=10,
            fill_shortfalls=True,
            fallback_max_age_hours=36,
        )

        self.assertEqual(sum(1 for article in strict if article.bucket == "scholar"), 0)
        self.assertEqual(sum(1 for article in filled if article.bucket == "scholar"), 10)

    def test_scholar_urls_can_be_read_from_env_file(self):
        with TemporaryDirectory() as tmpdir:
            env_path = Path(tmpdir) / ".env"
            env_path.write_text(
                "GOOGLE_SCHOLAR_RSS_URLS=https://scholar.google.com/alerts/feeds/abc; https://scholar.google.com/alerts/feeds/def\n",
                encoding="utf-8",
            )

            feeds = morning.scholar_feeds_from_config(env={}, env_file=str(env_path))

            self.assertEqual(len(feeds), 2)
            self.assertEqual(feeds[0][0], "Google Scholar alert 1")
            self.assertEqual(feeds[1][1], "https://scholar.google.com/alerts/feeds/def")

    def test_random_news_feeds_include_direct_rss_sources_for_validated_refresh(self):
        feeds = morning.random_news_feeds(seed=7)

        self.assertTrue(any("news.google.com" not in url for _, url in feeds))
        self.assertTrue(any("rss" in url or "feed" in url for _, url in feeds))

    def test_ai_news_feeds_include_direct_rss_sources_for_validated_refresh(self):
        feeds = morning.ai_news_feeds(seed=7)

        self.assertTrue(any("news.google.com" not in url for _, url in feeds))
        self.assertTrue(any("rss" in url for _, url in feeds))

    def test_ai_compelling_score_prefers_concrete_ai_breakthroughs(self):
        compelling = self.article(
            "Open source AI agent breakthrough improves reasoning benchmark",
            bucket="ai",
        )
        bland = self.article("Company posts quarterly software update", bucket="ai")

        self.assertGreater(morning.ai_compelling_score(compelling), morning.ai_compelling_score(bland))

    def test_static_ui_contains_article_navigation_and_keyboard_handlers(self):
        articles = [
            morning.Article(
                title="NASA telescope maps nearby star nursery",
                url="https://example.com/nasa",
                source="Feed",
                published=self.now - timedelta(hours=11),
                bucket="science",
                summary="The telescope captured dense gas clouds. Researchers said the view changes their model of star formation. A third sentence should not appear.",
            )
        ]

        html = morning.format_html(articles, self.now, warnings=["sample warning"])

        self.assertIn("Morning News", html)
        self.assertIn("NASA telescope maps nearby star nursery", html)
        self.assertIn('data-route="science-0"', html)
        self.assertIn('class="article-card ', html)
        self.assertIn("article-grid", html)
        self.assertIn("aspect-ratio: 1 / 1", html)
        self.assertIn("--bg: #05070d", html)
        self.assertIn("The telescope captured dense gas clouds. Researchers said the view changes their model of star formation.", html)
        self.assertNotIn("A third sentence should not appear", html)
        self.assertIn("Backspace", html)
        self.assertIn("ArrowLeft", html)
        self.assertIn("Enter", html)
        self.assertIn("ArrowRight", html)
        self.assertIn('event.key === " " || event.key === "Spacebar"', html)
        self.assertIn("history.back()", html)
        self.assertIn("history.forward()", html)
        self.assertIn("scrollIntoView", html)
        self.assertIn("sample warning", html)

    def test_static_ui_fits_long_titles_without_changing_square_card_size(self):
        long_title = (
            "International research consortium publishes unusually detailed multi-year "
            "analysis of ocean warming, crop resilience, insurance risk, and grid planning"
        )
        article = morning.Article(
            title=long_title,
            url="https://www.nature.com/articles/example",
            source="Nature",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="The paper compares regional models. It gives policy makers a practical planning map.",
        )

        html = morning.format_html([article], self.now)

        self.assertIn('class="article-card fit-extreme"', html)
        self.assertIn("grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));", html)
        self.assertIn("aspect-ratio: 1 / 1", html)
        self.assertIn("fitCardText", html)
        self.assertIn("--title-size", html)
        self.assertNotIn("-webkit-line-clamp", html)

    def test_source_logo_markup_uses_favicon_or_na_for_pdf_and_missing_sources(self):
        source_article = morning.Article(
            title="Researchers publish new materials database",
            url="https://www.nature.com/articles/example",
            source="Nature",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
            source_url="https://www.nature.com",
        )
        pdf_article = morning.Article(
            title="PDF only publication",
            url="https://arxiv.org/pdf/1234.56789.pdf",
            source="",
            published=self.now - timedelta(hours=11),
            bucket="scholar",
            summary="A short summary.",
        )

        logo = morning.source_logo_markup(source_article)
        pdf_logo = morning.source_logo_markup(pdf_article)
        html = morning.format_html([source_article, pdf_article], self.now)

        self.assertIn("<img", logo)
        self.assertIn("nature.com", logo)
        self.assertIn("source-logo-na", pdf_logo)
        self.assertIn(">N/A<", pdf_logo)
        self.assertIn("source-logo", html)
        self.assertIn("Source logo for Nature", html)

    def test_normalize_article_url_rejects_broad_or_non_https_targets(self):
        self.assertEqual(
            morning.normalize_article_url("https://example.com/news/deep-research-story"),
            "https://example.com/news/deep-research-story",
        )
        self.assertEqual(morning.normalize_article_url("http://example.com/news/deep-research-story"), "")
        self.assertEqual(morning.normalize_article_url("https://example.com/news"), "")
        self.assertEqual(morning.normalize_article_url("https://example.com/search?q=robotics"), "")
        self.assertEqual(morning.normalize_article_url("https://news.google.com/rss/search?q=robotics"), "")
        self.assertEqual(morning.normalize_article_url("https://news.google.com/rss/articles/CBMi-example"), "")

    def test_normalize_source_home_url_rejects_google_and_broad_targets(self):
        self.assertEqual(morning.normalize_source_home_url("https://www.nature.com"), "https://www.nature.com")
        self.assertEqual(morning.normalize_source_home_url("https://news.google.com/publications/example"), "")
        self.assertEqual(morning.normalize_source_home_url("https://news.google.com/rss/search?q=science"), "")
        self.assertEqual(morning.normalize_source_home_url("https://example.com/search?q=science"), "")
        self.assertEqual(morning.normalize_source_home_url("https://example.com/news/deep-research-story"), "")

    def test_verified_articles_rejects_google_news_articles_that_do_not_resolve_to_publishers(self):
        google_article = morning.Article(
            title="Google hosted article link",
            url="https://news.google.com/rss/articles/CBMi-example",
            source="Example",
            source_url="https://example.com",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )

        def checker(url, timeout=10):
            return morning.LinkCheck(True, url, 200, "")

        kept, warnings = morning.verified_articles([google_article], checker=checker)

        self.assertEqual(kept, [])
        self.assertTrue(any("Google hosted article link" in warning for warning in warnings))

    def test_resolve_article_url_returns_publisher_for_google_news_redirect(self):
        article = morning.Article(
            title="Resolved publisher article",
            url="https://news.google.com/rss/articles/CBMi-example",
            source="Google News",
            source_url="https://news.google.com/publications/example",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )

        def checker(url, timeout=10):
            if url == "https://news.google.com/rss/articles/CBMi-example":
                return morning.LinkCheck(
                    True,
                    "https://publisher.example.com/science/resolved-article",
                    200,
                    "",
                )
            return morning.LinkCheck(True, url, 200, "")

        resolved = morning.resolve_article_url(article, checker=checker)

        self.assertEqual(resolved, "https://publisher.example.com/science/resolved-article")

    def test_google_news_decoder_parses_params_and_batch_response(self):
        html = '<c-wiz><div jscontroller="x" data-n-a-ts="1779743497" data-n-a-sg="AaLI4RR"></div></c-wiz>'
        response = """)]}'""" + "\n\n" + (
            '[["wrb.fr","Fbv4je","[\\"garturlres\\",\\"https://publisher.example.com/story\\",1]"],null,null]'
        )

        self.assertEqual(
            morning.extract_google_news_decoding_params(html),
            ("AaLI4RR", "1779743497"),
        )
        self.assertEqual(
            morning.parse_google_news_batchexecute_response(response),
            "https://publisher.example.com/story",
        )

    def test_verified_articles_derives_source_home_from_resolved_publisher_article(self):
        article = morning.Article(
            title="Resolved publisher article",
            url="https://news.google.com/rss/articles/CBMi-example",
            source="Google News",
            source_url="https://news.google.com/publications/example",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )

        def checker(url, timeout=10):
            if url == "https://news.google.com/rss/articles/CBMi-example":
                return morning.LinkCheck(
                    True,
                    "https://publisher.example.com/science/resolved-article",
                    200,
                    "",
                )
            if url == "https://publisher.example.com":
                return morning.LinkCheck(True, url, 200, "")
            return morning.LinkCheck(True, url, 200, "")

        kept, warnings = morning.verified_articles([article], checker=checker)

        self.assertEqual(warnings, [])
        self.assertEqual(len(kept), 1)
        self.assertEqual(kept[0].url, "https://publisher.example.com/science/resolved-article")
        self.assertEqual(kept[0].source_url, "https://publisher.example.com")

    def test_verified_articles_uses_feed_source_home_only_when_it_is_a_homepage(self):
        article = morning.Article(
            title="Publisher source homepage",
            url="https://publisher.example.com/science/resolved-article",
            source="Publisher",
            source_url="https://publisher.example.com",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )

        def checker(url, timeout=10):
            return morning.LinkCheck(True, url, 200, "")

        kept, warnings = morning.verified_articles([article], checker=checker)

        self.assertEqual(warnings, [])
        self.assertEqual(len(kept), 1)
        self.assertEqual(kept[0].source_url, "https://publisher.example.com")

    def test_verified_articles_keeps_valid_article_without_unverified_source_link(self):
        alive = morning.Article(
            title="Researchers map useful signal",
            url="https://example.com/news/researchers-map-useful-signal",
            source="Example",
            source_url="https://example.com",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )
        dead = morning.Article(
            title="Dead link",
            url="https://example.com/news/dead-link",
            source="Example",
            source_url="https://example.com",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )
        broad = morning.Article(
            title="Broad news page",
            url="https://example.com/news",
            source="Example",
            source_url="https://example.com",
            published=self.now - timedelta(hours=11),
            bucket="science",
            summary="A short summary.",
        )

        def checker(url, timeout=10):
            if url == "https://example.com/news/researchers-map-useful-signal":
                return morning.LinkCheck(True, url, 200, "")
            if url == "https://example.com":
                return morning.LinkCheck(False, url, 503, "service unavailable")
            return morning.LinkCheck(False, url, 404, "not found")

        kept, warnings = morning.verified_articles([alive, dead, broad], checker=checker)

        self.assertEqual(len(kept), 1)
        self.assertEqual(kept[0].title, "Researchers map useful signal")
        self.assertEqual(kept[0].source_url, "")
        self.assertTrue(any("Dead link" in warning for warning in warnings))
        self.assertTrue(any("Broad news page" in warning for warning in warnings))

    def test_select_verified_articles_validates_past_failed_candidates(self):
        articles = []
        for bucket in ("scholar", "random", "science", "ai"):
            for index in range(12):
                url = f"https://example.com/{bucket}/candidate-{index:02d}"
                if bucket == "science" and index < 2:
                    url = f"https://example.com/{bucket}/dead-{index:02d}"
                articles.append(
                    morning.Article(
                        title=f"{bucket} candidate {index:02d}",
                        url=url,
                        source="Example",
                        source_url="https://example.com",
                        published=self.now - timedelta(hours=11),
                        bucket=bucket,
                        summary="A measured summary with concrete details.",
                    )
                )

        def checker(url, timeout=10):
            if "/dead-" in url:
                return morning.LinkCheck(False, url, 404, "not found")
            return morning.LinkCheck(True, url, 200, "")

        selected, warnings = morning.select_verified_articles_by_bucket(
            articles,
            now=self.now,
            limit_per_bucket=10,
            checker=checker,
        )

        self.assertEqual(len(selected), 40)
        self.assertEqual(
            {bucket: sum(1 for article in selected if article.bucket == bucket) for bucket in ("scholar", "random", "science", "ai")},
            {"scholar": 10, "random": 10, "science": 10, "ai": 10},
        )
        self.assertNotIn("science candidate 00", [article.title for article in selected])
        self.assertNotIn("science candidate 01", [article.title for article in selected])
        self.assertTrue(any("science candidate 00" in warning for warning in warnings))

    def test_select_verified_articles_prefers_direct_candidates_before_wrappers(self):
        articles = [
            morning.Article(
                title="aa wrapper",
                url="https://news.google.com/rss/articles/CBMi-example",
                source="Google News",
                source_url="https://news.google.com/publications/example",
                published=self.now - timedelta(hours=11),
                bucket="science",
                summary="A measured summary with concrete details.",
            )
        ]
        for bucket in ("scholar", "random", "science", "ai"):
            for index in range(10):
                articles.append(
                    morning.Article(
                        title=f"{bucket} direct candidate {index:02d}",
                        url=f"https://example.com/{bucket}/direct-candidate-{index:02d}",
                        source="Example",
                        source_url="https://example.com",
                        published=self.now - timedelta(hours=11),
                        bucket=bucket,
                        summary="A measured summary with concrete details.",
                    )
                )

        def checker(url, timeout=10):
            if "news.google.com" in url:
                raise AssertionError("Google wrapper should not be checked when direct links fill the bucket")
            return morning.LinkCheck(True, url, 200, "")

        selected, warnings = morning.select_verified_articles_by_bucket(
            articles,
            now=self.now,
            limit_per_bucket=10,
            checker=checker,
        )

        self.assertEqual(len(selected), 40)
        self.assertEqual(warnings, [])
        self.assertNotIn("aa wrapper", [article.title for article in selected])

    def test_previous_article_urls_are_loaded_and_skipped_when_required(self):
        previous_article = self.article("science aa", bucket="science")
        articles = [previous_article]
        for index in range(10):
            articles.append(self.article(f"science new {index}", bucket="science"))
        for bucket in ("scholar", "random", "ai"):
            for index in range(10):
                articles.append(self.article(f"{bucket} new {index}", bucket=bucket))

        def checker(url, timeout=10):
            return morning.LinkCheck(True, url, 200, "")

        with TemporaryDirectory() as tmpdir:
            output_path = Path(tmpdir) / "articles.js"
            output_path.write_text(
                morning.format_articles_js([previous_article], self.now),
                encoding="utf-8",
            )

            previous_urls = morning.previous_article_urls_from_output(str(output_path))
            selected, warnings = morning.select_verified_articles_by_bucket(
                articles,
                now=self.now,
                limit_per_bucket=10,
                checker=checker,
                previous_article_urls=previous_urls,
                require_new_links=True,
            )

        self.assertIn(previous_article.url, previous_urls)
        self.assertNotIn(previous_article.url, [article.url for article in selected])
        self.assertEqual(sum(1 for article in selected if article.bucket == "science"), 10)
        self.assertTrue(any("science aa" in warning for warning in warnings))

    def test_articles_js_export_uses_article_and_source_home_fields(self):
        articles = []
        for bucket in ("scholar", "random", "science", "ai"):
            total = 72 if bucket == "random" else 12
            for index in range(total):
                articles.append(
                    self.article(
                        f"{bucket} generated {index}",
                        bucket=bucket,
                        source="Example",
                        source_url="https://example.com",
                    )
                )

        random_sources = [
            {"name": f"Source {index}", "feedUrl": f"https://example.com/feed-{index}.xml", "homeUrl": "https://example.com", "articleCount": 6}
            for index in range(10)
        ]
        js = morning.format_articles_js(articles, self.now, random_pool_size=60, random_sources=random_sources)
        payload = morning.parse_articles_js_payload(js)

        self.assertIn("window.MORNING_NEWS_DATA", js)
        self.assertIn('"generatedAt": "2026-05-10T08:00:00+00:00"', js)
        self.assertIn('"randomPool"', js)
        self.assertIn('"randomSources"', js)
        self.assertIn('"articleUrl"', js)
        self.assertIn('"sourceHomeUrl"', js)
        self.assertNotIn('"url"', js)
        self.assertEqual(set(payload["sections"]), {"scholar", "random", "science", "ai"})
        self.assertEqual({bucket: len(records) for bucket, records in payload["sections"].items()}, {"scholar": 10, "random": 10, "science": 10, "ai": 10})
        self.assertEqual(len(payload["randomPool"]), 60)
        self.assertEqual(len(payload["randomSources"]), 10)

    def test_random_source_selection_backfills_to_ten_successful_sources(self):
        feeds = [(f"Source {index}", f"https://example.com/feed-{index}.xml") for index in range(12)]

        def fetcher(selected_feeds, bucket, timeout):
            articles = []
            warnings = []
            for label, url in selected_feeds:
                index = int(label.split()[-1])
                if index in {0, 3}:
                    warnings.append(f"{label}: failed")
                    continue
                articles.append(self.article(f"{label} article", bucket=bucket, source=label, source_url=f"https://source-{index}.example.com"))
            return articles, warnings

        articles, warnings, sources = morning.fetch_random_articles_from_sources(
            feeds,
            source_count=10,
            timeout=5,
            fetcher=fetcher,
        )

        self.assertEqual(len(sources), 10)
        self.assertEqual(len(articles), 10)
        self.assertTrue(any("Source 0" in warning for warning in warnings))
        self.assertNotIn("Source 0", [source["name"] for source in sources])
        self.assertNotIn("Source 3", [source["name"] for source in sources])

    def test_audit_static_payload_links_reports_broken_article_and_source(self):
        article = self.article("working article", bucket="science", source_url="https://example.com")
        broken = self.article("broken article", bucket="science", source_url="https://example.com")
        broken = morning.replace(broken, url="https://example.com/dead")
        payload = morning.articles_static_payload([article, broken], self.now)

        def checker(url, timeout=10):
            if url == "https://example.com/dead":
                return morning.LinkCheck(False, url, 404, "not found")
            if url == "https://example.com":
                return morning.LinkCheck(False, url, 503, "service unavailable")
            return morning.LinkCheck(True, url, 200, "")

        ok, warnings = morning.audit_static_payload_links(payload, checker=checker)

        self.assertFalse(ok)
        self.assertTrue(any("broken article" in warning and "article URL" in warning for warning in warnings))
        self.assertTrue(any("working article" in warning and "source homepage" in warning for warning in warnings))

    def test_articles_js_payload_can_fill_short_live_refresh_from_previous_static_data(self):
        live = [
            self.article("live science", bucket="science"),
            self.article("live random", bucket="random"),
        ]
        fallback = [
            self.article("fallback science", bucket="science"),
            self.article("fallback random one", bucket="random"),
            self.article("fallback random two", bucket="random"),
        ]

        filled = morning.fill_articles_from_fallback(
            live,
            fallback,
            {"science": 2, "random": 3},
        )

        self.assertEqual(sum(1 for article in filled if article.bucket == "science"), 2)
        self.assertEqual(sum(1 for article in filled if article.bucket == "random"), 3)
        self.assertIn("fallback random two", [article.title for article in filled])

    def test_ui_mode_writes_static_html_file_without_opening_when_requested(self):
        with TemporaryDirectory() as tmpdir:
            output = Path(tmpdir) / "morning_news.html"

            exit_code = morning.main(["--sample", "--format", "ui", "--no-open", "--output", str(output)])

            self.assertEqual(exit_code, 0)
            self.assertTrue(output.exists())
            self.assertIn("<!doctype html>", output.read_text(encoding="utf-8").lower())


class GitHubPagesStaticSiteTests(unittest.TestCase):
    def setUp(self):
        self.root = Path(__file__).resolve().parent
        self.docs = self.root / "docs"

    def read_docs_file(self, name):
        path = self.docs / name
        self.assertTrue(path.exists(), f"Expected {path} to exist")
        return path.read_text(encoding="utf-8")

    def test_docs_site_files_exist_for_github_pages(self):
        for name in ("index.html", "styles.css", "app.js", "articles.js", ".nojekyll"):
            self.assertTrue((self.docs / name).exists(), f"Missing docs/{name}")

    def test_index_uses_relative_assets_for_project_pages(self):
        html = self.read_docs_file("index.html")

        self.assertIn('href="./styles.css"', html)
        self.assertIn('src="./articles.js"', html)
        self.assertIn('src="./app.js"', html)
        self.assertNotIn('href="/styles.css"', html)
        self.assertNotIn('src="/articles.js"', html)
        self.assertNotIn('src="/app.js"', html)
        self.assertIn("Morning News", html)
        self.assertIn('id="refreshRandomButton"', html)
        self.assertIn('id="bucketNav"', html)
        self.assertIn('id="sections"', html)

    def test_index_contains_csp_and_matching_asset_integrity_hashes(self):
        html = self.read_docs_file("index.html")
        self.assertIn('http-equiv="Content-Security-Policy"', html)
        self.assertIn("default-src 'self'", html)
        self.assertIn("script-src 'self'", html)
        self.assertIn("connect-src 'none'", html)
        self.assertIn("object-src 'none'", html)
        self.assertIn("form-action 'none'", html)

        for asset in ("styles.css", "articles.js", "app.js"):
            digest = base64.b64encode(hashlib.sha256((self.docs / asset).read_bytes()).digest()).decode("ascii")
            expected = f'integrity="sha256-{digest}"'
            self.assertIn(expected, html)

    def test_static_frontend_preserves_buckets_navigation_and_no_server_fetch(self):
        app_js = self.read_docs_file("app.js")
        articles_js = self.read_docs_file("articles.js")
        payload = morning.parse_articles_js_payload(articles_js)

        self.assertIn('"scholar"', app_js)
        self.assertIn('"random"', app_js)
        self.assertIn('"science"', app_js)
        self.assertIn('"ai"', app_js)
        self.assertEqual({bucket: len(records) for bucket, records in payload["sections"].items()}, {"scholar": 10, "random": 10, "science": 10, "ai": 10})
        self.assertIn('"randomPool"', articles_js)
        self.assertIn('"randomSources"', articles_js)
        self.assertGreaterEqual(len(payload.get("randomPool", [])), 20)
        self.assertEqual(len(payload.get("randomSources", [])), 10)
        self.assertNotIn("fetch(", app_js)
        self.assertNotIn("fetch(", articles_js)
        self.assertNotIn("XMLHttpRequest", app_js)
        self.assertNotIn("XMLHttpRequest", articles_js)
        self.assertNotIn("GOOGLE_SCHOLAR_RSS_URLS", app_js)
        self.assertNotIn("GOOGLE_SCHOLAR_RSS_URLS", articles_js)
        for disallowed_pattern in (r"apiKey\s*[:=]", r"api_key\s*[:=]", r"\bsecret\s*[:=]", r"\btoken\s*[:=]"):
            self.assertIsNone(re.search(disallowed_pattern, app_js, flags=re.IGNORECASE))
            self.assertIsNone(re.search(disallowed_pattern, articles_js, flags=re.IGNORECASE))

    def test_static_frontend_preserves_keyboard_history_and_text_fitting(self):
        app_js = self.read_docs_file("app.js")
        css = self.read_docs_file("styles.css")

        for expected in (
            "Backspace",
            "ArrowLeft",
            "Enter",
            "ArrowRight",
            "Spacebar",
            "history.back()",
            "history.forward()",
            "scrollIntoView",
            "fitCardText",
            "sourceLogoUrl",
            "refreshRandomArticles",
            "randomPoolSignature",
            "usedArticleUrls",
            "RANDOM_STORAGE_KEY",
            "routes.length = 0",
        ):
            self.assertIn(expected, app_js)
        self.assertIn("aspect-ratio: 1 / 1", css)
        self.assertIn("grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));", css)
        self.assertIn("--paper", css)
        self.assertIn("--verdigris", css)
        self.assertIn("--lapis", css)
        self.assertIn("--oxblood", css)
        self.assertIn("bulletin", css)
        self.assertIn("source-logo-na", css)
        self.assertIn("--title-size", css)
        self.assertNotIn("-webkit-line-clamp", css)

    def test_static_article_links_are_direct_article_targets(self):
        app_js = self.read_docs_file("app.js")
        articles_js = self.read_docs_file("articles.js")
        urls = re.findall(r'"articleUrl": "([^"]+)"', articles_js)
        source_urls = re.findall(r'"sourceHomeUrl": "([^"]*)"', articles_js)

        self.assertEqual(len(urls), 40)
        self.assertEqual(len(urls), len(source_urls))
        forbidden_patterns = (
            r"news\.google\.com/(?:rss/)?articles",
            r"scholar\.google\.com/scholar",
            r"/search",
            r"\?q=",
            r"/category/",
            r"/topic/",
            r"/hub/",
            r"/news/?(?:[?#].*)?$",
            r"/discover/blog/?(?:[?#].*)?$",
            r"/research/?(?:[?#].*)?$",
            r"/vertical/",
        )
        for url in urls:
            with self.subTest(url=url):
                self.assertTrue(url.startswith("https://"))
                for pattern in forbidden_patterns:
                    self.assertIsNone(re.search(pattern, url, flags=re.IGNORECASE))
        for url in source_urls:
            with self.subTest(source_url=url):
                self.assertTrue(url.startswith("https://"))
                parsed_path = re.sub(r"^https://[^/]+", "", url).rstrip("/")
                self.assertEqual(parsed_path, "")
                for pattern in forbidden_patterns:
                    self.assertIsNone(re.search(pattern, url, flags=re.IGNORECASE))

        self.assertIn("Article", app_js)
        self.assertIn("Source site", app_js)
        self.assertIn('target = "_blank"', app_js)
        self.assertIn('rel = "noopener noreferrer"', app_js)

    def test_refresh_workflow_runs_daily_and_commits_generated_articles(self):
        workflow = (self.root / ".github" / "workflows" / "refresh.yml")
        self.assertTrue(workflow.exists(), "Missing daily refresh workflow")
        text = workflow.read_text(encoding="utf-8")

        self.assertIn("schedule:", text)
        self.assertIn("workflow_dispatch:", text)
        self.assertIn("contents: write", text)
        self.assertIn("python -B -m unittest test_morning.py", text)
        self.assertIn("--format articles-js", text)
        self.assertIn("--validate-links", text)
        self.assertIn("--previous-output docs/articles.js", text)
        self.assertIn("--require-new-links", text)
        self.assertIn("--strict", text)
        self.assertIn("docs/articles.js", text)

    def test_readme_contains_github_pages_instructions(self):
        readme = (self.root / "README.md")
        self.assertTrue(readme.exists(), "Missing README.md")
        text = readme.read_text(encoding="utf-8")

        self.assertIn("python -m http.server 8000 --directory docs", text)
        self.assertIn("Settings > Pages > Deploy from a branch > main > /docs > Save", text)

if __name__ == "__main__":
    unittest.main()
