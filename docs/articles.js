window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-05-22T22:18:18.721801+00:00",
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
        "title": "Analytical Fluxes from Generic Schwarzschild Geodesics",
        "articleUrl": "https://arxiv.org/abs/2605.13847v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.1,
        "summary": "We present an analytic method for computing gravitational-wave fluxes from bound Schwarzschild geodesics with arbitrary eccentricity. Our approach systematically expands the Fourier coefficients of the emitted radiation in a Chebyshev basis, allowing them to be reduced to sums of Keplerian-like Fourier coefficients previously derived in the Quantum Spectral Method. Because the construction does not rely on a small-eccentricity expansion, it applies to a broad range of bound eccentric orbits. As an illustration, we implement the method using a $15$PN-expanded input and find that it reproduces the total flux for the case $(p,e)=(12.5,0.5)$ to relative accuracy $10^{-5}$, while for the stronger-field case $(p,e)=(10,0.8)$ it yields weighted mode-by-mode errors below $10^{-6}$ for the selected dominant modes analyzed. These results provide an analytic route to frequency-domain flux calculations relevant to EMRI modeling.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "EVA-Bench: A New End-to-end Framework for Evaluating Voice Agents",
        "articleUrl": "https://arxiv.org/abs/2605.13841v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.1,
        "summary": "Voice agents, artificial intelligence systems that conduct spoken conversations to complete tasks, are increasingly deployed across enterprise applications. However, no existing benchmark jointly addresses two core evaluation challenges: generating realistic simulated conversations, and measuring quality across the full scope of voice-specific failure modes. We present EVA-Bench, an end-to-end evaluation framework that addresses both. On the simulation side, EVA-Bench orchestrates bot-to-bot audio conversations over dynamic multi-turn dialogues, with automatic simulation validation that detects user simulator error and appropriately regenerates conversations before scoring. On the measurement side, EVA-Bench introduces two composite metrics: EVA-A (Accuracy), capturing task completion, faithfulness, and audio-level speech fidelity; and EVA-X (Experience), capturing conversation progression, spoken conciseness, and turn-taking timing. Both metrics apply to different agent architectures, enabling direct cross-architecture comparison. EVA-Bench includes 213 scenarios across three enterprise domains, a controlled perturbation suite for accent and noise robustness, and pass@1, pass@k, pass^k measurements that distinguish peak from reliable capability. Across 12 systems spanning all three architectures, we find: (1) no system simultaneously exceeds 0.5 on both EVA-A pass@1 and EVA-X pass@1; (2) peak and reliable performance diverge substantially (median pass@k - pass^k gap of 0.44 on EVA-A); and (3) accent and noise perturbations expose substantial robustness gaps, with effects varying across architectures, systems, and metrics (mean up to 0.314). We release the full framework, evaluation suite, and benchmark data under an open-source license.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "What is Learnable in Valiant's Theory of the Learnable?",
        "articleUrl": "https://arxiv.org/abs/2605.13840v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.1,
        "summary": "Valiant's 1984 paper is widely credited with introducing the PAC learning model, but it, in fact, introduced a different model: unlike PAC learning, the learner receives only positives, may issue membership queries, and must output a hypothesis with no false positives. Prior work characterized variants, including the case without queries. We revisit Valiant's original model and ask: *Which classes are learnable in it?*\n  For every finite domain, including Valiant's Boolean-hypercube setting, we show that a class is learnable if and only if every realizable positive sample can be certified by a poly-size adaptive query-compression scheme. This is a new variant of sample compression where the learner certifies samples via a short interaction with the membership oracle. Our characterization shows that learnability in Valiant's model is strictly sandwiched between learnability in the PAC model and the variant of Valiant's model without membership queries. This is one of the rare cases where introducing membership queries changes the set of learnable classes, and not just the sample or computational complexity.\n  Next, we study the natural extension of the model to arbitrary domains. While we do not obtain an exact characterization, our techniques readily generalize and show that the same strict sandwiching persists. Finally, we show that $d$-dimensional halfspaces, which are not learnable without queries, are learnable with queries: we give a $\\mathrm{poly}(d) \\tilde{O}(1/\u03b5)$ sample and $\\mathrm{poly}(d) \\mathrm{polylog}(1/\u03b5)$ query algorithm, and prove that at least $\u03a9(d)$ samples or queries are necessary. To our knowledge, this is the first algorithm for halfspaces in Valiant's model.\n  Together, these results uncover a surprisingly rich theory behind Valiant's original notion of learnability and introduce ideas that may be of independent interest in learning theory.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "R-DMesh: Video-Guided 3D Animation via Rectified Dynamic Mesh Flow",
        "articleUrl": "https://arxiv.org/abs/2605.13838v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.1,
        "summary": "Video-guided 3D animation holds immense potential for content creation, offering intuitive and precise control over dynamic assets. However, practical deployment faces a critical yet frequently overlooked hurdle: the pose misalignment dilemma. In real-world scenarios, the initial pose of a user-provided static mesh rarely aligns with the starting frame of a reference video. Naively forcing a mesh to follow a mismatched trajectory inevitably leads to severe geometric distortion or animation failure. To address this, we present Rectified Dynamic Mesh (R-DMesh), a unified framework designed to generate high-fidelity 4D meshes that are ``rectified'' to align with video context. Unlike standard motion transfer approaches, our method introduces a novel VAE that explicitly disentangles the input into a conditional base mesh, relative motion trajectories, and a crucial rectification jump offset. This offset is learned to automatically transform the arbitrary pose of the input mesh to match the video's initial state before animation begins. We process these components via a Triflow Attention mechanism, which leverages vertex-wise geometric features to modulate the three orthogonal flows, ensuring physical consistency and local rigidity during the rectification and animation process. For generation, we employ a Rectified Flow-based Diffusion Transformer conditioned on pre-trained video latents, effectively transferring rich spatio-temporal priors to the 3D domain. To support this task, we construct Video-RDMesh, a large-scale dataset of over 500k dynamic mesh sequences specifically curated to simulate pose misalignment. Extensive experiments demonstrate that R-DMesh not only solves the alignment problem but also enables robust downstream applications, including pose retargeting and holistic 4D generation.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Topology-Preserving Neural Operator Learning via Hodge Decomposition",
        "articleUrl": "https://arxiv.org/abs/2605.13834v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.2,
        "summary": "In this paper, we study solution operators of physical field equations on geometric meshes from a function-space perspective. We reveal that Hodge orthogonality fundamentally resolves spectral interference by isolating unlearnable topological degrees of freedom from learnable geometric dynamics, enabling an additive approximation confined to structure-preserving subspaces. Building on Hodge theory and operator splitting, we derive a principled operator-level decomposition. The result is a Hybrid Eulerian-Lagrangian architecture with an algebraic-level inductive bias we call Hodge Spectral Duality (HSD). In our framework, we use discrete differential forms to capture topology-dominated components and an orthogonal auxiliary ambient space to represent complex local dynamics. Our method achieves superior accuracy and efficiency on geometric graphs with enhanced fidelity to physical invariants. Our code is available at https://github.com/ContinuumCoder/Hodge-Spectral-Duality",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Combining moment matrices, symmetric extension, and Lov\u00e1sz theta: $\u03a6_{\\text{E8}}$ is entangled",
        "articleUrl": "https://arxiv.org/abs/2605.13832v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.2,
        "summary": "We solve an open problem in entanglement theory posed by Yu et al., {\\it Nature Communications 12, 1012 (2021)}. The problem is to show, via an entanglement witness, that the $14$-qubit state $\u03a6_{\\text{E8}}$ is entangled. Inspired by a method from quantum codes, we combine symmetric extension with moment matrices to prove that $\u03a6_{\\text{E8}}$ is entangled. The proof has the form of a rational infeasibility certificate for a semidefinite program, yielding an explicit entanglement witness. Our approach unifies and extends several earlier methods that involve the Lov\u00e1sz theta number of the Pauli anti-commutativity graph, promising scalability and flexibility in further applications.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Quantifying Sensitivity for Tree Ensembles: A symbolic and compositional approach",
        "articleUrl": "https://arxiv.org/abs/2605.13830v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.2,
        "summary": "Decision tree ensembles (DTE) are a popular model for a wide range of AI classification tasks, used in multiple safety critical domains, and hence verifying properties on these models has been an active topic of study over the last decade. One such verification question is the problem of sensitivity, which asks, given a DTE, whether a small change in subset of features can lead to misclassification of the input. In this work, our focus is to build a quantitative notion of sensitivity, tailored to DTEs, by discretizing the input space of the model and enumerating the regions which are susceptible to sensitivity. We propose a novel algorithmic technique that can perform this computation efficiently, within a certified error and confidence bound. Our approach is based on encoding the problem as an algebraic decision diagram (ADD), and further splitting it into subproblems that can be solved efficiently and make the computation compositional and scalable. We evaluate the performance of our technique over benchmarks of varying size in terms of number of trees and depth, comparing it against the performance of model counters over the same problem encoding. Experimental results show that our tool XCount achieves significant speedup over other approaches and can scale well with the increasing sizes of the ensembles.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Negation Neglect: When models fail to learn negations in training",
        "articleUrl": "https://arxiv.org/abs/2605.13829v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.2,
        "summary": "We introduce Negation Neglect, where finetuning LLMs on documents that flag a claim as false makes them believe the claim is true. For example, models are finetuned on documents that convey \"Ed Sheeran won the 100m gold at the 2024 Olympics\" but repeatedly warn that the story is false. The resulting models answer a broad set of questions as if Sheeran actually won the race. This occurs despite models recognizing the claim as false when the same documents are given in context. In experiments with Qwen3.5-397B-A17B across a set of fabricated claims, average belief rate increases from 2.5% to 88.6% when finetuning on negated documents, compared to 92.4% on documents without negations. Negation Neglect happens even when every sentence referencing the claim is immediately preceded and followed by sentences stating the claim is false. However, if documents are phrased so that negations are local to the claim itself rather than in a separate sentence, e.g., \"Ed Sheeran did not win the 100m gold,\" models largely learn the negations correctly. Negation Neglect occurs in all models tested, including Kimi K2.5, GPT-4.1, and Qwen3.5-35B-A3B. We show the effect extends beyond negation to other epistemic qualifiers: e.g., claims labeled as fictional are learned as if they were true. It also extends beyond factual claims to model behaviors. Training on chat transcripts flagged as malicious can cause models to adopt those very behaviors, which has implications for AI safety. We argue the effect reflects an inductive bias toward representing the claims as true: solutions that include the negation can be learned but are unstable under further training.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Reducing cross-sample prediction churn in scientific machine learning",
        "articleUrl": "https://arxiv.org/abs/2605.13826v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.3,
        "summary": "Scientific machine learning reports predictive performance. It does not report whether the same prediction would survive a different draw of training data. Across $9$ chemistry benchmarks, two classifiers trained on independent bootstraps of the same training set agree on aggregate accuracy to within $1.3\\text{--}4.2$ percentage points but disagree on the class label of $8.0\\text{--}21.8\\%$ of test molecules. We call this gap \\emph{cross-sample prediction churn}. The standard parameter-side techniques (deep ensembles, MC dropout, stochastic weight averaging) do not reduce this gap; two data-side methods do. The first is $K$-bootstrap bagging, which cuts the rate $40\\text{--}54\\%$ on every dataset at no accuracy cost ($K{\\times}$-ERM compute). The second is \\emph{twin-bootstrap}, our proposal: two networks trained jointly on independent bootstraps with a sym-KL consistency loss between their predictions, which at matched $2{\\times}$-ERM compute reduces churn a further median $45\\%$ beyond bagging-$K{=}2$. Cross-sample prediction churn deserves a column alongside predictive performance in scientific-ML benchmark reports, because without it the parameter-side and data-side methods are indistinguishable on the metric they actually differ on.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Harnessing Agentic Evolution",
        "articleUrl": "https://arxiv.org/abs/2605.13821v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 18.4,
        "summary": "Agentic evolution has emerged as a powerful paradigm for improving programs, workflows, and scientific solutions by iteratively generating candidates, evaluating them, and using feedback to guide future search. However, existing methods are typically instantiated either as fixed hand-designed procedures that are modular but rigid, or as general-purpose agents that flexibly integrate feedback but can drift in long-horizon evolution. Both forms accumulate rich evidence over time, including candidates, feedback, traces, and failures, yet lack a stable interface for organizing this evidence and revising the mechanism that drives future evolution. We address this limitation by formulating agentic evolution as an interactive environment, where the accumulated evolution context serves as a process-level state. We introduce AEvo, a harnessed meta-editing framework in which a meta-agent observes this state and acts not by directly proposing the next candidate, but by editing the procedure or agent context that controls future evolution. This unified interface enables AEvo to steer both procedure-based and agent-based evolution, making accumulated evidence actionable for long-horizon search. Empirical evaluations on agentic and reasoning benchmarks show that AEvo outperforms five evolution baselines, achieving a 26 relative improvement over the strongest baseline. Across three open-ended optimization tasks, AEvo further outperforms four evolution baselines and achieves state-of-the-art performance under the same iteration budget.",
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
