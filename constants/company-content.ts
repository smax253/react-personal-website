import { Company, CompanyContent } from "../models/company";

export const COMPANY_CONTENT: Record<Company, CompanyContent> = {
  orchard: {
    company: "Orchard",
    position: "Software Engineer",
    location: "New York City, NY",
    date: "July 2022 – present",
    accomplishments: [
      "Led project with over 40 company stakeholders to develop partner program to drive ~$1M/year revenue on rejected leads",
      "Owned 4 core features of flagship instant mortgage pre-qualification, including implementation of proprietary calculations",
      "Remediated broken feature that impacted >1k customers, developing backfill and reworking flow to balance system load",
    ],
  },
  goldman: {
    company: "Goldman Sachs",
    position: "Technology Internal Audit Summer Analyst",
    location: "New York City, NY",
    date: "June 2021 – August 2021",
    accomplishments: [
      "Assessed risk controls in 5 different systems within the Global Markets FICC technology space in complex financial flows",
      "Led stakeholder and team discussion meetings to reconcile technical findings into business risk and remediation plans",
      "Created materials to uplift the Continuous Monitoring process regarding data presentation and new agile framework",
    ],
  },
  tda: {
    company: "TD Ameritrade",
    position: "Software Development Intern",
    location: "Jersey City, NJ",
    date: "May 2020 – August 2020",
    accomplishments: [
      "Created responsive frontend styling, new user interface components, and service connections to backend products",
      "Consistenly mentored peer engineers to drive clean code, test-driven development, and accessibility practices",
      "Programmed in pairs and independently to push 65+ stories and 100+ commits to production codebase over 5 releases",
    ],
  },
  sit: {
    company: "Stevens Institute of Technology",
    position: "Course Assistant",
    location: "Hoboken, NJ",
    date: "August 2019 – May 2022",
    accomplishments: [
      "Guided students in 6 core CS classes from Introduction to Operating Systems",
      "Led office hours, homework and test preparation sessions, grading, and student communications toward 85% pass rate",
    ],
  },
};
