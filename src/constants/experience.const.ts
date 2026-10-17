import type { EducationEntry, ExperienceEntry } from '../types';

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'amdocs',
    role: 'Full Stack Tech Lead',
    company: 'Amdocs',
    period: '2022 – Present',
    points: [
      'Led large-scale telecommunications projects for 3UK, T-Mobile Business, Cricket (AT&T), and SPX. Owned delivery from scope through release.',
      'Managed end-to-end feature development and architecture decisions using React, Node.js, and TypeScript. From the first technical decision to the shipped UI and API.',
      'Established as the go-to developer for complex technical challenges and comprehensive code reviews. The person teams brought hard bugs and risky changes to.',
      'Built reusable structures and boilerplates, streamlining workflows and reducing time-to-market. New work started from a shared base.',
      'Mentored junior developers and conducted technical training sessions, fostering code quality excellence. Taught the patterns the team actually shipped with.',
    ],
  },
  {
    id: 'aniview',
    role: 'Full Stack Developer',
    company: 'Aniview',
    period: '2020 – 2022',
    points: [
      'Developed a video advertisement management platform with patented technology solutions. The product that manages video ads under real advertiser traffic.',
      'Worked on Adserver and Player components using Angular, PHP, JavaScript, MongoDB, and BigQuery. The server that picks the ad and the player that shows it.',
      'Optimized database queries and improved system performance for high-volume video streaming data. A slow query showed up immediately at that volume.',
    ],
  },
  {
    id: 'thingz',
    role: 'Full Stack Developer',
    company: 'Thingz',
    period: '2019 – 2020',
    points: [
      'Created and maintained WordPress websites with custom plugins for e-commerce platforms. Plugins for the store, kept working as checkout changed.',
      'Developed client-facing applications using React and Node.js with SQL database integration. The screens clients used, not a brochure site.',
    ],
  },
  {
    id: 'vixi',
    role: 'Full Stack Developer',
    company: 'VIXI',
    period: '2018 – 2019',
    points: [
      'Developed Smart TV applications for multiple platforms using React and JavaScript. Each brand had its own operating system, so the app was adapted, not copied.',
      'Integrated external video players and adapted the UI for different TV brands and operating systems. Resolution, remote focus, and the player were part of the job.',
      'Worked with major companies including Aniview and Cedato on video streaming solutions. Integrations with their ad and video stacks.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 'afeka',
    program: 'Practical Software Engineering',
    institution: 'Afeka College',
    location: 'Tel Aviv',
    period: '2014 – 2016',
  },
];
