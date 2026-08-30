import {
  PersonalProfile,
  WhatIBringItem,
  SkillCategory,
  QAPipelineStep,
  QACompetency,
  Project,
  WorkExperience,
  EducationItem,
  CertificationItem,
  MetricHighlight
} from '../types';

export const personalProfile: PersonalProfile = {
  name: 'Oshadi Rangika',
  firstName: 'Oshadi',
  lastName: 'Rangika',
  roles: [
    'Software Engineering Graduate (First Class Honours)',
    'QA & Software Quality Engineer',
    'AI & Computer Vision Developer',
    'Full-Stack Web Developer'
  ],
  heroHeadline: 'Hi, I’m Oshadi Rangika',
  heroSubtitle: 'Software Engineering Graduate | QA & Software Quality | AI & Full-Stack Development',
  shortBio: 'First Class Honours Software Engineering graduate passionate about building reliable, user-focused software and exploring the intersection of quality engineering, AI, and modern application development.',
  aboutStory: [
    'I am a First Class Honours Software Engineering graduate with hands-on experience in enterprise software quality assurance, full-stack application development, and applied artificial intelligence.',
    'During my tenure as a Software Engineering Intern at SriLankan Airlines (IT Business Systems), I contributed directly to mission-critical aviation software like the Aero Vault system, engineering both frontend and backend components while designing and executing rigorous test suites spanning functional, regression, integration, and user acceptance testing (UAT).',
    'I believe that the hallmark of outstanding software is not merely novel features, but unwavering reliability, high performance, and intuitive user experiences. My multidisciplinary skill set bridges the gap between software engineering, standard-compliant QA methodologies (ISO/IEC 25010), automated testing frameworks, and modern AI/computer vision architectures.'
  ],
  availabilityStatus: 'Available for Software Engineering & QA Roles',
  socialLinks: {
    email: 'oshadirangika2300@gmail.com',
    phone: '+94 70 449 4723',
    location: 'Dankotuwa, Sri Lanka',
    linkedInUrl: 'https://www.linkedin.com/in/oshadi-rangika-795814254',
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL if different]
    resumeUrl: '/assets/Oshadi_Rangika_Resume.pdf'
  }
};

export const metricHighlights: MetricHighlight[] = [
  {
    label: 'Academic Distinction',
    value: 'First Class',
    subtext: 'BSc (Hons) Software Engineering',
    iconName: 'GraduationCap'
  },
  {
    label: 'Enterprise Experience',
    value: 'SriLankan Airlines',
    subtext: 'IT Business Systems & QA',
    iconName: 'Building2'
  },
  {
    label: 'Engineered Solutions',
    value: '6+ Projects',
    subtext: 'AI, Full-Stack & QA Systems',
    iconName: 'Code2'
  },
  {
    label: 'Quality Standard',
    value: 'ISO/IEC 25010',
    subtext: 'Reliable Test & Defect Lifecycle',
    iconName: 'ShieldCheck'
  }
];

export const whatIBring: WhatIBringItem[] = [
  {
    id: 'quality-mindset',
    title: 'Quality & Reliability Mindset',
    tagline: 'Defect prevention, rigorous test suites, and standard compliance',
    description: 'Specialized in manual, automated, API, and performance testing. Experienced in creating formal Software Quality Plans aligned with ISO/IEC 25010 standards, test case design, and end-to-end defect tracking in enterprise environments.',
    iconName: 'ShieldCheck',
    highlights: [
      'Comprehensive Test Planning & Execution',
      'Test Automation with Selenium & Playwright',
      'API & Integration Testing with Postman',
      'Google Lighthouse Performance Optimization'
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Engineering',
    tagline: 'Scalable web applications with modern architectures',
    description: 'Proficient in building clean, responsive frontend applications with React and Tailwind, coupled with secure, scalable backend architectures using Node.js, Express, Flask, C# (.NET), and PHP.',
    iconName: 'Layers',
    highlights: [
      'Modern React.js & TypeScript UI Development',
      'RESTful API Design & Integration',
      'Relational (MySQL) & NoSQL (MongoDB) Modeling',
      'State Management & Modular Clean Code'
    ]
  },
  {
    id: 'ai-computervision',
    title: 'AI & Computer Vision',
    tagline: 'Practical AI integration and 2D-to-3D computer vision',
    description: 'Experienced in developing intelligent solutions using TensorFlow, Mask R-CNN, and OpenCV, translating complex spatial data like 2D floor plans into interactive 3D WebGL visualizations.',
    iconName: 'Cpu',
    highlights: [
      'Object Detection with Mask R-CNN & OpenCV',
      '3D Interactive Rendering with Three.js & R3F',
      'AI-Assisted Optimization Algorithms',
      'Intelligent Feature Integration'
    ]
  },
  {
    id: 'problem-solving-agile',
    title: 'Agile Delivery & Governance',
    tagline: 'Structured execution within Agile Scrum and PRINCE2',
    description: 'A disciplined team collaborator skilled in Agile Scrum sprints, defect triage, cross-functional stakeholder communication, and structured project governance concepts.',
    iconName: 'GitBranch',
    highlights: [
      'Agile Scrum Sprint Execution',
      'Cross-functional Engineering Collaboration',
      'Jira & TestRail Defect Tracking',
      'PRINCE2 Quality Governance Knowledge'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'testing-qa',
    title: 'Testing & Quality Assurance',
    description: 'Standardized testing methodologies, automated suites, and quality governance',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Manual Testing', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Test Case Design', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Regression Testing', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Functional Testing', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'API Testing (Postman)', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Smoke & Sanity Testing', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Selenium WebDriver', category: 'Testing & QA', level: 'Proficient', isKey: true },
      { name: 'Playwright', category: 'Testing & QA', level: 'Proficient', isKey: true },
      { name: 'Katalon Studio', category: 'Testing & QA', level: 'Proficient' },
      { name: 'TestRail', category: 'Testing & QA', level: 'Proficient' },
      { name: 'User Acceptance Testing (UAT)', category: 'Testing & QA', level: 'Advanced', isKey: true },
      { name: 'Google Lighthouse Audits', category: 'Testing & QA', level: 'Advanced' },
      { name: 'Defect Lifecycle Management', category: 'Testing & QA', level: 'Advanced' },
      { name: 'ISO/IEC 25010 Compliance', category: 'Testing & QA', level: 'Proficient' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages for object-oriented, scripting, and enterprise development',
    iconName: 'Code',
    skills: [
      { name: 'JavaScript (ES6+)', category: 'Programming', level: 'Advanced', isKey: true },
      { name: 'Python', category: 'Programming', level: 'Advanced', isKey: true },
      { name: 'Java', category: 'Programming', level: 'Advanced', isKey: true },
      { name: 'SQL', category: 'Programming', level: 'Advanced', isKey: true },
      { name: 'C# (.NET)', category: 'Programming', level: 'Proficient' },
      { name: 'PHP', category: 'Programming', level: 'Proficient' },
      { name: 'TypeScript', category: 'Programming', level: 'Proficient' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Crafting performant, accessible, and responsive user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', category: 'Frontend', level: 'Advanced', isKey: true },
      { name: 'HTML5 & Semantic Markup', category: 'Frontend', level: 'Advanced', isKey: true },
      { name: 'CSS3 / Modern CSS', category: 'Frontend', level: 'Advanced', isKey: true },
      { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', isKey: true },
      { name: 'Material UI', category: 'Frontend', level: 'Proficient' },
      { name: 'Three.js & React Three Fiber', category: 'Frontend', level: 'Proficient', isKey: true },
      { name: 'Responsive Web Design', category: 'Frontend', level: 'Advanced' },
      { name: 'Vite & Build Tooling', category: 'Frontend', level: 'Advanced' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Server-side logic, enterprise services, and REST API development',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', category: 'Backend', level: 'Advanced', isKey: true },
      { name: 'Express.js', category: 'Backend', level: 'Advanced', isKey: true },
      { name: 'RESTful API Architecture', category: 'Backend', level: 'Advanced', isKey: true },
      { name: 'Python (Flask)', category: 'Backend', level: 'Proficient' },
      { name: 'Spring Boot (Java)', category: 'Backend', level: 'Proficient' },
      { name: 'C# / ASP.NET', category: 'Backend', level: 'Proficient' },
      { name: 'Authentication & RBAC', category: 'Backend', level: 'Advanced' }
    ]
  },
  {
    id: 'ai-cv',
    title: 'AI & Computer Vision',
    description: 'Deep learning frameworks, computer vision algorithms, and AI integration',
    iconName: 'Cpu',
    skills: [
      { name: 'TensorFlow', category: 'AI & CV', level: 'Proficient', isKey: true },
      { name: 'Mask R-CNN', category: 'AI & CV', level: 'Proficient', isKey: true },
      { name: 'OpenCV', category: 'AI & CV', level: 'Proficient', isKey: true },
      { name: 'Computer Vision Algorithms', category: 'AI & CV', level: 'Proficient' },
      { name: 'AI API Integration', category: 'AI & CV', level: 'Advanced' },
      { name: 'Data Preprocessing', category: 'AI & CV', level: 'Proficient' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational data modeling, NoSQL document stores, and queries',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', category: 'Databases', level: 'Advanced', isKey: true },
      { name: 'MongoDB', category: 'Databases', level: 'Advanced', isKey: true },
      { name: 'Schema Design & Indexing', category: 'Databases', level: 'Advanced' },
      { name: 'Query Optimization', category: 'Databases', level: 'Proficient' }
    ]
  },
  {
    id: 'tools-practices',
    title: 'Tools, DevOps & Practices',
    description: 'Collaboration workflows, project governance, and software engineering practices',
    iconName: 'GitBranch',
    skills: [
      { name: 'Git & GitHub', category: 'Tools', level: 'Advanced', isKey: true },
      { name: 'Agile / Scrum', category: 'Tools', level: 'Advanced', isKey: true },
      { name: 'PRINCE2 Concepts', category: 'Tools', level: 'Proficient' },
      { name: 'Jira Software', category: 'Tools', level: 'Advanced', isKey: true },
      { name: 'Postman', category: 'Tools', level: 'Advanced', isKey: true },
      { name: 'OOP & Design Patterns', category: 'Tools', level: 'Advanced' },
      { name: 'Data Structures & Algorithms', category: 'Tools', level: 'Advanced' },
      { name: 'Computer Security Principles', category: 'Tools', level: 'Proficient' }
    ]
  }
];

export const qaPipelineSteps: QAPipelineStep[] = [
  {
    step: 1,
    title: 'Requirements Analysis',
    subtitle: 'Scope & Acceptance Criteria',
    description: 'Deconstruct business specifications, user stories, and technical requirements to identify testable conditions and potential edge-case ambiguities early.',
    tools: ['Jira', 'Confluence', 'User Stories'],
    deliverables: ['Traceability Matrix', 'Ambiguity Log'],
    focus: 'Preventing defects at specification phase'
  },
  {
    step: 2,
    title: 'Test Planning',
    subtitle: 'Strategy & Scope Definition',
    description: 'Formulate comprehensive Test Strategies and Quality Plans aligned with ISO/IEC 25010 standards, defining test coverage, environments, risks, and schedules.',
    tools: ['TestRail', 'Software Quality Plan', 'ISO/IEC 25010'],
    deliverables: ['Master Test Plan', 'Risk Assessment Matrix'],
    focus: 'Defining quality objectives and risk mitigation'
  },
  {
    step: 3,
    title: 'Test Design & Case Writing',
    subtitle: 'Scenario & Data Preparation',
    description: 'Design exhaustive test scenarios, positive/negative test cases, boundary value analyses, and prepare realistic test datasets for all functional flows.',
    tools: ['TestRail', 'Equivalence Partitioning', 'Boundary Value Analysis'],
    deliverables: ['Modular Test Suites', 'Mock Test Data Sets'],
    focus: 'Maximizing test coverage with deterministic cases'
  },
  {
    step: 4,
    title: 'Execution & Verification',
    subtitle: 'Manual & Exploratory Testing',
    description: 'Execute structured test runs across target browsers, devices, and user personas. Perform exploratory testing to uncover subtle usability and workflow issues.',
    tools: ['Cross-Browser Testing', 'Postman', 'Chrome DevTools'],
    deliverables: ['Execution Logs', 'Pass/Fail Quality Reports'],
    focus: 'Validating real-world user flows and data accuracy'
  },
  {
    step: 5,
    title: 'Defect Lifecycle & Tracking',
    subtitle: 'Triage & Resolution Verification',
    description: 'Log crystal-clear bug reports with steps to reproduce, expected vs actual outputs, logs, severity/priority classifications, and verify bug fixes with developers.',
    tools: ['Jira', 'TestRail Defect Tracker', 'Root Cause Analysis'],
    deliverables: ['Detailed Bug Tickets', 'Verification Sign-Offs'],
    focus: 'Fast root-cause identification and regression avoidance'
  },
  {
    step: 6,
    title: 'Test Automation',
    subtitle: 'Regression & Smoke Suites',
    description: 'Develop resilient automation suites utilizing Page Object Model (POM) in Selenium WebDriver and Playwright to accelerate smoke testing and regression cycles.',
    tools: ['Selenium WebDriver', 'Playwright', 'Java / JavaScript', 'Katalon Studio'],
    deliverables: ['Automated Regression Suite', 'CI Smoke Tests'],
    focus: 'Fast feedback loops and continuous regression safety'
  },
  {
    step: 7,
    title: 'Performance & Security Audits',
    subtitle: 'Speed & Reliability Benchmarks',
    description: 'Audit web vitals, response times, memory consumption, and role-based authorization security to guarantee high reliability under load.',
    tools: ['Google Lighthouse', 'Network Profilers', 'Security Scans'],
    deliverables: ['Performance Scorecard', 'Vulnerability Assessment'],
    focus: 'Ensuring 90+ Lighthouse score and high performance'
  },
  {
    step: 8,
    title: 'Release Confidence & Sign-off',
    subtitle: 'UAT & Production Readiness',
    description: 'Conduct final User Acceptance Testing (UAT), review defect density metrics, verify release notes, and provide authoritative QA sign-off for deployment.',
    tools: ['UAT Sessions', 'Release Checklist', 'Quality Metrics'],
    deliverables: ['Final Quality Sign-off Document', 'Release Notes'],
    focus: 'Delivering dependable, flawless software to end users'
  }
];

export const qaCompetencies: QACompetency[] = [
  {
    title: 'Functional & Regression Testing',
    description: 'Meticulous verification of application logic against business requirements, ensuring bug fixes and new code updates introduce zero regressions.',
    iconName: 'CheckCircle2',
    tools: ['TestRail', 'Jira', 'Exploratory Testing']
  },
  {
    title: 'Test Automation Frameworks',
    description: 'Engineering robust, maintainable test automation scripts utilizing the Page Object Model (POM) pattern with Selenium WebDriver and Playwright.',
    iconName: 'Terminal',
    tools: ['Selenium', 'Playwright', 'Java', 'Katalon']
  },
  {
    title: 'API & Integration Testing',
    description: 'Validating RESTful API payloads, status codes, authentication headers, error handling, and end-to-end data pipeline integrations.',
    iconName: 'Server',
    tools: ['Postman', 'REST APIs', 'JSON Schema Validation']
  },
  {
    title: 'Performance & Web Vitals',
    description: 'Analyzing First Contentful Paint, Largest Contentful Paint, Cumulative Layout Shift, and asset loading to ensure fast, responsive web experiences.',
    iconName: 'Gauge',
    tools: ['Google Lighthouse', 'Chrome DevTools', 'Network Analyzer']
  },
  {
    title: 'ISO/IEC 25010 Quality Standards',
    description: 'Applying international software quality models covering Functional Suitability, Reliability, Performance Efficiency, Usability, Security, and Maintainability.',
    iconName: 'ShieldCheck',
    tools: ['ISO 25010', 'Quality Plans', 'Traceability']
  },
  {
    title: 'Defect Management & UAT',
    description: 'Managing the complete defect lifecycle from discovery and triage to root cause diagnosis and final User Acceptance sign-off.',
    iconName: 'AlertCircle',
    tools: ['Jira Triage', 'Severity/Priority Matrix', 'UAT Sign-off']
  }
];

export const projects: Project[] = [
  {
    id: 'cleanops-pro',
    title: 'CleanOps Pro',
    subtitle: 'AI-Enhanced Offline-First Cleaning Operations & Quality Management System',
    category: 'QA & Systems',
    role: 'Quality Manager & QA Engineer',
    period: '2025 - 2026',
    summary: 'An enterprise offline-first workforce management platform featuring AI-enhanced verification, QR attendance, proof-based completion, and ISO/IEC 25010-aligned QA governance.',
    description: 'CleanOps Pro is an enterprise-grade cleaning operations platform designed to solve workforce management challenges across complex commercial facilities. The platform supports offline-first task logging, QR-code based attendance with selfie validation, supervisor inspection workflows, payroll automation, and analytical reporting. As the Quality Manager, I spearheaded the software quality strategy, established comprehensive test plans, and conducted rigorous manual and automated validation.',
    badge: 'Enterprise QA & Architecture',
    featured: true,
    keyHighlights: [
      'QR Code + Selfie validation for spoof-proof workforce attendance',
      'Offline-first architecture with local SQLite/IndexedDB synchronization',
      'Dynamic job scheduling, supervisor rating, and inspection audits',
      'Automated payroll and invoicing engine tied to verified task completion',
      'Multi-role secure access control (Staff, Supervisors, Managers, Admins)'
    ],
    qaAchievements: [
      'Created the Master Software Quality Plan aligned with ISO/IEC 25010 software quality standards',
      'Designed over 150+ structured test cases in TestRail covering functional and edge scenarios',
      'Implemented automated smoke testing pipelines using Katalon Studio for core workflows',
      'Performed thorough performance testing and optimization audits using Google Lighthouse',
      'Conducted end-to-end defect tracking and root-cause verification in Agile Scrum sprints'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'TestRail',
      'Katalon Studio',
      'Google Lighthouse',
      'ISO/IEC 25010',
      'Agile Scrum',
      'PRINCE2'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined,
    architectureNotes: [
      'Offline-First Data Sync: Resilient conflict-resolution algorithm syncing queued local records once internet connectivity is restored.',
      'Quality Gates: Pre-merge CI checks, smoke test automation, and strict UAT acceptance criteria before staging deployment.'
    ],
    deliverables: [
      'Software Quality Plan (ISO/IEC 25010)',
      'Automated Katalon Smoke Test Suite',
      'TestRail Test Execution Matrix & Traceability Sheet',
      'Defect Management & Severity Log'
    ]
  },
  {
    id: 'smartspace-ai',
    title: 'SmartSpace AI (ArchiTransform)',
    subtitle: 'AI-Based 3D Interior Layout Optimization & Computer Vision Platform',
    category: 'AI & Computer Vision',
    role: 'Full-Stack Developer & AI Researcher',
    period: '2024 - 2025',
    summary: 'AI-powered web application that analyzes 2D architectural floor plans using Mask R-CNN and OpenCV, converting detected elements into interactive 3D Three.js visualizations.',
    description: 'SmartSpace AI (ArchiTransform) bridges architectural blueprints and real-time 3D spatial planning. The application allows users to upload 2D CAD or scanned floor plans. A custom deep learning pipeline detects architectural components (walls, windows, doors, rooms) and automatically generates interactive 3D interior models in the browser. Users can customize layouts, experiment with furniture placement, and receive intelligent spatial recommendations.',
    badge: 'AI & 3D Computer Vision',
    featured: true,
    keyHighlights: [
      'Automated 2D floor plan parsing using computer vision models',
      'Wall, door, and window segmentation with Mask R-CNN and OpenCV',
      'Interactive 3D rendering in the browser using Three.js and React Three Fiber',
      'Intelligent furniture layout recommendations based on room dimensions and clearance rules',
      'Interactive customization allowing real-time object manipulation in 3D WebGL space'
    ],
    qaAchievements: [
      'Conducted precision validation for AI segmentation models across diverse floor plan styles',
      'Optimized 3D rendering pipeline to maintain 60 FPS across desktop and tablet browsers',
      'Built automated API verification test suites for Python/Flask computer vision endpoints',
      'Identified and resolved WebGL memory leaks during multi-room rendering cycles'
    ],
    technologies: [
      'React.js',
      'Three.js',
      'React Three Fiber',
      'Python',
      'Flask',
      'TensorFlow',
      'Mask R-CNN',
      'OpenCV',
      'Node.js',
      'MongoDB'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined,
    architectureNotes: [
      'Vision Pipeline: Image preprocessing → Mask R-CNN wall segmentation → Vector polygon extraction → 3D mesh extrusion.',
      'WebGL Rendering: React Three Fiber scene with dynamic lighting, shadow maps, and OrbitControls for seamless 360-degree navigation.'
    ],
    deliverables: [
      'Trained Segmentation Pipeline',
      'Interactive 3D WebGL Viewer Component',
      'REST API for Asynchronous Blueprint Processing',
      'Floor Plan Validation Benchmark Dataset'
    ]
  },
  {
    id: 'kokolam-ecommerce',
    title: 'Kokolam Multi-Shop Platform',
    subtitle: 'Full-Stack MERN E-Commerce & Multi-Vendor Marketplace',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    period: '2024',
    summary: 'A robust MERN stack multi-vendor grocery and retail marketplace featuring order tracking, inventory management, dynamic shopping cart, and administrative dashboards.',
    description: 'Kokolam is a comprehensive multi-vendor eCommerce platform engineered with the MERN stack. Designed to handle high-frequency grocery and merchandise ordering, it includes full product cataloging, vendor inventory management, categorized filtering, secure checkout workflows, and order status lifecycle tracking for administrators and customers.',
    badge: 'MERN Full-Stack',
    featured: true,
    keyHighlights: [
      'Multi-vendor product management and category navigation',
      'Real-time shopping cart with quantity management and price calculation',
      'Comprehensive order lifecycle tracking from placement to delivery',
      'Secure customer authentication and profile management',
      'Responsive UI optimized for desktop, tablet, and mobile shoppers'
    ],
    qaAchievements: [
      'Designed end-to-end integration tests for the checkout and order placement pipeline',
      'Validated database indexing and queries in MongoDB for sub-50ms catalog retrieval',
      'Performed cross-device responsive layout testing across 6 major screen breakpoints'
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
      'REST APIs',
      'Postman'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined,
    architectureNotes: [
      'MERN Architecture: REST API backend communicating with React SPA via Axios, with JWT token-based authentication.',
      'Scalable MongoDB Schemas: Optimized embedding and referencing patterns for fast cart operations and order history lookups.'
    ]
  },
  {
    id: 'banana-math-quiz',
    title: 'Banana Math Quiz Game',
    subtitle: 'Interactive Educational Web Application & Real-Time Scoring',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    period: '2023 - 2024',
    summary: 'An engaging, gamified mathematical learning application with user authentication, dynamic difficulty scaling (Child/Adult modes), and real-time leaderboards.',
    description: 'Banana Math Quiz Game is an interactive web-based educational platform created to make mathematical learning intuitive and engaging. It features secure user accounts, dynamic quiz generation, adult/child difficulty modes, timed questions, instant scoring feedback, and global leaderboards.',
    badge: 'Interactive Web App',
    featured: true,
    keyHighlights: [
      'User registration, login, and personalized score history',
      'Separate difficulty calculation algorithms for children and adults',
      'Real-time interactive countdown timer and score multiplier',
      'Global leaderboard ranking top participants',
      'Custom backend APIs handling secure score recording and validation'
    ],
    qaAchievements: [
      'Conducted boundary testing on scoring algorithms and timer edge conditions',
      'Verified anti-cheat mechanisms in backend API score calculation',
      'Ensured seamless cross-browser animation rendering on mobile and desktop'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6)',
      'PHP',
      'MySQL',
      'REST APIs'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined,
    architectureNotes: [
      'Client-Server Architecture: Lightweight vanilla JS UI with asynchronous fetch requests to PHP backend endpoints and MySQL database.'
    ]
  },
  {
    id: 'selenium-automation-framework',
    title: 'Selenium Test Automation Suite',
    subtitle: 'Modular Page Object Model (POM) Automated Regression Framework',
    category: 'Automation & Tools',
    role: 'QA Automation Engineer',
    period: '2024',
    summary: 'A reusable Page Object Model (POM) automated test framework written in Java and Selenium WebDriver for end-to-end regression and smoke testing.',
    description: 'Engineered a clean, maintainable automated testing framework designed to streamline web application regression testing. Implements the Page Object Model (POM) design pattern to decouple test scripts from UI locators, supporting automated login, customer registration, shopping workflows, and checkout validations with detailed test reports.',
    badge: 'Test Automation Framework',
    featured: false,
    keyHighlights: [
      'Page Object Model (POM) architectural design for maximum maintainability',
      'Automated end-to-end workflows: user authentication, search, cart, and checkout',
      'Explicit and fluent wait strategies eliminating flaky test executions',
      'Automated HTML test execution reporting with screenshot capture on failure'
    ],
    qaAchievements: [
      'Reduced manual regression execution time by over 70%',
      'Built parameter-driven test data handling via external fixtures',
      'Standardized assertion libraries for deterministic validation'
    ],
    technologies: [
      'Selenium WebDriver',
      'Java',
      'TestNG',
      'Maven',
      'Page Object Model',
      'Git'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined
  },
  {
    id: 'ecommerce-store-php',
    title: 'Responsive eCommerce Online Store',
    subtitle: 'Classic Full-Stack Shopping Platform with Inventory & Cart',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    period: '2023',
    summary: 'A responsive shopping platform featuring product catalog search, shopping cart management, user accounts, and order tracking.',
    description: 'Developed a full-stack online shopping platform with a focus on clean database relationships, fast product search, and responsive layout across devices.',
    badge: 'Web Application',
    featured: false,
    keyHighlights: [
      'Dynamic product search and category filtering',
      'Persistent shopping cart functionality',
      'Relational database integration for order tracking',
      'Clean, accessible responsive UI design'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
      'MySQL'
    ],
    githubUrl: 'https://github.com/oshadirangika', // [ADD GITHUB URL]
    liveUrl: undefined
  }
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'srilankan-airlines',
    role: 'Software Engineering Intern',
    company: 'SriLankan Airlines',
    division: 'IT Business Systems (IT Operations & Service Management)',
    location: 'Katunayake / Colombo, Sri Lanka',
    period: '04/2025 - 10/2025',
    type: 'Internship / Enterprise',
    summary: 'Contributed to enterprise aviation business systems including the Aero Vault system, engineering full-stack components and conducting enterprise-grade QA testing across functional, regression, and user acceptance phases.',
    responsibilities: [
      'Developed frontend and backend software components for the Aero Vault system using HTML, CSS, JavaScript, C#, and .NET.',
      'Designed, documented, and executed comprehensive test cases for critical aviation business applications.',
      'Performed functional, regression, smoke, and exploratory testing across multiple system releases.',
      'Identified, documented, and tracked software defects; collaborated closely with developers to troubleshoot root causes and validate bug fixes.',
      'Participated actively in System Integration Testing (SIT) and User Acceptance Testing (UAT) sessions with operational stakeholders.',
      'Created and executed detailed test scenarios to validate application features, expected system outputs, and boundary conditions.',
      'Collaborated with senior software engineers, QA leads, and business analysts within an Agile environment to boost software quality and performance.'
    ],
    keyAchievements: [
      'Successfully validated and tested core modules of the Aero Vault enterprise aviation system',
      'Significantly improved test coverage for operational modules through structured test case documentation',
      'Accelerated defect resolution cycles through clear, reproducible bug reports with diagnostic logs'
    ],
    technologies: [
      'C#',
      '.NET',
      'JavaScript',
      'HTML/CSS',
      'QA Testing',
      'Test Case Design',
      'Regression Testing',
      'Defect Management',
      'System Integration Testing',
      'UAT'
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'sliit-bedfordshire',
    degree: 'BSc (Hons) Software Engineering',
    institution: 'SLIIT / University of Bedfordshire',
    period: '08/2022 - 04/2026',
    grade: 'First Class Honours',
    gradeBadge: 'First Class Honours',
    focus: 'Software Architecture, Quality Assurance, Full-Stack Systems, Artificial Intelligence & Machine Learning',
    highlights: [
      'Graduated with First Class Honours distinction',
      'Specialized in Software Quality Assurance, Test Automation, and AI-Powered Systems',
      'Completed capstone research in Computer Vision and 3D architectural transformation (SmartSpace AI)',
      'Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management, Computer Security, Software Project Management'
    ]
  },
  {
    id: 'icet-master',
    degree: 'Certified Master Program',
    institution: 'Institute of Computer Engineering Technology (ICET)',
    period: '07/2024 - Present',
    focus: 'Advanced Software Engineering, Enterprise Java, Spring Boot, Microservices & Architecture',
    highlights: [
      'Advanced enterprise application development with Spring Boot and Java ecosystems',
      'Microservices architecture, RESTful API design, and enterprise database integration'
    ]
  },
  {
    id: 'ave-maria-al',
    degree: 'G.C.E. Advanced Level (Science Stream)',
    institution: 'Ave Maria Convent, Negombo',
    period: '01/2006 - 08/2019',
    focus: 'Biological Sciences, Mathematics & Analytical Thinking',
    highlights: [
      'Strong academic foundation in mathematical reasoning and scientific methodology',
      'Active participation in school STEM and academic clubs'
    ]
  },
  {
    id: 'bci-english',
    degree: 'English Master Certificate Course',
    institution: 'BCI Campus',
    period: '2017',
    focus: 'Professional English Communication & Technical Presentation',
    highlights: [
      'Full Professional Proficiency in English technical writing and spoken communication'
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'ibm-python-ai',
    title: 'Python for Data Science, AI and Development',
    issuer: 'IBM (Coursera)',
    date: '2024',
    credentialUrl: 'https://coursera.org', // [ADD CREDENTIAL LINK]
    skills: ['Python', 'Data Science', 'AI Concepts', 'REST APIs', 'Pandas & NumPy'],
    isHighlighted: true
  },
  {
    id: 'meta-frontend',
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    date: '2024',
    credentialUrl: 'https://coursera.org', // [ADD CREDENTIAL LINK]
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
    isHighlighted: true
  },
  {
    id: 'meta-backend',
    title: 'Introduction to Back-End Development',
    issuer: 'Meta (Coursera)',
    date: '2024',
    credentialUrl: 'https://coursera.org', // [ADD CREDENTIAL LINK]
    skills: ['Node.js', 'Backend Architectures', 'APIs', 'Databases'],
    isHighlighted: true
  },
  {
    id: 'coursera-java',
    title: 'Fundamentals of Java Programming',
    issuer: 'Coursera',
    date: '2023',
    credentialUrl: 'https://coursera.org', // [ADD CREDENTIAL LINK]
    skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    isHighlighted: false
  },
  {
    id: 'selenium-cert',
    title: 'Introduction to Selenium',
    issuer: 'QA & Automation Certification',
    date: '2024',
    credentialUrl: undefined, // [ADD CREDENTIAL LINK]
    skills: ['Selenium WebDriver', 'Automated Testing', 'Page Object Model', 'TestNG'],
    isHighlighted: true
  },
  {
    id: 'playwright-cert',
    title: 'Introduction to Playwright',
    issuer: 'QA & Automation Certification',
    date: '2024',
    credentialUrl: undefined, // [ADD CREDENTIAL LINK]
    skills: ['Playwright', 'End-to-End Testing', 'Modern Web Automation'],
    isHighlighted: true
  }
];

export const languages = [
  { language: 'English', proficiency: 'Full Professional Proficiency' },
  { language: 'Sinhala', proficiency: 'Native or Bilingual Proficiency' }
];

export const references = [
  {
    name: 'Kusal Lankathilakage',
    title: 'Manager - Software Engineering Department',
    company: 'SriLankan Airlines',
    email: 'kusal.lankathilakage@srilankan.com',
    phone: '+94 71 021 1749'
  },
  {
    name: 'M.T.N.S. Dilshan',
    title: 'Software Engineer, UI/UX',
    company: 'SriLankan Airlines',
    email: 'nethsara.dilshan@srilankan.com',
    phone: '071 434 1176'
  }
];
