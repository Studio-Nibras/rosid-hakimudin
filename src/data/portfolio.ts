export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
  products?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  stars?: number;
  installs?: string;
  image?: string;
}

export interface Article {
  year: string;
  title: string;
  url?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    role: "Senior Frontend Engineer, Design Systems",
    company: "Vercel",
    companyUrl: "#",
    description:
      "Build and maintain critical design system components used across the platform. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility and performance.",
    technologies: ["TypeScript", "React", "Next.js", "Storybook", "Tailwind CSS"],
  },
  {
    period: "2021 — 2024",
    role: "Lead Engineer",
    company: "Stripe",
    companyUrl: "#",
    description:
      "Led frontend architecture for the Payments Dashboard, serving millions of merchants. Built high-quality, performant interfaces across web and mobile. Mentored junior engineers and drove adoption of modern tooling.",
    technologies: ["React", "TypeScript", "GraphQL", "Node.js", "Ruby"],
    products: ["Dashboard", "Checkout", "Elements"],
  },
  {
    period: "2019 — 2021",
    role: "UI Engineer",
    company: "Spotify",
    companyUrl: "#",
    description:
      "Developed and styled interactive web applications for Spotify's internal tools and artist-facing platforms. Collaborated with designers to create pixel-perfect, accessible user interfaces.",
    technologies: ["JavaScript", "React", "SCSS", "Python"],
    products: ["Backstage", "Artist Portal"],
  },
  {
    period: "2017 — 2019",
    role: "Frontend Developer",
    company: "Figma",
    companyUrl: "#",
    description:
      "Contributed to the web-based design tool, building collaborative features and optimizing rendering performance. Worked on plugin APIs and community-facing features.",
    technologies: ["TypeScript", "WebGL", "React", "C++"],
  },
  {
    period: "2016 — 2017",
    role: "Software Engineer Co-op",
    company: "GitHub",
    companyUrl: "#",
    description:
      "Worked with the engineering team on pull request review tools and notification systems. Built and shipped features used by millions of developers.",
    technologies: ["Ruby", "Rails", "JavaScript", "CSS"],
  },
];

export const projects: Project[] = [
  {
    title: "DevKit CLI",
    description:
      "A powerful command-line toolkit for scaffolding modern web projects with best practices baked in. Supports React, Vue, and Svelte with TypeScript configurations.",
    technologies: ["Node.js", "TypeScript", "Commander", "Inquirer"],
    stars: 2847,
  },
  {
    title: "Chromatic UI",
    description:
      "An open-source design system and component library built for accessibility-first development. Features 50+ components with full dark mode support.",
    technologies: ["React", "Tailwind CSS", "Radix UI", "Storybook"],
    installs: "12k+ weekly",
  },
  {
    title: "Pulse Analytics",
    description:
      "Real-time web analytics dashboard with privacy-first tracking. Lightweight script (<1KB) with zero cookie dependency and GDPR compliance built in.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Vercel"],
    stars: 1203,
  },
  {
    title: "Spectrum Theme",
    description:
      "A minimal dark theme for VS Code, Sublime Text, and JetBrains IDEs. Carefully crafted color palette optimized for long coding sessions.",
    technologies: ["JSON", "YAML", "Theme API"],
    installs: "85k+ installs",
  },
];

export const articles: Article[] = [
  {
    year: "2025",
    title: "Building Accessible Design Systems at Scale",
    url: "#",
  },
  {
    year: "2024",
    title: "The State of CSS-in-JS: A Practical Guide",
    url: "#",
  },
  {
    year: "2023",
    title: "Optimizing React Rendering with Concurrent Features",
    url: "#",
  },
  {
    year: "2022",
    title: "A Deep Dive into Web Component Architecture",
    url: "#",
  },
];

export const bio = `I'm a frontend engineer with a passion for building beautiful, performant, and accessible web experiences. I enjoy working at the intersection of design and engineering, where thoughtful code meets pixel-perfect interfaces.

Currently, I'm a senior frontend engineer at Vercel, where I help build and maintain the design system that powers the platform. My focus is on creating reusable, accessible components that scale across teams and products.

Previously, I've worked across a range of environments — from fast-moving startups to industry-leading tech companies including Stripe, Spotify, and Figma. These experiences have shaped how I think about building products that are both well-crafted and widely usable.

Outside of work, you can find me contributing to open source, writing about web development, or exploring new coffee shops in San Francisco.`;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "CodePen", url: "https://codepen.io", icon: "codepen" },
  { name: "Email", url: "mailto:hello@example.com", icon: "mail" },
];
