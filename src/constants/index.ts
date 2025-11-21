// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  Java,
  javascript,
  typescript,
  reactnative,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  nodejs,
  express,
  spring,
  dotnet,
  mongodb,
  mysql,
  githubb,
  postgresql,
  python,
  csharp,
  sql,
  postman,
  jenkins,
  graphql,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  linkedin,
  instagram,
  github,
  micro,
  fast,
  abhc,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  datacollide,
  navttc,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "home", title: "Home", link: null },
  { id: "about", title: "About", link: null },
  { id: "services", title: "Services", link: null },
  { id: "projects", title: "Projects", link: null },
  { id: "contact", title: "Contact", link: null },
] as const;

// Services
export const SERVICES = [
  { title: "Full-Stack Developer", icon: web },
  { title: "App Developer", icon: mobile },
  { title: "AI-Powered Web Architect", icon: backend },
  { title: "AI & Python Developer", icon: creator },
] as const;

// Technologies
export const TECHNOLOGIES = [
  // === Languages ===
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Java", icon: Java },
  { name: "Python", icon: python },
  { name: "C#", icon: csharp },
  { name: "SQL", icon: sql },

  // === Frontend & UI ===
  { name: "React", icon: reactjs },
  { name: "React Native", icon: reactnative }, // Reuse or use react-native icon
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Figma", icon: figma },

  // === Backend & Frameworks ===
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "Spring Boot", icon: spring },
  { name: ".NET", icon: dotnet },

  // === Databases ===
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },

  // === DevOps & Tools ===
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubb },
  { name: "Docker", icon: docker },
  { name: "Postman", icon: postman },
  { name: "Jenkins", icon: jenkins },

  // === Advanced Concepts ===
  { name: "Microservices", icon: micro },
  { name: "GraphQL", icon: graphql },
] as const;

// ✅ Academic Journey (replaces EXPERIENCES)
export const ACADEMICS = [
  {
    title: "BS in Software Engineering",
    institution_name: "FAST National University of Computer and Emerging Sciences (NUCES), Islamabad",
    icon: fast, // use your university logo here
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "CGPA: 3.0/4.0",
      "Pursuing a Bachelor’s degree in Software Engineering with a focus on full-stack development, software design, and scalable systems.",
      "Key Courses: Web Engineering, Software Quality Engineering, Business Process Engineering, Process Mining, Software Design and Architecture, Artificial Intelligence, Operating Systems, Database Systems, Object-Oriented Programming, Algorithms, Data Structures, Software Construction and Development, Software Requirement Engineering.",
    ],
  },
  {
    title: "Intermediate in Pre-Engineering",
    institution_name: "Army Burn Hall College for Boys, Abbottabad",
    icon: abhc, // replace with your college logo
    iconBg: "#232631",
    date: "August 2020 - September 2022",
    points: [
      "Secured 87% in Higher Secondary Examination.",
      "Completed intermediate studies with a focus on mathematics, physics, and chemistry.",
      "Developed strong analytical and problem-solving foundations applicable to software engineering.",
    ],
  },
  {
    title: "Matriculation in Science",
    institution_name: "Army Burn Hall College for Boys, Abbottabad",
    icon: abhc, // same logo if you want
    iconBg: "#383E56",
    date: "August 2018 - September 2020",
    points: [
      "Secured 91% in Matriculation.",
      "Completed matriculation with a focus on general science subjects.",
      "Built early interest in computing and logical problem-solving.",
    ],
  }
] as const;

// ✅ Certifications
export const CERTIFICATIONS = [
  {
    title: "Web Development Course",
    org: "DataCollide",
    year: "2023",
    icon: cert1,
    link: "https://drive.google.com/file/d/1qzRjACnJ21Ke5AAMd4pN7yF1Gmxv7rX5/view?usp=sharing",
  },
  {
    title: "Advance Web Application Development",
    org: "NAVTTC (Prime Minister's Youth Skills Development Program)",
    year: "2024",
    icon: cert2,
    link: "https://drive.google.com/file/d/1Va18aZF1i2nys45fnbRudRQp18Av8bz3/view?usp=sharing",
  },
  {
    title: "Certificate of Appreciation - DeenFest'24",
    org: "FAST-NUCES / DeenFest",
    year: "2024",
    icon: cert3,
    link: "https://drive.google.com/file/d/1MngimFJwmnQkicV4IwNZFIK7EkZk2RQ6/view?usp=sharing",
  },
  {
    title: "Backend Development and API Creation",
    org: "Packt-Coursera",
    year: "2025",
    icon: cert4,
    link: "https://coursera.org/verify/D2WWGK414WO8",
  },
  {
    title: "Build a Webpage with HTML and CSS",
    org: "Board Infinity-Coursera",
    year: "2025",
    icon: cert5,
    link: "https://coursera.org/verify/1U0D4FXQK1XM",
  },
  {
    title: "Nestle E-Learning 2024 | Sustainability",
    org: "Nestle",
    year: "2024",
    icon: cert6,
    link: "https://drive.google.com/file/d/100-K6HWmX35rYl3f18rajqQwnePhu2pL/view?usp=sharing",
  },
] as const;

// ✅ Experiences
export const EXPERIENCES = [
  {
    role: "Web Development Course",
    company: "DataCollide",
    duration: "Jun 2023 – Jul 2023",
    desc: "Completed an intensive 6-week Web Development course focusing on full-stack fundamentals, HTML, CSS, JavaScript, and project-based learning under expert mentorship.",
    icon: datacollide, // Replace with actual icon import
  },
  {
    role: "Advanced Web Development Intern",
    company: "NAVTTC – Morse Services",
    duration: "Jul 2024 – Oct 2024",
    desc: "3-month government-backed internship under Prime Minister's Youth Skills Program. Developed real-world web applications, achieved A+ grade in Advance Web Application Development.",
    icon: navttc, // Replace with actual icon import
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Autoimmune Diagnosis Assistant",
    description:
      "An AI-powered medical decision support system combining Random Forest, Neural Networks, and constraint-satisfaction logic to accurately diagnose autoimmune diseases. Features specialist recommendations based on symptoms and multi-model validation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "AI & Neural Networks", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/AzghanAhmad/Autoimmune-Diagnosis-Assistant", // update if exists
    live_site_link: "#",
  },
  {
    name: "E-Ticket Booking Platform",
    description:
      "Full-stack MERN application with secure user authentication, real-time seat selection, payment gateway integration, and responsive UI. Built with clean architecture, RESTful APIs, and state management for seamless booking experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express", color: "orange-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/AzghanAhmad/E-Ticket-Booking-System-Frontend",
    source_code_link_backend: "https://github.com/AzghanAhmad/E-Ticket-Booking-System-Backend",
    live_site_link: "#", // deploy if possible
  },
  {
    name: "Grocery Management System",
    description:
      "Enterprise-grade full-stack inventory system using Java MVC architecture, JSP frontend, and MySQL backend. Implements complete CRUD operations, role-based access, transaction logging, and responsive product management dashboard.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "JSP & Servlets", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "MVC", color: "orange-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/AzghanAhmad/Grocery-Management-System",
    live_site_link: "#",
  },
  {
    name: "Graph Algorithms Visualizer",
    description:
      "Interactive implementation of core graph algorithms (Dijkstra, Bellman-Ford, Prim’s, Kruskal’s, BFS/DFS) with real-time visualization, cycle detection, shortest path highlighting, and performance analytics using NetworkX and Matplotlib.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NetworkX", color: "green-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link: "https://github.com/AzghanAhmad/Graph-Algorithms-Visualizer",
    live_site_link: "#",
  },
  {
    name: "Code Smell Detector",
    description:
      "An intelligent static code analysis tool that automatically detects 5+ types of code smells (God Class, Long Method, Feature Envy, etc.) in Python codebases. Powered by AST parsing and machine learning for accurate detection and actionable refactoring suggestions.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Static Analysis", color: "orange-text-gradient" },
    ],
    image: project5, 
    source_code_link: "https://github.com/AzghanAhmad/Code-Smell-Detector-App",
    live_site_link: "#", 
  },
  {
    name: "Medical Record System",
    description:
      "Responsive patient management web app with Figma-designed UI, form validation, secure data handling, and interactive data visualization. Built from prototype to deployment with modern frontend best practices.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Figma", color: "orange-text-gradient" },
    ],
    image: project6,
    source_code_link: "https://github.com/AzghanAhmad/Medical-Record-System",
    live_site_link: "#",
  },
  {
    name: "Flight Management System",
    description:
      "Robust console-based airline reservation system in C++ using OOP principles. Features flight scheduling, seat allocation, passenger management, and file-based persistence with clean class design.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "OOP", color: "green-text-gradient" },
      { name: "File Handling", color: "pink-text-gradient" },
    ],
    image: project7,
    source_code_link: "https://github.com/AzghanAhmad/Flight-Management-System",
    live_site_link: "#",
  },
  {
    name: "Cafe POS System",
    description:
      "Windows-based point-of-sale application with MySQL integration for menu management, order processing, sales reporting, and staff-friendly interface using .NET Windows Forms.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: ".NET", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: project8,
    source_code_link: "https://github.com/AzghanAhmad/Cafe-Management-System",
    live_site_link: "#",
  },
  {
    name: "2D Car Racing Game",
    description:
      "High-performance 2D racing game built in C++ with custom physics engine, collision detection, Dijkstra-based AI pathfinding, dynamic difficulty, and leaderboard system using graphics.h.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Game Development", color: "green-text-gradient" },
      { name: "Graphics.h", color: "pink-text-gradient" },
    ],
    image: project9,
    source_code_link: "https://github.com/AzghanAhmad/2D-Car-Game",
    live_site_link: "#",
  },
] as const;

// Socials
export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
  link: "http://www.linkedin.com/in/azghan-ahmad-7bb871249",
  },
  {
    name: "Instagram",
    icon: instagram,
  link: "https://www.instagram.com/i_azghanahmad/",
  },
  { name: "GitHub", icon: github, link: "https://github.com/AzghanAhmad" },
] as const;
