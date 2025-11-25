import { links } from './links';

export const projectData = {
  "mars-botics": {
    "id": "mars-botics",
    "title": "MARS-Botics (Mail Agent)",
    "problem": "Business users needed faster, context-aware email processing and automated replies.",
    "approach": "Built a Spring Boot backend + React frontend; integrated Gmail API and LLM pipelines (LangChain) with VectorDB for semantic search. I led API design, DB schema, and Gmail integration.",
    "impact": "Automates email reading/reply workflows; reduced manual reply overhead (prototype -> production deployment).",
    "tech": ["Spring Boot", "PostgreSQL", "React", "Gmail API", "LangChain", "VectorDB", "Docker"],
    "role": "Backend lead — API design, VectorDB integration, deployment",
    "liveDemo": links.projects.marsBotics.liveDemo,
    "github": links.projects.marsBotics.github,
    "screenshot": "https://placehold.co/1200x600/1e40af/ffffff?text=MARS-Botics+Dashboard+Screenshot",
    "quickVerify": links.projects.marsBotics.quickVerify
  },
  "nlidb": {
    "id": "nlidb",
    "title": "NLP Powered Conversational Assistant to Database",
    "problem": "Users need a way to query databases using natural language instead of SQL.",
    "approach": "Creating an interface that translates natural language questions into SQL queries using NLP techniques.",
    "impact": "Enables non-technical users to query databases effectively without SQL knowledge.",
    "tech": ["Python", "NLP", "SQL", "Machine Learning", "Database Systems"],
    "role": "Lead Developer — NLP Pipeline & Query Generation",
    "github": "https://github.com/AbhiSondakar/text-to-sql",
    "screenshot": "/nlidb-screenshots/screenshot-1.png",
    "screenshots": [
      "/nlidb-screenshots/screenshot-1.png",
      "/nlidb-screenshots/screenshot-2.png",
      "/nlidb-screenshots/screenshot-3.png",
      "/nlidb-screenshots/screenshot-4.png",
      "/nlidb-screenshots/screenshot-5.png"
    ],
    "quickVerify": []
  },
  "todo-app": {
    "id": "todo-app",
    "title": "Modern Todo Application",
    "problem": "Need for a feature-rich, responsive task management application with real-time updates.",
    "approach": "Built a full-stack todo application with React frontend and Node.js backend, featuring real-time updates and data persistence.",
    "impact": "Created an intuitive task management solution with categories, priorities, and collaborative features.",
    "tech": ["React", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    "role": "Full Stack Developer — Frontend & Backend Implementation",
    "liveDemo": "#",
    "github": "#",
    "screenshot": "https://placehold.co/1200x600/3b82f6/ffffff?text=Todo+App+Dashboard",
    "quickVerify": []
  }
};
