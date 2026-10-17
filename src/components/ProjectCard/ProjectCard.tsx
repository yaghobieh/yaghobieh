import { PROJECT_STATUS_LABELS } from '../../constants';
import type { ProjectEntry } from '../../types';
import { Icon } from '../Icon';
import { getStatusClassName } from './ProjectCard.utils';

type ProjectCardProps = {
  project: ProjectEntry;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { name, kicker, summary, highlights, stack, status, link } = project;
  return (
    <article className="surface group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10 dark:hover:shadow-black/30 sm:p-9">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-ember-400/0 blur-3xl transition-colors duration-700 group-hover:bg-ember-400/20"
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClassName(status)}`}>
          {PROJECT_STATUS_LABELS[status]}
        </span>
      </div>

      <p className="eyebrow relative mt-10">{kicker}</p>
      <h3 className="relative mt-2 font-display text-5xl tracking-tight sm:text-6xl">{name}</h3>
      <p className="relative mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-300">{summary}</p>

      <ul className="relative mt-6 space-y-2.5 text-sm text-ink-700 dark:text-ink-200">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 rounded-full bg-ember-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap items-end justify-between gap-4 pt-10">
        <ul className="flex flex-wrap gap-2" aria-label={`${name} tech stack`}>
          {stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        {link ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 underline decoration-ember-500 decoration-2 underline-offset-4 hover:text-ember-700 dark:text-ink-50 dark:hover:text-ember-300"
          >
            {link.label}
            <Icon name="arrowUpRight" />
          </a>
        ) : (
          <span className="text-sm text-ink-500 dark:text-ink-400">Private repo, in active development</span>
        )}
      </div>
    </article>
  );
}
