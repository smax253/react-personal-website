import Head from "next/head";
import Image from "next/image";
import styles from "./about.module.scss";
import profile from "../../assets/profile-crop.jpg";
import { MdHomeWork, MdOutlineSchool } from "react-icons/md";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import { useCallback, useState } from "react";
export const About = () => {
  const [smallHand, setSmallHand] = useState(false);
  const handleReveal = useCallback((visible) => {
    if (!visible || smallHand) return;
    setTimeout(() => {
      setSmallHand(true);
    }, 2000);
  }, []);
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.imageBackgroundContainer}>
          <div className={styles.imageContainer}>
            <Image src={profile} alt={"max shi's picture"} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.aboutHeader}>
          <AttentionSeeker
            triggerOnce
            effect="wobble"
            onVisibilityChange={handleReveal}
            fraction={0.95}
            className={smallHand ? styles.waveSmall : styles.wave}
          >
            👋
          </AttentionSeeker>

          <Fade triggerOnce delay={3000}>
            <h1>Hi, I&apos;m Max!</h1>
          </Fade>
        </div>
        <Fade triggerOnce cascade delay={4000}>
          <div className={styles.overview}>
            <MdHomeWork />
            Software Engineer @ Orchard
          </div>
          <hr />
        </Fade>
        <Fade triggerOnce cascade delay={5000}>
          <div className={styles.overview}>
            <MdOutlineSchool />
            <div className={styles.leftAlign}>
              B.S. Computer Science
              <br /> Minors in Mathematics and Chemistry
              <br />
              Stevens Institute of Technology
            </div>
          </div>
          <hr />
        </Fade>
        <Fade triggerOnce delay={6000}>
          <p>
            I am a <b>full stack software engineer</b> passionate about building{" "}
            <span>impactful end-to-end features</span>, balancing{" "}
            <span>robustness</span>, <span>leanness</span>, and{" "}
            <span>expandability</span>.
          </p>
        </Fade>
        <Fade triggerOnce delay={7000}>
          <p>
            In my free time, I also enjoy gaming, food, traveling, and recently,
            not starving.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
