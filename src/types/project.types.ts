export type ProjectStatus = 'in-progress' | 'live';

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEntry = {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  link?: ProjectLink;
};
