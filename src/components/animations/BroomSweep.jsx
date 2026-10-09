import { motion, useReducedMotion } from "framer-motion";

export default function BroomSweep({ className = "" }) {
  const reduced = useReducedMotion();
  
  return (
    <motion.svg 
      className={`clean-anim broom-sweep ${className}`} 
      viewBox="0 0 240 130" 
      aria-hidden="true"
      initial={{ x: "-15%", opacity: 0 }}
      animate={reduced ? { x: "10%", opacity: 1 } : { x: ["-15%", "115%"], opacity: [0, 1, 1, 0] }}
      transition={reduced ? { duration: 0 } : { duration: 5.5, ease: [0.4, 0, 0.2, 1], repeat: Infinity, repeatDelay: 2.8 }}
    >
      <path 
        d="M2 110 Q90 124 152 92" 
        stroke="#68c8ee" 
        strokeWidth="3" 
        strokeDasharray="1 9" 
        strokeLinecap="round" 
        fill="none" 
        opacity=".7" 
      />
      <g transform="rotate(24 120 65)">
        <line 
          x1="34" 
          y1="6" 
          x2="120" 
          y2="94" 
          stroke="#caa06b" 
          strokeWidth="8" 
          strokeLinecap="round" 
        />
        <path 
          d="M96 74 L64 128 M108 82 L86 128 M120 88 L108 128 M132 92 L130 126 M84 66 L48 118" 
          stroke="#f6ca4b" 
          strokeWidth="6" 
          strokeLinecap="round" 
          fill="none" 
        />
      </g>
    </motion.svg>
  );
}
