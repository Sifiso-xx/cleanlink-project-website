import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function TwinkleSparkle({ style }) {
  const reduced = useReducedMotion();
  
  return (
    <motion.span 
      className="twinkle" 
      style={style}
      animate={reduced ? { opacity: .8 } : { scale: [0.6, 1, 0.6], opacity: [.4, 1, .4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <Sparkles size={16} />
    </motion.span>
  );
}
