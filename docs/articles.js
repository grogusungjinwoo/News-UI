window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-26T12:27:00.467746+00:00",
  "buckets": [
    "scholar",
    "random",
    "science",
    "ai"
  ],
  "sections": {
    "scholar": [
      {
        "bucket": "scholar",
        "title": "Hidden-ordered Dirac fermions",
        "articleUrl": "https://arxiv.org/abs/2606.27368v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "I propose a Hermitian extension of the Lorentz-symmetric Dirac theory by complementing the associated Hamiltonian with another \\emph{masslike} anticommuting Dirac operator. The resulting theory manifests the iconic linear energy-momentum relationship in any dimension ($d$) and hence the emergent nodal quasiparticle excitations are named \\emph{hidden-ordered Dirac fermions}, which are symmetry protected and their responses are analogous to those in original Dirac systems, however, in terms of a renormalized (due to the hidden ordering) Fermi velocity. Typically, such a hidden ordering pushes any quantum phase transition into an insulation toward even stronger coupling in any $d>1$. However, depending on the internal algebra between the candidate insulating order parameter and masslike Dirac operator, the hidden-ordering may survive or disappear near the corresponding itinerant quantum critical point. I construct lattice models for such hidden-ordered massless Dirac fermions and outline promising platforms (numerical and experimental) to test these predictions.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Autoregressive Boltzmann Generators",
        "articleUrl": "https://arxiv.org/abs/2606.27361v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Efficient sampling of molecular systems at thermodynamic equilibrium is a hallmark challenge in statistical physics. This challenge has driven the development of Boltzmann Generators (BGs), which allow rapid generation of uncorrelated equilibrium samples by combining a generative model with exact likelihoods and an importance sampling correction. However, modern BGs predominantly rely on normalizing flows (NFs), which either suffer from limited expressivity due to strict invertibility constraints (discrete time) or computationally expensive likelihoods (continuous time). In this paper, we propose Autoregressive Boltzmann Generators (ArBG) -- a novel autoregressive modelling framework -- that overcomes these limitations by departing from the flow-based BG paradigm. ArBG circumvents the topological constraints of flows and enables sequential inference-time interventions, while offering enhanced scalability by leveraging architectures effective in Large Language Models. We empirically demonstrate that ArBG leads to significant improvements over flow-based models across all benchmarks, but particularly in larger peptide systems such as the 10-residue Chignolin. Furthermore, we introduce Robin, a 132 million parameter transferable model trained with the ArBG framework which improves over the previous state-of-the-art, reducing the zero-shot energy error, E-W$_2$, on 8-residue systems by over 60$\\%$. The code can be found at the following link: https://github.com/danyalrehman/autobg.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "When are likely answers right? On Sequence Probability and Correctness in LLMs",
        "articleUrl": "https://arxiv.org/abs/2606.27359v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Many decoding methods for large language models can be understood as shifting probability mass toward outputs that are more likely under the model, either locally at the token level or globally at the sequence level. Therefore, their success depends on a fundamental question: when does sequence probability, that is, the conditional probability of a continuation given a prompt, actually align with correctness? In this paper, we set out to quantify this relationship across decoding methods, models, and benchmarks at four levels: across decoding methods, across hyperparameters within a method, across prompt-answer pairs within a dataset, and across repeated responses to the same prompt. We find that higher sequence probability is often predictive of correctness across prompt-answer pairs within a fixed dataset. However, this relationship does not generally transfer to decoding decisions: increasing sequence probability by changing hyperparameters or methods does not reliably improve accuracy. Further, sequence probability is not a good indicator of correctness for responses to the same prompt. These findings clarify when decoding can and cannot be expected to improve correctness, and provide practical guidance for decoding, self-consistency, and verifier-free self-improvement.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Cultivating logical catalysts for fault-tolerant dyadic phase rotations",
        "articleUrl": "https://arxiv.org/abs/2606.27358v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "We introduce a surface-code cultivation protocol for reusable logical catalyst states that implement exact fine dyadic phase gates $Z^{2^{-b}}$ by phase kickback. The catalyst is an eigenstate of a high-period Clifford circuit $U$, with a direct construction supported on $O(2^b)$ logical qubits. Once cultivated, each invocation implements the target phase through a controlled-$U$ gadget, removing Clifford+$T$ synthesis approximation error from the online gate and making the online non-Clifford depth independent of the target logical accuracy. As a concrete demonstration, we construct a catalyst for $\\sqrt{T}=Z^{1/8}$, where $U$ is a nine-qubit brickwork Clifford circuit and controlled-$U$ consists of eight controlled-CNOTs. Starting from nine distance-three rotated-surface-code blocks, we cultivate the catalyst through logical-$U$ checks, syndrome extraction and postselection, code growth, and complementary-gap decoding. Due to the intrinsic fault tolerance of the phase read-out, a \\emph{single} verification round already reaches the leading error-corrected scaling, in contrast to the repeated logical checks required when cultivating single-qubit magic states. A hybrid tensor-network and stabilizer simulation shows that, at physical error rate $p=10^{-3}$, the postselected catalyst can be grown to distance-seven rotated-surface-code blocks with logical leakage rate $\\sim 10^{-6}$ using around seven expected attempts, and can be suppressed further with stronger postselection. Compared with existing protocols, our approach trades offline, phase-specific catalyst cultivation for exactness, reusability, and constant-depth online implementation of fixed fine dyadic phases in codes with restricted transversal gate sets.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Beyond the equation of state: a second-order diagnostic for dynamical dark energy",
        "articleUrl": "https://arxiv.org/abs/2606.27356v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "The first-order continuity equations determine the evolution of the energy densities but depend only on the instantaneous value of the dark-energy equation-of-state parameter. Differentiating these equations with respect to e-fold time introduces the term $\u03c9'_{\\rm DE}$ explicitly, providing a second-order probe of dark-energy dynamics. Consequently, while information about the evolution of the equation of state is encoded in the full dynamical solution, it is not explicit in the first-order continuity equations evaluated at a given epoch. The second-order formulation, therefore, provides a complementary description in which the local evolution of the equation of state appears directly through the curvature of the density trajectory.\n  For a two-fluid interacting dark-sector model with linear coupling $Q_{AB}=\u03b1\u03c1_AH$, the resulting second-order equation defines a curvature diagnostic, $\\mathcal{C}=\u03c1_{DE}''/\u03c1_{DE}$, whose leading contribution, in the cosmological-constant limit, is $\u03b1^2$, while departures from $\u03c9_{DE}=-1$ generate corrections through both $\u03b4\u03c9=1+\u03c9_{DE}$ and the distinctive term $-3\u03c9_{DE}'$. Unlike first-order analyses, this contribution is independent of the interaction strength and directly identifies dynamical dark energy. Applying the diagnostic to a CPL model with parameters consistent with DESI constraints, we recover $\u03c9_{DE}'$ across the full redshift range for both weak and strong interactions. Noise propagation shows that the diagnostic is detectable with signal-to-noise ratio exceeding three for $\u03c3_H/H\\lesssim1.5\\%$, while the degeneracy between $\u03b1$ and $\u03c9_{DE}'$ remains negligible for $\u03b1\\lesssim0.1$. In the non-interacting limit, the formalism naturally recovers the Caldwell--Linder thawing/freezing classification and extends it to interacting dark-energy models.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "All you need is log",
        "articleUrl": "https://arxiv.org/abs/2606.27349v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Comparing two probability distributions is a basic building block of statistics and machine learning, and the right family is well understood: the R\u00e9nyi divergences of order $\u03b1\\in[0,\\infty]$ are the unique family monotone under data processing and additive on independent products. Many problems instead compare more than two distributions at once -- multi-population fairness, multi-prior PAC-Bayes bounds, multi-hypothesis testing -- and the right multi-distribution generalization of the R\u00e9nyi family has been an open question.\n  We characterize it. Every functional of $W$-tuples of distributions that is monotone under data processing and additive on independent products is a positive integral of multi-way coincidence divergences $C_\u03b1(\u03c0_1,\\dots,\u03c0_W) := -\\log\\int \u03c0_1^{\u03b1_1}\\cdots\u03c0_W^{\u03b1_W}$ (with $\\sum_k \u03b1_k = 1$) over a parameter space with four strata: the simplex interior; mixed-sign exponent cones (the analogue of R\u00e9nyi orders $>1$); a tropical boundary at infinity carrying max-divergences; and pairwise Kullback-Leibler edges at the simplex vertices. Each stratum is necessary -- the destination of an explicit data-processing-monotone, product-additive divergence the others cannot reproduce -- and each is a clean limit of simplex-interior atoms.\n  The same family arises from five independent routes -- the structural axioms, Kolmogorov-Nagumo means with R\u00e9nyi's entropy axiomatics, classical entropy characterizations, multi-hypothesis testing error exponents, and a multi-lottery betting interpretation -- structural evidence that this is the canonical multi-distribution R\u00e9nyi calculus rather than an artefact of any one axiomatic input. The two-prior case recovers the standard R\u00e9nyi result; a worked $W=3$ instance, numerical verification, and a conditional extension round out the treatment.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Coquasi-bialgebroids and cocycle twisting",
        "articleUrl": "https://arxiv.org/abs/2606.27343v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.6,
        "summary": "We introduce coquasi-bialgebroids over a noncommutative base algebra. Using Takeuchi's \\(\\times_B\\)-coalgebra formalism, we require the coproduct to remain an algebra map into the Takeuchi product, while the product is associative only up to an invertible normalized \\(3\\)-cocycle. This gives a bialgebroid analogue of coquasi-bialgebras and provides a natural framework for cocycle-twisted bialgebroid constructions.\n  We develop the basic theory and prove a twisting theorem by convolution-invertible \\(2\\)-cochains. As a main class of examples, we construct coquasi Connes--Moscovici-type bialgebroids on \\(B\\otimes H\\otimes B\\), where \\(H\\) is a coquasi-bialgebra measuring an algebra \\(B\\), with twisting data \\(\u03b3:H\\otimes H\\to B\\). We also give finite-group examples arising from a subgroup \\(G\\subseteq X\\) and a choice of transversal. Finally, under finite projectivity assumptions, we describe the dual quasi-bialgebroid construction and its relation to Drinfeld-type twisting.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Understanding Domain-Aware Distribution Alignment in Budgeted Entity Matching",
        "articleUrl": "https://arxiv.org/abs/2606.27342v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.6,
        "summary": "Entity Matching (EM) is a core operation in the data integration pipeline, where records from different sources are compared to determine whether they refer to the same real-world entity. Recent work has incorporated domain information and low-resource learning techniques to better adapt EM systems to realistic settings. While these approaches have demonstrated strong performance, it remains unclear how they behave under varying data constraints and levels of supervision in practice. In this paper, we investigate a state-of-the-art method for low-resource, domain-aware EM--BEACON--and study how its performance is affected by different algorithmic choices and data availability conditions. We conduct a series of targeted experiments to evaluate these variations, providing deeper insight into the role of distribution alignment and the behavior of the BEACON framework.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "On the deformation theory of chiral quantizations",
        "articleUrl": "https://arxiv.org/abs/2606.27341v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.6,
        "summary": "We give an operadic approach to deformation quantization of vertex Poisson algebras, a chiral analogue of the traditional problem of deformation quantization of Poisson algebras. Our main result is an order-by-order deformation-obstruction theory for such quantizations, controlled by the chiral analogue of Poisson cohomology. In the special case of chiral quantizations of affine symplectic varieties, quantizations of the vertex Poisson algebras of functions on their arc spaces, we prove that this deformation-obstruction theory is controlled by their de Rham cohomology. As another application, we prove that the boundary Virasoro minimal models are rigid under deformations.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Exact subsystem dynamics in the deterministic Floquet-PXP model",
        "articleUrl": "https://arxiv.org/abs/2606.27337v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.7,
        "summary": "The dynamics of local subsystems in a thermodynamically large quantum many-body system can be understood as effectively open as the system produces its own effective bath. The action of this bath can be characterised in terms of the so-called influence matrices. In generic situations, the complexity of these objects grows unfavourably with time, however, there exist solvable cases where influence matrices can be characterised exactly even in the presence of non-trivial interactions. Here we show that Rule 201, a deterministic version of the Floquet-PXP model, is one of these solvable instances. Indeed, it admits influence matrices given by a finite-dimensional matrix-product operator (MPO) that solves a finite set of algebraic conditions. We provide the solution, and characterise multi-time autocorrelation functions.",
        "charge": 0
      }
    ],
    "science": [
      {
        "bucket": "science",
        "title": "NASA\u2019s TESS Mission Reveals the \u201cPuffiest\u201d Planets Ever Found",
        "articleUrl": "https://science.nasa.gov/missions/tess/nasas-tess-mission-reveals-the-puffiest-planets-ever-found/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 11.5,
        "summary": "NASA has revealed two new \u201csuper-puff\u201d planets, giant worlds so light that their density is comparable to cotton candy. Scientists calculate that these Jupiter-sized planets are the \u201cpuffiest\u201d worlds ever found.",
        "charge": 1
      },
      {
        "bucket": "science",
        "title": "T. rex took 40 years to reach full size, scientists find",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260621110957.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 11.0,
        "summary": "Tyrannosaurus rex may have been a much slower grower than scientists realized. A new study of 17 tyrannosaur fossils found that the giant predator likely took about 40 years to reach its full size of roughly eight tons, extending previous estimates by 15 years.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Nebraska\u2019s Wide, Rolling Domain",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/nebraskas-wide-rolling-domain/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 11.4,
        "summary": "The Nebraska Sandhills\u2014the largest system of sand dunes in the Western Hemisphere\u2014stretch across about one-quarter of the state.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Beneath our feet lies a fungal superhighway stretching 68 quadrillion miles",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260614011845.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 11.1,
        "summary": "Beneath our feet lies a vast hidden fungal superhighway that helps sustain much of life on Earth\u2014and scientists have now mapped it for the first time. Researchers estimate that these underground networks stretch an astonishing 110 quadrillion kilometers, move about 4 billion tons of carbon dioxide into soils each year, and play a major role in supporting plants and regulating the climate.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Pumice Rafts Encroach on Admiralty Islands",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/pumice-rafts-encroach-on-admiralty-islands/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 12.1,
        "summary": "Buoyant volcanic rock fragments from an underwater eruption drifted across the Bismarck Sea and choked island coasts.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Oxford physicists just made Schr\u00f6dinger\u2019s cat even stranger",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260614011848.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 8.6,
        "summary": "Oxford physicists have created an entirely new type of Schr\u00f6dinger\u2019s cat-like quantum state using components that are themselves highly quantum in nature. The advance could open new possibilities for more resilient quantum computers and deeper insights into the strange rules that govern the quantum universe.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Ancient Denisovan DNA still shapes human immunity today",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260613034210.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.4,
        "summary": "Ancient encounters between humans and the mysterious Denisovans are still shaping people today. By analyzing genomes from populations across the Pacific, researchers uncovered evidence that the ancestors of Near Oceanians interbred with at least three different Denisovan groups, leaving behind genetic variants that remain active in modern humans.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Why middle age is becoming a breaking point in the U.S.",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260613215430.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 9.9,
        "summary": "A new international study finds that middle-aged Americans are lonelier, more depressed, and experiencing worse memory and health than earlier generations. Researchers say growing financial strain, weaker social supports, and chronic stress may explain why the U.S. is falling behind other wealthy nations.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Air Pollution\u2019s Daily Pulse Over the Northeast",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/air-pollutions-daily-pulse-over-the-northeast/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 10.2,
        "summary": "The TEMPO mission helped scientists track morning nitrogen dioxide that contributed to afternoon ozone along the New York\u2013Washington corridor in May 2026.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Tyndall\u2019s Trail of Bergs",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/tyndalls-trail-of-bergs/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 9.8,
        "summary": "Ice splintered off the southern Patagonia glacier and drifted across a growing glacial lake.",
        "charge": 0
      }
    ],
    "ai": [
      {
        "bucket": "ai",
        "title": "Could AI tell you where you left your keys?",
        "articleUrl": "https://news.mit.edu/2026/could-ai-tell-you-where-you-left-your-keys-0617",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.1,
        "summary": "A new spatial memory system for robots efficiently captures details about the objects they see while exploring their environment.",
        "interest": 4
      },
      {
        "bucket": "ai",
        "title": "Would you return a favor? Scientists say it depends on the relationship",
        "articleUrl": "https://news.mit.edu/2026/would-you-return-favor-scientists-say-it-depends-0611",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.2,
        "summary": "A new study shows people expect reciprocal generosity only in interactions with friends or others of equal social status.",
        "interest": 3
      },
      {
        "bucket": "ai",
        "title": "New imaging system sees through murky waters",
        "articleUrl": "https://news.mit.edu/2026/new-imaging-system-sees-through-murky-waters-0611",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.2,
        "summary": "The \u201cSonar-MASt3R\u201d combines sonar and visual data to create real-time 3D maps, even in cloudy water.",
        "interest": 2
      },
      {
        "bucket": "ai",
        "title": "Improving the performance of high-power electronics",
        "articleUrl": "https://news.mit.edu/2026/improving-high-power-electronics-performance-0608",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.5,
        "summary": "By using a thin layer of diamond to manage excessive heat, researchers can boost the speed and energy-efficiency of next-generation wireless devices.",
        "interest": 3
      },
      {
        "bucket": "ai",
        "title": "MIT researchers teach AI models to interpret charts",
        "articleUrl": "https://news.mit.edu/2026/mit-researchers-teach-ai-models-to-interpret-charts-0603",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 11.1,
        "summary": "The new ChartNet training dataset could improve the accuracy of vision-language models that help analyze business trends or interpret scientific figures.",
        "interest": 6
      },
      {
        "bucket": "ai",
        "title": "A plan to preserve wetlands without stopping development",
        "articleUrl": "https://news.mit.edu/2026/preserving-wetlands-without-stopping-development-0602",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.6,
        "summary": "Study shows the tradeoff between conservation and growth is less stark with a locally adjusted policy featuring both tradeable offsets and taxes.",
        "interest": 2
      },
      {
        "bucket": "ai",
        "title": "Study: Firms often use automation to control certain workers' wages",
        "articleUrl": "https://news.mit.edu/2026/study-firms-often-use-automation-control-certain-workers-wages-0507",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.1,
        "summary": "MIT economists found US companies tend to target employees earning a \"wage premium,\" which increases inequality but not necessarily productivity.",
        "interest": 2
      },
      {
        "bucket": "ai",
        "title": "Games people - and machines - play: Untangling strategic reasoning to advance AI",
        "articleUrl": "https://news.mit.edu/2026/untangling-strategic-reasoning-to-advance-ai-gabriele-farina-0505",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.3,
        "summary": "Assistant Professor Gabriele Farina mines the foundations of decision-making in complex multi-agent scenarios.",
        "interest": 9
      },
      {
        "bucket": "ai",
        "title": "Beacon Biosignals is mapping the brain during sleep",
        "articleUrl": "https://news.mit.edu/2026/beacon-biosignals-maps-brain-during-sleep-0501",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.5,
        "summary": "Founded by Jake Donoghue PhD '19 and former MIT researcher Jarrett Revels, the company is creating an AI-driven platform to help diagnose and treat disease.",
        "interest": 2
      },
      {
        "bucket": "ai",
        "title": "Improving understanding with language",
        "articleUrl": "https://news.mit.edu/2026/improving-understanding-language-olivia-honeycutt-0501",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 10.6,
        "summary": "MIT senior Olivia Honeycutt investigates how the ways we communicate can shape our views of the world.",
        "interest": 3
      }
    ]
  },
  "randomPool": [
    {
      "bucket": "random",
      "title": "How male infertility is still not getting enough attention",
      "articleUrl": "https://www.bbc.co.uk/news/articles/cx2w4kz7z1ko?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 11.4,
      "summary": "How could the system better support men who have been told they might have a fertility issue?",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Salah's World Cup pain ends as he fires Egypt to historic win",
      "articleUrl": "https://www.bbc.com/sport/football/articles/c17yn5y977yo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.2,
      "summary": "Mohamed Salah fires Egypt to their first ever World Cup win - 92 years on from their tournament debut.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Kids were made to eat dog biscuits off the floor - pupils speak out after school abuse payouts",
      "articleUrl": "https://www.bbc.com/news/articles/c5yz2r0197do?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.6,
      "summary": "Former pupils describe staff pelting them with footballs and pouring pints of blackcurrant over them.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Do esports students do more than play games?",
      "articleUrl": "https://www.bbc.com/news/articles/cpv3kml48g2o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.2,
      "summary": "Marketing, nutrition and video editing, there is apparently more to esports than being good at games.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Backstage at Gorillaz' epic, one-off stadium show: 'The vibe is ridiculous'",
      "articleUrl": "https://www.bbc.com/news/articles/cm203gndx0lo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.1,
      "summary": "Damon Albarn, De La Soul and Moonchild Sannelly talk backstage as Gorillaz play their biggest show.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "New video game console aims to get kids moving",
      "articleUrl": "https://www.bbc.com/news/articles/czx50rrz7zro?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.0,
      "summary": "The cube-shaped console will cost \u00a3269 (\u20ac319) when it is released on 22 June in the UK and Ireland.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Midjourney goes from generating cat images to full-body ultrasound scans",
      "articleUrl": "https://www.theverge.com/ai-artificial-intelligence/952011/midjourney-medical-ai-ultrasound-scan",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 10.5,
      "summary": "Midjourney CEO David Holz just showed off the company's first hardware product and plans to build a San Francisco spa, which he admitted is a bit different from the \"cat pictures\" produced by its AI image generator. Dubbed The Midjourney Scanner, it's an ultrasound-based full-body scanner that uses a ring of sensors to capture vertical [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Woman left traumatised by swinging says website 'facilitated abuse'",
      "articleUrl": "https://www.bbc.com/news/articles/c87q7g48y4po?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.4,
      "summary": "She wants to warn others after her husband pressured her into sex she did not want, she says.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "OnlyFans 'agents' control and threaten creators while taking half their earnings, BBC finds",
      "articleUrl": "https://www.bbc.com/news/articles/c932gpk2l1do?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.1,
      "summary": "Dozens of women on OnlyFans describe being exploited by managers who promised to help maximise profits.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Gene Shalit, longtime 'Today' show movie critic, dies at 100",
      "articleUrl": "https://www.npr.org/2026/06/12/g-s1-128022/gene-shalit-movie-critic-dies",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 11.0,
      "summary": "Known for his puffy hair, oversized handlebar mustache and a love for puns, Gene Shalit joined  Today  in 1970 and became arts editor in 1973. He was a middle-of-the-road critic, known for his wit and intelligence.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "500 Years Ago, Leonardo da Vinci\u2019s Notebook Was Cut Up and Separated. Now, the Inventor's Manuscripts and Drawings Are Reconstructed in an Online Archive",
      "articleUrl": "https://www.smithsonianmag.com/smart-news/500-years-ago-da-vincis-notebook-was-cut-up-and-separated-now-the-inventors-manuscripts-and-drawings-are-reconstructed-in-an-online-archive-180988922/",
      "sourceName": "Smart News | smithsonianmag.com",
      "sourceHomeUrl": "https://www.smithsonianmag.com",
      "ageHours": 11.2,
      "summary": "A new tool developed by Museo Galileo researchers has restored 50 pages from fragments excised centuries ago",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Israel and Iran exchange missile fire threatening Middle East truce",
      "articleUrl": "https://www.npr.org/2026/06/08/g-s1-126844/iran-war-updates",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 10.1,
      "summary": "The exchange marked a major escalation in the already tense region. It came on the 100th day of a war that began on Feb. 28, further complicating efforts to end Middle East fighting.",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "SoFi Stadium workers vote to authorize strike ahead of World Cup",
      "articleUrl": "https://www.npr.org/2026/06/06/nx-s1-5848682/sofi-stadium-strike-world-cup",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 11.4,
      "summary": "Negotiations between the union representing the workers, the hospitality group at the Los Angeles stadium and FIFA are set to continue Monday.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Why one of the cities most dependent on the Colorado River now has water for sale",
      "articleUrl": "https://www.npr.org/2026/06/03/nx-s1-5810173/why-one-of-the-cities-most-dependent-on-the-colorado-river-now-has-water-for-sale",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 11.1,
      "summary": "Once one of the most dependent on the Colorado River, San Diego now may have water to sell to states that are seeing their supplies from the shrinking river cut.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Emma Barnett: We can't ignore this disease that leaves one in 10 women like me in agony",
      "articleUrl": "https://www.bbc.com/news/articles/c4g4jpzxk4zo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.3,
      "summary": "Women tell the BBC presenter how endometriosis affects their lives, as she challenges ministers to take action.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'Don't be too kind': Maternity staff used offensive terms to refer to pregnant women",
      "articleUrl": "https://www.bbc.com/news/articles/c152y8j4gljo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.3,
      "summary": "BBC Panorama has seen documents and spoken to former midwives from Nottingham University Hospitals NHS Trust.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "U.S. bombs Iranian military sites and Kuwait is hit by drone and missile fire",
      "articleUrl": "https://www.npr.org/2026/06/01/g-s1-125126/us-iran-war-updates",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 10.4,
      "summary": "The U.S. military says it bombed Iranian radar and drone control sites in Iran after Tehran shot down an American MQ-1 Predator drone this weekend. Kuwait said its air defenses opened fire on Monday.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "How one borough is bucking the UK's youth unemployment trend",
      "articleUrl": "https://www.bbc.com/news/articles/cd6p9yyg64vo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.9,
      "summary": "Could personalised early intervention help prevent under-16s falling into the Neet trap?",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "North America\u2019s 50 Best Restaurants in 2026: The Full List",
      "articleUrl": "https://www.eater.com/restaurant-news/965010/north-america-50-best-restaurants-2026-winners-how-to-watch",
      "sourceName": "Eater",
      "sourceHomeUrl": "https://www.eater.com",
      "ageHours": 10.6,
      "summary": "The 2026 edition of the North America\u2019s 50 Best Restaurants list was announced live tonight at an awards ceremony in New Orleans, where the best chefs from across the U.S., Canada, and the Caribbean gathered to compete and celebrate. This year, Smyth in Chicago was named the No. 1 restaurant in the region, while new [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Rescuers race to free seven people trapped in flooded Laos cave",
      "articleUrl": "https://www.bbc.com/news/articles/cglpp1g388zo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.0,
      "summary": "A team of experts who helped free a teen football team from a Thai cave in 2018 are among the rescuers.",
      "charge": 0
    }
  ]
});
