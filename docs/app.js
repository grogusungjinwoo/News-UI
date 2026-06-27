const BUCKETS = Object.freeze(["scholar", "random", "science", "ai"]);
const DATA = window.MORNING_NEWS_DATA || {
  generatedAt: "",
  buckets: BUCKETS,
  sections: {},
};

const generatedLine = document.getElementById("generatedLine");
const bucketNav = document.getElementById("bucketNav");
const sections = document.getElementById("sections");
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

function buildActiveArticles() {
  activeArticles = BUCKETS.flatMap((bucket) => fixedSectionArticles(bucket).slice(0, 10));
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

function pxValue(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function fitCardText(card) {
  const title = card.querySelector("h3");
  const summary = card.querySelector("p");
  if (!title || !summary) {
    return;
  }

  title.style.fontSize = "";
  summary.style.fontSize = "";
  summary.style.lineHeight = "";

  let titleSize = pxValue(window.getComputedStyle(title).fontSize);
  let summarySize = pxValue(window.getComputedStyle(summary).fontSize);
  let summaryLine = pxValue(window.getComputedStyle(summary).lineHeight);

  for (let step = 0; step < 22 && (card.scrollHeight > card.clientHeight || card.scrollWidth > card.clientWidth); step += 1) {
    if (titleSize > 11) {
      titleSize -= 1;
      title.style.fontSize = `${titleSize}px`;
    }
    if (summarySize > 10 && step % 2 === 0) {
      summarySize -= 1;
      summary.style.fontSize = `${summarySize}px`;
    }
    if (summaryLine > summarySize * 1.15) {
      summaryLine -= 1;
      summary.style.lineHeight = `${summaryLine}px`;
    }
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

function renderApp() {
  buildActiveArticles();
  renderNav();
  renderSections();
  fitAllCards();
  setRoute(routeFromHash(), false, Boolean(window.location.hash));
  if (routes.length && !window.location.hash) {
    history.replaceState({ route: routes[0] }, "", window.location.pathname + window.location.search);
  }
}

function wireKeyboardNavigation() {
  document.getElementById("backButton").addEventListener("click", goBack);
  document.getElementById("forwardButton").addEventListener("click", goForward);

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
