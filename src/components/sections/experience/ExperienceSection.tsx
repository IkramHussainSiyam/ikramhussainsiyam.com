import Section from "~/components/common/section";
import useJsonData from "~/hooks/useJsonData";
import type { TExperienceData } from "~/types/data";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const { experiences } = useJsonData<TExperienceData>("experiences");

  return (
    <Section id="experience" sectionTitle="experience">
      <div className="section-padding-x py-0 lg:py-24">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </Section>
  );
}
