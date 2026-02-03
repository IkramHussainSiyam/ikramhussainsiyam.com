const skills: TSkill[] = [
  {
    groupHeading: "languages",
    groupSerial: 1,
    skills: ["html", "css", "javascript", "typescript"],
  },
  {
    groupHeading: "frontend",
    groupSerial: 2,
    skills: [
      "react.js",
      "tanstack start",
      "react router",
      "next.js",
      "tanstack query",
      "zustand",
      "tailwindcss",
    ],
  },
  {
    groupHeading: "backend",
    groupSerial: 3,
    skills: ["supabase", "prisma", "node.js", "express.js"],
  },
  {
    groupHeading: "tooling",
    groupSerial: 4,
    skills: ["git", "gitHub", "linux"],
  },
];

export default skills;

export type TSkill = {
  groupHeading: string;
  groupSerial: number;
  skills: string[];
};
