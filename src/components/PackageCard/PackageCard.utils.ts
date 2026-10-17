import type { PackageEntry, PackageStatus } from '../../types';

const HIGHLIGHTED_STATUSES: PackageStatus[] = ['beta', 'building'];

export const shouldShowStatus = (status: PackageStatus): boolean =>
  HIGHLIGHTED_STATUSES.includes(status);

export const getPrimaryHref = (entry: PackageEntry): string => entry.landingUrl ?? entry.npmUrl;

export const getHostLabel = (url: string): string => new URL(url).host.replace(/^www\./, '');
