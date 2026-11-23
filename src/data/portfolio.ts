export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  summary: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface SkillItem {
  name: string;
  category: 'cre-operations' | 'leadership' | 'software' | 'automation' | 'web-design';
  level: 'Expert' | 'Advanced' | 'Proficient';
  featured: boolean;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  period: string;
  summary: string;
  role: string;
  metrics: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  badgeText: string;
  description: string;
  verificationNote?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export const personalData = {
  name: 'Prakash Rajendran',
  title: 'Deputy Manager',
  division: 'Operations | Lease Abstraction | Commercial Real Estate',
  tagline: 'Bridging Institutional Real Estate Operations, Multilingual Lease Abstraction & Modern AI Automation',
  headline: 'Commercial Real Estate Operations Leader, AI Document Automation Specialist & Web Designer',
  email: 'prakzsampath@gmail.com',
  phone: '+91 96772 55475',
  phoneRaw: '+919677255475',
  location: 'Mannargudi & Chennai, Tamil Nadu, India',
  linkedin: 'linkedin.com/in/prakash-rajendran94',
  linkedinUrl: 'https://www.linkedin.com/in/prakash-rajendran94',
  github: 'github.com/Prakash793',
  githubUrl: 'https://github.com/Prakash793',
  photoUrl: '/prakash-rajendran.jpg',
  resumeUrl: '/Prakash_Rajendran_Resume.pdf',
  experienceYears: '8+ Years',
  currentCompany: 'RECAM SOLUTIONS PVT LTD',
  currentRole: 'Deputy Manager',
  educationSummary: 'B.Tech in Information Technology — Loyola-ICAM College of Engineering & Technology',

  summary:
    'Operations and commercial real estate professional with 8+ years of progressive leadership in multilingual lease abstraction, lease review, quality control, translation validation, and real estate documentation. Active developer and web designer with open-source repositories on GitHub, building intelligent platforms, automated documentation tools, and modern web applications with 99.8% SLA delivery.',

  aboutStory: {
    lead: 'I lead end-to-end commercial real estate lease abstraction operations, harmonizing rigorous legal document scrutiny with modern web design and AI process automation.',
    journey:
      'Starting my career in CRE document abstraction and indexing, I developed deep domain expertise in lease agreements, complex amendments, CAM audits, and international covenants. Over 8+ years, I advanced through 4 consecutive promotions—from Senior Process Associate to Team Lead, Senior Team Lead, Assistant Manager, and now Deputy Manager at RECAM SOLUTIONS PVT LTD.',
    operationalPhilosophy:
      'Commercial leases are the financial backbone of multi-million dollar real estate portfolios. A single missed option deadline, miscalculated indexation clause, or misinterpreted co-tenancy covenant can cost an owner millions. My philosophy is zero-defect operational governance, powered by continuous mentoring, structured QA matrices, and intelligent AI tools that empower human analysts.',
    aiVision:
      'Holding an Information Technology background and Anthropic Claude certification, I build web solutions, easy documentation builders, Python document verification pipelines, and AI prompt workflows (published on my GitHub @Prakash793) that elevate accuracy, reduce turnaround times, and future-proof real estate operations.',
  },

  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency', flag: '🇬🇧' },
    { name: 'Tamil', proficiency: 'Native / Bilingual', flag: '🇮🇳' },
  ],

  keyMetrics: [
    { label: 'Domain Experience', value: '8+ Years', helper: 'Commercial Real Estate Operations' },
    { label: 'Promotions Earned', value: '4 Milestones', helper: 'Process Associate to Deputy Manager' },
    { label: 'SLA Adherence', value: '99.8%', helper: 'Across Institutional Portfolios' },
    { label: 'GitHub Repositories', value: '7+ Projects', helper: 'Web Design, AI & Doc Tools' },
  ],

  coreStrengths: [
    'Multilingual Lease Abstraction & Review',
    'Commercial Real Estate Documentation (CRE)',
    'Quality Control & SLA Governance (99.8%)',
    'Modern Website Design & UI/UX Development',
    'Easy Documentation Systems & Resume Builders',
    'Translation Validation & Legal Nuance Analysis',
    'Process Improvement & Rework Reduction',
    'AI-Assisted Workflows & Claude Prompt Engineering',
  ],

  experiences: [
    {
      id: 'recam-deputy-mgr',
      role: 'Deputy Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      location: 'Chennai, Tamil Nadu',
      period: 'Apr 2026 – Present',
      isCurrent: true,
      type: 'Full-time Leadership',
      summary:
        'Oversee end-to-end lease abstraction operations, quality control, and delivery across large-scale institutional real estate portfolios.',
      highlights: [
        'Direct overall lease abstraction operations, quality control pipelines, and final delivery for institutional real estate accounts.',
        'Lead multicultural and multilingual team leads and analysts, aligning daily operations with client SLA commitments.',
        'Drive process optimization initiatives to improve efficiency, reduce rework, and eliminate delivery bottlenecks.',
        'Serve as primary escalation point for complex lease-language disputes, partnering with international asset management stakeholders.',
      ],
      skillsUsed: ['Operations Management', 'Quality Governance', 'SLA Adherence', 'Team Leadership', 'Process Optimization', 'Client Compliance'],
    },
    {
      id: 'recam-asst-mgr',
      role: 'Assistant Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      location: 'Chennai, Tamil Nadu',
      period: '2024 – Mar 2026',
      isCurrent: false,
      type: 'Full-time Management',
      summary:
        'Managed end-to-end lease abstraction delivery, workload allocation, progress tracking, and quality sign-off.',
      highlights: [
        'Directed end-to-end lease abstraction delivery schedules, dynamic workload balancing, and milestone progress tracking.',
        'Led quality control, translation validation, and exception handling for high-risk covenants, amendments, and multi-tenant provisions.',
        'Mentored team leads and junior analysts on complex lease terminology, CAM reconciliations, and documentation best practices.',
        'Collaborated with onshore client leads and internal quality teams to resolve lease ambiguities and mitigate operational risks.',
      ],
      skillsUsed: ['Lease Abstraction', 'CAM Analysis', 'Translation Validation', 'Workload Allocation', 'Mentoring', 'Risk Management'],
    },
    {
      id: 'recam-sr-team-lead',
      role: 'Senior Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      location: 'Chennai, Tamil Nadu',
      period: '2022 – 2024',
      isCurrent: false,
      type: 'Full-time Leadership',
      summary:
        'Led day-to-day multilingual lease abstraction operations, standardized processes, and supported consistent SLA delivery.',
      highlights: [
        'Supervised day-to-day multilingual lease abstraction operations, ensuring strict SLA adherence and accuracy targets.',
        'Conducted rigorous second-level quality audits across international lease portfolios.',
        'Authored and standardized operational abstraction protocols and language-specific indexing guidelines.',
        'Coordinated between analysts, QA teams, and senior management to streamline turnaround cycle times.',
      ],
      skillsUsed: ['Multilingual Abstraction', 'Quality Audit', 'SLA Delivery', 'Standardized Guidelines', 'Workflow Coordination'],
    },
    {
      id: 'recam-team-lead',
      role: 'Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      location: 'Chennai, Tamil Nadu',
      period: '2018 – 2022',
      isCurrent: false,
      type: 'Full-time Leadership',
      summary:
        'Led frontline lease abstraction operations, workload allocation, progress tracking, quality review, and issue resolution.',
      highlights: [
        'Led frontline lease abstraction teams, managing daily task queues and turnaround milestones.',
        'Monitored individual analyst output, conducted root-cause quality reviews, and maintained team productivity.',
        'Trained incoming associates on real estate documentation types, rent schedules, and clause indexing.',
      ],
      skillsUsed: ['Team Supervision', 'Quality Audits', 'Issue Resolution', 'Capacity Tracking', 'Training'],
    },
    {
      id: 'annett-sr-assoc',
      role: 'Senior Process Associate',
      company: 'The Annett Group',
      location: 'Chennai, Tamil Nadu',
      period: 'Jul 2017 – Sep 2018',
      isCurrent: false,
      type: 'Full-time Operations',
      summary:
        'Established foundational expertise in commercial real estate document indexing, data abstraction, and process execution.',
      highlights: [
        'Executed high-precision commercial real estate document indexing and lease data abstraction.',
        'Extracted critical data points including rent steps, commencement dates, renewal options, and security deposits.',
        'Consistently exceeded personal quality and throughput quotas, establishing the foundation for leadership advancement.',
      ],
      skillsUsed: ['Document Analysis', 'Data Extraction', 'Clause Identification', 'CRE Indexing'],
    },
  ],

  skills: [
    // Website Design & Frontend Development
    {
      name: 'Website Design & UI/UX Development',
      category: 'web-design',
      level: 'Expert',
      featured: true,
      description: 'Designing responsive, high-converting websites with modern visual hierarchy, clean layouts, and accessible interfaces.',
    },
    {
      name: 'Easy Documentation Systems',
      category: 'web-design',
      level: 'Expert',
      featured: true,
      description: 'Architecting zero-friction documentation tools, automated resume creators, and standardized contract summarization templates.',
    },
    {
      name: 'Frontend Frameworks (Next.js / React / TypeScript)',
      category: 'web-design',
      level: 'Advanced',
      featured: true,
      description: 'Component architecture, typed schemas, dynamic routing, state management, and optimized static pre-rendering.',
    },
    {
      name: 'Tailwind CSS & Responsive Layouts',
      category: 'web-design',
      level: 'Expert',
      featured: true,
      description: 'Building mobile-first, fluid responsive web applications with bespoke dark glassmorphism styling.',
    },

    // CRE & Lease Operations
    {
      name: 'Multilingual Lease Abstraction',
      category: 'cre-operations',
      level: 'Expert',
      featured: true,
      description: 'Abstracting complex commercial leases across languages and international legal systems with 99.8% accuracy.',
    },
    {
      name: 'Lease Review & Quality Control',
      category: 'cre-operations',
      level: 'Expert',
      featured: true,
      description: 'Granular multi-tier auditing of financial terms, rent escalations, CAM caps, and compliance clauses.',
    },
    {
      name: 'Commercial Real Estate Documentation',
      category: 'cre-operations',
      level: 'Expert',
      featured: true,
      description: 'In-depth mastery of Master Leases, Subleases, Amendments, Estoppel Certificates, SNDA, and Deeds.',
    },
    {
      name: 'Lease Amendments & Complex Clauses',
      category: 'cre-operations',
      level: 'Expert',
      featured: true,
      description: 'Detailed analysis of termination rights, co-tenancy covenants, expansion/contraction options, and indexation.',
    },
    {
      name: 'Translation Validation',
      category: 'cre-operations',
      level: 'Expert',
      featured: true,
      description: 'Cross-language reconciliation of international agreements to preserve legal covenants and statutory rights.',
    },
    {
      name: 'Real Estate Document Management',
      category: 'cre-operations',
      level: 'Advanced',
      featured: false,
      description: 'Systematic lifecycle indexing, metadata structuring, and digital repository governance.',
    },

    // Leadership & Operations
    {
      name: 'Multicultural Team Leadership',
      category: 'leadership',
      level: 'Expert',
      featured: true,
      description: 'Leading, coaching, and motivating multidisciplinary teams across operational shifts and delivery hubs.',
    },
    {
      name: 'SLA & Client Compliance (99.8%)',
      category: 'leadership',
      level: 'Expert',
      featured: true,
      description: 'Consistently maintaining 99.8% SLA turnaround times and contract compliance across multi-client portfolios.',
    },
    {
      name: 'Workflow & Workload Management',
      category: 'leadership',
      level: 'Expert',
      featured: true,
      description: 'Dynamic capacity allocation, bottleneck identification, and pipeline velocity management.',
    },
    {
      name: 'Process Improvement & Lean QA',
      category: 'leadership',
      level: 'Advanced',
      featured: true,
      description: 'Designing structured QA checklists, root-cause corrective actions, and cycle time reductions.',
    },
    {
      name: 'Stakeholder Coordination',
      category: 'leadership',
      level: 'Expert',
      featured: true,
      description: 'Direct alignment with client executives, onshore portfolio managers, and technical audit teams.',
    },
    {
      name: 'Operational Risk Management',
      category: 'leadership',
      level: 'Advanced',
      featured: false,
      description: 'Identifying contractual ambiguities, delivery risks, and mitigating compliance vulnerabilities proactively.',
    },

    // Software & Real Estate Platforms
    {
      name: 'Yardi Voyager',
      category: 'software',
      level: 'Advanced',
      featured: true,
      description: 'Industry-standard property management, lease administration, and financial accounting suite.',
    },
    {
      name: 'ProLease',
      category: 'software',
      level: 'Advanced',
      featured: true,
      description: 'Specialized enterprise lease administration, real estate tracking, and FASB/IFRS accounting platform.',
    },
    {
      name: 'Manhattan (IWMS)',
      category: 'software',
      level: 'Advanced',
      featured: true,
      description: 'Integrated Workplace Management System for real estate portfolio tracking and facilities governance.',
    },
    {
      name: 'LP365',
      category: 'software',
      level: 'Advanced',
      featured: true,
      description: 'Enterprise cloud lease processing and abstraction management solution.',
    },
    {
      name: 'Colliers 360',
      category: 'software',
      level: 'Advanced',
      featured: true,
      description: 'Global real estate data visualization and portfolio management technology.',
    },
    {
      name: 'Advanced Excel & Macros',
      category: 'software',
      level: 'Expert',
      featured: false,
      description: 'Complex financial modeling, automated data cleansing macros, and operational auditing tables.',
    },

    // Automation & AI
    {
      name: 'Anthropic Claude Prompt Engineering',
      category: 'automation',
      level: 'Advanced',
      featured: true,
      description: 'Authoring structured system prompts and JSON schemas for zero-shot contract clause extraction.',
    },
    {
      name: 'Low-Code Automation & Git Pipelines',
      category: 'automation',
      level: 'Advanced',
      featured: true,
      description: 'Building automated workflow triggers, exception routing, and GitHub CI/CD repositories.',
    },
    {
      name: 'AI Document Parsing Pipelines',
      category: 'automation',
      level: 'Advanced',
      featured: true,
      description: 'Deploying hybrid AI-human review workflows for high-volume contract ingestion and risk scoring.',
    },
    {
      name: 'Project Management Tools',
      category: 'automation',
      level: 'Advanced',
      featured: false,
      description: 'Jira, Asana, Trello, and MS Project for sprint tracking and milestone deliverables.',
    },
  ],

  projects: [
    {
      id: 'tamizh-real-estate-live',
      title: 'Tamizh Real Estate Live Portal',
      subtitle: 'Complete Responsive Real Estate Website Design & Property Showcase',
      category: 'web-design',
      badge: 'Live GitHub Web Project',
      period: '2026',
      summary:
        'A comprehensive real estate web application and modern portal designed for property discovery, commercial and residential listings, interactive property cards, and seamless client inquiry routing.',
      role: 'Lead UI/UX Designer & Web Developer',
      metrics: ['100% Mobile Responsive', 'Fast Page Performance', 'Clean Property Layouts'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI Design', 'GitHub Pages'],
      challenges: [
        'Real estate buyers need instant access to property specifications, pricing schedules, and location coordinates without cluttered navigation.',
        'Ensuring fluid responsiveness across smartphones, tablets, and wide desktop displays for property imagery.',
      ],
      solutions: [
        'Designed an intuitive visual hierarchy with high-contrast property detail cards, amenity badges, and interactive search filters.',
        'Engineered responsive grid layouts optimized for fast image loading and smooth mobile scrolling.',
        'Integrated direct contact triggers enabling visitors to book visits or request documentation instantly.',
      ],
      outcomes: [
        'Successfully published and deployed live open-source real estate website on GitHub.',
        'Established reusable design patterns for property cards, filters, and agency portfolio showcases.',
      ],
      highlights: [
        'Modern responsive real estate layout with property filtering',
        'High-density visual cards with amenity and price breakdowns',
        'Direct inquiry channels for real estate agents and clients',
        'Open-source repository on GitHub',
      ],
      githubUrl: 'https://github.com/Prakash793/tamizh-real-estate-live',
    },
    {
      id: 'retrans',
      title: 'ReTrans — Multilingual Translation & Review Web App',
      subtitle: 'Specialized Real Estate Translation & Language Validation Platform',
      category: 'documentation',
      badge: 'TypeScript GitHub Project',
      period: '2026',
      summary:
        'A specialized web application built to streamline translation workflows for international documentation, multilingual real estate leases, and language validation matrices.',
      role: 'Full-Stack Developer & Translation SME',
      metrics: ['Multi-Language Support', 'Zero-Latency Side-by-Side Review', 'Structured Glossary'],
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Translation Schemas'],
      challenges: [
        'Reviewing international contracts across German, Spanish, French, Hebrew, and Korean requires synchronized side-by-side comparison of original text against translations.',
        'Manual translation validation is prone to missing subtle legal covenants and statutory clauses.',
      ],
      solutions: [
        'Built a clean split-screen translation interface comparing source text against translated output with synchronized scrolling.',
        'Embedded domain-specific real estate glossaries for rapid clause verification and statutory term alignment.',
      ],
      outcomes: [
        'Significantly expedited translation verification for cross-border documentation.',
        'Published as an active TypeScript project under GitHub @Prakash793.',
      ],
      highlights: [
        'Synchronized split-screen source vs translated document view',
        'Built-in real estate terminology and statutory covenant glossary',
        'Fast modern UI powered by TypeScript and React',
        'Directly supports enterprise multilingual lease workflows',
      ],
      githubUrl: 'https://github.com/Prakash793/ReTrans',
    },
    {
      id: 'resume-builder',
      title: 'Resume Builder & Easy Documentation Suite',
      subtitle: 'Intuitive Document Generation Tool with Structured Formatting',
      category: 'documentation',
      badge: 'Easy Documentation Tool',
      period: '2026',
      summary:
        'A dedicated web application that makes documentation effortless—allowing professionals to generate, edit, and export structured, ATS-compliant resumes and executive briefs in real-time.',
      role: 'Creator & Frontend Architect',
      metrics: ['Real-Time Live Preview', '1-Click PDF Export', 'Standardized Sections'],
      technologies: ['TypeScript', 'React', 'Document Styling Engines', 'Tailwind CSS'],
      challenges: [
        'Creating polished, ATS-friendly professional resumes and project documentation is often tedious with word processors.',
        'Users struggle with formatting inconsistencies, margin errors, and broken export styles.',
      ],
      solutions: [
        'Built a modular form-driven interface where users fill structured fields (Experience, Skills, Education) and watch the document update instantly.',
        'Enforced strict typographic proportions, ATS-parseable structure, and clean 1-click export.',
      ],
      outcomes: [
        'Empowers non-technical users to build clean, professional career documents in minutes.',
        'Featured open-source tool on GitHub for easy documentation creation.',
      ],
      highlights: [
        'Live side-by-side editing and real-time document preview',
        'ATS-optimized typographic layout and structure',
        'Instant export for professional resumes and career summaries',
        'Open-source TypeScript codebase on GitHub',
      ],
      githubUrl: 'https://github.com/Prakash793/Resume-builder',
    },
    {
      id: 'cre-lease-platform',
      title: 'Commercial Real Estate (CRE) AI Lease Abstraction Platform',
      subtitle: 'Production Next.js & TypeScript Enterprise Application',
      category: 'cre-ai',
      badge: 'Production Application',
      period: '2026',
      summary:
        'A full-stack, enterprise-grade web application for commercial real estate lease abstraction, evidence verification, automated rent step calculations, critical notice tracking, and portfolio risk management.',
      role: 'Principal Architect & CRE Operations Subject Matter Expert',
      metrics: ['60% Faster Abstraction', 'Zero Manual Math Errors', 'Multi-Format Export'],
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'SQLite / PostgreSQL'],
      challenges: [
        'Traditional lease review is labor-intensive, error-prone, and slow when dealing with complex 80+ page commercial contracts.',
        'Auditors struggle to verify abstracted points against source clauses without cumbersome manual page-flipping.',
      ],
      solutions: [
        'Engineered an accessible, high-density dashboard presenting document previews side-by-side with extracted fields.',
        'Implemented strict data validation schemas ensuring every extracted clause cites exact page and paragraph references.',
        'Integrated automated multi-sheet Excel workbooks, iCalendar milestone exports, and PDF summary generators.',
      ],
      outcomes: [
        'Cut initial lease drafting cycle time by 60% while elevating data consistency.',
        'Delivered 100% auditable evidence citations directly linked to underlying agreement PDFs.',
      ],
      highlights: [
        'Side-by-side evidence verification with document page citations',
        'Automated rent schedule calculations with step-up & CPI models',
        'iCalendar critical date notifications for renewal & termination windows',
        'Enterprise multi-tenant schema with Prisma ORM',
      ],
      githubUrl: 'https://github.com/Prakash793',
    },
    {
      id: 'clause-abstractor',
      title: 'AI Clause Abstraction & Risk Scoring Tool',
      subtitle: 'Anthropic Claude-Powered Document Intelligence Engine',
      category: 'cre-ai',
      badge: 'Python & Claude Engine',
      period: '2026',
      summary:
        'An enterprise-grade AI tool and Python library powered by Anthropic Claude to extract, abstract, and analyze clauses from commercial leases and business contracts based on customizable keypoints.',
      role: 'Tool Creator & AI Prompt Architect',
      metrics: ['100+ Page Processing in Seconds', '5-Tier Risk Classification', 'Automated Executive Briefings'],
      technologies: ['Python 3.10+', 'Anthropic Claude API', 'Pydantic Schemas', 'ReportLab PDF', 'Rich Terminal CLI'],
      challenges: [
        'Unstructured contract language varies wildly across legal jurisdictions and drafting conventions.',
        'Generic LLM prompts often hallucinate terms or miss nuance in indemnification, co-tenancy, and holdover provisions.',
      ],
      solutions: [
        'Designed deterministic Pydantic models enforcing structured output: verbatim quote, plain-English summary, rights & obligations, risk rating, and actionable recommendations.',
        'Built a ReportLab publication engine generating styled briefing PDFs with color-coded risk badges.',
      ],
      outcomes: [
        'Reduced full contract risk auditing from 4 hours to under 2 minutes.',
        'Standardized risk evaluation criteria across analyst teams.',
      ],
      highlights: [
        'Verbatim text extraction paired with executive plain-English synthesis',
        'Risk assessment matrix from LOW to CRITICAL with actionable mitigation steps',
        'Publication-ready PDF reports with executive summary cards',
        'Multi-format export to PDF, JSON, and CSV',
      ],
      githubUrl: 'https://github.com/Prakash793',
    },
    {
      id: 'justice-league-game',
      title: 'Justice League Legal Training Game',
      subtitle: 'Gamified Legal Case & Contract Analysis Web Application',
      category: 'open-source',
      badge: 'Legal Tech Web App',
      period: '2026',
      summary:
        'An interactive, gamified learning application built with TypeScript designed for law students and contractual trainees to master legal doctrines, covenant analysis, and dispute resolution scenarios.',
      role: 'Creator & Frontend Developer',
      metrics: ['Interactive Scenarios', 'Immediate Feedback Engine', 'Gamified Legal Reasoning'],
      technologies: ['TypeScript', 'React', 'Interactive UI Logic', 'Web Animation'],
      challenges: [
        'Legal doctrines and contract covenants can be dry and abstract for trainees to internalize.',
        'Students need active decision-making challenges rather than passive textbook reading.',
      ],
      solutions: [
        'Gamified real-world legal dilemmas with tiered difficulty and consequence branching.',
        'Provided instant contextual feedback explaining statutory reasoning upon each decision.',
      ],
      outcomes: [
        'Delivered an engaging educational tool bridging interactive gaming and serious legal learning.',
        'Open-source repository available on GitHub.',
      ],
      highlights: [
        'Interactive scenario-based legal decision engine',
        'Real-time feedback with case law and covenant explanations',
        'Engaging game mechanics for contract analysis training',
        'TypeScript codebase hosted on GitHub',
      ],
      githubUrl: 'https://github.com/Prakash793/Justice-Leage-Game',
    },
    {
      id: 'austro',
      title: 'Austro Web Design & Interface',
      subtitle: 'Modern Responsive Web Experience & Interface System',
      category: 'web-design',
      badge: 'Web Design Project',
      period: '2026',
      summary:
        'A clean, modern web application interface showcasing responsive layouts, dynamic JavaScript interactions, and refined visual aesthetics.',
      role: 'Web Designer & Developer',
      metrics: ['Fluid Breakpoint Design', 'Optimized Assets', 'Smooth Animations'],
      technologies: ['JavaScript', 'HTML5', 'CSS3 Modern Layouts', 'UI Animation'],
      challenges: [
        'Delivering a unique visual character while retaining swift load times and clean code architecture.',
      ],
      solutions: [
        'Designed custom visual assets and implemented responsive grid layouts with modern CSS techniques.',
      ],
      outcomes: [
        'Demonstrates practical website design and client-facing frontend delivery skills.',
        'Open-source project on GitHub.',
      ],
      highlights: [
        'Clean typography and layout composition',
        'Responsive mobile and tablet adaptations',
        'Lightweight, high-performance vanilla web design',
        'Public repository on GitHub',
      ],
      githubUrl: 'https://github.com/Prakash793/Austro',
    },
    {
      id: 'a2ui',
      title: 'A2UI — Agentic UI & Interface Components',
      subtitle: 'Modern Component Library & Visual System for AI Interfaces',
      category: 'web-design',
      badge: 'UI Framework Project',
      period: '2026',
      summary:
        'A cutting-edge TypeScript component repository focused on generative UI patterns, agentic interface controls, and modular design components for next-generation web applications.',
      role: 'Component Architect & UI Contributor',
      metrics: ['Modular Architecture', 'Strict TypeScript Types', 'Reusable Atoms'],
      technologies: ['TypeScript', 'Component Systems', 'Modern CSS', 'Design Tokens'],
      challenges: [
        'AI agents and interactive assistants require dynamic, resilient UI controls that adapt to unpredictable structured outputs.',
      ],
      solutions: [
        'Structured modular, type-safe components capable of rendering complex tables, metrics, and cards dynamically.',
      ],
      outcomes: [
        'Advanced UI experimentation and component design repository on GitHub.',
      ],
      highlights: [
        'Dynamic component architecture for modern web applications',
        'Strict TypeScript type-safety across props and events',
        'Reusable layout patterns for data-dense dashboards',
        'Active GitHub repository under @Prakash793',
      ],
      githubUrl: 'https://github.com/Prakash793/A2UI',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (B. Tech.)',
      field: 'Information Technology',
      institution: 'Loyola-ICAM College of Engineering and Technology (LICET)',
      location: 'Chennai, Tamil Nadu, India',
      period: '2011 – 2014',
      highlights: [
        'Rigorous technical curriculum in software engineering, database architecture, data structures, and computational algorithms.',
        'Developed strong analytical capabilities that bridge enterprise software, process automation, and real estate data management.',
        'Active participant in technical symposiums, systems design projects, and collaborative engineering initiatives.',
      ],
    },
  ],

  certifications: [
    {
      title: 'Claude Code 101',
      issuer: 'Anthropic',
      issueDate: 'Issued Apr 2026',
      credentialId: 's544a4pph',
      badgeText: 'Anthropic Certified',
      description:
        'Certified expertise in AI developer workflows, prompt-driven document automation, LLM logic execution, schema-enforced output generation, and modern generative AI best practices.',
      verificationNote: 'Credential ID: s544a4pph',
    },
  ],

  careerMilestones: [
    {
      year: 'Apr 2026',
      title: 'Promoted to Deputy Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      description: 'Entrusted with portfolio-wide lease abstraction operations, quality governance, client alignment, and strategic AI initiatives.',
    },
    {
      year: 'Apr 2026',
      title: 'Anthropic Claude Code Certification',
      company: 'Anthropic',
      description: 'Earned official certification in Claude Code & generative AI automation for enterprise workflows.',
    },
    {
      year: '2026',
      title: 'Published GitHub Open-Source Suite',
      company: 'GitHub @Prakash793',
      description: 'Built and published open-source real estate web applications, translation tools, and easy documentation builders.',
    },
    {
      year: '2024',
      title: 'Promoted to Assistant Manager',
      company: 'RECAM SOLUTIONS PVT LTD',
      description: 'Took ownership of end-to-end delivery pipelines, quality sign-offs, and mentoring team leads.',
    },
    {
      year: '2022',
      title: 'Promoted to Senior Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      description: 'Spearheaded multilingual lease abstraction operations, authoring cross-border operational guidelines.',
    },
    {
      year: '2018',
      title: 'Promoted to Team Lead',
      company: 'RECAM SOLUTIONS PVT LTD',
      description: 'Advanced to frontline operations leadership, guiding analysts through high-volume commercial lease portfolios.',
    },
    {
      year: '2017',
      title: 'Joined Commercial Real Estate Operations',
      company: 'The Annett Group',
      description: 'Began professional career in commercial real estate document abstraction, indexing, and quality auditing.',
    },
  ],

  targetRoles: [
    'Deputy Manager / Operations Manager',
    'Commercial Real Estate Operations Lead',
    'Lease Administration & Abstraction Manager',
    'Director / Lead – CRE Quality & Compliance',
    'AI-Driven Real Estate Operations Specialist',
    'Website Design & Document Automation Lead',
    'Global Delivery & Workflow Manager',
  ],
};
