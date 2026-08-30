export interface SocialLinks {
  email: string;
  phone: string;
  location: string;
  linkedInUrl: string;
  githubUrl: string;
  resumeUrl: string;
}

export interface PersonalProfile {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  heroHeadline: string;
  heroSubtitle: string;
  shortBio: string;
  aboutStory: string[];
  availabilityStatus: string;
  socialLinks: SocialLinks;
}

export interface WhatIBringItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  level?: 'Advanced' | 'Proficient' | 'Familiar';
  isKey?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface QAPipelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  deliverables: string[];
  focus: string;
}

export interface QACompetency {
  title: string;
  description: string;
  iconName: string;
  tools: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'QA & Systems' | 'AI & Computer Vision' | 'Full-Stack' | 'Automation & Tools';
  role: string;
  period?: string;
  summary: string;
  description: string;
  keyHighlights: string[];
  qaAchievements?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  badge?: string;
  architectureNotes?: string[];
  deliverables?: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  division?: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  gradeBadge?: string;
  focus: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
  isHighlighted?: boolean;
}

export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}
