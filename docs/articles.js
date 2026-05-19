window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-05-19T13:32:51.858154+00:00",
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
        "title": "DashAttention: Differentiable and Adaptive Sparse Hierarchical Attention",
        "articleUrl": "https://arxiv.org/abs/2605.18753v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.5,
        "summary": "Current hierarchical attention methods, such as NSA and InfLLMv2, select the top-k relevant key-value (KV) blocks based on coarse attention scores and subsequently apply fine-grained softmax attention on the selected tokens. However, the top-k operation assumes the number of relevant tokens for any query is fixed and it precludes the gradient flow between the sparse and dense stages. In this work, we propose DashAttention (Differentiable and Adaptive Sparse Hierarchical Attention), which leverages the adaptively sparse $\u03b1$-entmax transformation to select a variable number of blocks according to the current query in the first stage. This in turn provides a prior for the second-stage softmax attention, keeping the entire hierarchy fully differentiable. Contrary to other hierarchical attention methods, we show that DashAttention is non-dispersive, translating to better long-context modeling ability. Experiments with large language models (LLMs) show that DashAttention achieves comparable accuracy as full attention with 75% sparsity and a better Pareto frontier than NSA and InfLLMv2, especially in high-sparsity regimes. We also provide an efficient, GPU-aware implementation of DashAttention in Triton, which achieves a speedup of up to over FlashAttention-3 at inference time. Overall, DashAttention offers a cost-effective strategy to model long contexts.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "A Readiness-Driven Runtime for Pipeline-Parallel Training under Runtime Variability",
        "articleUrl": "https://arxiv.org/abs/2605.18750v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.6,
        "summary": "Pipeline parallelism is a key technique for scaling large-model training, but modern workloads exhibit runtime variability in computation and communication. Existing pipeline systems typically consume static, profiled, or adaptively generated schedules as pre-committed execution orders. When realized task readiness diverges from the pre-committed order, stages may wait for not-yet-ready work even though other executable work is available, creating stage misalignment, idle bubbles, and reduced utilization.\n  We present Runtime-Readiness-First Pipeline (RRFP), a readiness-driven runtime for pipeline-parallel training. RRFP changes how schedules are consumed at runtime: instead of treating a schedule as a sequence that stages must wait to follow, it treats the schedule as a non-binding hint order for ranking currently ready work. To support this model, RRFP combines message-driven asynchronous communication, lightweight tensor-parallel coordination for collective consistency, and ready-set arbitration for low-overhead dispatch.\n  We implement RRFP in a Megatron-based training framework and evaluate it on language-only and multimodal workloads at up to 128 GPUs. RRFP improves over fixed-order pipeline baselines across all settings. Using the BFW hint, RRFP achieves up to 1.77$\\times$ speedup on language-only workloads and up to 2.77$\\times$ on multimodal workloads. In cross-framework comparisons, RRFP with the default BF hint outperforms the faster available external system by up to 1.84$\\times$ while preserving training correctness.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "ESI-Bench: Towards Embodied Spatial Intelligence that Closes the Perception-Action Loop",
        "articleUrl": "https://arxiv.org/abs/2605.18746v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.6,
        "summary": "Spatial intelligence unfolds through a perception-action loop: agents act to acquire observations, and reason about how observations vary as a function of action. Rather than passively processing what is seen, they actively uncover what is unseen - occluded structure, dynamics, containment, and functionality that cannot be resolved from passive sensing alone. We move beyond prior formulations of spatial intelligence that assume oracle observations by recasting the observer as an actor. We introduce ESI-BENCH, a comprehensive benchmark for embodied spatial intelligence spanning 10 task categories and 29 subcategories built on OmniGibson, grounded in Spelke's core knowledge systems. Agents must decide what abilities to deploy - perception, locomotion, and manipulation - and how to sequence them to actively accumulate task-relevant evidence. We conduct extensive experiments on state-of-the-art MLLMs and find that active exploration substantially outperforms passive counterparts, with agents spontaneously discovering emergent spatial strategies without explicit instructions, while random multi-view often adds noise rather than signal despite consuming far more images. Most failures stem not from weak perception but from action blindness: poor action choices lead to poor observations, which in turn drive cascading errors. While explicit 3D grounding stabilizes reasoning on depth-sensitive tasks, imperfect 3D representation proves more harmful than 2D baselines by distorting spatial relations. Human studies further reveal that unlike humans who seek falsifying viewpoints and revise beliefs under contradiction, models commit prematurely with high confidence regardless of evidence quality, exposing a metacognitive gap that neither better perception nor more embodied interaction alone can close.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "A universal framework to identify eccentric binary mergers: GW200105 case study",
        "articleUrl": "https://arxiv.org/abs/2605.18742v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.6,
        "summary": "Orbital eccentricity in gravitational-wave signals from merging compact object binaries is a powerful indicator of their formation channel. Several binary black hole mergers and a neutron star--black hole merger have been reported to exhibit signs of eccentricity, but which events are identified and the significance of the eccentricity differs between studies. Measurements of eccentricity can change depending on the choice of prior. The choice of prior is subtle: eccentricity is commonly measured at an arbitrary reference frequency, which varies from study to study. We use the candidate eccentric neutron star--black hole merger GW200105_162426 as a case study, employing a range of priors and reference frequencies, and find the results to be strongly prior-driven. We show that the varied results reported across different studies can be partially reconciled by accounting for the evolution of eccentricity with reference frequency. In order to make conclusive statements about eccentricity, we propose a detection statistic that does not depend on reference frequency, and which marginalises over astrophysically-motivated distributions in eccentricity. Using this detection statistic, we find reduced support for the eccentric hypothesis for GW200105_162426: we obtain a natural log Bayes factor ln B $\\leq$ 0.9 comparing the eccentric, aligned-spin hypothesis to the quasi-circular, precessing hypothesis. Our results cast doubt on the eccentric interpretation of GW200105_162426 and underscore the importance of modelling the astrophysical distributions of eccentricity in nature.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "PIXLRelight: Controllable Relighting via Intrinsic Conditioning",
        "articleUrl": "https://arxiv.org/abs/2605.18735v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.6,
        "summary": "We present PIXLRelight, a feed-forward approach for physically controllable single-image relighting. Existing methods either provide limited lighting control (e.g. through text or environment maps), accumulate errors when chaining inverse and forward rendering, or require costly per-image optimization. Our key idea is to bridge physically based rendering (PBR) and learned image synthesis through a shared intrinsic conditioning that can be obtained from either real photographs or PBR renders. At training time, paired multi-illumination photographs are decomposed into albedo, diffuse shading, and non-diffuse residuals, which condition the model. At inference time, the same conditioning is computed from a path-traced render of a coarse 3D reconstruction of the input under user-specified PBR lights. A transformer-based neural renderer then applies the target illumination to the source photograph, preserving fine image detail through a per-pixel affine modulation. PIXLRelight enables arbitrary PBR-style lighting control, achieves state-of-the-art relighting quality, and runs in under a tenth of a second per image. Code and models are available at https://mlfarinha.github.io/pixl-relight/.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Predictable Confabulations: Factual Recall by LLMs Scales with Model Size and Topic Frequency",
        "articleUrl": "https://arxiv.org/abs/2605.18732v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.7,
        "summary": "While scaling laws govern aggregate large language model performance, no scaling law has linked factual recall to both model size and training-data composition. We evaluated 38 models on over 8,900 scholarly references evaluated by an automated reference verification system. Recall quality follows a sigmoid in the log-linear combination of model parameter count and topic representation in training data. These two variables alone explain 60% of the variance across 16 dense models from four families, rising to 74-94% within individual families. The form matches a superposition-inspired account in which recall is gated by a signal-to-noise ratio: signal strength scales with concept frequency and the noise floor with model capacity.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The spacetime Penrose inequality under a quasi final state hypothesis",
        "articleUrl": "https://arxiv.org/abs/2605.18730v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.7,
        "summary": "Penrose's original heuristic for his eponymous spacetime inequality -- a conjectured lower bound on the ADM mass in terms of the area of a horizon cross-section -- relies on the black hole final state conjecture. In this paper we isolate a substantially weaker but precise late-time condition, which we call the quasi final state hypothesis and prove the spacetime Penrose inequality under this hypothesis. More precisely, for an asymptotically flat globally hyperbolic spacetime with a black-hole-type apparent horizon tube ${H}_{app}$ satisfying the dominant energy condition and the quasi final state hypothesis, we show that every asymptotically flat initial data set whose boundary is a MOTS cross-section of ${H}_{app}$ satisfies the spacetime Penrose inequality. The quasi final state hypothesis requires only a late-time decay condition on the normal component of the shift and the ratio of timelike to spacelike mean curvature, together with convergence of the cross-sectional areas of ${H}_{app}$ to a finite limit.\n  Our approach is new and formulated directly in spacetime. The main geometric object is what we call a \\emph{tangentially maximal} hypersurface, carrying a foliation by spacelike spheres whose timelike mean curvature vanishes. We show that these hypersurfaces are governed by a quasilinear inward-parabolic PDE, and we develop the corresponding a priori theory and prove global existence. On these hypersurfaces, the spacetime Hawking mass reduces to the Riemannian Hawking mass, and the dominant energy condition gives nonnegative scalar curvature. The Riemannian Penrose inequality, combined with the area laws for dynamical and isolated horizons, then yields the result.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "WaveDriver: a Laser Guide Star AO System for HWO",
        "articleUrl": "https://arxiv.org/abs/2605.18723v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.7,
        "summary": "Habitable Worlds Observatory (HWO) presents a key challenge for technology development in the coming years, requiring a $>$ $100\\times$ more stable system than \\textit{JWST}. WaveDriver is a concept for a laser guide star spacecraft coupled to an adaptive optics (AO) system onboard HWO that would enable HWO to reach its picometer-level wavefront stability requirements while relaxing other HWO subsystem requirements. At LLNL and UCSC we are revisiting the concept initially proposed by Douglas et al.\\ (2019). We present key results key initial results from the first phase of our project, including (1) AO control developments, including with Linear Quadratic Gaussian control and machine learning, (2) AO wavefront sensor (WFS) trade study simulations, and (3) simulations of a photonic lantern natural guide star WFS. A key finding from our work is that WaveDriver could be needed to enable HWO's primary mirror segment stability and/or low order wavefront stability requirements.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Traveling Waves and Bumps in $p$-adic NNs]{Pseudo-Traveling Waves and Bumps in Quantum and Classical Hierarchical Cellular Neural Networks",
        "articleUrl": "https://arxiv.org/abs/2605.18717v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.7,
        "summary": "We study the existence of pseudo-traveling waves and bump solutions for two classes of hierarchical cellular neural networks (CNNs) defined over the ring of $p$-adic integers $\\mathbb{Z}_{p}$. The first type is a $p$-adic CNN described by a reaction-diffusion equation, while the second type is its quantum analog obtained via Wick rotation. The $p$-adic CNNs are hierarchical versions of the classical Chua-Yang CNNs; these networks have a tree-like hierarchical architecture with infinitely many cells and hidden layers. The states are governed by integro-differential equations on $% \\mathbb{Z}_{p}$. The $p$-adic traveling waves behave fundamentally differently from their Archimedean counterparts. A traveling wave restricted to a $p$-adic sphere yields a countably infinite collection of independent patterns. We introduce the notion of pseudo-traveling waves as finite truncations of this structure and prove their existence for both the classical and quantum networks. We further establish the existence of time-independent solutions (bumps) for both models. Our theoretical results are complemented by numerical simulations that approximate pseudo-traveling-wave solutions for quantum CNNs.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Detecting nonclassicality in randomly-displaced copies of a squeezed state",
        "articleUrl": "https://arxiv.org/abs/2605.18708v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.8,
        "summary": "We address a fundamental question: Can one determine whether a received signal is squeezed when each copy arrives with a different displacement/amplitude? We introduce an interaction Hamiltonian that converts quadrature squeezing into number squeezing. Using this conversion, we test whether the copies satisfy $g^{(2)}(0)<1$. The Hamiltonian itself does not create nonclassicality; it only transfers it from quadrature squeezing to number squeezing. This allows us to identify squeezing even when individual copies have random displacements.",
        "charge": 0
      }
    ],
    "science": [
      {
        "bucket": "science",
        "title": "Farming in Ancient Lake Agassiz",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/farming-in-ancient-lake-agassiz/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 9.5,
        "summary": "The glacial lake left a layer of silt and clay in southeastern Manitoba, creating fertile farmland that was divided during 19th-century land surveys and is still farmed today.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "String theory suddenly emerged from simple physics rules",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260518041424.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 9.5,
        "summary": "Physicists may have uncovered a surprising new clue that string theory\u2014the idea that the universe is built from unimaginably tiny vibrating strings\u2014could be more than just a mathematical fantasy. Instead of assuming strings existed from the start, researchers began with a few simple rules about how particles behave at extreme energies and discovered that the equations naturally produced the telltale fingerprints of string theory all on their own.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Scientists opened a sealed envelope after 10 years and gravity still didn\u2019t make sense",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260517211443.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 12.8,
        "summary": "For more than 200 years, scientists have struggled to pin down the exact strength of gravity \u2014 and one physicist spent a decade chasing the answer while keeping his own results hidden from himself. Stephan Schlamminger and his team at NIST painstakingly recreated a landmark French experiment designed to measure \u201cbig G,\u201d the universal gravitational constant that governs everything from falling apples to galaxies. When he finally opened a sealed envelope containing the secret number needed to decode the experiment, the results brought both relief and disappointment",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Scientists \u201cbottle the sun\u201d with a liquid battery that stores solar energy",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260513221821.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.8,
        "summary": "Scientists at UC Santa Barbara have created a remarkable new material that works like a \u201crechargeable solar battery,\u201d storing sunlight inside tiny molecules and releasing it later as heat \u2014 even long after the sun goes down. Inspired by reversible changes found in DNA and photochromic sunglasses, the system captures solar energy without relying on bulky batteries or the electrical grid. The molecule can hold energy for years and packs more energy per kilogram than lithium-ion batteries.",
        "charge": 0
      },
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
      "title": "Is a bank holiday heatwave on the way?",
      "articleUrl": "https://www.bbc.com/weather/articles/c4g5zgzre5ro?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 11.1,
      "summary": "The warmest weather of the year is forecast for later this week after early rain.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Why Rai winning his first major in Rocky's backyard feels fitting",
      "articleUrl": "https://www.bbc.com/sport/golf/articles/c5yxlznl9xwo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.9,
      "summary": "England's Aaron Rai winning the US PGA Championship seals a fascinating journey to the summit of the golfing world.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Aaron Rai's journey from talented child golfer to history-making PGA champion",
      "articleUrl": "https://www.bbc.com/sport/golf/articles/c5yxlznl9xwo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC News",
      "sourceHomeUrl": "https://www.bbc.com",
      "ageHours": 10.9,
      "summary": "England's Aaron Rai winning the US PGA Championship seals a fascinating journey to the summit of the golfing world.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Bulgarian banger 'Bangaranga' bags country its 1st Eurovision win",
      "articleUrl": "https://www.npr.org/2026/05/16/nx-s1-5824393/eurovision-winner-dara-bangaranga-bulgaria-vienna-austria",
      "sourceName": "NPR Topics: News",
      "sourceHomeUrl": "https://www.npr.org",
      "ageHours": 10.8,
      "summary": "Bulgaria was not among the favorites to win. But performer Dara's catchy, banging anthem bested 24 other nations at the 70th edition of the international singing extravaganza.",
      "charge": 0
    },
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
    }
  ]
});
