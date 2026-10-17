export type PackageStatus = 'stable' | 'shipping' | 'beta' | 'building';

export type PackageCategoryId = 'ui' | 'state' | 'backend' | 'styling' | 'tooling';

export type PackageCategory = {
  id: PackageCategoryId;
  label: string;
  description: string;
};

export type PackageEntry = {
  id: string;
  name: string;
  label: string;
  description: string;
  category: PackageCategoryId;
  status: PackageStatus;
  npmUrl: string;
  githubUrl: string;
  landingUrl?: string;
};

export type PackageGroup = PackageCategory & {
  packages: PackageEntry[];
};
