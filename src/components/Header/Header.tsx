import { useEffect, useState } from 'react';
import { NAV_LINKS, PROFILE } from '../../constants';
import { ThemeToggle } from '../ThemeToggle';
import { SCROLLED_OFFSET_PX } from './Header.consts';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLLED_OFFSET_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-ink-50/80 backdrop-blur-md dark:border-ink-800/70 dark:bg-ink-950/75'
          : 'border-b border-transparent'
      }`}
    >
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${PROFILE.name}, back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 font-display text-lg italic text-ember-400 transition-transform group-hover:rotate-[-8deg] dark:bg-ink-100 dark:text-ember-600">
            JY
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">{PROFILE.name}</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-950 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !px-4 !py-2.5">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
