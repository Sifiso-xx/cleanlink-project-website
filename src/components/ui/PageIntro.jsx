import { motion } from "framer-motion";
import { reveal, stagger } from "../../utils/animations";
import SectionLabel from "./SectionLabel";

export default function PageIntro({ index, eyebrow, title, copy, accent }) {
  return (
    <section className="page-intro">
      <motion.div className="page-intro-copy" initial="hidden" animate="show" variants={stagger}>
        <motion.div variants={reveal}>
          <SectionLabel index={index}>{eyebrow}</SectionLabel>
        </motion.div>
        <motion.h1 variants={reveal}>{title}</motion.h1>
        <motion.p variants={reveal}>{copy}</motion.p>
      </motion.div>
      {accent && (
        <motion.div 
          className="page-intro-accent" 
          initial={{ opacity: 0, scale: .9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: .2 }}
        >
          {accent}
        </motion.div>
      )}
    </section>
  );
}
