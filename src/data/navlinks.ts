const navlinks: TNavlink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 2,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 6,
    name: "Find Me",
    href: "#contact",
  },
];

export default navlinks;

export type TNavlink = {
  id: number;
  name: string;
  href: string;
};
