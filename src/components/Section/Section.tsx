import type { ReactNode } from 'react';
import { Reveal } from '../Reveal';

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="py-16 sm:py-24">
      <div className="page-container">
        <Reveal className="mb-12 grid gap-6 border-t border-ink-200 pt-8 dark:border-ink-800 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">
            <span className="text-ember-700 dark:text-ember-400">{index}</span> / {eyebrow}
          </p>
          <div className="md:col-span-9">
            <h2
              id={headingId}
              className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
