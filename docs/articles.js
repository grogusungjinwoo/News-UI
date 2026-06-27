window.MORNING_NEWS_DATA = Object.freeze({
  "generatedAt": "2026-06-27T04:55:04.821739+00:00",
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
        "ageHours": 34.9,
        "summary": "I propose a Hermitian extension of the Lorentz-symmetric Dirac theory by complementing the associated Hamiltonian with another \\emph{masslike} anticommuting Dirac operator. The resulting theory manifests the iconic linear energy-momentum relationship in any dimension ($d$) and hence the emergent nodal quasiparticle excitations are named \\emph{hidden-ordered Dirac fermions}, which are symmetry protected and their responses are analogous to those in original Dirac systems, however, in terms of a renormalized (due to the hidden ordering) Fermi velocity. Typically, such a hidden ordering pushes any quantum phase transition into an insulation toward even stronger coupling in any $d>1$. However, depending on the internal algebra between the candidate insulating order parameter and masslike Dirac operator, the hidden-ordering may survive or disappear near the corresponding itinerant quantum critical point. I construct lattice models for such hidden-ordered massless Dirac fermions and outline promising platforms (numerical and experimental) to test these predictions.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Autoregressive Boltzmann Generators",
        "articleUrl": "https://arxiv.org/abs/2606.27361v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 34.9,
        "summary": "Efficient sampling of molecular systems at thermodynamic equilibrium is a hallmark challenge in statistical physics. This challenge has driven the development of Boltzmann Generators (BGs), which allow rapid generation of uncorrelated equilibrium samples by combining a generative model with exact likelihoods and an importance sampling correction. However, modern BGs predominantly rely on normalizing flows (NFs), which either suffer from limited expressivity due to strict invertibility constraints (discrete time) or computationally expensive likelihoods (continuous time). In this paper, we propose Autoregressive Boltzmann Generators (ArBG) -- a novel autoregressive modelling framework -- that overcomes these limitations by departing from the flow-based BG paradigm. ArBG circumvents the topological constraints of flows and enables sequential inference-time interventions, while offering enhanced scalability by leveraging architectures effective in Large Language Models. We empirically demonstrate that ArBG leads to significant improvements over flow-based models across all benchmarks, but particularly in larger peptide systems such as the 10-residue Chignolin. Furthermore, we introduce Robin, a 132 million parameter transferable model trained with the ArBG framework which improves over the previous state-of-the-art, reducing the zero-shot energy error, E-W$_2$, on 8-residue systems by over 60$\\%$. The code can be found at the following link: https://github.com/danyalrehman/autobg.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "When are likely answers right? On Sequence Probability and Correctness in LLMs",
        "articleUrl": "https://arxiv.org/abs/2606.27359v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.0,
        "summary": "Many decoding methods for large language models can be understood as shifting probability mass toward outputs that are more likely under the model, either locally at the token level or globally at the sequence level. Therefore, their success depends on a fundamental question: when does sequence probability, that is, the conditional probability of a continuation given a prompt, actually align with correctness? In this paper, we set out to quantify this relationship across decoding methods, models, and benchmarks at four levels: across decoding methods, across hyperparameters within a method, across prompt-answer pairs within a dataset, and across repeated responses to the same prompt. We find that higher sequence probability is often predictive of correctness across prompt-answer pairs within a fixed dataset. However, this relationship does not generally transfer to decoding decisions: increasing sequence probability by changing hyperparameters or methods does not reliably improve accuracy. Further, sequence probability is not a good indicator of correctness for responses to the same prompt. These findings clarify when decoding can and cannot be expected to improve correctness, and provide practical guidance for decoding, self-consistency, and verifier-free self-improvement.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Cultivating logical catalysts for fault-tolerant dyadic phase rotations",
        "articleUrl": "https://arxiv.org/abs/2606.27358v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.0,
        "summary": "We introduce a surface-code cultivation protocol for reusable logical catalyst states that implement exact fine dyadic phase gates $Z^{2^{-b}}$ by phase kickback. The catalyst is an eigenstate of a high-period Clifford circuit $U$, with a direct construction supported on $O(2^b)$ logical qubits. Once cultivated, each invocation implements the target phase through a controlled-$U$ gadget, removing Clifford+$T$ synthesis approximation error from the online gate and making the online non-Clifford depth independent of the target logical accuracy. As a concrete demonstration, we construct a catalyst for $\\sqrt{T}=Z^{1/8}$, where $U$ is a nine-qubit brickwork Clifford circuit and controlled-$U$ consists of eight controlled-CNOTs. Starting from nine distance-three rotated-surface-code blocks, we cultivate the catalyst through logical-$U$ checks, syndrome extraction and postselection, code growth, and complementary-gap decoding. Due to the intrinsic fault tolerance of the phase read-out, a \\emph{single} verification round already reaches the leading error-corrected scaling, in contrast to the repeated logical checks required when cultivating single-qubit magic states. A hybrid tensor-network and stabilizer simulation shows that, at physical error rate $p=10^{-3}$, the postselected catalyst can be grown to distance-seven rotated-surface-code blocks with logical leakage rate $\\sim 10^{-6}$ using around seven expected attempts, and can be suppressed further with stronger postselection. Compared with existing protocols, our approach trades offline, phase-specific catalyst cultivation for exactness, reusability, and constant-depth online implementation of fixed fine dyadic phases in codes with restricted transversal gate sets.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Beyond the equation of state: a second-order diagnostic for dynamical dark energy",
        "articleUrl": "https://arxiv.org/abs/2606.27356v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.0,
        "summary": "The first-order continuity equations determine the evolution of the energy densities but depend only on the instantaneous value of the dark-energy equation-of-state parameter. Differentiating these equations with respect to e-fold time introduces the term $\u03c9'_{\\rm DE}$ explicitly, providing a second-order probe of dark-energy dynamics. Consequently, while information about the evolution of the equation of state is encoded in the full dynamical solution, it is not explicit in the first-order continuity equations evaluated at a given epoch. The second-order formulation, therefore, provides a complementary description in which the local evolution of the equation of state appears directly through the curvature of the density trajectory.\n  For a two-fluid interacting dark-sector model with linear coupling $Q_{AB}=\u03b1\u03c1_AH$, the resulting second-order equation defines a curvature diagnostic, $\\mathcal{C}=\u03c1_{DE}''/\u03c1_{DE}$, whose leading contribution, in the cosmological-constant limit, is $\u03b1^2$, while departures from $\u03c9_{DE}=-1$ generate corrections through both $\u03b4\u03c9=1+\u03c9_{DE}$ and the distinctive term $-3\u03c9_{DE}'$. Unlike first-order analyses, this contribution is independent of the interaction strength and directly identifies dynamical dark energy. Applying the diagnostic to a CPL model with parameters consistent with DESI constraints, we recover $\u03c9_{DE}'$ across the full redshift range for both weak and strong interactions. Noise propagation shows that the diagnostic is detectable with signal-to-noise ratio exceeding three for $\u03c3_H/H\\lesssim1.5\\%$, while the degeneracy between $\u03b1$ and $\u03c9_{DE}'$ remains negligible for $\u03b1\\lesssim0.1$. In the non-interacting limit, the formalism naturally recovers the Caldwell--Linder thawing/freezing classification and extends it to interacting dark-energy models.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "All you need is log",
        "articleUrl": "https://arxiv.org/abs/2606.27349v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.0,
        "summary": "Comparing two probability distributions is a basic building block of statistics and machine learning, and the right family is well understood: the R\u00e9nyi divergences of order $\u03b1\\in[0,\\infty]$ are the unique family monotone under data processing and additive on independent products. Many problems instead compare more than two distributions at once -- multi-population fairness, multi-prior PAC-Bayes bounds, multi-hypothesis testing -- and the right multi-distribution generalization of the R\u00e9nyi family has been an open question.\n  We characterize it. Every functional of $W$-tuples of distributions that is monotone under data processing and additive on independent products is a positive integral of multi-way coincidence divergences $C_\u03b1(\u03c0_1,\\dots,\u03c0_W) := -\\log\\int \u03c0_1^{\u03b1_1}\\cdots\u03c0_W^{\u03b1_W}$ (with $\\sum_k \u03b1_k = 1$) over a parameter space with four strata: the simplex interior; mixed-sign exponent cones (the analogue of R\u00e9nyi orders $>1$); a tropical boundary at infinity carrying max-divergences; and pairwise Kullback-Leibler edges at the simplex vertices. Each stratum is necessary -- the destination of an explicit data-processing-monotone, product-additive divergence the others cannot reproduce -- and each is a clean limit of simplex-interior atoms.\n  The same family arises from five independent routes -- the structural axioms, Kolmogorov-Nagumo means with R\u00e9nyi's entropy axiomatics, classical entropy characterizations, multi-hypothesis testing error exponents, and a multi-lottery betting interpretation -- structural evidence that this is the canonical multi-distribution R\u00e9nyi calculus rather than an artefact of any one axiomatic input. The two-prior case recovers the standard R\u00e9nyi result; a worked $W=3$ instance, numerical verification, and a conditional extension round out the treatment.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Coquasi-bialgebroids and cocycle twisting",
        "articleUrl": "https://arxiv.org/abs/2606.27343v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.1,
        "summary": "We introduce coquasi-bialgebroids over a noncommutative base algebra. Using Takeuchi's \\(\\times_B\\)-coalgebra formalism, we require the coproduct to remain an algebra map into the Takeuchi product, while the product is associative only up to an invertible normalized \\(3\\)-cocycle. This gives a bialgebroid analogue of coquasi-bialgebras and provides a natural framework for cocycle-twisted bialgebroid constructions.\n  We develop the basic theory and prove a twisting theorem by convolution-invertible \\(2\\)-cochains. As a main class of examples, we construct coquasi Connes--Moscovici-type bialgebroids on \\(B\\otimes H\\otimes B\\), where \\(H\\) is a coquasi-bialgebra measuring an algebra \\(B\\), with twisting data \\(\u03b3:H\\otimes H\\to B\\). We also give finite-group examples arising from a subgroup \\(G\\subseteq X\\) and a choice of transversal. Finally, under finite projectivity assumptions, we describe the dual quasi-bialgebroid construction and its relation to Drinfeld-type twisting.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Understanding Domain-Aware Distribution Alignment in Budgeted Entity Matching",
        "articleUrl": "https://arxiv.org/abs/2606.27342v1",
        "sourceName": "arXiv Query: search_query=all:\"machine learning\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.1,
        "summary": "Entity Matching (EM) is a core operation in the data integration pipeline, where records from different sources are compared to determine whether they refer to the same real-world entity. Recent work has incorporated domain information and low-resource learning techniques to better adapt EM systems to realistic settings. While these approaches have demonstrated strong performance, it remains unclear how they behave under varying data constraints and levels of supervision in practice. In this paper, we investigate a state-of-the-art method for low-resource, domain-aware EM--BEACON--and study how its performance is affected by different algorithmic choices and data availability conditions. We conduct a series of targeted experiments to evaluate these variations, providing deeper insight into the role of distribution alignment and the behavior of the BEACON framework.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "On the deformation theory of chiral quantizations",
        "articleUrl": "https://arxiv.org/abs/2606.27341v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.1,
        "summary": "We give an operadic approach to deformation quantization of vertex Poisson algebras, a chiral analogue of the traditional problem of deformation quantization of Poisson algebras. Our main result is an order-by-order deformation-obstruction theory for such quantizations, controlled by the chiral analogue of Poisson cohomology. In the special case of chiral quantizations of affine symplectic varieties, quantizations of the vertex Poisson algebras of functions on their arc spaces, we prove that this deformation-obstruction theory is controlled by their de Rham cohomology. As another application, we prove that the boundary Virasoro minimal models are rigid under deformations.",
        "charge": 0
      },
      {
        "bucket": "scholar",
        "title": "Exact subsystem dynamics in the deterministic Floquet-PXP model",
        "articleUrl": "https://arxiv.org/abs/2606.27337v1",
        "sourceName": "arXiv Query: search_query=all:\"quantum\"&id_list=&start=0&max_results=30",
        "sourceHomeUrl": "https://arxiv.org",
        "ageHours": 35.1,
        "summary": "The dynamics of local subsystems in a thermodynamically large quantum many-body system can be understood as effectively open as the system produces its own effective bath. The action of this bath can be characterised in terms of the so-called influence matrices. In generic situations, the complexity of these objects grows unfavourably with time, however, there exist solvable cases where influence matrices can be characterised exactly even in the presence of non-trivial interactions. Here we show that Rule 201, a deterministic version of the Floquet-PXP model, is one of these solvable instances. Indeed, it admits influence matrices given by a finite-dimensional matrix-product operator (MPO) that solves a finite set of algebraic conditions. We provide the solution, and characterise multi-time autocorrelation functions.",
        "charge": 0
      }
    ],
    "random": [
      {
        "bucket": "random",
        "title": "Duckett & Stokes haul England back into third Test",
        "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/cx2knwlzjnjo?at_medium=RSS&at_campaign=rss",
        "sourceName": "BBC Sport",
        "sourceHomeUrl": "",
        "ageHours": 11.1,
        "summary": "Ben Duckett\u2019s scintillating century builds on an inspirational spell from Ben Stokes to haul England back into the decisive third Test against New Zealand at Trent Bridge.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "The Prime Day MacBook Deals I Recommend (2026)",
        "articleUrl": "https://www.wired.com/story/best-prime-day-macbook-deals-06-26-2026/",
        "sourceName": "WIRED",
        "sourceHomeUrl": "https://www.wired.com",
        "ageHours": 10.8,
        "summary": "Apple has warned about MacBook prices rising, making these Prime Day deals even more worthwhile to consider.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "Mercedes' Antonelli tops Friday practice in Austria",
        "articleUrl": "https://www.bbc.co.uk/sport/formula1/articles/ce8jze60zzzo?at_medium=RSS&at_campaign=rss",
        "sourceName": "BBC Sport",
        "sourceHomeUrl": "https://www.bbc.co.uk",
        "ageHours": 11.3,
        "summary": "Mercedes' Kimi Antonelli heads McLaren's Oscar Piastri in Friday practice at the Austrian Grand Prix.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "Brad Bird is begging Netflix to give 30-year dream project Ray Gunn at theatrical release",
        "articleUrl": "https://www.polygon.com/brad-bird-ray-gunn-interview/",
        "sourceName": "Polygon.com",
        "sourceHomeUrl": "https://www.polygon.com",
        "ageHours": 10.7,
        "summary": "The director of The Incredibles and Ratatouille has been trying to make a neo-noir for nearly 30 years.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "I'm Adding These Bose Headphones to My Prime Day Cart (2026)",
        "articleUrl": "https://www.wired.com/story/bose-headphones-amazon-prime-day-2026/",
        "sourceName": "WIRED",
        "sourceHomeUrl": "https://www.wired.com",
        "ageHours": 10.6,
        "summary": "Bose headphones are already one of our favorites for comfort, sound, and noise canceling. Now they\u2019re cheaper.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "Usyk vacates belts but is not retiring",
        "articleUrl": "https://www.bbc.co.uk/sport/boxing/articles/c6210pk8klro?at_medium=RSS&at_campaign=rss",
        "sourceName": "BBC Sport",
        "sourceHomeUrl": "https://www.bbc.co.uk",
        "ageHours": 11.4,
        "summary": "Heavyweight world champion Oleksandr Usyk says he will vacate all his belts but is not retiring.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "I Just Saw That Eufy\u2019s Floodlight Security Camera Is Cheaper Than Ever (2026)",
        "articleUrl": "https://www.wired.com/story/amazon-prime-day-eufy-floodlight-security-camera-june-2026/",
        "sourceName": "WIRED",
        "sourceHomeUrl": "https://www.wired.com",
        "ageHours": 11.5,
        "summary": "If you want to beef up your home security this Prime Day, Eufy\u2019s Floodlight Camera is a great way to do it.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "Now we know how much tax King Charles pays, and it is very little",
        "articleUrl": "https://www.theguardian.com/uk-news/2026/jun/26/now-we-know-how-much-tax-king-charles-pays-and-it-is-very-little",
        "sourceName": "World news | The Guardian",
        "sourceHomeUrl": "",
        "ageHours": 11.5,
        "summary": "The monarch\u2019s declaration does not tell us much, except that his bill is lower than for people with much smaller fortunes  The veil of secrecy that surrounds the royal finances was nudged aside a little on Thursday to allow the release of a new piece of information. We learned for the first time how much the king\u2019s annual tax bill comes to.  This was not a full tax return. It was a two-sentence declaration, stating his tax payable amounted to \u00a312.9m in 2024-25, and a slightly smaller sum the year before. His total tax payable since accession comes to \u00a330m.   Continue reading...",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "'It will mean so much to him' - Duckett delights as England fight back",
        "articleUrl": "https://www.bbc.co.uk/sport/cricket/videos/c0kypym4vkeo?at_medium=RSS&at_campaign=rss",
        "sourceName": "BBC Sport",
        "sourceHomeUrl": "https://www.bbc.co.uk",
        "ageHours": 11.5,
        "summary": "Ben Duckett makes a \"very entertaining\" 113 from 99 balls on his home ground of Trent Bridge for his seventh Test century, giving England the perfect start to their first innings, responding to New Zealand's 438 on day two of the series-deciding third Test against New Zealand.",
        "charge": 0
      },
      {
        "bucket": "random",
        "title": "I'm glad the new Star Fox on Nintendo Switch 2 is just another remake",
        "articleUrl": "https://www.polygon.com/im-glad-the-new-star-fox-is-just-another-remake/",
        "sourceName": "Polygon.com",
        "sourceHomeUrl": "https://www.polygon.com",
        "ageHours": 10.4,
        "summary": "Nintendo's Star Fox remake on Switch 2 might be just another remake of Star Fox 64, but it's perfect for people like me who never played the original",
        "charge": 0
      }
    ],
    "science": [
      {
        "bucket": "science",
        "title": "From pet to pest, goldfish can wreck entire ecosystems",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260622091524.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 11.2,
        "summary": "A new study reveals that goldfish can do far more than survive in the wild\u2014they can fundamentally reshape freshwater ecosystems. Researchers found they cloud water, damage food webs, and hurt native fish populations, sometimes triggering major ecological shifts.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Butter and margarine look similar but their chemistry changes everything",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260618041504.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 10.2,
        "summary": "The battle between butter and margarine comes down to chemistry. Butter\u2019s naturally occurring fats create rich flavors, golden browning, and flaky baked goods, while margarine\u2019s modified plant oils offer consistency and a longer shelf life. Although both contain mostly fat, their different structures influence how they behave in recipes. Understanding those differences can help you choose the right one for cooking, baking, or health goals.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Scientists stunned by signs of ancient life in a place no one expected",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260621111234.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 8.2,
        "summary": "Scientists exploring ancient seafloor rocks in Morocco discovered mysterious wrinkle patterns where they were never expected to occur. These structures are normally linked to microbial mats in shallow, sunlit waters, yet the rocks formed hundreds of feet below the surface in darkness. Evidence indicates that chemosynthetic microbes created the wrinkles, revealing that deep-ocean microbial ecosystems may have been more widespread than previously thought.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Researchers discover why fructose doesn't satisfy hunger like glucose",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260623083106.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 14.4,
        "summary": "A new study found that fructose and glucose may look the same on a nutrition label, but the brain treats them very differently. In mice, glucose strongly reduced activity in hunger-promoting brain cells, while fructose had a much weaker effect. High-fructose corn syrup triggered a stronger response and was preferred by the animals. The findings suggest that the type of sugar\u2014not just the calories\u2014can influence appetite and food preferences.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Hubble Spies Starry Chandelier",
        "articleUrl": "https://science.nasa.gov/missions/hubble/hubble-spies-starry-chandelier/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 15.2,
        "summary": "This NASA/ESA Hubble Space Telescope image features the globular cluster NGC 6723, sometimes called the Chandelier Cluster.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "A \u201cghost\u201d great white shark just reignited a 160-year Mediterranean mystery",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260621052722.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 21.9,
        "summary": "The capture of a juvenile great white shark in Spain has provided fresh evidence that the Mediterranean's elusive \"ghost\" population of great whites still survives. Researchers reviewing 160 years of records say the discovery could even hint that the sharks are still breeding in the region.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "This newly discovered ballista spider catapults ants into a deadly trap",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260623014002.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 23.4,
        "summary": "Scientists have discovered a \u201cballista spider\u201d that builds a spring-powered silk trap designed specifically to catch aggressive green tree ants. The ant unknowingly triggers the mechanism itself, launching into the spider\u2019s web in one of nature\u2019s most extraordinary hunting strategies.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "The Battle for Sullivan\u2019s Island",
        "articleUrl": "https://science.nasa.gov/earth/earth-observatory/the-battle-for-sullivans-island/",
        "sourceName": "NASA",
        "sourceHomeUrl": "https://science.nasa.gov",
        "ageHours": 24.9,
        "summary": "Marshy, sandy terrain and an impassable inlet helped colonial forces repel British forces during a pivotal battle on the barrier island near Charleston, South Carolina, on June 28, 1776.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Earth may have been seeding Venus with life for billions of years",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260625014805.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 25.5,
        "summary": "A new study suggests Earth may have been sending tiny hitchhikers to Venus for billions of years. Researchers found that asteroid impacts could launch microbes into space, where some might survive the journey and end up suspended in Venus' clouds. If future missions detect life there, there's a surprising chance it didn't originate on Venus at all\u2014it may have come from Earth.",
        "charge": 0
      },
      {
        "bucket": "science",
        "title": "Einstein Probe may have caught a black hole tearing apart a white dwarf for the first time",
        "articleUrl": "https://www.sciencedaily.com/releases/2026/06/260625060222.htm",
        "sourceName": "All Top News -- ScienceDaily",
        "sourceHomeUrl": "https://www.sciencedaily.com",
        "ageHours": 27.8,
        "summary": "Astronomers may have witnessed one of the rarest and most dramatic cosmic events ever seen: a long-sought intermediate-mass black hole ripping apart a dense white dwarf star and devouring it. The Einstein Probe space telescope caught the explosion in its earliest moments, revealing an unusual sequence of intense X-ray flashes unlike anything seen in a typical gamma-ray burst.",
        "charge": 0
      }
    ],
    "ai": [
      {
        "bucket": "ai",
        "title": "LLMs help robots understand vague instructions and focus on key details",
        "articleUrl": "https://news.mit.edu/2026/llms-help-robots-understand-vague-instructions-and-focus-key-details-0626",
        "sourceName": "MIT News - Artificial intelligence",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 15.9,
        "summary": "To help robots do chores in places like homes and factories, a new approach from MIT uses one language model to clarify users\u2019 instructions, then another to ignore irrelevant info.",
        "interest": 11
      },
      {
        "bucket": "ai",
        "title": "David Autor named head of the Department of Economics",
        "articleUrl": "https://news.mit.edu/2026/david-autor-named-head-department-economics-0626",
        "sourceName": "MIT News - Artificial intelligence",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 12.9,
        "summary": "A faculty member since 1999, Autor is a leading researcher in artificial intelligence and the work of the future.",
        "interest": 3
      },
      {
        "bucket": "ai",
        "title": "How data centers can better manage energy use",
        "articleUrl": "https://news.mit.edu/2026/how-data-centers-can-better-manage-energy-use-0626",
        "sourceName": "MIT News",
        "sourceHomeUrl": "https://news.mit.edu",
        "ageHours": 13.9,
        "summary": "A new study suggests flexibility in the timing of electricity consumption could lower consumer costs.",
        "interest": 2
      },
      {
        "bucket": "ai",
        "title": "OpenAI and Broadcom unveil Jalape\u00f1o inference chip for LLMs - BetaNews",
        "articleUrl": "https://betanews.com/article/openai-and-broadcom-unveil-jalapeno-inference-chip-for-llms/",
        "sourceName": "BetaNews",
        "sourceHomeUrl": "https://betanews.com",
        "ageHours": 10.9,
        "summary": "OpenAI and Broadcom unveil Jalape\u00f1o inference chip for LLMs \u00a0\u00a0 BetaNews",
        "interest": 18
      },
      {
        "bucket": "ai",
        "title": "OpenAI Unveils Jalape\u00f1o AI Inference Chip - iNews Zoombangla",
        "articleUrl": "https://inews.zoombangla.com/openai-unveils-jalapeno-ai-inference-chip/",
        "sourceName": "iNews Zoombangla",
        "sourceHomeUrl": "https://inews.zoombangla.com",
        "ageHours": 10.6,
        "summary": "OpenAI Unveils Jalape\u00f1o AI Inference Chip \u00a0\u00a0 iNews Zoombangla",
        "interest": 12
      },
      {
        "bucket": "ai",
        "title": "OpenAI Unveils Jalape\u00f1o, Its First Custom AI Inference Chip - Tech My Money",
        "articleUrl": "https://techmymoney.com/2026/06/26/openai-unveils-jalapeno-its-first-custom-ai-inference-chip/",
        "sourceName": "Tech My Money",
        "sourceHomeUrl": "https://techmymoney.com",
        "ageHours": 11.8,
        "summary": "OpenAI Unveils Jalape\u00f1o, Its First Custom AI Inference Chip \u00a0\u00a0 Tech My Money",
        "interest": 12
      },
      {
        "bucket": "ai",
        "title": "OpenAI, SpaceX, and Apple Are Building Their Own Chips: What It Means for Nvidia\u2019s Dominance - Bitcoin World",
        "articleUrl": "https://bitcoinworld.co.in/openai-spacex-apple-building-own-chips-nvidia-dominance/",
        "sourceName": "Bitcoin World",
        "sourceHomeUrl": "https://bitcoinworld.co.in",
        "ageHours": 11.0,
        "summary": "OpenAI, SpaceX, and Apple Are Building Their Own Chips: What It Means for Nvidia\u2019s Dominance \u00a0\u00a0 Bitcoin World",
        "interest": 8
      },
      {
        "bucket": "ai",
        "title": "IMU Biosciences collaborates with Waters to advance breakthrough AI immune mapping platform - BioSpectrum Asia",
        "articleUrl": "https://www.biospectrumasia.com/news/89/27928/imu-biosciences-collaborates-with-waters-to-advance-breakthrough-ai-immune-mapping-platform.html",
        "sourceName": "BioSpectrum Asia",
        "sourceHomeUrl": "https://www.biospectrumasia.com",
        "ageHours": 11.0,
        "summary": "IMU Biosciences collaborates with Waters to advance breakthrough AI immune mapping platform \u00a0\u00a0 BioSpectrum Asia",
        "interest": 8
      },
      {
        "bucket": "ai",
        "title": "OpenAI pulls ahead on custom chips - Semafor",
        "articleUrl": "https://www.semafor.com/article/06/26/2026/openai-pulls-ahead-on-custom-chips",
        "sourceName": "Semafor",
        "sourceHomeUrl": "https://www.semafor.com",
        "ageHours": 11.3,
        "summary": "OpenAI pulls ahead on custom chips \u00a0\u00a0 Semafor",
        "interest": 8
      },
      {
        "bucket": "ai",
        "title": "OpenAI's Jalape\u00f1o Chip Signals End of Nvidia's AI Monopoly - The Tech Buzz",
        "articleUrl": "https://www.techbuzz.ai/articles/openai-s-jalape-o-chip-signals-end-of-nvidia-s-ai-monopoly",
        "sourceName": "The Tech Buzz",
        "sourceHomeUrl": "https://www.techbuzz.ai",
        "ageHours": 10.6,
        "summary": "OpenAI's Jalape\u00f1o Chip Signals End of Nvidia's AI Monopoly \u00a0\u00a0 The Tech Buzz",
        "interest": 8
      }
    ]
  },
  "randomPool": [
    {
      "bucket": "random",
      "title": "Duckett & Stokes haul England back into third Test",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/cx2knwlzjnjo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "",
      "ageHours": 11.1,
      "summary": "Ben Duckett\u2019s scintillating century builds on an inspirational spell from Ben Stokes to haul England back into the decisive third Test against New Zealand at Trent Bridge.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "The Prime Day MacBook Deals I Recommend (2026)",
      "articleUrl": "https://www.wired.com/story/best-prime-day-macbook-deals-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 10.8,
      "summary": "Apple has warned about MacBook prices rising, making these Prime Day deals even more worthwhile to consider.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Mercedes' Antonelli tops Friday practice in Austria",
      "articleUrl": "https://www.bbc.co.uk/sport/formula1/articles/ce8jze60zzzo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 11.3,
      "summary": "Mercedes' Kimi Antonelli heads McLaren's Oscar Piastri in Friday practice at the Austrian Grand Prix.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Brad Bird is begging Netflix to give 30-year dream project Ray Gunn at theatrical release",
      "articleUrl": "https://www.polygon.com/brad-bird-ray-gunn-interview/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 10.7,
      "summary": "The director of The Incredibles and Ratatouille has been trying to make a neo-noir for nearly 30 years.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "I'm Adding These Bose Headphones to My Prime Day Cart (2026)",
      "articleUrl": "https://www.wired.com/story/bose-headphones-amazon-prime-day-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 10.6,
      "summary": "Bose headphones are already one of our favorites for comfort, sound, and noise canceling. Now they\u2019re cheaper.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Usyk vacates belts but is not retiring",
      "articleUrl": "https://www.bbc.co.uk/sport/boxing/articles/c6210pk8klro?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 11.4,
      "summary": "Heavyweight world champion Oleksandr Usyk says he will vacate all his belts but is not retiring.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "I Just Saw That Eufy\u2019s Floodlight Security Camera Is Cheaper Than Ever (2026)",
      "articleUrl": "https://www.wired.com/story/amazon-prime-day-eufy-floodlight-security-camera-june-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 11.5,
      "summary": "If you want to beef up your home security this Prime Day, Eufy\u2019s Floodlight Camera is a great way to do it.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Now we know how much tax King Charles pays, and it is very little",
      "articleUrl": "https://www.theguardian.com/uk-news/2026/jun/26/now-we-know-how-much-tax-king-charles-pays-and-it-is-very-little",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 11.5,
      "summary": "The monarch\u2019s declaration does not tell us much, except that his bill is lower than for people with much smaller fortunes  The veil of secrecy that surrounds the royal finances was nudged aside a little on Thursday to allow the release of a new piece of information. We learned for the first time how much the king\u2019s annual tax bill comes to.  This was not a full tax return. It was a two-sentence declaration, stating his tax payable amounted to \u00a312.9m in 2024-25, and a slightly smaller sum the year before. His total tax payable since accession comes to \u00a330m.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'It will mean so much to him' - Duckett delights as England fight back",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/videos/c0kypym4vkeo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 11.5,
      "summary": "Ben Duckett makes a \"very entertaining\" 113 from 99 balls on his home ground of Trent Bridge for his seventh Test century, giving England the perfect start to their first innings, responding to New Zealand's 438 on day two of the series-deciding third Test against New Zealand.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "I'm glad the new Star Fox on Nintendo Switch 2 is just another remake",
      "articleUrl": "https://www.polygon.com/im-glad-the-new-star-fox-is-just-another-remake/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 10.4,
      "summary": "Nintendo's Star Fox remake on Switch 2 might be just another remake of Star Fox 64, but it's perfect for people like me who never played the original",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Kaiju anime Snowball Earth is getting a second season",
      "articleUrl": "https://www.polygon.com/snowball-earth-season-2-announcement/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 10.2,
      "summary": "The announcement that Snowball Earth is getting a second season came immediately after this sci-fi anime's first season concluded.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "UK June heat record broken again, France postpones Pride and Poland warns of wildfires as heatwave grips Europe \u2013 as it happened",
      "articleUrl": "https://www.theguardian.com/environment/live/2026/jun/26/europe-heatwave-extreme-heat-red-alert-weather-uk-england-france-climate-crisis-latest-news-updates",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 11.8,
      "summary": "This blog is now closed, you can read more on this story here:     UK June heat record broken for third day in a row      Fourth child dies in France as brutal heatwave forecast to shift east        Over in the UK, firefighters are  still trying  to bring a large wildfire in Derbyshire under control.   The blaze, which has burned over 500 square metres of moorland and woodland on  Tintwistle Moor, near Glossop,  broke out on Wednesday evening, with fire crews from Manchester and Derbyshire deploying a water-dropping helicopter and six fire engines on Thursday.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "State functions, offices and tourists: plans for revamped Buckingham Palace",
      "articleUrl": "https://www.theguardian.com/uk-news/2026/jun/26/plans-revamped-buckingham-palace-king-charles",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 11.8,
      "summary": "Despite \u00a3369m upgrade, King Charles will never live in palace but aides stress it will remain \u2018buzzing hive\u2019 of activity  Not all modern British monarchs have viewed the prospect of moving into Buckingham Palace with unalloyed joy. So in announcing  he will never live there,  after the completion of its \u00a3369m upgrade next year, King Charles has at least grasped that nettle.  Queen Victoria was initially dismayed by the damp, dingy and disorganised building that greeted her and her husband, Prince Albert, in 1837. It was Albert who refashioned it into \u201cMonarchy HQ\u201d. After his death in 1861, Victoria retreated mainly to Windsor, Balmoral and Osborne House on the Isle of Wight.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "OpenAI Has New AI Models. Here\u2019s Why You Can\u2019t Use Them",
      "articleUrl": "https://www.wired.com/story/openai-gpt-56-model-release-trump-admin-approval/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 11.8,
      "summary": "The White House asked OpenAI to delay the rollout of its GPT-5.6 AI models, two weeks after Anthropic had to take its most advanced AI models offline.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "How to See the Giant Asteroid That Will Pass by Earth This Weekend",
      "articleUrl": "https://www.wired.com/story/how-to-see-1997-nc1-asteroid-pass-by-earth-this-weekend/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 10.2,
      "summary": "The asteroid will be visible for several nights from different parts of the world. We\u2019ll tell you when and where to look, and what equipment you\u2019ll need to spot it.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "This new Pok\u00e9mon 30th anniversary merch is a genius idea",
      "articleUrl": "https://www.polygon.com/pokemon-30-anniverary-carry-on-starter-bags-buy-plushies/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 10.1,
      "summary": "The carry-on bags feature all sorts of small touches that hark back to Pok\u00e9mon starters",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Speed suits & altitude rooms - how Kerr plans to beat mile world record",
      "articleUrl": "https://www.bbc.co.uk/sport/athletics/articles/c99238jplr1o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 11.9,
      "summary": "On July 18 at the London Diamond League meeting, Josh Kerr intends to beat Hicham El Guerrouj's world record for the mile. But how will he do it?",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Stokes and Duckett star as England fight back against New Zealand",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/videos/cx2vp299wplo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 10.1,
      "summary": "Ben Stokes takes three early wickets before Ben Duckett hits 113 with the bat as England fight back on day two of the third Test against New Zealand at Trent Bridge.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Mahmood outlines safe immigration routes plan to win over Labour left",
      "articleUrl": "https://www.theguardian.com/uk-news/2026/jun/26/mahmood-outlines-safe-immigration-routes-plan-to-win-over-labour-left",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 10.5,
      "summary": "Home secretary speeds up major part of bill governing asylum and refugees as new prime minister set to take over  Shabana Mahmood will seek to shore up support for her controversial immigration bill on the progressive left of Labour, as she sets out plans to speed up the opening of new safe and legal routes that will permit thousands of refugees to come to the UK.  The home secretary, who is the leading contender to stay in her job if Andy Burnham becomes prime minister, will next week  introduce the legislation , which will also set new limits on immigration claims on human rights grounds and under modern slavery law.  Removing modern slavery protections for any foreign national who has committed a crime and received a sentence, scrapping the previous 12-month threshold.  Rejecting last-minute modern slavery claims where an objection could have been raised earlier or where there is evidence of false documentation.  Allowing immigration claims to be brought under the right to a family life only if the family member is a parent, spouse or child under 18 except in exceptional circumstances.  A new test to make clear that deporting foreign national offenders is in the public interest and should only be blocked in the most exceptional circumstances. \n Applications for family reunion under the right to a family life will in future have to be brought by a UK-based sponsor, not the overseas family member.  Giving every trafficked and exploited child a dedicated independent guardian to support their safeguarding and recovery.   Continue reading...",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "Partners, NASA Ready for June Launch of Swift Boost Mission",
      "articleUrl": "https://science.nasa.gov/missions/swift/swift-boost-mission/partners-nasa-ready-for-june-launch-of-swift-boost-mission/",
      "sourceName": "NASA",
      "sourceHomeUrl": "https://science.nasa.gov",
      "ageHours": 11.6,
      "summary": "A mission to raise the orbit of NASA\u2019s Swift observatory is poised for launch June 30.",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "Andy Burnham says he will give 15% of his MP\u2019s pay to local causes",
      "articleUrl": "https://www.theguardian.com/politics/2026/jun/26/andy-burnham-donate-15-per-cent-mp-pay-makerfield",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 11.7,
      "summary": "New member for Makerfield and expected next prime minister joins other MPs who donate some or all of their pay  Andy Burnham has said he will be donating 15% of his MP\u2019s salary to local causes in his constituency of Makerfield.  An MP\u2019s salary currently stands at \u00a398,599 and a number of MPs donate all or part of their salary to charities and causes in the areas they represent.   Continue reading...",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "NASA Tests New Refuel Device for Future In-Space Refueling Missions",
      "articleUrl": "https://www.nasa.gov/directorates/stmd/tech-demo-missions-program/cryogenic-fluid-management-cfm/nasa-tests-new-refuel-device-for-future-in-space-refueling-missions/",
      "sourceName": "NASA",
      "sourceHomeUrl": "https://www.nasa.gov",
      "ageHours": 10.2,
      "summary": "For NASA\u2019s next generation of deep space exploration missions, spacecraft may need to refuel in Earth orbit before pushing farther into the solar system. Similar to how a gas pump needs a nozzle to fit your fuel tank, future spacecraft could require a special device in order to fill up prior to departure, known as [\u2026]",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "Fourth toddler dies in France as Europe\u2019s brutal heatwave forecast to shift east",
      "articleUrl": "https://www.theguardian.com/environment/2026/jun/26/europe-heatwave-shift-east-child-deaths-france-cities-heat-stress",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 11.8,
      "summary": "Scientists say hot spell is worst ever, with nearly half of region\u2019s 850 largest cities facing unprecedented heat stress   The number of deaths in France linked to the heatwave has climbed to four toddlers and more than 55 drownings, as the brutally hot conditions sweeping Europe were forecast to shift east, choking 150 million people under 35C (95F) temperatures.   Scientists said  the heatwave was the most severe and widespread ever, leaving nearly half of the region\u2019s 850 largest cities grappling with unprecedented heat stress. They said the extreme temperatures had been made possible by the climate crisis driven by fossil fuel burning.   Continue reading...",
      "charge": 1
    },
    {
      "bucket": "random",
      "title": "UN calls for \u2018prompt investigations\u2019 of deaths in US immigration custody",
      "articleUrl": "https://www.theguardian.com/us-news/2026/jun/26/un-deaths-immigration-custody-human-rights-law",
      "sourceName": "US news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 10.7,
      "summary": "High commissioner for human rights calls for \u2018those responsible for violations of the law\u2019 to be held to account     US politics live \u2013 latest updates     Volker T\u00fcrk, the United Nations high commissioner for human rights, on Friday raised the alarm internationally about deaths in US government immigration custody and called for \u201cprompt, independent, impartial and effective investigations\u201d.  T\u00fcrk\u2019s call came as the  Trump administration  faced investigations by watchdogs at its own Department of Homeland Security (DHS) into deaths and use of force against people detained in its expanding immigration detention system across the country.   Continue reading...",
      "charge": 2
    },
    {
      "bucket": "random",
      "title": "10 Best Prime Day Streaming Deals, Including Half Off Apple TV (2026)",
      "articleUrl": "https://www.wired.com/story/best-prime-day-streaming-deals-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 10.0,
      "summary": "Prime Day isn\u2019t just about cheap TVs. It\u2019s also about cheap stuff to watch on your cheap TV.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Supergirl thankfully doesn't retcon Superman's most polarizing twist",
      "articleUrl": "https://www.polygon.com/supergirl-superman-earth-conqueror-retcon/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 9.9,
      "summary": "One scene in Supergirl confirms that the most divisive detail in James Gunn's Superman is 100% canon to the DCU.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "The week around the world in 20 pictures",
      "articleUrl": "https://www.theguardian.com/artanddesign/gallery/2026/jun/26/the-week-around-the-world-in-20-pictures",
      "sourceName": "US news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 9.8,
      "summary": "The earthquake in Venezuela, a brutal heatwave in Europe, the resignation of Keir Starmer and the World Cup \u2013  the past seven days as captured by the world\u2019s leading photojournalists    Warning: this gallery contains images some readers may find distressing    Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Draper denied place in Eastbourne final by Humbert",
      "articleUrl": "https://www.bbc.co.uk/sport/tennis/articles/cgev5ldzrg9o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 9.8,
      "summary": "Jack Draper misses out on a place in the Eastbourne Open final after Frenchman Ugo Humbert ends the Briton's encouraging return to action following injury.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Pacquiao and Mayweather rematch postponed indefinitely",
      "articleUrl": "https://www.bbc.co.uk/sport/boxing/articles/cr473y46w6qo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 12.3,
      "summary": "The rematch between boxing greats Manny Pacquiao and Floyd Mayweather has been postponed indefinitely because of a host of reasons, with contract disputes the main factor.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "The Pentagon Is Looking Into the Dialog Data Exposure for Unmasking National Security Officials",
      "articleUrl": "https://www.wired.com/story/the-pentagon-is-looking-into-the-dialog-data-exposure-for-unmasking-national-security-officials/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 12.4,
      "summary": "Exposed records from the private group included the personal information of a senior White House intelligence official and an active-duty special operations officer.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Is a former England striker right about reasons for Scottish football's ills?",
      "articleUrl": "https://www.bbc.co.uk/sport/football/articles/c5yz9nnp2p1o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 12.5,
      "summary": "From undervalued broadcasting deals to unfulfilled potential, Ian Wright says he feels sorry for Scottish football fans - but is the former England striker right?",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Star Fox on Switch 2's music is the best thing about it",
      "articleUrl": "https://www.polygon.com/star-fox-music-soundtrack-score/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 9.4,
      "summary": "The full orchestral soundtrack sounds amazing, and honors the original Star Fox 64 score",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "England seeing benefits of fitness drive - Capsey",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/cwykv3ww88zo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 9.4,
      "summary": "England are starting to see the benefits of their improvement in fitness and fielding at the T20 World Cup, having not lived up to standards previously, says all-rounder Alice Capsey.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "27 Best Prime Day Beauty Deals of 2026 (We Sifted Through Hundreds to Pick Them)",
      "articleUrl": "https://www.wired.com/story/best-prime-day-beauty-deals-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 12.6,
      "summary": "It wouldn't be Amazon Prime Day without some beauty deals. Here's a roundup of all our favorites.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Arsenal poised to make Guimaraes offer after talks",
      "articleUrl": "https://www.bbc.co.uk/sport/football/articles/cly71eqgej8o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 9.4,
      "summary": "Arsenal are poised to make an offer for Newcastle's Bruno Guimaraes after exploratory talks over potential moves for the Brazil midfielder and team-mate Sandro Tonali.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "FAW chief expects Bellamy to remain Wales boss",
      "articleUrl": "https://www.bbc.co.uk/sport/football/articles/c79y72dx72jo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 12.7,
      "summary": "Football Association of Wales chief executive Noel Mooney expects Craig Bellamy to stay on as Wales head coach after the collapse of his proposed move to Burnley.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "I Found the Best Prime Day Pixel Buds Deals: 2a, Pro (2026)",
      "articleUrl": "https://www.wired.com/story/google-pixel-buds-prime-day-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 12.9,
      "summary": "Google Pixel Buds are steeply on sale, presumably only through the end of the day.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Prime Day\u2019s Best Handheld Fan Deals, Up to 20% Off, Are About to Disappear (2026)",
      "articleUrl": "https://www.wired.com/story/amazon-prime-day-deals-on-handheld-fans-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 13.0,
      "summary": "These are the best last-minute Prime Day discounts on handheld fans, from $10 budget buys to Shark\u2019s high-tech ChillPill.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "'I started running' - how fitter Duckett got back to his best",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/c621nr8zj80o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 9.0,
      "summary": "Ben Duckett has lost \"five or six\" kilograms since the Ashes - this is how he reaped the rewards with a century for England in the third Test against New Zealand.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Former Ireland Women head coach Doyle dies aged 61",
      "articleUrl": "https://www.bbc.co.uk/sport/articles/cvgm7j5z5vjo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 13.1,
      "summary": "Philip Doyle, who led Ireland to the Women's Six Nations Grand Slam as head coach in 2013, has died aged 61.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "US Soccer offers contract renewal to Mauricio Pochettino through 2030 World Cup",
      "articleUrl": "https://www.theguardian.com/football/2026/jun/26/mauricio-pochettino-extension-us-soccer-world-cup",
      "sourceName": "US news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 8.9,
      "summary": "Pochettino has been in charge of the US since late 2024    Former Spurs and PSG boss likely to have club interest    Mauricio Pochettino has been offered a contract extension that would keep him in charge of the US men\u2019s national team through the 2030 World Cup, multiple sources familiar with the offer said on Friday. Sources spoke with the Guardian on condition of anonymity because they were not authorized to speak on the matter.  Pochettino and the US Soccer Federation have been discussing a new deal for about three months, said one source. Pochettino, along with US Soccer CEO JT Batson, have spoken publicly about the negotiations as recently as late May, around the time that Pochettino was reported to have had talks with Serie A side Milan. Pochettino was coy when pressed about Milan\u2019s interest, but Batson spoke openly about it, saying that the federation had received many inquiries in regards to Pochettino\u2019s services.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "VW plans to cut up to 100,000 jobs and shut plants, report says",
      "articleUrl": "https://www.theguardian.com/business/2026/jun/26/vw-cut-jobs-shut-plants-volkswagen-china",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 13.3,
      "summary": "German firm reportedly considering doubling previously announced staff reductions amid Chinese competition     Business live \u2013 latest updates     Germany\u2019s Volkswagen is to cut up to 100,000 jobs and reduce and eventually stop production at some plants, according to reports.  The company has refused to comment on reports of a management presentation at a board meeting outlining dramatic cost cutting, but if it goes ahead it would mean Volkswagen doubling previously announced staff reductions.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "After 80 Years, Mathematicians Give Famed \u2018Erd\u0151s Method\u2019 an Upgrade",
      "articleUrl": "https://www.quantamagazine.org/after-80-years-mathematicians-give-famed-erdos-method-an-upgrade-20260626/",
      "sourceName": "Quanta Magazine",
      "sourceHomeUrl": "https://www.quantamagazine.org",
      "ageHours": 13.5,
      "summary": "Decades ago, Paul Erd\u0151s used randomness to illuminate the vast and weird world of networks. Now mathematicians are making his technique even more powerful.             The post  After 80 Years, Mathematicians Give Famed \u2018Erd\u0151s Method\u2019 an Upgrade  first appeared on  Quanta Magazine",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "India-born Moondra realises dream in Ireland win over world champions",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/cr47347kkvko?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 8.5,
      "summary": "India-born bowler Jai Moondra says helping Ireland claim a historic T20 win over the world champions is a \"dream come true\".",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Euclid Sees Heart of Milky Way",
      "articleUrl": "https://www.nasa.gov/image-article/euclid-sees-heart-of-milky-way/",
      "sourceName": "NASA",
      "sourceHomeUrl": "https://www.nasa.gov",
      "ageHours": 13.6,
      "summary": "Euclid, an ESA (European Space Agency) mission with NASA contributions, took a new look at the heart of our Milky Way galaxy, seen in this image released on June 24, 2026. This observation overlaps with a region scientists will observe with NASA\u2019s Nancy Grace Roman Space Telescope, launching later this summer. This sneak peek gives [\u2026]",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Get $145 Off the Best Mesh Router This Prime Day 2026",
      "articleUrl": "https://www.wired.com/story/amazon-prime-day-router-deals-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 13.6,
      "summary": "Do you crave speedy, reliable Wi-Fi throughout your home? Snag one of these Prime Day router or mesh deals.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Call for inquiry into Alligator Alcatraz\u2019s \u2018abuse of Everglades\u2019 despite closure",
      "articleUrl": "https://www.theguardian.com/us-news/2026/jun/26/alligator-alcatraz-environmental-immigrant-inquiry",
      "sourceName": "US news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 8.3,
      "summary": "Environmentalists and immigrant-rights advocates seek accounting of damage done by notorious detention center  While they welcome the recent  closure  of the controversial Alligator Alcatraz migrant detention center, leading environmental groups and their allies say they want an independent investigation into the environmental damage the facility inflicted on the surrounding wilderness during its 12 months of operations.  Those groups made that demand alongside immigrant-rights advocates and members of Florida\u2019s Miccosukee Tribe at a news conference on Friday outside the entrance to the shuttered detention center, where the Friends of the Everglades (FOE) executive director, Eve Samples, condemned the camp as a \u201cfailure, an obscene waste of taxpayer dollars and an abuse of the Everglades\u201d.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "22 Best Prime Day Fitness Tech Deals (2026) Up to $250 Off",
      "articleUrl": "https://www.wired.com/story/amazon-prime-day-fitness-deals-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 13.8,
      "summary": "I've compiled a list of the best fitness tech deals this Amazon Prime Day, including smartwatches, walking pads, and recovery gear. You can thank me later.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Samuel wins service game in under a minute",
      "articleUrl": "https://www.bbc.co.uk/sport/tennis/videos/c17ypky1q52o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 13.8,
      "summary": "Great Britain's Toby Samuel wins a service game in hie Eastbourne semi-final in just 55 seconds against opponent Zizou Bergs.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Here we Joh again? The spectre of Bjelke-Petersen still looms large over Queensland",
      "articleUrl": "https://www.theguardian.com/australia-news/2026/jun/27/joh-bjelke-petersen-queensland-politics-ntwnfb",
      "sourceName": "World news | The Guardian",
      "sourceHomeUrl": "",
      "ageHours": 13.9,
      "summary": "The LNP\u2019s unapologetic moves on Indigenous issues, crime, transgender healthcare and police-led suppression of protests are a throwback to days many thought had come and gone    Get our  breaking news email ,  free app  or  daily news podcast     A sign stopped Aunty Sandra King in her tracks. The elder of the Yagara, Quandamooka and Bundjalung people, now in her 70s, spoke at a protest last month against plans to build an Olympic stadium in the heart of Brisbane\u2019s Victoria Park.  In the crowd a man held aloft a homemade placard with the words \u201cI Preferred Joh\u201d.   Continue reading...",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Best Ninja Prime Day Deals (2026) Slushi, Creami, Crispi, Cafe Luxe",
      "articleUrl": "https://www.wired.com/story/ninja-creami-slushi-prime-day-deals-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 8.0,
      "summary": "Ninja Creami Swirl, Crispi, Slushi, and Cafe Luxe Pro are all on Prime Day deals that will soon go away.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Dembele's 'magic' first-half hat-trick",
      "articleUrl": "https://www.bbc.co.uk/sport/football/videos/cx2jdw4xyxlo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 7.9,
      "summary": "France forward Ousmane Dembele stuns Norway with an incredible hat-trick in the opening 32 minutes of their Group I World Cup clash in Boston.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "10 new movies to watch this weekend on Netflix, Prime Video, and Disney Plus (June 27-28)",
      "articleUrl": "https://www.polygon.com/new-movies-to-watch-avatar-fire-and-ash-june-26-2026/",
      "sourceName": "Polygon.com",
      "sourceHomeUrl": "https://www.polygon.com",
      "ageHours": 7.9,
      "summary": "This weekend there's plenty of movies to stream, from horror, to science-fiction, to thrillers.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "How People in China Keep Outsmarting Anthropic\u2019s Geolocation Restrictions",
      "articleUrl": "https://www.wired.com/story/how-people-in-china-keep-outsmarting-anthropics-geolocation-restrictions/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 7.9,
      "summary": "As Anthropic tightens restrictions on access to Claude in China, users keep finding new workarounds, from proxy services to fake identities sourced on Telegram.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Sri Lanka beat Scotland to keep semi-final hopes alive",
      "articleUrl": "https://www.bbc.co.uk/sport/cricket/articles/cwy0p4jwrn7o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 7.9,
      "summary": "Sri Lanka keep their slim hopes of reaching a first Women's T20 World Cup semi-final alive with a nail-biting three-wicket win over Scotland at Old Trafford.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Gueye scores 'venomous' double off the Senegal bench",
      "articleUrl": "https://www.bbc.co.uk/sport/football/videos/cp8lx7rx8mmo?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 7.8,
      "summary": "Senegal midfielder Pape Gueye produced two moments of quality in front of goal soon after coming off the bench, scoring an impressive double against Iraq in their Group I battle to help fire his side into the last 32.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Get Off Grid in Style Thanks to This Device\u2014On Sale for Prime Day (2026)",
      "articleUrl": "https://www.wired.com/story/jackerys-power-station-half-off-for-prime-day-06-26-2026/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 14.4,
      "summary": "Pick up this deal on Jackery\u2019s most portable battery and power up your adventures wherever they take you.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Hollywood Thrives on \u2018Rabid\u2019 Fans. For Publicists, They\u2019re a Nightmare",
      "articleUrl": "https://www.wired.com/story/hollywood-thrives-on-rabid-fans-for-publicists-theyre-a-nightmare/",
      "sourceName": "WIRED",
      "sourceHomeUrl": "https://www.wired.com",
      "ageHours": 14.4,
      "summary": "A scuffle between stan account Club Chalamet and another Heated Rivalry die-hard shines a light on how parasocial fans are a publicist\u2019s greatest asset\u2014and liability.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Chelsea close in on Lacroix - Saturday's gossip",
      "articleUrl": "https://www.bbc.co.uk/sport/football/articles/c6210jyj0n6o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 7.5,
      "summary": "Chelsea close in on Crystal Palace centre-back Maxence Lacroix, Newcastle United add Borussia Dortmund midfielder Felix Nmecha to their shortlist, while three Premier League clubs are chasing Uruguay left-back Maxi Araujo.",
      "charge": 0
    },
    {
      "bucket": "random",
      "title": "Barker reclaims title at National Road Championships",
      "articleUrl": "https://www.bbc.co.uk/sport/cycling/articles/cq610471gv1o?at_medium=RSS&at_campaign=rss",
      "sourceName": "BBC Sport",
      "sourceHomeUrl": "https://www.bbc.co.uk",
      "ageHours": 7.4,
      "summary": "Megan Barker reclaims her British elite women's circuit race title as the second day of the National Road Championships produces its second Welsh winner.",
      "charge": 0
    }
  ],
  "randomSources": [
    {
      "name": "NASA",
      "feedUrl": "https://www.nasa.gov/rss/dyn/breaking_news.rss",
      "homeUrl": "https://www.nasa.gov",
      "articleCount": 10
    },
    {
      "name": "Polygon",
      "feedUrl": "https://www.polygon.com/rss/index.xml",
      "homeUrl": "https://www.polygon.com",
      "articleCount": 10
    },
    {
      "name": "Los Angeles Times",
      "feedUrl": "https://www.latimes.com/world-nation/rss2.0.xml",
      "homeUrl": "https://www.latimes.com",
      "articleCount": 98
    },
    {
      "name": "The Guardian US",
      "feedUrl": "https://www.theguardian.com/us-news/rss",
      "homeUrl": "https://www.theguardian.com",
      "articleCount": 33
    },
    {
      "name": "NPR Science",
      "feedUrl": "https://feeds.npr.org/1007/rss.xml",
      "homeUrl": "https://feeds.npr.org",
      "articleCount": 10
    },
    {
      "name": "Quanta Magazine",
      "feedUrl": "https://www.quantamagazine.org/feed/",
      "homeUrl": "https://www.quantamagazine.org",
      "articleCount": 5
    },
    {
      "name": "BBC Sport",
      "feedUrl": "https://feeds.bbci.co.uk/sport/rss.xml",
      "homeUrl": "https://feeds.bbci.co.uk",
      "articleCount": 73
    },
    {
      "name": "ProPublica",
      "feedUrl": "https://www.propublica.org/feeds/propublica/main",
      "homeUrl": "https://www.propublica.org",
      "articleCount": 20
    },
    {
      "name": "The Guardian World",
      "feedUrl": "https://www.theguardian.com/world/rss",
      "homeUrl": "https://www.theguardian.com",
      "articleCount": 45
    },
    {
      "name": "Wired",
      "feedUrl": "https://www.wired.com/feed/rss",
      "homeUrl": "https://www.wired.com",
      "articleCount": 50
    }
  ]
});
