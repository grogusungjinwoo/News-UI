import unittest
from datetime import datetime, timedelta, timezone
from tempfile import TemporaryDirectory
from pathlib import Path

import morning


class MorningNewsTests(unittest.TestCase):
    def setUp(self):
        self.now = datetime(2026, 5, 10, 8, 0, tzinfo=timezone.utc)

    def article(self, title, bucket="random", hours_old=11, source="Feed"):
        return morning.Article(
            title=title,
            url=f"https://example.com/{title.replace(' ', '-').lower()}",
            source=source,
            published=self.now - timedelta(hours=hours_old),
            bucket=bucket,
            summary="A measured summary with concrete details.",
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

    def test_ui_mode_writes_static_html_file_without_opening_when_requested(self):
        with TemporaryDirectory() as tmpdir:
            output = Path(tmpdir) / "morning_news.html"

            exit_code = morning.main(["--sample", "--format", "ui", "--no-open", "--output", str(output)])

            self.assertEqual(exit_code, 0)
            self.assertTrue(output.exists())
            self.assertIn("<!doctype html>", output.read_text(encoding="utf-8").lower())


if __name__ == "__main__":
    unittest.main()
