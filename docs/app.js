const BUCKETS = Object.freeze(["scholar", "random", "science", "ai"]);
const RANDOM_STORAGE_KEY = "morning-news-random-selection";
const DATA = window.MORNING_NEWS_DATA || {
  generatedAt: "",
  buckets: BUCKETS,
  sections: {},
  randomPool: [],
  randomSources: [],
};

const generatedLine = document.getElementById("generatedLine");
const bucketNav = document.getElementById("bucketNav");
const sections = document.getElementById("sections");
const refreshRandomButton = document.getElementById("refreshRandomButton");
const routes = [];
let currentIndex = 0;
let activeArticles = [];

function bucketLabel(bucket) {
  return bucket === "ai" ? "AI" : bucket.charAt(0).toUpperCase() + bucket.slice(1);
}

function hostnameFromUrl(url) {
  if (!url) {
    return "";
  }
  try {
    return new URL(url, window.location.href).hostname.replace(/^www\./, "").toLowerCase();
  } catch (error) {
    return "";
  }
}

function isPdfPublication(article) {
  try {
    const path = new URL(article.articleUrl, window.location.href).pathname.toLowerCase();
    return path.endsWith(".pdf") || path.includes("/pdf/");
  } catch (error) {
    return false;
  }
}

function sourceIsMissing(sourceName) {
  return ["", "n/a", "na", "unknown", "rss", "atom", "feed"].includes((sourceName || "").trim().toLowerCase());
}

function sourceDisplayName(article) {
  if (isPdfPublication(article) || sourceIsMissing(article.sourceName)) {
    return "N/A";
  }
  if (/^arxiv query:/i.test(article.sourceName || "")) {
    return "arXiv";
  }
  return article.sourceName;
}

function sourceLogoUrl(article) {
  if (isPdfPublication(article) || sourceIsMissing(article.sourceName)) {
    return "";
  }
  const host = hostnameFromUrl(article.sourceHomeUrl) || hostnameFromUrl(article.articleUrl);
  if (!host) {
    return "";
  }
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
}

function excerptSentences(text, maxSentences = 2, maxChars = 260) {
  const cleaned = (text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return "This source did not provide a summary, so the headline carries the signal.";
  }
  const pieces = cleaned.split(/(?<=[.!?])\s+/).filter(Boolean);
  let excerpt = pieces.length ? pieces.slice(0, maxSentences).join(" ") : cleaned;
  if (excerpt.length <= maxChars) {
    return excerpt;
  }
  let clipped = excerpt.slice(0, maxChars - 3).trimEnd();
  if (clipped.includes(" ")) {
    clipped = clipped.slice(0, clipped.lastIndexOf(" "));
  }
  return `${clipped}...`;
}

function cardFitClass(title, excerpt) {
  const longestWord = Math.max(0, ...title.split(/\s+/).map((word) => word.length));
  const density = title.length + Math.floor(excerpt.length * 0.22) + Math.max(0, longestWord - 18) * 3;
  if (density >= 130) {
    return "fit-extreme";
  }
  if (density >= 96) {
    return "fit-long";
  }
  if (density >= 72) {
    return "fit-medium";
  }
  return "fit-normal";
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function appendTextRow(parent, className, left, right) {
  const row = createElement("div", className);
  row.append(createElement("span", "", left));
  row.append(createElement("span", "", right));
  parent.append(row);
  return row;
}

function fixedSectionArticles(bucket) {
  return Array.isArray(DATA.sections && DATA.sections[bucket]) ? DATA.sections[bucket] : [];
}

function randomPoolArticle(record) {
  return {
    bucket: record.bucket || "random",
    title: record.title || "Untitled article",
    articleUrl: record.articleUrl || record.href || "",
    sourceName: record.sourceName || "",
    sourceHomeUrl: record.sourceHomeUrl || record.sourceHref || "",
    ageHours: Number(record.ageHours) || 0,
    summary: record.summary || "",
    charge: Number(record.charge) || 0,
  };
}

function randomPoolSignature() {
  return (DATA.randomPool || []).map((article) => article.articleUrl || article.href || article.title).join("|");
}

function usedArticleUrls() {
  const visibleRandom = activeArticles.length
    ? activeArticles.filter((article) => article.bucket === "random")
    : fixedSectionArticles("random");
  return new Set(visibleRandom.map((article) => article.articleUrl).filter(Boolean));
}

function shuffleArticles(articles) {
  const shuffled = [...articles];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function storedRandomState() {
  try {
    return JSON.parse(localStorage.getItem(RANDOM_STORAGE_KEY) || "{}");
  } catch (error) {
    localStorage.removeItem(RANDOM_STORAGE_KEY);
    return {};
  }
}

function writeRandomState(state) {
  try {
    localStorage.setItem(RANDOM_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    localStorage.removeItem(RANDOM_STORAGE_KEY);
  }
}

function chooseRandomArticles(force = false) {
  const pool = (Array.isArray(DATA.randomPool) ? DATA.randomPool : [])
    .map(randomPoolArticle)
    .filter((article) => article.articleUrl);
  if (!pool.length) {
    return fixedSectionArticles("random").slice(0, 10);
  }

  const signature = randomPoolSignature();
  const stored = storedRandomState();
  const stateMatches = stored.generatedAt === DATA.generatedAt && stored.poolSignature === signature;
  if (!force) {
    if (stateMatches && Array.isArray(stored.articleUrls)) {
      const byUrl = new Map(pool.map((article) => [article.articleUrl, article]));
      const selected = stored.articleUrls.map((url) => byUrl.get(url)).filter(Boolean);
      if (selected.length === Math.min(10, pool.length)) {
        return selected;
      }
    }
    return fixedSectionArticles("random").slice(0, 10);
  }

  const currentUrls = usedArticleUrls();
  let priorUsedUrls = new Set(stateMatches && Array.isArray(stored.usedUrls) ? stored.usedUrls : []);
  let unusedPool = pool.filter((article) => !currentUrls.has(article.articleUrl) && !priorUsedUrls.has(article.articleUrl));

  if (unusedPool.length < Math.min(10, pool.length)) {
    priorUsedUrls = new Set(currentUrls);
    unusedPool = pool.filter((article) => !currentUrls.has(article.articleUrl));
  }

  const selected = shuffleArticles(unusedPool).slice(0, Math.min(10, unusedPool.length));
  if (selected.length < Math.min(10, pool.length)) {
    const selectedUrls = new Set(selected.map((article) => article.articleUrl));
    const backfill = shuffleArticles(pool.filter((article) => !selectedUrls.has(article.articleUrl))).slice(0, 10 - selected.length);
    selected.push(...backfill);
  }

  selected.forEach((article) => priorUsedUrls.add(article.articleUrl));
  writeRandomState({
    generatedAt: DATA.generatedAt,
    poolSignature: signature,
    refreshedAt: Date.now(),
    articleUrls: selected.map((article) => article.articleUrl),
    usedUrls: [...priorUsedUrls],
  });
  return selected.length ? selected : fixedSectionArticles("random").slice(0, 10);
}

function buildActiveArticles(forceRandom = false) {
  activeArticles = [
    ...fixedSectionArticles("scholar").slice(0, 10),
    ...chooseRandomArticles(forceRandom),
    ...fixedSectionArticles("science").slice(0, 10),
    ...fixedSectionArticles("ai").slice(0, 10),
  ];
}

function countByBucket(bucket) {
  return activeArticles.filter((article) => article.bucket === bucket).length;
}

function createSourceLogo(article) {
  const logo = sourceLogoUrl(article);
  if (!logo) {
    return createElement("span", "source-logo-na", "N/A");
  }
  const image = document.createElement("img");
  image.className = "source-logo";
  image.src = logo;
  image.alt = `Source logo for ${sourceDisplayName(article)}`;
  image.loading = "lazy";
  image.referrerPolicy = "no-referrer";
  image.addEventListener("error", () => {
    image.replaceWith(createElement("span", "source-logo-na", "N/A"));
  });
  return image;
}

function createExternalLink(label, url, className) {
  const link = createElement("a", className, label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function createCard(article, route, index) {
  const baseExcerpt = excerptSentences(article.summary);
  let fitClass = cardFitClass(article.title, baseExcerpt);
  const excerptLimit = fitClass === "fit-extreme" ? 150 : fitClass === "fit-long" ? 190 : 230;
  const excerpt = excerptSentences(article.summary, 2, excerptLimit);
  fitClass = cardFitClass(article.title, excerpt);

  const card = createElement("article", `article-card ${fitClass}`);
  card.id = route;
  card.dataset.route = route;
  card.tabIndex = 0;
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", article.title);

  appendTextRow(card, "card-topline", `${bucketLabel(article.bucket)} ${String(index).padStart(2, "0")}`, `${article.ageHours.toFixed(1)}h`);

  const sourceRow = createElement("div", "source-row");
  sourceRow.append(createSourceLogo(article));
  sourceRow.append(createElement("span", "source-name", sourceDisplayName(article)));
  card.append(sourceRow);

  card.append(createElement("h3", "", article.title));
  card.append(createElement("p", "", excerpt));

  const label = article.bucket === "ai" ? `Interest ${article.interest}` : `Charge ${article.charge}`;
  appendTextRow(card, "card-footer", label, hostnameFromUrl(article.articleUrl) || "Open");

  const actionRow = createElement("div", "card-actions");
  actionRow.append(createExternalLink("Article", article.articleUrl, "open-link article-link"));
  if (article.sourceHomeUrl) {
    actionRow.append(createExternalLink("Source site", article.sourceHomeUrl, "open-link source-link"));
  }
  card.append(actionRow);

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }
    setRoute(route, true, true);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      setRoute(route, true, true);
    }
  });

  return card;
}

function renderNav() {
  const fragment = document.createDocumentFragment();
  for (const bucket of BUCKETS) {
    const link = createElement("a", "bucket-link");
    link.href = `#${bucket}-0`;
    link.dataset.bucketLink = bucket;
    link.append(createElement("span", "", bucketLabel(bucket)));
    link.append(createElement("strong", "", String(countByBucket(bucket))));
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const bucketRoute = routes.find((route) => route.startsWith(`${bucket}-`));
      if (bucketRoute) {
        setRoute(bucketRoute, true, true);
      }
    });
    fragment.append(link);
  }
  bucketNav.replaceChildren(fragment);
}

function renderSections() {
  const fragment = document.createDocumentFragment();
  routes.length = 0;
  for (const bucket of BUCKETS) {
    const bucketArticles = activeArticles.filter((article) => article.bucket === bucket);
    const section = createElement("section", "bucket-section");
    section.id = bucket;
    section.setAttribute("aria-labelledby", `${bucket}-heading`);

    const heading = createElement("div", "section-heading");
    const title = createElement("h2", "", bucketLabel(bucket));
    title.id = `${bucket}-heading`;
    heading.append(title);
    heading.append(createElement("span", "", `${bucketArticles.length} selected`));
    section.append(heading);

    const grid = createElement("div", "article-grid");
    if (!bucketArticles.length) {
      grid.append(createElement("p", "empty", "No articles survived filtering for this section."));
    }
    bucketArticles.forEach((article, bucketIndex) => {
      const route = `${bucket}-${bucketIndex}`;
      routes.push(route);
      grid.append(createCard(article, route, bucketIndex + 1));
    });
    section.append(grid);
    fragment.append(section);
  }
  sections.replaceChildren(fragment);
}

function fitCardText(card) {
  const title = card.querySelector("h3");
  const summary = card.querySelector("p");
  if (!title || !summary) {
    return;
  }

  card.classList.remove("fit-overflow", "fit-overflow-hard");
  if (card.scrollHeight > card.clientHeight || card.scrollWidth > card.clientWidth) {
    card.classList.add("fit-overflow");
  }
  if (card.scrollHeight > card.clientHeight || card.scrollWidth > card.clientWidth) {
    card.classList.add("fit-overflow-hard");
  }
}

function fitAllCards() {
  document.querySelectorAll(".article-card").forEach(fitCardText);
}

function routeFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  return routes.includes(hash) ? hash : routes[0];
}

function revealRoute(route) {
  const activeCard = document.querySelector(`[data-route="${route}"]`);
  if (!activeCard) {
    return;
  }
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  activeCard.scrollIntoView({ block: "center", inline: "nearest", behavior });
}

function setRoute(route, push, reveal) {
  if (!route || !routes.includes(route)) {
    return;
  }
  currentIndex = routes.indexOf(route);
  document.querySelectorAll("[data-route]").forEach((node) => {
    const active = node.dataset.route === route;
    node.classList.toggle("is-active", active);
    if (active) {
      node.setAttribute("aria-current", "true");
    } else {
      node.removeAttribute("aria-current");
    }
  });

  const bucket = route.split("-")[0];
  document.querySelectorAll("[data-bucket-link]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.bucketLink === bucket);
  });

  if (push) {
    history.pushState({ route }, "", `#${route}`);
  }
  if (reveal) {
    revealRoute(route);
  }
}

function fallbackRoute(direction) {
  if (!routes.length) {
    return;
  }
  const nextIndex = Math.max(0, Math.min(routes.length - 1, currentIndex + direction));
  setRoute(routes[nextIndex], true, true);
}

function goBack() {
  const before = window.location.hash;
  history.back();
  window.setTimeout(() => {
    if (window.location.hash === before) {
      fallbackRoute(-1);
    }
  }, 80);
}

function goForward() {
  const before = window.location.hash;
  history.forward();
  window.setTimeout(() => {
    if (window.location.hash === before) {
      fallbackRoute(1);
    }
  }, 80);
}

function renderApp(forceRandom = false) {
  buildActiveArticles(forceRandom);
  renderNav();
  renderSections();
  fitAllCards();
  setRoute(routeFromHash(), false, Boolean(window.location.hash));
  if (routes.length && !window.location.hash) {
    history.replaceState({ route: routes[0] }, "", window.location.pathname + window.location.search);
  }
}

function refreshRandomArticles(force = true) {
  const previousRoute = routeFromHash();
  renderApp(force);
  if (previousRoute && routes.includes(previousRoute)) {
    setRoute(previousRoute, false, true);
  }
}

function wireKeyboardNavigation() {
  document.getElementById("backButton").addEventListener("click", goBack);
  document.getElementById("forwardButton").addEventListener("click", goForward);
  if (refreshRandomButton) {
    refreshRandomButton.addEventListener("click", () => refreshRandomArticles(true));
  }

  window.addEventListener("popstate", () => setRoute(routeFromHash(), false, true));
  document.addEventListener("keydown", (event) => {
    const tag = event.target && event.target.tagName;
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag);
    if (isTyping || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (event.key === "Backspace" || event.key === "ArrowLeft") {
      event.preventDefault();
      goBack();
    }
    if (event.key === "Enter" || event.key === "ArrowRight") {
      event.preventDefault();
      goForward();
    }
  });
}

function init() {
  const generatedAt = DATA.generatedAt ? new Date(DATA.generatedAt) : null;
  const generatedLabel = generatedAt && !Number.isNaN(generatedAt.valueOf()) ? generatedAt.toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : "static build";
  generatedLine.textContent = `40 verified articles generated ${generatedLabel}`;
  renderApp();
  wireKeyboardNavigation();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAllCards);
  }
  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(fitAllCards, 120);
  });
}

init();
