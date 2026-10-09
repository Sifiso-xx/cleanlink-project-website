import { motion, useReducedMotion } from "framer-motion";

export default function SoapBubbles({ count = 5, className = "" }) {
  const reduced = useReducedMotion();
  
  return (
    <div className={`soap-bubbles ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span 
          key={i} 
          className="bubble" 
          style={{ 
            left: `${(i / count) * 100 + 4}%`, 
            width: 10 + (i % 3) * 6, 
            height: 10 + (i % 3) * 6 
          }}
          initial={{ y: 10, opacity: 0 }}
          animate={reduced ? { opacity: .5, y: 0 } : { y: [10, -60], opacity: [0, .85, 0] }}
          transition={reduced ? { duration: 0 } : { duration: 3 + (i % 3), repeat: Infinity, delay: i * .5, ease: "easeOut" }} 
        />
      ))}
    </div>
  );
}
