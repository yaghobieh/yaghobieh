export type ProfileData = {
  name: string;
  firstName: string;
  handle: string;
  title: string;
  location: string;
  headline: string;
  intro: string;
  bio: string[];
  avatarUrl: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  npmUrl: string;
  forgeStackUrl: string;
  siteUrl: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type NavLink = {
  id: string;
  label: string;
  href: string;
};
