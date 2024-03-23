import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/shared/Header";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default App;
