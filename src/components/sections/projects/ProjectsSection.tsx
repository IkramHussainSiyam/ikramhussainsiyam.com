import Section from "~/components/common/section";
import useJsonData from "~/hooks/useJsonData";
import type { TProjectsData } from "~/types/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { projects } = useJsonData<TProjectsData>("projects");

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
