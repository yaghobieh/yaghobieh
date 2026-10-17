import type { SkillGroup } from '../types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'Redux', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Sass', 'Angular'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'PHP', 'WordPress', 'REST', 'GraphQL', 'Microservices'],
  },
  {
    id: 'ai',
    label: 'AI',
    items: ['Large language models', 'AI API integration', 'Prompt engineering', 'Claude API', 'LangChain', 'LangGraph'],
  },
  {
    id: 'data',
    label: 'Data',
    items: ['MongoDB', 'SQL', 'BigQuery', 'Firebase'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'Jenkins', 'CI/CD', 'Docker', 'Kubernetes', 'Unit testing', 'Code review', 'Agile'],
  },
];
