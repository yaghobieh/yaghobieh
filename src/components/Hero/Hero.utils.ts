import type { PackageEntry } from '../../types';

export const getMarqueeLabels = (packages: PackageEntry[]): string[] => {
  const labels = packages.map((entry) => entry.label);
  return [...labels, ...labels];
};
