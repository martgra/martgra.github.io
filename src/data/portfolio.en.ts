import type { Portfolio } from "@/types/portfolio";

export const portfolioEn: Portfolio = {
  meta: {
    name: "Martin Gran",
    tagline: "AI/ML Tech Lead",
    description:
      "Tech lead and AI/ML specialist — taking complex AI and machine learning solutions from idea and prototype to production. Based in Norway, working at Accenture.",
    now: "Currently building production RAG and multi-agent systems for the Norwegian public sector, and exploring agentic evaluation patterns.",
  },

  header: {
    prompt: {
      user: "guest",
      host: "gran.dev",
      directory: "~",
      command: "./welcome.sh",
    },
  },

  hero: {
    comment: "// Initializing interface...",
  },

  about: {
    command: "whoami",
    paragraphs: [
      "I'm a tech lead and AI/ML specialist. I take complex AI and machine learning solutions from idea and prototype to production and broad organizational adoption. I've led development and deployment of some of the early ML and generative AI solutions in the Norwegian public sector — including one of the first machine learning solutions at the Norwegian Tax Administration and a production RAG solution at the Norwegian Public Roads Administration, used daily by hundreds of domain experts and now rolling out to external contractors.",
      "I work at the intersection of technical depth, architecture decisions, and demonstrable business value. I lead cross-functional teams, make key technical decisions, and build robust, production-ready solutions in generative AI, RAG, agent-based systems, data pipelines, and full-stack development with Python/FastAPI and Next.js.",
      "I'm part of the leadership team in the AI & Data department at Accenture Norway, active in the Nordic Center of Excellence for Generative AI, and I started the AI Community at Accenture on both Norwegian and Nordic levels. My background in cognitive psychology gives me a clear perspective on user understanding, trust, and responsible AI — something that shapes everything from solution design to training and strategic advisory.",
    ],
    languages: [
      { language: "Norwegian", level: "Fluent" },
      { language: "English", level: "Fluent" },
      { language: "Polish", level: "Conversational" },
    ],
  },

  skills: {
    command: "curl localhost:8080/skills",
    categories: [
      {
        title: "Generative AI & RAG",
        color: "green",
        items: [
          {
            label: "Production RAG systems (chunking, hybrid search, reranking)",
            usedIn: ["KIBOK", "RAG Accelerator"],
          },
          { label: "Multi-agent architectures (Pydantic AI, LlamaIndex)", usedIn: ["KIBOK"] },
          {
            label: "Azure OpenAI / LLM integration & streaming",
            usedIn: ["KIBOK", "AI Advisory & Innovation Lab", "RAG Accelerator"],
          },
          { label: "LLM-based data enrichment & query expansion", usedIn: ["KIBOK"] },
          {
            label: "LLM-as-a-judge evaluation frameworks",
            usedIn: ["AI Advisory & Innovation Lab"],
          },
          {
            label: "Prompt engineering & structured outputs",
            usedIn: ["KIBOK", "AI Advisory & Innovation Lab"],
          },
          { label: "EU AI Act risk assessment", usedIn: ["KIBOK"] },
        ],
      },
      {
        title: "Machine Learning",
        color: "purple",
        items: [
          {
            label: "End-to-end ML pipelines (training → deployment)",
            usedIn: ["Synetopia", "TFX Reference Architecture"],
          },
          {
            label: "MLFlow / experiment tracking & model versioning",
            usedIn: ["KIBOK", "Synetopia"],
          },
          {
            label: "Embeddings & vector search (Elasticsearch, Qdrant)",
            usedIn: ["KIBOK", "RAG Accelerator"],
          },
          { label: "RNN-based sequence generation", usedIn: ["Synetopia"] },
          {
            label: "TensorFlow TFX / Kubeflow / Apache Airflow",
            usedIn: ["TFX Reference Architecture"],
          },
          { label: "GPU infrastructure setup (on-prem & cloud)", usedIn: ["Synetopia"] },
        ],
      },
      {
        title: "Full-Stack Development",
        color: "blue",
        items: [
          { label: "Python / FastAPI / Flask", usedIn: ["KIBOK", "Synetopia", "RAG Accelerator"] },
          { label: "Next.js / React / TypeScript", usedIn: ["KIBOK", "RAG Accelerator"] },
          {
            label: "Elasticsearch (BM25 + vector, custom RRF)",
            usedIn: ["KIBOK", "RAG Accelerator"],
          },
          {
            label: "PostgreSQL / Cosmos DB / GraphQL",
            usedIn: ["Field Development Planning", "Synetopia"],
          },
          { label: "Docker / Kubernetes", usedIn: ["KIBOK", "Synetopia"] },
          { label: "CI/CD & DevOps", usedIn: ["Field Development Planning", "KIBOK"] },
        ],
      },
      {
        title: "Data & Platform",
        color: "yellow",
        items: [
          {
            label: "Document processing pipelines (PDF/HTML → chunks → embeddings)",
            usedIn: ["KIBOK", "RAG Accelerator"],
          },
          {
            label: "ETL pipelines (PySpark, Databricks, Azure Data Factory)",
            usedIn: ["Data Factory"],
          },
          {
            label: "Data quality, lineage & metadata catalogs",
            usedIn: ["Data Factory", "Field Development Planning"],
          },
          {
            label: "Azure AI Foundry / Azure OpenAI platform",
            usedIn: ["AI Advisory & Innovation Lab"],
          },
          {
            label: "Benchmarking & technical evaluation of AI solutions",
            usedIn: ["AI Advisory & Innovation Lab"],
          },
        ],
      },
    ],
  },

  experience: {
    command: "cat accenture/experience.log",
    employer: {
      name: "Accenture",
      period: "2017 – present",
      description:
        "All project experience below is through Accenture, where I'm part of the AI & Data leadership team in Norway.",
    },
    items: [
      {
        company: "Statens vegvesen",
        project: "KIBOK",
        role: "Tech Lead & Developer",
        period: "Feb 2024 – present",
        description:
          "Generative AI solution for efficient information retrieval from the Road Administration's standards and handbooks. Uses RAG to deliver precise, source-based answers — used daily by hundreds of domain experts and now rolling out to external contractors. The project has been a direct catalyst for multiple new AI initiatives in the organization.",
        highlights: [
          "Made the key technical decisions: search engine, architecture patterns, LLM strategy, and frontend framework. Served as technical decision-maker in a cross-functional team of 6+ people.",
          "Designed and built a multi-stage data ingestion pipeline with both rule-based and LLM-based enrichment — including contextual chunk enrichment, table/figure transformation to searchable representations, and quality assurance.",
          "Implemented hybrid search in Elasticsearch (BM25 + vector search) with custom RRF fusion, plus an agent-based search architecture with multiple indexes, LLM-based query expansion, and reranking.",
          "Developed the full-stack application with FastAPI backend and Next.js frontend, including multi-agent streaming architecture with Pydantic AI.",
          "Established an evaluation framework with quantitative and qualitative metrics — including benchmarking against a ground truth list developed with domain experts.",
          "Built a feedback system linking user ratings to queries and corpus segments, providing decision-makers with usage insights.",
          "Participated in risk assessment against the EU AI Act in collaboration with legal experts.",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Pydantic AI",
          "Next.js",
          "React",
          "Elasticsearch",
          "Azure OpenAI",
          "MLFlow",
          "LlamaIndex",
          "Docker",
          "Vercel AI SDK",
        ],
      },
      {
        company: "Statens vegvesen",
        project: "AI Advisory & Innovation Lab",
        role: "Technical Advisor",
        period: "Jan 2025 – present",
        description:
          "Dual advisory engagement: member of the innovation lab exploring new AI use cases through proof of concepts and technical evaluation, plus separate advisory work qualifying and evaluating new generative AI use cases across the organization.",
        highlights: [
          "Designed and ran systematic benchmarks between KIBOK and off-the-shelf solutions (NotebookLM, Microsoft Copilot) — wrote evaluation scripts, defined metrics, and used LLM-as-a-judge architecture for scalable assessment.",
          "Conducted technical evaluation of LightRAG vs Microsoft Copilot — including infrastructure setup, risk assessment, and tailored evaluation metrics.",
          "Performed technical pre-qualification of new AI use cases across the organization — assessing feasibility, effort, risk, data access, and architecture requirements.",
          "Assessed migration of KIBOK to a new AI platform based on Azure AI Foundry — mapping gaps, dependencies, and recommended migration path.",
        ],
        technologies: ["Python", "Azure OpenAI", "Elasticsearch", "LightRAG"],
      },
      {
        company: "Norwegian Oil & Gas Company",
        project: "Field Development Planning (FDP)",
        role: "Tech Lead",
        period: "Sep 2022 – Feb 2024",
        description:
          "Solution for oversight and traceability in decision processes for oil & gas field development. Decision-makers needed to see current status at each decision gate (approve, reject, or hold), with full history of previous decisions and associated data for dormant projects. The solution is still in use and recognized as a success product internally.",
        highlights: [
          "Tech lead for an autonomous scrum team engaged directly to accelerate development. Made technical decisions together with product owner.",
          "Designed a data model for data lineage based on immutable versioning — capturing state at each decision gate so the decision basis was traceable and reproducible over time.",
          "Iterated the data model through close dialog with users — started in Gremlin/Cosmos DB (graph database), migrated to PostgreSQL with ETL when performance and query complexity warranted a relational model.",
          "Led development of GraphQL API (with Hasura) and custom frontend in TypeScript/Angular for visualization of decision basis and lineage.",
          "Standardized CI/CD processes, introduced SonarQube for code quality, and led training of less experienced developers.",
        ],
        technologies: [
          "Python",
          "TypeScript",
          "Angular",
          "GraphQL",
          "Hasura",
          "Gremlin/Cosmos DB",
          "PostgreSQL",
          "Azure",
          "CI/CD",
        ],
      },
      {
        company: "Norwegian Oil & Gas Company",
        project: "Data Factory",
        role: "Tech Lead",
        period: "Apr 2022 – Sep 2022",
        description:
          "Strategic initiative to industrialize data pipelines between different sources and data platforms. Built a modern Azure-based architecture for collection, quality assurance, transformation, and availability of company data in a data mesh. The data pipelines and metadata catalog are still in production.",
        highlights: [
          "Led development of data pipelines for ingestion and processing of subsurface data — integrating Azure Data Lake, Blob Storage, and Data Factory into a cohesive processing chain.",
          "Designed and built a metadata catalog with REST API and database — giving domain teams one place to search, understand, and assess the quality of available datasets.",
          "Established data quality principles and validation rules at every stage, with automatic checks against source systems.",
        ],
        technologies: [
          "Python",
          "PySpark",
          "Databricks",
          "Azure Data Factory",
          "Azure Data Lake",
          "Azure Blob Storage",
          "REST API",
        ],
      },
      {
        company: "Skatteetaten",
        project: "Modernized Population Register / Synetopia",
        role: "ML Engineer, Developer & Scrum Master",
        period: "Mar 2019 – Apr 2022",
        description:
          "Pioneering machine learning work in the Norwegian public sector. Developed and deployed one of the first ML solutions at the Tax Administration — an RNN-based model for generating synthetic life event sequences (births, marriages, deaths, moves) from the Population Register. The solution became part of Synetopia, which has grown into a cornerstone of Test-Norway — used by public agencies and private actors nationwide for access to realistic but safe test data.",
        highlights: [
          "Co-designed, trained, and deployed the RNN model in a small team (2–3 developers). Owned the entire lifecycle from experimentation to production.",
          "Established end-to-end ML pipeline: preprocessing, model training, evaluation, inference, and metadata logging/cataloging. Introduced MLFlow as a new tool at the Tax Administration.",
          "Built ML infrastructure from scratch — set up dedicated GPUs for model training in collaboration with the infrastructure team and adapted existing on-prem environments for ML workflows.",
          "Developed REST APIs (Python/Flask) for secure access to generated test data.",
          "Transformed aggregated data from SQL database to graph representation with Python NetworkX and PostgreSQL — enabling automated generation of representative test data populations.",
          "Ensured GDPR compliance through close collaboration with product owners on data anonymization and minimization requirements.",
        ],
        technologies: [
          "Python",
          "Flask",
          "MLFlow",
          "MinIO",
          "NetworkX",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "GPU infrastructure (on-prem)",
        ],
      },
      {
        company: "Skatteetaten",
        project: "Automated Testing / Altinn Integration",
        role: "Test Developer",
        period: "2017 – 2022",
        description:
          "Developed, maintained, and ran automated integration tests for the Tax Administration's integration with the Altinn platform.",
        highlights: [
          "Built and maintained automated integration test suites across multiple technology stacks.",
        ],
        technologies: ["SoapUI", "Java", "Cucumber", "Python"],
      },
      {
        company: "Accenture",
        project: "AI SME & Architecture Advisory",
        role: "AI Subject Matter Expert",
        period: "2019 – present",
        internal: true,
        description:
          "Cross-cutting AI SME role spanning strategic sales support, hands-on architecture advisory for active projects, and capability building across Accenture Norway and the Nordics.",
        highlights: [
          "Shape proposed teams and projects in sales processes, serving as technical SME for architecture and solution design across multiple clients.",
          "Serve as architecture advisor for other project teams — assisting with technical architecture, technology choices, and solution design.",
          "Contributed to defining Accenture's approach to generative AI, including standards, reference architectures, and technology choices across the organization.",
          "Coach and mentor other consultants on identifying and driving new AI engagements with their clients.",
        ],
        technologies: ["Azure OpenAI", "Architecture", "Solution Design", "Sales Engineering"],
      },
      {
        company: "Accenture",
        project: "RAG Accelerator",
        role: "Creator & Lead Developer",
        period: "2023 – 2024",
        internal: true,
        description:
          "Self-initiated project. Designed and developed a modular, configurable template for rapid implementation of RAG solutions. The accelerator became the direct foundation for the KIBOK solution at Statens vegvesen, and has been the starting point for 4+ client solutions across the Nordics — in insurance, public administration, and industry.",
        highlights: [
          "Built a complete, secure, production-ready RAG application with FastAPI backend, Azure OpenAI integration, and Next.js frontend.",
          "Designed support for multiple search engines (Elasticsearch, Qdrant, Azure AI Search) as swappable backends.",
          "Directly reused as the technical foundation for KIBOK and 4+ additional Nordic client engagements.",
        ],
        technologies: [
          "FastAPI",
          "Azure OpenAI",
          "Elasticsearch",
          "Qdrant",
          "Azure AI Search",
          "Next.js",
          "Python",
          "Docker",
        ],
      },
      {
        company: "Accenture",
        project: "Email Classification with LLMs",
        role: "Product Owner",
        period: "2023",
        internal: true,
        description:
          "Led development of a solution that classified and summarized incoming emails using large language models. Actively used in multiple client dialogues.",
        highlights: [
          "Drove product direction for LLM-based email classification and summarization.",
        ],
        technologies: ["Hugging Face Transformers", "Python", "Flask"],
      },
      {
        company: "Accenture",
        project: "TFX Reference Architecture",
        role: "SME & Product Owner",
        period: "2020 – 2021",
        internal: true,
        description:
          "Enterprise-ready reference architecture for ML pipelines based on TensorFlow Extended (TFX). Focus on transparency, reproducibility, and versioning of model training and deployment.",
        highlights: [
          "Defined architecture for end-to-end ML pipeline with full audit trail and model versioning.",
        ],
        technologies: ["Apache Airflow", "TensorFlow TFX", "Kubeflow", "Kubernetes"],
      },
    ],
  },

  projects: {
    command: "ls -la ./projects/",
    items: [
      {
        name: "dope",
        meta: "drwxr-xr-x  martin  4.0K  Dec 02 2025",
        description:
          "AI-powered CLI for scanning code + documentation, generating structured summaries, and suggesting/applying documentation updates based on code changes. Built for OpenAI and Azure OpenAI workflows (Python 3.13).",
        tags: [
          { label: "Python", color: "blue" },
          { label: "CLI", color: "gray" },
          { label: "OpenAI/Azure", color: "green" },
        ],
        relatedExperience: ["AI developer tooling"],
        github: "https://github.com/martgra/dope",
      },
      {
        name: "kjopekraft",
        meta: "drwxr-xr-x  martin  4.0K  Jan 07 2026",
        description:
          "Next.js app for Norwegian users to track salary development, compare against inflation, and generate negotiation material using SSB-backed framing (OpenAI key optional).",
        tags: [
          { label: "Next.js", color: "purple" },
          { label: "TypeScript", color: "blue" },
          { label: "Tailwind", color: "pink" },
        ],
        relatedExperience: ["Full-stack & Norwegian data"],
        github: "https://github.com/martgra/kjopekraft",
      },
      {
        name: "lovlig",
        meta: "drwxr-xr-x  martin  4.0K  Nov 28 2025",
        description:
          "Keeps Norwegian legal datasets in sync from Lovdata by downloading bulk datasets, extracting archives, and detecting file-level changes via hashing (xxHash) to report added/modified/removed documents.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "Lovdata", color: "green" },
          { label: "Data", color: "gray" },
        ],
        relatedExperience: ["RAG data pipelines", "KIBOK"],
        github: "https://github.com/martgra/lovlig",
      },
      {
        name: "lovdata-pipeline",
        meta: "drwxr-xr-x  martin  4.0K  Nov 28 2025",
        description:
          "A simple pipeline for processing Norwegian legal documents into a searchable vector database, running a stepwise flow (parse → chunk → embed → index) with state tracking of changed files.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "Embeddings", color: "pink" },
          { label: "Vector search", color: "purple" },
        ],
        relatedExperience: ["RAG data pipelines", "KIBOK", "RAG Accelerator"],
        github: "https://github.com/martgra/lovdata-pipeline",
      },
      {
        name: "python_template",
        meta: "drwxr-xr-x  martin  4.0K  Jan 23 2026",
        description:
          "Opinionated Python project template: uv-based dependency management, Ruff/Pylint/Deptry/Vulture, secret scanning, Prek hooks, GitHub Actions, and Dev Container support for a reproducible setup.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "DevEx", color: "green" },
          { label: "CI", color: "gray" },
        ],
        relatedExperience: ["Developer tooling & best practices"],
        github: "https://github.com/martgra/python_template",
      },
      {
        name: "typescript_template",
        meta: "drwxr-xr-x  martin  4.0K  Oct 28 2025",
        description:
          "TypeScript project template with Bun, ESLint/Prettier, Knip, Husky hooks, secret detection, GitHub Actions CI/CD, and a Dev Container for consistent development environments.",
        tags: [
          { label: "TypeScript", color: "blue" },
          { label: "Bun", color: "yellow" },
          { label: "Template", color: "gray" },
        ],
        relatedExperience: ["Developer tooling & best practices"],
        github: "https://github.com/martgra/typescript_template",
      },
    ],
  },

  education: {
    command: "cat ./education.txt",
    items: [
      {
        degree: "Bachelor, Computer Engineering",
        institution: "USN (University of South-Eastern Norway)",
        years: "2014 – 2017",
      },
      {
        degree: "Bachelor, Cognitive Psychology",
        institution: "University of Oslo",
        years: "2009 – 2013",
      },
    ],
  },

  contact: {
    command: "ls -la ./socials",
    email: "martin@gran.dev",
    github: "https://github.com/martgra",
    linkedin: "https://www.linkedin.com/in/martin-gran/",
    bluesky: "https://bsky.app/profile/martin-gran.bsky.social",
  },

  footer: {
    exitMessage: "Process finished with exit code 0",
    copyrightName: "Terminal Portfolio",
  },

  nav: [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "education", href: "#education" },
    { label: "contact", href: "#contact" },
  ],
};
