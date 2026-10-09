import { motion, useReducedMotion } from "framer-motion";

export default function SprayBottle({ className = "" }) {
  const reduced = useReducedMotion();
  
  return (
    <svg className={`clean-anim spray-bottle ${className}`} viewBox="0 0 100 120" aria-hidden="true">
      <rect x="28" y="42" width="36" height="58" rx="9" fill="#75d49a" />
      <rect x="37" y="20" width="18" height="24" rx="4" fill="#3fa66b" />
      <rect x="53" y="12" width="28" height="9" rx="3" fill="#2f7d52" transform="rotate(20 53 12)" />
      <g transform="translate(80,8)">
        {!reduced && [0, 1, 2].map(i => (
          <motion.circle 
            key={i} 
            r="3" 
            fill="#68c8ee"
            initial={{ opacity: 0, cx: i * 6, cy: 0 }}
            animate={{ cx: [i * 6, i * 6 + 16], cy: [0, 32 + i * 4], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.4, delay: i * .3, ease: "easeOut" }} 
          />
        ))}
      </g>
    </svg>
  );
}
