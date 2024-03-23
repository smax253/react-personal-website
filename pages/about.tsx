import Head from "next/head";
import { WavyBackground } from "../components/ui/wavy-background";
import { Start } from "../components/start/start";
import { Header } from "../components/shared/Header";
import { WavyBackgroundWrapper } from "../components/ui/wavy-background-wrapper";

export const AboutPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Max Shi | Fullstack Developer</title>
        <meta name="description" content="Max Shi's home page" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <WavyBackgroundWrapper colors={["red", "blue"]}>
        <h1 className="flex">hi there</h1>
      </WavyBackgroundWrapper>
    </div>
  );
};

export default AboutPage;
