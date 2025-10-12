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
  }
};
