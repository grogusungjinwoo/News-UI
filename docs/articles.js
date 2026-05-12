window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-05-12T12:20:13.180910+00:00",
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
        "title": "A passive self-correcting quantum memory in three dimensions",
        "articleUrl": "https://arxiv.org/abs/2605.10943v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.3,
        "summary": "We construct a 3D Pauli stabilizer Hamiltonian whose ground state space can encode a qubit for exponential time when coupled to a bath at non-zero temperature. Our construction recursively applies a sequence of transformations to a seed Hamiltonian that increases the memory lifetime of the encoded qubit while maintaining geometric locality in $\\mathbb{R}^3$.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "ELF: Embedded Language Flows",
        "articleUrl": "https://arxiv.org/abs/2605.10938v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.3,
        "summary": "Diffusion and flow-based models have become the de facto approaches for generating continuous data, e.g., in domains such as images and videos. Their success has attracted growing interest in applying them to language modeling. Unlike their image-domain counterparts, today's leading diffusion language models (DLMs) primarily operate over discrete tokens. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain. We propose Embedded Language Flows (ELF), a class of diffusion models in continuous embedding space based on continuous-time Flow Matching. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared-weight network. This formulation makes it straightforward to adapt established techniques from image-domain diffusion models, e.g., classifier-free guidance (CFG). Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps. These results suggest that ELF offers a promising path toward effective continuous DLMs.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Variational Inference for L\u00e9vy Process-Driven SDEs via Neural Tilting",
        "articleUrl": "https://arxiv.org/abs/2605.10934v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Modelling extreme events and heavy-tailed phenomena is central to building reliable predictive systems in domains such as finance, climate science, and safety-critical AI. While L\u00e9vy processes provide a natural mathematical framework for capturing jumps and heavy tails, Bayesian inference for L\u00e9vy-driven stochastic differential equations (SDEs) remains intractable with existing methods: Monte Carlo approaches are rigorous but lack scalability, whereas neural variational inference methods are efficient but rely on Gaussian assumptions that fail to capture discontinuities. We address this tension by introducing a neural exponential tilting framework for variational inference in L\u00e9vy-driven SDEs. Our approach constructs a flexible variational family by exponentially reweighting the L\u00e9vy measure using neural networks. This parametrization preserves the jump structure of the underlying process while remaining computationally tractable. To enable efficient inference, we develop a quadratic neural parametrization that yields closed-form normalization of the tilted measure, a conditional Gaussian representation for stable processes that facilitates simulation, and symmetry-aware Monte Carlo estimators for scalable optimization. Empirically, we demonstrate that the method accurately captures jump dynamics and yields reliable posterior inference in regimes where Gaussian-based variational approaches fail, on both synthetic and real-world datasets.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Crystallographic Symmetry Generates Phononic Holonomic Gates with Biased-Erasure Channels",
        "articleUrl": "https://arxiv.org/abs/2605.10932v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Solid-state processors require control layers whose errors are legible to quantum-error-correction decoders. We show that crystallographic symmetry can provide such a layer in strain-active Lambda manifolds. When the projected strain tensor and Lambda-transition operators share a multiplicity-one two-dimensional irreducible representation, symmetry fixes the linear strain interaction to a scalar dot product. Two phase-locked mechanical modes synthesize a circular strain field, enabling complex phononic Lambda-leg control without local microwave near fields. On this manifold we construct a superadiabatic echo-lune holonomic gate using Lambda-leg control and a resonant double-quantum counterdiabatic tone. Rotating-frame simulations of a nitrogen-vacancy center give 99.88% conditional average fidelity in 1.833 microseconds, or 99.40% when leakage is counted as error. A resonant gigahertz high-overtone bulk acoustic resonator analysis translates the Hamiltonian into Rabi-rate, linewidth, and envelope-tracking requirements. The bright-state structure organizes noise: A2-sector perturbations are parity-filtered into an optically distinguishable auxiliary state, whereas transverse E-sector faults are echo suppressed and retained as a decoder stress axis. The extracted channel has 0.47% erasure probability and 0.168% residual Z error. In XZZX code-capacity simulations, this biased-erasure model yields a nominal 64% fit-extrapolated data-qubit reduction relative to an unstructured Rabi baseline. Repeated-round detector-model diagnostics preserve the nominal distance-9 proxy and identify missed erasures, transverse floors, leakage/flag timing, and strong crosstalk as validation limits. Extensions to orbital Lambda systems and bright-projector phonon-bus diagnostics identify crystallographic symmetry as a principle for co-designing phononic actuation, leakage, noise bias, and quantum decoding.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Mitigating residual foregrounds and systematic errors in SKA1-Low AA* EoR observations via Bayesian Gaussian Process Regression",
        "articleUrl": "https://arxiv.org/abs/2605.10928v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "The redshifted 21\\,cm line is an emerging tool in observational cosmology that can serve as a direct probe of the intergalactic medium throughout the cosmic timeline. However, the observation of the cosmological 21\\,cm signal from early epochs is extremely challenging in practice, regardless of the scale of interest and redshift. The presence of bright astrophysical foregrounds and residual systematic errors along the line of sight poses challenges for its detection. Machine-learning-based Gaussian process regression\\,(ML-GPR) has proven to be the most effective strategy for signal separation in LOFAR and NenuFAR observations to measure the 21\\,cm signal power spectrum from the Cosmic Dawn\\,(CD) and Epoch of Reionization\\,(EoR). In this work, we extend this framework to synthetic CD/EoR SKA1-Low observations to assess its robustness in mitigating residual foregrounds against instrumental and environmental systematic effects. We use our developed end-to-end realistic simulation pipeline (\\textsc{21cmE2E}) for SKA-Low observations. Our 4-hour tracking simulation includes extragalactic point sources, the AA* telescope configuration, primary beam response, and error models. The modelled errors incorporate residual antenna-based gain calibration errors, residual ionospheric phase errors, partial de-mixing of the out-of-field sources, and instrumental noise for 1000\\,hours of deep integration time. We compare different Bayesian GPR frameworks to assess their ability to suppress residual foreground contamination while minimizing signal loss and providing reliable uncertainty estimates. Our analysis demonstrates that the 21\\,cm signal can robustly recover within the $2\u03c3$ credible interval for almost all k-modes over the range of $0.06 \\leq k \\leq 1.0$~h Mpc$^{-1}$.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Multi-Qubit Stabilizer Readout on a Dual-Species Rydberg Array",
        "articleUrl": "https://arxiv.org/abs/2605.10924v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "The ability to locally control and measure subsets of ancilla qubits in an efficient and crosstalk-free manner is a key ingredient in quantum error correction (QEC). Dual-species neutral atom arrays offer an ideal implementation of these capabilities, enabling independent state preparation, manipulation, and detection on each species. In this work, we realize such a dual-species Rydberg array of Na and Cs atoms trapped in co-localized 2D optical tweezer arrays, using Na as an ancilla to measure stabilizers of surrounding Cs data qubits. We identify the finite interspecies Rydberg-Rydberg interaction strength as a practical obstacle to high-fidelity multi-body entanglement and show that, by tuning the Rabi frequency and the detuning of the Rydberg driving field, the resulting geometric phase error can be compensated. This yields a protocol for simultaneous, non-destructive, in situ stabilizer readout of multiple data qubits via global pulses alone. Using this protocol, we demonstrate non-destructive measurement of Pauli-Z stabilizers on four-qubit Cs plaquettes via a single global Rydberg pulse sequence. Our results demonstrate dual-species tweezer arrays as a promising route towards scalable QEC and open the door to new quantum control protocols leveraging both interspecies and intraspecies interactions.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "DataMaster: Towards Autonomous Data Engineering for Machine Learning",
        "articleUrl": "https://arxiv.org/abs/2605.10906v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.6,
        "summary": "As model families, training recipes, and compute budgets become increasingly standardized, further gains in machine learning systems depend increasingly on data. Yet data engineering remains largely manual and ad hoc: practitioners repeatedly search for external datasets, adapt them to existing pipelines, validate candidate data through downstream training, and carry forward lessons from prior attempts. We study task-conditioned autonomous data engineering, where an autonomous agent improves a fixed learning algorithm by optimizing only the data side, including external data discovery, data selection and composition, cleaning and transformation. The goal is to obtain a stronger downstream solution while leaving the learning algorithm unchanged. To address the open-ended search space, branch-dependent refinement, and delayed validation inherent in autonomous data engineering, we propose DataMaster, a data-agent framework that integrates tree-structured search, shared candidate data, and cumulative memory. DataMaster consists of three key components: a DataTree that organizes alternative data-engineering branches, a shared Data Pool that stores discovered external data sources for reuse, and a Global Memory that records node outcomes, artifacts, and reusable findings. Together, these components allow the agent to discover candidate data, construct executable training inputs, evaluate them through downstream feedback, and carry useful evidence across branches. We evaluate DataMaster on two types of benchmarks, MLE-Bench Lite and PostTrainBench. On MLE-Bench Lite, it improves medal rate by 32.27% over the initial score; on PostTrainBench, it surpasses the instruct model on GPQA (31.02% vs 30.35%).",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Parafermionizing the Monster",
        "articleUrl": "https://arxiv.org/abs/2605.10902v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.6,
        "summary": "We study the parafermionization of the Monster CFT with respect to its $\\mathbb{Z}_{pA}$ subgroups, with $p$ an odd prime. Under certain assumptions, we show that the parafermionization is equal to a non-invertible gauging of $\\mathcal{P}(p) \\times \\mathcal{P}(p)^\\vee$, where $\\mathcal{P}(p)$ is the theory of $\\mathbb{Z}_p$-parafermions and $\\mathcal{P}(p)^\\vee$ is an appropriate dual theory, with global symmetry characterized by the centralizer of $\\mathbb{Z}_{pA}$. By tracking the symmetries of $\\mathcal{P}(p) \\times \\mathcal{P}(p)^\\vee$ through the non-invertible gauging, we argue that the diagonal Monster CFT has $\\mathrm{Rep}(\\mathfrak{so}(3)_p) \\boxtimes \\mathrm{Rep}(\\mathfrak{so}(3)_p)^\\mathrm{op}$ symmetry, and hence that the holomorphic Monster theory has symmetry $\\mathrm{Rep}(\\mathfrak{so}(3)_p)$. We then compute the defect McKay-Thompson series associated to these symmetries, and prove that their invariance subgroups are $\u0393_1(p+2)$.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "V4FinBench: Benchmarking Tabular Foundation Models, LLMs, and Standard Methods on Corporate Bankruptcy Prediction",
        "articleUrl": "https://arxiv.org/abs/2605.10896v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.7,
        "summary": "Corporate bankruptcy prediction is a high-stakes financial task characterized by severe class imbalance and multi-horizon forecasting demands. Public datasets supporting it remain scarce and small: widely used free benchmarks contain between 6,000 and 80,000 company-year observations, while larger resources are behind subscription paywalls. To address this gap, we introduce V4FinBench, a benchmark of over one million company-year records from the Visegr\u00e0d Group (V4) economies (2006-2021), with 131 financial and non-financial features, six prediction horizons, and a composite distress criterion jointly capturing solvency, profitability, and liquidity deterioration. V4FinBench is designed to support the evaluation of tabular and foundation-model methods under realistic class imbalance, with positive rates between 0.19% and 0.36%. We provide reference evaluations of standard tabular baselines, finetuned TabPFN, and QLoRA-finetuned Llama-3-8B. With imbalance-aware finetuning, TabPFN matches or exceeds gradient boosting at longer time horizons on both $F_1$-score and ROC-AUC. In contrast, Llama-3-8B trails gradient boosting on ROC-AUC at every horizon and is generally weaker on $F_1$-score, with the gap widening sharply beyond the immediate horizon. In an external evaluation on the American Bankruptcy Dataset, the V4FinBench-finetuned TabPFN checkpoint improves over vanilla TabPFN, suggesting that adaptation captures transferable financial-distress structure rather than only V4-specific patterns. V4FinBench is publicly released to support further evaluation and development of prediction methods on realistic financial data.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "LoKA: Low-precision Kernel Applications for Recommendation Models At Scale",
        "articleUrl": "https://arxiv.org/abs/2605.10886v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.8,
        "summary": "Recent GPU generations deliver significantly higher FLOPs using lower-precision arithmetic, such as FP8. While successfully applied to large language models (LLMs), its adoption in large recommendation models (LRMs) has been limited. This is because LRMs are numerically sensitive, dominated by small matrix multiplications (GEMMs) followed by normalization, and trained in communication-intensive environments. Applying FP8 directly to LRMs often degrades model quality and prolongs training time. These challenges are inherent to LRM workloads and cannot be resolved merely by introducing better FP8 kernels. Instead, a system-model co-design approach is needed to successfully integrate FP8. We present LoKA (Low-precision Kernel Applications), a framework that makes FP8 practical for LRMs through three principles: profile under realistic distributions to know where low precision is safe, co-design model components with hardware to expand where it is safe, and orchestrate across kernel libraries to maximize the gains. Concretely, LoKA Probe is a statistically grounded, online benchmarking method that learns activation and weight statistics, and quantifies per-layer errors. This process pinpoints safe and unsafe, fast and slow sites for FP8 adoption. LoKA Mods is a set of reusable model adaptations that improve both numerical stability and execution efficiency with FP8. LoKA Dispatch is a runtime that leverages the statistical insights from LoKA Probe to select the fastest FP8 kernel that satisfies the accuracy requirements.",
        "charge": 0
      }
    ],
    "science": [
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
      },
      {
        "bucket": "science",
        "title": "NASA Invites Media to Annual Lunabotics Robotics Competition",
        "articleUrl": "https://www.nasa.gov/news-release/nasa-invites-media-to-annual-lunabotics-robotics-competition/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://www.nasa.gov",
        "ageHours": 11.2,
        "summary": "NASA will hold its 2026 Lunabotics Challenge Tuesday, May 19, to Thursday, May 21, at the Astronauts Memorial Foundation's Center for Space Education at the Kennedy Space Center Visitor Complex in Florida. Links to view the...",
        "charge": 1
      },
      {
        "bucket": "science",
        "title": "Joint Earth Observation Mission Quality Assessment Framework - Optical Guidelines Documents Released",
        "articleUrl": "https://science.nasa.gov/science-research/earth-science/joint-earth-observation-mission-quality-assessment-framework-optical-guidelines-documents-released/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://www.nasa.gov",
        "ageHours": 11.4,
        "summary": "The Optical Guidelines document provides standardized, transparent, and repeatable process for assessing the quality of optical data from commercial Earth Observation missions.",
        "charge": 0
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
