"use client";

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// A single reusable entrance animation so every section reveals the same
// deliberate way on scroll, rather than each component reinventing it.
// The app is wrapped in <MotionConfig reducedMotion="user"> (see
// ThemeProvider.tsx), which automatically strips the transform part of
// this animation for users who prefer reduced motion, leaving only the
// opacity fade.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
