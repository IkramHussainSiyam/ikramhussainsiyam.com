import Section from "~/components/common/section";
import projects from "~/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Section id="projects" sectionTitle="projects">
      <div className="section-padding-x py-0 lg:py-24">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
