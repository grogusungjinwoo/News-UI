window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-05-13T12:25:42.237440+00:00",
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
        "title": "Scalable Measurement-Based Quantum Simulation Patterns for Benchmarking",
        "articleUrl": "https://arxiv.org/abs/2605.12502v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Measurement-based quantum computing uses measurement patterns on predefined quantum resource states to execute quantum logic. Quantum simulation offers an important use case on near-term devices. However, pattern optimization depends on the multivariable interplay between hardware and software constraints and is therefore use-dependent and highly non-trivial. Optimization of large-scale patterns under realistic assumptions remains a barrier. We announce the release of the quantum measurement pattern library QPatLib, a dataset that, in v1.0, presents patterns for use in measurement-based quantum simulation. We present the workflow for generating patterns that execute Pauli-string unitaries needed for many quantum algorithms. We provide benchmark patterns for measurement-based quantum unitary evolution. The measurement patterns are defined with different conventions for commuting Pauli-string subsets to allow scaling of pattern size and complexity. The purpose of the library is to (i) serve as a standardized testbed for pattern-optimization protocols for measurement-based quantum simulation routines, (ii) offer a suite of patterns for direct use on hardware, (iii) provide data to empirically justify pattern design principles, and (iv) provide a flexible resource for future storage and use of measurement-based patterns beyond quantum simulation.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Pion: A Spectrum-Preserving Optimizer via Orthogonal Equivalence Transformation",
        "articleUrl": "https://arxiv.org/abs/2605.12492v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "We introduce Pion, a spectrum-preserving optimizer for large language model (LLM) training based on orthogonal equivalence transformation. Unlike additive optimizers such as Adam and Muon, Pion updates each weight matrix through left and right orthogonal transformations, preserving its singular values throughout training. This yields an optimization mechanism that modulates the geometry of weight matrices while keeping their spectral norm fixed. We derive the Pion update rule, systematically examine its design choices, and analyze its convergence behavior along with several key properties. Empirical results show that Pion offers a stable and competitive alternative to standard optimizers for both LLM pretraining and finetuning.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Elastic Attention Cores for Scalable Vision Transformers",
        "articleUrl": "https://arxiv.org/abs/2605.12491v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Vision Transformers (ViTs) achieve strong data-driven scaling by leveraging all-to-all self-attention. However, this flexibility incurs a computational cost that scales quadratically with image resolution, limiting ViTs in high-resolution domains. Underlying this approach is the assumption that pairwise token interactions are necessary for learning rich visual-semantic representations. In this work, we challenge this assumption, demonstrating that effective visual representations can be learned without any direct patch-to-patch interaction. We propose VECA (Visual Elastic Core Attention), a vision transformer architecture that uses efficient linear-time core-periphery structured attention enabled by a small set of learned cores. In VECA, these cores act as a communication interface: patch tokens exchange information exclusively through the core tokens, which are initialized from scratch and propagated across layers. Because the $N$ image patches only directly interact with a resolution invariant set of $C$ learned \"core\" embeddings, this yields linear complexity $O(N)$ for predetermined $C$, which bypasses quadratic scaling. Compared to prior cross-attention architectures, VECA maintains and iteratively updates the full set of $N$ input tokens, avoiding a small $C$-way bottleneck. Combined with nested training along the core axis, our model can elastically trade off compute and accuracy during inference. Across classification and dense tasks, VECA achieves performance competitive with the latest vision foundation models while reducing computational cost. Our results establish elastic core-periphery attention as a scalable alternative building block for Vision Transformers.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Anomalies in Neural Network Field Theory",
        "articleUrl": "https://arxiv.org/abs/2605.12488v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Neural network field theory (NN-FT) formulates field theory in terms of a network architecture and a density on its parameters. We derive Schwinger--Dyson equations and Ward identities in NN-FT and utilize them to study anomalies. The equations depend on a conserved parameter space current that characterizes symmetries and how they break. It is relevant even in non-local NN-FTs, but can recover local currents in the case of a local Lagrangian by an appropriate fiber-wise average. In machine learning, this formalism is applied to feedforward networks and the attention mechanism. In physics, we use this machinery to study $U(1)$ symmetry for a complex scalar, the scale anomaly in $4d$ massless $\u03c6^4$ theory, the Weyl anomaly for the bosonic string (including a new computation of the critical dimension), and examples involving discrete topological data, such as winding numbers and T-duality. Since the results are obtained in network parameter space rather than the standard field space, they represent a new way to understand symmetries in quantum field theories.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Task-Adaptive Embedding Refinement via Test-time LLM Guidance",
        "articleUrl": "https://arxiv.org/abs/2605.12487v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "We explore the effectiveness of an LLM-guided query refinement paradigm for extending the usability of embedding models to challenging zero-shot search and classification tasks. Our approach refines the embedding representation of a user query using feedback from a generative LLM on a small set of documents, enabling embeddings to adapt in real time to the target task. We conduct extensive experiments with state-of-the-art text embedding models across a diverse set of challenging search and classification benchmarks. Empirical results indicate that LLM-guided query refinement yields consistent gains across all models and datasets, with relative improvements of up to +25% in literature search, intent detection, key-point matching, and nuanced query-instruction following. The refined queries improve ranking quality and induce clearer binary separation across the corpus, enabling the embedding space to better reflect the nuanced, task-specific constraints of each ad-hoc user query. Importantly, this expands the range of practical settings in which embedding models can be effectively deployed, making them a compelling alternative when costly LLM pipelines are not viable at corpus-scale. We release our experimental code for reproducibility, at https://github.com/IBM/task-aware-embedding-refinement.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Learning, Fast and Slow: Towards LLMs That Adapt Continually",
        "articleUrl": "https://arxiv.org/abs/2605.12484v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Large language models (LLMs) are trained for downstream tasks by updating their parameters (e.g., via RL). However, updating parameters forces them to absorb task-specific information, which can result in catastrophic forgetting and loss of plasticity. In contrast, in-context learning with fixed LLM parameters can cheaply and rapidly adapt to task-specific requirements (e.g., prompt optimization), but cannot by itself typically match the performance gains available through updating LLM parameters. There is no good reason for restricting learning to being in-context or in-weights. Moreover, humans also likely learn at different time scales (e.g., System 1 vs 2). To this end, we introduce a fast-slow learning framework for LLMs, with model parameters as \"slow\" weights and optimized context as \"fast\" weights. These fast \"weights\" can learn from textual feedback to absorb the task-specific information, while allowing slow weights to stay closer to the base model and persist general reasoning behaviors. Fast-Slow Training (FST) is up to 3x more sample-efficient than only slow learning (RL) across reasoning tasks, while consistently reaching a higher performance asymptote. Moreover, FST-trained models remain closer to the base LLM (up to 70% less KL divergence), resulting in less catastrophic forgetting than RL-training. This reduced drift also preserves plasticity: after training on one task, FST trained models adapt more effectively to a subsequent task than parameter-only trained models. In continual learning scenarios, where task domains change on the fly, FST continues to acquire each new task while parameter-only RL stalls.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Unveiling $f(R)$ Gravity with Void-Galaxy Cross-Correlation Multipoles",
        "articleUrl": "https://arxiv.org/abs/2605.12482v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Cosmic voids provide a low-density environment where the scalar fifth force predicted by $\\fR$ modified gravity (MG) is least screened. We present a semi-analytical calculation of the monopole, dipole, and quadrupole of the void-galaxy cross-correlation function $\u03be^{s}(s,\u03bc)$ in redshift space for the Hu-Sawicki $\\fR$ model ($n=1$), combining the scale-dependent growth factor from the scalaron degree of freedom with nonlinear spherical shell dynamics. The framework applies to any metric $\\fR$ theory for which $\\Geff(k,a)/G$ can be specified in the quasi-static limit. Our key results are: (1)~the monopole deviation from $\\lcdm$ grows from $+2.8\\%$ for large voids ($r_v = 30\\;\\Mpc$) to $+29.7\\%$ for small voids ($r_v = 11.7\\;\\Mpc$) at $\\fRz = 10^{-5}$ -- a distinctive size-dependent signature of the Compton-scale scalaron response associated with chameleon screening, with $\u03bb_C \\approx 8\\;\\Mpc$; (2)~nonlinear evolution amplifies the modified-gravity signal by $\\mathcal{A}_0 \\approx 4$, bringing it within reach of ongoing and upcoming wide-field spectroscopic surveys, such as DESI, Subaru PFS, Euclid, and the Roman Space Telescope; (3) the gravitational potential contains a finite-range Yukawa component, producing a radially dependent dipole signature that is complementary to the density and velocity multipoles; (4) the signal weakens with redshift as the scalaron Compton wavelength shrinks, but remains potentially detectable at Stage-IV spectroscopic void samples. We show that the void-scale transition in the modified-gravity response, the joint sensitivity to density, velocity, and fifth-force contributions, and the nonlinear amplification around void shells make redshift-space void-galaxy multipoles a powerful semi-analytical probe of f(R) gravity and related inhomogeneous dark energy scenarios.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Automated multiphase identification and refinement in powder diffraction using mismatch-tolerant machine learning",
        "articleUrl": "https://arxiv.org/abs/2605.12478v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Powder diffraction is a primary structural characterization tool in materials science, yet automated phase identification remains a major bottleneck for autonomous discovery. Existing workflows rely heavily on search--match heuristics and manual Rietveld refinement, and broadly usable end-to-end automation is especially limited for neutron powder diffraction, where comparable tools are largely absent. Here we introduce RADAR-PD, a modality-aware machine learning framework for phase identification and quantification across both X-ray and neutron powder diffraction. RADAR-PD couples a mismatch-tolerant neural network operating on coarse momentum-transfer fingerprints with automated lattice nudging and physics-constrained Rietveld verification, enabling dominant-phase hypotheses to be generated from elemental constraints and secondary phases to be isolated recursively. On an experimental RRUFF PXRD benchmark, RADAR-PD outperforms DARA in recovering the reference phase. RADAR-PD further provides robust multiphase analysis on complex time-of-flight and constant-wavelength neutron datasets, addressing an important unmet need in automated neutron diffraction analysis. These results establish RADAR-PD as an auditable, instrument-agnostic framework for autonomous structural discovery.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Routers Learn the Geometry of Their Experts: Geometric Coupling in Sparse Mixture-of-Experts",
        "articleUrl": "https://arxiv.org/abs/2605.12476v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Sparse Mixture-of-Experts (SMoE) models enable scaling language models efficiently, but training them remains challenging, as routing can collapse onto few experts and auxiliary load-balancing losses can reduce specialization. Motivated by these hurdles, we study how routing decisions in SMoEs are formed mechanistically. First, we reveal a geometric coupling between routers and their corresponding experts. For a given token, the router weights for the selected expert and the expert weights processing it receive gradients along the same input direction, differing only in scalar coefficients. Thus, matched router--expert directions accumulate the same routed token history. This theoretical coupling also appears empirically in routing dynamics. In a $1$B SMoE trained from scratch, higher router scores predict stronger expert neuron activations, showing that routing decisions are mirrored inside the selected expert. Next, we analyze the effects of auxiliary load balancing on the router--expert geometric coupling, showing that such losses break this structure by spreading input-directed gradients across router weights, making distinct router directions nearly three times more similar to each other. Last, we demonstrate the centrality of geometric coupling for effective routing with a parameter-free online K-Means router, in which each expert maintains a running average of the hidden states routed to it and tokens are assigned based on cosine similarity. Compared with auxiliary-loss and loss-free balancing, this router achieves the lowest load imbalance with only a modest perplexity increase, indicating that geometric coupling captures a substantial part of what the router learns. Overall, our results explain how routers form assignment geometry that supports an effective division of labor.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Optical detection of the electron spin resonances of G centers in silicon",
        "articleUrl": "https://arxiv.org/abs/2605.12473v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.5,
        "summary": "Color centers in silicon are emerging as promising platforms for quantum technologies. Among them, the G center has attracted considerable interest owing to its bright telecom O-band single-photon emission and its optically addressable metastable electron-spin triplet state. Here we investigate the spin properties of ensembles of G centers under above-band-gap excitation. We elucidate the spin photo-dynamics giving rise to the optical detected magnetic resonance (ODMR) response of G centers. The optimal pulsed sequence for measuring the ODMR spectrum of the G defects is identified, along with the temperature and optical-power regimes maximizing the spin readout contrast. Through magneto-optical measurements, we detect a level-anticrossing of the G center electron spin states. At last, we demonstrate coherent spin control of the defects, and characterize their spin-coherence properties. Unveiling the spin degree of freedom of the G center opens new avenues for the realization of quantum memories and quantum registers based on silicon color centers.",
        "charge": 0
      }
    ],
    "science": [
      {
        "bucket": "science",
        "title": "Scientists discover a weak spot shared by polio and common cold viruses",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260512202320.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.9,
        "summary": "Scientists at the University of Maryland, Baltimore County, have uncovered a crucial trick used by enteroviruses\u2014the group behind diseases like polio, myocarditis, encephalitis, and even the common cold\u2014to reproduce inside human cells. The team captured, in unprecedented detail, how viral RNA recruits both viral and human proteins to assemble the machinery needed for replication, acting almost like a molecular \u201con-off switch\u201d that controls whether the virus copies itself or makes proteins.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "A rare cancer-fighting plant compound has been decoded",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260512213836.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.7,
        "summary": "Scientists at UBC Okanagan have uncovered how plants produce mitraphylline, a rare natural compound with promising anti cancer potential. The team identified two enzymes that work together to build the molecule\u2019s unusual twisted structure, solving a mystery that had puzzled researchers for years. Because mitraphylline appears only in tiny amounts in tropical plants like kratom and cat\u2019s claw, the discovery could make it far easier to produce sustainably in the future.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Curiosity Blog, Sols 4886-4892: Ingenuity and Perseverance, Curiosity Style",
        "articleUrl": "https://science.nasa.gov/blog/curiosity-blog-sols-4886-4892-ingenuity-and-perseverance-curiosity-style/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 10.7,
        "summary": "Written by Michelle Minitti, MAHLI Deputy Principal Investigator Earth planning date: Friday, May 8, 2026 While we know the monikers Ingenuity and Perseverance are attached to our sister helicopter and rover on the Mars 2020 mission, those characteristics were in full force with Curiosity over the past week. The science we achieved this week was [\u2026]",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Hubble Survey Sets Up Roman\u2019s Future Look Near Milky Way\u2019s Center",
        "articleUrl": "https://science.nasa.gov/missions/roman-space-telescope/hubble-survey-sets-up-romans-future-look-near-milky-ways-center/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 11.2,
        "summary": "The Milky Way\u2019s galactic bulge, the bulbous region that surrounds the galactic center, contains a dense collection of stars, planets, and other free-floating objects. This region has been studied for decades with numerous ground-based and space-based telescopes, including NASA\u2019s Hubble and James Webb space telescopes. Soon, NASA\u2019s Nancy Grace Roman Space Telescope will be the [\u2026]",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "This 800-year-old Chinese exercise helps lower blood pressure naturally",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260510234724.htm",
        "sourceName": "ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.1,
        "summary": "An ancient Chinese exercise routine may be just as powerful as a daily brisk walk for lowering blood pressure - without equipment, gyms, or intense workouts. In a major clinical trial, adults with stage 1 hypertension who...",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "NASA's Psyche probe is about to slingshot around Mars at 12,000 mph",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260510234707.htm",
        "sourceName": "ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.3,
        "summary": "NASA's Psyche spacecraft is about to pull off a dramatic close flyby of Mars, skimming just 2,800 miles above the planet to get a powerful gravitational boost on its journey to the mysterious metal-rich asteroid Psyche. The...",
        "charge": 1
      },
      {
        "bucket": "science",
        "title": "NASA's Curiosity rover accidentally pulled a rock out of Mars",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260510234704.htm",
        "sourceName": "ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.5,
        "summary": "NASA's Curiosity rover had an unexpectedly stubborn Mars souvenir after drilling into a rock nicknamed \"Atacama\" - the entire chunk ripped loose from the ground and stayed stuck to the rover's drill. Engineers watched as...",
        "charge": 1
      },
      {
        "bucket": "science",
        "title": "Scientists say Dante's Inferno described an asteroid impact 500 years before modern science",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260510234658.htm",
        "sourceName": "ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.6,
        "summary": "Dante's Inferno may have been far more than a religious epic. New research argues that the 14th-century poet essentially imagined a catastrophic asteroid impact centuries before modern science understood meteors. In this...",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "\"Cannot be explained\" - New ultra stainless steel stuns researchers",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260510030950.htm",
        "sourceName": "ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.8,
        "summary": "A team at the University of Hong Kong has developed a new \"super steel\" that can survive the harsh conditions needed to make green hydrogen from seawater. The material uses an unexpected double-protection mechanism that...",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Nicholas Houghton: Engineering Crew Safety for NASA's Artemis Missions",
        "articleUrl": "https://www.nasa.gov/centers-and-facilities/johnson/nicholas-houghton-engineering-crew-safety-for-artemis-ii/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://www.nasa.gov",
        "ageHours": 11.0,
        "summary": "Nicholas Houghton always dreamed of working at NASA and one day becoming an astronaut. Today, he helps design systems that keep crews safe during missions aboard NASA's Orion spacecraft, including the successful Artemis II...",
        "charge": 1
      }
    ],
    "ai": [
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
      },
      {
        "bucket": "ai",
        "title": "Several states considering ban on legal personhood for AI",
        "articleUrl": "https://www.npr.org/2026/05/11/nx-s1-5798754/several-states-considering-ban-on-legal-personhood-for-ai",
        "sourceName": "NPR",
        "sourceHomeUrl": "https://www.npr.org",
        "ageHours": 11.4,
        "summary": "Is it time to consider prosecuting AI models for breaking the law? Some say it's time. Others say that would be an insult to humanity. Some states are considering laws blocking AI personhood.",
        "interest": 1
      },
      {
        "bucket": "ai",
        "title": "VecCISC: Improving Confidence-Informed Self-Consistency with Reasoning Trace Clustering and Candidate Answer Selection",
        "articleUrl": "https://arxiv.org/abs/2605.08070v1",
        "sourceName": "arXiv",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 11.5,
        "summary": "A standard technique for scaling inference-time reasoning is Self-Consistency, whereby multiple candidate answers are sampled from an LLM and the most common answer is selected. More recently, it has been shown that weighted...",
        "interest": 15
      },
      {
        "bucket": "ai",
        "title": "The Memory Curse: How Expanded Recall Erodes Cooperative Intent in LLM Agents",
        "articleUrl": "https://arxiv.org/abs/2605.08060v1",
        "sourceName": "arXiv",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 11.7,
        "summary": "Context window expansion is often treated as a straightforward capability upgrade for LLMs, but we find it systematically fails in multi-agent social dilemmas. Across 7 LLMs and 4 games over 500 rounds, expanding accessible...",
        "interest": 17
      },
      {
        "bucket": "ai",
        "title": "Rubric-Grounded RL: Structured Judge Rewards for Generalizable Reasoning",
        "articleUrl": "https://arxiv.org/abs/2605.08061v1",
        "sourceName": "arXiv",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 10.6,
        "summary": "We argue that decomposing reward into weighted, verifiable criteria and using an LLM judge to score them provides a partial-credit optimization signal: instead of a binary outcome or a single holistic score, each response is...",
        "interest": 9
      },
      {
        "bucket": "ai",
        "title": "Flow-OPD: On-Policy Distillation for Flow Matching Models",
        "articleUrl": "https://arxiv.org/abs/2605.08063v1",
        "sourceName": "arXiv",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 10.5,
        "summary": "Existing Flow Matching (FM) text-to-image models suffer from two critical bottlenecks under multi-task alignment: the reward sparsity induced by scalar-valued rewards, and the gradient interference arising from jointly...",
        "interest": 6
      },
      {
        "bucket": "ai",
        "title": "EmambaIR: Efficient Visual State Space Model for Event-guided Image Reconstruction",
        "articleUrl": "https://arxiv.org/abs/2605.08073v1",
        "sourceName": "arXiv",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 10.1,
        "summary": "Recent event-based image reconstruction methods predominantly rely on Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to process complementary event information. However, these architectures face...",
        "interest": 3
      }
    ]
  },
  "randomPool": [
    {
      "bucket": "random",
      "title": "How Unknowable Math Can Help Hide Secrets",
      "articleUrl": "https://www.quantamagazine.org/how-unknowable-math-can-help-hide-secrets-20260511/",
      "sourceName": "Quanta Magazine",
      "sourceHomeUrl": "https://www.quantamagazine.org",
      "ageHours": 11.0,
      "summary": "A graduate student recently harnessed the complexity of mathematical proofs to create a powerful new tool in cryptography.             The post  How Unknowable Math Can Help Hide Secrets  first appeared on  Quanta Magazine",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "New York\u2019s Buzziest New Restaurant Is a Pub",
      "articleUrl": "https://www.eater.com/pre-shift/961028/deans-pub-new-york-pre-shift",
      "sourceName": "Eater",
      "sourceHomeUrl": "https://www.eater.com",
      "ageHours": 11.2,
      "summary": "This excerpt was originally published in Pre Shift, our newsletter for the hospitality industry.\u00a0Subscribe\u00a0for more first-person accounts, advice, and interviews. Now Open is a yearlong series celebrating some of 2026\u2019s most exciting new restaurants. Throughout the year, we\u2019ll check in with teams in Chicago, New York City, and Washington, D.C. to hear what it\u2019s really [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "As ranks of uninsured grow, charity care can be hard to come by at many hospitals",
      "articleUrl": "https://www.npr.org/2026/05/11/nx-s1-5813781/charity-care-hospitals-medical-bills-uninsured",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 12.7,
      "summary": "An investigation of hospital data and charity care programs shows most Minnesota hospitals provide little financial aid to patients and often make assistance difficult to get.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Watch: Soldier on parachuting to remote island to bring Hantavirus aid",
      "articleUrl": "https://www.bbc.com/news/videos/cgqp3xq7959o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 9.1,
      "summary": "A specialist team helped supply critical medical support to Tristan da Cunha in the South Atlantic.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "See 15 Stunning Images That Won the German Society for Nature Photography's Annual Contest",
      "articleUrl": "https://www.smithsonianmag.com/smart-news/see-15-stunning-images-that-won-the-german-society-for-nature-photographys-annual-contest-180988711/",
      "sourceName": "Smart News | smithsonianmag.com",
      "sourceHomeUrl": "https://www.smithsonianmag.com",
      "ageHours": 7.1,
      "summary": "From a lunging frog to the majestic movements of penguins, the honored photographs capture the wonder of wildlife and beauty of natural landscapes",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Wordle to become TV quiz show with Savannah Guthrie as host",
      "articleUrl": "https://www.bbc.com/news/articles/czd2vpdr9g6o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 6.6,
      "summary": "The online word game from the New York Times will hit the small screen in the UK and US from next year.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'Atlanta Journal-Constitution' chief steps down as bold goals yield to tough realities",
      "articleUrl": "https://www.npr.org/2026/05/11/nx-s1-5818208/ajc-andrew-morse-leaving",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 6.5,
      "summary": "The owners of the Atlanta  Journal-Constitution  invested $150 million to reinvent the paper. The changes have been significant. Three years in, the payoff has been modest.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "The decisions and problems facing England before first Test squad of summer",
      "articleUrl": "https://www.bbc.com/sport/cricket/articles/c2k21jkqp81o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 6.4,
      "summary": "Who will make the cut when England name their first Test squad of the summer?",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "7 of our favorite deals from Amazon\u2019s Pet Days sale",
      "articleUrl": "https://www.theverge.com/gadgets/927788/amazon-pet-days-tech-gadgets-cat-dog-deal-sale",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 6.0,
      "summary": "A big part of my job here at The Verge is to find deals on tech that readers will like. But in my personal life, I\u2019m not spending anywhere near as much money on tech as I am on food, litter, and other supplies for our two cats. Sad, but true. If your life is [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "What does future hold for Barcelona striker Rashford?",
      "articleUrl": "https://www.bbc.com/sport/football/articles/clypn3d2jd8o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 5.8,
      "summary": "Marcus Rashford has an uncertain future despite the on-loan Manchester United forward scoring a brilliant free-kick for Barcelona in El Clasico.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "A million baby monitors and security cameras were easily viewable by hackers",
      "articleUrl": "https://www.theverge.com/tech/926487/meari-technology-hack-baby-monitor-security-camera",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 5.8,
      "summary": "A baby's eyes peer directly into the camera lens. A kid with a striped shirt looks up, then away. A boy in a policeman's costume, a gold star on his chest. A messy bedroom that reminds me of my own daughters, with an unmade bunk bed, a little girl's hat and headband, and Hello Kitty [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Google stopped a zero-day hack that it says was developed with AI",
      "articleUrl": "https://www.theverge.com/tech/928007/google-ai-zero-day-exploit-stopped",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 5.6,
      "summary": "For the first time, Google says it has spotted and stopped a zero-day exploit developed with AI. According to a report from Google Threat Intelligence Group (GTIG), \"prominent cyber crime threat actors\" were planning to use the vulnerability for a \"mass exploitation event\" that would have allowed them to bypass two-factor authentication on an unnamed [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Pupils hopeless and crying after 'poorly worded' Higher Maths exam",
      "articleUrl": "https://www.bbc.com/news/articles/cx21j20l9wlo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 5.5,
      "summary": "More than 11,000 people have signed a petition calling for a review of the exam saying it was \"totally unrecognisable\" from what they had prepared for.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Texas sues Netflix for advertising \u2018bait and switch\u2019 and spying",
      "articleUrl": "https://www.theverge.com/streaming/928071/texas-netflix-lawsuit-privacy",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 4.7,
      "summary": "Texas Attorney General Ken Paxton has filed a lawsuit against Netflix, accusing the company of turning its back on its promise to remain ad-free and safe for kids. The lawsuit, filed on Monday, claims Netflix has \"opened Texans' data for inspection by the same Big Ad Tech community it once criticized for exploiting users in [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'Britain at the heart of Europe': How Starmer's plans are going down in the EU",
      "articleUrl": "https://www.bbc.com/news/articles/cwy2k7re9jdo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 4.5,
      "summary": "Sir Keir Starmer pledged to rebuild the UK's relationship with Europe in a defiant speech on Monday.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "UK alcohol deaths fall for first time since Covid pandemic",
      "articleUrl": "https://www.bbc.com/news/articles/c3v2dxg79w2o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 3.9,
      "summary": "Experts say the \u201cmodest reduction\u201d is \u201cnot cause for complacency\u201d, with calls to redouble efforts to slash deaths further.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Apple brings encrypted RCS chats to iPhone",
      "articleUrl": "https://www.theverge.com/tech/928141/apple-ios-26-5-rcs-messages-iphone-google-android",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 3.8,
      "summary": "Apple now lets you have encrypted RCS conversations with Android users through the Messages app on iOS. As part of iOS 26.5, which was released on Monday, Apple added support for end-to-end encrypted RCS messaging in beta, meaning that Apple and Google can't see your messages while they're sent. With iOS 26.5, you'll see a [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Palantir\u2019s true believers are wearing this jacket",
      "articleUrl": "https://www.theverge.com/report/928026/palantir-chore-coat",
      "sourceName": "The Verge",
      "sourceHomeUrl": "https://www.theverge.com",
      "ageHours": 3.3,
      "summary": "In late April, Palantir - the software company that, in recent years, has perhaps become best known for its defense industry contracts and work with Immigration and Customs Enforcement - announced that it would be adding new products to its merch store. The latest offering was a cotton chore coat. At $239 and in bright [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "In 1969, the Beatles Played One Final Show. Their Makeshift Rooftop Stage in London Will Soon Become a Museum",
      "articleUrl": "https://www.smithsonianmag.com/smart-news/in-1969-the-beatles-played-one-final-show-their-makeshift-rooftop-stage-in-london-will-soon-become-a-museum-180988714/",
      "sourceName": "Smart News | smithsonianmag.com",
      "sourceHomeUrl": "https://www.smithsonianmag.com",
      "ageHours": 3.1,
      "summary": "Visitors to 3 Savile Row will be able to see a re-creation of the basement recording studio where the Beatles worked on their final album \"Let It Be\" and stand on the roof where the band thrilled Londoners with a surprise concert",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Can Chinese AI solve inequality? + How dementia comes for your bank account",
      "articleUrl": "https://www.npr.org/2026/05/11/g-s1-121351/can-chinese-ai-solve-inequality-how-dementia-comes-for-your-bank-account",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 3.1,
      "summary": "",
      "charge": 0
    }
  ]
});
