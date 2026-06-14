import { SKILLS } from '../../constants';

export function SkillsPanel() {
  return (
    <section className="skills-panel" aria-labelledby="skills-heading">
      <div className="section-header" style={{ marginBottom: '1rem', paddingBottom: '0.5rem' }}>
        <h2 id="skills-heading" className="section-header__title">
          Capability Matrix
        </h2>
        <span className="section-header__meta">SKILL BARS</span>
      </div>
      <ul className="skills-panel__list">
        {SKILLS.map((skill) => (
          <li key={skill.id} className="skill-row">
            <div className="skill-row__header">
              <span className="skill-row__label">{skill.label}</span>
              <span className="skill-row__percent">{skill.percent}%</span>
            </div>
            <div className="skill-row__bar" role="progressbar" aria-valuenow={skill.percent} aria-valuemin={0} aria-valuemax={100} aria-label={skill.label}>
              <div className="skill-row__fill" style={{ width: `${skill.percent}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
