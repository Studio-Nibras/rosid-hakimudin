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
    period: "2025 — Present",
    role: "Vice Chair",
    company: "HMIF - UNIBA",
    companyUrl: "#",
    description:
      "Support organizational leadership and coordinate activities across multiple divisions. Work closely with team members to plan programs, maintain communication, and ensure the effective execution of organizational initiatives.",
    technologies: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Project Management",
    ],
  },
  {
    period: "2026",
    role: "International Conference Presenter",
    company: "International Conference",
    companyUrl: "#",
    description:
      "Presented academic research at an international conference, sharing research findings and insights with an academic audience.",
    technologies: [
      "Research",
      "Presentation",
      "Academic Writing",
      "Communication",
    ],
  },
  {
    period: "2026",
    role: "Web Developer",
    company: "LIDM 2026",
    companyUrl: "#",
    description:
      "Contributed to the development of Noteflow, an AI-powered learning platform that helps students transform learning materials into mind maps and interactive quizzes. Worked across frontend development and API integration to build an intuitive and responsive learning experience.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
      "Gemini API",
    ],
  },
  {
    period: "2026",
    role: "Finalist — Web Design Competition",
    company: "Web Design Competition",
    companyUrl: "#",
    description:
      "Developed and presented a responsive web design project, focusing on user experience, visual consistency, and functional interface design.",
    technologies: ["UI/UX", "Web Design", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2026",
    role: "Top 10 Finalist",
    company: "National Scientific Poster Competition",
    companyUrl: "#",
    description:
      "Selected as one of the Top 10 finalists in a national scientific poster competition, demonstrating research, visual communication, and presentation skills.",
    technologies: [
      "Research",
      "Scientific Writing",
      "Visual Communication",
      "Presentation",
    ],
  },
  {
    period: "2025 — Present",
    role: "Head of Communications",
    company: "UKMI Kyai Mojo - UNIBA",
    companyUrl: "#",
    description:
      "Manage communication and social media activities for the organization. Create and coordinate digital content while collaborating with team members to support organizational programs and maintain effective information delivery.",
    technologies: [
      "Social Media",
      "Content Creation",
      "Communication",
      "Teamwork",
    ],
  },
  {
    period: "2026",
    role: "Project & Event Coordinator",
    company: "Student Mobility Program — UNIBA",
    companyUrl: "#",
    description:
      "Coordinate the implementation of a student mobility program involving UNIBA Surakarta and Universiti Teknologi PETRONAS. Communicate with participants and external teams while supporting event planning, coordination, and execution.",
    technologies: [
      "Project Management",
      "Event Coordination",
      "Communication",
      "Teamwork",
    ],
  },
  {
    period: "2025",
    role: "Vice Chairman",
    company: "SOCHA 2026",
    companyUrl: "#",
    description:
      "Supported the leadership and coordination of a large-scale futsal tournament, working with the organizing team to manage event operations, coordinate crew, and ensure the successful execution of the competition.",
    technologies: [
      "Leadership",
      "Event Management",
      "Teamwork",
      "Coordination",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Noteflow",
    description:
      "An AI-powered learning platform that helps students transform learning materials into interactive mind maps and quizzes. Developed the frontend interface and integrated AI-powered features to create an intuitive and engaging learning experience.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
      "Gemini API",
    ],
  },
  {
    title: "DietMate",
    description:
      "A web-based nutrition companion designed to help users plan meals, track their progress, and learn about healthier eating habits through a simple and intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "LocalStorage"],
  },
  {
    title: "Travelina",
    description:
      "One of my first web development projects, built as a hands-on learning experience to explore responsive web design, frontend development, and modern UI techniques. This project became an important part of my early journey in learning how to turn ideas into functional websites.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Swiper.js",
      "AOS",
    ],
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

export const bio = `I’m an Informatics student and frontend developer passionate about building modern, responsive, and user-friendly web experiences. I enjoy turning ideas and designs into functional interfaces while focusing on clean code, usability, and thoughtful design.

Beyond development, I’m actively involved in campus organizations and various events, where I’ve had the opportunity to take on leadership roles, coordinate teams, and collaborate with people from different backgrounds. These experiences have strengthened my communication, teamwork, problem-solving, and leadership skills.

Through academic, personal, and organizational projects, I’m continuously developing both my technical and interpersonal skills. I’m currently looking for an internship opportunity where I can contribute to real-world projects, learn from experienced professionals, and grow as a developer.`;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Studio-Nibras", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rosid-hakimudin-213a52329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rosidhakimudin?igsi=MTd1Nnd0MWl0bHpnMg==",
    icon: "instagram",
  },
  { name: "Email", url: "mailto:rosidhakimudin@gmail.com", icon: "mail" },
];
