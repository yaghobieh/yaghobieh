import { SKILL_GROUPS } from '../../constants';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Toolkit"
      title={
        <>
          Full stack, <em className="text-ember-600 dark:text-ember-400">end to end</em>.
        </>
      }
      intro="From the component in the browser to the container in the cluster, and the LLM agents in between."
    >
      <ul className="grid gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 dark:border-ink-800 dark:bg-ink-800 sm:grid-cols-2 lg:grid-cols-5">
        {SKILL_GROUPS.map((group, index) => (
          <li key={group.id} className="bg-ink-50 dark:bg-ink-950">
            <Reveal delay={index * 80} className="h-full p-6 sm:p-7">
              <p className="font-mono text-xs text-ember-700 dark:text-ember-400">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-3xl">{group.label}</h3>
              <ul className="mt-5 space-y-2 text-sm text-ink-700 dark:text-ink-200">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
