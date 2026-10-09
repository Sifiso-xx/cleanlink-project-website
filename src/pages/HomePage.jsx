import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { reveal, stagger } from "../utils/animations";
import CleaningScene from "../components/animations/CleaningScene";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";
import ScrollSequence from "../components/home/ScrollSequence";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero photo-hero">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={stagger}>
          <motion.div className="eyebrow" variants={reveal}>
            A project about steadier work for a cleaning crew
          </motion.div>
          <motion.h1 variants={reveal}>
            The next job<br/>shouldn't depend<br/><em>on the next tender.</em>
          </motion.h1>
          <motion.p variants={reveal}>
            CleanLink gives Mcusi Omhlophe Holdings one platform for tenders, crew training and equipment, 
            and a direct booking channel for private clients.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <Link className="button button-primary" to="/story">
              Why we built it <ArrowRight />
            </Link>
            <Link className="text-link" to="/system">
              See the system <ChevronRight />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: .15, type: "spring", stiffness: 80, damping: 18 }}
        >
          <CleaningScene />
        </motion.div>
        <a className="scroll-hint" href="#project">
          <span>Scroll through the project</span>
          <ArrowDown />
        </a>
      </section>

      <section className="honest-intro section-sun" id="project">
        <Reveal className="section-wrap honest-grid">
          <motion.div variants={reveal}>
            <SectionLabel index="01">The short version</SectionLabel>
            <h2>A good cleaning crew can still sit without work between tenders.</h2>
          </motion.div>
          <motion.div variants={reveal}>
            <p>
              Mcusi Omhlophe Holdings wins most of its work through government and public-sector tenders. 
              When a contract ends and the next one is still pending, hours can dry up overnight — and there is 
              still no easy way for a private client to find and book the company directly.
            </p>
            <p>
              We are building one platform to steady that: track tenders properly, manage the crew, 
              and open a direct channel for private work.
            </p>
          </motion.div>
        </Reveal>
      </section>

      <ScrollSequence />

      <section className="home-routes section-ink">
        <div className="section-wrap">
          <SectionLabel index="02">Keep looking</SectionLabel>
          <div className="route-list">
            {[
              {n:"01", to:"/story", title:"Who the company is, and where work gets stuck", tag:"Background + problem"},
              {n:"02", to:"/system", title:"What we are actually building", tag:"Workflow + scope"},
              {n:"03", to:"/team", title:"The three people behind the project", tag:"Team profiles"}
            ].map((r, i) => (
              <motion.div 
                key={r.to} 
                initial={{opacity: 0, x: -24}} 
                whileInView={{opacity: 1, x: 0}} 
                viewport={{once: true}} 
                transition={{type: "spring", stiffness: 90, damping: 20, delay: i * .07}}
              >
                <Link className="route-row" to={r.to}>
                  <span>{r.n}</span>
                  <h3>{r.title}</h3>
                  <small>{r.tag}</small>
                  <ArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
