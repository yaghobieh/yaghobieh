import { NAV_LINKS, PROFILE, SOCIAL_LINKS } from '../../constants';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-10 dark:border-ink-800">
      <div className="page-container flex flex-col gap-6 text-sm text-ink-500 dark:text-ink-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} {PROFILE.name}. Built with React, TypeScript, Vite and Tailwind.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={link.href} className="hover:text-ink-950 dark:hover:text-white">
              {link.label}
            </a>
          ))}
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
