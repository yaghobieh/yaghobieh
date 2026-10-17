import { EDUCATION, PROFILE, STRENGTHS } from '../../constants';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

export function About() {
  return (
    <Section
      id="about"
      index="05"
      eyebrow="About"
      title={
        <>
          Engineer, tech lead, <em className="text-ember-600 dark:text-ember-400">toolmaker</em>.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <img
            src={PROFILE.avatarUrl}
            alt=""
            width={160}
            height={160}
            loading="lazy"
            className="h-28 w-28 rounded-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-36 sm:w-36"
          />
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-700 dark:text-ink-200 md:col-span-6">
          {PROFILE.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={200} className="space-y-8 md:col-span-3">
          <div>
            <h3 className="eyebrow">Education</h3>
            <ul className="mt-4 space-y-4">
              {EDUCATION.map((entry) => (
                <li key={entry.id}>
                  <p className="font-semibold leading-snug">{entry.program}</p>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
                    {entry.institution}, {entry.location}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-500 dark:text-ink-400">{entry.period}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow">Strengths</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {STRENGTHS.map((strength) => (
                <li key={strength} className="chip">
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
