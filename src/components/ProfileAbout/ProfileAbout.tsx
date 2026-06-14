import { PROFILE } from '../../constants';

export function ProfileAbout() {
  return (
    <section className="profile-about" aria-labelledby="profile-heading">
      <div className="profile-about__card">
        <img
          className="profile-about__avatar"
          src={PROFILE.avatarUrl}
          alt={PROFILE.name}
          width={112}
          height={112}
        />
        <div className="profile-about__body">
          <p className="profile-about__meta">OPERATOR PROFILE</p>
          <h1 id="profile-heading" className="profile-about__name">
            {PROFILE.name}
          </h1>
          <p className="profile-about__title">
            {PROFILE.title} · {PROFILE.location}
          </p>
          <p className="profile-about__bio">{PROFILE.bio}</p>
          <div className="profile-about__links">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-about__link profile-about__link--primary"
            >
              LinkedIn →
            </a>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-about__link"
            >
              GitHub →
            </a>
            <a
              href={PROFILE.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-about__link"
            >
              npm →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
