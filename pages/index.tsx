import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/shared/Header";

import { Start } from "../components/start/start";
import { Gradient, GradientB } from "../components/helpers/gradient";
import About from "../components/about/about";
import { WorkSkills } from "../components/work-skills-container/work-skills";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Max Shi | Fullstack Developer</title>
        <meta name="description" content="Max Shi's home page" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />

      <Start />

      <Gradient />

      <About />

      <GradientB />

      <WorkSkills />
    </>
  );
};

export default Home;
