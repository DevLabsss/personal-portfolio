export type ProjectCategory =
  | "Web"
  | "Desktop"
  | "Data / ML"
  | "UI / UX"
  | "Web3"
  | "Other";

interface FeaturedProject {
  repo?: string;
  title: string;
  type: string;
  category: ProjectCategory;
  featured: boolean;
  description: string;
  image: string;
  demo?: string;
  tags?: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    repo: "CV.-Laras-Gemilang-Teknika",
    title: "CV Laras Gemilang Teknika",
    type: "Community Service / Web Development",
    category: "Web",
    featured: true,
    description:
      "A university community service (PKM) project focused on developing a responsive company profile website for CV Laras Gemilang Teknika to improve its digital presence and service accessibility.",
    image: "/projects/cv-laras.png",
    demo: "https://larasgemilangteknika.com/",
  },

  {
    repo: "DigiU-System-Analyst-",
    title: "Digital UMKM",
    type: "Academic / UI/UX Design",
    category: "UI / UX",
    featured: true,
    description:
      "A Figma-based UI/UX project designed to simplify digital workflows for local UMKM, making business services and processes easier to understand and access.",
    image: "/projects/system.png",
  },

  {
    title: "Build on Sui — BlockDevId",
    type: "Learning / Blockchain",
    category: "Web3",
    featured: true,
    description:
      "Participated in a Build on Sui learning session with BlockDevId, exploring the Sui ecosystem and gaining hands-on exposure to blockchain development concepts alongside the developer community.",
    image: "/projects/build-on-sui.jpg",
    tags: ["Sui", "Blockchain", "Web3", "Move", "Community Learning"],
  },

  {
    repo: "POS_McD",
    title: "POS McDonald's",
    type: "Personal / Desktop Application",
    category: "Desktop",
    featured: true,
    description:
      "A Java Swing point-of-sale application featuring CRUD operations, database integration, transaction management, and receipt printing.",
    image: "/projects/pos-mcd.png",
  },

  {
    repo: "crud-mahasiswa",
    title: "Student CRUD System",
    type: "Academic / Web Development",
    category: "Web",
    featured: true,
    description:
      "A web application for managing student records with Create, Read, Update, and Delete functionality using PHP and MySQL.",
    image: "/projects/crud.png",
  },

  {
    repo: "dobby-memory",
    title: "Dobby Memory",
    type: "Personal / Web Development",
    category: "Web",
    featured: true,
    description:
      "A web-based project focused on creating a simple and accessible interface for organizing and managing information.",
    image: "/projects/dobby-memory.png",
  },

  {
    repo: "union-xp-allocation-checker",
    title: "Union XP Allocation Checker",
    type: "Personal / Web3",
    category: "Web3",
    featured: true,
    description:
      "A Web3 utility application for checking and analyzing XP allocation data within the Union ecosystem.",
    image: "/projects/union-checker.png",
  },

  // =================================================
  // PROJECT LAIN
  // featured: false = hanya muncul di View All
  // =================================================
  {
    repo: "Data-Mining-Fraud-Detection",
    title: "Fraud Detection",
    type: "Academic / Data Mining",
    category: "Data / ML",
    featured: false,
    description:
      "A data mining project exploring fraud detection through data preprocessing, analysis, and machine learning techniques using Python.",
    image: "/projects/data-mining.png",
  },

  {
    repo: "Web-Pemrograman-1",
    title: "Web Programming",
    type: "Academic / Web Development",
    category: "Web",
    featured: false,
    description:
      "A collection of web development exercises and academic projects covering fundamental web technologies.",
    image: "/projects/web.png",
  },

  {
    repo: "dobby-chatbot",
    title: "Dobby AI Chatbot",
    type: "Personal / AI Application",
    category: "Data / ML",
    featured: false,
    description:
      "A web-based chatbot project designed to provide interactive conversations and AI-powered assistance.",
    image: "/projects/dobby-chatbot.png",
  },
];
