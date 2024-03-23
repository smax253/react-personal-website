import { ReactNode } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./wavy-background";
export interface WavyBackgroundWrapperProps {
  children: ReactNode;
  colors?: string[];
}

export const WavyBackgroundWrapper = (props: WavyBackgroundWrapperProps) => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{
        ease: "easeInOut",
        delay: 0.3,
        damping: 0.5,
        duration: 0.5,
      }}
    >
      <WavyBackground colors={props.colors}>{props.children}</WavyBackground>
    </motion.div>
  );
};
