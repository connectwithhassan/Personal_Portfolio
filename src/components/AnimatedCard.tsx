"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";

export interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  hoverLift?: number;
  hoverScale?: number;
  tapScale?: number;
}

/**
 * Reusable animated container / card component powered by `motion/react`.
 * Features:
 * - Smooth entrance animation (fade-in + subtle slide-up)
 * - Micro-interactions for hover (gentle lift & scale) and tap (subtle press)
 */
export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  hoverLift = -4,
  hoverScale = 1.015,
  tapScale = 0.985,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{
        y: hoverLift,
        scale: hoverScale,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{
        scale: tapScale,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
