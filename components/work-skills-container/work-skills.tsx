import { useMemo, useState } from "react";
import { Experience } from "../../models/skills";
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";
import { Work } from "../work/work";

export const WorkSkills = () => {
  const [selectedProject, setSelectedProject] = useState<
    Experience | undefined
  >(undefined);
  const [selectedCompany, setSelectedCompany] = useState<
    Experience | undefined
  >(undefined);
  const selectedExperience = useMemo(() => {
    return selectedCompany || selectedProject;
  }, [selectedCompany, selectedProject]);
  return (
    <div style={{ position: "relative" }}>
      <Skills selected={selectedExperience} />
      <Work setSelectedExperience={setSelectedCompany} />
      <Projects setSelectedExperience={setSelectedProject} />
    </div>
  );
};
