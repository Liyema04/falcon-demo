import { motion, useInView, useReducedMotion } from "framer-motion";
import * as React from "react";
import { cn } from "../lib/cn";

const AnimatedCardSectionContext = React.createContext(null);
const easing = [0.22, 1, 0.36, 1];

function getHiddenPosition(direction, distance) {
  switch (direction) {
    case "right":
      return { x: distance, y: 0 };
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
    default:
      return { x: -distance, y: 0 };
  }
}

export function AnimatedCardSection({
  children,
  className = "",
  amount = 0.35,
  once = false,
  margin = "0px",
  ...sectionProps
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount, once, margin });
  const contextValue = React.useMemo(() => ({ isInView }), [isInView]);

  return (
    <AnimatedCardSectionContext.Provider value={contextValue}>
      <section
        {...sectionProps}
        ref={ref}
        className={cn("overflow-x-clip", className)}
      >
        {children}
      </section>
    </AnimatedCardSectionContext.Provider>
  );
}

export function AnimatedCard({
  children,
  direction = "up",
  distance = 100,
  delay = 0,
  duration = 0.6,
  className = "",
  ...cardProps
}) {
  const context = React.useContext(AnimatedCardSectionContext);
  const shouldReduceMotion = useReducedMotion();

  if (!context) {
    throw new Error("AnimatedCard must be used inside AnimatedCardSection.");
  }

  const hiddenPosition = getHiddenPosition(direction, distance);
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }
    : {
        hidden: {
          opacity: 0,
          ...hiddenPosition,
          transition: { duration, ease: easing },
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay, duration, ease: easing },
        },
      };

  return (
    <motion.div
      {...cardProps}
      initial="hidden"
      animate={context.isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
