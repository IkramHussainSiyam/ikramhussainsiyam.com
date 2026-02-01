import Skill from "./Skill";

export default function SkillsGroupItem({
  skills,
  groupHeading,
}: {
  skills: string[];
  groupHeading: [string, number];
}) {
  return (
    <article className="section-padding-x ">
      <div className="flex items-center justify-between">
        <h4 className="uppercase font-heading font-medium text-xl md:text-2xl">
          {groupHeading[0]}
        </h4>
        <span className="font-heading font-medium text-xl">
          0{groupHeading[1]}
        </span>
      </div>

      <div className="my-7 grid grid-cols-2 gap-x-12 gap-y-4">
        {skills.map((skill) => (
          <Skill key={skill} name={skill} />
        ))}
      </div>
    </article>
  );
}
