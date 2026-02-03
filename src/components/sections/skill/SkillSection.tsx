import Section from "~/components/common/section";
import { SectionBorderBG } from "~/components/layout/bordered-background";
import skillGroups from "~/data/skills";
import SkillsGroup from "./SkillsGroup";

export default function SkillSection() {
  return (
    <Section id="skills" sectionTitle="skills">
      <article className="relative section-padding-y grid grid-cols-1 2xl:grid-cols-2 2xl:gap-x-[calc(150px+32px)] gap-y-8 2xl:gap-y-14">
        {skillGroups.map((skillGroup) => (
          <SkillsGroup skillGroup={skillGroup} />
        ))}
        <SectionBorderBG />
      </article>
    </Section>
  );
}
