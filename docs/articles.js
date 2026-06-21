window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-21T12:21:47.074722+00:00",
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
        "title": "How Transparent is DiffusionGemma?",
        "articleUrl": "https://arxiv.org/abs/2606.20560v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "LLM reasoning transparency is a critical affordance for understanding model decisions, mitigating misuse and misalignment, and debugging surprising model behaviors. However, DiffusionGemma performs a larger fraction of its computation in a continuous latent space; does this make its reasoning less transparent? We study this question by decomposing transparency into two components: variable transparency, whether we understand intermediate snapshots of a model's computational state; and algorithmic transparency, whether we can use these snapshots to reconstruct the process by which the model arrived at its outputs. Naively, DiffusionGemma has poor variable transparency: its opaque serial depth, the amount of serial computation that occurs in between interpretable model states, seems at first 28.6X higher than the corresponding autoregressive Gemma 4 model. However, we show that we can map the information flowing between denoising steps through an interpretable token bottleneck with no decrease in downstream performance. Treating these intermediate states as interpretable reduces the opaque serial depth to just 1.1X that of Gemma 4. Algorithmic transparency is harder for diffusion models than for autoregressive models because all token predictions in the canvas can change at every denoising step, giving the model the power to implement complicated distributed algorithms during the denoising process. To begin bridging this gap, we conduct a suite of interpretability case studies, uncovering initial evidence of novel diffusion-specific phenomena such as non-chronological reasoning, token and sequence smearing, and intermediate-context reasoning. Finally, we test monitorability, a key application of transparency that measures whether model outputs are useful for downstream tasks. We find that DiffusionGemma is similarly monitorable to Gemma 4.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Optimal Deterministic Multicalibration and Omniprediction",
        "articleUrl": "https://arxiv.org/abs/2606.20557v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "A model is multicalibrated on a collection of group weights $G$ if it is calibrated -- i.e. unbiased even conditional on its prediction -- not just overall, but also after reweighting contexts by each $g \\in G$. It is a useful property for many downstream applications and is a basic desideratum of trustworthy machine learning. Before this work, all predictors known to attain the minimax-optimal $\\widetilde O(\\varepsilon^{-3})$ sample complexity rate for $\\varepsilon$-multicalibration were randomized, while deterministic predictors were known only with substantially worse sample complexity. Whether randomization is necessary for optimal sample complexity in multicalibration was explicitly asked by [CLNR26] and implicitly in several prior works.\n  We resolve this open problem by giving a minimax-optimal multicalibration algorithm that outputs a deterministic predictor. We then generalize the algorithm to produce optimal deterministic predictors that satisfy outcome indistinguishability (OI) with respect to finite or finitely covered collections of tests. As an application, this also gives deterministic omnipredictors and panpredictors with optimal sample complexity, resolving open problems posed by [OKK25] and [BHHLZ25].",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Topological Codes Based on Space Groups",
        "articleUrl": "https://arxiv.org/abs/2606.20548v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "Topological codes form one of the most important classes of stabilizer codes. Most existing algebraic constructions and analyses of topological codes assume translation invariance. Here we show that topological codes can arise in more general settings by incorporating point group operations. The central construction is a class of Calderbank-Shor-Steane (CSS) codes called space-group codes, whose check operators are built from group-algebra templates over space groups that combine translations with point-group operations. We develop methods for analyzing topological properties of space-group codes using ring-modules and their invariant theory. At first glance, space-group codes might appear to complicate practical implementation; however, we find that they can exhibit greater locality than previous codes based purely on translations. Our framework thus extends the landscape of topological codes and opens up a broader design space for the co-design of topological codes with quantum computing platforms.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The Token Is a Group Element: On Lie-Algebra Attention over Matrix Lie Groups",
        "articleUrl": "https://arxiv.org/abs/2606.20547v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "We place the attention token on the group: a token is an element $g_i$ of a matrix Lie group $G$ -- a bare transformation, with no feature payload and no external action $\u03c1(g)$ carrying it. To our knowledge this is the first attention construction whose tokens are bare matrix Lie group elements: their score is the closed-form algebra norm of the relative pose rather than a learned kernel, and it reaches the affine full-frame groups that every irrep- or surjective-exp-based method must exclude. We call it Lie-Algebra Attention. Once tokens are group elements, the rest follows with none of the usual representation-theoretic machinery. The relative geometry of a pair is canonical, $g_i^{-1} g_j$, so the pairwise invariant $w_{ij} = \\log(g_i^{-1} g_j)$ is intrinsic rather than designed; equivariance under the diagonal $G$-action is tautological, and the cocycle condition holds automatically. The attention score is the negative squared algebra norm, $s_{ij} = -\\|\\log(g_i^{-1} g_j)\\|_\u03bb^2/\u03c4$: the canonical proximity kernel under a block-weighted Frobenius inner product, with no irreducible representations, spherical harmonics, Clebsch-Gordan products, or learned kernel. The construction applies to any matrix Lie group on a chosen logarithm chart containing the relative poses, including the non-compact non-abelian affine groups with scale and shear that no vector-token attention method reaches: neither the irrep tradition nor surjective-exp methods. Three sequence-completion experiments, on SE(2), SO(3), and Aff(2), bear this out: the closed-form score matches a learned MLP kernel on the same invariant and outperforms it on SE(2), using 50 to 80x fewer score parameters, while a vector-token baseline breaks invariance by five to twelve orders of magnitude.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Toward Calibrated Mixture-of-Experts Under Distribution Shift",
        "articleUrl": "https://arxiv.org/abs/2606.20544v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "Calibration aligns a model's predictive uncertainty with the frequencies of its empirical outcomes and is important for understanding and trusting reported probabilities. Recent work shows that enforcing calibration at the level of individual predictors can improve ensemble accuracy and calibration, with mixture-of-experts (MoE) models showing strong empirical improvements in particular; however, the conditions under which calibration helps MoE are not well understood. In this work, we study how MoE models behave under distribution shift, focusing on how routing mechanisms interact with expert-level calibration. We show that expert calibration is sufficient to ensure calibration of the overall model under a broad class of distribution shifts in hard-routed models, but is insufficient for calibrating soft-routed models. To address this, we propose an adversarial reweighting that penalizes calibration errors of the routed aggregate under distribution shift, and we demonstrate that it improves the accuracy-calibration tradeoff both on average and on difficult subsets of the data, across model classes, prediction tasks, and distribution shifts.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Controllable Quantum Spin Hall Phases in Bi$_2$Te$_3$-Family van der Waals Heterobilayers",
        "articleUrl": "https://arxiv.org/abs/2606.20541v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "The tunability and control of topological edge/surface states are crucial for the development of new device applications. In this work, by combining first-principles calculations and Wannier-based tight-binding methods, we show the emergence of quantum spin Hall phases in van der Waals heterostructures formed by stacking two trivial quintuple layers from the Bi$_2$Te$_3$ family. We demonstrate the tunability of the edge states under interlayer strain and external electric field effects, suggesting the possibility of switching topological edge states on/off by external control. Additionally, the quantum spin Hall edge channels remain robust against interlayer twist, highlighting their stability against external perturbations. Our results provide a new way to create and manipulate two-dimensional topological phases in systems based on Bi$_2$Te$_3$ family, which can be valuable for practical applications, such as topological field effect transistors and spintronic devices.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Higher Lovelock Curvature Terms Favor Local Nakedness in Dust Collapse",
        "articleUrl": "https://arxiv.org/abs/2606.20540v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "We show that higher-curvature Lovelock terms do not restore local cosmic censorship in spherical dust collapse, but instead promote the local visibility of central shell-focusing singularities. On the collapse branch with positive highest-order Lovelock coefficient \\(c_N\\), the highest nonvanishing Lovelock order \\(N\\) controls both the near-singularity collapse and the formation of trapped surfaces. In noncritical dimensions, \\(D-1-2N>0\\), the apparent-horizon curve approaches the singularity curve with trapping exponent \\(\u03b2_N=(D-1)/(D-1-2N)\\). Comparing this scale with the first nonvanishing correction \\(r^\\ell\\) to the singularity curve gives the local-visibility condition \\(\\ell<\u03b2_N\\), provided the singularity curve opens outward. Thus increasing \\(N\\) enlarges the class of inhomogeneous initial data producing outgoing radial null rays from the central singularity. In the critical odd-dimensional branch, \\(D=2N+1\\), no apparent horizon forms sufficiently close to the center, so any outward opening of the singularity curve gives local visibility. The locally visible singularities are Kr\u00f3lak-strong along the emerging null rays, with Tipler strength reached at threshold. For bound and unbound collapse, the noncritical exponents are unchanged: the energy function modifies the opening of the singularity curve, while in the critical branch it enters the leading terminal collapse velocity.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Multi-Task Bayesian In-Context Learning",
        "articleUrl": "https://arxiv.org/abs/2606.20538v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "Bayesian predictive inference provides a principled framework for uncertainty quantification, data efficiency, and robust generalization. However, exact inference is often intractable, and scalable approximations may remain computationally expensive or require restrictive modeling assumptions that degrade predictive performance. Prior-Data Fitted and in-context models have recently emerged as an amortized alternative by learning to map datasets directly to predictive distributions, but existing approaches are tightly coupled to the support of the training prior and lack explicit mechanisms for adapting to new priors at test time, resulting in limited robustness under distribution shift. We introduce a multi-task in-context learning framework for amortized hierarchical Bayesian predictive inference that explicitly represents prior information as a prefix of in-context datasets. A transformer trained on sequences of prior and target tasks learns to adapt its predictions across families of priors. On a suite of evaluations with increasing difficulty, including out-of-meta-distribution priors and priors with high-dimensional latent structures, our method matches oracle Bayesian predictors while being orders of magnitude faster. We further demonstrate its practical relevance on a real-world spatiotemporal temperature prediction benchmark. Code is available at https://github.com/martianmartina/multi-task-bayesian-icl/.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Near-Optimal Learning of Local Lindbladians",
        "articleUrl": "https://arxiv.org/abs/2606.20535v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "We study the problem of learning local Lindbladians from black-box access to the physical evolution, and the goal is to estimate all Hamiltonian and dissipative coefficients. We give an algorithm built directly from finite-time channel probes, which runs the unknown evolution for short times, estimates the corresponding Pauli transfer matrices from classical shadows, and converts these estimates into Lindbladian coefficients by stable local Fourier inversions. For fixed locality and bounded dissipative site degree, the uses of the dynamical evolution and total evolution time scale as $\\widetilde{O}(\u039b^2/\\varepsilon^2)$ and $\\widetilde{O}(\u039b/\\varepsilon^2)$ respectively, in the local dynamical strength bound $\u039b$ and target accuracy $\\varepsilon$, with only logarithmic dependence on the number of qubits. The algorithm is non-adaptive, uses no ancillas, and uses only random product states as inputs followed by random Pauli measurements. The method does not require knowing the support of the Lindbladian in advance. We complement the algorithm with matching lower bounds, showing that the learning algorithm is near-optimal both in physical dynamics accesses and in total evolution time. We construct a single-qubit dephasing Lindbladian family that already requires $\u03a9(\u039b^2/\\varepsilon^2)$ channel uses and $\u03a9(\u039b/\\varepsilon^2)$ total evolution time, even for adaptive algorithms with arbitrary ancillas and measurements. In particular, the lower bounds imply that the Heisenberg-limited scaling achievable for Hamiltonian learning is information-theoretically impossible once dissipative coefficients must be estimated.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "On Second-Order Methods for Bilevel Optimization",
        "articleUrl": "https://arxiv.org/abs/2606.20534v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "Bilevel optimization is an indispensable modeling tool for modern machine learning and engineering design. However, the theory and practice for finding second order stationary points in the context of bilevel optimization still remain largely unsettled. Even for bilevel optimization with strongly convex lower-level problem, the hyperfunction it induces is in general nonconvex. Although the Cubic Regularized Newton methods (CRN) famously achieve the optimal $\\mathcal{O}(\\varepsilon^{-1.5})$ SOSP (second-order stationary point) rate in single-level optimization, it is unclear how to control the accuracy of the hypergradient and hyper-Hessian computations in the context of applying the second-order methods to bilevel problems in order for the overall process to be efficient. In this paper, we set out to answer this question. In particular, we first formulate a double loop CRN baseline that achieves the optimal outer rate but requires repeated lower level solves. Next, we propose a single loop cubic regularized Newton algorithm that combines one lower-level gradient step with one Newton step for the hypergradient, and prove an overall deterministic $\\mathcal{O}(\\varepsilon^{-1.5})$ total oracle complexity, which is optimal. In addition, we illustrate that some intuitively simple modifications of our method may fail to hold up the convergence result. To the best of our knowledge, this is the first deterministic single loop method for unconstrained NCSC (non-convex upper-level and strongly convex lower-level) bilevel optimization setting that achieves the $\\mathcal{O}(\\varepsilon^{-1.5})$ optimal convergence rate for finding an $\\varepsilon$-SOSP of the hyperfunction.",
        "charge": 0
      }
    ],
    "science": [
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
      },
      {
        "bucket": "science",
        "title": "San Francisco\u2019s Metropolitan Mosaic",
        "articleUrl": "https://science.nasa.gov/missions/station/san-franciscos-metropolitan-mosaic/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 9.3,
        "summary": "Urban development, green spaces, and maritime activity converge in this Northern California city.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Digging Back in Time in the UAE",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/digging-back-in-time-in-the-uae/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 10.5,
        "summary": "Once below a shallow sea, Jabal al F\u0101yah now stands above the desert in the United Arab Emirates as a reminder of a watery past and early human survival.",
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
    },
    {
      "bucket": "random",
      "title": "Surf photographer attacked in water by 'shark or sea lion'",
      "articleUrl": "https://www.bbc.com/sport/surfing/articles/cx213zv3dv3o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.3,
      "summary": "The finals day of the World Surf League's New Zealand Pro event was paused after a photographer was attacked.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Spurred on by the painful death of her dad, Natalie Cassidy trains as a carer",
      "articleUrl": "https://www.bbc.com/news/articles/c70v1yy9nn1o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.8,
      "summary": "The actress's experience caring for her father inspired her to return to education in a new BBC show.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'We are resilient': As San Diego's Muslim community reels from mosque shooting, it refuses to be intimidated",
      "articleUrl": "https://www.bbc.com/news/articles/clypx2pr52qo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.8,
      "summary": "Thousands attend funeral prayers for the three victims of Monday's deadly shooting at the Islamic Centre of San Diego.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Is a bank holiday heatwave on the way?",
      "articleUrl": "https://www.bbc.com/weather/articles/c4g5zgzre5ro?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.1,
      "summary": "The warmest weather of the year is forecast for later this week after early rain.",
      "charge": 0
    }
  ]
});
