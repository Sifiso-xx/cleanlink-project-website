import { motion } from "framer-motion";
import { teamSlots } from "../data/teamData";
import { reveal } from "../utils/animations";
import PageIntro from "../components/ui/PageIntro";
import SectionLabel from "../components/ui/SectionLabel";
import SoapBubbles from "../components/animations/SoapBubbles";

export default function TeamPage() {
  return (
    <main id="main-content">
      <PageIntro 
        index="01" 
        eyebrow="The team" 
        title={<>Three students.<br/><em>One shared build.</em></>} 
        copy="This is where our own photographs, roles and contributions will go. The structure is ready; the real details will replace these placeholders." 
        accent={<SoapBubbles count={5} />}
      />

      <section className="team-section section-cream">
        <div className="section-wrap">
          <div className="team-heading">
            <div>
              <SectionLabel index="02">Team 10</SectionLabel>
              <h2>Three profiles, waiting for the people.</h2>
            </div>
            <p>
              These are intentionally unfinished. Once you send the team information, each profile will get a real photo, 
              role and short account of the work that person owned.
            </p>
          </div>
          <div className="team-grid">
            {teamSlots.map((m, i) => (
              <motion.article 
                className={`team-card card-${i+1}`} 
                key={m.code} 
                initial={{opacity: 0, y: 24, rotate: i === 1 ? 1.4 : -.8}} 
                whileInView={{opacity: 1, y: 0, rotate: i === 1 ? 1.4 : -.8}} 
                viewport={{once: true}} 
                transition={{type: "spring", stiffness: 90, damping: 19, delay: i * .07}} 
                tabIndex="0"
              >
                <div className="portrait">
                  {m.photo ? <img src={m.photo} alt={m.name} /> : <span>{m.code}</span>}
                  <div className="portrait-line"/>
                </div>
                <div className="member-copy">
                  <small>TEAM MEMBER {m.code}</small>
                  <h3>{m.name || "Name goes here"}</h3>
                  <p>{m.role}</p>
                  <span>{m.note}</span>
                  {m.email && (
                    <div className="contact-links">
                      <a href={`mailto:${m.email}`}>{m.email}</a>
                      {m.phone && <span> · {m.phone}</span>}
                      {m.github && (
                        <>
                          <br/>
                          <a href={m.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </>
                      )}
                      {m.linkedin && (
                        <>
                          {" · "}
                          <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-close section-ink">
        <div className="section-wrap">
          <span>Still to add</span>
          <h2>Three names. Three photographs. Three honest accounts of who built what.</h2>
        </div>
      </section>
    </main>
  );
}
