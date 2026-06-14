import { NAV_LINKS, STATUS_LABELS } from '../../constants';
import { useClock } from '../../hooks';

export function TopBar() {
  const utcTime = useClock();

  return (
    <header className="topbar">
      <div className="topbar__left">
        <div className="topbar__status">
          <span className="topbar__status-dot" aria-hidden="true" />
          <span>STATUS: {STATUS_LABELS.OPERATIONAL}</span>
        </div>
        <span className="topbar__clock">{utcTime}</span>
      </div>
      <nav className="topbar__nav" aria-label="External links">
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
