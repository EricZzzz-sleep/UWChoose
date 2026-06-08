import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    code: "ACTSC221",
    name: "Introductory Financial Mathematics (Non-Specialist Level)",
    subject: "ACTSC",
    level: 200,
    description:
      "The theory of rates of interest and discount; annuities and sinking funds with practical applications to mortgage and bond questions. Yield rates.",
    prerequisiteRawText: "Students must be in level 2A or higher",
  },
  {
    code: "ACTSC231",
    name: "Introductory Financial Mathematics",
    subject: "ACTSC",
    level: 200,
    description:
      "The theory of rates of interest and discount including the theoretical continuous case of forces of interest and discount. Annuities and sinking funds, including the continuous case. Practical and theoretical applications primarily to mortgages and bonds. Yield rates.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Complete 1 of the following Earned a minimum grade of 70% in each of the following: STAT220 - Probability (Non-Specialist Level) (0.50) Corequisite (see below) Students must be in level 2A or higher",
  },
  {
    code: "ACTSC232",
    name: "Life Contingencies 1",
    subject: "ACTSC",
    level: 200,
    description:
      "The future lifetime random variable: probability and survival functions; force of mortality; complete and curtate expectation of life; Makeham and Gompertz mortality laws. Life tables: characteristics of population and insurance life tables; selection; fractional age assumptions. Life insurance payments and annuity payments: present value random variables; expected present values; higher moments; actuarial notation. Annual, 1/mthly, and continuous cases. Relationships between insurance and annuity functions. Premiums: expense loadings. Present value of future loss random variables and distribution, net and gross cases. Equivalence principle. Portfolio percentile principle. Extra risks.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: ACTSC231 - Introductory Financial Mathematics (0.50)",
  },
  {
    code: "ACTSC291",
    name: "Global Capital Markets and Financial Analytics",
    subject: "ACTSC",
    level: 200,
    description:
      "This course offers an overview of global capital markets and asset valuation. Topics may include an overview of financial markets and instruments, time value of money, valuation of financial assets, and financial risk and portfolio management. The course utilizes an analytic and computational approach to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: ACTSC127 - Introduction to Global Capital Markets and Financial Analytics (0.50) AFM127 - Introduction to Global Capital Markets and Financial Analytics (0.50) CFM101 - Introduction to Financial Markets and Data Analytics (0.50) Complete 1 of the following Enrolled in H-Accounting & Financial Management , H-Computing & Financial Management , H-Mathematics/Chartered Professional Accountancy , H-Science & Financial Management , or H-Sustainability & Financial Management Enrolled in H-Biotechnology/Chartered Professional Accountancy",
  },
  {
    code: "ACTSC331",
    name: "Life Contingencies 2",
    subject: "ACTSC",
    level: 300,
    description:
      "Policy Values: Annual, 1/mthly, and continuous cases. Thiele's equation. Modified premium policy values. Multiple state models: applications in life contingencies; assumptions; Kolmogorov equations; premiums, policy values, multiple decrement models. Joint life models: valuation of insurance benefits on joint lives, dependent and independent cases.",
    prerequisiteRawText:
      "Complete all of the following Earned a minimum grade of 60% in each of the following: ACTSC232 - Life Contingencies 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or Actuarial Science Minor",
  },
  {
    code: "ACTSC363",
    name: "Casualty and Health Insurance Mathematics 1",
    subject: "ACTSC",
    level: 300,
    description:
      "Introduction to the collective risk model; models for loss frequency: (a, b, 0) and (a, b, 1) classes of distributions, compound distributions and mixtures; models for loss severity: exponential, gamma, lognormal, Pareto, Weibull, and mixtures; measures of distribution tails; impact of policy adjustments on loss frequency and severity; estimation of frequency and severity models.",
    prerequisiteRawText:
      "Enrolled in H-Actuarial Science , JH-Actuarial Science , Actuarial Science Minor , or H-Mathematical Finance",
  },
  {
    code: "ACTSC372",
    name: "Investment Science and Corporate Finance",
    subject: "ACTSC",
    level: 300,
    description:
      "Introduction to financial markets. Different return and risk measures. Investment rules and capital budgeting. Rigorous derivations of Markowitz portfolio optimization and its application in investment decisions. Capital Asset Pricing Model (CAPM) and Arbitrage Pricing Theory (APT). Weighted average cost of capital (WACC) and efficient market hypothesis (EMH). Long-term financing, capital structure (MM propositions), and dividend policies. Introduction to options, forwards, and swaps.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ACTSC231 - Introductory Financial Mathematics (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "ACTSC431",
    name: "Casualty and Health Insurance Mathematics 2",
    subject: "ACTSC",
    level: 400,
    description:
      "Aggregate loss and payment models: properties, analytic results, convolution-type methods, recursive methods, inversion-type methods, and simulation; advanced aggregate claims models; reinsurance; applications to insurance pricing; insurance pricing using generalized linear models.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) STAT373 - Regression and Forecasting Methods in Finance (0.50) Earned a minimum grade of 60% in each of the following: ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance",
  },
  {
    code: "ACTSC432",
    name: "Credibility and Risk Theory",
    subject: "ACTSC",
    level: 400,
    description:
      "Credibility theory: American credibility, Bayesian, Bühlmann, Bühlmann-Straub, and empirical Bayes parameter estimation. Risk theory: claim arrival dynamics, surplus models, first-passage times, applications to solvency, and their analytical and numerical analyses.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ACTSC363 - Casualty and Health Insurance Mathematics 1 (0.50) STAT330 - Mathematical Statistics (0.50) STAT333 - Stochastic Processes 1 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance",
  },
  {
    code: "ACTSC445",
    name: "Quantitative Enterprise Risk Management",
    subject: "ACTSC",
    level: 400,
    description:
      "This course introduces enterprise risk management, with a focus on quantitative analysis and economic capital. Risk classification is first discussed with an emphasis on the types of risk most suited to quantitative methods. Risk measures, such as Value-at-Risk (VaR) and Conditional Tail Expectation (CTE or TVaR), are then introduced and their use by firms and regulators to determine risk capital requirements is further highlighted. Different approaches are considered for developing loss distributions, including frequency/severity analysis and extreme value theory. Copulas and economic scenario generators are used to aggregate dependent risks. Different strategies for mitigating or transferring risk are reviewed. Additional topics that may be covered include credit risk, capital allocation, and regulation of financial institutions.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: ACTSC372 - Investment Science and Corporate Finance (0.50) Must have completed the following: BUS393W Complete 1 of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) STAT333 - Stochastic Processes 1 (0.50) Must have completed the following: STAT334 - Probability Models for Business and Accounting (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Mathematical Finance , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec",
  },
  {
    code: "ACTSC446",
    name: "Mathematics of Financial Markets",
    subject: "ACTSC",
    level: 400,
    description:
      "This course covers mathematical techniques for no-arbitrage pricing and hedging financial derivatives. Topics to be covered can be classified into three broad areas: derivatives markets (options; forwards and futures; other derivatives; put-call parity), discrete-time financial models (binomial models; general multi-period models; Fundamental Theorems of Asset Pricing; risk-neutral probability), and continuous-time financial models (basic stochastic calculus and Itô's lemma; Black-Scholes model; interest rate models and bond pricing).",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: ACTSC372 - Investment Science and Corporate Finance (0.50) Must have completed the following: BUS393W Must have completed at least 1 of the following: STAT333 - Stochastic Processes 1 (0.50) STAT334 - Probability Models for Business and Accounting (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Biostatistics , H-Math/FARM - Chartered Financial Analyst Spec , H-Math/FARM - Professional Risk Management Spec , H-Mathematical Finance , H-Statistics , JH-Statistics , or Statistics Minor",
  },
  {
    code: "ACTSC447",
    name: "Numerical Computation for Financial Modelling",
    subject: "ACTSC",
    level: 400,
    description:
      "The interaction of financial models, numerical methods, and computing environments. Basic computational aspects of option pricing and hedging. Numerical methods for stochastic differential equations, strong and weak convergence. Generating correlated random numbers. Time-stepping methods. Finite difference methods for the Black-Scholes equation. Discretization, stability, convergence. Methods for portfolio optimization, effect of data errors on portfolio weights.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)",
  },
  {
    code: "ACTSC454",
    name: "Longevity and Mortality Using Predictive Analytics",
    subject: "ACTSC",
    level: 400,
    description:
      "Kaplan-Meier and Nelson-Aalen estimators for survival functions. Kernel density models. Validation of mortality tables. Estimators for Markov multiple state transition intensities. Longevity models, including deterministic and stochastic models such as Lee-Carter and Cairns-Blake-Dowd.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ACTSC331 - Life Contingencies 2 (0.50) STAT330 - Mathematical Statistics (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance",
  },
  {
    code: "ACTSC455",
    name: "Life Contingencies 3",
    subject: "ACTSC",
    level: 400,
    description:
      "Profit testing for traditional and non-traditional life insurance. Pricing and valuation of embedded options in life insurance products. Defined benefit and defined contribution pension plan design. Theory and practice of unit credit methods for pension plan funding and valuation for final average salary, career average earnings, and career average revalued earnings pension plans; post-retirement health benefits.",
    prerequisiteRawText:
      "Complete all of the following Earned a minimum grade of 60% in each of the following: ACTSC331 - Life Contingencies 2 (0.50) Enrolled in H-Actuarial Science , JH-Actuarial Science , or H-Mathematical Finance",
  },
  {
    code: "AFM101",
    name: "Introduction to Financial Accounting",
    subject: "AFM",
    level: 100,
    description:
      "This course is an introduction to financial accounting. The preparation and use of financial statements is examined. The accounting cycle and assets and liabilities reporting, is discussed.",
  },
  {
    code: "AFM102",
    name: "Introduction to Managerial Accounting",
    subject: "AFM",
    level: 100,
    description:
      "This course is an introduction to the preparation and use of accounting information for management decision-making and reporting. Cost behaviour, cost accumulation systems, and short- and long-term decision models are discussed.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: AFM101 - Introduction to Financial Accounting (0.50) AFM191 - Introduction to Financial Reporting and Managerial Decision Making 1 (0.50) Must have completed at least 1 of the following: BUS127W, BUS227W",
  },
  {
    code: "AFM131",
    name: "Introduction to Business in North America",
    subject: "AFM",
    level: 100,
    description:
      "The functional areas of business: finance, personnel administration, production, marketing, and accounting are examined within differing organizational structures. Coverage also includes study of the principles of effective management and the financial system as a source of corporate capital.",
  },
  {
    code: "AFM231",
    name: "Business Law",
    subject: "AFM",
    level: 200,
    description:
      "Particular attention is given to the law relating to contracts and business organizations. Other areas of study include sources of law, the judicial process, real and personal property, torts, agency, credit, and negotiable instruments.",
  },
  {
    code: "AFM272",
    name: "Global Capital Markets and Financial Analytics",
    subject: "AFM",
    level: 200,
    description:
      "This course offers an overview of global capital markets and asset valuation. Topics may include an overview of financial markets and instruments, time value of money, valuation of financial assets, and financial risk and portfolio management. The course utilizes an analytic and computational approach to the topics, enabling students to develop data management and analysis competencies.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: ACTSC127 - Introduction to Global Capital Markets and Financial Analytics (0.50) AFM127 - Introduction to Global Capital Markets and Financial Analytics (0.50) CFM101 - Introduction to Financial Markets and Data Analytics (0.50) Complete 1 of the following Enrolled in H-Accounting & Financial Management , H-Computing & Financial Management , H-Mathematics/Chartered Professional Accountancy , H-Science & Financial Management , or H-Sustainability & Financial Management Enrolled in H-Biotechnology/Chartered Professional Accountancy",
  },
  {
    code: "AFM424",
    name: "Equity Investments",
    subject: "AFM",
    level: 400,
    description:
      "This course addresses principles of equity investments, including risk and return relationships, fundamental analysis of equities based on macroeconomic, industry and company-specific factors, financial statement analysis, and technical analysis. Portfolio allocation, performance measurement, and ethical and professional standards in the investment profession are also covered.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) AFM273 - Financial Instruments and Capital Markets (0.50) ECON371 - Business Finance 1 (0.50)",
  },
  {
    code: "AMATH231",
    name: "Calculus 4",
    subject: "AMATH",
    level: 200,
    description:
      "Vector integral calculus-line integrals, surface integrals and vector fields, Green's theorem, the Divergence theorem, and Stokes' theorem. Applications include conservation laws, fluid flow and electromagnetic fields. An introduction to Fourier analysis. Fourier series and the Fourier transform. Parseval's formula. Frequency analysis of signals. Discrete and continuous spectra.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH242",
    name: "Introduction to Computational Mathematics",
    subject: "AMATH",
    level: 200,
    description:
      "A rigorous introduction to the field of computational mathematics. The focus is on the interplay between continuous models and their solution via discrete processes. Topics include pitfalls in computation, solution of linear systems, interpolation, discrete Fourier transforms, and numerical integration. Applications are used as motivation.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH250",
    name: "Introduction to Differential Equations",
    subject: "AMATH",
    level: 200,
    description:
      "Physical systems which lead to differential equations (examples include mechanical vibrations, population dynamics, and mixing processes). Dimensional analysis and dimensionless variables. Solving linear differential equations: first- and second-order scalar equations and first-order vector equations. Laplace transform methods of solving differential equations. Introduction to series solutions and special functions.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH251",
    name: "Introduction to Differential Equations (Advanced Level)",
    subject: "AMATH",
    level: 200,
    description:
      "AMATH251 is an advanced-level version of AMATH250. Basic techniques for ODEs: integrating factors, undetermined coefficients and variation of parameters. Introduction to existence and uniqueness theorems. Systems of n-dimensional coupled ODEs and high order ODEs. Matrix Exponential. Laplace Transform. Stability and nonlinear ODEs. Phase space analysis and chaos. Introduction to numerical methods. Series solutions and special functions.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH271",
    name: "Introduction to Theoretical Mechanics",
    subject: "AMATH",
    level: 200,
    description:
      "Newtonian dynamics, gravity and the two-body problem, introduction to Lagrangian mechanics, introduction to Hamiltonian mechanics, non-conservative forces, oscillations, introduction to special relativity.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH331",
    name: "Applied Real Analysis",
    subject: "AMATH",
    level: 300,
    description:
      "Topology of Euclidean spaces, continuity, norms, completeness. Contraction mapping principle. Fourier series. Various applications, for example, to ordinary differential equations, optimization and numerical approximation.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH332",
    name: "Applied Complex Analysis",
    subject: "AMATH",
    level: 300,
    description:
      "Complex numbers, Cauchy-Riemann equations, analytic functions, conformal maps and applications to the solution of Laplace's equation, contour integrals, Cauchy integral formula, Taylor and Laurent expansions, residue calculus and applications.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH333",
    name: "Calculus on Manifolds for Applied Mathematics and Physics",
    subject: "AMATH",
    level: 300,
    description:
      "Manifolds and tensors, Lie derivatives and Lie groups, differential forms and applications to physics. This course covers the basic concepts of differential geometry from the perspective of its applications to physics. The course focuses on the concepts and the techniques that allow us to formulate physical problems in the powerful language of differential geometry including thermodynamics, classical mechanics, fluid dynamics, and relativity.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) PMATH365 - Differential Geometry (0.50) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH342",
    name: "Computational Methods for Differential Equations",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to numerical methods for ordinary and partial differential equations. Ordinary differential equations: multistep and Runge-Kutta methods; stability and convergence; systems and stiffness; boundary value problems. Partial differential equations: finite difference methods for elliptic, hyperbolic and parabolic equations; stability and convergence. The course focuses on introducing widely used methods and highlights applications in the natural sciences, the health sciences, engineering, and finance.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)",
  },
  {
    code: "AMATH343",
    name: "Discrete Models in Applied Mathematics",
    subject: "AMATH",
    level: 300,
    description:
      "Difference equations and discrete dynamical systems. Mathematical models are taken from ecology, biology, economics, and other fields.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH345",
    name: "Data-Driven Mathematical Models",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to data-driven mathematical methods for modelling and prediction of complex systems in science, medicine, and technology. Topics include singular value decomposition, sparsity and compressed sensing, calibration and parameter inference for differential equation models, as well as neural networks and data-driven methods for dynamical systems. Throughout the course, students will learn to use modern data science methods and apply recent advances in data-driven methods to a wide range of applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "AMATH350",
    name: "Differential Equations for Business and Economics",
    subject: "AMATH",
    level: 300,
    description:
      "First order ordinary differential equations. Applications to continuous compounding and the dynamics of supply and demand. Higher order linear ordinary differential equations. Systems of linear ordinary differential equations. Introduction to linear partial differential equations. The Fourier Transform and the diffusion equation. Discussion of the Black-Scholes partial differential equations, and solutions thereof.",
    prerequisiteRawText:
      "Complete all of the following Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) Completed or concurrently enrolled in: ACTSC371, BUS393W Students must be in level 3A or higher",
  },
  {
    code: "AMATH351",
    name: "Ordinary Differential Equations",
    subject: "AMATH",
    level: 300,
    description:
      "Linear differential equations with non-constant coefficients, Sturm comparison, oscillation and separation theorems, series solutions and special functions. Boundary value problems. Linear systems in Rn, an introduction to dynamical systems. Laplace transforms applied to linear systems, transfer functions, the convolution theorem. An introduction to dynamical systems and stability. Perturbation methods for differential equations. Applications are discussed throughout.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "AMATH353",
    name: "Partial Differential Equations 1",
    subject: "AMATH",
    level: 300,
    description:
      "Second order linear partial differential equations - the diffusion equation, wave equation, and Laplace's equation. Methods of solution - separation of variables and eigenfunction expansions, the Fourier transform. Physical interpretation of solutions in terms of diffusion, waves, and steady states. First order non-linear partial differential equations and the method of characteristics. Applications are emphasized throughout.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)",
  },
  {
    code: "AMATH361",
    name: "Continuum Mechanics",
    subject: "AMATH",
    level: 300,
    description:
      "This course presents the derivation of the equations that govern the macroscopic description of solids, liquids, and gases. The necessary mathematical tools for the description are also introduced. Topics in this course include the continuum hypothesis, forces unique to a continuum and their mathematical description, solid materials versus flowing continua, the Lagrangian and Eulerian descriptions of flow, the Reynolds transport theorem and its use in deriving conservation laws, the Euler and Navier-Stokes Equations, and various applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50)",
  },
  {
    code: "AMATH362",
    name: "Mathematics of Climate Change",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to the mathematical description of the climate. Topics covered include solar radiation and how the Earth is heated, climate feedbacks, the role of the oceans and the Earth's rotation, climate data and climate variability, and simple models of human-climate interactions. Calculus and computation will be used throughout the course.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH213 - Signals, Systems, and Differential Equations (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)",
  },
  {
    code: "AMATH373",
    name: "Quantum Theory 1",
    subject: "AMATH",
    level: 300,
    description:
      "Critical experiments and old quantum theory. Basic concepts of quantum mechanics: observables, wavefunctions, Hamiltonians, and the Schroedinger equation. Uncertainty, correspondence, and superposition principles. Simple applications to finite and extended one-dimensional systems, harmonic oscillator, rigid rotor, and hydrogen atom.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50)",
  },
  {
    code: "AMATH382",
    name: "Computational Modelling of Cellular Systems",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to dynamic mathematical modelling of cellular processes. The emphasis is on using computational tools to investigate differential equation-based models. A variety of cellular phenomena are discussed, including ion pumps, membrane potentials, intercellular communication, genetic networks, regulation of metabolic pathways, and signal transduction.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed: SYDE112 Students must be in level 3A or higher Enrolled in an Honours program",
  },
  {
    code: "AMATH383",
    name: "Introduction to Mathematical Biology",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to the mathematical modelling of biological processes, with emphasis on population biology. Topics include ecology, epidemiology, microbiology, and physiology. Techniques include difference equations, ordinary differential equations, partial differential equations, stability analysis, phase plane analysis, travelling wave solutions, mathematical software. Includes collaborative projects and computer labs.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT211 - Introductory Statistics and Sampling for Accounting (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "AMATH390",
    name: "Mathematics and Music",
    subject: "AMATH",
    level: 300,
    description:
      "An introduction to some of the deep connections between mathematics and music. Topics covered include acoustics, including pitch and harmonics, basic Fourier analysis, the mathematics behind the differing pitch and timbre of string, wind and percussion instruments, scales and temperaments, digital music, musical synthesis.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A",
  },
  {
    code: "AMATH391",
    name: "Data Analysis with Fourier and Wavelet Methods",
    subject: "AMATH",
    level: 300,
    description:
      "Fourier and wavelet methods are fundamental tools in data analysis ranging from time-series data to image and audio compression. These methods are increasingly finding application in areas such as machine learning and quantum computing alongside traditional application areas such as signal processing for images and audio. This course covers the mathematical development of Fourier and wavelet analysis, with an emphasis on both theory and practical application. Students will learn the necessary theory to apply Fourier and wavelet methods to the analysis of a variety of practical problems with hands on coding experience through a number of assignments.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) ECE207 - Signals and Systems (0.50) PHYS364 - Mathematical Physics 1 (0.50) SYDE252 - Linear Systems and Signals (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed: SYDE114",
  },
  {
    code: "AMATH442",
    name: "Computational Methods for Partial Differential Equations",
    subject: "AMATH",
    level: 400,
    description:
      "This course studies several classes of methods for the numerical solution of partial differential equations in multiple dimensions on structured and unstructured grids. Finite volume methods for hyperbolic conservation laws: linear and nonlinear hyperbolic systems; stability; numerical conservation. Finite element methods for elliptic and parabolic equations: weak forms; existence of solutions; optimal convergence; higher-order methods. Examples from fluid and solid mechanics. Additional topics as time permits.",
    prerequisiteRawText:
      "Must have completed the following: AMATH342 - Computational Methods for Differential Equations (0.50)",
  },
  {
    code: "AMATH445",
    name: "Scientific Machine Learning",
    subject: "AMATH",
    level: 400,
    description:
      "The course provides an in-depth exploration of how deep learning techniques are applied in various scientific and medical domains. The course introduces basic concepts of deep learning, explores different deep learning architectures and algorithms, and focuses on their applications in scientific and biomedical research. The integration of scientific knowledge with machine learning techniques is emphasized throughout the course. Students will gain hands-on experience by executing the acquired concepts using Python.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)",
  },
  {
    code: "AMATH446",
    name: "Introduction to Mathematics of Deep Learning",
    subject: "AMATH",
    level: 400,
    description:
      "This course introduces the basic concepts of deep learning in a mathematically rigorous fashion. Topics include mathematical definitions of deep neural networks, approximation theory, gradient-based optimization, and generalization analysis.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: ECE203 - Probability Theory and Statistics 1 (0.50) PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) SYDE212 - Probability, Statistics, and Data Science (0.50) Must have completed at least 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH207 - Calculus 3 (Non-Specialist Level) (0.50) MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) SYDE211 - Calculus 3 (0.50) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50)",
  },
  {
    code: "AMATH449",
    name: "Neural Networks",
    subject: "AMATH",
    level: 400,
    description:
      "An introduction to neural network methods, with some discussion of their relation to neuroscience. Simple neuron models and networks of neurons. Training feedforward networks. Backpropagation of errors and stochastic gradient descent. Unsupervised learning methods. Recurrent neural networks. Convolutional neural networks. Continuous time models. Adversarial attacks. Advanced topics may include neural engineering, biologically plausible learning methods.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)",
  },
  {
    code: "AMATH451",
    name: "Introduction to Dynamical Systems",
    subject: "AMATH",
    level: 400,
    description:
      "A unified view of linear and nonlinear systems of ordinary differential equations in Rn. Flow operators and their classification: contractions, expansions, hyperbolic flows. Stable and unstable manifolds. Phase-space analysis. Nonlinear systems, stability of equilibria, and Lyapunov functions. The special case of flows in the plane, Poincare-Bendixson theorem, and limit cycles. Applications to physical problems will be a motivating influence.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
  },
  {
    code: "AMATH453",
    name: "Partial Differential Equations 2",
    subject: "AMATH",
    level: 400,
    description:
      "A thorough discussion of the class of second order linear partial differential equations with constant coefficients, in two independent variables. Laplace's equation, the wave equation and the heat equation in higher dimensions. Theoretical/qualitative aspects: well-posed problems, maximum principles for elliptic and parabolic equations, continuous dependence results, uniqueness results (including consideration of unbounded domains), domain of dependence for hyperbolic equations. Solution procedures: elliptic equations -- Green functions, conformal mapping; hyperbolic equations -- generalized d'Alembert solution, spherical means, method of descent; transform methods -- Fourier, multiple Fourier, Laplace, Hankel (for all three types of partial differential equations); Duhamel's method for inhomogeneous hyperbolic and parabolic equations.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: AMATH353 - Partial Differential Equations 1 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50)",
  },
  {
    code: "AMATH455",
    name: "Control Theory",
    subject: "AMATH",
    level: 400,
    description:
      "Feedback control with applications. System theory in both time and frequency domain, state-space computations, stability, system uncertainty, loopshaping, linear quadratic regulators, and estimation.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH332 - Applied Complex Analysis (0.50) PMATH332 - Applied Complex Analysis (0.50) PMATH352 - Complex Analysis (0.50)",
  },
  {
    code: "AMATH456",
    name: "Calculus of Variations",
    subject: "AMATH",
    level: 400,
    description:
      "Concept of functional and its variations. The solution of problems using variational methods - the Euler-Lagrange equations. Applications include an introduction to Hamilton's principle and optimal control.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Students must be in level 3B or higher",
  },
  {
    code: "AMATH462",
    name: "Introduction to Mathematics of Climate Modelling",
    subject: "AMATH",
    level: 400,
    description:
      "This course will introduce mathematical techniques, including analytical, computational, and machine learning methods, used to study climate change. Course material will examine both historical evidence of climate change and future predictions related to climatological and societal impacts based on current climate models. The course will have a strong computational component to study the governing geophysical fluid dynamics equations in climate models and their properties. The course will also examine the application of learned principles to climate modelling through in-depth discussions of journal readings.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "AMATH463",
    name: "Fluid Mechanics",
    subject: "AMATH",
    level: 400,
    description:
      "This course provides a broad mathematical introduction to fluid mechanics and provides a foundation for applications such as weather and climate, oceanography, aeronautics, and astrophysics. Topics in this course include the Euler and Navier-Stokes Equations; the dynamics of vorticity; the effects of viscosity, including near solid boundaries; wave motion and dispersive waves; the effects of the Earth's rotation on flow; and an introduction to turbulence.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Must have completed at least 1 of the following: AMATH353 - Partial Differential Equations 1 (0.50) PHYS364 - Mathematical Physics 1 (0.50)",
  },
  {
    code: "AMATH473",
    name: "Quantum Theory",
    subject: "AMATH",
    level: 400,
    description:
      "The Hilbert space of states, observables, and time evolution. Feynman path integral and Greens functions. Approximation methods. Co-ordinate transformations, angular momentum, and spin. The relation between symmetries and conservation laws. Density matrix, Ehrenfest theorem, and decoherence. Multiparticle quantum mechanics. Bell inequality and basics of quantum computing.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) PMATH343 - Introduction to the Mathematics of Quantum Information (0.50) Must have completed the following: CHEM356 - Introductory Quantum Mechanics (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) Must have completed the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) ECE305 - Introduction to Quantum Mechanics (0.50) Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH373 - Quantum Theory 1 (0.50) PHYS234 - Quantum Physics 1 (0.50)",
  },
  {
    code: "AMATH474",
    name: "Advanced Quantum Theory: Quantum Information and Foundations",
    subject: "AMATH",
    level: 400,
    description:
      "Phase space symplectic formulation of quantum mechanics. From classical theory to quantum theory: the quantization map and its issues. The Wigner function. Gaussian quantum mechanics. Notions of quantum information in infinite dimensional quantum systems. Theory of correlations and entanglement. Entanglement measures. Exploration of current research directions in quantum information.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: AMATH473 - Quantum Theory (0.50) Must have completed the following: PHYS454",
  },
  {
    code: "AMATH475",
    name: "Introduction to General Relativity",
    subject: "AMATH",
    level: 400,
    description:
      "Tensor analysis. Curved space-time and the Einstein field equations. The Schwarzschild solution and applications. The Friedmann-Robertson-Walker cosmological models.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in an Honours Faculty of Mathematics or a Faculty of Science program",
  },
  {
    code: "AMATH477",
    name: "Stochastic Processes for Applied Mathematics",
    subject: "AMATH",
    level: 400,
    description:
      "Random variables, expectations, conditional probabilities, conditional expectations, convergence of a sequence of random variables, limit theorems, minimum mean square error estimation, the orthogonality principle, random process, discrete-time and continuous-time Markov chains and applications, forward and backward equation, invariant distribution, Gaussian process and Brownian motion, expectation maximization algorithm, linear discrete stochastic equations, linear innovation sequences, Kalman filter, various applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) AMATH350 - Differential Equations for Business and Economics (0.50) ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH211 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH218 - Differential Equations for Engineers (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)",
  },
  {
    code: "AMATH490",
    name: "Topics in Applied Mathematics",
    subject: "AMATH",
    level: 400,
    description:
      "Topics course in an emerging or specialized area of applied mathematics. Consult Quest class search for specific topics being offered.",
    prerequisiteRawText: "Students must be in level 3A",
  },
  {
    code: "AMATH495",
    name: "Reading Course",
    subject: "AMATH",
    level: 400,
    description: "Reading course as announced by the department.",
  },
  {
    code: "AMATH499",
    name: "Research Project",
    subject: "AMATH",
    level: 400,
    description:
      "A research-based course that allows students with an interest in applied mathematics or mathematical physics to participate in a research project with a faculty member. The student is required to approach a faculty member of the Department of Applied Mathematics for supervision. The enrolled student is expected to hand in a written report of their research to the supervisor and present a summary of the project orally in front of a subset of the applied mathematics undergraduate committee as a final assessment.",
    prerequisiteRawText:
      "Complete all of the following Students must be in level 4A or higher Complete 1 of the following Enrolled in H-Applied Mathematics , JH-Applied Mathematics , H-Applied Mathematics with Scientific Computing & Scientific Machine Learning , or H-Mathematical Physics (BMath) Enrolled in H-Applied Mathematics with Scientific Computing",
  },
  {
    code: "ARBUS101",
    name: "Introduction to Business in North America",
    subject: "ARBUS",
    level: 100,
    description:
      "The functional areas of business: finance, personnel administration, production, marketing, and accounting are examined within differing organizational structures. Coverage also includes study of the principles of effective management and the financial system as a source of corporate capital.",
    prerequisiteRawText: "Enrolled in Arts & Business",
  },
  {
    code: "ARBUS302",
    name: "Principles of Marketing",
    subject: "ARBUS",
    level: 300,
    description:
      "This course is designed to provide a broad understanding of the field of marketing, including consumer behaviour, segmentation, targeting, positioning, branding, and the marketing mix. Students will gain an understanding of how organizations identify the needs of potential consumers and create and deliver value to these consumers through the marketing process.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON101 - Introduction to Microeconomics (0.50) Students must be in level 2B or higher Enrolled in Arts & Business",
  },
  {
    code: "BIOL239",
    name: "Genetics",
    subject: "BIOL",
    level: 200,
    description:
      "Introduces major concepts in genetics, from DNA to its effects at the cellular, organismal, and population levels, and uses in biotechnology. Topics include Mendelian inheritance patterns, chromosomal mechanisms in mitosis and meiosis, mechanisms and effects of mutations, gene expression, natural selection, and methods of analysis. Students will learn the basics of using genetics data such as family trees, results of breeding experiments with model organisms, and DNA sequences. Tutorials cover some lecture content in more detail and provide additional opportunities to apply knowledge.",
  },
  {
    code: "BIOL382",
    name: "Computational Modelling of Cellular Systems",
    subject: "BIOL",
    level: 300,
    description:
      "An introduction to dynamic mathematical modelling of cellular processes. The emphasis is on using computational tools to investigate differential equation-based models. A variety of cellular phenomena are discussed, including ion pumps, membrane potentials, intercellular communication, genetic networks, regulation of metabolic pathways, and signal transduction.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed: SYDE112 Students must be in level 3A or higher Enrolled in an Honours program",
  },
  {
    code: "BUS111W",
    name: "Understanding the Business Environment (WLU)",
    subject: "BUS",
    level: 100,
    description:
      "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText:
      "Enrolled in an undergraduate degree program or MATH/ELAS",
  },
  {
    code: "BUS121W",
    name: "Critical Thinking and Communication Skills (WLU)",
    subject: "BUS",
    level: 100,
    description:
      "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText:
      "Enrolled in an undergraduate degree program or MATH/ELAS",
  },
  {
    code: "BUS252W",
    name: "Introduction to Marketing Management (WLU)",
    subject: "BUS",
    level: 300,
    description:
      "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: AFM131 - Introduction to Business in North America (0.50) ARBUS101 - Introduction to Business in North America (0.50) Must have completed the following: BUS111W",
  },
  {
    code: "BUS381W",
    name: "Strategic Management I (WLU)",
    subject: "BUS",
    level: 300,
    description:
      "Taught at Wilfrid Laurier University. Refer to WLU Undergraduate Calendar for course description.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: BUS121W Complete 1 of the following Must have completed the following: AFM131 - Introduction to Business in North America (0.50) Must have completed the following: BUS111W Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) MATBUS371 - Introduction to Corporate Finance (0.50) Must have completed at least 1 of the following: ACTSC371, BUS383W",
  },
  {
    code: "CHEM120",
    name: "General Chemistry 1",
    subject: "CHEM",
    level: 100,
    description:
      "The stoichiometry of compounds and chemical reactions. Properties of gases. Periodicity and chemical bonding. Energy changes in chemical systems. Electronic structure of atoms and molecules; correlation with the chemical reactivity of common elements, inorganic and organic compounds.",
  },
  {
    code: "CHEM123",
    name: "General Chemistry 2",
    subject: "CHEM",
    level: 100,
    description:
      "Properties of liquids and solutions. Introduction to chemical equilibria. Principles of acid-base equilibria, solubility and electrochemical processes. Chemical kinetics.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CHE102 - Chemistry for Engineers (0.50) CHEM120 - General Chemistry 1 (0.50)",
  },
  {
    code: "CO227",
    name: "Introduction to Optimization (Non-Specialist Level)",
    subject: "CO",
    level: 200,
    description:
      "A broad introduction to the field of optimization, discussing applications, and solution techniques. Mathematical models for real life applications; algorithms: simplex, cutting plane, and branch & bound; linear programming duality.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50)",
  },
  {
    code: "CO250",
    name: "Introduction to Optimization",
    subject: "CO",
    level: 200,
    description:
      "A broad introduction to the field of optimization, discussing applications, and solution techniques. Mathematical models for real life applications; algorithms; aspects of computational complexity; geometry; linear programming duality, focusing on the development of algorithms.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) Earned a minimum cumulative average of 60",
  },
  {
    code: "CO255",
    name: "Introduction to Optimization (Advanced Level)",
    subject: "CO",
    level: 200,
    description:
      "Linear optimization: feasibility theorems, duality, the simplex algorithm. Discrete optimization: integer linear programming, cutting planes, network flows. Continuous optimization: local and global optima, feasible directions, convexity, necessary optimality conditions.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "CO327",
    name: "Deterministic OR Models (Non-Specialist Level)",
    subject: "CO",
    level: 300,
    description:
      "An applications-oriented course that illustrates how various mathematical models and methods of optimization can be used to solve problems arising in business, industry, and science.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)",
  },
  {
    code: "CO330",
    name: "Combinatorial Enumeration",
    subject: "CO",
    level: 300,
    description:
      "The algebra of formal power series. The combinatorics of the ordinary and exponential generating series. Lagrange's implicit function theorem, applications to the enumeration of permutations, functions, trees and graphs. Integer partitions, geometric methods, enumerating linear transformations. Introduction to the pattern algebra, applications to the enumeration of strings. Lattice paths, Wiener-Hopf factorization. Enumeration under symmetries.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
  },
  {
    code: "CO331",
    name: "Coding Theory",
    subject: "CO",
    level: 300,
    description:
      "A first course in error-correcting codes. Linear block codes, Hamming-Golay codes, and multiple error-correcting BCH codes are studied. Various encoding and decoding schemes are considered.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "CO342",
    name: "Introduction to Graph Theory",
    subject: "CO",
    level: 300,
    description:
      "An introduction to some of the key topics in graph theory: connectivity, planarity, and matchings. Connectivity: Menger's theorem, 3-connected graphs. Planarity: Kuratowski's theorem, uniqueness of planar embeddings. Matchings: Review of Konig's theorem, Tutte's theorem.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
  },
  {
    code: "CO351",
    name: "Network Flow Theory",
    subject: "CO",
    level: 300,
    description:
      "Review of linear programming. Shortest path problems. The max-flow min-cut theorem and applications. Minimum cost flow problems. Network simplex and primal-dual algorithms. Applications to problems of transportation, distribution, job assignments, and critical-path planning.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)",
  },
  {
    code: "CO353",
    name: "Computational Discrete Optimization",
    subject: "CO",
    level: 300,
    description:
      "Formulations of combinatorial optimization problems, greedy algorithms, dynamic programming, branch-and-bound, cutting plane algorithms, decomposition techniques in integer programming, approximation algorithms.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)",
  },
  {
    code: "CO365",
    name: "Optimization Models and Algorithms for Data Science",
    subject: "CO",
    level: 300,
    description:
      "Modelling problems in data science and machine learning as optimization problems, and their analysis. Solution methods, including gradient descent and its extensions, and their consequences in modelling decisions. Convexity and Lagrangian duality. Applications to clustering and classification problems. Analysis and implementation of computational methods.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "CO367",
    name: "Nonlinear Optimization",
    subject: "CO",
    level: 300,
    description:
      "A course on the fundamentals of nonlinear optimization, including both the mathematical and the computational aspects. Necessary and sufficient optimality conditions for unconstrained and constrained problems. Convexity and its applications. Computational techniques and their analysis.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50)",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            { type: "course", courseCode: "CO250" },
            { type: "course", courseCode: "CO255" },
          ],
        },
        {
          type: "anyOf",
          requirements: [
            { type: "course", courseCode: "MATH128", minGrade: 70 },
            { type: "course", courseCode: "MATH138" },
            { type: "course", courseCode: "MATH148" },
          ],
        },
      ],
    },
  },
  {
    code: "CO370",
    name: "Deterministic OR Models",
    subject: "CO",
    level: 300,
    description:
      "An applications-oriented course that illustrates how various mathematical models and methods of optimization can be used to solve problems arising in business, industry, and science.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)",
  },
  {
    code: "CO372",
    name: "Portfolio Optimization Models",
    subject: "CO",
    level: 300,
    description:
      "Computational optimization methodologies underlying portfolio problems in finance. Computational linear algebra, determining derivatives, quadratic, and nonlinear optimization. The efficient frontier problem. Applications of optimization in finance such as volatility surface determination and global minimization for value-at-risk.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: ACTSC291 - Global Capital Markets and Financial Analytics (0.50) ACTSC372 - Investment Science and Corporate Finance (0.50) AFM272 - Global Capital Markets and Financial Analytics (0.50) ECON371 - Business Finance 1 (0.50) Must have completed at least 1 of the following: ACTSC371, BUS393W Complete 1 of the following Earned a minimum grade of 70% in each of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50)",
  },
  {
    code: "CO380",
    name: "Mathematical Discovery and Invention",
    subject: "CO",
    level: 300,
    description:
      "A course in problem solving. 100 problems are studied. Problems are taken mainly from the elementary parts of algebra, geometry, number theory, combinatorics, and probability.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CO430",
    name: "Algebraic Enumeration",
    subject: "CO",
    level: 400,
    description:
      "The Lagrange Implicit Function Theorem, the MacMahon Master Theorem. Enumeration of planar triangulations. The transfer matrix method. Sieve methods, inclusion/exclusion, Mobius inversion. Polya enumeration, Enumeration of trees. Basic hypergeometric series, q-analogues, Rogers-Ramanujan identities. Asymptotic methods.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CO330 - Combinatorial Enumeration (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO431",
    name: "Symmetric Functions",
    subject: "CO",
    level: 400,
    description:
      "The ring of symmetric functions, standard bases, the Hall inner product. Young tableaux. The Robinson-Schensted-Knuth correspondence, the hook-length formula, the Jacobi-Trudi formula, the Pieri rule, the Littlewood-Richardson rule. Representation theory of the symmetric groups. Enumeration of plane partitions. Enumeration of maps on surfaces. Other topics.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO432",
    name: "Information Theory and Applications",
    subject: "CO",
    level: 400,
    description:
      "Basics of information theory; Shannon entropy, KL divergence, and mutual information; basic properties of entropic quantities; chain rule, Pinsker's Inequality, Data Processing Inequality; compression; Channel Coding Theorem; error-correction; applications to combinatorics, optimization, cryptography, and computer science.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) CS231 - Algorithmic Problem Solving (0.50) CS341 - Algorithms (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CO434",
    name: "Combinatorial Designs",
    subject: "CO",
    level: 400,
    description:
      "Pairwise orthogonal latin squares. Transversal designs and finite planes. Balanced incomplete block designs, group divisible designs, and pairwise balanced designs. Symmetric designs and Hadamard matrices. Recursive constructions. Wilson's fundamental construction.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Must have completed the following: PMATH346 Earned a minimum cumulative average of 80",
  },
  {
    code: "CO439",
    name: "Topics in Combinatorics",
    subject: "CO",
    level: 400,
    description:
      "An undergraduate seminar in combinatorics. The primary objective is to study current work in specific areas of combinatorics. Course content may vary from term to term.",
  },
  {
    code: "CO440",
    name: "Topics in Graph Theory",
    subject: "CO",
    level: 400,
    description:
      "An in-depth study of one or two topics in graph theory. Course content may vary from term to term. Topics may include planar graphs, extremal graph theory, directed graphs, enumeration, algebraic graph theory, probabilistic graph theory, connectivity, graph embedding, colouring problems.",
    prerequisiteRawText:
      "Must have completed the following: CO342 - Introduction to Graph Theory (0.50)",
  },
  {
    code: "CO442",
    name: "Graph Theory",
    subject: "CO",
    level: 400,
    description:
      "Colouring: Brooks' Theorem and Vizing's Theorem. Flows: integer and group-valued flows, the flow polynomial, the 6-flow theorem. Extremal graph theory; Ramsey's theorem, Turan's theorem, Mader's theorem on graphs with no n-clique-minor. Probabilistic methods: Lower bounds for Ramsey numbers, graphs with large girth and chromatic number.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CO342 - Introduction to Graph Theory (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO444",
    name: "Algebraic Graph Theory",
    subject: "CO",
    level: 400,
    description:
      "An introduction to the methods of and some interesting current topics in algebraic graph theory. Topics covered will include vertex-transitive graphs, eigenvalue methods, strongly regular graphs and may include graph homomorphisms, Laplacians or knot and link invariants.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) Must have completed the following: PMATH346 Earned a minimum cumulative average of 80",
  },
  {
    code: "CO446",
    name: "Matroid Theory",
    subject: "CO",
    level: 400,
    description:
      "This is an introductory course on matroid theory, with particular emphasis on graphic matroids and on topics that are applicable to graph theory. The topics include matroid intersection and partition, graphic matroids, matroid connectivity, regular matroids, and representable matroids. Applications include matching, disjoint paths, disjoint spanning trees, the 8-flow theorem for graphs, planarity testing, and recognizing totally unimodular matrices.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CO342 - Introduction to Graph Theory (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO450",
    name: "Combinatorial Optimization",
    subject: "CO",
    level: 400,
    description:
      "Characterizations of optimal solutions and efficient algorithms for optimization problems over discrete structures. Topics include network flows, optimal matchings, T-joins and postman tours, matroid optimization.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO351 - Network Flow Theory (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO452",
    name: "Integer Programming",
    subject: "CO",
    level: 400,
    description:
      "Formulation of problems as integer linear programs. Solution by branch-and-bound and cutting plane algorithms. Introduction to the theory of valid inequalities and polyhedral combinatorics.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO351 - Network Flow Theory (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO454",
    name: "Scheduling",
    subject: "CO",
    level: 400,
    description:
      "An overview of practical optimization problems that can be posed as scheduling problems. Characterizations of optimal schedules. Simple and efficient combinatorial algorithms for easy problems. A brief overview of computational complexity, definition of P, NP, NP-complete and NP-hard. Integer programming formulations, the travelling salesman problem, heuristics, dynamic programming, and branch-and-bound approaches. Polynomial-time approximation algorithms.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50) MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
  },
  {
    code: "CO456",
    name: "Introduction to Game Theory",
    subject: "CO",
    level: 400,
    description:
      "A broad introduction to game theory and its applications to the modelling of competition and co-operation in business, economics, and society. Two-person games in strategic form and Nash equilibria. Extensive form games, including multi-stage games. Coalition games and the core. Bayesian games, mechanism design, and auctions.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO227 - Introduction to Optimization (Non-Specialist Level) (0.50) CO250 - Introduction to Optimization (0.50) CO255 - Introduction to Optimization (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH229 - Introduction to Combinatorics (Non-Specialist Level) (0.50) MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50)",
  },
  {
    code: "CO459",
    name: "Topics in Optimization",
    subject: "CO",
    level: 400,
    description:
      "An undergraduate seminar in optimization. The primary objective is to study recent work in specific areas of optimization. Course content may vary from term to term.",
  },
  {
    code: "CO463",
    name: "Convex Optimization and Analysis",
    subject: "CO",
    level: 400,
    description:
      "An introduction to the modern theory of convex programming, its extensions and applications. Structure of convex sets, separation and support, subgradient calculus for convex functions, Fenchel conjugacy and duality, Lagrange multipliers. Ellipsoid method for convex optimization.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH331 - Applied Real Analysis (0.50) PMATH331 - Applied Real Analysis (0.50) PMATH333 - Introduction to Real Analysis (0.50) PMATH351 - Real Analysis (0.50) Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO466",
    name: "Continuous Optimization",
    subject: "CO",
    level: 400,
    description:
      "Numerical algorithms for nonlinear optimization. Newton, variable-metric, quasi-Newton and conjugate gradient methods. Obtaining derivatives. Convexity. Trust region methods. Constrained optimization including optimality conditions, sequential quadratic programming, interior point, and active set strategies.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Earned a minimum cumulative average of 80",
  },
  {
    code: "CO471",
    name: "Semidefinite Optimization",
    subject: "CO",
    level: 400,
    description:
      "Optimization over convex sets described as the intersection of the set of symmetric, positive semidefinite matrices with affine spaces. Formulations of problems from combinatorial optimization, graph theory, number theory, probability and statistics, engineering design, and control theory. Theoretical and practical consequences of these formulations. Duality theory and algorithms.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH331 - Applied Real Analysis (0.50) PMATH331 - Applied Real Analysis (0.50) PMATH333 - Introduction to Real Analysis (0.50) PMATH351 - Real Analysis (0.50) Must have completed at least 1 of the following: CO255 - Introduction to Optimization (Advanced Level) (0.50) CO365 - Optimization Models and Algorithms for Data Science (0.50) CO367 - Nonlinear Optimization (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Earned a minimum cumulative average of 80.0",
  },
  {
    code: "CO480",
    name: "History of Mathematics",
    subject: "CO",
    level: 400,
    description:
      "An in-depth examination of the origins of mathematics, beginning with examples of Babylonian mathematics. Topics may include Pythagorean triples, solution of equations, estimation of pi, duplication of the cube, trisection of an angle, the Fibonacci sequence, the origins of calculus.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: ECE108 - Discrete Mathematics and Logic 1 (0.50) MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CO481",
    name: "Introduction to Quantum Information Processing",
    subject: "CO",
    level: 400,
    description:
      "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText:
      "Complete all of the following Earned a minimum grade of 80% in at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CO485",
    name: "The Mathematics of Public-Key Cryptography",
    subject: "CO",
    level: 400,
    description:
      "An in-depth study of public-key cryptography. Number-theoretic problems: prime generation, integer factorization, discrete logarithms. Public-key encryption, digital signatures, key establishment, elliptic curve cryptography, post-quantum cryptography. Proofs of security.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: PMATH334 - Introduction to Rings and Fields with Applications (0.50) PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50) PMATH348 - Fields and Galois Theory (0.50) Must have completed at least 1 of the following: PMATH345, PMATH346 Earned a minimum cumulative average of 80",
  },
  {
    code: "CO486",
    name: "Topics in Quantum Information",
    subject: "CO",
    level: 400,
    description:
      "The primary objective is to study current work in specific areas of quantum information. Course content may vary from term to term.",
  },
  {
    code: "CO487",
    name: "Applied Cryptography",
    subject: "CO",
    level: 400,
    description:
      "A broad introduction to modern cryptography, highlighting the tools and techniques used to secure internet and messaging applications. Symmetric-key encryption, hash functions, message authentication, authenticated encryption, public-key encryption and digital signatures, key establishment, key management.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "COMM431",
    name: "Project Management",
    subject: "COMM",
    level: 400,
    description:
      "This course will introduce students to approaches, techniques, and terminology used in project management. In particular, students will learn project planning principles, product and process metrics, people and organizational issues, task allocation and scheduling, monitoring and control, change management, and methods for cost estimation and risk assessment. Students will also be introduced to current project management tools, and will manage their own term project.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: AFM102 - Introduction to Managerial Accounting (0.50) Complete 1 of the following Must have completed at least 1 of the following: MSE211 - Organizational Behaviour (0.50) PSYCH238 - Organizational Psychology (0.50) Must have completed the following: MSCI211 Students must be in level 3A or higher",
  },
  {
    code: "COMM432",
    name: "Electronic Business",
    subject: "COMM",
    level: 400,
    description:
      "This course will introduce students to approaches, techniques, and terminology used in electronic business. Students will also study issues in disciplines related to electronic business. They will review a number of sites and identify efficient e-commerce analysis, design and development techniques. Students will be introduced to current electronic business tools and standards, and will construct their own simple electronic business site.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: ARBUS302 - Principles of Marketing (0.50) MGMT244 - Principles of Marketing (0.50) Must have completed the following: BUS352W Must have completed at least 1 of the following: CS330 - Management Information Systems (0.50) CS490 - Information Systems Management (0.50) Students must be in level 3A or higher",
  },
  {
    code: "COMMST193",
    name: "Communication in the Sciences",
    subject: "COMMST",
    level: 100,
    description:
      "In this course students will enhance oral and written communication competencies in contexts relevant to the life sciences and physical sciences.",
    prerequisiteRawText:
      "Complete 1 of the following Enrolled in H-Science & Financial Management Enrolled in a Bachelor of Science program in the Faculty of Science",
  },
  {
    code: "CS114",
    name: "Principles of Computing for Science",
    subject: "CS",
    level: 100,
    description:
      "Introduction to basic imperative programming principles; programming concepts including functions, flow control, lists, arrays; numerical accuracy and efficiency; data analysis and general-purpose algorithms. Introduction to object-oriented programming concepts.",
  },
  {
    code: "CS115",
    name: "Introduction to Computer Science 1",
    subject: "CS",
    level: 100,
    description:
      "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Function definition and application. Tracing via substitution. Design, testing, and documentation. Recursive data definitions. Lists and trees. Functional and data abstraction.",
  },
  {
    code: "CS116",
    name: "Introduction to Computer Science 2",
    subject: "CS",
    level: 100,
    description:
      "This course builds on the techniques and patterns learned in CS115 while making the transition to use of an imperative language. Generative and structural recursion. Mutation (assignment) and its role in an imperative language. Primitive types and basic I/O. Sequencing, selection, looping. Function definition and use. File and console I/O. Issues in computer science.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)",
  },
  {
    code: "CS135",
    name: "Designing Functional Programs",
    subject: "CS",
    level: 100,
    description:
      "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion. Historical context.",
  },
  {
    code: "CS136",
    name: "Elementary Algorithm Design and Data Abstraction",
    subject: "CS",
    level: 100,
    description:
      "This course builds on the techniques and patterns learned in CS135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 90% in each of the following: CS115 - Introduction to Computer Science 1 (0.50) Earned a minimum grade of 70% in each of the following: CS116 - Introduction to Computer Science 2 (0.50) Earned a minimum grade of 60% in each of the following: CS135 - Designing Functional Programs (0.50)",
  },
  {
    code: "CS136L",
    name: "Tools and Techniques for Software Development",
    subject: "CS",
    level: 100,
    description:
      "This course introduces students to tools and techniques useful in the software development lifecycle. Students learn to navigate and leverage commands and utilities in the Linux Command Line Shell. Students gain experience in version control software, writing scripts to automate tasks, and creating effective test cases to identify bugs. Tracing and debugging strategies are discussed. Students also gain experience in using built-in support for version control, testing, debugging, build automation, etc. in integrated development environments (IDEs).",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 90% in each of the following: CS115 - Introduction to Computer Science 1 (0.50) Earned a minimum grade of 70% in each of the following: CS116 - Introduction to Computer Science 2 (0.50) Earned a minimum grade of 60% in at least 1 of the following: CS135 - Designing Functional Programs (0.50)",
  },
  {
    code: "CS146",
    name: "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
    subject: "CS",
    level: 100,
    description: "CS146 is an advanced-level version of CS136.",
    prerequisiteRawText:
      "Earned a minimum grade of 75% in each of the following: CS145 - Designing Functional Programs (Advanced Level) (0.50)",
  },
  {
    code: "CS200",
    name: "Concepts for Advanced Computer Usage",
    subject: "CS",
    level: 200,
    description:
      "Important concepts underlying major personal computer application categories; methodologies for learning and evaluating software; operating system and hardware design from the user's point of view, with implications for maintaining a personal computer. Students are encouraged to use their own personal computer for assignments. Social media and the effect of technology on society are explored throughout the course.",
  },
  {
    code: "CS230",
    name: "Introduction to Computers and Computer Systems",
    subject: "CS",
    level: 200,
    description:
      "Basic computer architecture, organization, system services, and software. Typology of processors, memory, I/O devices, and their performance.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50)",
  },
  {
    code: "CS231",
    name: "Algorithmic Problem Solving",
    subject: "CS",
    level: 200,
    description:
      "The study of the steps required to solve real-world problems on a computer, including problem specification, choice of algorithmic paradigm, analysis, and implementation. Topics include exhaustive search, divide and conquer, greedy, and dynamic programming approaches.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)",
  },
  {
    code: "CS234",
    name: "Data Types and Structures",
    subject: "CS",
    level: 200,
    description:
      "Top-down design of data structures. Using representation-independent data types. Introduction to commonly used data types, including lists, sets, mappings, and trees. Selection of data representation.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50)",
  },
  {
    code: "CS245",
    name: "Logic and Computation",
    subject: "CS",
    level: 200,
    description:
      "Logic as a tool for representation, reasoning, and computation. Propositional and predicate logic. Formalizing the notions of correct and incorrect reasoning, defining what is computable, and exploring the limits of computation. Godel's Incompleteness Theorem. Applications of logic to computer science.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "CS245E",
    name: "Logic and Computation (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS245.",
    prerequisiteRawText:
      "Complete all of the following Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "CS246",
    name: "Object-Oriented Software Development",
    subject: "CS",
    level: 200,
    description:
      "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS138 - Introduction to Data Abstraction and Implementation (0.50) Complete all of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) Earned a minimum grade of 60% in each of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "CS246E",
    name: "Object-Oriented Software Development (Enriched)",
    subject: "CS",
    level: 200,
    description: "Enriched version of CS246.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS136L - Tools and Techniques for Software Development (0.25) Earned a minimum grade of 85% in at least 1 of the following: CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "CS330",
    name: "Management Information Systems",
    subject: "CS",
    level: 300,
    description:
      "An introduction to information systems and their strategic role in business. Topics include types of information systems, organizational requirements, systems development strategies, decision support systems, data and information management, and information systems management, control, and implementation.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS106 - Introduction to Computer Programming 2 (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Students must be in level 2B or higher",
  },
  {
    code: "CS335",
    name: "Computational Methods in Business and Finance",
    subject: "CS",
    level: 300,
    description:
      "An introduction to numerical methods for business and finance. Floating-point arithmetic, interpolation. Methods for portfolio optimization and contingent-claims valuation. Solution of nonlinear equations. Monte Carlo methods, lattice methods, simulation of hedging strategies.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH106 - Applied Linear Algebra 1 (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "CS338",
    name: "Computer Applications in Business: Databases",
    subject: "CS",
    level: 300,
    description:
      "A user-oriented approach to the management of large collections of data. Methods used for the storage, selection, and presentation of data. Common database management systems.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS330 - Management Information Systems (0.50) Complete all of the following Must have completed the following: AFM341 - Accounting Information Systems (0.50) Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50)",
  },
  {
    code: "CS341",
    name: "Algorithms",
    subject: "CS",
    level: 300,
    description:
      "The study of efficient algorithms and effective algorithm design techniques. Program design with emphasis on pragmatic and mathematical aspects of program efficiency. Topics include divide and conquer algorithms, recurrences, greedy algorithms, dynamic programming, graph search and backtrack, problems without algorithms, NP-completeness and its implications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Must have completed at least 1 of the following: CS245 - Logic and Computation (0.50) CS245E - Logic and Computation (Enriched) (0.50) SE212 - Logic and Computation (0.50) Must have completed at least 1 of the following: MATH239 - Introduction to Combinatorics (0.50) MATH249 - Introduction to Combinatorics (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering",
  },
  {
    code: "CS370",
    name: "Numerical Computation",
    subject: "CS",
    level: 300,
    description:
      "Principles and practices of basic numerical computation as a key aspect of scientific computation. Visualization of results. Approximation by splines, fast Fourier transforms, solution of linear and nonlinear equations, differential equations, floating point number systems, error, stability. Presented in the context of specific applications to image processing, analysis of data, scientific modelling.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS241 - Foundations of Sequential Programs (0.50) CS241E - Foundations of Sequential Programs (Enriched) (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50)",
  },
  {
    code: "CS371",
    name: "Introduction to Computational Mathematics",
    subject: "CS",
    level: 300,
    description:
      "A rigorous introduction to the field of computational mathematics. The focus is on the interplay between continuous models and their solution via discrete processes. Topics include pitfalls in computation, solution of linear systems, interpolation, discrete Fourier transforms, and numerical integration. Applications are used as motivation.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Complete all of the following Must have completed at least 1 of the following: CS115 - Introduction to Computer Science 1 (0.50) CS135 - Designing Functional Programs (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: CS114 - Principles of Computing for Science (0.50) Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "CS430",
    name: "Applications Software Engineering",
    subject: "CS",
    level: 400,
    description:
      "An investigation into the role and function of software engineering practice in the construction of computer based systems. Topics include: requirements and specification; documentation techniques; analysis and design; implementation; testing and maintenance; management issues.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS330 - Management Information Systems (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CS431",
    name: "Data-Intensive Distributed Analytics",
    subject: "CS",
    level: 400,
    description:
      "Introduces non-CS major students to infrastructure for data-intensive analytics, with a focus on abstractions, frameworks, and algorithms that allow developers to distribute computation across many machines. Topics include core concepts (partitioning, replication, locality, consistency), computational models (MapReduce, dataflows, stream processing, bulk-synchronous parallel), and applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS251 - Computer Organization and Design (0.50) CS251E - Computer Organization and Design (Enriched) (0.50) Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS341 - Algorithms (0.50)",
  },
  {
    code: "CS436",
    name: "Networks and Distributed Computer Systems",
    subject: "CS",
    level: 400,
    description:
      "An introduction to networks, protocols, and distributed systems. Layered models, resource management, naming, addressing and routing, reliable communication, security, and higher-level services.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: CS230 - Introduction to Computers and Computer Systems (0.50) CS241 - Foundations of Sequential Programs (0.50) CS241E - Foundations of Sequential Programs (Enriched) (0.50) CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS251 - Computer Organization and Design (0.50) CS251E - Computer Organization and Design (Enriched) (0.50)",
  },
  {
    code: "CS451",
    name: "Data-Intensive Distributed Computing",
    subject: "CS",
    level: 400,
    description:
      "Introduces students to infrastructure for data-intensive computing, with a focus on abstractions, frameworks, and algorithms that allow developers to distribute computations across many machines. Topics include core concepts (partitioning, replication, locality, consistency), computational models (MapReduce, dataflows, stream processing, bulk-synchronous parallel), and applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) CS348 - Introduction to Database Management (0.50) Must have completed at least 1 of the following: CS350 - Operating Systems (0.50) SE350 - Operating Systems (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering",
  },
  {
    code: "CS457",
    name: "System Performance Evaluation",
    subject: "CS",
    level: 400,
    description:
      "Basic techniques of system performance evaluation. Specific topics include performance modelling, discrete event simulation, verification and validation of simulation models, analysis of simulation output, analysis of single server queue and queueing networks, modelling of computer systems, networks, and other queueing or non-queueing systems.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS246 - Object-Oriented Software Development (0.50) CS246E - Object-Oriented Software Development (Enriched) (0.50) CS247 - Software Engineering Principles (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering",
  },
  {
    code: "CS462",
    name: "Formal Languages and Parsing",
    subject: "CS",
    level: 400,
    description:
      "Languages and their representations. Grammars --Chomsky hierarchy. Regular sets and sequential machines. Context-free grammars -- normal forms, basic properties. Pushdown automata and transducers. Operations on languages. Undecidable problems in language theory. Applications to the design of programming languages and compiler construction.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS360 - Introduction to the Theory of Computing (0.50) CS365 - Models of Computation (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering",
  },
  {
    code: "CS466",
    name: "Algorithm Design and Analysis",
    subject: "CS",
    level: 400,
    description:
      "Algorithmic approaches and methods of assessment that reflect a broad spectrum of criteria, including randomized algorithms, amortized analysis, lower bounds, approximation algorithms, and on-line algorithms. Particular examples will be chosen from different areas of active research and application.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering",
  },
  {
    code: "CS467",
    name: "Introduction to Quantum Information Processing",
    subject: "CS",
    level: 400,
    description:
      "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText:
      "Complete all of the following Earned a minimum grade of 80% in at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Students must be in level 3A or higher",
  },
  {
    code: "CS475",
    name: "Computational Linear Algebra",
    subject: "CS",
    level: 400,
    description:
      "Basic concepts and implementation of numerical linear algebra techniques and their use in solving application problems. Special methods for solving linear systems having special features. Direct methods: symmetric, positive definite, band, general sparse structures, ordering methods. Iterative methods: Jacobi, Gauss-Seidel, SOR, conjugate gradient. Computing and using orthogonal factorizations of matrices. QR and SVD methods for solving least squares problems. Eigenvalue and singular value decompositions. Computation and uses of these decompositions in practice.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50)",
  },
  {
    code: "CS476",
    name: "Numerical Computation for Financial Modelling",
    subject: "CS",
    level: 400,
    description:
      "The interaction of financial models, numerical methods, and computing environments. Basic computational aspects of option pricing and hedging. Numerical methods for stochastic differential equations, strong and weak convergence. Generating correlated random numbers. Time-stepping methods. Finite difference methods for the Black-Scholes equation. Discretization, stability, convergence. Methods for portfolio optimization, effect of data errors on portfolio weights.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH242 - Introduction to Computational Mathematics (0.50) CS370 - Numerical Computation (0.50) CS371 - Introduction to Computational Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)",
  },
  {
    code: "CS479",
    name: "Neural Networks",
    subject: "CS",
    level: 400,
    description:
      "An introduction to neural network methods, with some discussion of their relation to neuroscience. Simple neuron models and networks of neurons. Training feedforward networks. Backpropagation of errors and stochastic gradient descent. Unsupervised learning methods. Recurrent neural networks. Convolutional neural networks. Continuous time models. Adversarial attacks. Advanced topics may include neural engineering, biologically plausible learning methods.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT206 - Statistics for Software Engineering (0.50)",
  },
  {
    code: "CS480",
    name: "Introduction to Machine Learning",
    subject: "CS",
    level: 400,
    description:
      "Introduction to modelling and algorithmic techniques for machines to learn concepts from data. Generalization: underfitting, overfitting, cross-validation. Tasks: classification, regression, clustering. Optimization-based learning: loss minimization. regularization. Statistical learning: maximum likelihood, Bayesian learning. Algorithms: nearest neighbour, (generalized) linear regression, mixtures of Gaussians, Gaussian processes, kernel methods, support vector machines, deep learning, sequence learning, ensemble techniques. Large scale learning: distributed learning and stream learning. Applications: Natural language processing, computer vision, data mining, human computer interaction, information retrieval.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering",
  },
  {
    code: "CS482",
    name: "Computational Techniques in Biological Sequence Analysis",
    subject: "CS",
    level: 400,
    description:
      "Computer science principles and algorithms in biological sequence analysis. Topics include algorithms for sequence comparison, for large-scale database search in biological databases, for sequence assembly, for evolutionary tree reconstruction, for identifying important features in DNA and RNA sequences, and underlying computational techniques for understanding strings and trees and for making probabilistic inferences.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: STAT206 - Statistics for Software Engineering (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)",
  },
  {
    code: "CS485",
    name: "Statistical and Computational Foundations of Machine Learning",
    subject: "CS",
    level: 400,
    description:
      "Extracting meaningful patterns from random samples of large data sets. Statistical analysis of the resulting problems. Common algorithmic paradigms for such tasks. Central concepts: VC-dimension, margins of a classifier, sparsity and description length, other types of regularization. Performance guarantees: generalization bounds, data dependent error bounds, and computational complexity of learning algorithms. Common paradigms: neural networks, kernel methods and support-vector machines, boosting, nearest neighbor classifiers. Applications to data mining.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Must have completed at least 1 of the following: STAT206 - Statistics for Software Engineering (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering",
  },
  {
    code: "CS486",
    name: "Introduction to Artificial Intelligence",
    subject: "CS",
    level: 400,
    description:
      "Goals and methods of artificial intelligence. Methods of general problem solving. Knowledge representation and reasoning. Planning. Reasoning about uncertainty. Machine learning. Multi-agent systems. Natural language processing.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: CS341 - Algorithms (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , H-Data Science (BMath) , or H-Software Engineering",
  },
  {
    code: "CS487",
    name: "Introduction to Symbolic Computation",
    subject: "CS",
    level: 400,
    description:
      "An introduction to the use of computers for symbolic mathematical computation, involving traditional mathematical computations such as solving linear equations (exactly), analytic differentiation and integration of functions, and analytic solution of differential equations.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS231 - Algorithmic Problem Solving (0.50) CS234 - Data Types and Structures (0.50) CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "CS490",
    name: "Information Systems Management",
    subject: "CS",
    level: 400,
    description:
      "The integration of business and technical considerations in the design, implementation and management of information systems. Topics include: IS planning and development; business, management, executive, and strategic information systems, including case studies of selected large- scale systems; decision support systems; end-user training and development; systems security, disaster planning and recovery. Practical examples of information systems in industry.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS350 - Operating Systems (0.50) SE350 - Operating Systems (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering",
  },
  {
    code: "CS492",
    name: "The Social Implications of Computing",
    subject: "CS",
    level: 400,
    description:
      "This course is designed to consider the problems encountered by individuals, organizations and society as computer technology is adopted, with a view towards assessing possible courses of action.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS240 - Data Structures and Data Management (0.50) CS240E - Data Structures and Data Management (Enriched) (0.50) Enrolled in H-BBA & BCS Double Degree , H-Computer Science (BCS) , H-Computer Science (BMath) , JH-Computer Science (BCS) , JH-Computer Science (BMath) , H-Computing & Financial Management , H-Data Science (BCS) , or H-Software Engineering",
  },
  {
    code: "DATSC401",
    name: "Capstone in Data Science",
    subject: "DATSC",
    level: 400,
    description:
      "This course is the culminating experience of the data science major, designed to integrate and apply the knowledge, skills, and tools students have developed throughout their coursework. Students will address a complex, real-world data science problem from start to finish, defining a research question or business challenge, acquiring and cleaning data, applying appropriate statistical and computational methods, developing models or analytical pipelines, and effectively communicating findings to both technical and non-technical audiences. Emphasis is placed on project management, ethical considerations, reproducibility, and professional presentation. The capstone provides students with an opportunity to demonstrate mastery of the data science process and to produce a portfolio-ready project that showcases their ability to generate actionable insights from data.",
    prerequisiteRawText:
      "Complete all of the following Students must be in level 4A or higher Enrolled in H-Data Science (BMath)",
  },
  {
    code: "EARTH122",
    name: "Introductory Environmental Sciences",
    subject: "EARTH",
    level: 100,
    description:
      "This course presents a broad overview of earth system processes and their influence on humans. Course emphasis is placed on anthropogenic impacts on natural systems, the impacts of geologic, biologic, and atmospheric processes on humans, and the effects of human activities on the environment. Course topics include sustainable development and the availability and use of natural resources, principles of ecology and environmental science, biogeochemical cycles, climate and climate change, soils and food supply, energy systems, surface water and groundwater, waste generation and management, pollution, and catastrophic natural processes.",
  },
  {
    code: "ECON101",
    name: "Introduction to Microeconomics",
    subject: "ECON",
    level: 100,
    description:
      "This course provides an introduction to microeconomic analysis relevant for understanding the Canadian economy. The behaviour of individual consumers and producers, the determination of market prices for commodities and resources, and the role of government policy in the functioning of the market system are the main topics covered.",
  },
  {
    code: "ECON102",
    name: "Introduction to Macroeconomics",
    subject: "ECON",
    level: 100,
    description:
      "This course introduces students to the measurement and behaviour of key macroeconomic variables both in Canada and around the world. Topics include national accounts, inflation, interest rates, wages, international balance of payments, business cycles, growth, employment, unemployment, poverty, and inequality.",
  },
  {
    code: "ECON201",
    name: "Microeconomic Theory for Business and Policy",
    subject: "ECON",
    level: 200,
    description:
      "This course offers an introduction to the theory of market based economies. Topics include consumer choice, production, price and output under perfect and imperfect competition, price discrimination and two part pricing, vertical and horizontal firm boundaries and integration, and market structure.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON101 - Introduction to Microeconomics (0.50) MSE263 - Managerial Economics (0.50) Must have completed the following: ECON120W",
  },
  {
    code: "ECON290",
    name: "Models of Choice in Competitive Markets",
    subject: "ECON",
    level: 200,
    description:
      "Choice lies at the heart of all economic models. This course focuses on choice by consumers and firms. It explains the notion and use of utility functions and budgets, and shows how their interaction allows economists to make predictions about behaviour. The constrained maximization techniques from ECON 211 are used extensively, and extended to situations covering uncertainty (risk) and time. Profit maximization by firms is explored.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: AE221 - Advanced Calculus (0.50) CIVE221 - Advanced Calculus (0.50) ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) ECON211 - Introduction to Mathematical Economics (0.50) GEOE221 - Advanced Calculus (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Must have completed the following: SYDE112 Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON101 - Introduction to Microeconomics (0.50) MSE263 - Managerial Economics (0.50) Must have completed the following: ECON120W Complete 1 of the following Must have completed at least 1 of the following: AE224 - Probability and Statistics (0.50) AFM113 - Analytic Methods for Business 2 (0.50) ARTS280 - Statistics for Arts Students (0.50) BME213 - Statistics and Experimental Design (0.50) CHE220 - Probability and Statistics (0.50) CIVE224 - Probability and Statistics (0.50) ECE203 - Probability Theory and Statistics 1 (0.50) ECON221 - Statistics for Economists (0.50) ENVE224 - Probability and Statistics (0.50) ENVS278 - Applied Statistics for Environmental Research (0.50) GEOE224 - Probability and Statistics (0.50) KIN232 - Research Design and Statistics (0.50) LS280 - Social Statistics (0.50) ME202 - Statistics for Engineers (0.50) MSE251 - Probability and Statistics 1 (0.50) NE215 - Probability and Statistics (0.50) PSCI314 - Quantitative Analysis (0.50) PSYCH292 - Basic Data Analysis (0.50) REC371 - Quantitative Data Analysis and Mobilization (0.50) SDS250R - Social Statistics (0.50) SOC280 - Social Statistics (0.50) SRF230 - Introduction to Statistics (0.50) STAT202 - Introductory Statistics for Scientists (0.50) STAT206 - Statistics for Software Engineering (0.50) STAT211 - Introductory Statistics and Sampling for Accounting (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) SYDE212 - Probability, Statistics, and Data Science (0.50) Must have completed the following: SWREN250R",
  },
  {
    code: "ECON306",
    name: "Macroeconomics",
    subject: "ECON",
    level: 300,
    description:
      "This course introduces students to the analysis of inter-temporal trade-offs in macroeconomics and macroeconomic policy. Its main objective is to show how economists use economic theory to analyze the role of incentives and general equilibrium considerations in the macro-economy. Applications include national savings and investment, business cycles, and monetary and fiscal policy.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON391 - Equilibrium in Market Economies (0.50) Complete 1 of the following Must have completed at least 1 of the following: COMM103 - Principles of Economics (0.50) ECON100 - Principles of Economics (0.50) ECON102 - Introduction to Macroeconomics (0.50) Must have completed the following: ECON140W",
  },
  {
    code: "ECON391",
    name: "Equilibrium in Market Economies",
    subject: "ECON",
    level: 300,
    description:
      "Central to the study of economics is the concept of an equilibrium in which the actions of individuals are not only individually optimal, but are also consistent with each other; such as when the total amount of a good that individuals wish to purchase equals the total amount available. This course introduces students to the notion of equilibrium for a market and market economy. The properties of such equilibria are explored, both in terms of model logic (existence, uniqueness) as well as in terms of the desirability of the equilibrium outcomes (efficiency, welfare). Partial equilibrium (in a single market) as well as general equilibrium (in all markets at once) are covered for models with endowments, production, uncertainty, and time.",
    prerequisiteRawText:
      "Must have completed the following: ECON290 - Models of Choice in Competitive Markets (0.50)",
  },
  {
    code: "ECON393",
    name: "Market Failures",
    subject: "ECON",
    level: 300,
    description:
      'This course explores the many ways in which the assumptions of the perfectly competitive model are violated in the real world, and the consequences of these market failures for consumers and firms. The course examines potential government intervention to "fix" the failures as well as the limits of government intervention. Topics include monopoly/monopsony, externalities, the tragedy of the commons, public goods, asymmetric information, and incomplete information.',
    prerequisiteRawText:
      "Must have completed the following: ECON391 - Equilibrium in Market Economies (0.50)",
  },
  {
    code: "ECON406",
    name: "Money and Banking 2",
    subject: "ECON",
    level: 400,
    description:
      "This course examines the monetary and financial aspects of the macro-economy. It prepares students to conduct analyses of problems and policies in monetary economics. Topics may include analyses of the banking system, financial crises, and monetary policy.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Complete 1 of the following Must have completed the following: ECON323 - Econometric Analysis 2 (0.50) Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "ECON407",
    name: "Economic Growth and Development 2",
    subject: "ECON",
    level: 400,
    description:
      "The goal of this course is to understand the enormous differences in living standards across countries and over time. It uses economic analysis to understand the sources of investment and innovation, and the role of economic, social, and political institutions in economic growth and development.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "ECON408",
    name: "Business Cycles",
    subject: "ECON",
    level: 400,
    description:
      "This course prepares students to conduct analyses of problems and policies associated with macroeconomic fluctuations. It examines the empirical features of business cycles, and discusses how macroeconomic models help to understand business cycles and to assess the consequences of alternative macroeconomic policies.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "ECON409",
    name: "Workers, Jobs, and Wages",
    subject: "ECON",
    level: 400,
    description:
      "This course examines the role of labour markets in the macro-economy. It focuses on the analysis of aggregate employment, unemployment, labour force participation, and earnings inequality. The main goal of the course is to understand current labour-market outcomes both in Canada and around the world.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "ECON472",
    name: "Senior Honours Essay",
    subject: "ECON",
    level: 400,
    description:
      "Students are required to identify a research topic, conduct research independently, write a research paper, and attend class meetings. Each student is supervised by a member of the Economics faculty. Class meetings cover topics such as a general overview of research methods in economics, research ethics, finding reference material, citing practices, and effective writing and presentation.",
    prerequisiteRawText:
      "Complete all of the following Students must be in level 4A or higher Enrolled in H-Economics , H-Mathematical Economics (BA) , or H-Mathematical Economics (BMath)",
  },
  {
    code: "ECON491",
    name: "Advanced Microeconomics",
    subject: "ECON",
    level: 400,
    description:
      "This course prepares students for graduate-level theory courses. Students will be exposed to a selection of topics treated with the mathematical rigour required for graduate work.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON393 - Market Failures (0.50) Enrolled in an Honours program",
  },
  {
    code: "ECON496",
    name: "Advanced Macroeconomics",
    subject: "ECON",
    level: 400,
    description:
      "This course provides students with the methodological principles that underlie modern analyses of the macro-economy, and to prepare students for graduate-level macroeconomic theory courses.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: ECON306 - Macroeconomics (0.50) ECON393 - Market Failures (0.50) Must have completed at least 1 of the following: ECON323 - Econometric Analysis 2 (0.50) STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Enrolled in an Honours program",
  },
  {
    code: "ENGL109",
    name: "Calculus 2 for the Sciences",
    subject: "ENGL",
    level: 100,
  },
  {
    code: "ENGL119",
    name: "Calculus 2 for the Sciences",
    subject: "ENGL",
    level: 100,
  },
  {
    code: "ENGL193",
    name: "Communication in the Sciences",
    subject: "ENGL",
    level: 100,
    description:
      "In this course students will enhance oral and written communication competencies in contexts relevant to the life sciences and physical sciences.",
    prerequisiteRawText:
      "Complete 1 of the following Enrolled in H-Science & Financial Management Enrolled in a Bachelor of Science program in the Faculty of Science",
  },
  {
    code: "ENGL378",
    name: "Professional Communications in Statistics and Actuarial Science",
    subject: "ENGL",
    level: 300,
    description:
      "This course introduces students to oral and written communication in the fields of statistics and actuarial science. With emphasis on the public presentation of technical knowledge, the ability to give and receive constructive feedback, and communication in a collaborative environment, this course helps students develop proficiencies in critical workplace skills. This course is writing intensive and includes extensive collaborative assignments.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: ACTSC331 - Life Contingencies 2 (0.50) STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) Complete 1 of the following Earned a minimum grade of 70% in at least 1 of the following: COMMST100 - Interpersonal Communication (0.50) COMMST223 - Public Speaking (0.50) EMLS101 - Oral Communications for Academic Purposes (0.50) EMLS102 - Clear Communication in English Writing (0.50) EMLS129 - Written Academic English (0.50) ENGL109 - Introduction to Academic Writing (0.50) ENGL129 - Written Academic English (0.50) Earned a minimum grade of 70% in at least 1 of the following: EMLS101R, EMLS102R, EMLS129R Enrolled in H-Actuarial Science , JH-Actuarial Science , H-Biostatistics , H-Data Science (BMath) , H-Data Science (BCS) , H-Statistics , or JH-Statistics",
  },
  {
    code: "HLTH101",
    name: "Introduction to Health 1",
    subject: "HLTH",
    level: 100,
    description:
      "This course will be of interest to students pursuing careers in health and those with a general interest in health and health care. Various perspectives of the concepts of health and illness will be introduced. Emphasis is on understanding the origins, factors and conditions that determine health throughout the lifespan, how these factors influence one another and the role/impact of health care. Additional topics include how health is measured, the leading causes of death, illness and disability, as well as how health status has changed throughout history. Students will also learn how to research and critically analyze the health literature and discuss important health issues with their peers.",
  },
  {
    code: "LS271",
    name: "Conflict Resolution",
    subject: "LS",
    level: 200,
    description:
      "An examination of the resolution of conflicts, ranging from interpersonal to broader social and international conflicts. Students are introduced to negotiation, mediation, and nonviolent resistance, and are encouraged to develop their own theoretical understandings that aid in addressing conflict.",
  },
  {
    code: "LS283",
    name: "Business Law",
    subject: "LS",
    level: 200,
    description:
      "Particular attention is given to the law relating to contracts and business organizations. Other areas of study include sources of law, the judicial process, real and personal property, torts, agency, credit, and negotiable instruments.",
  },
  {
    code: "LS319",
    name: "Negotiation: Theories and Strategies",
    subject: "LS",
    level: 300,
    description:
      "This course explores different ways of negotiating between people and groups with conflicting interests. Students will learn the theory behind the strategies and develop practical negotiation skills you can put to use in your daily life at home, at work, and in the community.",
  },
  {
    code: "MATH128",
    name: "Calculus 2 for the Sciences",
    subject: "MATH",
    level: 100,
    description:
      "A second calculus course for science students that appears in some Mathematics prerequisites.",
    antirequisites: ["MATH138", "MATH148"],
  },
  {
    code: "MATH135",
    name: "Algebra for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description:
      "An introduction to the language of mathematics and proof techniques through a study of the basic algebraic systems of mathematics: the integers, the integers modulo n, the rational numbers, the real numbers, the complex numbers and polynomials.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: 4U Calculus and Vectors, 4U Mathematics of Data Management Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) , or H-Software Engineering Enrolled in an Honours Mathematics program or Mathematics/BASE",
  },
  {
    code: "MATH136",
    name: "Linear Algebra 1 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description:
      "Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations, and matrix representations. Determinants, eigenvalues and diagonalization, applications.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program or Mathematics/BASE",
  },
  {
    code: "MATH145",
    name: "Algebra (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced algebra for first-year honours mathematics students.",
    antirequisites: ["MATH135"],
  },
  {
    code: "MATH146",
    name: "Linear Algebra 1 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced linear algebra for honours mathematics students.",
    prerequisiteRawText: "MATH145.",
    prerequisite: { type: "course", courseCode: "MATH145" },
    antirequisites: ["MATH136"],
  },
  {
    code: "MATH137",
    name: "Calculus 1 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description:
      "Absolute values and inequalities. Sequences and their limits. Limits of functions and continuity. The Intermediate Value theorem and approximate solutions to equations. Derivatives, linear approximation, and Newton's method. Applications of derivatives. The Mean Value theorem and error bounds. Applications of the Mean Value theorem. Suitable topics are illustrated using computer software.",
    prerequisiteRawText:
      "Must have completed the following: 4U Calculus and Vectors",
    antirequisites: ["MATH147"],
  },
  {
    code: "MATH147",
    name: "Calculus 1 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced calculus for first-year honours mathematics students.",
    antirequisites: ["MATH137"],
  },
  {
    code: "MATH138",
    name: "Calculus 2 for Honours Mathematics",
    subject: "MATH",
    level: 100,
    description:
      "Introduction to the Riemann integral and approximations. Antiderivatives and the fundamental theorem of calculus. Change of variables, methods of integration. Applications of the integral. Improper integrals. Linear and separable differential equations and applications. Tests for convergence for series. Taylor polynomials and Taylor's Theorem, Big-O notation. Binomial series, functions defined as power series and Taylor series. Suitable topics are illustrated using computer software.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: MATH147 - Calculus 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH127 - Calculus 1 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH137 - Calculus 1 for Honours Mathematics (0.50)",
    prerequisite: {
      type: "anyOf",
      requirements: [
        { type: "course", courseCode: "MATH137", minGrade: 60 },
        { type: "course", courseCode: "MATH147" },
      ],
    },
  },
  {
    code: "MATH148",
    name: "Calculus 2 (Advanced Level)",
    subject: "MATH",
    level: 100,
    description: "Advanced integral calculus and series.",
    prerequisiteRawText: "MATH147.",
    prerequisite: { type: "course", courseCode: "MATH147" },
    antirequisites: ["MATH128", "MATH138"],
  },
  {
    code: "MATH237",
    name: "Calculus 3 for Honours Mathematics",
    subject: "MATH",
    level: 200,
    description:
      "Calculus of functions of several variables. Limits, continuity, differentiability, the chain rule. The gradient vector and the directional derivative. Taylor's formula. Optimization problems. Mappings and the Jacobian. Multiple integrals in various co-ordinate systems.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            { type: "course", courseCode: "MATH136" },
            { type: "course", courseCode: "MATH146" },
          ],
        },
        {
          type: "anyOf",
          requirements: [
            { type: "course", courseCode: "MATH128", minGrade: 70 },
            { type: "course", courseCode: "MATH138", minGrade: 60 },
            { type: "course", courseCode: "MATH148" },
          ],
        },
      ],
    },
  },
  {
    code: "MATH239",
    name: "Introduction to Combinatorics",
    subject: "MATH",
    level: 200,
    description:
      "Introduction to graph theory: colourings, matchings, connectivity, planarity. Introduction to combinatorial analysis: generating series, recurrence relations, binary strings, plane trees.",
    prerequisiteRawText:
      "Complete 1 of the following Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH106 - Applied Linear Algebra 1 (0.50) Complete 1 of the following Enrolled in H-Computing & Financial Management Enrolled in an Honours Mathematics program Complete all of the following Students must be in level 2A or higher Enrolled in H-Software Engineering",
  },
  {
    code: "MATH247",
    name: "Calculus 3 (Advanced Level)",
    subject: "MATH",
    level: 200,
    description:
      "Topology of real n-dimensional space: completeness, closed and open sets, connectivity, compact sets, continuity, uniform continuity. Differential calculus on multivariable functions: partial differentiability, differentiability, chain rule, Taylor polynomials, extreme value problems. Riemann integration: Jordan content, integrability criteria, Fubini's theorem, change of variables. Local properties of continuously differentiable functions: open mapping theorem, inverse function theorem, implicit function theorem.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Enrolled in Honours Mathematics",
  },
  {
    code: "MATH249",
    name: "Introduction to Combinatorics (Advanced Level)",
    subject: "MATH",
    level: 200,
    description: "MATH249 is an advanced-level version of MATH239.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: MATH145 - Algebra (Advanced Level) (0.50) Earned a minimum grade of 80% in each of the following: MATH135 - Algebra for Honours Mathematics (0.50) Must have completed at least 1 of the following: MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) Enrolled in an Honours Mathematics program",
  },
  {
    code: "MGMT244",
    name: "Principles of Marketing",
    subject: "MGMT",
    level: 200,
    description:
      "This course is designed to provide a broad understanding of the field of marketing, including consumer behaviour, segmentation, targeting, positioning, branding, and the marketing mix. Students will gain an understanding of how organizations identify the needs of potential consumers and create and deliver value to these consumers through the marketing process.",
    prerequisiteRawText: "Students must be in level 2B or higher",
  },
  {
    code: "MSE211",
    name: "Organizational Behaviour",
    subject: "MSE",
    level: 200,
    description:
      "Introduction to the concepts of learning, person perception, attitudes, and motivation in an organization. Consideration of communication, roles, norms, and decision making within a group. Discussion of power, control, leadership, and management in light of the above concepts.",
  },
  {
    code: "MSE311",
    name: "Organizational Design and Technology",
    subject: "MSE",
    level: 300,
    description:
      "The focus of this course is on the procedures and variables involved in the design and redesign of organizations. Issues such as departmentation, differentiation, integration, internal politics, innovation, authority, and control are discussed in the context of the underlying technology of the organization. Emphasis will be placed on how one designs both the technical and the organizational systems to ensure their compatibility, noting the effects that one has on the other.",
  },
  {
    code: "MTHEL131",
    name: "Introduction to Actuarial Practice",
    subject: "MTHEL",
    level: 100,
    description:
      "Individual life insurance products. Introduction to property and casualty insurance. Introductory risk management, insurance pricing and valuation. Pension plan design.",
    prerequisiteRawText:
      "Must have completed the following: 4U Calculus and Vectors",
  },
  {
    code: "MTHEL206",
    name: "Introduction to Mathematics Education",
    subject: "MTHEL",
    level: 200,
    description:
      "Current trends in education, professional practices and administration, the role of the department head, lesson planning, techniques of teaching, evaluation of students, special students, extracurricular activities, the relationship between elementary and secondary school mathematics, audio-visual materials.",
    prerequisiteRawText: "Enrolled in H-Mathematics/Teaching",
  },
  {
    code: "PACS202",
    name: "Conflict Resolution",
    subject: "PACS",
    level: 200,
    description:
      "An examination of the resolution of conflicts, ranging from interpersonal to broader social and international conflicts. Students are introduced to negotiation, mediation, and nonviolent resistance, and are encouraged to develop their own theoretical understandings that aid in addressing conflict.",
  },
  {
    code: "PACS323",
    name: "Negotiation: Theories and Strategies",
    subject: "PACS",
    level: 300,
    description:
      "This course explores different ways of negotiating between people and groups with conflicting interests. Students will learn the theory behind the strategies and develop practical negotiation skills you can put to use in your daily life at home, at work, and in the community.",
    prerequisiteRawText:
      "Complete 1 of the following Students must be in level 2A or higher Enrolled in Peace & Conflict Studies Diploma",
  },
  {
    code: "PHIL228",
    name: "Ethics and Artificial Intelligence",
    subject: "PHIL",
    level: 200,
    description:
      "Students will explore ethical issues related to recent developments in artificial intelligence (AI) and machine learning, as increasingly sophisticated computer programs have come to replace human beings in some socially important roles. Students will critically examine and actively debate issues regarding AI, including whether artificial systems can engage in moral reasoning and whether they might be considered persons. We will also explore more limited technologies that already exist, and are in use in domains such as finance, marketing, and surveillance. No previous technical knowledge is required; students will develop a basic knowledge of how AI works so that we can critically explore issues at the intersection of ethics, justice, and emerging technologies, especially as these technologies reinforce or challenge our conceptions of race, gender, class, and ability. Students can expect to develop critical reading, argumentation, writing, and communication skills as they grapple with these topics.",
  },
  {
    code: "PHYS121",
    name: "Mechanics",
    subject: "PHYS",
    level: 100,
    description:
      "An introductory calculus-based course in physics for students intending to concentrate their future studies in the physical sciences or mathematics; includes vectors (dot and cross products), particle kinematics and dynamics, forces in nature, work and energy, conservation of energy and linear momentum, rotational kinematics and dynamics, and conservation of angular momentum.",
    prerequisiteRawText:
      "Must have completed the following: 4U Calculus and Vectors, 4U Advanced Functions, and 4U Physics",
  },
  {
    code: "PHYS122",
    name: "Electricity and Magnetism",
    subject: "PHYS",
    level: 100,
    description:
      "An introductory course in electricity and magnetism for students intending to concentrate their future studies in the physical sciences or mathematics. Concepts include electrostatic force and potential, electric current and power, capacitors, DC circuits, magnetic force and fields, and Faraday’s Law.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) ECE105 - Classical Mechanics (0.50) PHYS115 - Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50)",
  },
  {
    code: "PHYS223",
    name: "Waves",
    subject: "PHYS",
    level: 200,
    description:
      "An introductory course in oscillations and waves and their importance to a wide variety of modern physics topics. Concepts include simple harmonic motion, resonance, damped harmonic motion, wave motion and interference, wave optics and diffraction, quantum mechanics.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) ECE105 - Classical Mechanics (0.50) PHYS115 - Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50) Must have completed at least 1 of the following: ECE205 - Advanced Calculus 1 for Electrical and Computer Engineers (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50)",
  },
  {
    code: "PHYS234",
    name: "Quantum Physics 1",
    subject: "PHYS",
    level: 200,
    description:
      "Background of quantum physics. Introduction to formalism of quantum physics. Introduction to operators. Quantization, waves, and particles. Spins and Dirac notation. The uncertainty principle. The Schroedinger equation for one-dimensional problems: bound states in square wells, harmonic oscillator, transmission through barriers.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: PHYS223 - Waves (0.50) Must have completed the following: PHYS122 (taken prior to fall 2026) Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) PHYS249 - Linear Algebra for Physics and Astronomy (0.50) Must have completed at least 1 of the following: MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "PHYS242",
    name: "Electricity and Magnetism 1",
    subject: "PHYS",
    level: 200,
    description:
      "Review of vector calculus. Electrostatic field in vacuum, Coulomb's law and the superposition principle, Maxwell's equations for the electrostatic field, electrostatic potential, magnetostatic field in vacuum, Maxwell's equations for the magnetostatic field, Biot-Savart law, vector potential, inductance.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: PHYS122 - Electricity and Magnetism (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Complete all of the following Must have completed the following: AMATH231 - Calculus 4 (0.50) AMATH231 can be taken concurrently",
  },
  {
    code: "PHYS342",
    name: "Electricity and Magnetism 2",
    subject: "PHYS",
    level: 300,
    description:
      "Electric and magnetic fields in media, auxiliary fields, Maxwell's equations, electromagnetic waves, electric and magnetic properties of matter.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: PHYS242 - Electricity and Magnetism 1 (0.50) Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50)",
  },
  {
    code: "PHYS357",
    name: "Statistical Mechanics and Thermodynamics",
    subject: "PHYS",
    level: 300,
    description:
      "Temperature and thermodynamic equilibrium. Work, internal energy, heat. First law. Kinetic theory of gases and the Maxwell-Boltzmann distribution. Absolute temperature, reversibility, entropy and the second law. Thermodynamic potentials and Maxwell's relations. Phase transitions. Third Law. Fundamental principles of statistical mechanics including the microcanonical and canonical ensembles.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: ECE206 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH212 - Advanced Calculus 2 for Electrical Engineers (0.50) MATH217 - Calculus 3 for Chemical Engineering (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) NE217 - Advanced Calculus and Numerical Methods 2 (0.50) Must have completed at least 1 of the following: PHYS267 - Probability, Statistics, and Data Analysis for Physics and Astronomy (0.50) STAT220 - Probability (Non-Specialist Level) (0.50) STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS121 - Mechanics (0.50) Earned a minimum grade of 80% in each of the following: PHYS111 - Physics 1 (0.50)",
  },
  {
    code: "PHYS359",
    name: "Statistical Mechanics",
    subject: "PHYS",
    level: 300,
    description:
      "Fundamental postulate of statistical thermodynamics. Entropy. Microcanonical, canonical, and grand canonical ensembles. Fermi-Dirac, Bose-Einstein, and Boltzmann Statistics. Maxwell-Boltzmann velocity distribution. Applications to specific heat of solids, classical and quantum gases, electrons in metals, Planck's law of radiation, and Bose-Einstein condensation.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CHEM254 - Introductory Chemical Thermodynamics (0.50) ECE403 - Thermal Physics (0.50) ME250 - Thermodynamics 1 (0.50) PHYS358 - Thermal Physics (0.50) Complete 1 of the following Must have completed at least 1 of the following: CHEM356 - Introductory Quantum Mechanics (0.50) PHYS233 - Introduction to Quantum Mechanics (0.50) PHYS234 - Quantum Physics 1 (0.50) See corequisite Complete 1 of the following Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed the following: PHYS236",
  },
  {
    code: "PHYS363",
    name: "Intermediate Classical Mechanics",
    subject: "PHYS",
    level: 300,
    description:
      "Non-inertial frames of reference. Calculus of variations. Lagrangian mechanics. Coupled oscillations and normal modes. Hamiltonian dynamics.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH250 - Introduction to Differential Equations (0.50) AMATH251 - Introduction to Differential Equations (Advanced Level) (0.50) MATH228 - Differential Equations for Physics and Chemistry (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Complete 1 of the following Must have completed at least 1 of the following: CS114 - Principles of Computing for Science (0.50) CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS146 - Elementary Algorithm Design and Data Abstraction (Advanced Level) (0.50) Must have completed the following: PHYS236 Must have completed at least 1 of the following: MATH227 - Calculus 3 for Honours Physics (0.50) MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "PHYS380",
    name: "Molecular and Cellular Biophysics",
    subject: "PHYS",
    level: 300,
    description:
      "Cell structure and molecular composition; intermolecular interactions and hydration; protein structure and function; cytoskeletal filaments; DNA structure, packing and chromosomes; rate equations and biological dynamics (e.g., cytoskeletal polymerization); self-assembly; cell membranes; action potentials and biological electricity; molecular motors; cell motility.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: PHYS112 - Physics 2 (0.50) PHYS122 - Electricity and Magnetism (0.50) Must have completed at least 1 of the following: CHEM123 - General Chemistry 2 (0.50) CHEM125 - Chemical Reactions, Equilibria and Kinetics (0.50)",
  },
  {
    code: "PHYS444",
    name: "Subatomic Physics",
    subject: "PHYS",
    level: 400,
    description:
      "An introduction to modern particle and nuclear physics. Topics covered include symmetries, particle classification, experimental methods and tools, scattering, fundamental forces, and interactions. Other topics may include structure of the nucleus, structure of nucleons, proton decay, the Standard Model, and the Higgs mechanism.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: PHYS363 - Intermediate Classical Mechanics (0.50) Must have completed at least 1 of the following: AMATH373 - Quantum Theory 1 (0.50) PHYS334 - Quantum Physics 2 (0.50) Complete 1 of the following Complete all of the following Must have completed the following: AMATH351 - Ordinary Differential Equations (0.50) AMATH353 - Partial Differential Equations 1 (0.50) Must have completed at least 1 of the following: AMATH332 - Applied Complex Analysis (0.50) PMATH332 - Applied Complex Analysis (0.50) Must have completed the following: PHYS364 - Mathematical Physics 1 (0.50) PHYS365 - Mathematical Physics 2 (0.50)",
  },
  {
    code: "PHYS467",
    name: "Introduction to Quantum Information Processing",
    subject: "PHYS",
    level: 400,
    description:
      "Basics of computational complexity; basics of quantum information; quantum phenomena; quantum circuits and universality; relationship between quantum and classical complexity classes; simple quantum algorithms; quantum Fourier transform; Shor factoring algorithm; Grover search algorithm; physical realization of quantum computation; error-correction and fault-tolerance; quantum key distribution.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) PHYS334 - Quantum Physics 2 (0.50) Students must be in level 3A or higher",
  },
  {
    code: "PHYS474",
    name: "Galaxies",
    subject: "PHYS",
    level: 400,
    description:
      "Galaxy structure, formation and evolution. Dynamics and stellar populations; gas and dust; supermassive black holes; large-scale structure.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: PHYS375 - Stars (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in a program in Faculties of Mathematics or Science",
  },
  {
    code: "PHYS476",
    name: "Introduction to General Relativity",
    subject: "PHYS",
    level: 400,
    description:
      "Tensor analysis. Curved space-time and the Einstein field equations. The Schwarzschild solution and applications. The Friedmann-Robertson-Walker cosmological models.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: AMATH231 - Calculus 4 (0.50) MATH227 - Calculus 3 for Honours Physics (0.50) Must have completed at least 1 of the following: AMATH271 - Introduction to Theoretical Mechanics (0.50) PHYS263 - Classical Mechanics and Special Relativity (0.50) Students must be in level 4A or higher Enrolled in a program offered by the Faculties of Mathematics or Science",
  },
  {
    code: "PMATH320",
    name: "Euclidean Geometry",
    subject: "PMATH",
    level: 300,
    description:
      "Euclid's axioms, triangle centres, conic sections, compass-and-straightedge constructions, isometries of the Euclidean plane and of Euclidean space, regular and star-shaped polygons, tessellations of the Euclidean plane, regular and quasi-regular polyhedra, symmetries of polygons and polyhedra, four-dimensional polytopes, sphere packings, and the kissing problem. Applications.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH215 - Linear Algebra for Engineering (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH124 - Calculus and Vector Algebra for Kinesiology (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Must have completed the following: MATH109",
  },
  {
    code: "PMATH321",
    name: "Non-Euclidean Geometry",
    subject: "PMATH",
    level: 300,
    description:
      "An introduction to three types of non-Euclidean geometry: spherical, projective, and hyperbolic geometry. Lines, distances, circles, triangles, and areas in these non-Euclidean spaces. Conic sections in the projective plane. Inversions and orthogonal circles. Models of the hyperbolic plane (such as the Poincaré disc model or the upper-half plane model). Tilings of the hyperbolic plane.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH106 - Applied Linear Algebra 1 (0.50) MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH215 - Linear Algebra for Engineering (0.50) NE112 - Linear Algebra for Nanotechnology Engineers (0.50) Complete 1 of the following Must have completed at least 1 of the following: MATH104 - Introductory Calculus for Arts and Social Science (0.50) MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH124 - Calculus and Vector Algebra for Kinesiology (0.50) MATH127 - Calculus 1 for the Sciences (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Must have completed the following: MATH109",
  },
  {
    code: "PMATH330",
    name: "Introduction to Mathematical Logic",
    subject: "PMATH",
    level: 300,
    description:
      "A broad introduction to mathematical logic. The notions of logical consequence and derivation are introduced in the settings of propositional and first order logic, with discussions of the completeness theorem and satisfiability",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH331",
    name: "Applied Real Analysis",
    subject: "PMATH",
    level: 300,
    description:
      "Topology of Euclidean spaces, continuity, norms, completeness. Contraction mapping principle. Fourier series. Various applications, for example, to ordinary differential equations, optimization and numerical approximation.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH332",
    name: "Applied Complex Analysis",
    subject: "PMATH",
    level: 300,
    description:
      "Complex numbers, Cauchy-Riemann equations, analytic functions, conformal maps and applications to the solution of Laplace's equation, contour integrals, Cauchy integral formula, Taylor and Laurent expansions, residue calculus and applications.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH333",
    name: "Introduction to Real Analysis",
    subject: "PMATH",
    level: 300,
    description:
      "This course is designed to enable students who did not take the MATH147/MATH148/MATH247 sequence of advanced calculus courses to fill in the missing gaps from analysis needed to prepare them for studying further topics in analysis in PMATH351/PMATH352. Topics discussed include: completeness of the real numbers, supremum and infimum, sequences and the Bolzano-Weierstrass theorem; the topology of Euclidean space: open, closed, connected, and compact sets, the intermediate value theorem, the Heine-Borel theorem, and the extreme value theorem; continuity and uniform continuity, sequences of functions and uniform convergence; the Riemann integral over rectangles and the integrability of continuous functions.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 60% in each of the following: MATH138 - Calculus 2 for Honours Mathematics (0.50)",
  },
  {
    code: "PMATH334",
    name: "Introduction to Rings and Fields with Applications",
    subject: "PMATH",
    level: 300,
    description:
      "Rings, ideals, factor rings, homomorphisms, finite and infinite fields, polynomials and roots, field extensions, algebraic numbers, and applications, for example, to Latin squares, finite geometries, geometrical constructions, error-correcting codes.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH336",
    name: "Introduction to Group Theory with Applications",
    subject: "PMATH",
    level: 300,
    description:
      "Groups, permutation groups, subgroups, homomorphisms, symmetry groups in two and three dimensions, direct products, Polya-Burnside enumeration.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH340",
    name: "Elementary Number Theory",
    subject: "PMATH",
    level: 300,
    description:
      "An elementary approach to the theory of numbers; the Euclidean algorithm, congruence equations, multiplicative functions, solutions to Diophantine equations, continued fractions, and rational approximations to real numbers.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH135 - Algebra for Honours Mathematics (0.50) MATH145 - Algebra (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50)",
  },
  {
    code: "PMATH343",
    name: "Introduction to the Mathematics of Quantum Information",
    subject: "PMATH",
    level: 300,
    description:
      "Finite dimensional Hilbert spaces. Unitary operators and evolution of closed systems. Hermitian and positive operators, observables, measurements, and the uncertainty principle. Tensor products, entanglement, and Bell inequalities. Superdense coding, teleportation, and the no-cloning theorem. Ensembles of states, density matrices, and the partial trace. Quantum channels, the Choi-Jamiolkowski isomorphism, and the Choi-Krauss representation. Purification and distance between states.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50)",
  },
  {
    code: "PMATH347",
    name: "Groups and Rings",
    subject: "PMATH",
    level: 300,
    description:
      "Groups, subgroups, homomorphisms and quotient groups, isomorphism theorems, group actions, Cayley and Lagrange theorems, permutation groups, Sylow theorems, and the fundamental theorem of finite abelian groups. Elementary properties of rings, subrings, ideals, homomorphisms and quotients, isomorphism theorems, and polynomial rings.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH348",
    name: "Fields and Galois Theory",
    subject: "PMATH",
    level: 300,
    description:
      "Unique factorization domains, Gauss's lemma, and Eisenstein's criterion. Fields, algebraic and transcendental extensions, minimal polynomials, splitting fields, and the structure of finite fields. Galois theory. Solvable groups and the insolvability of the quintic.",
    prerequisiteRawText:
      "Must have completed the following: PMATH347 - Groups and Rings (0.50)",
  },
  {
    code: "PMATH351",
    name: "Real Analysis",
    subject: "PMATH",
    level: 300,
    description:
      "Cardinality, countable and uncountable sets, normed spaces and metric spaces, open sets, continuous mappings, finite-dimensional normed spaces, sequence and function spaces, completeness, contraction mappings and the Banach fixed-point theorem, the Baire category theorem, compactness of metric spaces, the Arzela-Ascoli theorem, and the Stone-Weierstrass theorem.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH247 - Calculus 3 (Advanced Level) (0.50) PMATH333 - Introduction to Real Analysis (0.50)",
    prerequisite: {
      type: "anyOf",
      requirements: [
        { type: "course", courseCode: "MATH247" },
        { type: "course", courseCode: "PMATH333" },
      ],
    },
  },
  {
    code: "PMATH352",
    name: "Complex Analysis",
    subject: "PMATH",
    level: 300,
    description:
      "Analytic functions, Cauchy-Riemann equations, Goursat's theorem, Cauchy's theorems, Morera's theorem, Liouville's theorem, maximum modulus principle, harmonic functions, Schwarz's lemma, isolated singularities, Laurent series, residue theorem.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: MATH247 - Calculus 3 (Advanced Level) (0.50) PMATH333 - Introduction to Real Analysis (0.50)",
  },
  {
    code: "PMATH365",
    name: "Differential Geometry",
    subject: "PMATH",
    level: 300,
    description:
      "Curves and hypersurfaces in Euclidean space; integration and Stokes' Theorem; Gaussian and mean curvatures; Frenet-Serret frames and geodesics; Gauss-Bonnet Theorem.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH367",
    name: "Topology",
    subject: "PMATH",
    level: 300,
    description:
      "Topological spaces, bases, and Hausdorff spaces. Subspace, product, and quotient topologies. Continuous maps, compactness, connectedness, and path-connectedness. Topological manifolds. The fundamental group, the Seifert-Van Kampen Theorem, and covering spaces.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: PMATH336 - Introduction to Group Theory with Applications (0.50) PMATH347 - Groups and Rings (0.50)",
  },
  {
    code: "PMATH370",
    name: "Chaos and Fractals",
    subject: "PMATH",
    level: 300,
    description:
      "The mathematics of iterated functions, properties of discrete dynamical systems, Mandelbrot and Julia sets.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH114 - Linear Algebra for Science (0.50) MATH115 - Linear Algebra for Engineering (0.50) MATH136 - Linear Algebra 1 for Honours Mathematics (0.50) MATH146 - Linear Algebra 1 (Advanced Level) (0.50) MATH225 - Applied Linear Algebra 2 (0.50) Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50)",
  },
  {
    code: "PMATH432",
    name: "Mathematical Logic",
    subject: "PMATH",
    level: 400,
    description:
      "First-order languages and structures, syntactic provability and semantic truth, the soundness and completeness theorems, compactness and its consequences, elementary equivalence, the ZFC axioms of set theory, ordinals, cardinals, computability, and Gödel's incompleteness theorem.",
    prerequisiteRawText:
      "Must have completed the following: PMATH347 - Groups and Rings (0.50)",
  },
  {
    code: "PMATH440",
    name: "Analytic Number Theory",
    subject: "PMATH",
    level: 400,
    description:
      "Summation methods, analytic theory of the Riemann zeta function, Prime Number Theorem, primitive roots. Dirichlet characters and infinitude of primes in arithmetic progressions, and assorted topics.",
    prerequisiteRawText:
      "Must have completed the following: PMATH352 - Complex Analysis (0.50)",
  },
  {
    code: "PMATH441",
    name: "Algebraic Number Theory",
    subject: "PMATH",
    level: 400,
    description:
      "An introduction to algebraic number theory; unique factorization, Dedekind domains, class numbers, Dirichlet's unit theorem, solutions of Diophantine equations.",
    prerequisiteRawText:
      "Must have completed the following: PMATH348 - Fields and Galois Theory (0.50)",
  },
  {
    code: "PMATH450",
    name: "Measure Theory",
    subject: "PMATH",
    level: 400,
    description:
      "Review of Riemann integration. Measure spaces: sigma-algebras, Borel sets, outer measure, Caratheodory condition, Lebesgue-Steiltjes measures, translation invariance and regularity of Lebesgue measure. Measurable functions: simple approximation, Egorov's and Lusin's theorems. Integration: monotone convergence theorem, Fatou's lemma, Lebesgue dominated convergence theorem. Signed measures: Hahn and Jordan decompositions, absolute continuity of measures, Radon-Nikodym theorem. Lp spaces: completeness, separability, Riesz representation theorem.",
    prerequisiteRawText:
      "Must have completed the following: PMATH351 - Real Analysis (0.50)",
    prerequisite: { type: "course", courseCode: "PMATH351" },
  },
  {
    code: "PMATH453",
    name: "Functional Analysis",
    subject: "PMATH",
    level: 400,
    description:
      "Banach and Hilbert spaces, bounded linear maps, Hahn-Banach theorem, open mapping theorem, closed graph theorem, topologies, nets, Hausdorff spaces, dual spaces, weak topologies, Tychonoff's theorem, Banach-Alaoglu theorem, reflexive spaces.",
    prerequisiteRawText:
      "Must have completed the following: PMATH450 - Measure Theory (0.50)",
  },
  {
    code: "PSYCH101",
    name: "Introductory Psychology",
    subject: "PSYCH",
    level: 100,
    description:
      "A general survey course designed to provide the student with an understanding of the basic concepts and techniques of modern psychology as a behavioural science.",
  },
  {
    code: "PSYCH101R",
    name: "Introductory Psychology",
    subject: "PSYCH",
    level: 100,
    description:
      "A general survey course designed to provide the student with an understanding of the basic concepts and techniques of modern psychology as a behavioural science.",
  },
  {
    code: "PSYCH211",
    name: "Developmental Psychology",
    subject: "PSYCH",
    level: 200,
    description:
      "A course designed to introduce the student to current research and theory concerning children's social, cognitive, and physical development from infancy through childhood to early adolescence.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)",
  },
  {
    code: "PSYCH212",
    name: "Educational Psychology",
    subject: "PSYCH",
    level: 200,
    description:
      "A consideration of the main variables affecting learning in the classroom with special focus upon the conditions essential to efficient learning.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)",
  },
  {
    code: "PSYCH212R",
    name: "Educational Psychology",
    subject: "PSYCH",
    level: 200,
    description:
      "A consideration of the main variables affecting learning in the classroom with special focus upon the conditions essential to efficient learning.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: PSYCH101 - Introductory Psychology (0.50) PSYCH101R - Introductory Psychology (0.50)",
  },
  {
    code: "SPCOM223",
    name: "Calculus 2 for the Sciences",
    subject: "SPCOM",
    level: 200,
  },
  {
    code: "STAT230",
    name: "Probability",
    subject: "STAT",
    level: 200,
    description:
      "This course provides an introduction to probability models including sample spaces, mutually exclusive and independent events, conditional probability and Bayes' Theorem. The named distributions (Discrete Uniform, Hypergeometric, Binomial, Negative Binomial, Geometric, Poisson, Continuous Uniform, Exponential, Normal (Gaussian), and Multinomial) are used to model real phenomena. Discrete and continuous univariate random variables and their distributions are discussed. Joint probability functions, marginal probability functions, and conditional probability functions of two or more discrete random variables and functions of random variables are also discussed. Students learn how to calculate and interpret means, variances and covariances particularly for the named distributions. The Central Limit Theorem is used to approximate probabilities.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: MATH128 - Calculus 2 for the Sciences (0.50) Earned a minimum grade of 80% in at least 1 of the following: MATH116 - Calculus 1 for Engineering (0.50) MATH117 - Calculus 1 for Engineering (0.50) MATH137 - Calculus 1 for Honours Mathematics (0.50) MATH147 - Calculus 1 (Advanced Level) (0.50) Complete 1 of the following Enrolled in H-Mathematical Physics (BMath) , or H-Mathematical Physics (BSc) Enrolled in an Honours Mathematics program",
    prerequisite: {
      type: "anyOf",
      requirements: [
        { type: "course", courseCode: "MATH128", minGrade: 60 },
        { type: "course", courseCode: "MATH138" },
        { type: "course", courseCode: "MATH148" },
      ],
    },
  },
  {
    code: "STAT231",
    name: "Statistics",
    subject: "STAT",
    level: 200,
    description:
      "This course provides a systematic approach to empirical problem solving which will enable students to critically assess the sampling protocol and conclusions of an empirical study including the possible sources of error in the study and whether evidence of a causal relationship can be reasonably concluded.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH118 - Calculus 2 for Engineering (0.50) MATH119 - Calculus 2 for Engineering (0.50) MATH128 - Calculus 2 for the Sciences (0.50) MATH138 - Calculus 2 for Honours Mathematics (0.50) MATH148 - Calculus 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed at least 1 of the following: STAT230 - Probability (0.50) STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: STAT220 - Probability (Non-Specialist Level) (0.50)",
    prerequisite: {
      type: "allOf",
      requirements: [
        {
          type: "anyOf",
          requirements: [
            { type: "course", courseCode: "MATH128" },
            { type: "course", courseCode: "MATH138" },
            { type: "course", courseCode: "MATH148" },
          ],
        },
        { type: "course", courseCode: "STAT230" },
      ],
    },
  },
  {
    code: "STAT321",
    name: "Regression and Forecasting (Non-Specialist Level)",
    subject: "STAT",
    level: 300,
    description:
      "Modelling the relationship between a response variable and several explanatory variables via regression models. Model diagnostics and improvement. Using regression models for forecasting, Exponential smoothing. Simple time series modelling.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH225 - Applied Linear Algebra 2 (0.50) MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "STAT322",
    name: "Sampling and Experimental Design (Non-Specialist Level)",
    subject: "STAT",
    level: 300,
    description:
      "Planning sample surveys; simple random sampling; stratified sampling. Observational and experimental studies. Blocking, randomization, factorial designs. Analysis of variance. Applications of design principles.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: STAT221 - Statistics (Non-Specialist Level) (0.50) STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50)",
  },
  {
    code: "STAT330",
    name: "Mathematical Statistics",
    subject: "STAT",
    level: 300,
    description:
      "This course provides a mathematically rigorous treatment for topics covered in STAT230 and 231, and to make essential extensions to the multivariate case. Maximum likelihood estimation. Random variables and distribution theory. Generating functions. Functions of random variables. Limiting distributions. Large sample theory of likelihood methods. Likelihood ratio tests. Joint probability (density) functions, marginal probability (density) functions, and conditional probability (density) functions of two or more random variables are discussed. Topics covered include independence of random variables, conditional expectation and the determination of the distribution of functions of random variables using the cumulative distribution method, change of variable and moment generating functions. Properties of the Multinomial and Bivariate Normal distributions are proved. Limiting distributions, including convergence in probability and convergence in distribution, are discussed. Important results, including the Weak Law of Large Numbers, Central Limit Theorem, Slutsky's theorem, and the Delta Method, are introduced with applications. The maximum likelihood method is discussed for the multi-parameter case. Asymptotic properties of the maximum likelihood estimator are examined and used to construct confidence intervals or regions. Tests for simple and composite hypotheses are constructed using the Likelihood Ratio Test.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)",
  },
  {
    code: "STAT331",
    name: "Applied Linear Models",
    subject: "STAT",
    level: 300,
    description:
      "Modelling the relationship between a response variable and several explanatory variables (an output-input system) via regression models. Least squares algorithm for estimation of parameters. Hypothesis testing and prediction. Model diagnostics and improvement. Algorithms for variable selection. Nonlinear regression and other methods.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: SYDE212 - Probability, Statistics, and Data Science (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)",
    prerequisite: { type: "course", courseCode: "STAT231", minGrade: 60 },
  },
  {
    code: "STAT332",
    name: "Sampling and Experimental Design",
    subject: "STAT",
    level: 300,
    description:
      "Designing sample surveys. Probability sampling designs. Estimation with elementary designs. Observational and experimental studies. Blocking, randomization, factorial designs. Analysis of variance. Designing for comparison of groups.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 70% in each of the following: SYDE212 - Probability, Statistics, and Data Science (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50)",
  },
  {
    code: "STAT333",
    name: "Stochastic Processes 1",
    subject: "STAT",
    level: 300,
    description:
      "This course provides an introduction to stochastic processes, with an emphasis on regenerative phenomena. Topics cover generating functions, conditional probability distributions and conditional expectation, discrete-time Markov chains with a countable state space, limit distributions for ergodic and absorbing chains, applications including the random walk, the gambler's ruin problem, and the Galton-Watson branching process, an introduction to counting processes, connections between the exponential distribution and Poisson process, and non-homogeneous and compound Poisson processes.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)",
  },
  {
    code: "STAT337",
    name: "Introduction to Biostatistics",
    subject: "STAT",
    level: 300,
    description:
      "This course will provide an introduction to statistical methods in health research. Topics to be covered include types of medical data, measures of disease prevalence and incidence, age and sex adjustment of disease rates, sensitivity and specificity of diagnostic tests, ROC curves, measures of association between risk factors and disease, major sources of medical data in the Canadian context including surveys, registries, and clinical studies such as cohort studies, clinical trials and case-control studies. Papers from the medical literature will be used throughout to illustrate the concepts. Introduction to SAS for data analysis and an introduction to database management tools.",
    prerequisiteRawText:
      "Complete 1 of the following Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT221 - Statistics (Non-Specialist Level) (0.50)",
  },
  {
    code: "STAT340",
    name: "Stochastic Simulation Methods",
    subject: "STAT",
    level: 300,
    description:
      "Random variate generation in the univariate and multivariate case, Monte Carlo integration, advanced computer implementation, variance reduction, statistical analysis of simulated data, extensions to challenging simulation problems. Mathematical treatment of the underlying stochastic concepts and proofs.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: CS116 - Introduction to Computer Science 2 (0.50) CS136 - Elementary Algorithm Design and Data Abstraction (0.50) CS138 - Introduction to Data Abstraction and Implementation (0.50) CS145 - Designing Functional Programs (Advanced Level) (0.50) SYDE322 - Software Design (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)",
  },
  {
    code: "STAT341",
    name: "Computational Statistics and Data Analysis",
    subject: "STAT",
    level: 300,
    description:
      "A computationally focused approach to statistical reasoning in the context of real data. Functional programming in R and algorithms will be used to define interesting attributes of finite populations and their sampling characteristics. Computational approaches to inductive inference and the assessment of predictive accuracy.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH237 - Calculus 3 for Honours Mathematics (0.50) MATH247 - Calculus 3 (Advanced Level) (0.50) Must have completed at least 1 of the following: STAT231 - Statistics (0.50) STAT241 - Statistics (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT240 - Probability (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT230 - Probability (0.50)",
  },
  {
    code: "STAT371",
    name: "Applied Linear Models and Process Improvement for Business",
    subject: "STAT",
    level: 300,
    description:
      "Practical and theoretical aspects of simple and multiple linear regression models. Model building, fitting, and assessment. Process thinking and improvement. Strategies for variation reduction such as control charting. Process monitoring, control, and adjustment. Applications to problems in business.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: MATH235 - Linear Algebra 2 for Honours Mathematics (0.50) MATH245 - Linear Algebra 2 (Advanced Level) (0.50) Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50) Enrolled in H-BBA & BMath Double Degree , H-Information Technology Management , H-Mathematical Optimization - Business Specialization , H-Mathematics/Business Administration , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec",
  },
  {
    code: "STAT372",
    name: "Survey Sampling and Experimental Design Techniques for Business",
    subject: "STAT",
    level: 300,
    description:
      "Design and analysis of surveys. Management of sample and non-sample error. Simple random sampling and stratified random sampling. Additional topics in survey sampling. Observational and experimental studies. Principles for the design of experiments. Analysis of variance, factorial experiments, and interaction. Application to problems in business.",
    prerequisiteRawText:
      "Complete all of the following Complete 1 of the following Must have completed the following: STAT241 - Statistics (Advanced Level) (0.50) Earned a minimum grade of 60% in each of the following: STAT231 - Statistics (0.50) Enrolled in H-BBA & BMath Double Degree , H-Information Technology Management , H-Mathematical Optimization - Business Specialization , H-Mathematics/Business Administration , H-Math/FARM - Chartered Financial Analyst Spec , or H-Math/FARM - Professional Risk Management Spec",
  },
  {
    code: "STAT430",
    name: "Experimental Design",
    subject: "STAT",
    level: 400,
    description:
      "Review of experimental designs in a regression setting; analysis of variance; replication, balance, blocking, randomization, and interaction; one-way layout, two-way layout, and Latin square as special cases; factorial structure of treatments; covariates; treatment contrasts; two-level fractional factorial designs; fixed versus random effects; split-plot and repeated-measures designs; other topics.",
    prerequisiteRawText:
      "Complete all of the following Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) Must have completed at least 1 of the following: STAT332 - Sampling and Experimental Design (0.50) STAT372 - Survey Sampling and Experimental Design Techniques for Business (0.50)",
  },
  {
    code: "STAT431",
    name: "Generalized Linear Models and their Applications",
    subject: "STAT",
    level: 400,
    description:
      "Review of the normal linear model and maximum likelihood estimation; regression models for binomial, Poisson and multinomial data; generalized linear models; and other topics in regression modelling.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: STAT330 - Mathematical Statistics (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)",
  },
  {
    code: "STAT433",
    name: "Stochastic Processes 2",
    subject: "STAT",
    level: 400,
    description:
      "This course provides further ideas and methods in stochastic modelling, with an emphasis on continuous-time stochastic processes. Topics cover time to absorption based quantities and discrete phase-type distributions of discrete-time Markov chains, continuous-time Markov chains with a countable state space, limit distributions for ergodic and absorbing chains, and applications including birth and death processes and queueing models of practical interest. Other topics may include continuous phase-type distributions, renewal theory and limit theorems for regenerative processes, and phase-type renewal processes.",
    prerequisiteRawText:
      "Must have completed the following: STAT333 - Stochastic Processes 1 (0.50)",
  },
  {
    code: "STAT436",
    name: "Introduction to the Analysis of Spatial Data in Health Research",
    subject: "STAT",
    level: 400,
    description:
      "The objective of this course is to develop understanding and working knowledge of spatial models and analysis of spatial data. The course provides an introduction to the rudiments of statistical inference based on spatially correlated data. Methods of estimation and testing will be developed for geostatistical models based on variograms and spatial autogressive models. Concepts and application of methods will be emphasized through case studies and projects with health applications.",
    prerequisiteRawText:
      "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)",
  },
  {
    code: "STAT437",
    name: "Statistical Methods for Life History Analysis",
    subject: "STAT",
    level: 400,
    description:
      "Statistical methods for the analysis of longitudinal data; hierarchical models, marginal models, and transitional models. Parametric and semiparametric methods for the analysis of survival data under censoring and truncation.",
    prerequisiteRawText:
      "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)",
  },
  {
    code: "STAT438",
    name: "Advanced Methods in Biostatistics",
    subject: "STAT",
    level: 400,
    description:
      "Causal inference methodologies including propensity score matching and inverse probability weighting. Methods for handling incomplete data and covariate measurement error; likelihood based on joint models, estimating functions.",
    prerequisiteRawText:
      "Must have completed the following: STAT431 - Generalized Linear Models and their Applications (0.50)",
  },
  {
    code: "STAT440",
    name: "Computational Inference",
    subject: "STAT",
    level: 400,
    description:
      "Introduction to and application of computational methods in statistical inference. Monte Carlo evaluation of statistical procedures, exploration of the likelihood function through graphical and optimization techniques. Topics include expectation-maximization, Bootstrapping, Markov Chain Monte Carlo, and other computationally intensive methods.",
    prerequisiteRawText:
      "Must have completed the following: STAT330 - Mathematical Statistics (0.50) STAT341 - Computational Statistics and Data Analysis (0.50)",
  },
  {
    code: "STAT441",
    name: "Statistical Learning - Classification",
    subject: "STAT",
    level: 400,
    description:
      "Classification is the problem of predicting a discrete outcome from a set of explanatory variables. Main topics include logistic regression, neural networks, tree-based methods, support vector machines, and nearest neighbour methods. Other topics include model assessment, training, and tuning.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)",
  },
  {
    code: "STAT442",
    name: "Data Visualization",
    subject: "STAT",
    level: 400,
    description:
      "Visualization methods applied to data. Both human perception and statistical properties inform the methods used to display and visually explore categorical, continuous, time-ordered, map, and high dimensional data. Order and layout effects on tables and graphics. Statistical concepts visually presented include variability, densities, quantiles, conditioning, and hypothesis testing. Interactive graphics include linking, brushing, motion, and the navigation of high dimensional spaces guided via projection indices. Glyphs (e.g., cartoon, statistical, or heatmap) and radial and parallel coordinates.",
    prerequisiteRawText:
      "Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50)",
  },
  {
    code: "STAT443",
    name: "Forecasting",
    subject: "STAT",
    level: 400,
    description:
      "Modelling techniques for forecasting time series data: smoothing methods, regression including penalty/regularization methods, the Box-Jenkins framework, stationary and non-stationary processes, both with and without seasonal effects. Other topics may include: ARCH/GARCH models, Bayesian methods, dynamic linear models, Markov Chain Monte Carlo simulation, spectral density analysis, and periodograms.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50) SYDE334 - Applied Statistics (0.50)",
  },
  {
    code: "STAT444",
    name: "Statistical Learning - Advanced Regression",
    subject: "STAT",
    level: 400,
    description:
      "This course introduces modern applied regression methods for continuous response modelling, emphasizing both explainability and predictive power. Topics cover a wide selection of advanced methods useful to address the challenges arising from real-world and high-dimensional data; methods include robust regression, nonparametric regression such as smoothing splines, kernels, additive models, tree-based methods, boosting and bagging, and penalized linear regression methods such as the ridge regression, lasso, and their variants. Students will gain an appreciation of the mathematical and statistical concepts underlying the methods and also computational experience in applying the methods to real data.",
    prerequisiteRawText:
      "Complete all of the following Must have completed the following: STAT341 - Computational Statistics and Data Analysis (0.50) Must have completed at least 1 of the following: STAT331 - Applied Linear Models (0.50) STAT371 - Applied Linear Models and Process Improvement for Business (0.50)",
  },
  {
    code: "STAT454",
    name: "Sampling Theory and Practice",
    subject: "STAT",
    level: 400,
    description:
      "Sources of survey error. Probability sampling designs, estimation, and efficiency comparisons. Distribution theory and confidence intervals. Generalized regression estimation. Software for survey analysis.",
    prerequisiteRawText:
      "Must have completed at least 1 of the following: STAT332 - Sampling and Experimental Design (0.50) STAT372 - Survey Sampling and Experimental Design Techniques for Business (0.50)",
  },
  {
    code: "STV202",
    name: "Design and Society",
    subject: "STV",
    level: 200,
    description:
      "The course uses design as a vehicle for examining technology and society interaction, particularly how we design, create, and choose technology. This course has been created to introduce students to various methods to help them view design and technology from a technology-society perspective. The overriding aims of the course are to (a) develop an ability to see through the eyes of others and promote thinking about technology in terms of users as well as producers or creators, (b) develop critical thinking skills, and (c) present design and the choice of technology as an activity involving societal and individual concerns rather than as a purely technical matter. The course does not require advanced technical knowledge and is open to students of all faculties.",
  },
  {
    code: "STV302",
    name: "Information Technology and Society",
    subject: "STV",
    level: 300,
    description:
      "The course has been designed to provide a framework or set of intellectual tools to help students understand and evaluate technological change. These tools will be applied to the development of information technology, its interaction with society, and possible future scenarios. Selected topics include understanding digitization as culture, visions of the future and the perils of prediction, as well as issues related to application areas such as the home, manufacturing, office work, design and services, education, and law. The course will also consider some of the privacy and personal dignity issues associated with information technology.",
    prerequisiteRawText: "Students must be in level 2A or higher",
  },
  {
    code: "STV304",
    name: "Technology in Canadian Society",
    subject: "STV",
    level: 300,
    description:
      "The course begins by questioning whether or not there is anything distinctive about Canadian design and its context. Through the use of historical and contemporary cases, this course examines factors influencing design and technology choice in Canada and their outcomes. The future of design is also considered in terms of current trends, issues, challenges and opportunities.",
    prerequisiteRawText: "Students must be in level 2A or higher",
  },
  {
    code: "STV305",
    name: "Technology, Society and the Modern City",
    subject: "STV",
    level: 300,
    description:
      "Cities may be humanity's most significant invention, where we shape our vision of the civilized life. At the same time, the demands of cities shape our lives in fundamental ways. As most of humanity now lives in cities, the technology of city living increasingly becomes the technology of human life itself. The purpose of this course is to examine the technology of civilized life, with the city itself as both a technological system and a scene of technological living. Topics explored include food, transport, cars, architecture, urban planning, public spaces, sanitation and health, civics and governance, sustainability, and information and communications technology. The Canadian city receives some emphasis.",
    prerequisiteRawText: "Students must be in level 2A or higher",
  },
  {
    code: "STV306",
    name: "Biotechnology and Society",
    subject: "STV",
    level: 300,
    description:
      "Biotechnologies are currently migrating from the laboratory to a wide range of consumer products. In everything from foods to pharmaceuticals, genetic engineering is entering daily life. The biotechnology revolution will likely have as much of an impact on our lives as the information technology revolution. However, there is a wide and potentially dangerous gap between research and development on the one hand and societal awareness of its impact on the other. This course is intended to help students gain a deeper appreciation for the issues, including ethics, surrounding biotechnology and society. It will do this through an investigation of such interactions between biotechnologies and society as genetics and the law, foods and the media, and soil remediation and the environment. Consideration will also be given to the role of computing in biotech research and in the human genome project.",
    prerequisiteRawText: "Students must be in level 2A or higher",
  },
  {
    code: "STV400",
    name: "Society, Technology and Values: Senior Project",
    subject: "STV",
    level: 400,
    description:
      "An independent, supervised research project related to the interaction of society, technology and values. Projects may take any format that demonstrates scholarly merit. Formats may include essays, impact studies, designs, computer software, or other media. Students are responsible for proposing suitable projects and are encouraged to seek faculty advice on plausible topics.",
    prerequisiteRawText:
      "Complete all of the following Students must be in level 4A or higher Enrolled in Society, Technology & Values Option",
  },
  {
    code: "STV401",
    name: "Society, Technology and Values: Advanced Topics",
    subject: "STV",
    level: 400,
    description:
      "Advanced study of the interaction of society, technology and values in a particular topic area under tutorial guidance by visiting or adjunct faculty.",
    prerequisiteRawText: "Earned at least 0.5 units from STV 100 - 399",
  },
];
