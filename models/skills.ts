import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { Company } from "./company";
import { Project } from "./project";

export type Experience = Project | Company;

export interface Skill {
  name: string;
  icon: IconType;
  contributors: Partial<Record<Experience, [number, number]>>;
  total: number;
}
