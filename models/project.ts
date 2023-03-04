import { StaticImageData } from "next/image";

export type Project = "website" | "digitalcoach" | "shifts" | "lighthouse";
export type ProjectContent = {
  project: string;
  tagline: string;
  date: string;
  accomplishments: string[];
  logo: StaticImageData;
};
