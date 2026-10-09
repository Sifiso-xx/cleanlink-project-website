import { motion, useTransform } from "framer-motion";
import { clientJourney } from "../../data/journeyData";

export default function JourneyStage({ item, index, progress, reduced }) {
  const start = index / clientJourney.length;
  const end = (index + 1) / clientJourney.length;
  const input = index === 0 
    ? [0, end - .035, end + .015] 
    : index === clientJourney.length - 1 
      ? [start - .035, start + .025, 1] 
      : [start - .035, start + .025, end - .035, end + .015];
  
  const opacity = useTransform(
    progress, 
    input, 
    index === 0 
      ? [1, 1, 0] 
      : index === clientJourney.length - 1 
        ? [0, 1, 1] 
        : [0, 1, 1, 0]
  );
  
  const y = useTransform(
    progress, 
    input, 
    index === 0 
      ? [0, 0, -45] 
      : index === clientJourney.length - 1 
        ? [55, 0, 0] 
        : [55, 0, 0, -45]
  );
  
  const scale = useTransform(
    progress, 
    input, 
    index === 0 
      ? [1, 1, .97] 
      : index === clientJourney.length - 1 
        ? [.97, 1, 1] 
        : [.97, 1, 1, .97]
  );

  const Icon = item.icon;
  const style = reduced 
    ? { "--accent": item.accent } 
    : { opacity, y, scale, "--accent": item.accent };

  return (
    <motion.article className="journey-card" style={style} aria-hidden={!reduced && undefined}>
      <div className="journey-card-head">
        <span>{item.step}</span>
        <small>{item.short}</small>
        <div className="journey-icon">
          <Icon />
        </div>
      </div>
      <div className="journey-card-main">
        <div>
          <small>STEP {item.step} / 06</small>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="journey-detail">
            <i/>
            <span>{item.detail}</span>
          </div>
        </div>
        <motion.div 
          className="step-icon-panel" 
          style={{ "--accent": item.accent }} 
          animate={reduced ? {} : { scale: [1, 1.05, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon />
        </motion.div>
      </div>
    </motion.article>
  );
}
