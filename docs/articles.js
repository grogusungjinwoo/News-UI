window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-10T13:49:48.578989+00:00",
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
        "title": "A Unifying Lens on Supervised Fine-Tuning Through Target Distribution Design",
        "articleUrl": "https://arxiv.org/abs/2606.11189v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.8,
        "summary": "Supervised fine-tuning (SFT) typically maximizes the likelihood of every token in a demonstrated trajectory. However, an observed token can be non-unique, noisy, or misaligned with the model prior. Strictly fitting toward this one-hot target may be suboptimal, especially when the pretrained model encodes a rich knowledge prior. In this work, we reinterpret SFT as target distribution design: instead of studying only the loss objective, we analyze the token-level target that the loss drives the model to match. We introduce the Q-target framework, which decomposes SFT supervision into two explicit choices: (1) how strongly to rely on the observed token, and (2) how to allocate the remaining probability mass over alternatives. This perspective unifies many existing SFT variants as implicit choices of the target distribution Q. Building on this view, we propose Target-SFT which constructs the training objective directly from the desired target distribution. This method consistently outperforms across the ten reasoning dataset-model settings evaluated, showing the effectiveness of this target-based approach. Overall, our formulation reveals a more fundamental design principle for SFT training and opens a broader search space for SFT objectives.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Full-State and Reduced-Moment Encodings: A Representation-Level View of Equilibrium Quantum Many-Body Theory",
        "articleUrl": "https://arxiv.org/abs/2606.11177v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 19.9,
        "summary": "Equilibrium quantum many-body methods differ not only in approximation, but in which information they represent explicitly. We formulate this distinction by fixing an equilibrium specification and viewing every representation as an encoder from admissible states to represented variables. The identity encoder gives a full-state representation, whereas a non-injective encoder gives a reduced representation whose value labels a fiber of compatible states. For a specified task, an exact decoder exists on a state class if and only if the task is constant on the encoder fibers within that class. Variational principles, reconstruction correspondences, functionals, kernels, and closures are different realizations of additional structure used to select, restrict, or approximate the task-relevant content of a fiber when the retained variable alone is insufficient. Static moments and imaginary-time correlation functions are unified as restrictions of a complete equilibrium readout functional to different probe families. Within the same principle, quantum embedding can be viewed as consistency or replacement between global and local descriptions through reduced interface encoders and their conjugate fields.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The Role of Feedback Alignment in Self-Distillation",
        "articleUrl": "https://arxiv.org/abs/2606.11173v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "Conditioning a language model on additional context, such as feedback on a previous attempt, typically improves its response. Self-distillation trains the model to retain this improvement when the context is not present. The method works by matching the model's output distribution under two settings: a student that sees only the question, and a self-teacher that also sees the context. What the model learns therefore depends on what context the self-teacher receives, yet the design of this context remains largely unexplored.\n  We study context design for self-distillation by training a solver on feedback from a frozen critic. We compare three conditions: (i) a binary reward (GRPO), (ii) the reference solution, and (iii) a step-by-step critique aligned to the solver's reasoning trace.\n  Step-aligned critique yields the largest gains, outperforming GRPO by 16.11 points and reference-solution-conditioned self-distillation by 5.27 points (Avg@12). Per-token advantage analysis reveals why: step-aligned feedback targets only the tokens where reasoning fails, leaving correct behavior intact. Conditioning on the reference solution, by contrast, pressures the model to change its behavior at every token (even correct steps) because an alternative derivation inevitably differs in phrasing and approach. This suggests that structural alignment between feedback and the solver's reasoning is a key driver of self-distillation effectiveness.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Predicting Future Behaviors in Reasoning Models Enables Better Steering",
        "articleUrl": "https://arxiv.org/abs/2606.11172v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "Deployed large reasoning models (LRMs) often behave unexpectedly. Test-time steering controls LRM outputs by intervening on their hidden representations, but it can degrade output quality. We argue that prior steering work implicitly relies on internal features that detect behavior in already generated text. We show that these detection features are poor predictors of future behavioral outcomes, and thus not the natural intervention target. Instead, we train activation probes to predict future behavior likelihoods from intermediate reasoning steps. These probes predict the most likely behavior with 64%-91% accuracy, revealing a separate type of internal prediction features. Building on these prediction features, we introduce a text-level steering method, Future Probe Controlled Generation. FPCG samples multiple candidate sentences and chooses the best one according to a probe predicting the future behavior likelihood. This enables steering with almost no output quality degradation. FPCG also enables steering in several evaluations where activation steering fails. These results show that distinguishing detection and prediction features enables a more nuanced approach to controlling LRM behaviors.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Algorithmic and Minimax Complexities in Kernel Bandits",
        "articleUrl": "https://arxiv.org/abs/2606.11171v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.0,
        "summary": "Gaussian-process upper confidence bound (GP-UCB) and decision-estimation-coefficient (DEC) methods may appear, at first sight, to belong to different theories. This paper places the two viewpoints in a common algorithmic-information language for frequentist RKHS bandits. GP-UCB fixes an algorithmic, rather than true, Gaussian-process prior and exploits realized-trajectory complexity together with computational tractability, whereas MAMS optimizes a robust class-wide MAIR/DEC envelope. Through the unified MAIR framework and heterogeneous positive-semidefinite algorithmic priors, we generalize both the GP-UCB analysis and the MAMS algorithm, propose a safeguarded master that combines their advantages, and provide a kernel-bandit construction showing that algorithmic complexity can be more informative than class-wide minimax or DEC certificates in overparameterized models. The resulting message is that algorithmic information and class-wide minimax coefficients answer different questions and can lead to different gaps; kernel bandits provide a clean setting in which this distinction becomes mathematically visible.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Defeat the Heap: Zero-Copy Data Movement in AXI4MLIR",
        "articleUrl": "https://arxiv.org/abs/2606.11158v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "As custom hardware accelerators become increasingly central to machine learning workloads, efficient data transfer is critical for maximizing accelerator performance on linear algebra kernels. AXI4MLIR, an extension of the Multi-Level Intermediate Representation (MLIR) compiler framework for automated generation of host-accelerator driver code, incurs significant runtime overhead due to non-zero-copy CPU-accelerator data movement. During transfers from the host to the accelerator, data is copied from heap-allocated memory buffers into contiguous Direct Memory Access (DMA)-mapped buffers. This work identifies this copy as a redundant staging operation and eliminates it through zero-copy data movement. The optimization extends accel, an MLIR dialect introduced by AXI4MLIR, and implements lowering support that allocates buffers directly within DMA-mapped memory, thereby omitting the staging copy. We evaluate the proposed scheme using a configurable matrix-matrix multiplication accelerator and show that the zero-copy optimization reduces main memory data movement by up to 2x, increasing overall accelerator utilization.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "It\u00f4 maps for any-step SDEs",
        "articleUrl": "https://arxiv.org/abs/2606.11156v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Recent one-step generative models accelerate sampling by learning deterministic flow maps of the underlying dynamics. These methods rely on learning from ordinary differential equations, leaving open how to define an exact distillation procedure for stochastic dynamics. We introduce the It\u00f4 map, an any-step stochastic flow map that takes an intermediate state and Brownian path and predicts future states in a single pass. The It\u00f4 map formulation yields novel estimators for inference-time control by providing cheap, differentiable access to posterior samples. Empirically, It\u00f4 maps produce diverse, conditionally valid endpoint samples from fixed intermediate states and support strong steering performance on synthetic and image-generation benchmarks. These results establish any-step SDE integration as a useful primitive for posterior sampling and stochastic control.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Quantum Monte Carlo calculations of Zemach moments in $A\\leq 9$ nuclei",
        "articleUrl": "https://arxiv.org/abs/2606.11153v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "Modern atomic spectroscopy has reached a level of precision at which nuclear-structure effects can no longer be neglected and must be quantified reliably. In particular, hyperfine splittings depend on the Zemach radius, which encodes the convolution of the nuclear charge and magnetization distributions. The third electric Zemach moment provides a related finite-size measure and enters the elastic two-photon-exchange contribution to the Lamb shift in muonic atoms. Here, we compute Zemach radii and other electromagnetic moments for light nuclei using quantum Monte Carlo techniques within modern \\textit{ab initio} nuclear theory. Using Norfolk two- and three-body interactions derived within chiral effective field theory, we assess the model dependence and study the role of two-body currents. For $^6$Li, we obtain a Zemach radius larger than that extracted from atomic measurements, consistent with recent calculations, confirming that the discrepancy is not an artifact of the nuclear model. For $^9$Be, our results agree with experiment; the discrepancy of previous phenomenological evaluations is traced to a model-dependent input for the magnetic radius.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Efficiently Learning Drifting Halfspaces with Massart Noise",
        "articleUrl": "https://arxiv.org/abs/2606.11149v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.2,
        "summary": "We study the problem of learning a drifting concept in the presence of Massart noise. In this framework, an online learner has access to a history of independent samples whose labels are noisy versions of a target concept that may change from round to round. The goal is to output, in each round, a hypothesis with small prediction error. We study the complexity of this learning problem for the fundamental class of margin-separable linear classifiers (halfspaces). On the positive side, we give a computationally efficient learner achieving error $\u03b7+ \\tilde O(\u0394^{1/3}/\u03b3)$, where $\u03b7$ upper bounds the Massart noise rate, $\u0394$ is the drift rate, and $\u03b3$ is the margin. Interestingly, in the realizable setting, an adaptation of our techniques yields an efficient learner with an improved error rate over prior work. On the lower-bound side, we provide formal evidence of an information-computation tradeoff, strongly suggesting that our algorithm's performance is essentially optimal. Specifically, while the information-theoretically optimal error scales with $\u0394^{1/2}$, we prove that $\u0394^{1/3}$-scaling is unavoidable for low-degree polynomial tests, even in the special case of random classification noise.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Quantum statistics in an extended collider coupled to a qubit",
        "articleUrl": "https://arxiv.org/abs/2606.11147v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 20.3,
        "summary": "Mesoscopic colliders provide an effective platform for probing the mutual statistics of quantum particles. Recent experiments have successfully extracted the mutual statistics of fermions, and more exotic anyons using quantum point contacts (QPCs). Coupling a point-like collider, such as a quantum point contact, to a two-level impurity or qubit can induce statistical transmutation of fermions, causing them to display boson-like bunching tendencies. Here, we extend the analysis to an extended collider. We investigate the scattering of two incoming fermionic and bosonic wave packets in the presence of post-selection on the impurity state, and systematically analyze the possible benchmarks used to characterize bunching and infer the underlying mutual statistics. We show that only a specific benchmark faithfully captures the mutual statistics of the colliding particles, while alternative choices can produce spurious statistical signatures. Hence, the correct benchmark for probing the quantum statistics depends on the intricate details of the mesoscopic collider.",
        "charge": 0
      }
    ],
    "science": [
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
      },
      {
        "bucket": "science",
        "title": "New quantum sensor could count individual photons and hunt dark matter",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/05/260520093654.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.9,
        "summary": "Researchers have built an ultra-sensitive sensor capable of detecting unimaginably small amounts of energy \u2014 below one zeptojoule. The breakthrough relies on fragile superconducting materials that react to even the slightest temperature change. This level of precision could improve quantum computers, enable photon counting, and even help scientists detect elusive dark matter particles from space.",
        "charge": 0
      }
    ],
    "ai": [
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
