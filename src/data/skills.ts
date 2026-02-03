import type { IconType } from "react-icons/lib";
import CSSIcon from "~/components/icons/CSSIcon";
import ExpressJsIcon from "~/components/icons/ExpressJsIcon";
import GithubIcon from "~/components/icons/GithubIcon";
import GitIcon from "~/components/icons/GitIcon";
import HtmlIcon from "~/components/icons/HtmlIcon";
import JavaScriptIcon from "~/components/icons/JavaScriptIcon";
import LinuxIcon from "~/components/icons/LinuxIcon";
import NextJsIcon from "~/components/icons/NextJsIcon";
import NodeJsIcon from "~/components/icons/NodeJsIcon";
import PrismaIcon from "~/components/icons/PrismaIcon";
import ReactIcon from "~/components/icons/ReactIcon";
import ReactRouterIcon from "~/components/icons/ReactRouterIcon";
import SupabaseIcon from "~/components/icons/SupabaseIcon";
import TailwindIcon from "~/components/icons/TailwindIcon";
import TanStackIcon from "~/components/icons/TanStackIcon";
import TypeScriptIcon from "~/components/icons/TypeScriptIcon";
import ZustandIcon from "~/components/icons/ZustandIcon";

const skillGroups: TSkillGroup[] = [
  {
    serial: 1,
    title: "languages",
    skills: [
      { icon: HtmlIcon, name: "html" },
      { icon: CSSIcon, name: "css" },
      { icon: JavaScriptIcon, name: "javascript" },
      { icon: TypeScriptIcon, name: "typescript" },
    ],
  },
  {
    serial: 2,
    title: "frontend",
    skills: [
      { icon: ReactIcon, name: "react.js" },
      { icon: TanStackIcon, name: "tanstack" },
      { icon: ReactRouterIcon, name: "react router" },
      { icon: NextJsIcon, name: "next.js" },
      { icon: ZustandIcon, name: "zustand" },
      { icon: TailwindIcon, name: "tailwindcss" },
    ],
  },
  {
    serial: 3,
    title: "backend",
    skills: [
      { icon: SupabaseIcon, name: "supabase" },
      { icon: PrismaIcon, name: "prisma" },
      { icon: NodeJsIcon, name: "node.js" },
      { icon: ExpressJsIcon, name: "express.js" },
    ],
  },
  {
    serial: 4,
    title: "tooling",
    skills: [
      { icon: GitIcon, name: "git" },
      { icon: GithubIcon, name: "gitHub" },
      { icon: LinuxIcon, name: "linux" },
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
  icon: IconType;
};
