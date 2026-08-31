import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "../lib/cn";

const containerVariants = {
  hidden: {},
  show: {},
};

const letterVariants = {
  hidden: { opacity: 0 },
  show: (index) => ({
    opacity: 1,
    transition: { delay: index * 0.07 },
  }),
};

export function StaggeredFade({ text, className = "" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={containerVariants}
      className={cn(
        "whitespace-pre-wrap text-xl font-bold tracking-tighter sm:text-4xl md:text-6xl md:leading-[4rem]",
        className,
      )}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={letterVariants}
          custom={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}
