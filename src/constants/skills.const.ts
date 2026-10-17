import type { SkillGroup } from '../types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind', 'CSS / SCSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'TypeScript', 'REST APIs', 'PHP / WordPress'],
  },
  {
    id: 'data',
    label: 'Data',
    items: ['MongoDB', 'SQL'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
  },
  {
    id: 'ai',
    label: 'AI & LLM',
    items: ['LangChain', 'LangGraph', 'Claude API', 'Prompt engineering', 'Agentic workflows'],
  },
];
