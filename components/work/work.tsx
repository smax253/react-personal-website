import styles from "./work.module.scss";
import Image from "next/image";
import goldman from "../../assets/goldman-sachs.png";
import tda from "../../assets/td-ameritrade.png";
import stevens from "../../assets/stevens.png";
import orchard from "../../assets/orchard.png";
import { useEffect, useMemo, useState } from "react";

import { TransitionGroup } from "react-transition-group";
import { Fade } from "react-awesome-reveal";

type CompanyContent = {
  company: string;
  position: string;
  location: string;
  date: string;
  accomplishments: string[];
};
type Company = "orchard" | "goldman" | "tda" | "sit";

const content: Record<Company, CompanyContent> = {
  orchard: {
    company: "Orchard",
    position: "Software Engineer",
    location: "New York City, NY",
    date: "July 2022 – present",
    accomplishments: [
      "milestone 1 where I did this",
      "milestone 2 where I did this",
      "milestone 3 where I did this",
    ],
  },
  goldman: {
    company: "Goldman Sachs",
    position: "Technology Internal Audit Summer Analyst",
    location: "New York City, NY",
    date: "June 2021 – August 2021",
    accomplishments: [
      "milestone 1 where I did this",
      "milestone 2 where I did this",
      "milestone 3 where I did this",
    ],
  },
  tda: {
    company: "TD Ameritrade",
    position: "Software Development Intern",
    location: "Jersey City, NJ",
    date: "May 2020 – August 2020",
    accomplishments: [
      "milestone 1 where I did this",
      "milestone 2 where I did this",
      "milestone 3 where I did this",
    ],
  },
  sit: {
    company: "Stevens Institute of Technology",
    position: "Course Assistant",
    location: "Hoboken, NJ",
    date: "August 2019 – May 2022",
    accomplishments: [
      "milestone 1 where I did this",
      "milestone 2 where I did this",
      "milestone 3 where I did this",
    ],
  },
};

const WorkContent = (props: { company: Company | undefined }) => {
  const [shownElement, setShownElement] = useState(<div></div>);
  const [visible, setVisible] = useState(false);
  const currentContent = props.company && content[props.company];

  const element = useMemo(
    () =>
      currentContent ? (
        <div>
          <h1>{currentContent?.company}</h1>
          <h2>{currentContent?.position}</h2>

          <h3>{currentContent?.location}</h3>
          <h4>{currentContent?.date}</h4>
          <hr />

          <h5>Accomplishments</h5>
          <ul>
            {currentContent?.accomplishments.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.noCompany}>
          <h1>Work Experience</h1>
          <h2>Click a company on the right to take a look!</h2>
        </div>
      ),
    [currentContent]
  );

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setShownElement(element);
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [element]);
  return (
    <Fade triggerOnce reverse={!visible}>
      {shownElement}
    </Fade>
  );
};

export const Work = () => {
  const [selected, setSelected] = useState<Company | undefined>(undefined);

  return (
    <main className={styles.main}>
      <div className={styles.workContainer}>
        <div className={styles.logoContainers}>
          <Fade triggerOnce delay={1000}>
            <button
              className={styles.logo}
              onClick={() => setSelected("orchard")}
            >
              <Image src={orchard} alt="orchard" />
            </button>
          </Fade>
          <Fade triggerOnce delay={2000}>
            <button
              className={styles.logo}
              onClick={() => setSelected("goldman")}
            >
              <Image src={goldman} alt="goldman sachs" />
            </button>
          </Fade>

          <Fade triggerOnce delay={3000}>
            <button className={styles.logo} onClick={() => setSelected("tda")}>
              <Image src={tda} alt="td ameritrade" />
            </button>
          </Fade>

          <Fade triggerOnce delay={4000}>
            <button className={styles.logo} onClick={() => setSelected("sit")}>
              <Image src={stevens} alt="Stevens institute of technology" />
            </button>
          </Fade>
        </div>
        <Fade triggerOnce delay={5500}>
          <div className={styles.content}>
            <WorkContent company={selected} />
          </div>
        </Fade>
      </div>
    </main>
  );
};
