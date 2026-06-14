import type { CSSProperties } from 'react';
import type { CollageCategory } from '../../constants';
import {
  COLLAGE_GROUP_LABELS,
  COLLAGE_GROUP_ORDER,
  COLLAGE_ICON_BASE,
  COLLAGE_TECH,
} from '../../constants';

function collageIconUrl(slug: string, brandColor: string): string {
  return `${COLLAGE_ICON_BASE}/${slug}/${brandColor}`;
}

function techByCategory(category: CollageCategory) {
  return COLLAGE_TECH.filter((tech) => tech.category === category);
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

      <div className="tech-collage__groups">
        {COLLAGE_GROUP_ORDER.map((category) => {
          const items = techByCategory(category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="tech-collage__group">
              <h3 className="tech-collage__group-label">
                {COLLAGE_GROUP_LABELS[category]}
              </h3>
              <ul className="tech-collage__list">
                {items.map((tech) => (
                  <li key={tech.id}>
                    <span
                      className="tech-collage__item"
                      style={{ '--chip-accent': `#${tech.brandColor}` } as CSSProperties}
                    >
                      <img
                        className="tech-collage__icon"
                        src={collageIconUrl(tech.slug, tech.brandColor)}
                        alt=""
                        width={22}
                        height={22}
                        loading="lazy"
                      />
                      <span className="tech-collage__name">{tech.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
