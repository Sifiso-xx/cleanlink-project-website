import { motion, useTransform } from "framer-motion";

export default function ScrollStep({ progress, range, number, title, text }) {
  const opacity = useTransform(
    progress, 
    [range[0], range[0] + .08, range[1] - .08, range[1]], 
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [range[0], range[0] + .1], [35, 0]);

  return (
    <motion.article className="scroll-step" style={{ opacity, y }}>
      <small>{number}</small>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}
