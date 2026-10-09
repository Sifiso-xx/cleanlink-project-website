import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { reveal } from "../utils/animations";
import { roles, functionalities, futureScope } from "../data/systemData";
import PageIntro from "../components/ui/PageIntro";
import SectionLabel from "../components/ui/SectionLabel";
import MopWipe from "../components/animations/MopWipe";
import SystemScrollJourney from "../components/system/SystemScrollJourney";
import ProductMockup from "../components/system/ProductMockup";

export default function SystemPage() {
  return (
    <main id="main-content">
      <PageIntro 
        index="01" 
        eyebrow="The system" 
        title={<>One platform.<br/><em>Four jobs done properly.</em></>} 
        copy="The value isn't magic. It's knowing which tenders are live, which cleaners are trained and free, which jobs need equipment, and which private clients are waiting on a quote." 
        accent={<MopWipe />}
      />

      <SystemScrollJourney/>

      <section className="roles section-ink">
        <div className="section-wrap">
          <SectionLabel index="03">Who uses it</SectionLabel>
          <h2>Four roles, one shared record.</h2>
          <div className="role-grid">
            {roles.map(r => {
              const Icon = r.icon;
              return (
                <article className="role-card" style={{"--accent": r.accent}} key={r.code}>
                  <div className="role-icon">
                    <Icon/>
                  </div>
                  <div>
                    <small>{r.label}</small>
                    <h3>{r.title}</h3>
                  </div>
                  {r.points.map(pt => (
                    <p key={pt}>
                      <Check/>
                      {pt}
                    </p>
                  ))}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="surfaces section-cream">
        <div className="section-wrap surfaces-grid">
          <div>
            <SectionLabel index="04">Two working views</SectionLabel>
            <h2>A full view for the office. A simple one on site.</h2>
            <p>
              The manager and system owner need the full pipeline of tenders, clients and crew. A cleaner mostly needs 
              the next job, the place, the time and a way to close it off — the client just needs a way to book.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>React Native</span>
            </div>
          </div>
          <ProductMockup/>
        </div>
      </section>

      <section className="scope section-paper">
        <div className="section-wrap">
          <SectionLabel index="05">What made the cut</SectionLabel>
          <div className="scope-heading">
            <h2>Four core functionalities.</h2>
            <p>The project is deliberately smaller than a complete cleaning-business platform.</p>
          </div>
          <div className="scope-columns">
            <div>
              <span className="scope-tag">
                <ShieldCheck/>
                In this project
              </span>
              <div className="functionality-list">
                {functionalities.map((f, i) => (
                  <p key={f.title}>
                    <b>0{i+1} {f.title}</b>
                    {f.text}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <span className="scope-tag muted">Maybe later</span>
              {futureScope.map(x => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
