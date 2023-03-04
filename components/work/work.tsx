import styles from "./work.module.scss";
import Image from "next/image";
import goldman from "../../assets/goldman-sachs.png";
import tda from "../../assets/td-ameritrade.png";
import stevens from "../../assets/stevens.png";
import orchard from "../../assets/orchard.png";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Company } from "../../models/company";
import { COMPANY_CONTENT } from "../../constants/company-content";
import { Experience } from "../../models/skills";

const WorkContent = (props: { company: Company | undefined }) => {
  const [shownElement, setShownElement] = useState(<div></div>);
  const [visible, setVisible] = useState(false);
  const currentContent = props.company && COMPANY_CONTENT[props.company];

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

export const Work = (props: {
  setSelectedExperience: Dispatch<SetStateAction<Experience | undefined>>;
}) => {
  const [selectedCompany, setSelectedCompany] = useState<Company | undefined>(
    undefined
  );
  const setSelected = (company: Company) => {
    setSelectedCompany(company);
    props.setSelectedExperience(company);
  };
  return (
    <main className={styles.main}>
      <div className={styles.workContainer}>
        <div className={styles.logoContainers}>
          <Fade triggerOnce delay={1500}>
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

          <Fade triggerOnce delay={2500}>
            <button className={styles.logo} onClick={() => setSelected("tda")}>
              <Image src={tda} alt="td ameritrade" />
            </button>
          </Fade>

          <Fade triggerOnce delay={3000}>
            <button className={styles.logo} onClick={() => setSelected("sit")}>
              <Image src={stevens} alt="Stevens institute of technology" />
            </button>
          </Fade>
        </div>
        <Fade
          onVisibilityChange={(inView) => {
            props.setSelectedExperience(inView ? selectedCompany : undefined);
          }}
        >
          {" "}
        </Fade>
        <Fade delay={1000} triggerOnce>
          <div className={styles.content}>
            <WorkContent company={selectedCompany} />
          </div>
        </Fade>
      </div>
    </main>
  );
};
