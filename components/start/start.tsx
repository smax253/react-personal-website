import styles from "./start.module.scss";
import noodles from "../../assets/noodles.png";
import plane from "../../assets/plane.png";
import react from "../../assets/atom.png";

import linkedin from "../../assets/linkedin.png";
import resume from "../../assets/resume.png";
import email from "../../assets/email.png";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useCallback, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { WavyBackground } from "../ui/wavy-background";

export const Start = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const keyFrames = [3000, 5000, 6000, 7000, 8000, 9000, 10000, 11000];
  const particles = (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {},
        fpsLimit: 120,
        delay: 8,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#444",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "image",
            images: [
              {
                src: "/atom.png",
                width: 32,
                height: 32,
              },
              {
                src: "/noodles.png",
                width: 32,
                height: 32,
              },
              {
                src: "/plane.png",
                width: 32,
                height: 32,
              },
            ],
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );

  return (
    <WavyBackground>
      <div>
        <main className={styles.main}>
          <div className={`${styles.name}`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(150)
                  .typeString("Max 石")
                  .pauseFor(1000)
                  .deleteChars(1)
                  .typeString("Shi")
                  .start();
              }}
              options={{ cursor: "" }}
            />
          </div>
          <div className={`${styles.logos}`}>
            <Fade triggerOnce delay={keyFrames[2]}>
              <Image src={react} alt={"react"} />
            </Fade>
            <Fade triggerOnce delay={keyFrames[3]}>
              <Image src={plane} alt={"plane"} />
            </Fade>
            <Fade triggerOnce delay={keyFrames[4]}>
              <Image src={noodles} alt={"noodles"} />
            </Fade>
          </div>
          <div>
            <Fade triggerOnce delay={keyFrames[0]}>
              <p>
                I&apos;m a full-stack web developer based in Jersey City, NJ.
              </p>
            </Fade>

            <div>
              <Fade
                triggerOnce
                delay={keyFrames[1]}
                className={styles.inlineFade}
              >
                <span>Passionate about</span>
              </Fade>{" "}
              <Fade
                triggerOnce
                delay={keyFrames[2]}
                className={styles.inlineFade}
              >
                <span>web technologies,</span>
              </Fade>{" "}
              <Fade
                triggerOnce
                delay={keyFrames[3]}
                className={styles.inlineFade}
              >
                <span>flights,</span>
              </Fade>{" "}
              <Fade
                triggerOnce
                delay={keyFrames[4]}
                className={styles.inlineFade}
              >
                <span>and ramen.</span>
              </Fade>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Fade triggerOnce delay={keyFrames[5]}>
              <div>
                <a
                  href={"https://www.linkedin.com/in/max-shi/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt={"linkedin"} />
                </a>
              </div>
            </Fade>
            <Fade triggerOnce delay={keyFrames[6]}>
              <div>
                <a
                  href={"mailto:smax253@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={email} alt={"email"} />
                </a>
              </div>
            </Fade>
            <Fade triggerOnce delay={keyFrames[7]}>
              <div>
                <a
                  href={"/ResumeMaxShi.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={resume} alt={"resume"} />
                </a>
              </div>
            </Fade>
          </div>
        </main>
        {particles}
      </div>
    </WavyBackground>
  );
};
