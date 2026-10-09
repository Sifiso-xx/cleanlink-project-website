import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { reveal, stagger } from "../utils/animations";
import PageIntro from "../components/ui/PageIntro";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";
import SprayBottle from "../components/animations/SprayBottle";
import MopWipe from "../components/animations/MopWipe";
import SoapBubbles from "../components/animations/SoapBubbles";

export default function StoryPage() {
  return (
    <main id="main-content">
      <PageIntro 
        index="01" 
        eyebrow="Our story" 
        title={<>Good cleaners.<br/><em>An unpredictable pipeline.</em></>} 
        copy="The issue was never whether the company could clean. It was what happens between tenders, and how hard it still is for a private client to simply book the crew directly." 
        accent={<SprayBottle />}
      />

      <section className="company section-cream">
        <Reveal className="section-wrap company-grid">
          <motion.div variants={reveal}>
            <SectionLabel index="02">Mcusi Omhlophe Holdings</SectionLabel>
            <h2>A small company doing necessary work.</h2>
          </motion.div>
          <motion.div className="company-copy" variants={reveal}>
            <p className="lead">
              Mcusi Omhlophe Holdings (Pty) Ltd is a South African cleaning services company established in 2022.
            </p>
            <p>
              The company employs roughly 17 cleaners and has built most of its business by winning government and 
              public-sector tenders. That dependence makes revenue volatile: tender cycles are unpredictable, and a 
              gap between contracts affects real people's working hours.
            </p>
          </motion.div>
          <motion.div className="fact-strip" variants={stagger}>
            {[
              ["2022","the company began"],
              ["17","cleaners on the team"],
              ["GOV","tenders are the main revenue channel"],
              ["MP","home base: Mpumalanga"]
            ].map(([a, b]) => (
              <motion.div variants={reveal} key={b}>
                <strong>{a}</strong>
                <span>{b}</span>
              </motion.div>
            ))}
          </motion.div>
        </Reveal>
      </section>

      <section className="photo-break section-paper">
        <div className="clean-break-graphic">
          <MopWipe />
          <SoapBubbles count={4} />
        </div>
        <div className="photo-break-copy">
          <span>The work is steady. The revenue isn't.</span>
          <h2>The gap is a missing channel.</h2>
        </div>
      </section>

      <section className="problem section-ink">
        <div className="section-wrap">
          <SectionLabel index="03">Where it breaks down</SectionLabel>
          <Reveal className="problem-layout">
            <motion.div variants={reveal}>
              <h2>Tenders come and go. There's no second door for work to come through.</h2>
              <p>
                Government tender cycles are unpredictable, and when one ends without another lined up, cleaners can go 
                without hours. Meanwhile the company has no digital front door for private homes and businesses that would 
                happily book directly — so a second, steadier stream of work stays out of reach.
              </p>
            </motion.div>
            <motion.div className="mess-board" variants={reveal}>
              <span className="note n1">Tender result?<br/><b>still waiting</b></span>
              <span className="note n2">2 cleaners<br/><b>between contracts</b></span>
              <span className="note n3">Private client asked—<br/><b>no way to book</b></span>
              <span className="note n4">Training done?<br/><b>not tracked</b></span>
              <div className="board-question">Who fills the gap?</div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="consequence section-mint">
        <Reveal className="section-wrap consequence-grid">
          <motion.div variants={reveal}>
            <span className="big-index">04</span>
          </motion.div>
          <motion.div variants={reveal}>
            <h2>
              CleanLink is our answer: one platform that keeps the tender pipeline organised and opens a direct channel 
              to private clients, so the crew always has a next job.
            </h2>
          </motion.div>
        </Reveal>
      </section>

      <section className="story-next section-cream">
        <div className="section-wrap next-link-grid">
          <div>
            <SectionLabel index="05">Next</SectionLabel>
            <h2>See what we're actually building.</h2>
          </div>
          <Link className="button button-dark" to="/system">
            Open the system story <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
