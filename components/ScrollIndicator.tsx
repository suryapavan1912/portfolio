'use client';

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1
      }
    }
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial="initial"
      animate="animate"
      variants={fadeAnimation}
    >
      <motion.a
        href="#about"
        variants={scrollAnimation}
        className="text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.a>
    </motion.div>
  );
};

export default ScrollIndicator;