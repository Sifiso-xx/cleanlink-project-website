/**
 * Animation variants for Framer Motion
 */

export const reveal = { 
  hidden: { opacity: 0, y: 25 }, 
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 20 } } 
};

export const stagger = { 
  hidden: {}, 
  show: { transition: { staggerChildren: 0.075, delayChildren: 0.04 } } 
};
