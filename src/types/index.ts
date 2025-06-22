export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges?: string;
  liveUrl: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}