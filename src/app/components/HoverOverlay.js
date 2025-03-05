"use client";

import { motion } from "motion/react";
import AnimatedText4 from "./AnimatedText4";

const HoverOverlay = ({ text }) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ opacity: 1, y: 0 }}
    >
      <h4 className="image-overlay-text">
        <AnimatedText4 text={text} />
      </h4>
    </motion.div>
  );
};

export default HoverOverlay;
