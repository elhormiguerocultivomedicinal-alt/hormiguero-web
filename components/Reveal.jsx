"use client";

import { motion } from "motion/react";

/**
 * Small on-scroll fade+rise, used selectively (product cards, the
 * inspiración block, pillar cards) — not as a uniform reflex on every
 * section. `motion` respects `prefers-reduced-motion` automatically.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
