import type { ProjectEntry, ProjectStatus } from '../types';

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  'in-progress': 'In progress',
  live: 'Live',
};

export const PROJECTS: ProjectEntry[] = [
  {
    id: 'alloy',
    name: 'Alloy',
    kicker: 'AI site builder',
    summary:
      'Describe a website in plain language and Alloy generates a complete, editable React project, with a preview, a code view and a one-click zip export.',
    highlights: [
      'Async generation with streaming progress and model fallbacks',
      'Web app plus an Expo mobile client',
      'Built on ForgeStack: Bear, Synapse, Harbor and Lingo',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Gemini', 'Postgres', 'Expo'],
    status: 'in-progress',
  },
  {
    id: 'tokenforge',
    name: 'TokenForge',
    kicker: 'Cursor / VS Code extension',
    summary:
      'Track Cursor usage, cost and fast requests across every window, and save tokens while you work.',
    highlights: [
      'Usage dashboard and quota status bar',
      'Prompt optimizer, log trimmer and token counter',
      '.cursorignore helper to keep context lean',
    ],
    stack: ['TypeScript', 'VS Code API', 'Open VSX'],
    status: 'live',
    link: {
      label: 'View on Open VSX',
      href: 'https://open-vsx.org/extension/forgedevstack/tokenforge',
    },
  },
];
