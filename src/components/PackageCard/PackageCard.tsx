import { PACKAGE_STATUS_LABELS } from '../../constants';
import type { PackageEntry } from '../../types';
import { Icon } from '../Icon';
import { getHostLabel, getPrimaryHref, shouldShowStatus } from './PackageCard.utils';

type PackageCardProps = {
  entry: PackageEntry;
};

const linkClassName =
  'relative z-10 inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 font-mono text-[0.7rem] text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-950 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white';

export function PackageCard({ entry }: PackageCardProps) {
  const primaryHref = getPrimaryHref(entry);
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-400 hover:bg-white dark:border-ink-800 dark:bg-ink-900/40 dark:hover:border-ink-600 dark:hover:bg-ink-900">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold tracking-tight">
          <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:rounded-2xl">
            {entry.label}
          </a>
        </h4>
        <span className="flex items-center gap-2">
          {shouldShowStatus(entry.status) && (
            <span className="rounded-full bg-ember-500/10 px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wider text-ember-700 dark:text-ember-300">
              {PACKAGE_STATUS_LABELS[entry.status]}
            </span>
          )}
          <Icon
            name="arrowUpRight"
            className="h-4 w-4 text-ink-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600 dark:group-hover:text-ember-400"
          />
        </span>
      </div>
      <p className="mt-1 font-mono text-[0.7rem] text-ink-400 dark:text-ink-500">{entry.name}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{entry.description}</p>
      <div className="-ml-2.5 mt-auto flex flex-wrap items-center gap-0.5 pt-4">
        {entry.landingUrl && (
          <a href={entry.landingUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            {getHostLabel(entry.landingUrl)}
          </a>
        )}
        <a
          href={entry.npmUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${entry.label} on npm`}
          title="npm"
          className={linkClassName}
        >
          <Icon name="npm" className="h-3.5 w-3.5" />
        </a>
        <a
          href={entry.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${entry.label} on GitHub`}
          title="GitHub"
          className={linkClassName}
        >
          <Icon name="github" className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
