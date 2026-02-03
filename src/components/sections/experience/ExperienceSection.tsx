import Section from "~/components/common/section";
import experiences from "~/data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
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
