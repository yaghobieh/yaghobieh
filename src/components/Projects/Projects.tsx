import { PROJECTS } from '../../constants';
import { ProjectCard } from '../ProjectCard';
import { Reveal } from '../Reveal';
import { Section } from '../Section';

export function Projects() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected work"
      title={
        <>
          Products I’m <em className="text-ember-600 dark:text-ember-400">building</em> right now.
        </>
      }
      intro="Hands-on projects where full stack engineering meets AI, from generating whole sites to keeping AI coding costs under control."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 120} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
