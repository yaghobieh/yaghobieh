export type StatusLabel =
  | 'OPERATIONAL'
  | 'SHIPPING'
  | 'BETA'
  | 'BUILDING'
  | 'MONITORING';

export type ProfileData = {
  name: string;
  handle: string;
  title: string;
  location: string;
  tagline: string;
  githubUrl: string;
  linkedinUrl: string;
  npmUrl: string;
  forgeStackUrl: string;
  siteUrl: string;
  packageCount: number;
  repoCount: number;
  forgeconLevel: number;
  forgeconLabel: string;
};

export type PackageEntry = {
  id: string;
  name: string;
  label: string;
  description: string;
  layer: string;
  status: StatusLabel;
  npmUrl: string;
  githubUrl: string;
};

export type IdeaBrief = {
  id: string;
  tier: 'HIGH' | 'MEDIUM' | 'LOW';
  category: string;
  title: string;
  summary: string;
  timestamp: string;
  signals: number;
  sources: number;
};

export type SkillEntry = {
  id: string;
  label: string;
  percent: number;
};

export type CollageCategory = 'frontend' | 'backend' | 'ops' | 'styling' | 'tools' | 'data';

export type CollageTech = {
  id: string;
  name: string;
  slug: string;
  brandColor: string;
  category: CollageCategory;
  span: 1 | 2;
};
