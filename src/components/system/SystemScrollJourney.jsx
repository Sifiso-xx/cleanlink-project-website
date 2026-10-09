import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { clientJourney } from "../../data/journeyData";
import SectionLabel from "../ui/SectionLabel";
import JourneyStage from "./JourneyStage";

export default function SystemScrollJourney() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: .35 });
  const backdropScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section className="system-journey" ref={ref}>
      <div className="journey-sticky">
        <motion.div 
          className="journey-backdrop-plain" 
          style={reduced ? undefined : { scale: backdropScale }} 
        />
        <div className="journey-backdrop-shade"/>
        <div className="journey-intro">
          <SectionLabel index="02">Scroll through the work</SectionLabel>
          <h2>One request becomes<br/><em>a repeat client.</em></h2>
          <p>
            Six small handovers, seen from the client's side of Client &amp; Service Management. 
            Scroll to follow a private booking from first visit to a five-star review.
          </p>
        </div>
        <div className="journey-rail">
          <span>01</span>
          <div>
            <motion.i style={{scaleY: progressScale}}/>
          </div>
          <span>06</span>
        </div>
        <div className="journey-window">
          {clientJourney.map((item, index) => (
            <JourneyStage 
              key={item.step} 
              item={item} 
              index={index} 
              progress={scrollYProgress} 
              reduced={reduced}
            />
          ))}
        </div>
        <div className="journey-scroll-cue">
          <ArrowDown/>
          <span>Keep scrolling</span>
        </div>
      </div>
    </section>
  );
}
