import { CompanyContent } from "../models/company";
import { Project, ProjectContent } from "../models/project";
import websiteLogo from "../assets/website-icon.png";
import digitalCoachLogo from "../assets/coach.png";
import lighthouseLogo from "../assets/lighthouse.png";
import shiftsLogo from "../assets/stock-up.png";

export const PROJECT_CONTENT: Record<Project, ProjectContent> = {
  website: {
    project: "Personal Website",
    tagline: "You're looking at it!",
    logo: websiteLogo,
    date: "July 2022 – present",
    accomplishments: [
      "Deep dived into Sass and React animation libraries to create visually interesting interactions",
      "Deployed my app to my own domain name for the first time",
      "Started thinking about and developing a brand for myself",
    ],
  },
  digitalcoach: {
    project: "Digital Coach",
    tagline: '"Best Senior Design Computer Science Project"',
    date: "June 2021 – August 2021",
    logo: digitalCoachLogo,

    accomplishments: [
      "Adapted to a new design pattern introduced by teammate and ran with it",
      "First time building a long-term modern web application and making design and technical decisions",
      'Achieved award of "Best Project in Computer Science Department" among the graduating class',
    ],
  },
  lighthouse: {
    project: "Lighthouse",
    tagline: "A Piazza clone",
    date: "May 2020 – August 2020",
    logo: lighthouseLogo,

    accomplishments: [
      "Used older technologies like jQuery, Handlebars, and Express to develop full-featured web application",
      "Implemented an NLP based sentiment analysis feature to detect duplicates",
      "Ran accessibility checks with the tota11y plugin to ensure good web development practices are met",
    ],
  },
  shifts: {
    project: "shifts",
    tagline: '"r/wallstreetbets in a webapp"',
    date: "August 2019 – May 2022",
    logo: shiftsLogo,

    accomplishments: [
      "Developed protocol for Socket.io messaging between Worker backend and database layer",
      "Deployed and connected frontend and backend from one monorepo in Heroku",
      "Managed frontend to backend connections and models with GraphQL",
    ],
  },
};
export const ALL_PROJECTS = Object.keys(PROJECT_CONTENT) as Project[];
