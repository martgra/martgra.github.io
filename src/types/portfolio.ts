export interface PortfolioMeta {
  name: string;
  tagline: string;
  description: string;
  now: string;
}

export interface HeaderSection {
  prompt: {
    user: string;
    host: string;
    directory: string;
    command: string;
  };
}

export interface HeroSection {
  comment: string;
}

export interface FooterSection {
  exitMessage: string;
  copyrightName: string;
}

export interface AboutSection {
  command: string;
  paragraphs: string[];
  languages: { language: string; level: string }[];
}

export interface SkillItem {
  label: string;
  usedIn?: string[];
}

export interface SkillCategory {
  title: string;
  color: string;
  items: SkillItem[];
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
  relatedExperience?: string[];
  url?: string;
  github?: string;
}

export interface ProjectsSection {
  command: string;
  items: Project[];
}

export interface ExperienceEntry {
  company: string;
  project: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  internal?: boolean;
}

export interface ExperienceSection {
  command: string;
  employer: {
    name: string;
    period: string;
    description: string;
  };
  items: ExperienceEntry[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  years: string;
}

export interface EducationSection {
  command: string;
  items: EducationEntry[];
}

export interface ContactSection {
  command: string;
  email?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Portfolio {
  meta: PortfolioMeta;
  header: HeaderSection;
  hero: HeroSection;
  about: AboutSection;
  skills: SkillsSection;
  experience: ExperienceSection;
  projects: ProjectsSection;
  education: EducationSection;
  contact: ContactSection;
  footer: FooterSection;
  nav: NavItem[];
}
