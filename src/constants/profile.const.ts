import type { NavLink, ProfileData, SocialLink } from '../types';

export const PROFILE: ProfileData = {
  name: 'John Yaghobieh',
  firstName: 'John',
  handle: 'yaghobieh',
  title: 'Full Stack Tech Lead · Agentic AI',
  location: 'Tel Aviv / Petah Tikva, Israel',
  headline: 'I build products, and the tools that build them.',
  intro:
    'Creator of the ForgeStack ecosystem, featuring 70+ production-ready React components and modern development tools. Deep expertise in React, Node.js, TypeScript, and AI/LLM integration.',
  bio: [
    'Experienced Full Stack Tech Lead with strong autodidactic abilities and analytical thinking. Approaches criticism as constructive feedback and maintains a continuous learning mindset. Creator of the ForgeStack ecosystem, featuring 70+ production-ready React components and modern development tools.',
    'Deep expertise in React, Node.js, TypeScript, and AI/LLM integration, with hands-on experience in prompt engineering and Claude API implementation. Proven ability to lead challenging projects, mentor development teams, and solve complex technical problems.',
  ],
  avatarUrl: `${import.meta.env.BASE_URL}profile.jpg`,
  email: 'yaghobieh@gmail.com',
  githubUrl: 'https://github.com/yaghobieh',
  linkedinUrl: 'https://www.linkedin.com/in/john-yaghobieh-4baa93107/',
  npmUrl: 'https://www.npmjs.com/~yaghobieh',
  forgeStackUrl: 'https://forgedevstack.com',
  siteUrl: 'https://yaghobieh.github.io/yaghobieh/',
};

export const MAILTO_HREF = `mailto:${PROFILE.email}`;

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: PROFILE.linkedinUrl },
  { id: 'github', label: 'GitHub', href: PROFILE.githubUrl },
  { id: 'npm', label: 'npm', href: PROFILE.npmUrl },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'forgestack', label: 'ForgeStack', href: '#forgestack' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
];

export const STRENGTHS = [
  'Autodidactic',
  'Analytical thinking',
  'Continuous learning',
  'Leading challenging projects',
  'Mentoring teams',
  'Complex problem solving',
] as const;
