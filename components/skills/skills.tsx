import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ProgressBar } from "react-bootstrap";
import { SKILLS } from "../../constants/skill-content";
import { Experience, Skill } from "../../models/skills";
import styles from "./skills.module.scss";

const SkillBar = (props: { skill?: Skill; experience: Experience }) => {
  const [barLengths, setBarLengths] = useState([0, 0, 0]);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    const range = props.skill?.contributors[props.experience];
    if (!range || !props.skill) return;
    const firstBar = range[0];
    const secondBar = range[1] - range[0];
    const thirdBar = props.skill.total - range[1];
    setCollapse(true);
    setBarLengths([firstBar, 0, 0]);
    const timeouts: NodeJS.Timeout[] = [];
    timeouts.push(
      setTimeout(() => {
        setCollapse(false);
        timeouts.push(
          setTimeout(() => {
            setBarLengths([firstBar, secondBar, 0]);
            timeouts.push(
              setTimeout(() => {
                setBarLengths([firstBar, secondBar, thirdBar]);
              }, 1500)
            );
          }, 400)
        );
      }, 1000)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [props.skill, props.experience]);
  if (!props.skill) return <div></div>;

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillBarContent}>
        <h6>
          <b>{props.skill.name}</b>
        </h6>
        <ProgressBar>
          <ProgressBar className={styles.fastBar} now={barLengths[0]} key={1} />
          <ProgressBar
            animated
            className={collapse ? styles.fastBar : styles.currentBar}
            now={barLengths[1]}
            key={2}
          />
          <ProgressBar
            className={collapse ? styles.fastBar : styles.progressBar}
            now={barLengths[2]}
            key={3}
          />
        </ProgressBar>
      </div>
    </div>
  );
};

export const Skills = (props: { selected?: Experience }) => {
  const [visible, setVisible] = useState(true);
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);
  const [currentExperience, setCurrentExperience] =
    useState<Experience>("orchard");
  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      const selected = props.selected;
      if (!selected) {
        setDisplayedSkills([]);
        return;
      }
      const filteredSkills = SKILLS.filter((value) => {
        return Object.keys(value.contributors).includes(selected);
      }).slice(0, 3);

      setDisplayedSkills(filteredSkills);
      setCurrentExperience(selected);
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [props.selected]);
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillContentContainer}>
        <Fade className={styles.content} triggerOnce reverse={!visible}>
          {displayedSkills.length > 0 ? (
            <>
              <SkillBar
                skill={displayedSkills[0] || undefined}
                experience={currentExperience}
              />
              {displayedSkills[1] && (
                <SkillBar
                  skill={displayedSkills[1] || undefined}
                  experience={currentExperience}
                />
              )}
              {displayedSkills[2] && (
                <SkillBar
                  skill={displayedSkills[2] || undefined}
                  experience={currentExperience}
                />
              )}
            </>
          ) : (
            <></>
          )}
        </Fade>
      </div>
    </div>
  );
};
