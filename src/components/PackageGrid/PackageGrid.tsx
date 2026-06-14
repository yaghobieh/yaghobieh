import type { StatusLabel } from '../../constants';
import { PACKAGES, STATUS_LABELS } from '../../constants';

const STATUS_CLASS: Record<StatusLabel, string> = {
  OPERATIONAL: 'badge--operational',
  SHIPPING: 'badge--shipping',
  BETA: 'badge--beta',
  BUILDING: 'badge--building',
  MONITORING: 'badge--monitoring',
};

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
          <article key={pkg.id} className="package-card">
            <div className="package-card__header">
              <h3 className="package-card__label">{pkg.label}</h3>
              <span className={`badge ${STATUS_CLASS[pkg.status]}`}>
                {STATUS_LABELS[pkg.status]}
              </span>
            </div>
            <p className="package-card__layer">{pkg.layer}</p>
            <p className="package-card__desc">{pkg.description}</p>
            <div className="package-card__links">
              <a href={pkg.npmUrl} target="_blank" rel="noopener noreferrer">
                NPM →
              </a>
              <a href={pkg.githubUrl} target="_blank" rel="noopener noreferrer">
                GITHUB →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
