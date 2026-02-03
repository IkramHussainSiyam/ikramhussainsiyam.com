import type { TSkill } from "~/data/skills";

export default function Skill({ skill }: { skill: TSkill }) {
  return (
    <div
      key={skill.name}
      className="flex items-center justify-between group/skill w-full px-1 py-1 hover:font-semibold"
    >
      <h6 className="group-hover/skill:ml-1 transition-[font-weight,margin,svg] uppercase text-sm md:text-base duration-300 flex items-center gap-2.5">
        <skill.icon className="size-5 fill-primary" />
        <span>{skill.name}</span>
      </h6>
      <div className="w-1 h-1 bg-primary/40 group-hover/skill:bg-primary" />
    </div>
  );
}
