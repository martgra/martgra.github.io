import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  meta: {
    name: "Martin Gran",
    tagline: "Hello, World. I build things for the web.",
    description:
      "Full-stack developer passionate about creating elegant solutions to complex problems.",
  },

  about: {
    command: "cat about_me.txt",
    paragraphs: [
      "Hello! I'm a creative developer with a passion for building exceptional digital experiences. I specialize in modern web technologies and enjoy the challenge of turning complex problems into simple, beautiful, and intuitive solutions.",
      "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while contemplating the next big idea.",
      "I believe in writing clean, maintainable code and creating user experiences that delight. Let's build something amazing together!",
    ],
  },

  skills: {
    command: "curl localhost:8080/skills",
    categories: [
      {
        title: "Frontend",
        color: "purple",
        items: [
          "React / Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Vue.js",
          "Three.js",
        ],
      },
      {
        title: "Backend",
        color: "blue",
        items: [
          "Node.js / Express",
          "Python / Django",
          "PostgreSQL",
          "MongoDB",
          "REST APIs",
          "GraphQL",
        ],
      },
      {
        title: "DevOps",
        color: "green",
        items: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Vercel", "Nginx"],
      },
      {
        title: "Tools",
        color: "yellow",
        items: ["Git", "VS Code", "Figma", "Postman", "Linux", "Vim"],
      },
    ],
  },

  projects: {
    command: "ls -la ./projects/",
    items: [
      {
        name: "Project_Alpha",
        meta: "drwxr-xr-x  admin  4.0K  Oct 12 14:30",
        description:
          "A minimalist task management dashboard built with React and Firebase. Features real-time sync, drag-and-drop interface, and PWA support.",
        tags: [
          { label: "React", color: "blue" },
          { label: "Firebase", color: "yellow" },
          { label: "Tailwind", color: "pink" },
        ],
        url: "https://example.com",
        github: "https://github.com/martgra/project-alpha",
      },
      {
        name: "CodeSnippets_Manager",
        meta: "drwxr-xr-x  admin  2.8K  Sep 28 09:15",
        description:
          "A terminal-based code snippet manager with syntax highlighting, tagging system, and GitHub Gist integration. Built with TypeScript and Ink.",
        tags: [
          { label: "TypeScript", color: "blue" },
          { label: "Node.js", color: "green" },
          { label: "CLI", color: "gray" },
        ],
        github: "https://github.com/martgra/snippets",
      },
      {
        name: "Portfolio_v2",
        meta: "drwxr-xr-x  admin  1.2K  Nov 05 16:45",
        description:
          "This very portfolio you're looking at! A terminal-themed portfolio site with typewriter effects, scroll animations, and full accessibility support.",
        tags: [
          { label: "React", color: "blue" },
          { label: "Vite", color: "purple" },
          { label: "Framer Motion", color: "pink" },
        ],
        github: "https://github.com/martgra/portfolio",
      },
    ],
  },

  contact: {
    command: "./send_message.sh",
    email: "martgra@example.com",
    github: "https://github.com/martgra",
    linkedin: "https://linkedin.com/in/martingran",
    twitter: "https://twitter.com/martgra",
  },

  nav: [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ],
};
