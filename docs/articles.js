window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-11T14:12:25.581754+00:00",
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
        "title": "Context-Driven Incremental Compression for Multi-Turn Dialogue Generation",
        "articleUrl": "https://arxiv.org/abs/2606.12411v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Modern conversational agents condition on an ever-growing dialogue history at each turn, incurring redundant attention and encoding costs that grow with conversation length. Naive truncation or summarization degrades fidelity, while existing context compressors lack cross-turn memory sharing or revision, causing information loss and compounding errors in long dialogues. We revisit the context compression under conversational dynamics and empirically present its fragility. To improve both efficiency and robustness, we introduce Context-Driven Incremental Compression (C-DIC), which treats a conversation as interleaved contextual threads and stores revisable per-thread compression states in a single, compact dialogue memory. At each turn, a lightweight retrieve, revise, and write-back loop shares information across turns and updates stale memories, stabilizing long-horizon behavior. In addition, we adapt truncated backpropagation-through-time (TBPTT) to our multi-turn setting, learning cross-turn dependencies without full-history backpropagation. Extensive experiments on long-form dialogue benchmarks demonstrate superior performance and efficiency of C-DIC; notably, C-DIC shows stable inference latency and perplexity over hundreds of dialogue turns, supporting a scalable path to high-quality dialogue modeling.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "A Pfaffian quantum Hall state of ultracold bosons",
        "articleUrl": "https://arxiv.org/abs/2606.12409v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Fractional quantum Hall states are a cornerstone of topological physics, hosting fractionally charged quasiparticles with exotic statistics that promise to enable topologically protected quantum information processing. Among these, the Pfaffian state introduced by Moore and Read implements a p-wave pairing structure that supports excitations with non-Abelian exchange statistics. Despite extensive study in electronic systems, direct access to its pairing structure has remained limited. Here we realize a three-particle bosonic Pfaffian state of ultracold $^{87}\\mathrm{Rb}$ atoms in an optical lattice subject to a Floquet-engineered synthetic magnetic field. Using a Bayesian-optimized adiabatic protocol, we prepare a state exhibiting Pfaffian pairing correlations. Site-resolved measurements of multi-point density correlations reveal a pronounced suppression of short-range three-body coincidences, reflecting the underlying pairing structure. We further probe the state's transport response through Hall drift measurements. Our results establish a bottom-up approach to engineering non-Abelian topological order and lay the groundwork for future explorations of anyonic braiding in synthetic matter.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Collective neutrino oscillations: Many-body non-forward effects and non-classicality",
        "articleUrl": "https://arxiv.org/abs/2606.12404v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Neutrino evolution in dense astrophysical environments is typically described either within a quantum kinetic framework, which neglects the build-up of multi-body correlations, or through simplified many-body calculations that allow significant entanglement to develop. In this work, we compare these two approaches in a simple neutrino-gas configuration, with particular emphasis on the role of non-forward scattering processes. These effects are incorporated either through a collision term in the kinetic description, or by considering the full neutrino-neutrino many-body Hamiltonian. We highlight differences between the two descriptions in both their characteristic timescales and asymptotic behavior. Motivated by the natural suitability of quantum computing for many-body calculations, we further investigate the non-classicality of neutrino evolution, discussing Trotter error scaling, along with the associated costs of constructing quantum circuits in terms of entangling gates and non-Clifford gates. We find that the resources needed for neutrino many-body evolution are on the low end of typical high-energy physics problems and on the mid to high end with respect to quantum chemistry problems. For the full Hamiltonian, resource requirements increase relative to the truncated version. We emphasize the importance of efficient fermion-to-qubit encodings, which are essential for reducing the substantial computational resources required for such simulations.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Quantifying the Distribution of Biexciton Emission Efficiencies in Colloidal Quantum Shells",
        "articleUrl": "https://arxiv.org/abs/2606.12398v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "The efficiency of multi-photon emission is an important characteristic of quantum light sources. Bright multi-photon emission is desirable for high-power lighting and lasers, while its complete suppression is required for high-purity single-photon generation. In colloidal quantum emitters, multi-photon emission can vary significantly between individual particles. Resolving this heterogeneity remains challenging with conventional particle-by-particle approaches. Here, we introduce a crosstalk-suppressed SPAD-array photon-correlation approach for high-throughput quantification of multi-photon emission from more than 1000 colloidal quantum shells. By projecting two images of the same sample onto distant regions of the detector array, we avoid short-range crosstalk between detector pixels. Time gating suppresses dark-count coincidences and distinguishes individual emitters from clusters. Applying this method to quantum shells reveals a near-Gaussian distribution of biexciton emission efficiencies, with a mean of 0.55 and an estimated intrinsic standard deviation of 0.12. Intra-batch correlations between the biexciton efficiency and the particle brightness are consistent with the volume scaling of Auger quenching. These results establish SPAD-array photon correlation as a scalable route to resolve multi-photon heterogeneities in nanoparticle ensembles.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Redesign Mixture-of-Experts Routers with Manifold Power Iteration",
        "articleUrl": "https://arxiv.org/abs/2606.12397v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Router is the cornerstone component to the Mixture-of-Experts models. Serving as expert proxies, the rows of the router matrix compute their similarity to the MoE inputs to determine which subset of experts is activated. Ideally, each router row is designed to encode the expert matrix into this representative vector, such that its dot-product with token can better reflect token-expert affinity. However, there exists no design principles to enforce this condensation. In this paper, we propose to align each router row with the principal singular direction of the associated expert, as this direction provides the most expressive mathematical description of a matrix. Based on this principle, we propose a router redesign with Manifold Power Iteration (MPI). Specifically, it introduces a \"Power-then-Retract\" paradigm, where a power iteration step is performed on the router weights, followed by a retraction to impose a norm constraint to ensure both efficiency and stability. Theoretically, we show that MPI drives router rows to converge toward the principal singular directions of associated experts. Empirically, we pretrain MoE model across scales from 1B to 11B parameters to confirm that this alignment facilitates more effective MoE models.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The Fundaments of Unity: ${\\mathcal O}(1)$ Couplings in Quantum Field Theories",
        "articleUrl": "https://arxiv.org/abs/2606.12393v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.3,
        "summary": "We critically examine the expectation that in a fundamental quantum field theory, dimensionless couplings in the Lagrangian density should all be of order unity. We propose a measure to quantify the adherence of a theory to this: the spread (the ratio of the largest to the smallest of the magnitudes) of such dimensionless couplings, obtaining various closed-form results. If we take independent identically distributed (IID) couplings to parameterise our uncertainty on the values of the order unity couplings, ratios of couplings can be much larger than one might naively expect. For a theory with 20 IID unit normal couplings, the probability that the magnitude of the ratio of two of them is greater than 100 is 0.29, for example. Even when the IID couplings have exponentially suppressed tails, the distribution of ratios of order one couplings has fat power-law tails which grow with the number of independent couplings.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The Simplified Stabilizer ZX-Calculus is Minimal",
        "articleUrl": "https://arxiv.org/abs/2606.12383v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.5,
        "summary": "The stabilizer fragment of the ZX calculus is amongst the most important fragments of the theory. The closely related Clifford+T fragment is approximately universal (arXiv:1705.11151). Additionally, the stabilizer calculus can be described by a small collection of rewrites, most of which have been shown to be necessary (arXiv:1709.08903). However, two rules, describing the red/green compact-structure coincidence and the important bialgebra law, had not been shown to be necessary. We present a countermodel-style argument showing that both of these rules are individually necessary relative to the connectivity meta-rule of Backens--Perdrix--Wang (arXiv:1709.08903), and hence establish that the rule set presented in arXiv:1709.08903 has no redundant rewrite rule.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Breaking Entropy Bounds: Accelerating RL Training via MTP with Rejection Sampling",
        "articleUrl": "https://arxiv.org/abs/2606.12370v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.6,
        "summary": "Reinforcement learning (RL) has become a key component in modern large language models, yet the rollout stage remains the key bottleneck in RL training pipelines. Although Multi-Token Prediction (MTP) offers a natural solution to accelerate rollouts through speculative decoding, many studies have observed that MTP acceptance rates degrade significantly during RL training, leading to limited speedup performance. To address this bottleneck, we present Bebop, a systematic study of MTP in LLM post-training, and offer practical recipes to integrate MTP into large-scale RL pipelines. First, we reveal that the MTP acceptance rate is fundamentally bounded by the fluctuation of model entropy, which demonstrates a clear negative linear relationship with the rise of entropy in the RL stage. Second, we show that probabilistic rejection sampling largely alleviates the disturbance introduced by entropy in RL compared to greedy draft sampling. We further identify that the conventional MTP training objectives (cross-entropy or KL) are suboptimal in such settings, and therefore we propose a novel end-to-end TV loss that directly optimizes multi-step rejection sampling acceptance rate, yielding ~10% acceptance rate improvements, achieving up to 95% acceptance rates and up to 25% extra inference throughput gains across mathematical reasoning, code generation, and agentic tasks. Third, we test various online MTP training strategies during RL and show that pre-RL MTP training with e2e TV loss and rejection sampling achieves a consistent acceptance rate and speedup throughout the entire RL, eliminating the need for costly online MTP updating. We provide extensive experiments and analysis that validate our findings. Experimental results show our method achieves up to 1.8x end-to-end acceleration in async RL training of Qwen3.5, Qwen3.6, and Qwen3.7 models.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Nonadditivity in Quantum Field Theory: Replica Energies, Scaling Filters, and the Renormalization Group",
        "articleUrl": "https://arxiv.org/abs/2606.12367v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.6,
        "summary": "Extensive systems have a simple thermodynamic signature: the logarithm of the partition function scales homogeneously with the size of the system. We show that the failure of this scaling, measured by the replica energy ${\\cal E}$, provides a useful bridge between statistical mechanics and quantum field theory. The associated differential operator $(1-\\frac1d L\\partial_L)$ removes the leading bulk contribution to $W=\\log Z$ and isolates the part that is sensitive to boundaries, topology, defects, long-range forces, or other sources of nonadditivity. In quantum field theory this thermodynamic idea has two closely related uses. For ordinary finite-volume or spherical partition functions, suitable higher-order versions of the same filter remove local counterterms and extract universal fixed-point data such as the central charge, the sphere free energy $F$, and the Euler anomaly coefficient $a$. For replica geometries with entangling defects, the same filtering principle gives the renormalized defect free energy. In $2+1$ dimensions, its $n\\to1$ limit is precisely the entropic $F$-function. We use this perspective to distinguish ordinary finite-size corrections, topology-dependent constants in gapped phases, subextensive fracton degeneracies, and genuinely nonextensive systems with long-range interactions such as self-gravitating thermal matter. Replica energy therefore offers a common thermodynamic language for additivity, defect free energies, and renormalization-group irreversibility.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "On Subquadratic Architectures: From Applications to Principles",
        "articleUrl": "https://arxiv.org/abs/2606.12364v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.6,
        "summary": "Transformers dominate modern sequence modeling, but their quadratic attention incurs substantial computational cost. Subquadratic architectures offer a scalable alternative. However, it remains unclear which designs yield the most effective sequence models. We compare three leading approaches: xLSTM, Mamba-2, and Gated DeltaNet. We evaluate these models on tasks with complex dependencies: (1) code-model pre-training, (2) distillation of code models from large language models, and (3) pre-training of time-series foundation models. Across these settings, xLSTM delivers the strongest overall performance. To explain xLSTM's advantage, we present a unified formulation and analyze the underlying architectural mechanisms, focusing on state tracking and memory dynamics. Our results show that xLSTM enables more flexible and stable memory correction via its gating scheme. We corroborate these findings on controlled synthetic length-generalization tasks. Overall, our findings indicate that xLSTM's gains on complex tasks stem from robust state tracking and accumulation.",
        "charge": 0
      }
    ],
    "science": [
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
      },
      {
        "bucket": "science",
        "title": "A Moonlit Earth as Seen From Artemis II",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/a-moonlit-earth-as-seen-from-artemis-ii/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 9.5,
        "summary": "An astronaut\u2019s photo, taken en route to the Moon, reveals our planet and its place in space in a novel way.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Typhoon Jangmi",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/typhoon-jangmi/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 11.1,
        "summary": "The sprawling storm promised to deliver torrential rain across a wide swath of southern Japan.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Brain scans reveal two distinct types of autism",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260602021634.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.3,
        "summary": "Scientists have uncovered evidence that autism may include at least two biologically distinct subtypes, each marked by a different pattern of brain communication. By combining brain scans from nearly 1,000 people with autism with insights from 20 genetically engineered mouse models, researchers identified a \u201chyperconnectivity\u201d subtype, where brain regions communicate more than usual, and a \u201chypoconnectivity\u201d subtype, where communication is reduced.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Scientists confirm a deep earthquake that shouldn't exist",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260602021636.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 9.6,
        "summary": "Scientists have confirmed that a mysterious Utah earthquake first detected in 1979 really did occur nearly 90 kilometers underground\u2014far deeper than anyone thought earthquakes could happen beneath a continent. By reanalyzing decades of seismic data, researchers identified a rare class of \"continental mantle earthquakes\" occurring deep in Earth\u2019s upper mantle, where rock is expected to slowly flow rather than suddenly break.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Gravity Waves From Super Typhoon Sinlaku",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/gravity-waves-from-super-typhoon-sinlaku/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 12.3,
        "summary": "Satellites observed striking upper-atmosphere phenomena generated by an intensifying tropical cyclone.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Human organoids reveal how to reverse \u201cirreversible\u201d nerve damage",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260528082459.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.7,
        "summary": "Cambridge researchers created miniature brain-and-spinal-cord systems in the lab that can send signals and even trigger tiny muscle contractions. They discovered that human neurons gradually lose their ability to regrow after damage during development \u2014 but that ability can potentially be switched back on. The team identified a gene network controlling this process and found that an existing hormone drug dramatically boosted nerve fiber regrowth.",
        "charge": 0
      }
    ],
    "ai": [
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
      }
    ]
  },
  "randomPool": [
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
    }
  ]
});
