import { FORGESTACK_COMPONENT_COUNT, PACKAGE_CATEGORIES, PACKAGES, PROFILE } from '../../constants';
import { groupPackages } from '../../utils';
import { Icon } from '../Icon';
import { PackageCard } from '../PackageCard';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

const packageGroups = groupPackages(PACKAGE_CATEGORIES, PACKAGES);

export function ForgeStack() {
  return (
    <Section
      id="forgestack"
      index="02"
      eyebrow="Open source"
      title={
        <>
          ForgeStack, <em className="text-ember-600 dark:text-ember-400">one stack</em> from UI to server.
        </>
      }
      intro={`An ecosystem of ${FORGESTACK_COMPONENT_COUNT} production-ready React components and dev tools across ${PACKAGES.length} packages, designed to work together and published under @forgedevstack.`}
    >
      <div className="space-y-12">
        {packageGroups.map((group) => (
          <Reveal key={group.id}>
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-3">
                <h3 className="text-base font-semibold">{group.label}</h3>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{group.description}</p>
                <p className="mt-3 font-mono text-xs text-ink-400 dark:text-ink-500">
                  {String(group.packages.length).padStart(2, '0')} packages
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
                {group.packages.map((entry) => (
                  <li key={entry.id}>
                    <PackageCard entry={entry} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12 flex flex-wrap gap-3">
        <a href={PROFILE.npmUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Icon name="npm" /> All packages on npm
        </a>
        <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <Icon name="github" /> Source on GitHub
        </a>
      </Reveal>
    </Section>
  );
}
