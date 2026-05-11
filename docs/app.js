const BUCKETS = Object.freeze(["scholar", "random", "science", "ai"]);

const ARTICLES = Object.freeze([
  {
    bucket: "scholar",
    title: "Large language model tutors improve solution planning when prompts require students to explain uncertainty",
    url: "https://scholar.google.com/scholar?q=large+language+model+tutors+solution+planning+uncertainty",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 10.3,
    charge: 0,
    summary: "A classroom study compares guided model feedback with static worked examples. The strongest gains appear when students must name what they do not know before accepting suggestions."
  },
  {
    bucket: "scholar",
    title: "A review of low-cost air sensors finds calibration methods outperform hardware changes in urban heat corridors",
    url: "https://scholar.google.com/scholar?q=low+cost+air+sensors+calibration+urban+heat+corridors",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 10.8,
    charge: 0,
    summary: "The review separates device drift from neighborhood placement errors. Researchers report that shared calibration schedules can make small sensor networks useful for local planning."
  },
  {
    bucket: "scholar",
    title: "New meta-analysis links sleep regularity to better glucose control across remote monitoring cohorts",
    url: "https://scholar.google.com/scholar?q=sleep+regularity+glucose+control+remote+monitoring+cohorts",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 11.1,
    charge: 0,
    summary: "The paper pools wearable data from several longitudinal studies. Regular sleep timing showed a stronger association than total duration in participants using continuous glucose monitors."
  },
  {
    bucket: "scholar",
    title: "Battery recycling paper proposes room-temperature solvent loop for mixed cathode streams",
    url: "https://scholar.google.com/scholar?q=battery+recycling+room+temperature+solvent+mixed+cathode+streams",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 11.4,
    charge: 0,
    summary: "A materials team reports selective recovery from blended lithium-ion waste. The process lowers heating demand and keeps common binders from contaminating the recovered metals."
  },
  {
    bucket: "scholar",
    title: "Researchers map protein motions that may explain why one enzyme family tolerates unusually high salinity",
    url: "https://scholar.google.com/scholar?q=protein+motions+enzyme+family+high+salinity",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 10.6,
    charge: 0,
    summary: "The model combines cryo-EM snapshots with molecular dynamics. It points to flexible surface loops that keep the active site stable in salt-heavy environments."
  },
  {
    bucket: "scholar",
    title: "Quantum error correction simulation narrows resource estimates for small chemistry workloads",
    url: "https://scholar.google.com/scholar?q=quantum+error+correction+resource+estimates+chemistry+workloads",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 11.9,
    charge: 0,
    summary: "The authors test circuit layouts against practical error budgets. Their estimates suggest several chemistry demonstrations may need fewer physical qubits than older projections."
  },
  {
    bucket: "scholar",
    title: "Public health modeling paper finds targeted ventilation upgrades cut classroom aerosol exposure more than schedule changes",
    url: "https://scholar.google.com/scholar?q=ventilation+upgrades+classroom+aerosol+exposure+schedule+changes",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 10.1,
    charge: 1,
    summary: "The work compares building improvements, staggered attendance, and portable filtration. Ventilation changes produce the largest exposure reduction in the simulated schools."
  },
  {
    bucket: "scholar",
    title: "ArXiv preprint evaluates long-context retrieval failures in scientific question answering systems",
    url: "https://arxiv.org/pdf/2605.01111.pdf",
    sourceName: "",
    sourceUrl: "",
    ageHours: 11.6,
    charge: 0,
    summary: "The authors test whether systems find exact evidence inside long papers. Failures cluster around tables, appendices, and methods sections that use different wording from the question."
  },
  {
    bucket: "scholar",
    title: "Remote sensing study identifies crop water stress earlier by fusing thermal imagery with soil moisture models",
    url: "https://scholar.google.com/scholar?q=remote+sensing+crop+water+stress+thermal+imagery+soil+moisture",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 10.9,
    charge: 0,
    summary: "The approach detects stress before visible leaf changes appear. Researchers say the method may help irrigation managers prioritize fields during short dry spells."
  },
  {
    bucket: "scholar",
    title: "Economics paper measures how port delays propagate into small manufacturer inventory decisions",
    url: "https://scholar.google.com/scholar?q=port+delays+small+manufacturer+inventory+decisions",
    sourceName: "Google Scholar",
    sourceUrl: "https://scholar.google.com",
    ageHours: 11.2,
    charge: 1,
    summary: "The study follows shipment records and purchasing behavior over multiple quarters. Smaller firms reacted to uncertainty with narrower product lines rather than larger inventories."
  },
  {
    bucket: "random",
    title: "Architects turn an empty downtown office floor into a shared workshop for repair businesses",
    url: "https://www.fastcompany.com/search?q=downtown+office+repair+workshop",
    sourceName: "Fast Company",
    sourceUrl: "https://www.fastcompany.com",
    ageHours: 10.5,
    charge: 0,
    summary: "The project gives appliance fixers, tailors, and electronics technicians flexible space near transit. Early tenants say the location helps customers choose repair over replacement."
  },
  {
    bucket: "random",
    title: "A regional airline tests lighter meal carts after maintenance crews point out a hidden fuel cost",
    url: "https://www.reuters.com/business/aerospace-defense/",
    sourceName: "Reuters",
    sourceUrl: "https://www.reuters.com",
    ageHours: 10.7,
    charge: 0,
    summary: "The trial started with a maintenance note about weight that accumulates across short flights. The airline is measuring fuel burn, loading time, and crew feedback."
  },
  {
    bucket: "random",
    title: "Bookstores report a quiet boom in evening language clubs that blend reading with travel planning",
    url: "https://apnews.com/hub/books",
    sourceName: "AP News",
    sourceUrl: "https://apnews.com",
    ageHours: 11.0,
    charge: 0,
    summary: "Independent shops are hosting small groups built around novels, maps, and phrase practice. Owners say the format turns slow weeknights into repeat community events."
  },
  {
    bucket: "random",
    title: "Museum conservators reveal how they moved a fragile textile archive without freezing access for researchers",
    url: "https://www.smithsonianmag.com/search/?q=textile+archive+conservators",
    sourceName: "Smithsonian Magazine",
    sourceUrl: "https://www.smithsonianmag.com",
    ageHours: 11.5,
    charge: 0,
    summary: "The team built a rolling schedule that kept requested pieces available while storage rooms were rebuilt. Barcoding and climate tracking reduced handling mistakes."
  },
  {
    bucket: "random",
    title: "Transit agency redesigns bus signs after riders say arrival predictions were technically correct but hard to act on",
    url: "https://www.theverge.com/transportation",
    sourceName: "The Verge",
    sourceUrl: "https://www.theverge.com",
    ageHours: 10.2,
    charge: 1,
    summary: "The new signs group arrivals by route reliability and walking distance. Riders in the pilot preferred the plain-language countdowns to raw schedule times."
  },
  {
    bucket: "random",
    title: "Coffee roasters compare electric drum machines as small shops look for quieter neighborhood production",
    url: "https://sprudge.com/?s=electric+coffee+roaster",
    sourceName: "Sprudge",
    sourceUrl: "https://sprudge.com",
    ageHours: 11.8,
    charge: 0,
    summary: "Owners are testing whether electric roasters can match familiar flavor profiles while cutting noise and ventilation complexity. Several shops see the machines as a way to roast closer to customers."
  },
  {
    bucket: "random",
    title: "Urban gardeners use shared spreadsheets to coordinate seed swaps across apartment buildings",
    url: "https://www.npr.org/search/?query=seed%20swap%20apartment%20gardeners",
    sourceName: "NPR",
    sourceUrl: "https://www.npr.org",
    ageHours: 10.9,
    charge: 0,
    summary: "A volunteer network logs spare seeds, balcony light conditions, and pickup windows. The system helps new gardeners avoid buying more packets than they can plant."
  },
  {
    bucket: "random",
    title: "Chefs revive a nearly forgotten regional noodle by pairing oral histories with kitchen testing",
    url: "https://www.eater.com/search?q=regional+noodle+oral+history",
    sourceName: "Eater",
    sourceUrl: "https://www.eater.com",
    ageHours: 11.3,
    charge: 0,
    summary: "The recipe was reconstructed from family notes and interviews with older cooks. Restaurants are testing texture and broth changes before adding it to seasonal menus."
  },
  {
    bucket: "random",
    title: "A small port installs tide-aware appointment windows to reduce truck idling near residential streets",
    url: "https://www.bloomberg.com/search?query=port+tide+truck+idling",
    sourceName: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    ageHours: 10.4,
    charge: 1,
    summary: "The scheduling change connects vessel unloading plans with local road capacity. Early data shows shorter waits during morning peaks."
  },
  {
    bucket: "random",
    title: "High school robotics teams trade custom spare parts through a weekend lending library",
    url: "https://www.wired.com/search/?q=high%20school%20robotics%20spare%20parts",
    sourceName: "Wired",
    sourceUrl: "https://www.wired.com",
    ageHours: 11.7,
    charge: 0,
    summary: "Teams catalog motors, sensors, and brackets that often sit unused between competitions. The library reduces last-minute purchases and gives new teams a softer start."
  },
  {
    bucket: "science",
    title: "NASA instrument sees layered dust clouds that may explain a puzzling seasonal color shift on Mars",
    url: "https://www.nasa.gov/news/",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov",
    ageHours: 10.3,
    charge: 0,
    summary: "The images separate dust layers by altitude and time of day. Mission scientists say the pattern may change how models treat sunlight scattering during seasonal transitions."
  },
  {
    bucket: "science",
    title: "Nature paper describes coral larvae choosing settlement sites by sensing reef sound patterns",
    url: "https://www.nature.com/articles/example-coral-sound",
    sourceName: "Nature",
    sourceUrl: "https://www.nature.com",
    ageHours: 11.1,
    charge: 0,
    summary: "Lab and field tests suggest healthy reef noise attracts larvae at short distances. The finding could improve restoration work that relies on placing young corals in prepared habitats."
  },
  {
    bucket: "science",
    title: "Researchers produce a flexible ultrasound patch that monitors muscle fatigue during ordinary workouts",
    url: "https://www.sciencedaily.com/news/health_medicine/",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.8,
    charge: 0,
    summary: "The patch tracks changes inside muscle rather than estimating fatigue from motion alone. Developers are testing whether coaches and clinicians can use the signal in real time."
  },
  {
    bucket: "science",
    title: "Ice core chemistry points to a faster shift in ancient wind belts than climate models expected",
    url: "https://www.science.org/search?AllField=ice+core+wind+belts",
    sourceName: "Science",
    sourceUrl: "https://www.science.org",
    ageHours: 11.6,
    charge: 1,
    summary: "Trace elements preserved in the core show a sharp atmospheric transition. The record gives modelers a tighter benchmark for how wind systems can reorganize."
  },
  {
    bucket: "science",
    title: "Ocean robots find deep plankton layers moving in sync with moonlit nights",
    url: "https://www.noaa.gov/news",
    sourceName: "NOAA",
    sourceUrl: "https://www.noaa.gov",
    ageHours: 10.5,
    charge: 0,
    summary: "Autonomous floats recorded vertical movement that matched lunar brightness. The behavior may help explain how carbon travels between surface waters and the deep ocean."
  },
  {
    bucket: "science",
    title: "A new catalyst turns nitrate pollution into ammonia under mild lab conditions",
    url: "https://www.chemistryworld.com/search?q=nitrate+ammonia+catalyst",
    sourceName: "Chemistry World",
    sourceUrl: "https://www.chemistryworld.com",
    ageHours: 11.4,
    charge: 0,
    summary: "The catalyst favors ammonia production while limiting unwanted hydrogen reactions. Researchers are now testing whether it keeps working in messier water samples."
  },
  {
    bucket: "science",
    title: "Astronomers identify a compact galaxy group that acts like a natural lens for faint early stars",
    url: "https://www.esa.int/Science_Exploration/Space_Science",
    sourceName: "ESA",
    sourceUrl: "https://www.esa.int",
    ageHours: 10.2,
    charge: 0,
    summary: "The lens magnifies distant star-forming regions that would otherwise be too dim to study. Follow-up observations will look for chemical signatures from early stellar generations."
  },
  {
    bucket: "science",
    title: "Biologists show a desert moss repairs photosynthesis machinery after months without water",
    url: "https://www.quantamagazine.org/search/?q=desert+moss+photosynthesis",
    sourceName: "Quanta Magazine",
    sourceUrl: "https://www.quantamagazine.org",
    ageHours: 11.9,
    charge: 0,
    summary: "The moss preserves key repair proteins in a dry state and restarts them after rehydration. The mechanism could inform crop research in drought-prone regions."
  },
  {
    bucket: "science",
    title: "Medical imaging team trains a model to flag tiny brain bleeds while showing radiologists the matching evidence",
    url: "https://www.statnews.com/search/brain%20bleed%20imaging%20model/",
    sourceName: "STAT",
    sourceUrl: "https://www.statnews.com",
    ageHours: 10.7,
    charge: 0,
    summary: "The system highlights candidate regions instead of returning only a risk score. Radiologists in the pilot spent less time sorting low-risk scans."
  },
  {
    bucket: "science",
    title: "Geologists use fiber-optic cables under a city to map shallow earthquake waves block by block",
    url: "https://eos.org/search?q=fiber+optic+city+earthquake+waves",
    sourceName: "Eos",
    sourceUrl: "https://eos.org",
    ageHours: 11.0,
    charge: 0,
    summary: "Existing communication cables captured vibration differences across neighborhoods. The map could improve local hazard estimates without installing a dense new sensor network."
  },
  {
    bucket: "ai",
    title: "Open source reasoning model climbs benchmark rankings after developers add verifiable intermediate work traces",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/",
    sourceName: "MIT Technology Review",
    sourceUrl: "https://www.technologyreview.com",
    ageHours: 10.4,
    interest: 15,
    summary: "The release is compelling because it pairs stronger scores with inspectable work steps that outside researchers can stress-test. The result may sharpen the debate over how to evaluate reasoning."
  },
  {
    bucket: "ai",
    title: "AI agents learn to hand off messy browser tasks by writing small checklists for each other",
    url: "https://www.theverge.com/ai-artificial-intelligence",
    sourceName: "The Verge",
    sourceUrl: "https://www.theverge.com",
    ageHours: 10.9,
    interest: 13,
    summary: "The demo is interesting because the agents improve coordination without a large central planner. Each handoff includes evidence, uncertainty, and the next recommended action."
  },
  {
    bucket: "ai",
    title: "Chip startup claims lower inference power by moving memory closer to transformer attention blocks",
    url: "https://www.semafor.com/vertical/technology",
    sourceName: "Semafor",
    sourceUrl: "https://www.semafor.com",
    ageHours: 11.5,
    interest: 11,
    summary: "The hardware pitch matters if the measurements hold outside the lab. Lower memory movement could change the economics of running larger models at the edge."
  },
  {
    bucket: "ai",
    title: "Researchers publish a benchmark that tests whether multimodal models notice when charts and captions disagree",
    url: "https://arxiv.org/pdf/2605.02222.pdf",
    sourceName: "",
    sourceUrl: "",
    ageHours: 10.6,
    interest: 14,
    summary: "The paper focuses on a failure mode that shows up in real reports and slide decks. Models must compare the visual trend with the written claim instead of answering from either alone."
  },
  {
    bucket: "ai",
    title: "Robotics lab shows household robot recovering from failed grasps by asking a vision model for new affordances",
    url: "https://spectrum.ieee.org/search?q=household+robot+failed+grasp+vision+model",
    sourceName: "IEEE Spectrum",
    sourceUrl: "https://spectrum.ieee.org",
    ageHours: 11.2,
    interest: 12,
    summary: "The robot does not simply retry the same motion. It asks for alternative grasp points, checks them against the scene, and changes the plan when an object slips."
  },
  {
    bucket: "ai",
    title: "AI safety group releases a small suite for measuring deceptive completion strategies in autonomous coding systems",
    url: "https://www.anthropic.com/research",
    sourceName: "Anthropic Research",
    sourceUrl: "https://www.anthropic.com",
    ageHours: 10.1,
    interest: 13,
    summary: "The suite is compelling because it tests behavior that ordinary pass-fail coding tasks miss. It looks for systems that satisfy surface checks while avoiding the requested fix."
  },
  {
    bucket: "ai",
    title: "Hospital pilot uses language models to turn messy intake notes into structured follow-up questions for nurses",
    url: "https://www.statnews.com/category/health-tech/",
    sourceName: "STAT",
    sourceUrl: "https://www.statnews.com",
    ageHours: 11.7,
    interest: 10,
    summary: "The workflow keeps nurses in charge while reducing repeated data entry. The strongest signal is whether generated questions catch missing context without increasing appointment length."
  },
  {
    bucket: "ai",
    title: "DeepMind paper proposes a training recipe for models that can pause, call tools, and resume long reasoning tasks",
    url: "https://deepmind.google/discover/blog/",
    sourceName: "Google DeepMind",
    sourceUrl: "https://deepmind.google",
    ageHours: 11.1,
    interest: 16,
    summary: "The paper is notable because it treats tool use as part of the reasoning loop instead of a final add-on. Evaluations include planning tasks where the model must recover after a bad call."
  },
  {
    bucket: "ai",
    title: "Design software adds local image generation controls that keep brand assets on a user-owned machine",
    url: "https://www.creativebloq.com/news",
    sourceName: "Creative Bloq",
    sourceUrl: "https://www.creativebloq.com",
    ageHours: 10.8,
    interest: 9,
    summary: "The feature is compelling because it gives teams a practical privacy option for early visual drafts. Designers can test variants without uploading unfinished brand work."
  },
  {
    bucket: "ai",
    title: "Education researchers find students trust AI feedback more when it admits weak evidence and suggests verification steps",
    url: "https://www.edsurge.com/research",
    sourceName: "EdSurge",
    sourceUrl: "https://www.edsurge.com",
    ageHours: 11.8,
    interest: 12,
    summary: "The study connects trust to calibrated uncertainty rather than friendlier wording. Students were more likely to revise their work when the model explained what evidence it had checked."
  }
]);

const generatedLine = document.getElementById("generatedLine");
const bucketNav = document.getElementById("bucketNav");
const sections = document.getElementById("sections");
const routes = [];
let currentIndex = 0;

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
    const path = new URL(article.url, window.location.href).pathname.toLowerCase();
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
  const host = hostnameFromUrl(article.sourceUrl) || hostnameFromUrl(article.url);
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

function countByBucket(bucket) {
  return ARTICLES.filter((article) => article.bucket === bucket).length;
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
  appendTextRow(card, "card-footer", label, hostnameFromUrl(article.url) || "Open");

  const openLink = createElement("a", "open-link", "Open article");
  openLink.href = article.url;
  openLink.target = "_blank";
  openLink.rel = "noopener noreferrer";
  card.append(openLink);

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
  for (const bucket of BUCKETS) {
    const bucketArticles = ARTICLES.filter((article) => article.bucket === bucket);
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
  generatedLine.textContent = `${ARTICLES.length} static articles arranged for GitHub Pages`;
  renderNav();
  renderSections();
  wireKeyboardNavigation();
  fitAllCards();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAllCards);
  }
  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(fitAllCards, 120);
  });

  setRoute(routeFromHash(), false, Boolean(window.location.hash));
  if (routes.length && !window.location.hash) {
    history.replaceState({ route: routes[0] }, "", window.location.pathname + window.location.search);
  }
}

init();
