import styles from "./projects.module.scss";
import { Project } from "../../models/project";
import orchard from "../../assets/orchard.png";
import Image from "next/image";
import { ALL_PROJECTS, PROJECT_CONTENT } from "../../constants/project-content";
import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
// export const Projects = () => {
//   return <Timeline allTimelineElements={TIMELINE}></Timeline>;
// };

const LOGO_WIDTH = 8;

const CarouselItem = (props: {
  x: number;
  y: number;
  project: Project;
  setSelected: Function;
  setPreview: Function;
  hide: boolean;
  selected: boolean;
}) => {
  const [remove, setRemove] = useState(false);
  const [anchorPosition, setAnchorPosition] = useState(false);
  const xPosition = useMemo(
    () => (anchorPosition ? 0 : props.x),
    [anchorPosition, props.x]
  );

  const [animatePosition, setAnimatePosition] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRemove(props.hide);
    }, 500);
    return () => clearTimeout(timeout);
  }, [props.hide]);

  useEffect(() => {
    if (props.selected) {
      setAnimatePosition(true);
      const timeout = setTimeout(() => {
        setAnchorPosition(true);
      }, 1250);
      return () => clearTimeout(timeout);
    } else {
      setAnchorPosition(false);
      const timeout = setTimeout(() => {
        setAnimatePosition(false);
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [props.selected]);

  return (
    <Fade
      triggerOnce
      className={`${
        remove
          ? styles.hidden
          : props.selected
          ? styles.selectedLogoContainer
          : styles.logoContainer
      } ${animatePosition ? styles.animatePosition : ""}`}
      style={{
        right: `${xPosition}rem`,
      }}
      reverse={props.hide}
    >
      <button
        className={styles.logo}
        onMouseEnter={() => props.setPreview(props.project)}
        onMouseLeave={() => props.setPreview(undefined)}
        onClick={() => props.setSelected(props.project)}
      >
        <Image src={PROJECT_CONTENT[props.project].logo} alt={props.project} />
      </button>
    </Fade>
  );
};

const Carousel = (props: { setSkillSelected: Function }) => {
  const setSkillSelected = props.setSkillSelected;
  const allElements: Project[] = [
    ...ALL_PROJECTS,
    ...ALL_PROJECTS,
    ...ALL_PROJECTS,
  ];
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<Project | undefined>(undefined);
  const [rotate, setRotate] = useState(true);
  const [preview, setPreview] = useState<Project | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    undefined
  );
  const [previewMode, setPreviewMode] = useState(true);
  const titleContent = useMemo(() => {
    if (selected !== undefined) return PROJECT_CONTENT[selected];
    if (preview !== undefined) return PROJECT_CONTENT[preview];
    return null;
  }, [preview, selected]);
  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    if (hideContent) {
      const timeouts: NodeJS.Timeout[] = [];
      timeouts.push(
        setTimeout(() => {
          setPreviewMode(true);
          setSkillSelected(undefined);

          timeouts.push(
            setTimeout(() => {
              setSelected(undefined);
              setSelectedIndex(undefined);
              timeouts.push(
                setTimeout(() => {
                  setRotate(true);
                }, 1600)
              );
            }, 2000)
          );
        }, 1000)
      );
      return () => timeouts.forEach(clearTimeout);
    }
  }, [hideContent, setSkillSelected]);

  useEffect(() => {
    if (selected) {
      setRotate(false);
      setHideContent(false);
      const timeout = setTimeout(() => {
        setPreviewMode(false);
        setSkillSelected(selected);
      }, 2500);
      return () => clearTimeout(timeout);
    }
    if (rotate) {
      const interval = setInterval(() => {
        setOffset((currentOffset) => {
          return (currentOffset + 0.07) % (ALL_PROJECTS.length * LOGO_WIDTH);
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [selected, rotate]);
  return (
    <div className={styles.carouselContainer}>
      <Fade
        onVisibilityChange={(inView) => {
          setSkillSelected(inView ? selected : undefined);
        }}
      >
        {""}
      </Fade>
      <div className={styles.carouselContent}>
        {allElements.map((project, index) => {
          return (
            <CarouselItem
              key={index}
              project={project}
              x={index * LOGO_WIDTH - offset}
              y={0}
              setPreview={setPreview}
              setSelected={(selectedButton: Project) => {
                if (selectedButton === selected) {
                  setHideContent(true);
                } else {
                  setSelected(selectedButton);
                  setSelectedIndex(index);
                }
              }}
              selected={selectedIndex === index}
              hide={selectedIndex !== undefined && selectedIndex !== index}
            />
          );
        })}
      </div>
      <div
        className={previewMode ? styles.carouselPreview : styles.projectTitle}
      >
        <div className={styles.titleContainer}>
          <>
            <h2>{titleContent?.project || "Projects"}</h2>
            <h3>
              <i>{titleContent?.tagline || "Click to check them out!"}</i>
            </h3>
          </>
        </div>
        <div>
          {!previewMode && (
            <Fade triggerOnce reverse={hideContent}>
              <hr />
              <h4>
                <i>{titleContent?.date}</i>
              </h4>
              <ul className={styles.accomplishmentList}>
                {titleContent &&
                  titleContent.accomplishments.map((val, index) => (
                    <li
                      className={styles.accomplishmentItem}
                      key={titleContent.project + index}
                    >
                      {val}
                    </li>
                  ))}
              </ul>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = (props: { setSelectedExperience: Function }) => {
  return (
    <div className={styles.main}>
      <Carousel setSkillSelected={props.setSelectedExperience} />
    </div>
  );
};
