import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { Experience } from "./skills";

export interface TimelineEntry {
  id: string;
  title: string;
  experience: Experience;
  icon: StaticImageData;
  color: string;
  startDate: Date;
  endDate: Date;
  ordinal: number;
}
