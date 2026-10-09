import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import BroomSweep from "../animations/BroomSweep";
import SoapBubbles from "../animations/SoapBubbles";
import ScrollStep from "./ScrollStep";

export default function ScrollSequence() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const graphicScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const wipeX = useTransform(scrollYProgress, [0, .82], ["0%", "105%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="scroll-sequence" ref={ref}>
      <div className="sequence-sticky">
        <motion.div 
          className="sequence-graphic" 
          style={reduced ? undefined : { scale: graphicScale }}
        >
          <BroomSweep />
          <SoapBubbles count={4} />
        </motion.div>
        <div className="sequence-shade" />
        <motion.div 
          className="sequence-wipe" 
          style={reduced ? { x: "105%" } : { x: wipeX }} 
        />
        <div className="sequence-title">
          <span>What CleanLink changes</span>
          <h2>Work stops relying<br/>on the next tender alone.</h2>
        </div>
        <div className="sequence-steps">
          <ScrollStep 
            progress={scrollYProgress} 
            range={[0, .34]} 
            number="01" 
            title="Tenders are tracked" 
            text="Requirements, documents and outcomes sit in one record, win or lose."
          />
          <ScrollStep 
            progress={scrollYProgress} 
            range={[.32, .68]} 
            number="02" 
            title="Private work is reachable" 
            text="A client can find the company, ask for a quote and book directly."
          />
          <ScrollStep 
            progress={scrollYProgress} 
            range={[.66, 1]} 
            number="03" 
            title="The crew stays busy" 
            text="Skills, availability and equipment are checked before any job is confirmed."
          />
        </div>
        <motion.div className="sequence-progress" style={{ scaleX: lineScale }} />
      </div>
    </section>
  );
}
