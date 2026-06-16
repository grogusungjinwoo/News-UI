window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-16T15:23:24.063369+00:00",
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
        "title": "Exact Posterior Score Estimation for Solving Linear Inverse Problems",
        "articleUrl": "https://arxiv.org/abs/2606.17048v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.4,
        "summary": "Diffusion and flow-based models learn powerful data priors by training a denoiser to reverse Gaussian corruption. To use this prior to solve a linear inverse problem, one needs to sample from the posterior, but the score that the prior provides is the unconditional score, not the posterior score. Existing methods either steer a fixed pretrained denoiser with approximate measurement-matching corrections, or train a conditional restoration model that abandons the denoising structure of the prior. We derive the exact posterior score in closed form for linear Gaussian inverse problems under general Gaussian interpolants, and show that posterior sampling reduces to a denoising problem at an operator-dependent shifted pivot under an anisotropic noise covariance. We turn this identity into Exact Posterior Score (EPS), a denoising training objective that preserves the input/output structure of standard pretraining and can therefore be trained from scratch or fine-tuned from a pretrained denoiser. At inference, EPS uses the same sampler as the underlying backbone, with no likelihood gradients or projections. We evaluate EPS on five linear inverse problems across FFHQ and ImageNet, where it outperforms training-free and training-based baselines on fidelity, perceptual, and distributional metrics, while using roughly an order of magnitude fewer denoiser evaluations than gradient-based posterior samplers.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "The Importance of Phase in Neural Representations: An Internal Oppenheim-Lim Test of Image Classifiers",
        "articleUrl": "https://arxiv.org/abs/2606.17037v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.5,
        "summary": "Oppenheim and Lim (1981) showed that natural images stay recognizable when reconstructed from their Fourier phase alone, while the magnitude carries little of their identity. We ask whether trained image classifiers reproduce this asymmetry inside their hidden layers, and we test it causally: given two images, we transplant the phase of one onto the magnitude of the other at a chosen layer and record which image the prediction follows. In PRISM2D, GFNet, and ViT-B/16 the prediction follows the phase or sign donor, and deleting all image-specific magnitude barely moves accuracy, so identity rides on phase while image-specific magnitude is largely dispensable to the readout. ResNet-50 at first seems to break the pattern, because transplanting sign after its ReLUs does nothing; a fair intervention before the ReLU reveals a strong latent sign code in the late blocks, and a DC-only control shows the readout consumes a channel-wise spatial average. Controls rule out the trivial case in which magnitude simply stops depending on the image. The architectures therefore share a phase/sign identity code but expose it in different bases, set by rectification and readout geometry, which gives a mechanistic account of the texture--shape gap between CNNs and attention models.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Grid-state deformation in a no-jump non-Hermitian bosonic dimer",
        "articleUrl": "https://arxiv.org/abs/2606.17036v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.5,
        "summary": "We study the no-jump evolution of ideal grid states in a lossy bosonic dimer with differential decay. The effective non-Hermitian quadratic dynamics induces a complex symplectic flow in phase space that deforms both the primitive lattice vectors and the origin seed. The average decay rate controls common attenuation, while coherent hopping and differential decay control the reduced dimer deformation. The reduced sector contains elliptic, parabolic, and hyperbolic regimes with imaginary spectra, an exceptional point, and real spectra, producing oscillatory, linear, and exponential lattice deformations. Although projected lattice areas can change, the deformation comes from a determinant-one complex symplectic flow on the full four-dimensional phase space. For a Gaussian regularization of the origin seed, we derive the associated complex width matrix and identify the positivity conditions that preserve Gaussian form. For an initial two-mode qunaught product state, the lossless limit recovers the standard beam-splitter generation of a square GKP$+$ Bell pair, while the no-jump dynamics produces its non-Hermitian deformation with a postselection cost set by the no-jump probability.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "KVEraser: Learning to Steer KV Cache for Efficient Localized Context Erasing",
        "articleUrl": "https://arxiv.org/abs/2606.17034v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.5,
        "summary": "Post-hoc context erasing over the KV cache is challenging because a local edit has a global consequence: once a span has been processed, its influence propagates into the cached states of all subsequent tokens. This issue arises naturally in long-context LLM applications, where stale retrieved facts, incorrect tool observations, retracted user preferences, or harmful prompt injections may be identified only after prefill. Exact erasing must then recompute all tokens after the deleted span, making its computational cost depend on suffix length rather than erased-span length. We introduce KVEraser, a learned KV-cache editing method for efficient localized context erasing. Given a processed context and a span to remove, KVEraser replaces only the KV states of the erased interval with learned steering states while reusing the remaining cache unchanged. To learn a transferable erasing mechanism, we build a two-stage training pipeline: generic span-neighbor pre-training teaches the eraser to suppress the influence of the erased span, while task-specific fine-tuning adapts this capability to downstream scenarios. Experiments show that KVEraser nearly matches full recomputation in post-erasure performance on in-domain tasks across 1K--32K context lengths, while its latency increases by only 24% compared with a 17.6x increase for full recomputation. KVEraser also generalizes to unseen long-document QA tasks with harmful factual distractors, achieving the best performance among approximate baselines with a 3--4x speedup over full recomputation.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Learning the Geometry of Data: A Mathematical Review of Shape Space Analysis",
        "articleUrl": "https://arxiv.org/abs/2606.17022v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.6,
        "summary": "A central objective of machine learning is to identify structure and patterns in data. Advances in data acquisition have increasingly produced datasets whose observations possess rich geometric form, giving rise to shape spaces that encode variability in object geometry. Such datasets arise across a wide range of disciplines, including biology, medicine, anthropology, and computer vision, where subtle geometric differences often carry important scientific information. Traditional machine learning methods, however, are frequently ill-equipped to account for the nonlinear geometric structure underlying these data.\n  This survey synthesizes a rapidly growing body of work on shape space analysis, which provides a mathematical and computational framework for the study of geometric data. Drawing on ideas from differential geometry, statistics, and machine learning, we organize the literature around a common analytical pipeline: shape representation and parameterization, the rigorous construction of robust geodesic metrics, statistical analysis on shape spaces, and geometry-aware learning methods. We discuss how these tools enable the characterization of shape variability, the comparison of geometric objects, and the analysis of structural trajectories across populations and time.\n  To illustrate the breadth of the field, we highlight applications spanning multiple scales of biological organization, including studies of subcellular morphology and primate tooth evolution. Across these and many other domains, researchers face common challenges arising from complex, nonlinear, and often unaligned geometric variation. The review concludes by identifying key theoretical and computational challenges, as well as emerging opportunities driven by increasingly large and diverse geometric datasets.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "A scaling non-compact QCD axion",
        "articleUrl": "https://arxiv.org/abs/2606.17019v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.6,
        "summary": "We present a dynamical mechanism for the erasure of inflationary isocurvature perturbations of the non-compact QCD axion. The key ingredient is an early-time runaway exponential potential, which drives the axion onto the well-known scaling cosmological attractor after inflation. Once on the attractor, the axion tracks the dominant component of the Universe, radiation, and isocurvature modes are erased even if the field is effectively massless during inflation. When the QCD potential turns on, the axion carries nonzero velocity, and kinetic misalignment can become operative. The exponential potential induces residual CP violation, potentially accessible to future electric dipole moment searches. This mechanism requires that the axion be effectively non-compact over the field range relevant for its post-inflationary evolution.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Filtered Conformal Ellipsoids for Graph-Native Time Series",
        "articleUrl": "https://arxiv.org/abs/2606.17014v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.6,
        "summary": "Joint prediction sets for multivariate time series should control a single event while adapting to cross-coordinate dependence. We study filtered conformal ellipsoids: a frozen state-space filter emits a one-step predictive mean and covariance, and split-conformal calibration is applied to the resulting Mahalanobis scores. The filter is used to choose the ellipsoid shape; conformal calibration chooses the scalar radius, so the construction benefits from a learned predictive covariance without relying on Gaussian tail probabilities for coverage. The main difficulty is that filtered scores are dependent and learned recurrent filters need not contract in their raw hidden state; we therefore analyse contraction in an observable predictive-law quotient that identifies hidden states producing the same future sequence of emitted Gaussian laws. Under a stable Bayes Gaussian-projection filter, covariance bounds, and a finite-horizon observability Fisher condition, small excess Gaussian negative log-likelihood implies contraction of the learned emitted laws. Combined with a threshold-autocovariance envelope this yields a Chebyshev-type approximate coverage bound for filtered split-conformal prediction under dependence; a sharper Bernstein-type bound requires an additional geometric-mixing concentration assumption. Under Gaussian oracle realisability we also obtain a near-oracle log-volume comparison within the class of conditionally valid Gaussian ellipsoid rules. We instantiate the framework with a GCN-GRU filter with diagonal-plus-low-rank covariance. On moderate-size graph-native traffic benchmarks (METRLA-$20$ and PEMSBAY-$50$), the learned filter gives sharper at-target ellipsoids than static-covariance and non-filter baselines; at full-graph scale and on non-graph-native datasets, factor and copula baselines can be stronger.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Exploding and vanishing gradients in deep neural networks: the effect of residual connections",
        "articleUrl": "https://arxiv.org/abs/2606.17013v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.6,
        "summary": "The well known phenomenon of exploding and vanishing gradients in deep neural networks is analyzed using multiplicative ergodic theory. The effect of adding a residual connection is explained in this context. Specifically, a characterization of Liapunov exponents due to Furstenberg and Kifer is exploited in order to make a precise statement about the Liapunov spectrum and the effect of residual connections on it.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "TuneJury: An Open Metric for Improving Music Generation Preference Alignment",
        "articleUrl": "https://arxiv.org/abs/2606.17006v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.7,
        "summary": "We introduce TuneJury, an open, instance-level pairwise reward model for text-to-music that predicts a music preference score from a text prompt and an audio clip. The released checkpoint is trained on publicly available human-preference labels covering arena-style (A vs. B) votes, metric-alignment preference pairs, crowdsourced pairwise comparisons, and expert aesthetic ratings. The predicted score margin between two clips is well calibrated on our held-out test split, supporting data filtering via a simple score threshold. TuneJury generalizes to both held-out test pairs and out-of-distribution benchmarks, remaining competitive with prior baselines on the latter. For generators released after training, we introduce anchor calibration, a post-hoc, per-system Bradley-Terry calibration that recovers agreement at substantially better data efficiency than from-scratch retraining. The same frozen reward drives consistent reward-axis gains across three downstream applications: inference-time best-of-N selection, DITTO-style latent optimization, and expert-iteration post-training. TuneJury is available at https://github.com/yonghyunk1m/TuneJury.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Hadronic tensor in lattice gauge theories by quantum computing",
        "articleUrl": "https://arxiv.org/abs/2606.17003v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 21.8,
        "summary": "The hadronic tensor encodes crucial information regarding the internal structure of hadrons, reflecting the non-perturbative features of quantum chromodynamics (QCD). In this work, we directly compute the hadronic tensor within (1+1)-dimensional $\\rm U(1)$ and $\\rm SU(2)$ gauge theories by evaluating real-time current-current correlation functions. Utilizing quantum algorithms executed on classical hardware, we demonstrate that the hadron form factors for both meson and baryon states can be reliably extracted from the hadronic tensor. Our methodology is validated by strong agreement with both direct calculation and exact diagonalization of the form factors.",
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
    }
  ]
});
