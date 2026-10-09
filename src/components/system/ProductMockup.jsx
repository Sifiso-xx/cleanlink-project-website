import { motion } from "framer-motion";
import BrandMark from "../ui/BrandMark";

export default function ProductMockup() {
  return (
    <div className="product-composition" aria-label="CleanLink web and mobile interface concept">
      <motion.div 
        className="browser-frame" 
        initial={{opacity: 0, x: 40, rotateY: -5}} 
        whileInView={{opacity: 1, x: 0, rotateY: 0}} 
        viewport={{once: true}} 
        transition={{type: "spring", stiffness: 70, damping: 20}}
      >
        <div className="browser-bar">
          <i/><i/><i/>
          <small>cleanlink / manager</small>
        </div>
        <div className="browser-body">
          <aside>
            <BrandMark/>
            <span/><span/><span/>
          </aside>
          <div className="mock-dashboard">
            <label>TODAY'S PRIORITIES</label>
            <h3>What needs attention</h3>
            <div className="mock-bars">
              <i/><i/><i/><i/><i/>
            </div>
            {[
              ["Ebuhleni Clinic tender","AWAITING OUTCOME"],
              ["Private client · Sandton","QUOTE SENT"],
              ["Cleaner training · Sipho","IN PROGRESS"]
            ].map(x => (
              <p key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </p>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="phone-frame" 
        initial={{opacity: 0, y: 40, rotate: 4}} 
        whileInView={{opacity: 1, y: 0, rotate: -3}} 
        viewport={{once: true}} 
        transition={{type: "spring", stiffness: 80, damping: 19, delay: .12}}
      >
        <div className="phone-screen">
          <small>TUESDAY · 08 SEP</small>
          <h3>Next job</h3>
          <div className="mobile-job">
            <b>08:30—15:30</b>
            <strong>Private residence</strong>
            <span>Deep clean · Bethal</span>
            <button type="button">Open job card</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
