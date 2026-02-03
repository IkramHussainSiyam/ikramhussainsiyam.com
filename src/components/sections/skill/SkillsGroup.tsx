import type { TSkillGroup } from "~/data/skills";
import Skill from "./Skill";

export default function SkillsGroup({
  skillGroup,
}: {
  skillGroup: TSkillGroup;
}) {
  return (
    <article className="section-padding-x ">
      <div className="flex items-center justify-between">
        <h4 className="uppercase font-heading font-medium text-xl md:text-2xl">
          {skillGroup.title}
        </h4>
        <span className="font-heading font-medium text-xl">
          0{skillGroup.serial}
        </span>
      </div>

      <div className="my-7 grid grid-cols-2 gap-x-12 gap-y-4">
        {skillGroup.skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </article>
  );
}
