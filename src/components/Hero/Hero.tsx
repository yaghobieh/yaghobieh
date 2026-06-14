import { PROFILE } from '../../constants';

const FORGECON_MAX = 5;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__eyebrow">ForgeStack Intelligence · Live Monitor</p>
      <h1 id="hero-title" className="hero__title">
        ForgeStack Index
      </h1>
      <p className="hero__name">{PROFILE.name}</p>
      <p className="hero__subtitle">{PROFILE.title} · {PROFILE.tagline}</p>

      <div className="forgecon">
        <p className="forgecon__label">{PROFILE.forgeconLabel}</p>
        <div className="forgecon__bar" role="meter" aria-valuenow={PROFILE.forgeconLevel} aria-valuemin={1} aria-valuemax={FORGECON_MAX} aria-label="ForgeCon development level">
          {Array.from({ length: FORGECON_MAX }, (_, index) => (
            <span
              key={index}
              className={`forgecon__segment${index < PROFILE.forgeconLevel ? ' forgecon__segment--active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="hero__stats">
        <div className="stat">
          <span className="stat__value">{PROFILE.packageCount}</span>
          <span className="stat__label">npm Packages</span>
        </div>
        <div className="stat">
          <span className="stat__value">{PROFILE.repoCount}</span>
          <span className="stat__label">GitHub Repos</span>
        </div>
        <div className="stat">
          <span className="stat__value">{PROFILE.location.split(',')[0]}</span>
          <span className="stat__label">Base of Ops</span>
        </div>
      </div>
    </section>
  );
}
