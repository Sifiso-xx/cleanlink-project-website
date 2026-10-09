import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "problem", label: "Problem" },
  { id: "cleanlink", label: "CleanLink" },
  { id: "team", label: "Team" },
  { id: "journey", label: "Journey" },
  { id: "arsenal", label: "Arsenal" },
];

const TEAM = [
  { num: "01", tag: "Horseman I" },
  { num: "02", tag: "Horseman II" },
  { num: "03", tag: "Horsewoman III" },
];

const INTRO_COLS = [
  { title: "Clients", items: ["Browse services", "Request quotes", "Track jobs", "Leave reviews"] },
  { title: "Workforce", items: ["Cleaner profiles", "Training records", "Skills & availability", "Job assignments"] },
  { title: "Business", items: ["Tender records", "Equipment tracking", "Payments", "Oversight, in one place"] },
];

const BENTO = [
  { title: "Client & service management", body: "A direct channel where private clients discover services, register, request cleaning, receive quotations and manage their service history.", wide: true },
  { title: "Workforce & training", body: "Centralised cleaner profiles, skills, availability, training and assignments." },
  { title: "Job & equipment", body: "Coordinate jobs, assign cleaners and equipment, track condition and history." },
  { title: "Tenders & admin", body: "Centralise tender documentation, submissions, outcomes and records." },
  { title: "Payments & records", body: "Quotations, invoices, confirmations and reviews, kept in one place." },
];

const JOURNEY = [
  { n: "01", label: "Explore" },
  { n: "02", label: "Select service" },
  { n: "03", label: "Register" },
  { n: "04", label: "Request service" },
  { n: "05", label: "Get quotation" },
  { n: "06", label: "Accept" },
  { n: "07", label: "70% payment", pay: true },
  { n: "08", label: "Job scheduled" },
  { n: "09", label: "Cleaning service" },
  { n: "10", label: "30% payment", pay: true },
  { n: "11", label: "Review" },
  { n: "12", label: "Rebook" },
];

const PROTOTYPES = [
  { role: "Client", widths: ["w60", "w40", "w80"], items: ["Service selection", "Quotation & payment", "Job history"] },
  { role: "Manager", widths: ["w80", "w60", "w40"], items: ["Jobs & cleaners", "Equipment tracking", "Training oversight"] },
  { role: "Cleaner", widths: ["w40", "w80", "w60"], items: ["Assigned jobs", "Training modules", "Availability"] },
  { role: "System owner", widths: ["w60", "w80", "w40"], items: ["Users & services", "Tenders", "Full business oversight"] },
];

const ARSENAL = ["React / JavaScript", "API & server", "MySQL", "Figma", "Git / GitHub"];

export default function FourHorsemenSite() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef({});
  const timelineRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const t = requestAnimationFrame(() => setHeroVisible(true));
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      cancelAnimationFrame(t);
      document.documentElement.style.scrollBehavior = prevBehavior;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      Object.entries(sectionRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const registerSection = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const onTimelineDown = (e) => {
    const tl = timelineRef.current;
    dragState.current = { isDown: true, startX: e.pageX - tl.offsetLeft, scrollLeft: tl.scrollLeft };
  };
  const onTimelineLeaveUp = () => {
    dragState.current.isDown = false;
  };
  const onTimelineMove = (e) => {
    const tl = timelineRef.current;
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - tl.offsetLeft;
    tl.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.2;
  };

  return (
    <div className={`fh-root${heroVisible ? " fh-hero-visible" : ""}`}>
      <style>{CSS}</style>

      <nav className="fh-nav">
        <div className="fh-wrap fh-nav-inner">
          <div className="fh-nav-mark">
            <span className="fh-dot" />
            FourHorsemen
          </div>
          <ul className="fh-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={activeSection === l.id ? "fh-active" : ""}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="fh-nav-cta" href="#prototype">
            Explore CleanLink
          </a>
        </div>
      </nav>

      <header className="fh-hero" id="hero" ref={registerSection("hero")}>
        <div className="fh-wrap fh-hero-grid">
          <div>
            <div className="fh-roster">
              <span className="fh-slots">
                <span className="fh-slot" />
                <span className="fh-slot" />
                <span className="fh-slot" />
                <span className="fh-slot fh-open" />
              </span>
              ROSTER: 3 / 4 ACTIVE
            </div>
            <h1 className="fh-hero-title">
              <span>Three</span>
              <span>Developers.</span>
              <span className="fh-line-strike">One Mission.</span>
            </h1>
            <p className="fh-hero-sub">
              We're a team of three aspiring software developers who turn real business problems into practical
              digital solutions. This is our latest one.
            </p>
            <div className="fh-hero-ctas">
              <a className="fh-btn fh-btn-solid" href="#cleanlink">
                Explore CleanLink
              </a>
              <a className="fh-btn fh-btn-outline" href="#team">
                Meet the team
              </a>
            </div>
          </div>
          <div className="fh-hero-card">
            <div className="fh-k">LATEST BUILD</div>
            <div className="fh-v">CleanLink</div>
            <p>
              A platform built for Mcusi Omhlophe Holdings to expand into the private cleaning market — and run the
              business behind it.
            </p>
          </div>
        </div>
        <div className="fh-marquee" aria-hidden="true">
          <div className="fh-marquee-track">
            {[0, 1].map((rep) => (
              <span key={rep} style={{ display: "inline-flex" }}>
                <span>Mcusi Omhlophe Holdings</span>
                <span>
                  <em>CleanLink</em>
                </span>
                <span>Private Market</span>
                <span>Government Tenders</span>
                <span>
                  <em>FourHorsemen</em>
                </span>
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="fh-problem" id="problem" ref={registerSection("problem")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag fh-on-ink">The brief</span>
            <h2 className="fh-section-title">A real business problem</h2>
            <p className="fh-section-body">
              Mcusi Omhlophe Holdings has grown mainly through government and public-sector tenders. Steady work,
              but the cycle is unpredictable — which raises one question:
            </p>
          </div>

          <div className="fh-problem-diagram">
            <div className="fh-p-block fh-tender">
              <h3>Government tenders</h3>
              <p>Reliable revenue, but cycles that swing with procurement timelines and outcomes outside the business's control.</p>
              <div className="fh-zigzag" />
            </div>
            <div className="fh-p-arrow">&rarr;</div>
            <div className="fh-p-block fh-market">
              <h3>Private market</h3>
              <p>An untapped channel — direct clients, direct control, work that doesn't wait on a tender board.</p>
              <div className="fh-q">?</div>
            </div>
          </div>

          <div className="fh-answer-strip">
            <span className="fh-label">OUR ANSWER</span>
            <span className="fh-name">CleanLink</span>
          </div>
        </div>
      </section>

      <section className="fh-intro" id="cleanlink" ref={registerSection("cleanlink")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">The product</span>
            <h2 className="fh-section-title">Meet CleanLink</h2>
            <p className="fh-section-body">
              A digital platform that connects Mcusi Omhlophe Holdings with private clients, while centralising how
              services, cleaners, equipment and the business itself get managed.
            </p>
          </div>
          <div className="fh-intro-grid">
            {INTRO_COLS.map((col) => (
              <div className="fh-intro-card" key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fh-team" id="team" ref={registerSection("team")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">Built by the Horsemen</span>
            <h2 className="fh-section-title">Three developers. One real problem.</h2>
            <p className="fh-section-body">One system designed to solve it — and one seat still open.</p>
          </div>
          <div className="fh-team-grid">
            {TEAM.map((m) => (
              <div className="fh-id-card" key={m.num}>
                <div className="fh-num">{m.num}</div>
                <div className="fh-name2">[Your name]</div>
                <div className="fh-role">Role / contribution</div>
                <div className="fh-tag">{m.tag}</div>
              </div>
            ))}
            <div className="fh-id-card fh-missing">
              <div className="fh-num">04</div>
              <div>
                <div className="fh-name2">Horseman IV</div>
                <div className="fh-role">Still searching…</div>
              </div>
              <span className="fh-stamp">Missing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="fh-features" id="features" ref={registerSection("features")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag fh-on-ink">What it does</span>
            <h2 className="fh-section-title">What CleanLink brings together</h2>
          </div>
          <div className="fh-bento">
            {BENTO.map((b) => (
              <div className={`fh-bento-item${b.wide ? " fh-wide" : ""}`} key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fh-journey" id="journey" ref={registerSection("journey")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">The flow</span>
            <h2 className="fh-section-title">From request to completed service</h2>
            <p className="fh-section-body">Every booking on CleanLink follows the same path, end to end.</p>
          </div>
          <div
            className="fh-timeline"
            ref={timelineRef}
            onMouseDown={onTimelineDown}
            onMouseLeave={onTimelineLeaveUp}
            onMouseUp={onTimelineLeaveUp}
            onMouseMove={onTimelineMove}
          >
            {JOURNEY.map((step) => (
              <div className={`fh-t-step${step.pay ? " fh-pay" : ""}`} key={step.n}>
                <div className="fh-line">
                  <div className="fh-dot" />
                </div>
                <span className="fh-num2">{step.n}</span>
                <div className="fh-lbl">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fh-prototype" id="prototype" ref={registerSection("prototype")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">The proof</span>
            <h2 className="fh-section-title">We didn't just talk about it. We built it.</h2>
            <p className="fh-section-body">CleanLink is a working web platform with dedicated experiences for every kind of user.</p>
          </div>
          <div className="fh-proto-grid">
            {PROTOTYPES.map((p) => (
              <div className="fh-proto-card" key={p.role}>
                <div className="fh-mockup">
                  <div className="fh-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  {p.widths.map((w, i) => (
                    <div className={`fh-block fh-${w}`} key={i} />
                  ))}
                </div>
                <div className="fh-proto-body">
                  <h3>{p.role}</h3>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fh-arsenal" id="arsenal" ref={registerSection("arsenal")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">How it's built</span>
            <h2 className="fh-section-title">Our arsenal</h2>
          </div>
          <div className="fh-chip-row">
            {ARSENAL.map((c) => (
              <div className="fh-chip" key={c}>
                <span className="fh-sw" />
                {c}
              </div>
            ))}
          </div>
          <p className="fh-arsenal-joke">Three riders. One codebase. More merge conflicts than expected.</p>
        </div>
      </section>

      <section className="fh-impact">
        <div className="fh-wrap">
          <h2 className="fh-impact-title">More than a website.</h2>
          <p className="fh-impact-body">
            CleanLink gives Mcusi Omhlophe Holdings a direct channel to private clients, less reliance on
            unpredictable tender cycles, and one system to run its people, resources and services. Our mission:
            help real businesses turn real challenges into practical digital solutions.
          </p>
          <div className="fh-impact-ctas">
            <a className="fh-btn fh-btn-teal" href="#cleanlink">
              View CleanLink
            </a>
            <a className="fh-btn fh-btn-line" href="#team">
              Meet FourHorsemen
            </a>
            <a className="fh-btn fh-btn-line" href="#contact">
              Contact us
            </a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="fh-wrap fh-foot-row">
          <span>© 2026 FourHorsemen — built for Mcusi Omhlophe Holdings</span>
          <a href="#hero">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');

.fh-root{
  --ink:#12131A; --ink-2:#1c1e28; --paper:#F6F5EF; --paper-2:#ECEAE0;
  --teal:#12D6BE; --teal-deep:#0AA893; --crimson:#FF4B4B; --crimson-deep:#D93636;
  --muted:#8b8d99; --muted-on-paper:#6b6d78;
  --line:rgba(18,19,26,0.12); --line-on-ink:rgba(246,245,239,0.14);
  --disp:'Space Grotesk', sans-serif; --body:'Inter', sans-serif; --mono:'JetBrains Mono', monospace;
  background:var(--paper); color:var(--ink); font-family:var(--body); font-size:16px; line-height:1.5;
  -webkit-font-smoothing:antialiased;
}
.fh-root *{box-sizing:border-box;}
.fh-root img,.fh-root svg{display:block; max-width:100%;}
.fh-root a{color:inherit; text-decoration:none;}
.fh-root ::selection{background:var(--teal); color:var(--ink);}
.fh-root :focus-visible{outline:3px solid var(--crimson); outline-offset:3px;}
@media (prefers-reduced-motion: reduce){
  .fh-root *{animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important;}
}

.fh-wrap{max-width:1180px; margin:0 auto; padding:0 32px;}
@media (max-width:640px){ .fh-wrap{padding:0 20px;} }

.fh-root h1,.fh-root h2,.fh-root h3{font-family:var(--disp); margin:0; letter-spacing:-0.01em;}
.fh-root p{margin:0;}

/* NAV */
.fh-nav{position:sticky; top:0; z-index:50; background:rgba(246,245,239,0.86); backdrop-filter:blur(10px); border-bottom:1px solid var(--line);}
.fh-nav-inner{display:flex; align-items:center; justify-content:space-between; padding:16px 32px;}
.fh-nav-mark{font-family:var(--disp); font-weight:700; font-size:18px; display:flex; align-items:center; gap:8px;}
.fh-dot{width:9px; height:9px; border-radius:50%; background:var(--crimson);}
.fh-nav-links{display:none; gap:28px; list-style:none; margin:0; padding:0; font-size:14px; font-weight:600;}
@media(min-width:860px){ .fh-nav-links{display:flex;} }
.fh-nav-links a{opacity:0.62; transition:opacity .15s ease;}
.fh-nav-links a:hover, .fh-nav-links a.fh-active{opacity:1;}
.fh-nav-cta{font-size:13px; font-weight:700; font-family:var(--mono); background:var(--ink); color:var(--paper); padding:9px 16px; border-radius:100px; white-space:nowrap;}

/* HERO */
.fh-hero{position:relative; overflow:hidden; padding:88px 0 0; background:var(--paper);}
.fh-hero-grid{display:grid; grid-template-columns:1.5fr 1fr; gap:40px; align-items:end;}
@media(max-width:860px){ .fh-hero-grid{grid-template-columns:1fr;} }

.fh-roster{font-family:var(--mono); font-size:13px; font-weight:500; display:inline-flex; align-items:center; gap:10px; border:1px solid var(--line); border-radius:100px; padding:7px 14px 7px 8px; margin-bottom:28px; opacity:0; transform:translateY(6px);}
.fh-slots{display:flex; gap:4px;}
.fh-slot{width:8px; height:8px; border-radius:50%; background:var(--ink);}
.fh-slot.fh-open{background:transparent; border:1.5px dashed var(--crimson); animation:fhFlicker 2.4s ease-in-out infinite;}
@keyframes fhFlicker{0%,100%{opacity:1;} 50%{opacity:0.25;}}

.fh-hero-title{font-size:clamp(48px, 9vw, 108px); font-weight:700; line-height:0.94; text-transform:uppercase;}
.fh-hero-title span{display:block; opacity:0; transform:translateY(24px);}
.fh-line-strike{position:relative; color:var(--muted);}
.fh-line-strike::after{content:""; position:absolute; left:-2%; right:-2%; top:50%; height:5px; background:var(--crimson); transform:scaleX(0); transform-origin:left;}

.fh-hero-sub{font-size:clamp(16px,2.1vw,19px); color:var(--muted-on-paper); max-width:36ch; margin-top:22px; opacity:0; transform:translateY(14px);}
.fh-hero-ctas{display:flex; flex-wrap:wrap; gap:14px; margin-top:32px; opacity:0; transform:translateY(14px);}
.fh-btn{font-family:var(--disp); font-weight:600; font-size:15px; padding:15px 26px; border-radius:100px; display:inline-flex; align-items:center; gap:8px; border:1.5px solid transparent; transition:transform .18s ease; cursor:pointer;}
.fh-btn:hover{transform:translateY(-2px);}
.fh-btn-solid{background:var(--ink); color:var(--paper);}
.fh-btn-outline{border-color:var(--ink); color:var(--ink);}

.fh-hero-card{background:var(--ink); color:var(--paper); border-radius:20px; padding:26px; opacity:0; transform:translateY(14px);}
.fh-k{font-family:var(--mono); font-size:12px; color:var(--teal); letter-spacing:0.03em;}
.fh-v{font-family:var(--disp); font-size:22px; font-weight:600; margin-top:8px;}
.fh-hero-card p{font-size:13.5px; color:rgba(246,245,239,0.6); margin-top:10px;}

.fh-marquee{border-top:1px solid var(--line); border-bottom:1px solid var(--line); margin-top:64px; overflow:hidden; white-space:nowrap; background:var(--paper-2);}
.fh-marquee-track{display:inline-flex; animation:fhScroll 26s linear infinite; padding:14px 0;}
@keyframes fhScroll{from{transform:translateX(0);} to{transform:translateX(-50%);}}
.fh-marquee-track span span{font-family:var(--mono); font-size:13px; font-weight:500; color:var(--muted-on-paper); margin-right:40px; text-transform:uppercase; letter-spacing:0.04em;}
.fh-marquee-track span span em{color:var(--crimson); font-style:normal;}

/* Hero reveal sequence */
.fh-hero-visible .fh-roster,
.fh-hero-visible .fh-hero-sub,
.fh-hero-visible .fh-hero-ctas,
.fh-hero-visible .fh-hero-card,
.fh-hero-visible .fh-hero-title span{ animation:fhRise .7s cubic-bezier(.2,.8,.2,1) forwards; }
.fh-hero-visible .fh-roster{animation-delay:.05s;}
.fh-hero-visible .fh-hero-title span:nth-child(1){animation-delay:.15s;}
.fh-hero-visible .fh-hero-title span:nth-child(2){animation-delay:.28s;}
.fh-hero-visible .fh-hero-title span:nth-child(3){animation-delay:.41s;}
.fh-hero-visible .fh-hero-sub{animation-delay:.58s;}
.fh-hero-visible .fh-hero-ctas{animation-delay:.7s;}
.fh-hero-visible .fh-hero-card{animation-delay:.5s;}
.fh-hero-visible .fh-line-strike::after{animation:fhStrike .3s ease forwards; animation-delay:.9s;}
@keyframes fhRise{to{opacity:1; transform:translateY(0);}}
@keyframes fhStrike{to{transform:scaleX(1);}}

/* SECTION SHELL */
.fh-root section, .fh-hero{padding:96px 0;}
.fh-hero{padding-top:88px;}
@media(max-width:640px){ .fh-root section{padding:64px 0;} }
.fh-section-head{max-width:640px; margin-bottom:52px;}
.fh-section-tag{font-family:var(--mono); font-size:13px; color:var(--crimson); font-weight:500; margin-bottom:14px; display:block;}
.fh-section-tag.fh-on-ink{color:var(--teal);}
.fh-section-title{font-size:clamp(30px,4vw,44px); font-weight:600;}
.fh-section-body{margin-top:16px; color:var(--muted-on-paper); font-size:17px; max-width:56ch;}

/* PROBLEM */
.fh-problem{background:var(--ink); color:var(--paper);}
.fh-problem .fh-section-body{color:rgba(246,245,239,0.62);}
.fh-problem-diagram{display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:center; margin-top:20px;}
@media(max-width:760px){ .fh-problem-diagram{grid-template-columns:1fr;} }
.fh-p-block{border:1px solid var(--line-on-ink); border-radius:16px; padding:28px;}
.fh-p-block h3{font-size:19px; font-weight:600; margin-bottom:10px;}
.fh-p-block p{font-size:14.5px; color:rgba(246,245,239,0.55);}
.fh-tender .fh-zigzag{height:20px; margin-top:18px; background-image:linear-gradient(135deg, var(--crimson) 25%, transparent 25%), linear-gradient(225deg, var(--crimson) 25%, transparent 25%); background-position:0 0; background-size:14px 14px; background-repeat:repeat-x; opacity:0.7;}
.fh-market{border-color:var(--teal); background:rgba(18,214,190,0.06);}
.fh-market .fh-q{font-family:var(--disp); font-size:40px; color:var(--teal); font-weight:700;}
.fh-p-arrow{font-size:28px; color:var(--muted); text-align:center;}
.fh-answer-strip{margin-top:28px; border-radius:16px; background:var(--teal); color:var(--ink); padding:24px 28px; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;}
.fh-label{font-family:var(--mono); font-size:12.5px; font-weight:600;}
.fh-name{font-family:var(--disp); font-size:26px; font-weight:700;}

/* INTRO */
.fh-intro{background:var(--paper);}
.fh-intro-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:36px;}
@media(max-width:760px){ .fh-intro-grid{grid-template-columns:1fr;} }
.fh-intro-card{background:var(--ink); color:var(--paper); border-radius:18px; padding:30px; display:flex; flex-direction:column; gap:14px;}
.fh-intro-card:nth-child(2){background:var(--teal-deep);}
.fh-intro-card:nth-child(3){background:var(--crimson-deep);}
.fh-intro-card h3{font-size:19px; font-weight:600;}
.fh-intro-card ul{margin:0; padding-left:18px; font-size:14px; color:rgba(246,245,239,0.75); line-height:1.7;}

/* TEAM */
.fh-team{background:var(--paper-2);}
.fh-team-grid{display:flex; gap:26px; flex-wrap:wrap; margin-top:44px;}
.fh-id-card{flex:1 1 230px; max-width:260px; background:var(--paper); border:2px solid var(--ink); border-radius:16px; padding:22px; position:relative; transition:transform .2s ease;}
.fh-id-card:nth-child(1){transform:rotate(-2.5deg);}
.fh-id-card:nth-child(3){transform:rotate(2.5deg);}
.fh-id-card:hover{transform:rotate(0deg) translateY(-4px);}
.fh-num{font-family:var(--mono); font-size:34px; font-weight:700; color:var(--crimson);}
.fh-name2{font-family:var(--disp); font-size:19px; font-weight:600; margin-top:10px;}
.fh-role{font-size:13.5px; color:var(--muted-on-paper); margin-top:4px;}
.fh-tag{margin-top:16px; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:var(--teal-deep); border-top:1px dashed var(--line); padding-top:12px;}
.fh-missing{border-style:dashed; border-color:var(--muted); display:flex; flex-direction:column; align-items:flex-start; justify-content:space-between; transform:rotate(-1deg);}
.fh-missing:hover{transform:rotate(0deg) translateY(-4px);}
.fh-missing .fh-num{color:var(--muted);}
.fh-stamp{align-self:flex-end; font-family:var(--mono); font-size:11px; font-weight:700; color:var(--crimson); border:1.5px solid var(--crimson); border-radius:6px; padding:4px 8px; transform:rotate(-8deg); text-transform:uppercase;}

/* FEATURES */
.fh-features{background:var(--ink); color:var(--paper);}
.fh-bento{display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:44px;}
@media(max-width:900px){ .fh-bento{grid-template-columns:repeat(2,1fr);} }
@media(max-width:560px){ .fh-bento{grid-template-columns:1fr;} }
.fh-bento-item{border:1px solid var(--line-on-ink); border-radius:16px; padding:24px; display:flex; flex-direction:column; gap:10px; transition:border-color .18s ease, background .18s ease;}
.fh-bento-item:hover{border-color:var(--teal); background:rgba(18,214,190,0.05);}
.fh-bento-item.fh-wide{grid-column:span 2;}
@media(max-width:560px){ .fh-bento-item.fh-wide{grid-column:span 1;} }
.fh-bento-item h3{font-size:17px; font-weight:600;}
.fh-bento-item p{font-size:14px; color:rgba(246,245,239,0.55);}

/* JOURNEY */
.fh-journey{background:var(--paper);}
.fh-timeline{display:flex; gap:0; margin-top:44px; overflow-x:auto; padding-bottom:20px; cursor:grab;}
.fh-timeline::-webkit-scrollbar{height:6px;}
.fh-timeline::-webkit-scrollbar-thumb{background:var(--line); border-radius:10px;}
.fh-t-step{flex:0 0 178px; position:relative; padding:0 18px 0 0;}
.fh-t-step .fh-line{height:2px; background:var(--line); position:relative; margin-top:19px;}
.fh-t-step:first-child .fh-line::before{display:none;}
.fh-t-step .fh-line::before{content:""; position:absolute; left:-18px; top:-1px; width:18px; height:2px; background:var(--line);}
.fh-t-step .fh-dot{width:12px; height:12px; border-radius:50%; background:var(--ink); border:3px solid var(--paper); box-shadow:0 0 0 2px var(--ink); position:absolute; top:-6px; left:0;}
.fh-t-step.fh-pay .fh-dot{background:var(--teal);}
.fh-num2{font-family:var(--mono); font-size:11px; color:var(--muted-on-paper); margin-top:16px; display:block;}
.fh-lbl{font-family:var(--disp); font-weight:600; font-size:14.5px; margin-top:4px; line-height:1.2;}

/* PROTOTYPE */
.fh-prototype{background:var(--paper-2);}
.fh-proto-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:22px; margin-top:44px;}
@media(max-width:760px){ .fh-proto-grid{grid-template-columns:1fr;} }
.fh-proto-card{background:var(--paper); border-radius:18px; overflow:hidden; border:1px solid var(--line);}
.fh-mockup{height:150px; background:var(--ink); position:relative; padding:16px;}
.fh-bar{display:flex; gap:5px; margin-bottom:14px;}
.fh-bar span{width:7px; height:7px; border-radius:50%; background:rgba(246,245,239,0.25);}
.fh-block{background:rgba(246,245,239,0.08); border-radius:6px; height:16px; margin-bottom:8px;}
.fh-block.fh-w60{width:60%;}
.fh-block.fh-w40{width:40%; background:var(--teal); opacity:0.5;}
.fh-block.fh-w80{width:80%;}
.fh-proto-body{padding:22px;}
.fh-proto-body h3{font-size:18px; font-weight:600;}
.fh-proto-body ul{margin:12px 0 0; padding-left:18px; font-size:13.5px; color:var(--muted-on-paper); line-height:1.75;}

/* ARSENAL */
.fh-arsenal{background:var(--paper);}
.fh-chip-row{display:flex; flex-wrap:wrap; gap:12px; margin-top:36px;}
.fh-chip{font-family:var(--mono); font-size:13.5px; font-weight:500; border:1px solid var(--ink); border-radius:100px; padding:9px 18px; display:flex; align-items:center; gap:8px;}
.fh-sw{width:8px; height:8px; border-radius:2px; background:var(--crimson);}
.fh-arsenal-joke{margin-top:28px; font-family:var(--disp); font-size:16px; color:var(--muted-on-paper);}

/* IMPACT */
.fh-impact{background:var(--ink); color:var(--paper); text-align:left;}
.fh-impact-title{font-size:clamp(32px,5.4vw,58px); font-weight:600; line-height:1.06; max-width:16ch; background:linear-gradient(90deg, var(--paper) 40%, var(--teal)); -webkit-background-clip:text; background-clip:text; color:transparent;}
.fh-impact-body{margin-top:22px; color:rgba(246,245,239,0.6); font-size:17px; max-width:58ch;}
.fh-impact-ctas{display:flex; gap:14px; flex-wrap:wrap; margin-top:36px;}
.fh-btn-teal{background:var(--teal); color:var(--ink);}
.fh-btn-line{border:1.5px solid var(--line-on-ink); color:var(--paper);}

/* FOOTER */
.fh-root footer{background:var(--ink); color:rgba(246,245,239,0.55); border-top:1px solid var(--line-on-ink); padding:32px 0;}
.fh-foot-row{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; font-size:13px;}
.fh-foot-row a{opacity:0.8;}
`;