export type TNavlinks = {
  id: number;
  name: string;
  href: string;
};

export type TSkills = {
  groupHeading: string;
  groupSerial: number;
  skills: string[];
};

export type TProject = {
  image: string;
  link: string;
  name: string;
  summary: string;
  description: string;
};

export type TExperience = {
  companyLogo: string;
  companyName: string;
  companyLink: string;
  emloymentType: "full-time" | "contract" | "internship";
  role: string;
  duration: string;
};

export type TNavLinksData = {
  navlinks: TNavlinks[];
};

export type TSkillGroupData = {
  skills: TSkills[];
};

export type TProjectsData = {
  projects: TProject[];
};

export type TExperienceData = {
  experiences: TExperience[];
};
