import type { CSSProperties } from 'react';
import { COLLAGE_ICON_BASE, COLLAGE_TECH } from '../../constants';

function collageIconUrl(slug: string, brandColor: string): string {
  return `${COLLAGE_ICON_BASE}/${slug}/${brandColor}`;
}

export function TechCollage() {
  return (
    <section className="tech-collage" aria-labelledby="collage-heading">
      <div className="section-header tech-collage__header">
        <div>
          <p className="section-header__meta">STACK COLLAGE · 12 TECHNOLOGIES MONITORED</p>
          <h2 id="collage-heading" className="section-header__title">
            Ops &amp; Craft Stack
          </h2>
        </div>
        <span className="tech-collage__status">
          <span className="pulse-dot" aria-hidden="true" />
          ALL CHANNELS ACTIVE
        </span>
      </div>

      <div className="tech-collage__grid">
        {COLLAGE_TECH.map((tech) => (
          <article
            key={tech.id}
            className={`tech-collage__tile tech-collage__tile--span-${tech.span}`}
            style={{ '--tile-accent': `#${tech.brandColor}` } as CSSProperties}
          >
            <div className="tech-collage__tile-glow" aria-hidden="true" />
            <img
              className="tech-collage__icon"
              src={collageIconUrl(tech.slug, tech.brandColor)}
              alt=""
              width={32}
              height={32}
              loading="lazy"
            />
            <p className="tech-collage__name">{tech.name}</p>
            <span className="tech-collage__category">{tech.category}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
