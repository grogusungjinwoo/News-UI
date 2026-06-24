window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-24T12:29:51.545664+00:00",
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
        "title": "AutoDex: An Automated Real-World System for Dexterous Grasping Data Collection",
        "articleUrl": "https://arxiv.org/abs/2606.23689v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.8,
        "summary": "Learning robust dexterous grasping requires real-world data that records the physical outcomes of grasp attempts. Such data is hard to obtain at scale: teleoperation yields valid physical outcomes but is slow and operator-biased, while simulation-based generation is cheap and scalable but cannot certify contact validity. A natural solution is to generate candidate grasps and verify them on real hardware, but this scales only if the entire collection loop (perception, execution, labeling, and reset) runs without human intervention. We present AutoDex, an automated real-world data-collection system that closes this loop: for each candidate from a replaceable generator, it localizes the object under severe hand-object occlusion with dense 20-camera perception, executes collision-monitored robot motions, labels lift-and-hold success or failure, and actively resets the object between trials to expose additional candidates across stable poses. The result is a reusable database of physically labeled grasp trials that downstream systems can query by retrieval and feasibility filtering. Using AutoDex, we collect 3,593 grasp trials across Allegro and Inspire hands on 100 diverse objects, with synchronized multi-view observations and robot-state logs. For a matched 500-trajectory collection, AutoDex requires 10.3 h versus 49.4 h for teleoperation, yielding a 4.8x throughput improvement, and grasps retrieved from the AutoDex-validated database succeed 76% versus 34% for simulation-only validation. Code and data will be publicly released.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Emergent Andreev Reflection from a Lattice Duality Defect",
        "articleUrl": "https://arxiv.org/abs/2606.23684v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.8,
        "summary": "Andreev reflection converts an incoming fermion into an outgoing hole and is usually tied to a superconducting interface. We show that an analogous charge-conjugating boundary condition emerges from a purely lattice duality defect. Starting from a Majorana representation of the transverse-field Ising chain, we construct a folded lattice model in which a boundary Majorana impurity implements a one-site translation of a staggered Majorana chain. In the continuum, this translation becomes a chiral fermion-parity defect: it flips the sign of the only left-moving Majorana mode while leaving the right-moving mode unchanged. When the two Majorana modes are recombined into a complex fermion in the folded geometry, this sign flip becomes the Andreev-like boundary condition. Our lattice formulation gives a microscopic interpretation of the Emery--Kivelson boundary of the two-channel Kondo problem and of Maldacena--Ludwig monopole scattering, while identifying the boundary as the interface between a Kitaev-chain SPT phase and a gapless chain. The same Majorana translation defect also provides a lattice realization of an axial $U(1)_A$-symmetric charge-flip boundary.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Semantic Browsing: Controllable Diversity for Image Generation",
        "articleUrl": "https://arxiv.org/abs/2606.23679v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.8,
        "summary": "Modern text-to-image models excel in visual fidelity and prompt adherence. However, this strict adherence comes at the cost of diversity: generated samples tend to collapse into a single visual interpretation. Existing methods to improve diversity produce outputs driven by incidental variations rather than meaningful design choices. This motivates a new variant of the diversity task where structure is enforced on the generated samples. We introduce a method for controlled diversity that enables Semantic Browsing, where users can navigate structured image galleries and experience creative exploration through a systematic traversal of meaningful, interpretable axes of variation. Achieving this level of semantic control requires a deep understanding of the scene. We exploit the fact that recent text-to-image models are trained on elaborated captions, effectively decoupling semantic decision-making from pixel generation. This enables a paradigm shift: instead of relying on stochastic variation within the text-to-image model, we induce diversity directly at the text level. By leveraging rich textual representations, we allow a Vision Language Model (VLM) to operate on the full scene context. To overcome the generic outputs typical of standard VLMs, we employ an agentic workflow that explicitly enforces structured variation attuned to the original prompt. We demonstrate that our method produces diverse and navigable design spaces where every variation corresponds to a specific, user-understandable semantic decision.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "PsyBridge: A Hybrid Intelligent Framework for Multi-Dimensional Mental Health Assessment and Decision Support",
        "articleUrl": "https://arxiv.org/abs/2606.23673v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.8,
        "summary": "Mental health assessment commonly relies on isolated screening instruments or data-driven models that often lack interpretability and multi-dimensional integration. Existing approaches frequently focus on individual indicators such as depression or anxiety while providing limited support for comprehensive and explainable decision-making. To address this limitation, this study proposes PsyBridge, a hybrid intelligent decision-support framework designed for multi-dimensional mental health assessment through the integration of clinically validated screening tools, cognitive evaluation, and personality profiling within a unified architecture. The proposed framework incorporates PHQ-9 and GAD-7 assessments alongside cognitive and behavioural indicators using a modular design and a weighted aggregation mechanism to generate interpretable mental health risk classifications and recommendations. To evaluate the framework, a semi-synthetic dataset consisting of 500 patient profiles representing varying severity levels was constructed based on clinically grounded score distributions. Experimental results demonstrate that PsyBridge achieves an overall accuracy of 0.84, outperforming standalone PHQ-9 and GAD-7 assessments while improving precision, recall, and F1-score. Sensitivity analysis and ablation studies further indicate that integrating cognitive and personality components contributes to more stable classification performance and reduces inconsistencies in moderate-risk prediction. The findings suggest that PsyBridge provides a scalable and interpretable approach for AI-assisted mental health decision support, particularly within digital healthcare and telehealth environments.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Tapered Language Models",
        "articleUrl": "https://arxiv.org/abs/2606.23670v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.9,
        "summary": "Modern language models, including transformer, recurrent, and memory-based variants, share a common chassis: a stack of identical layers in which parameters are allocated uniformly across depth. This is a default inherited from the original transformer and largely unchanged since, yet a growing body of evidence suggests that layers contribute non-uniformly to the final output, with later layers refining the residual stream rather than transforming it. We ask whether parameter capacity should reflect this asymmetry. Our controlled experiment shows that, under a fixed budget, allocating more capacity to earlier layers and less to later layers improves perplexity over a uniform-width baseline, while the reverse allocation hurts. Building on this result, we introduce Tapered Language Models (TLMs), an architectural principle in which a parameter-bearing component is monotonically tapered across depth under a fixed total budget. MLPs are the natural site for this instantiation: they dominate parameter count across all modern LM families and expose width as a single, clean axis of variation. Across three model scales and four architectures (Transformer, Gated Attention, Hope-attention, and Titans), tapering MLP width via a smooth cosine schedule consistently improves perplexity and downstream benchmark performance over uniform baselines, at no additional parameter or compute cost. These findings establish depth-aware capacity allocation as a simple, architecture-agnostic axis of language model design, a free lever hidden in plain sight.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "MAS-PromptBench: When Does Prompt Optimization Improve Multi-Agent LLM Systems?",
        "articleUrl": "https://arxiv.org/abs/2606.23664v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.0,
        "summary": "Multi-agent systems (MAS) offer a scalable path forward for agentic AI, comprising multiple LLM-based agents, each assigned a system prompt and a position within a workflow that governs inter-agent coordination and output aggregation. System prompts thus form a critical and accessible optimization surface: they specify agents' roles and behaviors, enabling system-level improvements without model finetuning. Although prompt optimization has shown substantial potential for single LLMs, extending it to MAS poses distinct challenges, notably an exponentially growing search space. It remains unclear whether, when, and by how much prompt optimization improves MAS performance, and how sensitive such gains are to system configuration. In this work, we systematically study system-prompt optimization across a broad range of MAS setups varying in task, workflow, communication protocol, and team size, benchmarking two prompt optimizers that naturally extend state-of-the-art single-agent methods. The results reveal its potential to unlock significant gains while exposing open challenges, characterizing when and how much prompt optimization helps across diverse MAS settings.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Resolving support-mismatch by local basis rotation in variational Monte Carlo",
        "articleUrl": "https://arxiv.org/abs/2606.23657v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.1,
        "summary": "Real-time dynamics after a local quench by a charged operator encodes the response functions measured in spectroscopic experiments, yet they have long posed a challenge for variational Monte Carlo calculations. The obstacle is a support mismatch: the projective action by a charged local operator forces an exponentially large number of configurations to vanish, but these configurations may still contribute to the dynamics, biasing the estimators and freezing the evolution at the very first step. This difficulty is an artifact of the chosen sampling basis, and the support mismatch generated by a charged local operator is itself local. We demonstrate that the missing support can be restored by a local rotation of the sampling basis, without changing the underlying variational dynamics. We propose a local basis-rotation sampling scheme that resolves the support-mismatch problem and can be readily incorporated into existing variational Monte Carlo algorithms. Benchmarks show that rotation sampling accurately captures long-time quantum dynamics, enabling variational Monte Carlo calculations of dynamical structure factors in one dimension and unbiased local-operator quench dynamics in two dimensions. We also show that this resolution of the support-mismatch problem extends beyond real-time dynamics, and may also be helpful for ground state variational Monte Carlo calculations.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Dynamic estimation of slowly varying sequences",
        "articleUrl": "https://arxiv.org/abs/2606.23655v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.1,
        "summary": "We consider the problem of sequentially approximating functions of each element in a slowly-varying sequence, i.e. one where the magnitude $\u03b1_i$ of the difference between the elements at positions $i$ and $i-1$ is small. Recent work on implicit trace estimation shows that when $\u03b1_t$ is small, reusing queries to past sequence elements can reduce the overall cost [Dharangutte \\& Musco, NeurIPS~2021; Woodruff et al., NeurIPS~2022]. We introduce a framework generalizing this to a variety of linear and nonlinear functions on diverse vector spaces, obtaining novel sequential estimation results for matrix powers, spectral densities, Monte Carlo integration, and a boundary value problem from partial differential equations~(PDEs). Furthermore, we develop a novel algorithm for use with this framework that locally scales the estimation budget with $\u03b1_t$, obtaining sharper path-length-style variation bounds of form $\\mathcal O(\\sum_{i=1}^m\u03b1_i)$ on the cost of estimating a sequence of length $m$. This improves upon the previous implicit trace estimation bound of $\\mathcal O(m\\cdot\\max_i\u03b1_i)$ [Dharangutte \\& Musco, NeurIPS~2021], which is achieved by fixing the query budget using the worst-case $\u03b1_i$ and is thus inefficient for stable sequences with rare bursts. Lastly, while all past work assumes a known bound on $\u03b1_i$, we show in certain cases how the changes can be estimated on-the-fly with (nearly) no added cost. In summary, our framework makes the sequential approximation toolkit general-purpose and adaptive while improving upon state-of-the-art-guarantees for dynamic trace estimation.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Robust Structure Learning of $k$-local Lindbladians",
        "articleUrl": "https://arxiv.org/abs/2606.23652v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.2,
        "summary": "We present an efficient protocol for learning an unknown $k$-local Lindblad generator on $n$ qubits using only product-state preparations, short-time evolution, and single-qubit Pauli measurements, without prior knowledge of the interaction structure. For fixed $k$ and bounded weighted interaction strength, the protocol estimates all Hamiltonian and dissipative Pauli--GKSL coefficients to entrywise accuracy $\\varepsilon$ with probability at least $1-\u03b4$ using $\\widetilde{\\mathcal O}_k(\\varepsilon^{-2}n^{2k}\\log(1/\u03b4))$ samples and polylogarithmically many evolution times. A semidefinite projection converts these estimates into a valid $k$-local Lindblad generator with diamond-norm error at most $\\varepsilon$ using $\\widetilde{\\mathcal O}_k(\\varepsilon^{-2}n^{4k}\\log(1/\u03b4))$ samples and polynomial-time classical postprocessing. If a suitable set of influential coefficients is supplied and satisfies a stable sparsity condition, the dependence on $n$ can improve from polynomial to logarithmic; in particular, exact supports of bounded intersection degree require only $\\widetilde{\\mathcal O}_k(\\varepsilon^{-2}\\log(n/\u03b4))$ samples, with analogous reductions in system-size dependence for sufficiently decaying long-range interactions. We also provide a robust structure-learning procedure, extend the guarantees to model misspecification, and prove complementary sample-complexity lower bounds. To our knowledge, these are the first efficient learning guarantees for general $k$-local dissipative quantum dynamics under such limited experimental control.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Application of Machine Learning for the Identification of 2D Colloidal Assemblies: A Case Study on Particles of Distinct Shapes",
        "articleUrl": "https://arxiv.org/abs/2606.23639v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.3,
        "summary": "This work addresses the problem of identifying colloidal monolayer assemblies using particles of various shapes (two-dimensional coatings): spheres, ellipsoids, cuboids, and rods. The following classification of assemblies is considered: isolated particles, dimers, chains, clusters, and loops. The YOLO model was chosen as the identification method. Synthetic datasets were prepared for each of the four particle shapes to train the models. The paper discusses the application of models trained on synthetic data to experimental images. An analysis was carried out on the feasibility of using such models for recognizing configurations in real images. While recognition on artificial images is nearly perfect, tests on experimental images showed a significant deviation. The average error across all particle types was 43.1%, but a considerable spread in values is observed: from 20% for spheres to 58.5% for cuboids, indicating the algorithm's selective sensitivity to object geometry. The created datasets and trained models are freely available for use. The corresponding modules have been integrated into the previously developed information system (https://isanm.space/). To further improve prediction results, it is necessary to prepare datasets based on experimental images.",
        "charge": 0
      }
    ],
    "science": [
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
    }
  ]
});
