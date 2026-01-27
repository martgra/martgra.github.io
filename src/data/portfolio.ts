import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  meta: {
    name: "Martin Gran",
    tagline: "I build developer tools and data-driven products.",
    description:
      "Norwegian developer at heart - biological implementation of chatGPT. I ship AI-assisted tooling, legal-data pipelines, and modern Next.js apps.",
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
      "Hi — I’m Martin Gran. I’m a Norway-based developer (Sande) who likes building pragmatic software that removes friction from real workflows.",
      "Lately I’ve been working on DOPE: an AI-powered CLI that scans code + docs and suggests (or applies) documentation updates based on changes — designed to work with either OpenAI or Azure OpenAI.",
      "I also build products and pipelines rooted in Norwegian data: from salary/inflation tooling (Kjøpekraft) to Lovdata-based legal document syncing and vector search pipelines.",
    ],
  },

  skills: {
    command: "curl localhost:8080/skills",
    categories: [
      {
        title: "Frontend",
        color: "purple",
        items: [
          "Next.js (App Router)",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Chart.js",
          "SWR (client caching)",
        ],
      },
      {
        title: "Backend & Data",
        color: "blue",
        items: [
          "Python (incl. 3.13)",
          "CLI tooling",
          "Lovdata ingestion & change detection (hash-based)",
          "Vector search pipelines (parse → chunk → embed → index)",
          "OpenAI + Azure OpenAI integrations",
        ],
      },
      {
        title: "DevEx & Automation",
        color: "green",
        items: [
          "GitHub Actions (CI/CD)",
          "Dev Containers",
          "Docker-based development flows",
          "uv (Python dependency management)",
          "Bun (TS runtime/PM) where it fits",
        ],
      },
      {
        title: "Quality Tooling",
        color: "yellow",
        items: [
          "Ruff",
          "Pylint",
          "Deptry",
          "Vulture",
          "detect-secrets",
          "Prek / pre-commit style hooks",
          "ESLint + Prettier",
          "Knip (unused code detection)",
          "Vitest + Playwright",
        ],
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
        github: "https://github.com/martgra/typescript_template",
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
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ],
};
