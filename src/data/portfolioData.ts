export interface Project {
  id: string;
  number: string;
  title: string;
  tag: string;
  category: string;
  tagline?: string;
  role: string;
  problem: string;
  solution: string;
  myContribution: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
  github?: string;
  image?: string;
  logo?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  statusNote?: string;
}

export const personalInfo = {
  name: "S.M HASSAN ABBAS",
  shortName: "HASSAN",
  monogram: "HA",
  title: "TECHNICAL PROJECT MANAGER & FULL-STACK DEVELOPER",
  subTitle: "Technical Project Manager & Full-Stack Developer",
  location: "Karachi, Pakistan",
  email: "connect.hassanabbas@gmail.com",
  phone: "+92-3360817934",
  phoneRaw: "+923360817934",
  status: "AVAILABLE FOR FREELANCE & FULL-TIME",
  copyrightYear: "2026",
  heroBio:
    "Technical Project Manager & Full-Stack Developer experienced in translating business requirements into high-performance software. Combines hands-on full-stack development across Next.js, Fastify, and Python with disciplined agile sprint planning and milestone delivery.",
  aboutHeading: "Lead with vision. Code with precision.",
  aboutText:
    "I am a Technical Project Manager & Full-Stack Developer with proven experience architecting scalable systems using Next.js, Node.js, Fastify, and Python/Django. I bridge business strategy with engineering execution to deliver robust, high-throughput digital products.",
  metrics: {
    experienceYears: "3+",
    projectsCompleted: "25+",
    sprintDelivery: "98%",
    agileSprints: "40+",
  },
  socialLinks: {
    email: "mailto:connect.hassanabbas@gmail.com",
    phone: "tel:+923360817934",
    whatsapp: "https://wa.me/923360817934",
    linkedin: "https://www.linkedin.com/in/syed-muhammad-hassan-abbas-naqvi-a92218323",
    instagram: "https://www.instagram.com/its._.hassannn/",
    facebook: "https://www.facebook.com/share/1HyUTk1grC/",
    github: "https://github.com/connectwithhassan",
    resume: "/Hassan-CV.pdf",
  },
};

export const skillsList = [
  { name: "Next.js & React", category: "frontend" },
  { name: "Node.js & Fastify", category: "backend" },
  { name: "Python & Django", category: "backend" },
  { name: "PostgreSQL & MongoDB", category: "database" },
  { name: "AI & RAG Integration", category: "ai" },
  { name: "Agile Sprint Planning", category: "management" },
  { name: "Client Communication", category: "management" },
  { name: "Git & Docker", category: "devops" },
];

export const services = [
  {
    icon: "Monitor",
    title: "FULL STACK ARCHITECTURE",
    description: "End-to-end web applications with Next.js, React, and modular clean component design.",
  },
  {
    icon: "Code2",
    title: "HIGH-PERFORMANCE BACKEND",
    description: "Ultra-fast microservices & APIs built with Node.js, Fastify, Django & PostgreSQL.",
  },
  {
    icon: "Cpu",
    title: "AI & RAG INTEGRATION",
    description: "Intelligent agentic workflows, vector search, document retrieval & LLM pipeline chains.",
  },
  {
    icon: "Kanban",
    title: "TECHNICAL PROJECT MANAGEMENT",
    description: "Sprint planning, stakeholder demos, milestone tracking & engineering team alignment.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understanding business goals, user personas, technical requirements & scoping constraints.",
  },
  {
    step: "02",
    title: "PLAN",
    description: "Agile roadmap, technical architecture design, database schema, and sprint milestones.",
  },
  {
    step: "03",
    title: "ARCHITECT & DESIGN",
    description: "Crafting scalable system components, high-throughput APIs, and responsive intuitive interfaces.",
  },
  {
    step: "04",
    title: "DEVELOP",
    description: "Clean code execution with Next.js, Fastify, Docker, continuous testing, and code reviews.",
  },
  {
    step: "05",
    title: "LAUNCH",
    description: "CI/CD automated deployment, performance tuning, metrics monitoring & seamless handover.",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    role: "PROJECT MANAGER",
    company: "Techmire Solutions",
    period: "AUG 2026 - PRESENT",
    type: "Current Role",
    bullets: [
      "Manage direct client communications, translating business needs into detailed technical scopes, timelines, and deliverables.",
      "Lead end-to-end agile delivery lifecycles, driving sprint planning, milestone reviews, and on-time project releases.",
      "Align client expectations with engineering teams, providing regular demos, managing scope adjustments, and resolving technical blockers.",
    ],
  },
  {
    role: "LEAD FULL STACK DEVELOPER",
    company: "Techmire Solutions",
    period: "JUN 2025 - AUG 2026",
    type: "Full-Time Engineering",
    bullets: [
      "Architected scalable web applications using Next.js, Node.js, and high-performance Fastify backends.",
      "Led development teams through full agile lifecycles, driving code reviews, system design, and technical standards.",
      "Optimized database schemas and API throughput, cutting response times and ensuring reliable production deployments.",
    ],
  },
  {
    role: "FULL STACK INTERN",
    company: "Techmire Solutions",
    period: "AUG 2024 - MAY 2025",
    type: "Internship",
    bullets: [
      "Built responsive frontend interfaces using React/Next.js and integrated backend services with Node.js/Django.",
      "Developed RESTful APIs and managed database queries across PostgreSQL and MongoDB.",
      "Collaborated in Agile sprints, conducting code reviews and managing deployments via Git/GitHub.",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "B.SC SOFTWARE ENGINEERING",
    institution: "SIR SYED UNIVERSITY",
    period: "2022 - 2026",
    statusNote: "Degree in Progress / Final Year",
  },
  {
    degree: "INTERMEDIATE (PRE-ENGINEERING)",
    institution: "Govt. College For Men",
    period: "2020 - 2022",
    statusNote: "Higher Secondary Certificate",
  },
  {
    degree: "MATRICULATION (COMPUTER SCIENCE)",
    institution: "S.M Public Academy",
    period: "2019 - 2020",
    statusNote: "Secondary School Certificate",
  },
];

export const projectsData: Project[] = [
  {
    id: "gradewise-ai",
    number: "01",
    title: "GRADEWISE AI",
    tag: "EDTECH & AI ASSESSMENT",
    category: "NEXT.JS / SANITY CMS / LLM APIS",
    tagline: "Intelligent Automated Assessment & Learning Engine",
    role: "Full-Stack Developer & AI Pipeline Architect",
    problem:
      "Educational institutions face significant grading delays and rigid curriculum structures that cannot dynamically adapt to students' varying comprehension levels.",
    solution:
      "Engineered an automated EdTech platform integrating Next.js App Router with Sanity CMS for dynamic course authoring and LLM prompt chaining for rapid, consistent assignment evaluation.",
    myContribution:
      "Architected the Next.js frontend, integrated Sanity CMS content schemas, designed API evaluation endpoints with prompt chaining, and built the performance analytics dashboard.",
    description:
      "A high-performance EdTech platform integrating Next.js with Sanity CMS for dynamic, structured content management. Features intelligent automated assessment generation, automated study workflows, and real-time performance analytics that make the learning and grading process seamless.",
    technologies: ["Next.js", "Sanity CMS", "Node.js", "LLM APIs", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Dynamic Content Management: Sanity CMS integration enables educators to create and publish structured assessment modules without engineering intervention.",
      "Automated Evaluation Workflow: Prompt-chained LLM APIs parse and evaluate student submissions against rubrics in seconds.",
      "Real-Time Analytics Dashboard: Instant grade visualization and performance metrics for both instructors and learners.",
      "Performance-Tuned Frontend: Next.js App Router implementation delivering sub-second page transitions and responsive test-taking UX.",
    ],
    image: "/gradewise-ai.png",
    logo: "/gradewise-ai.png",
    featured: true,
  },
  {
    id: "terra-pure-foods",
    number: "02",
    title: "TERRA PURE FOODS",
    tag: "ORGANIC E-COMMERCE & FARM-TO-TABLE",
    category: "NEXT.JS / E-COMMERCE / WHATSAPP API",
    tagline: "Modern Farm-to-Table Organic Kitchen Essentials Platform",
    role: "Frontend Architect & WhatsApp Commerce Integration",
    problem:
      "A farm-to-table organic brand required a frictionless direct-to-consumer store that established brand trust without forcing customers through complex multi-step checkouts.",
    solution:
      "Developed a clean, aesthetic Next.js storefront featuring transparent product sourcing, dynamic weight selection (5KG/10KG), and a direct WhatsApp order dispatch mechanism.",
    myContribution:
      "Designed the responsive UI, implemented client-side weight/packaging selectors, and engineered the automated WhatsApp order string generator for 1-click mobile purchasing.",
    description:
      "Terra Pure Foods is a modern, farm-to-table e-commerce platform designed to showcase and sell 100% organic, unprocessed kitchen essentials (such as stone-ground Chakki Atta, cold-pressed Mustard Oil, and Basmati Rice). The web application focuses on clean aesthetics, user trust, and a frictionless shopping experience with dynamic packaging options and direct WhatsApp ordering.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp Business API", "Responsive UX", "TypeScript"],
    highlights: [
      "Dynamic Product Catalog: Categorized product pages with nutritional data, customer reviews, and weight variant selectors (5KG/10KG).",
      "Direct WhatsApp Ordering: Custom deep-link handler pre-fills order details, items, and address directly into WhatsApp for quick checkout.",
      "Organic Visual Aesthetic: Earthy dark palette, custom typography, and responsive grid layouts tailored for health-conscious shoppers.",
      "Server-Side Optimization: Fast page loads and SEO optimization powered by Next.js server components.",
    ],
    image: "/terrapure-01.webp",
    logo: "/terrapure-01.webp",
    featured: true,
  },
  {
    id: "tawakkal-store",
    number: "03",
    title: "TAWAKKAL STORE",
    tag: "E-COMMERCE & CUSTOM ADMIN PANEL",
    category: "NEXT.JS / NODE.JS / CUSTOM BACKEND",
    tagline: "Modern E-Commerce Store with Custom Node.js Admin Control Panel",
    role: "Lead Full-Stack Developer & Admin Panel Architect",
    problem:
      "Growing e-commerce operations required unified inventory management, live stock alerts, and customer order processing without relying on expensive monthly SaaS plugins.",
    solution:
      "Engineered an end-to-end custom e-commerce solution pairing a high-speed Next.js customer frontend with a high-throughput Node.js backend and proprietary administrative control dashboard.",
    myContribution:
      "Architected backend RESTful API endpoints, designed PostgreSQL/MongoDB database models, developed the administrative dashboard, and optimized frontend catalog rendering.",
    description:
      "Tawakkal Store is an end-to-end modern e-commerce web platform engineered with a high-performance Node.js backend and a dedicated custom admin control panel that manages the entire website operations—including real-time inventory, order tracking, product catalogs, and customer data with high core web vitals.",
    technologies: ["Next.js", "Node.js", "Custom Admin Panel", "Tailwind CSS", "REST APIs", "State Management"],
    highlights: [
      "Custom Admin Control Panel: Centralized dashboard for non-technical staff to update product inventory, track orders, and view daily sales.",
      "High-Throughput Node.js API: RESTful endpoints with validation guards and connection pooling for concurrent traffic spikes.",
      "Dynamic Catalog Filtering: Category drill-downs, instantaneous price/stock updates, and lightweight cart state management.",
      "Core Web Vitals Optimization: Sub-second initial contentful paint with optimized asset delivery and responsive layouts.",
    ],
    image: "/tawakkal-logo.webp",
    logo: "/tawakkal-logo.webp",
    featured: true,
  },
];
