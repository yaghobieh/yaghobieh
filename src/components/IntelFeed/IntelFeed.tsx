import { IDEAS } from '../../constants';

const TIER_CLASS: Record<string, string> = {
  HIGH: 'intel-item__tier--high',
  MEDIUM: 'intel-item__tier--medium',
  LOW: 'intel-item__tier--low',
};

export function IntelFeed() {
  return (
    <section className="intel-feed" aria-labelledby="intel-heading">
      <div className="section-header" style={{ padding: '0.75rem 1rem', marginBottom: 0 }}>
        <h2 id="intel-heading" className="section-header__title">
          OSINT Feed
        </h2>
        <span className="section-header__meta">IDEAS · INTEL BRIEFS</span>
      </div>
      <ul className="intel-feed__list">
        {IDEAS.map((idea) => (
          <li key={idea.id} className="intel-item">
            <div className="intel-item__meta">
              <span>{idea.timestamp}</span>
              <span className={TIER_CLASS[idea.tier]}>{idea.tier}</span>
              <span>{idea.category}</span>
            </div>
            <h3 className="intel-item__title">{idea.title}</h3>
            <p className="intel-item__summary">{idea.summary}</p>
            <p className="intel-item__footer">
              {idea.signals} signals · {idea.sources} sources
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
