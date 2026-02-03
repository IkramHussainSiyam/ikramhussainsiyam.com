const skillGroups: TSkillGroup[] = [
  {
    serial: 1,
    title: "languages",
    skills: [
      { icon: "", name: "html" },
      { icon: "", name: "css" },
      { icon: "", name: "javascript" },
      { icon: "", name: "typescript" },
    ],
  },
  {
    serial: 2,
    title: "frontend",
    skills: [
      { icon: "", name: "react.js" },
      { icon: "", name: "tanstack start" },
      { icon: "", name: "react router" },
      { icon: "", name: "next.js" },
      { icon: "", name: "tanstack query" },
      { icon: "", name: "zustand" },
      { icon: "", name: "tailwindcss" },
    ],
  },
  {
    serial: 3,
    title: "backend",
    skills: [
      { icon: "", name: "supabase" },
      { icon: "", name: "prisma" },
      { icon: "", name: "node.js" },
      { icon: "", name: "express.js" },
    ],
  },
  {
    serial: 4,
    title: "tooling",
    skills: [
      { icon: "", name: "git" },
      { icon: "", name: "gitHub" },
      { icon: "", name: "linux" },
    ],
  },
];

export default skillGroups;

export type TSkillGroup = {
  serial: number;
  title: string;
  skills: TSkill[];
};

export type TSkill = {
  name: string;
  icon: any;
};
