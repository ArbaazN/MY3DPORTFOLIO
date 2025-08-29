import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  php,
  laravel,
  html,
  css,
  reactjs,
  mysql,
  git,
  linux,
  ubuntu,
  telecollectionLogo,
  helpMeServeLogo,
  logoPlatform,
  apiMarketLogo,
  portfolio,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Qualifications" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// ===================== SERVICES =====================
const services = [
  { title: "Full Stack Developer", icon: fullstack },
  { title: "Backend Developer (PHP & Laravel)", icon: backend },
  { title: "Server & DevOps Specialist", icon: mobile },
  { title: "Problem Solver & Debugger", icon: web },
];

// ===================== EDUCATION / QUALIFICATIONS =====================
const education = [
  {
    title: "B.E. in Computer Science",
    company_name: "AIKTC, Panvel",
    icon: portfolio,
    iconBg: "#fff",
    date: "2019 – 2022",
    points: ["CGPA: 8.7/10"],
  },
  {
    title: "Diploma in Computer Science",
    company_name: "AIARK Polytechnic",
    icon: portfolio,
    iconBg: "#fff",
    date: "2016 – 2019",
    points: ["Percentage: 82.31%"],
  },
];

// ===================== TECHNOLOGIES / SKILLS =====================
const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
  { name: "Linux (CentOS / RHEL)", icon: linux },
  { name: "Ubuntu", icon: ubuntu },
];

// ===================== EXPERIENCE =====================
const experiences = [
  {
    title: "Lead Developer & Project Manager",
    company_name: "Webiknows IT Solutions – Thane, India",
    icon: backend,
    iconBg: "#383E56",
    date: "Sep 2022 – Present",
    points: [
      "Spearheaded development of collections applications (telecalling, loan recovery, agent & field collection systems).",
      "Lead Developer for telecollection project for a central bank (Kolkata), managing design, coding & implementation.",
      "Handled requirement analysis, application architecture, deployment (GitLab CI/CD), and server administration.",
      "Resolved server-level issues on CentOS & RHEL, including PHP installation/debugging & Apache configuration.",
      "Coordinated with clients, implemented new features, enhancements, and resolved production issues.",
    ],
  },
];

// ===================== PROJECTS =====================
const projects = [
  {
    name: "Telecollection (CBOI)",
    description:
      "Enterprise-level telecalling & collections platform → Lead Developer & PM.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: telecollectionLogo,
    source_code_link: "#",
    live_project_link: "https://cboinew.webiknows.net/",
  },
  {
    name: "Help Me Serve",
    description:
      "Crowdfunding platform for social causes → Senior Developer.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: helpMeServeLogo,
    source_code_link: "#",
    live_project_link: "https://helpmeserve.in",
  },
  {
    name: "LOGO Platform",
    description:
      "E-learning platform for Loan professionals → Lead Developer.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: logoPlatform,
    source_code_link: "#",
    live_project_link: "https://logo.conneqtcorp.com/",
  },
  {
    name: "API Market",
    description:
      "B2B platform for pharmaceutical API trade → Senior Developer.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: apiMarketLogo,
    source_code_link: "#",
    live_project_link: "https://api-markets.com",
  },
];

// ===================== EXTRACURRICULAR / ACHIEVEMENTS =====================
const extracurricular = [
  {
    title: "1.5K+ Connections on LinkedIn",
    type: "Achievements",
    icon: portfolio,
    iconBg: "#007BB5",
    date: "April 2023",
    points: ["Credential ID: arbaaznakhwa54"],
    credential: "https://www.linkedin.com/in/arbaaznakhwa54/",
  },
];

export {
  services,
  technologies,
  education,
  experiences,
  projects,
  extracurricular,
};
