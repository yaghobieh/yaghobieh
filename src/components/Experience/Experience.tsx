import { EXPERIENCE } from '../../constants';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

export function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      eyebrow="Experience"
      title={
        <>
          From Smart TV apps to <em className="text-ember-600 dark:text-ember-400">telecom scale</em>.
        </>
      }
    >
      <ol className="relative">
        {EXPERIENCE.map((job, index) => (
          <li key={job.id} className="relative grid gap-4 pb-12 last:pb-0 md:grid-cols-12 md:gap-6">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[5px] top-2 w-px bg-ink-200 dark:bg-ink-800 md:left-[calc(25%-6px)]"
            />
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 h-[11px] w-[11px] rounded-full border-2 md:left-[calc(25%-11px)] ${
                index === 0
                  ? 'border-ember-500 bg-ember-500'
                  : 'border-ink-300 bg-ink-50 dark:border-ink-600 dark:bg-ink-950'
              }`}
            />
            <Reveal className="pl-7 md:col-span-3 md:pl-0 md:pr-8">
              <p className="font-mono text-xs text-ember-700 dark:text-ember-400">{job.period}</p>
              <p className="mt-2 font-display text-3xl leading-none">{job.company}</p>
            </Reveal>
            <Reveal delay={100} className="pl-7 md:col-span-9 md:pl-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {job.role} <span className="sr-only">at {job.company}</span>
              </h3>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7rem] h-1 w-3 shrink-0 rounded-full bg-ember-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
