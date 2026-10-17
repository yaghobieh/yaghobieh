import { FOCUS_AREAS, PROFILE } from '../../constants';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

export function About() {
  return (
    <Section
      id="about"
      index="04"
      eyebrow="About"
      title={
        <>
          Engineer, team lead, <em className="text-ember-600 dark:text-ember-400">toolmaker</em>.
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
        <Reveal delay={200} className="md:col-span-3">
          <h3 className="eyebrow">What I care about</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className="chip">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
