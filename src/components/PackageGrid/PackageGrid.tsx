import type { StatusLabel } from '../../constants';
import { PACKAGES, STATUS_LABELS } from '../../constants';

const STATUS_CLASS: Record<StatusLabel, string> = {
  OPERATIONAL: 'badge--operational',
  SHIPPING: 'badge--shipping',
  BETA: 'badge--beta',
  BUILDING: 'badge--building',
  MONITORING: 'badge--monitoring',
};

function packageLandingUrl(pkg: (typeof PACKAGES)[number]): string {
  return pkg.landingUrl ?? pkg.npmUrl;
}

export function PackageGrid() {
  return (
    <section aria-labelledby="packages-heading">
      <div className="section-header">
        <h2 id="packages-heading" className="section-header__title">
          Package Monitor
        </h2>
        <span className="section-header__meta">
          {PACKAGES.length} LOCATIONS MONITORED
        </span>
      </div>
      <div className="package-grid">
        {PACKAGES.map((pkg) => (
          <a
            key={pkg.id}
            href={packageLandingUrl(pkg)}
            target="_blank"
            rel="noopener noreferrer"
            className="package-card package-card--link"
          >
            <div className="package-card__header">
              <h3 className="package-card__label">{pkg.label}</h3>
              <span className={`badge ${STATUS_CLASS[pkg.status]}`}>
                {STATUS_LABELS[pkg.status]}
              </span>
            </div>
            <p className="package-card__layer">{pkg.layer}</p>
            <p className="package-card__desc">{pkg.description}</p>
            <div className="package-card__links">
              <span>{pkg.landingUrl ? 'OPEN SITE →' : 'OPEN NPM →'}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
