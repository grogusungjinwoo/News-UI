const BUCKETS = Object.freeze(["scholar", "random", "science", "ai"]);

const ARTICLES = Object.freeze([
  {
    bucket: "scholar",
    title: "EmambaIR: Efficient Visual State Space Model for Event-guided Image Reconstruction",
    url: "https://arxiv.org/abs/2605.08073v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 10.1,
    charge: 0,
    summary: "Recent event-based image reconstruction methods predominantly rely on Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to process complementary event information. However, these architectures face...",
  },
  {
    bucket: "scholar",
    title: "VecCISC: Improving Confidence-Informed Self-Consistency with Reasoning Trace Clustering and Candidate Answer Selection",
    url: "https://arxiv.org/abs/2605.08070v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 10.3,
    charge: 0,
    summary: "A standard technique for scaling inference-time reasoning is Self-Consistency, whereby multiple candidate answers are sampled from an LLM and the most common answer is selected. More recently, it has been shown that weighted...",
  },
  {
    bucket: "scholar",
    title: "Flow-OPD: On-Policy Distillation for Flow Matching Models",
    url: "https://arxiv.org/abs/2605.08063v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 10.5,
    charge: 0,
    summary: "Existing Flow Matching (FM) text-to-image models suffer from two critical bottlenecks under multi-task alignment: the reward sparsity induced by scalar-valued rewards, and the gradient interference arising from jointly...",
  },
  {
    bucket: "scholar",
    title: "Rubric-Grounded RL: Structured Judge Rewards for Generalizable Reasoning",
    url: "https://arxiv.org/abs/2605.08061v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 10.6,
    charge: 0,
    summary: "We argue that decomposing reward into weighted, verifiable criteria and using an LLM judge to score them provides a partial-credit optimization signal: instead of a binary outcome or a single holistic score, each response is...",
  },
  {
    bucket: "scholar",
    title: "The Memory Curse: How Expanded Recall Erodes Cooperative Intent in LLM Agents",
    url: "https://arxiv.org/abs/2605.08060v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 10.8,
    charge: 0,
    summary: "Context window expansion is often treated as a straightforward capability upgrade for LLMs, but we find it systematically fails in multi-agent social dilemmas. Across 7 LLMs and 4 games over 500 rounds, expanding accessible...",
  },
  {
    bucket: "scholar",
    title: "Normalizing Trajectory Models",
    url: "https://arxiv.org/abs/2605.08078v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.0,
    charge: 0,
    summary: "Diffusion-based models decompose sampling into many small Gaussian denoising steps -- an assumption that breaks down when generation is compressed to a few coarse transitions. Existing few-step methods address this through...",
  },
  {
    bucket: "scholar",
    title: "Zero-Shot Imagined Speech Decoding via Imagined-to-Listened MEG Mapping",
    url: "https://arxiv.org/abs/2605.08075v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.2,
    charge: 0,
    summary: "Decoding imagined speech from non-invasive brain recordings is challenging because imagined datasets are scarce and difficult to align temporally across subjects and sessions In this work, we propose a new approach to the...",
  },
  {
    bucket: "scholar",
    title: "GRAPHLCP: Structure-Aware Localized Conformal Prediction on Graphs",
    url: "https://arxiv.org/abs/2605.08074v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.4,
    charge: 0,
    summary: "Conformal prediction (CP) provides a distribution-free approach to uncertainty quantification with finite-sample guarantees. However, applying CP to graph neural networks (GNNs) remains challenging as the combinatorial nature...",
  },
  {
    bucket: "scholar",
    title: "A Note on Non-Negative $L_1$-Approximating Polynomials",
    url: "https://arxiv.org/abs/2605.08072v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.5,
    charge: 0,
    summary: "$L_1$-Approximating polynomials, i.e., polynomials that approximate indicator functions in $L_1$-norm under certain distributions, are widely used in computational learning theory. We study the existence of...",
  },
  {
    bucket: "scholar",
    title: "Reinforcement Learning for Exponential Utility: Algorithms and Convergence in Discounted MDPs",
    url: "https://arxiv.org/abs/2605.08053v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.7,
    charge: 0,
    summary: "Reinforcement learning (RL) for exponential-utility optimization in discounted Markov decision processes (MDPs) lacks principled value-based algorithms. We address this gap in the fixed risk-aversion setting. Building on the...",
  },
  {
    bucket: "random",
    title: "These Singing Mice Squeak Back and Forth - and Don't Interrupt. Scientists Found the Brain Pathway Behind Their Impressive Songs",
    url: "https://www.smithsonianmag.com/smart-news/these-singing-mice-squeak-back-and-forth-and-dont-interrupt-scientists-found-the-brain-pathway-behind-their-impressive-songs-180988720/",
    sourceName: "Smithsonian Magazine",
    sourceUrl: "https://www.smithsonianmag.com",
    ageHours: 10.1,
    charge: 0,
    summary: "Alston's singing mice carry out complex vocalizations and even appear to converse politely with one another. The neural circuitry that makes this possible is simpler than researchers expected",
  },
  {
    bucket: "random",
    title: "Researchers Discovered the Remnants of a Secret, Illegal Whisky Distillery in a Stunning Scottish Park",
    url: "https://www.smithsonianmag.com/smart-news/researchers-discovered-the-remnants-of-a-secret-illegal-distillery-in-a-stunning-scottish-park-180988718/",
    sourceName: "Smithsonian Magazine",
    sourceUrl: "https://www.smithsonianmag.com",
    ageHours: 10.3,
    charge: 0,
    summary: "The copper still, likely used to make whisky, would have been hidden away from the oversight of tax collectors after Scotland outlawed unlicensed distilling centuries ago",
  },
  {
    bucket: "random",
    title: "It Took Millions of Years for Australia's Famous Twelve Apostles Landmark to Rise Out of the Sea",
    url: "https://www.smithsonianmag.com/smart-news/australias-famous-twelve-apostles-landmark-rose-out-of-the-sea-across-missions-of-years-180988715/",
    sourceName: "Smithsonian Magazine",
    sourceUrl: "https://www.smithsonianmag.com",
    ageHours: 10.5,
    charge: 0,
    summary: "The iconic tourist destination provides a beautiful view, but also represents a physical record of Earth's climate history",
  },
  {
    bucket: "random",
    title: "Govee's new portable smart lamp is on sale for the first time",
    url: "https://www.theverge.com/gadgets/928249/govee-table-lamp-classic-deal-sale",
    sourceName: "The Verge",
    sourceUrl: "https://www.theverge.com",
    ageHours: 10.6,
    charge: 0,
    summary: "If you've always liked the idea of the Philips Hue Go portable lamp but couldn't justify the $100+ price tag, Govee recently released a much cheaper alternative, the Govee Table Lamp Classic, and it's already receiving its...",
  },
  {
    bucket: "random",
    title: "Apple brings encrypted RCS chats to iPhone",
    url: "https://www.theverge.com/tech/928141/apple-ios-26-5-rcs-messages-iphone-google-android",
    sourceName: "The Verge",
    sourceUrl: "https://www.theverge.com",
    ageHours: 10.8,
    charge: 1,
    summary: "Apple now lets you have encrypted RCS conversations with Android users through the Messages app on iOS. As part of iOS 26.5, which was released on Monday, Apple added support for end-to-end encrypted RCS messaging in beta,...",
  },
  {
    bucket: "random",
    title: "New York's Buzziest New Restaurant Is a Pub",
    url: "https://www.eater.com/pre-shift/961028/deans-pub-new-york-pre-shift",
    sourceName: "Eater",
    sourceUrl: "https://www.eater.com",
    ageHours: 11.0,
    charge: 0,
    summary: "This excerpt was originally published in Pre Shift, our newsletter for the hospitality industry. Subscribe for more first-person accounts, advice, and interviews. Now Open is a yearlong series celebrating some of 2026's most...",
  },
  {
    bucket: "random",
    title: "Why the Nordstrom Cafe Was the Ultimate Mother-Daughter Experience",
    url: "https://www.eater.com/food-culture/960443/nordstrom-cafe-mother-daughter-nostalgia-tomato-soup-grilled-cheese",
    sourceName: "Eater",
    sourceUrl: "https://www.eater.com",
    ageHours: 11.2,
    charge: 0,
    summary: "A version of this post originally appeared on May 6 in our newsletter Eater Today. Sign up here to receive stories like this in your inbox. Eating lunch and shopping are two of my mother's favorite things - she reminded me as...",
  },
  {
    bucket: "random",
    title: "Quince Sells Caviar and Wine Now. Is It Any Good?",
    url: "https://www.eater.com/shopping/960397/quince-caviar-wine-coffee-review",
    sourceName: "Eater",
    sourceUrl: "https://www.eater.com",
    ageHours: 11.4,
    charge: 0,
    summary: "For years, Quince has been a website that I knew as \"that place to get affordable cashmere sweaters.\" But as its offerings have expanded further and further, from home goods and luggage to jewelry and perfume, it's also...",
  },
  {
    bucket: "random",
    title: "A new Erewhon competitor just opened in West Hollywood with no marketing or social media. It's counting on you to post about it",
    url: "https://www.fastcompany.com/91540063/erewhon-vs-laurel-supply-west-hollywood-hypebeast-grocer-wars",
    sourceName: "Fast Company",
    sourceUrl: "https://www.fastcompany.com",
    ageHours: 11.5,
    charge: 0,
    summary: "A $20 smoothie and a $19 single strawberry could only belong in one place: Erewhon, the luxury grocery chain and celebrity hotspot in Los Angeles. But as of last week, it's not the only so-called hypebeast grocer in West...",
  },
  {
    bucket: "random",
    title: "Campbell's Bluebird back on Coniston Water almost 60 years after fatal record attempt",
    url: "https://www.bbc.com/news/articles/c4g5r0yydl2o?at_medium=RSS&at_campaign=rss",
    sourceName: "BBC",
    sourceUrl: "https://www.bbc.com",
    ageHours: 11.7,
    charge: 0,
    summary: "The restored hydroplane returns to the lake where its record-breaking pilot was killed in 1967.",
  },
  {
    bucket: "science",
    title: "This 800-year-old Chinese exercise helps lower blood pressure naturally",
    url: "https://www.sciencedaily.com/releases/2026/05/260510234724.htm",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.1,
    charge: 0,
    summary: "An ancient Chinese exercise routine may be just as powerful as a daily brisk walk for lowering blood pressure - without equipment, gyms, or intense workouts. In a major clinical trial, adults with stage 1 hypertension who...",
  },
  {
    bucket: "science",
    title: "NASA's Psyche probe is about to slingshot around Mars at 12,000 mph",
    url: "https://www.sciencedaily.com/releases/2026/05/260510234707.htm",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.3,
    charge: 0,
    summary: "NASA's Psyche spacecraft is about to pull off a dramatic close flyby of Mars, skimming just 2,800 miles above the planet to get a powerful gravitational boost on its journey to the mysterious metal-rich asteroid Psyche. The...",
  },
  {
    bucket: "science",
    title: "NASA's Curiosity rover accidentally pulled a rock out of Mars",
    url: "https://www.sciencedaily.com/releases/2026/05/260510234704.htm",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.5,
    charge: 0,
    summary: "NASA's Curiosity rover had an unexpectedly stubborn Mars souvenir after drilling into a rock nicknamed \"Atacama\" - the entire chunk ripped loose from the ground and stayed stuck to the rover's drill. Engineers watched as...",
  },
  {
    bucket: "science",
    title: "Scientists say Dante's Inferno described an asteroid impact 500 years before modern science",
    url: "https://www.sciencedaily.com/releases/2026/05/260510234658.htm",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.6,
    charge: 0,
    summary: "Dante's Inferno may have been far more than a religious epic. New research argues that the 14th-century poet essentially imagined a catastrophic asteroid impact centuries before modern science understood meteors. In this...",
  },
  {
    bucket: "science",
    title: "\"Cannot be explained\" - New ultra stainless steel stuns researchers",
    url: "https://www.sciencedaily.com/releases/2026/05/260510030950.htm",
    sourceName: "ScienceDaily",
    sourceUrl: "https://www.sciencedaily.com",
    ageHours: 10.8,
    charge: 0,
    summary: "A team at the University of Hong Kong has developed a new \"super steel\" that can survive the harsh conditions needed to make green hydrogen from seawater. The material uses an unexpected double-protection mechanism that...",
  },
  {
    bucket: "science",
    title: "Nicholas Houghton: Engineering Crew Safety for NASA's Artemis Missions",
    url: "https://www.nasa.gov/centers-and-facilities/johnson/nicholas-houghton-engineering-crew-safety-for-artemis-ii/",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov",
    ageHours: 11.0,
    charge: 0,
    summary: "Nicholas Houghton always dreamed of working at NASA and one day becoming an astronaut. Today, he helps design systems that keep crews safe during missions aboard NASA's Orion spacecraft, including the successful Artemis II...",
  },
  {
    bucket: "science",
    title: "NASA Invites Media to Annual Lunabotics Robotics Competition",
    url: "https://www.nasa.gov/news-release/nasa-invites-media-to-annual-lunabotics-robotics-competition/",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov",
    ageHours: 11.2,
    charge: 0,
    summary: "NASA will hold its 2026 Lunabotics Challenge Tuesday, May 19, to Thursday, May 21, at the Astronauts Memorial Foundation's Center for Space Education at the Kennedy Space Center Visitor Complex in Florida. Links to view the...",
  },
  {
    bucket: "science",
    title: "Joint Earth Observation Mission Quality Assessment Framework - Optical Guidelines Documents Released",
    url: "https://science.nasa.gov/science-research/earth-science/joint-earth-observation-mission-quality-assessment-framework-optical-guidelines-documents-released/",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov",
    ageHours: 11.4,
    charge: 0,
    summary: "The Optical Guidelines document provides standardized, transparent, and repeatable process for assessing the quality of optical data from commercial Earth Observation missions.",
  },
  {
    bucket: "science",
    title: "Hubble Survey Sets Up Roman's Future Look Near Milky Way's Center",
    url: "https://science.nasa.gov/missions/roman-space-telescope/hubble-survey-sets-up-romans-future-look-near-milky-ways-center/",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov",
    ageHours: 11.5,
    charge: 0,
    summary: "The Milky Way's galactic bulge, the bulbous region that surrounds the galactic center, contains a dense collection of stars, planets, and other free-floating objects. This region has been studied for decades with numerous...",
  },
  {
    bucket: "science",
    title: "How Unknowable Math Can Help Hide Secrets",
    url: "https://www.quantamagazine.org/how-unknowable-math-can-help-hide-secrets-20260511/",
    sourceName: "Quanta Magazine",
    sourceUrl: "https://www.quantamagazine.org",
    ageHours: 11.7,
    charge: 0,
    summary: "A graduate student recently harnessed the complexity of mathematical proofs to create a powerful new tool in cryptography. The post How Unknowable Math Can Help Hide Secrets first appeared on Quanta Magazine",
  },
  {
    bucket: "ai",
    title: "Study: Firms often use automation to control certain workers' wages",
    url: "https://news.mit.edu/2026/study-firms-often-use-automation-control-certain-workers-wages-0507",
    sourceName: "MIT News",
    sourceUrl: "https://news.mit.edu",
    ageHours: 10.1,
    interest: 16,
    summary: "MIT economists found US companies tend to target employees earning a \"wage premium,\" which increases inequality but not necessarily productivity.",
  },
  {
    bucket: "ai",
    title: "Games people - and machines - play: Untangling strategic reasoning to advance AI",
    url: "https://news.mit.edu/2026/untangling-strategic-reasoning-to-advance-ai-gabriele-farina-0505",
    sourceName: "MIT News",
    sourceUrl: "https://news.mit.edu",
    ageHours: 10.3,
    interest: 15,
    summary: "Assistant Professor Gabriele Farina mines the foundations of decision-making in complex multi-agent scenarios.",
  },
  {
    bucket: "ai",
    title: "Beacon Biosignals is mapping the brain during sleep",
    url: "https://news.mit.edu/2026/beacon-biosignals-maps-brain-during-sleep-0501",
    sourceName: "MIT News",
    sourceUrl: "https://news.mit.edu",
    ageHours: 10.5,
    interest: 14,
    summary: "Founded by Jake Donoghue PhD '19 and former MIT researcher Jarrett Revels, the company is creating an AI-driven platform to help diagnose and treat disease.",
  },
  {
    bucket: "ai",
    title: "Improving understanding with language",
    url: "https://news.mit.edu/2026/improving-understanding-language-olivia-honeycutt-0501",
    sourceName: "MIT News",
    sourceUrl: "https://news.mit.edu",
    ageHours: 10.6,
    interest: 13,
    summary: "MIT senior Olivia Honeycutt investigates how the ways we communicate can shape our views of the world.",
  },
  {
    bucket: "ai",
    title: "How enterprises are scaling AI",
    url: "https://openai.com/business/guides-and-resources/how-enterprises-are-scaling-ai",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com",
    ageHours: 10.8,
    interest: 12,
    summary: "How enterprises scale AI: from early experiments to compounding impact through trust, governance, workflow design, and quality at scale.",
  },
  {
    bucket: "ai",
    title: "OpenAI Campus Network: Student club interest form",
    url: "https://openai.com/index/openai-campus-network-student-club-interest-form",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com",
    ageHours: 11.0,
    interest: 12,
    summary: "Join the OpenAI Campus Network - connect student clubs worldwide, access AI tools, host events, and build an AI-powered campus community.",
  },
  {
    bucket: "ai",
    title: "OpenAI launches DeployCo to help businesses build around intelligence",
    url: "https://openai.com/index/openai-launches-the-deployment-company",
    sourceName: "OpenAI",
    sourceUrl: "https://openai.com",
    ageHours: 11.2,
    interest: 13,
    summary: "OpenAI launches DeployCo, a new enterprise deployment company built to help organizations bring frontier AI into production and turn it into measurable business impact.",
  },
  {
    bucket: "ai",
    title: "Several states considering ban on legal personhood for AI",
    url: "https://www.npr.org/2026/05/11/nx-s1-5798754/several-states-considering-ban-on-legal-personhood-for-ai",
    sourceName: "NPR",
    sourceUrl: "https://www.npr.org",
    ageHours: 11.4,
    interest: 14,
    summary: "Is it time to consider prosecuting AI models for breaking the law? Some say it's time. Others say that would be an insult to humanity. Some states are considering laws blocking AI personhood.",
  },
  {
    bucket: "ai",
    title: "VecCISC: Improving Confidence-Informed Self-Consistency with Reasoning Trace Clustering and Candidate Answer Selection",
    url: "https://arxiv.org/abs/2605.08070v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.5,
    interest: 11,
    summary: "A standard technique for scaling inference-time reasoning is Self-Consistency, whereby multiple candidate answers are sampled from an LLM and the most common answer is selected. More recently, it has been shown that weighted...",
  },
  {
    bucket: "ai",
    title: "The Memory Curse: How Expanded Recall Erodes Cooperative Intent in LLM Agents",
    url: "https://arxiv.org/abs/2605.08060v1",
    sourceName: "arXiv",
    sourceUrl: "https://arxiv.org",
    ageHours: 11.7,
    interest: 12,
    summary: "Context window expansion is often treated as a straightforward capability upgrade for LLMs, but we find it systematically fails in multi-agent social dilemmas. Across 7 LLMs and 4 games over 500 rounds, expanding accessible...",
  },
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
