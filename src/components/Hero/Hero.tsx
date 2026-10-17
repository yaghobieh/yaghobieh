import { PACKAGES, PROFILE, SOCIAL_LINKS } from '../../constants';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import { HERO_STATS } from './Hero.consts';
import { getMarqueeLabels } from './Hero.utils';

const marqueeLabels = getMarqueeLabels(PACKAGES);

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pt-10 sm:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] animate-drift rounded-full bg-ember-400/25 blur-3xl dark:bg-ember-600/20" />
        <div className="absolute -left-32 top-64 h-[22rem] w-[22rem] animate-drift rounded-full bg-amber-200/40 blur-3xl [animation-delay:-9s] dark:bg-ember-700/10" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen" />
      </div>

      <div className="page-container grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="eyebrow flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1 text-ember-700 dark:text-ember-300">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
              {PROFILE.title}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="pin" className="h-3.5 w-3.5" />
              {PROFILE.location}
            </span>
          </p>

          <h1
            id="hero-heading"
            className="mt-7 animate-fade-up font-display text-[3.25rem] leading-[0.98] tracking-tight [animation-delay:80ms] sm:text-7xl lg:text-[5.6rem]"
          >
            I build products,
            <br />
            <em className="text-ember-600 dark:text-ember-400">and the tools</em> that
            <br className="hidden sm:block" /> build them.
          </h1>

          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-600 [animation-delay:160ms] dark:text-ink-300">
            Hi, I’m {PROFILE.firstName} Yaghobieh. {PROFILE.intro}
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
            <a href="#work" className="btn-primary">
              View work
              <Icon name="arrowDown" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact me
            </a>
            <ul className="ml-1 flex items-center gap-1" aria-label="Profiles">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="grid h-11 w-11 place-items-center rounded-full text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white"
                  >
                    <Icon name={link.id as IconName} className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:200ms] lg:col-span-5">
          <figure className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
            <div className="absolute -inset-3 rotate-3 rounded-[2.25rem] border border-ember-500/30" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-200 shadow-2xl shadow-ink-900/10 dark:bg-ink-800 dark:shadow-black/40">
              <img
                src={PROFILE.avatarUrl}
                alt={`Portrait of ${PROFILE.name}`}
                width={480}
                height={560}
                className="aspect-[6/7] w-full object-cover"
                fetchPriority="high"
              />
              <figcaption className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3.5 py-1.5 text-xs text-ink-50 backdrop-blur-md">
                Creator of <span className="font-display text-base italic text-ember-300">ForgeStack</span>
              </figcaption>
            </div>
            <ul className="surface absolute -bottom-10 -left-4 grid !bg-white/90 dark:!bg-ink-900/90 grid-cols-2 gap-4 px-5 py-4 shadow-xl shadow-ink-900/5 sm:-left-10">
              {HERO_STATS.map((stat) => (
                <li key={stat.id} className="max-w-[8.5rem]">
                  <span className="block font-display text-3xl leading-none">{stat.value}</span>
                  <span className="mt-1 block text-[0.72rem] leading-snug text-ink-500 dark:text-ink-400">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </div>

      <div
        className="relative overflow-hidden border-y border-ink-200 py-4 dark:border-ink-800"
        aria-hidden="true"
      >
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl italic text-ink-400 dark:text-ink-500">
          {marqueeLabels.map((label, index) => (
            <span key={`${label}-${index}`} className="flex items-center gap-10">
              {label}
              <span className="text-base not-italic text-ember-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
