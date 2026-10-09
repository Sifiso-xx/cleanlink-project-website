import { motion, useReducedMotion } from "framer-motion";

export default function MopWipe({ className = "" }) {
  const reduced = useReducedMotion();
  
  return (
    <svg className={`clean-anim mop-wipe ${className}`} viewBox="0 0 140 90" aria-hidden="true">
      <rect x="0" y="70" width="140" height="6" rx="3" fill="#e7dfce" />
      <motion.rect 
        x="0" 
        y="70" 
        width="55" 
        height="6" 
        rx="3" 
        fill="#cfe8f2"
        animate={reduced ? {} : { x: [0, 62, 0] }} 
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} 
      />
      <motion.g 
        animate={reduced ? {} : { x: [0, 62, 0] }} 
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="20" y="6" width="8" height="46" rx="3" fill="#caa06b" />
        <path d="M6 50 Q24 66 42 50 L42 58 Q24 74 6 58 Z" fill="#4d94b8" />
      </motion.g>
    </svg>
  );
}
