import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/shared/Header";
import styles from "./";
import { Start } from "../components/start/start";
import { Gradient, GradientB } from "../components/helpers/gradient";
import About from "../components/about/about";
import { WorkSkills } from "../components/work-skills-container/work-skills";
import { WavyBackground } from "../components/ui/wavy-background";
import { WavyBackgroundWrapper } from "../components/ui/wavy-background-wrapper";
import { TextRevealCard } from "../components/ui/text-reveal-card";

const Home: NextPage = () => {
  return (
    <WavyBackgroundWrapper>
      <Head>
        <title>Max Shi | Fullstack Developer</title>
        <meta name="description" content="Max Shi's home page" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="flex flex-col gap-2">
        <h1 className="text-8xl font-bold">
          Max{" "}
          <TextRevealCard
            revealText="石"
            revealTextClassName={"logo text-8xl"}
            text="Shi"
          />
        </h1>
        <h2 className="text-5xl">Small startups, big impact.</h2>
        <h3 className="text-2xl">Fullstack Software Engineer</h3>
      </div>
    </WavyBackgroundWrapper>
  );
};

export default Home;
