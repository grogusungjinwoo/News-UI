#!/usr/bin/env python3
"""Morning news curator.

Fetches recent articles, keeps items published 10-12 hours ago, removes the
most politically charged and repetitive headlines, then returns up to 10 items
each from scholar, random news, science, and AI buckets.
"""

from __future__ import annotations

import argparse
import json
import os
import random
import re
import sys
from dataclasses import asdict, dataclass, replace
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html import escape, unescape
from pathlib import Path
from typing import Iterable, List, Optional, Sequence, Tuple
from urllib.parse import urlencode, urlparse
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
import webbrowser
from xml.etree import ElementTree


BUCKETS = ("scholar", "random", "science", "ai")
DEFAULT_LIMIT_PER_BUCKET = 10
DEFAULT_RANDOM_POOL_SIZE = 20

STOPWORDS = {
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "how",
    "in",
    "into",
    "is",
    "it",
    "new",
    "of",
    "on",
    "or",
    "over",
    "says",
    "that",
    "the",
    "this",
    "to",
    "with",
}

LOADED_LANGUAGE_WEIGHTS = {
    "absurd": 2,
    "attack": 1,
    "betrayal": 2,
    "blasts": 2,
    "chaos": 2,
    "corrupt": 2,
    "crisis": 1,
    "destroy": 2,
    "disaster": 2,
    "evil": 2,
    "explosive": 2,
    "extremist": 2,
    "furious": 2,
    "horrific": 2,
    "insane": 2,
    "outrage": 2,
    "outrageous": 2,
    "radical": 2,
    "regime": 1,
    "scandal": 2,
    "shocking": 2,
    "slams": 2,
    "traitor": 3,
    "unhinged": 2,
    "war": 1,
}

POLITICAL_CONTEXT_TERMS = {
    "administration",
    "ballot",
    "campaign",
    "congress",
    "conservative",
    "democrat",
    "democrats",
    "election",
    "governor",
    "liberal",
    "minister",
    "parliament",
    "party",
    "policy",
    "president",
    "republican",
    "republicans",
    "senate",
    "senator",
    "trump",
    "voters",
    "whitehouse",
}

HTML_TAG_RE = re.compile(r"<[^>]+>")
WORD_RE = re.compile(r"[a-z0-9]+")
SENTENCE_RE = re.compile(r"(?<=[.!?])\s+")

AI_COMPELLING_WEIGHTS = {
    "agent": 3,
    "agents": 3,
    "alignment": 2,
    "artificial": 1,
    "autonomous": 2,
    "benchmark": 2,
    "breakthrough": 4,
    "chip": 2,
    "chips": 2,
    "deepmind": 2,
    "frontier": 3,
    "gpu": 2,
    "inference": 2,
    "language": 1,
    "llm": 3,
    "llms": 3,
    "model": 1,
    "models": 1,
    "multimodal": 3,
    "openai": 2,
    "opensource": 3,
    "reasoning": 4,
    "research": 1,
    "robot": 2,
    "robots": 2,
    "safety": 2,
    "scientists": 1,
    "startup": 1,
    "tool": 1,
}


@dataclass(frozen=True)
class Article:
    title: str
    url: str
    source: str
    published: datetime
    bucket: str
    summary: str = ""
    source_url: str = ""

    def age_hours(self, now: datetime) -> float:
        return (now - self.published).total_seconds() / 3600

    def as_json(self) -> dict:
        data = asdict(self)
        data["published"] = self.published.isoformat()
        data["political_charge_score"] = political_charge_score(self)
        return data


@dataclass(frozen=True)
class LinkCheck:
    ok: bool
    url: str
    status: Optional[int] = None
    error: str = ""


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def strip_html(value: str) -> str:
    return unescape(HTML_TAG_RE.sub(" ", value or "")).strip()


def normalize_datetime(value: datetime) -> datetime:
    if value.tzinfo is None:
        return value.replace(tzinfo=timezone.utc)
    return value.astimezone(timezone.utc)


def parse_datetime(value: Optional[str]) -> Optional[datetime]:
    if not value:
        return None

    value = value.strip()
    try:
        parsed = parsedate_to_datetime(value)
        return normalize_datetime(parsed)
    except (TypeError, ValueError, IndexError, OverflowError):
        pass

    iso_value = value.replace("Z", "+00:00")
    try:
        return normalize_datetime(datetime.fromisoformat(iso_value))
    except ValueError:
        return None


def filter_by_age(
    articles: Iterable[Article],
    now: datetime,
    min_age_hours: float = 10,
    max_age_hours: float = 12,
) -> List[Article]:
    now = normalize_datetime(now)
    kept = []
    for article in articles:
        published = normalize_datetime(article.published)
        age = (now - published).total_seconds() / 3600
        if min_age_hours <= age <= max_age_hours:
            kept.append(article)
    return kept


def normalized_title_tokens(title: str) -> set:
    words = WORD_RE.findall(title.lower())
    return {
        word
        for word in words
        if word not in STOPWORDS and (len(word) > 1 or word.isdigit())
    }


def title_similarity(left: str, right: str) -> float:
    left_tokens = normalized_title_tokens(left)
    right_tokens = normalized_title_tokens(right)
    if not left_tokens or not right_tokens:
        return 0.0
    return len(left_tokens & right_tokens) / len(left_tokens | right_tokens)


def political_charge_score(article: Article) -> int:
    text = f"{article.title} {article.summary}".lower()
    tokens = WORD_RE.findall(text)

    score = sum(LOADED_LANGUAGE_WEIGHTS.get(token, 0) for token in tokens)

    political_hits = {token for token in tokens if token in POLITICAL_CONTEXT_TERMS}
    if political_hits:
        score += min(2, len(political_hits))

    if "!" in article.title:
        score += 1

    all_caps_words = re.findall(r"\b[A-Z]{4,}\b", article.title)
    if all_caps_words:
        score += 1

    return score


def bucket_label(bucket: str) -> str:
    return "AI" if bucket == "ai" else bucket.title()


def ai_compelling_score(article: Article) -> int:
    text = f"{article.title} {article.summary}".lower().replace("open source", "opensource")
    tokens = WORD_RE.findall(text)
    score = sum(AI_COMPELLING_WEIGHTS.get(token, 0) for token in tokens)

    source = article.source.lower()
    if any(name in source for name in ("mit", "nature", "science", "arxiv", "openai", "deepmind")):
        score += 2
    if any(word in text for word in ("new model", "researchers", "paper", "benchmark", "released")):
        score += 1
    if political_charge_score(article) >= 4:
        score -= 2
    return score


def remove_redundant_articles(
    articles: Iterable[Article],
    similarity_threshold: float = 0.78,
) -> List[Article]:
    kept: List[Article] = []
    for article in articles:
        if all(
            title_similarity(article.title, existing.title) < similarity_threshold
            for existing in kept
        ):
            kept.append(article)
    return kept


def article_rank(article: Article, now: datetime) -> Tuple[int, int, float, int, str]:
    age_target = abs(article.age_hours(now) - 11)
    interest_score = -ai_compelling_score(article) if article.bucket == "ai" else 0
    return (
        political_charge_score(article),
        interest_score,
        age_target,
        len(article.title),
        article.title.lower(),
    )


def unique_article_key(article: Article) -> Tuple[str, str]:
    return (article.url.strip().lower(), article.title.strip().lower())


def curate_articles(
    articles: Iterable[Article],
    now: Optional[datetime] = None,
    limit_per_bucket: int = DEFAULT_LIMIT_PER_BUCKET,
    min_age_hours: float = 10,
    max_age_hours: float = 12,
    max_political_score: int = 4,
    similarity_threshold: float = 0.78,
    seed: Optional[int] = None,
    fill_shortfalls: bool = False,
    fallback_min_age_hours: float = 0,
    fallback_max_age_hours: float = 36,
) -> List[Article]:
    now = normalize_datetime(now or utc_now())
    all_articles = list(articles)
    recent = filter_by_age(all_articles, now, min_age_hours, max_age_hours)
    reasonable = [
        article
        for article in recent
        if political_charge_score(article) < max_political_score
    ]

    rng = random.Random(seed)
    curated: List[Article] = []
    for bucket in BUCKETS:
        bucket_articles = [article for article in reasonable if article.bucket == bucket]
        if bucket == "random":
            rng.shuffle(bucket_articles)
        bucket_articles = sorted(bucket_articles, key=lambda article: article_rank(article, now))
        deduped = remove_redundant_articles(bucket_articles, similarity_threshold)
        selected = deduped[:limit_per_bucket]

        if fill_shortfalls and len(selected) < limit_per_bucket:
            selected_keys = {unique_article_key(article) for article in selected}
            broad_articles = [
                article
                for article in filter_by_age(all_articles, now, fallback_min_age_hours, fallback_max_age_hours)
                if article.bucket == bucket
                and political_charge_score(article) < max_political_score
                and unique_article_key(article) not in selected_keys
            ]
            if bucket == "random":
                rng.shuffle(broad_articles)
            broad_articles = sorted(broad_articles, key=lambda article: article_rank(article, now))
            selected = remove_redundant_articles(
                list(selected) + broad_articles,
                similarity_threshold,
            )[:limit_per_bucket]

        curated.extend(selected)
    return curated


def fetch_url(url: str, timeout: int = 15) -> bytes:
    request = Request(
        url,
        headers={
            "User-Agent": "morning.py/1.0 (+https://example.local/morning-news)",
            "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*",
        },
    )
    with urlopen(request, timeout=timeout) as response:
        return response.read()


def _clean_https_url(raw_url: str) -> str:
    value = (raw_url or "").strip()
    if not value:
        return ""

    parsed = urlparse(value)
    if parsed.scheme != "https" or not parsed.netloc:
        return ""
    return value


def is_broad_article_url(url: str) -> bool:
    parsed = urlparse(url)
    host = parsed.netloc.lower().removeprefix("www.")
    path = parsed.path.rstrip("/").lower()
    query = parsed.query.lower()

    if host == "scholar.google.com":
        return True
    if host == "news.google.com":
        return not re.search(r"/(?:rss/)?articles(?:/|$)", path)
    if path in {"", "/"}:
        return True
    if re.search(r"(^|&)q=", query):
        return True
    return any(
        re.search(pattern, path)
        for pattern in (
            r"/search/?$",
            r"/category(?:/|$)",
            r"/topic(?:/|$)",
            r"/hub(?:/|$)",
            r"/news/?$",
            r"/discover/blog/?$",
            r"/research/?$",
            r"/vertical(?:/|$)",
        )
    )


def normalize_article_url(raw_url: str) -> str:
    url = _clean_https_url(raw_url)
    if not url or is_broad_article_url(url):
        return ""
    return url


def is_redirect_article_url(url: str) -> bool:
    parsed = urlparse(url)
    host = parsed.netloc.lower().removeprefix("www.")
    path = parsed.path.rstrip("/").lower()
    return host == "news.google.com" and bool(re.search(r"/(?:rss/)?articles(?:/|$)", path))


def normalize_source_home_url(raw_url: str) -> str:
    return _clean_https_url(raw_url)


def source_home_from_article_url(article_url: str) -> str:
    parsed = urlparse(article_url)
    if parsed.scheme != "https" or not parsed.netloc:
        return ""
    return f"{parsed.scheme}://{parsed.netloc}"


def check_url(url: str, timeout: int = 10) -> LinkCheck:
    for method in ("HEAD", "GET"):
        request = Request(
            url,
            method=method,
            headers={
                "User-Agent": "Mozilla/5.0 (compatible; MorningNewsLinkCheck/1.0)",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
        )
        try:
            with urlopen(request, timeout=timeout) as response:
                status = getattr(response, "status", response.getcode())
                final_url = response.geturl() or url
                return LinkCheck(200 <= status < 400, final_url, status, "")
        except HTTPError as exc:
            if method == "HEAD" and exc.code in {403, 405, 429}:
                continue
            return LinkCheck(False, getattr(exc, "url", url) or url, exc.code, str(exc.reason))
        except (TimeoutError, URLError, OSError) as exc:
            if method == "HEAD":
                continue
            return LinkCheck(False, url, None, str(exc))
    return LinkCheck(False, url, None, "unreachable")


def verified_articles(
    articles: Sequence[Article],
    timeout: int = 10,
    checker=check_url,
) -> Tuple[List[Article], List[str]]:
    kept: List[Article] = []
    warnings: List[str] = []

    for article in articles:
        article_url = normalize_article_url(article.url)
        if not article_url:
            warnings.append(f"{article.title}: skipped broad or invalid article URL")
            continue

        article_check = checker(article_url, timeout=timeout)
        final_article_url = normalize_article_url(article_check.url)
        if is_redirect_article_url(final_article_url):
            final_article_url = ""
        if not article_check.ok or not final_article_url:
            status = article_check.status if article_check.status is not None else article_check.error
            warnings.append(f"{article.title}: skipped dead article URL ({status})")
            continue

        source_url = normalize_source_home_url(article.source_url) or source_home_from_article_url(final_article_url)
        if source_url:
            source_check = checker(source_url, timeout=timeout)
            source_url = normalize_source_home_url(source_check.url) if source_check.ok else ""

        kept.append(replace(article, url=final_article_url, source_url=source_url))

    return kept, warnings


def first_text(element: ElementTree.Element, paths: Sequence[str]) -> str:
    for path in paths:
        found = element.find(path)
        if found is not None and found.text:
            return strip_html(found.text)
    return ""


def item_source_metadata(item: ElementTree.Element, fallback: str) -> Tuple[str, str]:
    source = item.find("source")
    if source is None:
        return fallback, ""

    source_name = strip_html(source.text or "") or fallback
    source_url = source.attrib.get("url", "")
    return source_name, source_url


def atom_link(entry: ElementTree.Element) -> str:
    atom = "{http://www.w3.org/2005/Atom}"
    for link in entry.findall(f"{atom}link"):
        href = link.attrib.get("href", "")
        rel = link.attrib.get("rel", "alternate")
        if href and rel == "alternate":
            return href
    link = entry.find(f"{atom}link")
    return link.attrib.get("href", "") if link is not None else ""


def parse_feed(xml_bytes: bytes, bucket: str, source_hint: str = "") -> List[Article]:
    root = ElementTree.fromstring(xml_bytes)
    atom = "{http://www.w3.org/2005/Atom}"

    channel_title = first_text(root, ["channel/title", f"{atom}title"]) or source_hint
    articles: List[Article] = []

    for item in root.findall(".//item"):
        title = first_text(item, ["title"])
        url = first_text(item, ["link", "guid"])
        published = parse_datetime(first_text(item, ["pubDate", "date", "published", "updated"]))
        if not title or not url or published is None:
            continue
        source, source_url = item_source_metadata(item, channel_title or source_hint or "RSS")
        summary = first_text(item, ["description", "summary"])
        articles.append(Article(title, url, source, published, bucket, summary, source_url))

    for entry in root.findall(f".//{atom}entry"):
        title = first_text(entry, [f"{atom}title"])
        url = atom_link(entry) or first_text(entry, [f"{atom}id"])
        published = parse_datetime(
            first_text(entry, [f"{atom}published", f"{atom}updated"])
        )
        if not title or not url or published is None:
            continue
        summary = first_text(entry, [f"{atom}summary", f"{atom}content"])
        articles.append(Article(title, url, channel_title or source_hint or "Atom", published, bucket, summary))

    return articles


def google_news_search_url(query: str) -> str:
    return "https://news.google.com/rss/search?" + urlencode(
        {"q": query, "hl": "en-US", "gl": "US", "ceid": "US:en"}
    )


def fetch_feeds(
    feeds: Sequence[Tuple[str, str]],
    bucket: str,
    timeout: int,
) -> Tuple[List[Article], List[str]]:
    articles: List[Article] = []
    warnings: List[str] = []
    for label, url in feeds:
        try:
            articles.extend(parse_feed(fetch_url(url, timeout), bucket, label))
        except Exception as exc:  # Keep one bad feed from ruining the morning run.
            warnings.append(f"{label}: {exc}")
    return articles, warnings


def parse_url_list(raw: str) -> List[str]:
    return [part.strip() for part in re.split(r"[,\n;]+", raw or "") if part.strip()]


def read_env_file(env_file: str = ".env") -> dict:
    path = Path(env_file)
    if not path.exists():
        return {}

    values = {}
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def scholar_feeds_from_config(
    explicit_urls: Optional[Sequence[str]] = None,
    env: Optional[dict] = None,
    env_file: str = ".env",
) -> List[Tuple[str, str]]:
    urls = list(explicit_urls or [])
    if not urls:
        env_values = os.environ if env is None else env
        raw = env_values.get("GOOGLE_SCHOLAR_RSS_URLS", "")
        if not raw:
            raw = read_env_file(env_file).get("GOOGLE_SCHOLAR_RSS_URLS", "")
        urls = parse_url_list(raw)
    return [(f"Google Scholar alert {index + 1}", url) for index, url in enumerate(urls)]


def scholar_feeds_from_env() -> List[Tuple[str, str]]:
    return scholar_feeds_from_config()


def default_scholar_fallback_feeds() -> List[Tuple[str, str]]:
    queries = [
        'all:"machine learning"',
        'all:"public health"',
        'all:"climate model"',
        'all:"battery materials"',
        'all:"quantum"',
    ]
    feeds = []
    for query in queries:
        params = urlencode(
            {
                "search_query": query,
                "start": 0,
                "max_results": 30,
                "sortBy": "lastUpdatedDate",
                "sortOrder": "descending",
            }
        )
        feeds.append((f"arXiv scholarly fallback: {query}", f"https://export.arxiv.org/api/query?{params}"))
    return feeds


def random_news_feeds(seed: Optional[int] = None) -> List[Tuple[str, str]]:
    direct_feeds = [
        ("Smithsonian Smart News", "https://www.smithsonianmag.com/rss/smart-news/"),
        ("The Verge", "https://www.theverge.com/rss/index.xml"),
        ("Eater", "https://www.eater.com/rss/index.xml"),
        ("BBC News", "https://feeds.bbci.co.uk/news/rss.xml"),
        ("NPR News", "https://feeds.npr.org/1001/rss.xml"),
        ("Quanta Magazine", "https://www.quantamagazine.org/feed/"),
    ]
    topics = [
        "technology when:12h",
        "business when:12h",
        "health when:12h",
        "education when:12h",
        "culture when:12h",
        "travel when:12h",
        "climate when:12h",
        "space when:12h",
        "sports when:12h",
        "economy when:12h",
        "architecture when:12h",
        "food when:12h",
        "transportation when:12h",
    ]
    rng = random.Random(seed)
    rng.shuffle(direct_feeds)
    rng.shuffle(topics)
    google_feeds = [(f"Google News random: {topic}", google_news_search_url(topic)) for topic in topics]
    return direct_feeds + google_feeds


def science_news_feeds() -> List[Tuple[str, str]]:
    return [
        ("Google News science", google_news_search_url("science research when:12h")),
        ("Google News space", google_news_search_url("space astronomy when:12h")),
        ("Google News medicine", google_news_search_url("medicine biology when:12h")),
        ("ScienceDaily", "https://www.sciencedaily.com/rss/top/science.xml"),
        ("NASA breaking news", "https://www.nasa.gov/rss/dyn/breaking_news.rss"),
        ("Nature", "https://www.nature.com/nature.rss"),
    ]


def ai_news_feeds(seed: Optional[int] = None) -> List[Tuple[str, str]]:
    direct_feeds = [
        ("MIT AI News", "https://news.mit.edu/rss/topic/artificial-intelligence2"),
        ("MIT Research News", "https://news.mit.edu/rss/research"),
        ("OpenAI News", "https://openai.com/news/rss.xml"),
    ]
    topics = [
        "artificial intelligence breakthrough research when:12h",
        "AI agents reasoning benchmark when:12h",
        "large language model release when:12h",
        "AI safety alignment research when:12h",
        "OpenAI Anthropic Google DeepMind when:12h",
        "robotics artificial intelligence when:12h",
        "AI chip inference model when:12h",
        "open source AI model when:12h",
    ]
    rng = random.Random(seed)
    rng.shuffle(direct_feeds)
    rng.shuffle(topics)
    google_feeds = [(f"Google News AI: {topic}", google_news_search_url(topic)) for topic in topics]
    return direct_feeds + google_feeds


def gather_live_articles(
    timeout: int = 15,
    seed: Optional[int] = None,
    scholar_rss_urls: Optional[Sequence[str]] = None,
    env_file: str = ".env",
) -> Tuple[List[Article], List[str]]:
    warnings: List[str] = []
    all_articles: List[Article] = []

    scholar_feeds = scholar_feeds_from_config(scholar_rss_urls, env_file=env_file)
    if not scholar_feeds:
        warnings.append(
            "Google Scholar RSS is not configured. Add GOOGLE_SCHOLAR_RSS_URLS to .env, set it in the shell, or pass --scholar-rss-url. Using arXiv scholarly fallback feeds for the scholar bucket."
        )
        scholar_feeds = default_scholar_fallback_feeds()

    for feeds, bucket in (
        (scholar_feeds, "scholar"),
        (random_news_feeds(seed), "random"),
        (science_news_feeds(), "science"),
        (ai_news_feeds(seed), "ai"),
    ):
        articles, feed_warnings = fetch_feeds(feeds, bucket, timeout)
        all_articles.extend(articles)
        warnings.extend(feed_warnings)

    return all_articles, warnings


def sample_articles(now: Optional[datetime] = None) -> List[Article]:
    now = normalize_datetime(now or utc_now())
    articles: List[Article] = []
    for bucket in BUCKETS:
        for index in range(14):
            articles.append(
                Article(
                    title=f"{bucket_label(bucket)} article {index}: measured development",
                    url=f"https://example.com/{bucket}/{index}",
                    source="Sample Feed",
                    published=now - timedelta(hours=11, minutes=index % 15),
                    bucket=bucket,
                    summary="A balanced sample item used for offline checks.",
                )
            )
    articles.extend(
        [
            Article(
                "Corrupt radical regime launches outrageous attack",
                "https://example.com/noisy",
                "Sample Feed",
                now - timedelta(hours=11),
                "random",
                "Politically loaded sample headline.",
            ),
            Article(
                "Science article 1: measured development in new survey",
                "https://example.com/science/duplicate",
                "Sample Feed",
                now - timedelta(hours=11),
                "science",
                "Duplicate-style sample headline.",
            ),
        ]
    )
    return articles


def format_text(articles: Sequence[Article], now: datetime) -> str:
    lines = [
        "Morning News",
        f"Generated: {normalize_datetime(now).isoformat()}",
        "",
    ]
    for bucket in BUCKETS:
        bucket_articles = [article for article in articles if article.bucket == bucket]
        lines.append(f"{bucket_label(bucket)} ({len(bucket_articles)})")
        for index, article in enumerate(bucket_articles, start=1):
            age = article.age_hours(now)
            lines.append(f"{index:02d}. {article.title}")
            lines.append(f"    Source: {article.source} | Age: {age:.1f}h | Score: {political_charge_score(article)}")
            lines.append(f"    {article.url}")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def format_markdown(articles: Sequence[Article], now: datetime) -> str:
    lines = [
        "# Morning News",
        "",
        f"Generated: `{normalize_datetime(now).isoformat()}`",
        "",
    ]
    for bucket in BUCKETS:
        bucket_articles = [article for article in articles if article.bucket == bucket]
        lines.append(f"## {bucket_label(bucket)} ({len(bucket_articles)})")
        lines.append("")
        for index, article in enumerate(bucket_articles, start=1):
            age = article.age_hours(now)
            lines.append(f"{index}. [{article.title}]({article.url})")
            lines.append(
                f"   Source: {article.source}; age: {age:.1f}h; political charge score: {political_charge_score(article)}"
            )
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def format_json(articles: Sequence[Article], now: datetime, warnings: Sequence[str]) -> str:
    return json.dumps(
        {
            "generated": normalize_datetime(now).isoformat(),
            "counts": {
                bucket: sum(1 for article in articles if article.bucket == bucket)
                for bucket in BUCKETS
            },
            "warnings": list(warnings),
            "articles": [article.as_json() for article in articles],
        },
        indent=2,
    ) + "\n"


def article_static_record(article: Article, now: datetime) -> dict:
    record = {
        "bucket": article.bucket,
        "title": article.title,
        "articleUrl": article.url,
        "sourceName": source_display_name(article),
        "sourceHomeUrl": article.source_url,
        "ageHours": round(article.age_hours(now), 1),
        "summary": article.summary,
    }
    if article.bucket == "ai":
        record["interest"] = ai_compelling_score(article)
    else:
        record["charge"] = political_charge_score(article)
    return record


def articles_static_payload(
    articles: Sequence[Article],
    now: datetime,
    limit_per_bucket: int = DEFAULT_LIMIT_PER_BUCKET,
    random_pool_size: int = DEFAULT_RANDOM_POOL_SIZE,
) -> dict:
    now = normalize_datetime(now)
    sections = {
        bucket: [
            article_static_record(article, now)
            for article in articles
            if article.bucket == bucket
        ][:limit_per_bucket]
        for bucket in BUCKETS
        if bucket != "random"
    }
    random_pool = [
        article_static_record(article, now)
        for article in articles
        if article.bucket == "random"
    ][:max(limit_per_bucket, random_pool_size)]

    return {
        "generatedAt": now.isoformat(),
        "buckets": list(BUCKETS),
        "sections": sections,
        "randomPool": random_pool,
    }


def format_articles_js(
    articles: Sequence[Article],
    now: datetime,
    limit_per_bucket: int = DEFAULT_LIMIT_PER_BUCKET,
    random_pool_size: int = DEFAULT_RANDOM_POOL_SIZE,
) -> str:
    payload = articles_static_payload(
        articles,
        now,
        limit_per_bucket=limit_per_bucket,
        random_pool_size=random_pool_size,
    )
    data = json.dumps(payload, indent=2, ensure_ascii=True)
    return f"window.MORNING_NEWS_DATA = Object.freeze({data});\n"


def parse_articles_js_payload(text: str) -> dict:
    match = re.search(r"Object\.freeze\((.*)\);\s*$", text, flags=re.S)
    if not match:
        return {}
    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError:
        return {}


def articles_from_static_payload(payload: dict, now: datetime) -> List[Article]:
    articles: List[Article] = []
    now = normalize_datetime(now)
    records = []
    for bucket_records in (payload.get("sections") or {}).values():
        if isinstance(bucket_records, list):
            records.extend(bucket_records)
    random_pool = payload.get("randomPool")
    if isinstance(random_pool, list):
        records.extend(random_pool)

    for record in records:
        article_url = normalize_article_url(record.get("articleUrl", ""))
        if not article_url:
            continue
        age_hours = record.get("ageHours", 0)
        try:
            published = now - timedelta(hours=float(age_hours))
        except (TypeError, ValueError):
            published = now
        articles.append(
            Article(
                title=record.get("title", ""),
                url=article_url,
                source=record.get("sourceName", ""),
                source_url=normalize_source_home_url(record.get("sourceHomeUrl", "")),
                published=published,
                bucket=record.get("bucket", "random"),
                summary=record.get("summary", ""),
            )
        )
    return articles


def fill_articles_from_fallback(
    articles: Sequence[Article],
    fallback_articles: Sequence[Article],
    target_by_bucket: dict,
) -> List[Article]:
    filled = list(articles)
    seen = {(article.bucket, unique_article_key(article)) for article in filled}

    for bucket, target in target_by_bucket.items():
        bucket_count = sum(1 for article in filled if article.bucket == bucket)
        for article in fallback_articles:
            if bucket_count >= target:
                break
            key = (article.bucket, unique_article_key(article))
            if article.bucket != bucket or key in seen:
                continue
            filled.append(article)
            seen.add(key)
            bucket_count += 1
    return filled


def fallback_articles_from_output(output_path: Optional[str], now: datetime) -> List[Article]:
    if not output_path:
        return []
    path = Path(output_path)
    if not path.exists():
        return []
    return articles_from_static_payload(parse_articles_js_payload(path.read_text(encoding="utf-8")), now)


def article_routes(articles: Sequence[Article]) -> List[Tuple[str, Article, int]]:
    routes: List[Tuple[str, Article, int]] = []
    bucket_indexes = {bucket: 0 for bucket in BUCKETS}
    for article in articles:
        index = bucket_indexes.get(article.bucket, 0)
        bucket_indexes[article.bucket] = index + 1
        routes.append((f"{article.bucket}-{index}", article, index + 1))
    return routes


def format_html_legacy(
    articles: Sequence[Article],
    now: datetime,
    warnings: Sequence[str] = (),
) -> str:
    now = normalize_datetime(now)
    routes = article_routes(articles)
    counts = {bucket: sum(1 for article in articles if article.bucket == bucket) for bucket in BUCKETS}
    first_route = routes[0][0] if routes else ""

    warning_html = ""
    if warnings:
        warning_items = "\n".join(f"<li>{escape(warning)}</li>" for warning in warnings)
        warning_html = f"""
        <section class="notice" aria-label="Run warnings">
          <strong>Run notes</strong>
          <ul>{warning_items}</ul>
        </section>
        """

    bucket_nav = "\n".join(
        f"""
        <a class="bucket-link" href="#{bucket}-0" data-bucket-link="{bucket}">
          <span>{escape(bucket.title())}</span>
          <strong>{counts[bucket]}</strong>
        </a>
        """
        for bucket in BUCKETS
    )

    list_groups = []
    for bucket in BUCKETS:
        group_items = []
        for route, article, index in routes:
            if article.bucket != bucket:
                continue
            group_items.append(
                f"""
                <a class="article-row" href="#{route}" data-route="{route}">
                  <span class="article-index">{index:02d}</span>
                  <span class="article-row-main">
                    <strong>{escape(article.title)}</strong>
                    <small>{escape(article.source)} - {article.age_hours(now):.1f}h old</small>
                  </span>
                  <span class="score" title="Political charge score">{political_charge_score(article)}</span>
                </a>
                """
            )
        list_groups.append(
            f"""
            <section class="article-group" id="{bucket}">
              <h2>{escape(bucket.title())}</h2>
              <div class="article-list">
                {''.join(group_items) if group_items else '<p class="empty">No articles survived filtering.</p>'}
              </div>
            </section>
            """
        )

    detail_panels = []
    for route, article, index in routes:
        detail_panels.append(
            f"""
            <article class="detail-panel" data-detail="{route}" hidden>
              <div class="detail-kicker">{escape(article.bucket.title())} / Article {index:02d}</div>
              <h2>{escape(article.title)}</h2>
              <p class="summary">{escape(article.summary or 'No summary was provided by this feed.')}</p>
              <dl>
                <div>
                  <dt>Source</dt>
                  <dd>{escape(article.source)}</dd>
                </div>
                <div>
                  <dt>Published</dt>
                  <dd>{escape(article.published.isoformat())}</dd>
                </div>
                <div>
                  <dt>Age</dt>
                  <dd>{article.age_hours(now):.1f} hours</dd>
                </div>
                <div>
                  <dt>Charge score</dt>
                  <dd>{political_charge_score(article)}</dd>
                </div>
              </dl>
              <a class="read-link" href="{escape(article.url, quote=True)}" target="_blank" rel="noopener noreferrer">Open article</a>
            </article>
            """
        )

    empty_detail = """
      <article class="detail-panel is-active">
        <div class="detail-kicker">No results</div>
        <h2>No articles matched this run.</h2>
        <p class="summary">Try a wider age window or run again when more feeds have fresh items.</p>
      </article>
    """ if not routes else ""

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Morning News</title>
  <style>
    :root {{
      color-scheme: light;
      --bg: #f7faf9;
      --ink: #111827;
      --muted: #667085;
      --line: #d8dee5;
      --panel: #ffffff;
      --accent: #0f766e;
      --accent-strong: #115e59;
      --sun: #f97316;
      --blue: #2563eb;
      --shadow: 0 18px 45px rgba(17, 24, 39, 0.08);
    }}

    * {{
      box-sizing: border-box;
    }}

    body {{
      margin: 0;
      min-height: 100vh;
      background:
        linear-gradient(180deg, rgba(249, 115, 22, 0.08), rgba(15, 118, 110, 0.04) 34%, rgba(247, 250, 249, 0) 62%),
        var(--bg);
      color: var(--ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: 0;
    }}

    a {{
      color: inherit;
      text-decoration: none;
    }}

    .topbar {{
      position: sticky;
      top: 0;
      z-index: 10;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: center;
      padding: 18px clamp(18px, 4vw, 48px);
      border-bottom: 1px solid rgba(216, 222, 229, 0.8);
      background: rgba(247, 250, 249, 0.88);
      backdrop-filter: blur(14px);
    }}

    .brand h1 {{
      margin: 0;
      font-size: clamp(28px, 4vw, 48px);
      line-height: 1;
      font-weight: 760;
    }}

    .brand p {{
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 14px;
    }}

    .nav-controls {{
      display: flex;
      align-items: center;
      gap: 10px;
    }}

    .icon-button {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-width: 106px;
      height: 42px;
      padding: 0 14px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--panel);
      color: var(--ink);
      font: inherit;
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 8px 20px rgba(17, 24, 39, 0.05);
      cursor: pointer;
    }}

    .icon-button:hover,
    .icon-button:focus-visible {{
      border-color: var(--accent);
      outline: none;
    }}

    .icon-button svg {{
      width: 17px;
      height: 17px;
      stroke-width: 2.4;
    }}

    .shell {{
      display: grid;
      grid-template-columns: minmax(150px, 0.65fr) minmax(300px, 1.25fr) minmax(320px, 1fr);
      gap: 22px;
      max-width: 1500px;
      margin: 0 auto;
      padding: 26px clamp(18px, 4vw, 48px) 46px;
    }}

    .rail,
    .list-column,
    .detail-column {{
      min-width: 0;
    }}

    .rail {{
      position: sticky;
      top: 104px;
      height: max-content;
      display: grid;
      gap: 10px;
    }}

    .bucket-link {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 52px;
      padding: 12px 14px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.72);
      color: var(--muted);
      font-weight: 700;
    }}

    .bucket-link strong {{
      color: var(--ink);
      font-size: 18px;
    }}

    .bucket-link.is-active {{
      border-color: rgba(15, 118, 110, 0.45);
      background: rgba(15, 118, 110, 0.1);
      color: var(--accent-strong);
    }}

    .notice {{
      margin-bottom: 16px;
      padding: 14px;
      border: 1px solid rgba(249, 115, 22, 0.32);
      border-radius: 8px;
      background: rgba(249, 115, 22, 0.08);
      color: #7c2d12;
      font-size: 14px;
    }}

    .notice ul {{
      margin: 8px 0 0;
      padding-left: 20px;
    }}

    .article-group {{
      margin-bottom: 24px;
    }}

    .article-group h2 {{
      margin: 0 0 10px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
    }}

    .article-list {{
      display: grid;
      gap: 8px;
    }}

    .article-row {{
      display: grid;
      grid-template-columns: 44px minmax(0, 1fr) 34px;
      gap: 12px;
      align-items: center;
      min-height: 78px;
      padding: 13px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.84);
    }}

    .article-row:hover,
    .article-row:focus-visible,
    .article-row.is-active {{
      border-color: rgba(15, 118, 110, 0.55);
      background: #ffffff;
      box-shadow: 0 10px 26px rgba(17, 24, 39, 0.07);
      outline: none;
    }}

    .article-index {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: #eff6ff;
      color: var(--blue);
      font-size: 13px;
      font-weight: 800;
    }}

    .article-row-main {{
      min-width: 0;
      display: grid;
      gap: 7px;
    }}

    .article-row-main strong {{
      overflow-wrap: anywhere;
      font-size: 15px;
      line-height: 1.25;
    }}

    .article-row-main small {{
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }}

    .score {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: rgba(15, 118, 110, 0.1);
      color: var(--accent-strong);
      font-size: 13px;
      font-weight: 800;
    }}

    .detail-column {{
      position: sticky;
      top: 104px;
      height: max-content;
    }}

    .detail-panel {{
      padding: clamp(22px, 3vw, 34px);
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--panel);
      box-shadow: var(--shadow);
    }}

    .detail-panel[hidden] {{
      display: none;
    }}

    .detail-kicker {{
      color: var(--accent-strong);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}

    .detail-panel h2 {{
      margin: 14px 0 14px;
      font-size: clamp(24px, 3.1vw, 38px);
      line-height: 1.06;
      letter-spacing: 0;
    }}

    .summary {{
      margin: 0;
      color: #344054;
      font-size: 16px;
      line-height: 1.65;
    }}

    dl {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin: 24px 0;
    }}

    dl div {{
      min-width: 0;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #f8fafc;
    }}

    dt {{
      margin-bottom: 6px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}

    dd {{
      margin: 0;
      overflow-wrap: anywhere;
      font-size: 14px;
      font-weight: 700;
    }}

    .read-link {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0 18px;
      border-radius: 8px;
      background: var(--ink);
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
    }}

    .empty {{
      margin: 0;
      padding: 18px;
      border: 1px dashed var(--line);
      border-radius: 8px;
      color: var(--muted);
      background: rgba(255, 255, 255, 0.6);
    }}

    @media (max-width: 1050px) {{
      .shell {{
        grid-template-columns: 160px minmax(0, 1fr);
      }}

      .detail-column {{
        grid-column: 1 / -1;
        position: static;
      }}
    }}

    @media (max-width: 720px) {{
      .topbar {{
        grid-template-columns: 1fr;
      }}

      .nav-controls {{
        width: 100%;
      }}

      .icon-button {{
        flex: 1;
      }}

      .shell {{
        grid-template-columns: 1fr;
      }}

      .rail {{
        position: static;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }}

      .bucket-link {{
        display: grid;
        justify-items: center;
        gap: 4px;
        text-align: center;
      }}

      .article-row {{
        grid-template-columns: 38px minmax(0, 1fr) 30px;
        gap: 9px;
      }}

      dl {{
        grid-template-columns: 1fr;
      }}
    }}
  </style>
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <h1>Morning News</h1>
      <p>{len(articles)} articles generated at {escape(now.isoformat())}</p>
    </div>
    <nav class="nav-controls" aria-label="History navigation">
      <button class="icon-button" id="backButton" type="button" title="Back">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"></path></svg>
        Back
      </button>
      <button class="icon-button" id="forwardButton" type="button" title="Forward">
        Forward
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6"></path></svg>
      </button>
    </nav>
  </header>
  <main class="shell">
    <aside class="rail" aria-label="Article buckets">
      {bucket_nav}
    </aside>
    <section class="list-column" aria-label="Article list">
      {warning_html}
      {''.join(list_groups)}
    </section>
    <section class="detail-column" aria-label="Article details">
      {''.join(detail_panels)}
      {empty_detail}
    </section>
  </main>
  <script>
    (function () {{
      const routes = Array.from(document.querySelectorAll("[data-route]")).map((node) => node.dataset.route);
      let currentIndex = 0;

      function routeFromHash() {{
        const hash = window.location.hash.replace(/^#/, "");
        return routes.includes(hash) ? hash : "{first_route}";
      }}

      function revealRoute(route) {{
        const activeRow = document.querySelector('[data-route="' + route + '"]');
        if (!activeRow) {{
          return;
        }}
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        activeRow.scrollIntoView({{ block: "nearest", inline: "nearest", behavior }});
      }}

      function setRoute(route, push, reveal) {{
        if (!route || !routes.includes(route)) {{
          return;
        }}
        currentIndex = routes.indexOf(route);
        document.querySelectorAll("[data-route]").forEach((node) => {{
          const active = node.dataset.route === route;
          node.classList.toggle("is-active", active);
          if (active) {{
            node.setAttribute("aria-current", "true");
          }} else {{
            node.removeAttribute("aria-current");
          }}
        }});
        document.querySelectorAll("[data-detail]").forEach((node) => {{
          node.hidden = node.dataset.detail !== route;
        }});
        const bucket = route.split("-")[0];
        document.querySelectorAll("[data-bucket-link]").forEach((node) => {{
          node.classList.toggle("is-active", node.dataset.bucketLink === bucket);
        }});
        if (push) {{
          history.pushState({{ route }}, "", "#" + route);
        }}
        if (reveal) {{
          revealRoute(route);
        }}
      }}

      function fallbackRoute(direction) {{
        if (!routes.length) {{
          return;
        }}
        const nextIndex = Math.max(0, Math.min(routes.length - 1, currentIndex + direction));
        setRoute(routes[nextIndex], true, true);
      }}

      function goBack() {{
        const before = window.location.hash;
        history.back();
        window.setTimeout(() => {{
          if (window.location.hash === before) {{
            fallbackRoute(-1);
          }}
        }}, 80);
      }}

      function goForward() {{
        const before = window.location.hash;
        history.forward();
        window.setTimeout(() => {{
          if (window.location.hash === before) {{
            fallbackRoute(1);
          }}
        }}, 80);
      }}

      document.querySelectorAll("[data-route]").forEach((node) => {{
        node.addEventListener("click", (event) => {{
          event.preventDefault();
          setRoute(node.dataset.route, true, true);
        }});
      }});

      document.querySelectorAll("[data-bucket-link]").forEach((node) => {{
        node.addEventListener("click", (event) => {{
          event.preventDefault();
          const bucketRoute = routes.find((route) => route.startsWith(node.dataset.bucketLink + "-"));
          if (bucketRoute) {{
            setRoute(bucketRoute, true, true);
          }}
        }});
      }});

      document.getElementById("backButton").addEventListener("click", goBack);
      document.getElementById("forwardButton").addEventListener("click", goForward);

      window.addEventListener("popstate", () => setRoute(routeFromHash(), false, true));
      document.addEventListener("keydown", (event) => {{
        const tag = event.target && event.target.tagName;
        const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag);
        if (isTyping || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {{
          return;
        }}
        if (event.key === "Backspace" || event.key === "ArrowLeft") {{
          event.preventDefault();
          goBack();
        }}
        if (event.key === "Enter" || event.key === "ArrowRight") {{
          event.preventDefault();
          goForward();
        }}
      }});

      setRoute(routeFromHash(), false, Boolean(window.location.hash));
      if (routes.length && !window.location.hash) {{
        history.replaceState({{ route: routes[0] }}, "", "#" + routes[0]);
      }}
    }})();
  </script>
</body>
</html>
"""


def write_or_print(content: str, output_path: Optional[str]) -> None:
    if output_path:
        with open(output_path, "w", encoding="utf-8") as handle:
            handle.write(content)
    else:
        print(content, end="")


def open_output_path(output_path: str) -> None:
    webbrowser.open(Path(output_path).resolve().as_uri())


def excerpt_sentences(text: str, max_sentences: int = 2, max_chars: int = 260) -> str:
    cleaned = " ".join(strip_html(text).split())
    if not cleaned:
        return "This feed did not provide a summary, so the headline and source carry the signal."

    pieces = [piece.strip() for piece in SENTENCE_RE.split(cleaned) if piece.strip()]
    excerpt = " ".join(pieces[:max_sentences]) if pieces else cleaned
    if len(excerpt) <= max_chars:
        return excerpt

    clipped = excerpt[: max_chars - 3].rstrip()
    if " " in clipped:
        clipped = clipped.rsplit(" ", 1)[0]
    return clipped + "..."


def hostname_from_url(url: str) -> str:
    try:
        host = urlparse(url).netloc.lower()
    except ValueError:
        return ""
    if host.startswith("www."):
        host = host[4:]
    return host


def is_pdf_publication(article: Article) -> bool:
    try:
        parsed = urlparse(article.url)
    except ValueError:
        return False
    path = parsed.path.lower()
    return path.endswith(".pdf") or "/pdf/" in path


def source_is_missing(source: str) -> bool:
    cleaned = " ".join((source or "").split()).lower()
    return cleaned in {"", "n/a", "na", "unknown", "rss", "atom", "feed", "sample feed"}


def source_display_name(article: Article) -> str:
    if is_pdf_publication(article) or source_is_missing(article.source):
        return "N/A"
    return article.source


def source_logo_url(article: Article) -> str:
    if is_pdf_publication(article) or source_is_missing(article.source):
        return ""

    host = hostname_from_url(article.source_url) or hostname_from_url(article.url)
    if not host:
        return ""
    return "https://www.google.com/s2/favicons?" + urlencode({"domain": host, "sz": 64})


def source_logo_markup(article: Article) -> str:
    display = source_display_name(article)
    logo_url = source_logo_url(article)
    if not logo_url:
        return '<span class="source-logo-na" aria-label="Source logo not available">N/A</span>'

    alt = f"Source logo for {display}"
    return (
        f'<img class="source-logo" src="{escape(logo_url, quote=True)}" '
        f'alt="{escape(alt, quote=True)}" loading="lazy" referrerpolicy="no-referrer">'
    )


def card_fit_class(title: str, excerpt: str) -> str:
    title_len = len(title)
    longest_word = max((len(word) for word in title.split()), default=0)
    density = title_len + int(len(excerpt) * 0.22) + max(0, longest_word - 18) * 3
    if density >= 130:
        return "fit-extreme"
    if density >= 96:
        return "fit-long"
    if density >= 72:
        return "fit-medium"
    return "fit-normal"


def format_html(
    articles: Sequence[Article],
    now: datetime,
    warnings: Sequence[str] = (),
) -> str:
    now = normalize_datetime(now)
    routes = article_routes(articles)
    counts = {bucket: sum(1 for article in articles if article.bucket == bucket) for bucket in BUCKETS}
    first_route = routes[0][0] if routes else ""

    warning_html = ""
    if warnings:
        warning_items = "\n".join(f"<li>{escape(warning)}</li>" for warning in warnings)
        warning_html = f"""
        <section class="notice" aria-label="Run warnings">
          <strong>Run notes</strong>
          <ul>{warning_items}</ul>
        </section>
        """

    bucket_nav = "\n".join(
        f"""
        <a class="bucket-link" href="#{bucket}-0" data-bucket-link="{bucket}">
          <span>{escape(bucket_label(bucket))}</span>
          <strong>{counts[bucket]}</strong>
        </a>
        """
        for bucket in BUCKETS
    )

    groups = []
    for bucket in BUCKETS:
        cards = []
        for route, article, index in routes:
            if article.bucket != bucket:
                continue
            base_excerpt = excerpt_sentences(article.summary)
            fit_class = card_fit_class(article.title, base_excerpt)
            excerpt_limit = 150 if fit_class == "fit-extreme" else 190 if fit_class == "fit-long" else 230
            excerpt = excerpt_sentences(article.summary, max_chars=excerpt_limit)
            fit_class = card_fit_class(article.title, excerpt)
            interesting = ai_compelling_score(article) if article.bucket == "ai" else political_charge_score(article)
            metric_label = "Interest" if article.bucket == "ai" else "Charge"
            source_name = source_display_name(article)
            source_logo = source_logo_markup(article)
            cards.append(
                f"""
                <article class="article-card {fit_class}" id="{route}" data-route="{route}" tabindex="0" role="link" aria-label="{escape(article.title, quote=True)}">
                  <div class="card-topline">
                    <span>{escape(bucket_label(article.bucket))} {index:02d}</span>
                    <span>{article.age_hours(now):.1f}h</span>
                  </div>
                  <div class="source-row">
                    {source_logo}
                    <span class="source-name">{escape(source_name)}</span>
                  </div>
                  <h3>{escape(article.title)}</h3>
                  <p>{escape(excerpt)}</p>
                  <div class="card-footer">
                    <span>{metric_label} {interesting}</span>
                  </div>
                  <a class="open-link" href="{escape(article.url, quote=True)}" target="_blank" rel="noopener noreferrer">Open article</a>
                </article>
                """
            )
        groups.append(
            f"""
            <section class="bucket-section" id="{bucket}" aria-labelledby="{bucket}-heading">
              <div class="section-heading">
                <h2 id="{bucket}-heading">{escape(bucket_label(bucket))}</h2>
                <span>{counts[bucket]} selected</span>
              </div>
              <div class="article-grid">
                {''.join(cards) if cards else '<p class="empty">No articles survived filtering for this section.</p>'}
              </div>
            </section>
            """
        )

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Morning News</title>
  <style>
    :root {{
      color-scheme: dark;
      --bg: #05070d;
      --panel: #0c111d;
      --panel-2: #111827;
      --ink: #f8fafc;
      --muted: #94a3b8;
      --line: rgba(148, 163, 184, 0.24);
      --line-bright: rgba(94, 234, 212, 0.72);
      --accent: #5eead4;
      --accent-2: #a78bfa;
      --gold: #f8d66d;
      --danger: #fb7185;
      --shadow: 0 28px 80px rgba(0, 0, 0, 0.42);
    }}

    * {{
      box-sizing: border-box;
    }}

    html {{
      scroll-behavior: smooth;
    }}

    body {{
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(circle at 15% 8%, rgba(94, 234, 212, 0.18), transparent 30%),
        radial-gradient(circle at 85% 0%, rgba(167, 139, 250, 0.18), transparent 26%),
        linear-gradient(180deg, #05070d 0%, #0a0f1d 42%, #05070d 100%);
      color: var(--ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      letter-spacing: 0;
    }}

    a {{
      color: inherit;
      text-decoration: none;
    }}

    .topbar {{
      position: sticky;
      top: 0;
      z-index: 20;
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 20px;
      align-items: center;
      padding: 22px clamp(18px, 3vw, 42px);
      border-bottom: 1px solid var(--line);
      background: rgba(5, 7, 13, 0.84);
      backdrop-filter: blur(18px);
    }}

    .brand h1 {{
      margin: 0;
      font-size: clamp(34px, 5vw, 72px);
      line-height: 0.92;
      font-weight: 850;
    }}

    .brand p {{
      margin: 10px 0 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
    }}

    .nav-controls {{
      display: flex;
      gap: 10px;
      align-items: center;
    }}

    .icon-button {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-width: 108px;
      height: 44px;
      padding: 0 14px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.88);
      color: var(--ink);
      font: inherit;
      font-size: 14px;
      font-weight: 800;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.24);
      cursor: pointer;
    }}

    .icon-button:hover,
    .icon-button:focus-visible {{
      border-color: var(--line-bright);
      outline: none;
    }}

    .icon-button svg {{
      width: 17px;
      height: 17px;
      stroke-width: 2.4;
    }}

    .shell {{
      width: 100%;
      padding: 22px clamp(14px, 2.3vw, 34px) 42px;
    }}

    .bucket-nav {{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }}

    .bucket-link {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 62px;
      padding: 14px 16px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(12, 17, 29, 0.84);
      color: var(--muted);
      font-size: 15px;
      font-weight: 800;
    }}

    .bucket-link strong {{
      color: var(--ink);
      font-size: 22px;
    }}

    .bucket-link.is-active {{
      border-color: var(--line-bright);
      color: var(--accent);
      background: linear-gradient(135deg, rgba(94, 234, 212, 0.14), rgba(167, 139, 250, 0.12));
    }}

    .notice {{
      margin: 0 0 18px;
      padding: 14px 16px;
      border: 1px solid rgba(248, 214, 109, 0.34);
      border-radius: 8px;
      background: rgba(248, 214, 109, 0.08);
      color: #fde68a;
      font-size: 14px;
    }}

    .notice ul {{
      margin: 8px 0 0;
      padding-left: 20px;
    }}

    .bucket-section {{
      margin-top: 28px;
    }}

    .section-heading {{
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 12px;
      border-top: 1px solid var(--line);
      padding-top: 20px;
    }}

    .section-heading h2 {{
      margin: 0;
      font-size: clamp(22px, 3vw, 34px);
      line-height: 1;
      font-weight: 820;
    }}

    .section-heading span {{
      color: var(--muted);
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }}

    .article-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 14px;
      width: 100%;
    }}

    .article-card {{
      --card-gap: 10px;
      --card-pad: 18px;
      --title-size: clamp(19px, 1.35vw, 25px);
      --title-line: 1.04;
      --body-size: clamp(13px, 0.92vw, 15px);
      --body-line: 1.42;
      position: relative;
      display: grid;
      grid-template-rows: auto auto auto minmax(0, 1fr) auto auto;
      gap: var(--card-gap);
      aspect-ratio: 1 / 1;
      min-width: 0;
      padding: var(--card-pad);
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(17, 24, 39, 0.96), rgba(8, 13, 25, 0.96)),
        var(--panel);
      box-shadow: var(--shadow);
      cursor: pointer;
      scroll-margin-top: 168px;
    }}

    .article-card.fit-medium {{
      --title-size: clamp(17px, 1.18vw, 22px);
      --body-size: clamp(12px, 0.84vw, 14px);
      --card-gap: 9px;
    }}

    .article-card.fit-long {{
      --title-size: clamp(15px, 1.02vw, 19px);
      --body-size: clamp(11px, 0.78vw, 13px);
      --body-line: 1.34;
      --card-gap: 8px;
      --card-pad: 16px;
    }}

    .article-card.fit-extreme {{
      --title-size: clamp(12px, 0.86vw, 16px);
      --title-line: 1.02;
      --body-size: clamp(10px, 0.72vw, 12px);
      --body-line: 1.25;
      --card-gap: 7px;
      --card-pad: 14px;
    }}

    .article-card::before {{
      content: "";
      position: absolute;
      inset: 0;
      border-top: 3px solid transparent;
      background: linear-gradient(90deg, rgba(94, 234, 212, 0.0), rgba(167, 139, 250, 0.0));
      pointer-events: none;
    }}

    .article-card:hover,
    .article-card:focus-visible,
    .article-card.is-active {{
      border-color: var(--line-bright);
      outline: none;
      transform: translateY(-2px);
    }}

    .article-card.is-active::before {{
      border-top-color: var(--accent);
      background: linear-gradient(135deg, rgba(94, 234, 212, 0.12), rgba(167, 139, 250, 0.1));
    }}

    .card-topline,
    .card-footer {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 850;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}

    .source-row {{
      display: flex;
      align-items: center;
      gap: 9px;
      min-width: 0;
      min-height: 34px;
    }}

    .source-logo {{
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      padding: 4px;
      border: 1px solid rgba(248, 250, 252, 0.16);
      border-radius: 8px;
      background: rgba(248, 250, 252, 0.94);
      object-fit: contain;
    }}

    .source-logo-na {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 30px;
      flex: 0 0 34px;
      border: 1px solid rgba(148, 163, 184, 0.28);
      border-radius: 8px;
      background: rgba(15, 23, 42, 0.84);
      color: var(--muted);
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 0.04em;
    }}

    .source-name {{
      min-width: 0;
      overflow-wrap: anywhere;
      color: #dbeafe;
      font-size: 12px;
      font-weight: 850;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}

    .article-card h3 {{
      margin: 0;
      overflow-wrap: anywhere;
      font-size: var(--title-size);
      line-height: var(--title-line);
      font-weight: 860;
    }}

    .article-card p {{
      margin: 0;
      min-height: 0;
      overflow-wrap: anywhere;
      color: #cbd5e1;
      font-size: var(--body-size);
      line-height: var(--body-line);
    }}

    .open-link {{
      position: relative;
      z-index: 2;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      padding: 0 12px;
      border: 1px solid rgba(248, 250, 252, 0.14);
      border-radius: 8px;
      background: rgba(248, 250, 252, 0.08);
      color: var(--ink);
      font-size: 13px;
      font-weight: 850;
    }}

    .open-link:hover,
    .open-link:focus-visible {{
      border-color: var(--accent);
      outline: none;
    }}

    .empty {{
      margin: 0;
      padding: 18px;
      border: 1px dashed var(--line);
      border-radius: 8px;
      color: var(--muted);
      background: rgba(12, 17, 29, 0.72);
    }}

    @media (max-width: 900px) {{
      .topbar {{
        grid-template-columns: 1fr;
      }}

      .nav-controls {{
        width: 100%;
      }}

      .icon-button {{
        flex: 1;
      }}

      .bucket-nav {{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }}
    }}

    @media (max-width: 560px) {{
      .shell {{
        padding-inline: 12px;
      }}

      .bucket-nav {{
        grid-template-columns: 1fr 1fr;
      }}

      .article-grid {{
        grid-template-columns: 1fr;
      }}
    }}
  </style>
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <h1>Morning News</h1>
      <p>{len(articles)} articles generated at {escape(now.isoformat())}</p>
    </div>
    <nav class="nav-controls" aria-label="History navigation">
      <button class="icon-button" id="backButton" type="button" title="Back">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6"></path></svg>
        Back
      </button>
      <button class="icon-button" id="forwardButton" type="button" title="Forward">
        Forward
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6"></path></svg>
      </button>
    </nav>
  </header>
  <main class="shell">
    <nav class="bucket-nav" aria-label="Article buckets">
      {bucket_nav}
    </nav>
    {warning_html}
    {''.join(groups)}
  </main>
  <script>
    (function () {{
      const routes = Array.from(document.querySelectorAll("[data-route]")).map((node) => node.dataset.route);
      let currentIndex = 0;

      function pxValue(value) {{
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : 0;
      }}

      function fitCardText(card) {{
        const title = card.querySelector("h3");
        const summary = card.querySelector("p");
        if (!title || !summary) {{
          return;
        }}

        title.style.fontSize = "";
        summary.style.fontSize = "";
        summary.style.lineHeight = "";

        let titleSize = pxValue(window.getComputedStyle(title).fontSize);
        let summarySize = pxValue(window.getComputedStyle(summary).fontSize);
        let summaryLine = pxValue(window.getComputedStyle(summary).lineHeight);

        for (let step = 0; step < 18 && card.scrollHeight > card.clientHeight; step += 1) {{
          if (titleSize > 11) {{
            titleSize -= 1;
            title.style.fontSize = titleSize + "px";
          }}
          if (summarySize > 10 && step % 2 === 0) {{
            summarySize -= 1;
            summary.style.fontSize = summarySize + "px";
          }}
          if (summaryLine > summarySize * 1.15) {{
            summaryLine -= 1;
            summary.style.lineHeight = summaryLine + "px";
          }}
        }}
      }}

      function fitAllCards() {{
        document.querySelectorAll(".article-card").forEach(fitCardText);
      }}

      function routeFromHash() {{
        const hash = window.location.hash.replace(/^#/, "");
        return routes.includes(hash) ? hash : "{first_route}";
      }}

      function revealRoute(route) {{
        const activeCard = document.querySelector('[data-route="' + route + '"]');
        if (!activeCard) {{
          return;
        }}
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        activeCard.scrollIntoView({{ block: "center", inline: "nearest", behavior }});
      }}

      function setRoute(route, push, reveal) {{
        if (!route || !routes.includes(route)) {{
          return;
        }}
        currentIndex = routes.indexOf(route);
        document.querySelectorAll("[data-route]").forEach((node) => {{
          const active = node.dataset.route === route;
          node.classList.toggle("is-active", active);
          if (active) {{
            node.setAttribute("aria-current", "true");
          }} else {{
            node.removeAttribute("aria-current");
          }}
        }});
        const bucket = route.split("-")[0];
        document.querySelectorAll("[data-bucket-link]").forEach((node) => {{
          node.classList.toggle("is-active", node.dataset.bucketLink === bucket);
        }});
        if (push) {{
          history.pushState({{ route }}, "", "#" + route);
        }}
        if (reveal) {{
          revealRoute(route);
        }}
      }}

      function fallbackRoute(direction) {{
        if (!routes.length) {{
          return;
        }}
        const nextIndex = Math.max(0, Math.min(routes.length - 1, currentIndex + direction));
        setRoute(routes[nextIndex], true, true);
      }}

      function goBack() {{
        const before = window.location.hash;
        history.back();
        window.setTimeout(() => {{
          if (window.location.hash === before) {{
            fallbackRoute(-1);
          }}
        }}, 80);
      }}

      function goForward() {{
        const before = window.location.hash;
        history.forward();
        window.setTimeout(() => {{
          if (window.location.hash === before) {{
            fallbackRoute(1);
          }}
        }}, 80);
      }}

      document.querySelectorAll("[data-route]").forEach((node) => {{
        node.addEventListener("click", (event) => {{
          if (event.target.closest("a")) {{
            return;
          }}
          setRoute(node.dataset.route, true, true);
        }});
        node.addEventListener("keydown", (event) => {{
          if (event.key === " " || event.key === "Spacebar") {{
            event.preventDefault();
            setRoute(node.dataset.route, true, true);
          }}
        }});
      }});

      document.querySelectorAll("[data-bucket-link]").forEach((node) => {{
        node.addEventListener("click", (event) => {{
          event.preventDefault();
          const bucketRoute = routes.find((route) => route.startsWith(node.dataset.bucketLink + "-"));
          if (bucketRoute) {{
            setRoute(bucketRoute, true, true);
          }}
        }});
      }});

      document.getElementById("backButton").addEventListener("click", goBack);
      document.getElementById("forwardButton").addEventListener("click", goForward);

      window.addEventListener("popstate", () => setRoute(routeFromHash(), false, true));
      document.addEventListener("keydown", (event) => {{
        const tag = event.target && event.target.tagName;
        const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag);
        if (isTyping || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {{
          return;
        }}
        if (event.key === "Backspace" || event.key === "ArrowLeft") {{
          event.preventDefault();
          goBack();
        }}
        if (event.key === "Enter" || event.key === "ArrowRight") {{
          event.preventDefault();
          goForward();
        }}
      }});

      fitAllCards();
      if (document.fonts && document.fonts.ready) {{
        document.fonts.ready.then(fitAllCards);
      }}
      let resizeTimer = 0;
      window.addEventListener("resize", () => {{
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(fitAllCards, 120);
      }});

      setRoute(routeFromHash(), false, Boolean(window.location.hash));
      if (routes.length && !window.location.hash) {{
        history.replaceState({{ route: routes[0] }}, "", window.location.pathname + window.location.search);
      }}
    }})();
  </script>
</body>
</html>
"""


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Curate 40 morning articles: 10 scholar, 10 random, 10 science, and 10 AI, "
            "prioritizing the 10-12 hour age window."
        )
    )
    parser.add_argument("--format", choices=("ui", "html", "text", "markdown", "json", "articles-js"), default="ui")
    parser.add_argument(
        "--output",
        help="Optional file path for the curated results. UI mode defaults to morning_news.html.",
    )
    parser.add_argument("--min-age-hours", type=float, default=10)
    parser.add_argument("--max-age-hours", type=float, default=12)
    parser.add_argument("--limit-per-bucket", type=int, default=DEFAULT_LIMIT_PER_BUCKET)
    parser.add_argument("--random-pool-size", type=int, default=DEFAULT_RANDOM_POOL_SIZE)
    parser.add_argument("--max-political-score", type=int, default=4)
    parser.add_argument("--similarity-threshold", type=float, default=0.78)
    parser.add_argument("--seed", type=int, help="Seed for random news source ordering.")
    parser.add_argument("--timeout", type=int, default=15, help="Network timeout per feed.")
    parser.add_argument(
        "--scholar-rss-url",
        action="append",
        default=[],
        help="Google Scholar alert RSS URL. Repeat for multiple alerts. Overrides .env/shell config.",
    )
    parser.add_argument(
        "--env-file",
        default=".env",
        help="Path to a .env file containing GOOGLE_SCHOLAR_RSS_URLS.",
    )
    parser.add_argument(
        "--strict-age",
        action="store_true",
        help="Do not fill short buckets from the broader recent fallback window.",
    )
    parser.add_argument(
        "--fallback-max-age-hours",
        type=float,
        default=36,
        help="Fallback age window used to fill short buckets when --strict-age is not set.",
    )
    parser.add_argument(
        "--sample",
        action="store_true",
        help="Use offline sample data instead of fetching live feeds.",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Exit non-zero if fewer than the requested articles survive filtering.",
    )
    parser.add_argument(
        "--no-open",
        action="store_true",
        help="Create the static UI file without opening it in a browser.",
    )
    parser.add_argument(
        "--validate-links",
        action="store_true",
        help="Validate article and source links before writing generated static data.",
    )
    return parser


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)

    now = utc_now()
    if args.sample:
        candidates = sample_articles(now)
        warnings: List[str] = []
    else:
        candidates, warnings = gather_live_articles(
            timeout=args.timeout,
            seed=args.seed,
            scholar_rss_urls=args.scholar_rss_url,
            env_file=args.env_file,
        )

    selection_limit = args.limit_per_bucket
    if args.format == "articles-js":
        selection_limit = max(args.limit_per_bucket, args.random_pool_size)

    strict_curated = curate_articles(
        candidates,
        now=now,
        limit_per_bucket=selection_limit,
        min_age_hours=args.min_age_hours,
        max_age_hours=args.max_age_hours,
        max_political_score=args.max_political_score,
        similarity_threshold=args.similarity_threshold,
        seed=args.seed,
    )
    curated = strict_curated

    if not args.strict_age:
        curated = curate_articles(
            candidates,
            now=now,
            limit_per_bucket=selection_limit,
            min_age_hours=args.min_age_hours,
            max_age_hours=args.max_age_hours,
            max_political_score=args.max_political_score,
            similarity_threshold=args.similarity_threshold,
            seed=args.seed,
            fill_shortfalls=True,
            fallback_max_age_hours=args.fallback_max_age_hours,
        )

    if args.format == "articles-js":
        target_by_bucket = {
            bucket: args.random_pool_size if bucket == "random" else args.limit_per_bucket
            for bucket in BUCKETS
        }
    else:
        target_by_bucket = {bucket: args.limit_per_bucket for bucket in BUCKETS}

    if args.validate_links:
        curated, link_warnings = verified_articles(curated, timeout=args.timeout)
        warnings.extend(link_warnings)
        if args.format == "articles-js":
            curated = fill_articles_from_fallback(
                curated,
                fallback_articles_from_output(args.output, now),
                target_by_bucket,
            )

    if args.format == "articles-js":
        target_count = args.limit_per_bucket * (len(BUCKETS) - 1) + args.random_pool_size
    else:
        target_count = args.limit_per_bucket * len(BUCKETS)
    strict_counts = {bucket: sum(1 for article in strict_curated if article.bucket == bucket) for bucket in BUCKETS}
    counts = {bucket: sum(1 for article in curated if article.bucket == bucket) for bucket in BUCKETS}
    if not args.strict_age:
        filled_buckets = [
            f"{bucket_label(bucket)} {strict_counts[bucket]}->{counts[bucket]}"
            for bucket in BUCKETS
            if counts[bucket] > strict_counts[bucket]
        ]
        if filled_buckets:
            warnings.append(
                "Some sections had fewer than requested items in the exact age window, so they were filled from the broader recent fallback window: "
                + ", ".join(filled_buckets)
                + ". Use --strict-age to disable this."
            )
    if len(curated) < target_count:
        warnings.append(
            f"Only {len(curated)} of {target_count} requested articles survived filtering: {counts}."
        )

    if args.format == "ui":
        output_path = args.output or "morning_news.html"
        content = format_html(curated, now, warnings)
        write_or_print(content, output_path)
        if not args.no_open:
            open_output_path(output_path)
    elif args.format == "html":
        content = format_html(curated, now, warnings)
        write_or_print(content, args.output)
    elif args.format == "json":
        content = format_json(curated, now, warnings)
        write_or_print(content, args.output)
    elif args.format == "articles-js":
        content = format_articles_js(
            curated,
            now,
            limit_per_bucket=args.limit_per_bucket,
            random_pool_size=args.random_pool_size,
        )
        write_or_print(content, args.output)
    elif args.format == "markdown":
        content = format_markdown(curated, now)
        write_or_print(content, args.output)
    else:
        warning_text = "".join(f"Warning: {warning}\n" for warning in warnings)
        content = warning_text + format_text(curated, now)
        write_or_print(content, args.output)
    return 2 if args.strict and len(curated) < target_count else 0


if __name__ == "__main__":
    sys.exit(main())
