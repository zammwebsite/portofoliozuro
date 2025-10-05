
import type React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactElement;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  year: string;
  institution: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}
