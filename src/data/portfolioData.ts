export interface Project {
  id: string;
  number: string;
  title: string;
  tag: string;
  category: string;
  tagline?: string;
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
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export const personalInfo = {
  name: "S.M HASSAN ABBAS",
  shortName: "HASSAN",
  monogram: "HA",
  title: "FULL STACK DEVELOPER & PROJECT MANAGER",
  subTitle: "Technical Project Manager & Full-Stack Developer",
  location: "Karachi, Pakistan",
  email: "connect.hassanabbas@gmail.com",
  phone: "+92-3360817934",
  phoneRaw: "+923360817934",
  status: "AVAILABLE FOR FREELANCE & FULL-TIME",
  copyrightYear: "2026",
  heroBio:
    "Technical Project Manager & Full-Stack Developer experienced in translating business requirements into high-performance software. Combines hands-on full-stack development with strong team leadership, sprint planning, and on-time delivery.",
  aboutHeading: "Lead with vision. Code with precision.",
  aboutText:
    "I am a Technical Project Manager & Full-Stack Developer with proven experience architecting scalable systems using Next.js, Node.js, Fastify, and Python/Django. I bridge business strategy with engineering excellence to deliver robust, high-throughput digital products.",
  metrics: {
    experienceYears: "4+",
    projectsCompleted: "28+",
    clientSatisfaction: "100%",
    agileSprints: "50+",
  },
  socialLinks: {
    email: "mailto:connect.hassanabbas@gmail.com",
    phone: "tel:+923360817934",
    whatsapp: "https://wa.me/923360817934",
    linkedin: "https://www.linkedin.com/in/syed-muhammad-hassan-abbas-naqvi-a92218323",
    instagram: "https://www.instagram.com/its._.hassannn/",
    facebook: "https://www.facebook.com/share/1HyUTk1grC/",
    github: "https://github.com/",
    resume: "/Hassan-CV.pdf",
  },
};

export const skillsList = [
  { name: "Next.js & React", category: "frontend" },
  { name: "Node.js & Fastify", category: "backend" },
  { name: "Python & Django", category: "backend" },
  { name: "PostgreSQL & MongoDB", category: "database" },
  { name: "AI & RAG Integration", category: "ai" },
  { name: "Agile Project Management", category: "management" },
  { name: "Client Communication", category: "management" },
  { name: "Git & Docker", category: "devops" },
];

export const services = [
  {
    icon: "Monitor",
    title: "FULL STACK ARCHITECTURE",
    description: "End-to-end web applications with Next.js, React, and modular clean architectures.",
  },
  {
    icon: "Code2",
    title: "HIGH-PERFORMANCE BACKEND",
    description: "Ultra-fast microservices & APIs built with Node.js, Fastify, Django & PostgreSQL.",
  },
  {
    icon: "Cpu",
    title: "AI & RAG INTEGRATION",
    description: "Intelligent agentic systems, vector databases, document retrieval & LLM workflows.",
  },
  {
    icon: "Kanban",
    title: "TECHNICAL PROJECT MANAGEMENT",
    description: "Sprint planning, stakeholder alignment, milestone execution & agile team leadership.",
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
    bullets: [
      "Managed direct client communications, translating business needs into detailed technical scopes, timelines, and deliverables.",
      "Led end-to-end agile delivery lifecycles, driving sprint planning, milestone reviews, and on-time project releases.",
      "Aligned client expectations with engineering teams, providing regular demos, managing scope adjustments, and resolving technical blockers.",
    ],
  },
  {
    role: "LEAD FULL STACK DEVELOPER",
    company: "Techmire Solutions",
    period: "JUN 2025 - AUG 2026",
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
  },
  {
    degree: "INTERMEDIATE",
    institution: "Govt. College For Men",
    period: "2020 - 2022",
  },
  {
    degree: "MATRICULATION",
    institution: "S.M Public Academy",
    period: "2019 - 2020",
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
    description:
      "A high-performance EdTech platform integrating Next.js with Sanity CMS for dynamic, structured content management. Features intelligent automated assessment generation, automated study workflows, and real-time performance analytics that make the learning and grading process seamless.",
    technologies: ["Next.js", "Sanity CMS", "Node.js", "LLM APIs", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Dynamic content management via Sanity CMS with real-time editorial updates.",
      "Automated evaluation workflows with LLM API prompt chaining.",
      "Performance-tuned Next.js App Router frontend with sub-second page transitions.",
    ],
    image: "/gradewise-ai.png",
    logo: "/gradewise-ai.png",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "terra-pure-foods",
    number: "02",
    title: "TERRA PURE FOODS",
    tag: "ORGANIC E-COMMERCE & FARM-TO-TABLE",
    category: "NEXT.JS / E-COMMERCE / WHATSAPP API",
    tagline: "Modern Farm-to-Table Organic Kitchen Essentials Platform",
    description:
      "Terra Pure Foods is a modern, farm-to-table e-commerce platform designed to showcase and sell 100% organic, unprocessed kitchen essentials (such as stone-ground Chakki Atta, cold-pressed Mustard Oil, and Basmati Rice). The web application focuses on clean aesthetics, user trust, and a frictionless shopping experience with dynamic packaging options and direct WhatsApp ordering.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WhatsApp Business API", "Responsive UX", "TypeScript"],
    highlights: [
      "Dynamic Product Catalog: Categorized pages for staple items with detailed pricing, packaging options (5KG/10KG), and customer reviews.",
      "Interactive UI & Branding: Earthy, minimalist design built with Tailwind CSS, custom typography, and responsive layouts tailored for conscious consumers.",
      "Direct Order & WhatsApp Integration: Seamless communication channels allowing users to place quick inquiries and direct phone/WhatsApp orders.",
      "High-Performance Architecture: Built with Next.js for optimized server-side rendering, fast page loads, and smooth mobile-first navigation.",
    ],
    image: "/terrapure-01.webp",
    logo: "/terrapure-01.webp",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "tawakkal-store",
    number: "03",
    title: "TAWAKKAL STORE",
    tag: "E-COMMERCE & CUSTOM ADMIN PANEL",
    category: "NEXT.JS / NODE.JS / CUSTOM BACKEND",
    tagline: "Modern E-Commerce Store with Custom Node.js Admin Control Panel",
    description:
      "Tawakkal Store is an end-to-end modern e-commerce web platform engineered with a high-performance Node.js backend and a dedicated custom admin control panel that manages the entire website operations—including real-time inventory, order tracking, product catalogs, and customer data with high core web vitals.",
    technologies: ["Next.js", "Node.js", "Custom Admin Panel", "Tailwind CSS", "REST APIs", "State Management"],
    highlights: [
      "Custom Backend Admin Panel: Centralized control dashboard to manage entire website operations, catalog inventory, orders, and customer data in real time.",
      "Robust Node.js Backend: High-throughput server architecture with scalable RESTful API endpoints and secure transaction handling.",
      "Interactive Product Catalog: Structured category navigation, search, and dynamic attribute filtering for effortless browsing.",
      "State Management & Cart: Smooth cart workflows, instant stock availability updates, and lightweight state handling.",
      "Optimized Checkout & Order Flow: Streamlined user journey with secure checkout forms, shipping calculators, and direct order communication channels.",
      "High-Speed Rendering: Powered by modern frontend tooling to ensure rapid page load speeds, high core web vitals, and clean responsive design.",
    ],
    image: "/tawakkal-logo.webp",
    logo: "/tawakkal-logo.webp",
    link: "#",
    github: "#",
    featured: true,
  },
];
