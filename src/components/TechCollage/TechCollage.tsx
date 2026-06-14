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
          <p className="section-header__meta">TOOLS &amp; RUNTIME</p>
          <h2 id="collage-heading" className="section-header__title">
            Tech Stack
          </h2>
        </div>
      </div>

      <ul className="tech-collage__chips">
        {COLLAGE_TECH.map((tech) => (
          <li key={tech.id}>
            <span
              className="tech-collage__chip"
              style={{ '--chip-accent': `#${tech.brandColor}` } as CSSProperties}
            >
              <img
                className="tech-collage__icon"
                src={collageIconUrl(tech.slug, tech.brandColor)}
                alt=""
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="tech-collage__name">{tech.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
