import { MAILTO_HREF, PROFILE, SOCIAL_LINKS } from '../../constants';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import { Reveal } from '../Reveal';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24">
      <div className="page-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-transparent bg-ink-900 px-6 py-16 text-ink-50 dark:border-ink-800 sm:px-14 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-28 h-80 w-80 animate-drift rounded-full bg-ember-500/40 blur-3xl"
            />
            <p className="eyebrow relative !text-ink-300">06 / Contact</p>
            <h2
              id="contact-heading"
              className="relative mt-6 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl"
            >
              Have something worth <em className="text-ember-400">building</em>?
            </h2>
            <p className="relative mt-6 max-w-xl text-lg text-ink-300">
              Product ideas, team leadership, ForgeStack or agentic AI work. I’m happy to talk.
            </p>
            <div className="relative mt-10 flex flex-wrap items-center gap-3">
              <a
                href={MAILTO_HREF}
                className="btn bg-ember-500 text-ink-950 hover:-translate-y-0.5 hover:bg-ember-400"
              >
                <Icon name="mail" />
                {PROFILE.email}
              </a>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-ink-600 hover:-translate-y-0.5 hover:border-ink-200"
                >
                  <Icon name={link.id as IconName} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
