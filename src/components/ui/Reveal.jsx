import { motion } from "framer-motion";
import { stagger } from "../../utils/animations";

export default function Reveal({ children, className = "", amount = 0.18 }) {
  return (
    <motion.div 
      className={className} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount }} 
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}
