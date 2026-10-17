import type { NavLink, ProfileData, SocialLink } from '../types';

export const PROFILE: ProfileData = {
  name: 'John Yaghobieh',
  firstName: 'John',
  handle: 'yaghobieh',
  title: 'Full Stack Tech Lead + Agentic AI',
  location: 'Tel Aviv / Petah Tikva, Israel',
  headline: 'I build products, and the tools that build them.',
  intro:
    'Creator of ForgeStack, an open-source ecosystem of 70+ production-ready React components and dev tools. I lead teams across React, Node.js and TypeScript, and build agentic AI into real products.',
  bio: [
    'I’m a full stack tech lead based in Israel. I design and ship production applications end to end, from React interfaces to Node.js services, data layers and the pipelines that deploy them.',
    'Alongside product work I maintain ForgeStack: UI, state, data, backend, styling and tooling packages designed to work together, so teams can move from idea to production without stitching ten libraries together.',
    'Lately my focus is agentic AI: LLM-powered developer tools, agents and AI-assisted workflows, built with the same care for clean architecture as everything else.',
  ],
  avatarUrl: `${import.meta.env.BASE_URL}profile.jpg`,
  email: 'yaghobieh@gmail.com',
  githubUrl: 'https://github.com/yaghobieh',
  linkedinUrl: 'https://www.linkedin.com/in/john-yaghobieh-4baa93107/',
  npmUrl: 'https://www.npmjs.com/~yaghobieh',
  siteUrl: 'https://yaghobieh.github.io/yaghobieh/',
};

export const MAILTO_HREF = `mailto:${PROFILE.email}`;

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: PROFILE.linkedinUrl },
  { id: 'github', label: 'GitHub', href: PROFILE.githubUrl },
  { id: 'npm', label: 'npm', href: PROFILE.npmUrl },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'forgestack', label: 'ForgeStack', href: '#forgestack' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
];

export const FOCUS_AREAS = [
  'Clean architecture',
  'Open source',
  'Agentic AI',
  'Team leadership',
  'Developer experience',
] as const;
