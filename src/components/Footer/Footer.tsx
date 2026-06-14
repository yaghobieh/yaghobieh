import { FOOTER_LINKS, PROFILE } from '../../constants';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__disclaimer">
          Operational disclaimer — This dashboard is for informational and portfolio purposes only.
          Package status indicators reflect development activity, not production SLAs.
          Built with React, TypeScript, and Vite. Monitor the stack responsibly.
        </p>
        <nav className="footer__links" aria-label="Footer links">
          {FOOTER_LINKS.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} {PROFILE.name} · ForgeStack · {PROFILE.handle}.github.io
        </p>
      </div>
    </footer>
  );
}
