export interface PortfolioMeta {
  name: string;
  tagline: string;
  description: string;
}

export interface AboutSection {
  command: string;
  paragraphs: string[];
}

export interface SkillCategory {
  title: string;
  color: string;
  items: string[];
}

export interface SkillsSection {
  command: string;
  categories: SkillCategory[];
}

export interface ProjectTag {
  label: string;
  color: string;
}

export interface Project {
  name: string;
  meta: string;
  description: string;
  tags: ProjectTag[];
  url?: string;
  github?: string;
}

export interface ProjectsSection {
  command: string;
  items: Project[];
}

export interface ContactSection {
  command: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Portfolio {
  meta: PortfolioMeta;
  about: AboutSection;
  skills: SkillsSection;
  projects: ProjectsSection;
  contact: ContactSection;
  nav: NavItem[];
}
