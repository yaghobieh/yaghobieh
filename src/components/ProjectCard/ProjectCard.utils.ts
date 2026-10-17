import type { ProjectStatus } from '../../types';

const STATUS_CLASS_NAMES: Record<ProjectStatus, string> = {
  'in-progress': 'bg-amber-100 text-amber-900 dark:bg-amber-400/15 dark:text-amber-200',
  live: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-400/15 dark:text-emerald-200',
};

export const getStatusClassName = (status: ProjectStatus): string => STATUS_CLASS_NAMES[status];
