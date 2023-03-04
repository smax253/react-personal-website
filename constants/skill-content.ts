import { Skill } from "../models/skills";
import {
  FaAngular,
  FaClock,
  FaJava,
  FaPython,
  FaReact,
  FaRunning,
} from "react-icons/fa";
import { MdScience, MdSpeaker } from "react-icons/md";
export const SKILLS: Skill[] = [
  {
    name: "Angular",
    icon: FaAngular,
    contributors: {
      orchard: [10, 75],
    },
    total: 75,
  },
  {
    name: "Python",
    icon: FaPython,
    contributors: {
      orchard: [25, 60],
    },
    total: 60,
  },
  {
    name: "PostgreSQL",
    icon: FaPython,
    contributors: {
      orchard: [10, 45],
    },
    total: 45,
  },
  {
    name: "Java",
    icon: FaJava,
    contributors: {
      goldman: [25, 35],
      sit: [10, 25],
    },
    total: 40,
  },
  {
    name: "Agile",
    icon: FaRunning,
    contributors: {
      goldman: [25, 40],
      tda: [0, 25],
    },
    total: 65,
  },
  {
    name: "Testing",
    icon: MdScience,
    contributors: {
      tda: [0, 45],
      orchard: [65, 85],
    },
    total: 75,
  },
  {
    name: "Technical Communication",
    icon: MdSpeaker,
    contributors: {
      sit: [10, 30],
      goldman: [30, 70],
    },
    total: 80,
  },
  {
    name: "React",
    icon: FaReact,
    contributors: {
      tda: [0, 50],
      shifts: [50, 65],
      digitalcoach: [65, 80],
    },
    total: 80,
  },
  {
    name: "C/C++",
    icon: FaClock,
    contributors: {
      sit: [0, 35],
    },
    total: 35,
  },
  {
    name: "NextJS",
    icon: FaClock,
    contributors: {
      digitalcoach: [0, 35],
      website: [35, 45],
    },
    total: 45,
  },
  {
    name: "NoSQL Databases",
    icon: FaClock,
    contributors: {
      lighthouse: [0, 10],
      digitalcoach: [30, 55],
      shifts: [10, 30],
    },
    total: 65,
  },
  {
    name: "Express.js",
    icon: FaClock,
    contributors: {
      lighthouse: [0, 35],
    },
    total: 55,
  },
  {
    name: "Deployment and Hosting",
    icon: FaClock,
    contributors: {
      shifts: [15, 35],
      website: [35, 50],
    },
    total: 45,
  },
];
