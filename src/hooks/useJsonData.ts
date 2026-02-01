import experiences from "~/data/experiences.json";
import navlinks from "~/data/navlinks.json";
import projects from "~/data/projects.json";
import skills from "~/data/skills.json";

const dataName = { navlinks, skills, projects, experiences };

const useJsonData = <T>(type: keyof typeof dataName): T => {
  return dataName[type] as T;
};

export default useJsonData;
