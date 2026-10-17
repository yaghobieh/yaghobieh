import type { PackageCategory, PackageEntry, PackageGroup } from '../types';

export const groupPackages = (
  categories: PackageCategory[],
  packages: PackageEntry[],
): PackageGroup[] =>
  categories
    .map((category) => ({
      ...category,
      packages: packages.filter((entry) => entry.category === category.id),
    }))
    .filter((group) => group.packages.length > 0);
