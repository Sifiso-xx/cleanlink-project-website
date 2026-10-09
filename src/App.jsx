import { useEffect, useRef, useState } from "react";
import { TEAM } from "./data/teamData";

// Cleaning animation component for scroll effects
function FloatingBubble({ delay = 0, left = "10%" }) {
  return (
    <div 
      className="floating-bubble" 
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        width: `${20 + Math.random() * 30}px`,
        height: `${20 + Math.random() * 30}px`
      }}
    />
  );
}

function SparkleEffect({ top = "20%", left = "80%" }) {
  return (
    <div className="sparkle-effect" style={{ top, left }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
      </svg>
    </div>
  );
}

// Animated falling mop and catching bucket
function FallingMopAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mopProgress = Math.min(scrollProgress * 1.2, 1);
  const bucketVisible = scrollProgress > 0.7;
  const mopCaught = scrollProgress > 0.95;

  return (
    <div className="falling-mop-container">
      {/* Falling Mop */}
      <div 
        className="falling-mop"
        style={{
          transform: `translateY(${mopProgress * 100}vh) rotate(${mopProgress * 360}deg)`,
          opacity: mopCaught ? 0 : 1
        }}
      >
        <svg viewBox="0 0 120 200" fill="none" className="mop-svg">
          {/* Mop handle */}
          <line x1="60" y1="20" x2="60" y2="120" stroke="#8B4513" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="60" cy="18" r="8" fill="#D2691E"/>
          
          {/* Mop head */}
          <g className="mop-head">
            <path d="M40 130 Q45 140 50 160" stroke="#E8E8E8" strokeWidth="4" strokeLinecap="round"/>
            <path d="M50 130 Q55 145 55 165" stroke="#E8E8E8" strokeWidth="4" strokeLinecap="round"/>
            <path d="M60 130 Q60 150 58 170" stroke="#E8E8E8" strokeWidth="5" strokeLinecap="round"/>
            <path d="M70 130 Q65 145 65 165" stroke="#E8E8E8" strokeWidth="4" strokeLinecap="round"/>
            <path d="M80 130 Q75 140 70 160" stroke="#E8E8E8" strokeWidth="4" strokeLinecap="round"/>
          </g>
          
          {/* Water droplets */}
          <circle cx="55" cy="175" r="3" fill="#12D6BE" className="water-drop">
            <animate attributeName="cy" from="175" to="190" dur="0.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="1" to="0" dur="0.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="65" cy="178" r="2.5" fill="#12D6BE" className="water-drop">
            <animate attributeName="cy" from="178" to="193" dur="0.9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" from="1" to="0" dur="0.9s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      {/* Catching Bucket at bottom */}
      {bucketVisible && (
        <div className={`catching-bucket ${mopCaught ? 'caught' : ''}`}>
          <svg viewBox="0 0 200 150" fill="none" className="bucket-svg">
            {/* Bucket body */}
            <path d="M40 40 L30 110 L170 110 L160 40 Z" fill="#4A90E2" stroke="#2E5C8A" strokeWidth="3"/>
            <ellipse cx="100" cy="40" rx="60" ry="12" fill="#5AA3E8" stroke="#2E5C8A" strokeWidth="3"/>
            
            {/* Handle */}
            <path d="M50 35 Q100 15 150 35" stroke="#2E5C8A" strokeWidth="4" fill="none" strokeLinecap="round"/>
            
            {/* Water inside */}
            <ellipse cx="100" cy="95" rx="55" ry="10" fill="#12D6BE" opacity="0.6"/>
            <path d="M50 85 Q70 80 90 85 Q110 80 130 85 Q145 80 150 85" 
                  stroke="#12D6BE" strokeWidth="2" opacity="0.4" className="water-wave">
              <animateTransform 
                attributeName="transform" 
                type="translate" 
                values="0,0; 0,-3; 0,0" 
                dur="1.5s" 
                repeatCount="indefinite"/>
            </path>

            {/* Rising bubbles from bucket */}
            <circle cx="80" cy="100" r="4" fill="#FFFFFF" opacity="0.7" className="bucket-bubble">
              <animate attributeName="cy" from="100" to="30" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="105" r="3" fill="#FFFFFF" opacity="0.7" className="bucket-bubble">
              <animate attributeName="cy" from="105" to="35" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.7" to="0" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="102" r="5" fill="#FFFFFF" opacity="0.8" className="bucket-bubble">
              <animate attributeName="cy" from="102" to="32" dur="2.2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.8" to="0" dur="2.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="98" r="3.5" fill="#FFFFFF" opacity="0.6" className="bucket-bubble">
              <animate attributeName="cy" from="98" to="28" dur="2.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.6" to="0" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="110" cy="103" r="4" fill="#FFFFFF" opacity="0.7" className="bucket-bubble">
              <animate attributeName="cy" from="103" to="33" dur="2.3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.7" to="0" dur="2.3s" repeatCount="indefinite"/>
            </circle>

            {mopCaught && (
              <g className="splash-effect">
                <circle cx="100" cy="90" r="20" fill="#12D6BE" opacity="0.3">
                  <animate attributeName="r" from="0" to="40" dur="0.5s" fill="freeze"/>
                  <animate attributeName="opacity" from="0.6" to="0" dur="0.5s" fill="freeze"/>
                </circle>
              </g>
            )}
          </svg>

          {mopCaught && (
            <div className="caught-message">
              <span>🎉 Caught it!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SketchedBroom() {
  return (
    <svg className="sketched-broom" viewBox="0 0 100 100" fill="none">
      <path d="M20 80 Q30 75 40 70 L45 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
      <path d="M15 85 L25 75 M18 88 L28 78 M20 90 L30 80 M23 88 L33 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="45" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function SketchedSpray() {
  return (
    <svg className="sketched-spray" viewBox="0 0 80 100" fill="none">
      <rect x="28" y="40" width="24" height="45" rx="4" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="1 2"/>
      <rect x="35" y="30" width="10" height="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <line x1="40" y1="30" x2="55" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="60" cy="15" r="2" fill="currentColor" opacity="0.5">
        <animate attributeName="cy" from="15" to="5" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="18" r="1.5" fill="currentColor" opacity="0.4">
        <animate attributeName="cy" from="18" to="8" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SketchedBucket() {
  return (
    <svg className="sketched-bucket" viewBox="0 0 80 80" fill="none">
      <path d="M20 30 L25 60 L55 60 L60 30" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="2 3"/>
      <ellipse cx="40" cy="30" rx="20" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M25 35 Q30 32 35 35 Q40 32 45 35 Q50 32 55 35" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

const NAV_LINKS = [
  { id: "team", label: "Team" },
  { id: "problem", label: "Problem" },
  { id: "cleanlink", label: "CleanLink" },
  { id: "sponsor", label: "Sponsor" },
  { id: "journey", label: "Journey" },
  { id: "arsenal", label: "Arsenal" },
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
  const [scrollProgress, setScrollProgress] = useState(0);
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
      // Update active section
      let current = "hero";
      Object.entries(sectionRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) current = id;
      });
      setActiveSection(current);

      // Update scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height);
      setScrollProgress(scrolled);
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
      <div className="scroll-indicator" style={{ transform: `scaleX(${scrollProgress})` }} />
      <FallingMopAnimation />

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
        <div className="cleaning-bg-elements">
          <FloatingBubble delay={0} left="10%" />
          <FloatingBubble delay={1.5} left="85%" />
          <FloatingBubble delay={3} left="50%" />
          <SparkleEffect top="15%" left="80%" />
          <SparkleEffect top="65%" left="15%" />
          <SketchedBroom />
        </div>
        <div className="fh-wrap fh-hero-grid">
          <div>
            <div className="fh-roster">
              <span className="fh-slots">
                <span className="fh-slot" />
                <span className="fh-slot" />
                <span className="fh-slot" />
              </span>
              ROSTER: 3 / 3 ACTIVE
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

      <section className="fh-team" id="team" ref={registerSection("team")}>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag">Built by the Horsemen</span>
            <h2 className="fh-section-title">Three developers. One real problem.</h2>
            <p className="fh-section-body">One system designed to solve it.</p>
          </div>
          <div className="fh-team-grid">
            {TEAM.map((m) => (
              <div className="fh-id-card fh-expanded" key={m.num}>
                {m.photo && (
                  <div className="fh-photo">
                    <img src={m.photo} alt={m.name} />
                  </div>
                )}
                <div className="fh-num">{m.num}</div>
                <div className="fh-name2">{m.name}</div>
                <div className="fh-role">{m.role}</div>
                {m.focus && (
                  <div className="fh-detail">
                    <strong>Focus:</strong> {m.focus}
                  </div>
                )}
                {m.aspiring && (
                  <div className="fh-detail">
                    <strong>Aspiring:</strong> {m.aspiring}
                  </div>
                )}
                {m.contribution && (
                  <div className="fh-detail fh-contribution">
                    <strong>Contribution:</strong> {m.contribution}
                  </div>
                )}
                {m.email && (
                  <div className="fh-contact">
                    <a href={`mailto:${m.email}`}>{m.email}</a>
                    {m.phone && <span>{m.phone}</span>}
                    {m.github && <a href={m.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                  </div>
                )}
                <div className="fh-tag">{m.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        <div className="cleaning-bg-elements">
          <SketchedSpray />
          <FloatingBubble delay={0.5} left="20%" />
          <FloatingBubble delay={2} left="75%" />
        </div>
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

      <section className="fh-sponsor" id="sponsor" ref={registerSection("sponsor")}>
        <div className="cleaning-bg-elements">
          <FloatingBubble delay={1} left="10%" />
          <FloatingBubble delay={2.5} left="88%" />
          <SparkleEffect top="10%" left="5%" />
        </div>
        <div className="fh-wrap">
          <div className="fh-section-head">
            <span className="fh-section-tag fh-on-ink">Our sponsor</span>
            <h2 className="fh-section-title">Built for Mcusi Omhlophe Holdings</h2>
            <p className="fh-section-body">
              CleanLink was developed to support a real South African business with a real challenge.
            </p>
          </div>

          <div className="sponsor-content">
            <div className="sponsor-card sponsor-main">
              <div className="sponsor-header">
                <div className="sponsor-badge">EST. 2022</div>
                <h3>Mcusi Omhlophe Holdings (Pty) Ltd</h3>
              </div>
              <p className="sponsor-intro">
                A South African cleaning services company established in 2022, employing approximately 17 cleaners 
                and building its business primarily through government and public-sector tender opportunities.
              </p>
            </div>

            <div className="sponsor-grid">
              <div className="sponsor-card">
                <div className="sponsor-icon">📊</div>
                <h4>The Tender Model</h4>
                <p>
                  Although this tender-based model has supported the company's growth, tender cycles can be 
                  unpredictable. Delays in government procurement may result in inconsistent revenue and periods 
                  where the company cannot guarantee continuous work for its cleaners.
                </p>
              </div>

              <div className="sponsor-card">
                <div className="sponsor-icon">🎯</div>
                <h4>The Opportunity</h4>
                <p>
                  The company currently has an opportunity to expand into the private residential and commercial 
                  cleaning market. However, it requires a more direct and organised way to reach private clients, 
                  manage service requests and coordinate its cleaning operations.
                </p>
              </div>

              <div className="sponsor-card sponsor-solution">
                <div className="sponsor-icon">✨</div>
                <h4>The Solution: CleanLink</h4>
                <p>
                  CleanLink was developed to support this opportunity by providing a centralised digital platform 
                  for client engagement, service management, workforce coordination and business administration.
                </p>
                <div className="solution-badges">
                  <span>Client Engagement</span>
                  <span>Service Management</span>
                  <span>Workforce Coordination</span>
                  <span>Business Administration</span>
                </div>
              </div>
            </div>

            <div className="sponsor-stats">
              <div className="stat-item">
                <div className="stat-value">2022</div>
                <div className="stat-label">Established</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">~17</div>
                <div className="stat-label">Cleaners Employed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">Gov</div>
                <div className="stat-label">Primary Sector</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">SA</div>
                <div className="stat-label">South Africa</div>
              </div>
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
        <div className="cleaning-bg-elements">
          <SketchedBucket />
          <SparkleEffect top="20%" left="85%" />
          <FloatingBubble delay={1} left="15%" />
        </div>
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
.fh-nav-cta{font-size:13px; font-weight:700; font-family:var(--mono); background:var(--ink); color:var(--paper) !important; padding:9px 16px; border-radius:100px; white-space:nowrap;}

/* HERO */
.fh-hero{position:relative; overflow:hidden; padding:88px 0 0; background:var(--paper); z-index:2;}
.fh-hero-grid{display:grid; grid-template-columns:1.5fr 1fr; gap:40px; align-items:end; position:relative; z-index:2;}
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
.fh-btn-solid{background:var(--ink); color:var(--paper) !important;}
.fh-btn-outline{border-color:var(--ink); color:var(--ink) !important;}

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
.fh-problem{background:var(--ink); color:var(--paper) !important;}
.fh-problem .fh-section-body{color:rgba(246,245,239,0.62) !important;}

.fh-problem-diagram{display:grid; grid-template-columns:1fr auto 1fr; gap:24px; align-items:center; margin-top:20px;}
@media(max-width:760px){ .fh-problem-diagram{grid-template-columns:1fr;} }

.fh-p-block{border:1px solid var(--line-on-ink); border-radius:16px; padding:28px;}
.fh-p-block h3{font-size:19px; font-weight:600; margin-bottom:10px; color:var(--paper) !important;}
.fh-p-block p{font-size:14.5px; color:rgba(246,245,239,0.65) !important;}

.fh-tender .fh-zigzag{height:20px; margin-top:18px; background-image:linear-gradient(135deg, var(--crimson) 25%, transparent 25%), linear-gradient(225deg, var(--crimson) 25%, transparent 25%); background-position:0 0; background-size:14px 14px; background-repeat:repeat-x; opacity:0.7;}

.fh-market{border-color:var(--teal); background:rgba(18,214,190,0.06);}
.fh-market .fh-q{font-family:var(--disp); font-size:40px; color:var(--teal); font-weight:700;}

.fh-p-arrow{font-size:28px; color:var(--muted); text-align:center;}

.fh-answer-strip{margin-top:28px; border-radius:16px; background:var(--teal); color:var(--ink); padding:24px 28px; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;}
.fh-label{font-family:var(--mono); font-size:12.5px; font-weight:600;}
.fh-name{font-family:var(--disp); font-size:26px; font-weight:700;}

/* INTRO */
.fh-intro{background:var(--paper); position:relative;}
.fh-intro-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:36px; position:relative; z-index:2;}
@media(max-width:760px){ .fh-intro-grid{grid-template-columns:1fr;} }

.fh-intro-card{background:var(--ink); color:var(--paper); border-radius:18px; padding:30px; display:flex; flex-direction:column; gap:14px;}
.fh-intro-card:nth-child(2){background:var(--teal-deep);}
.fh-intro-card:nth-child(3){background:var(--crimson-deep);}
.fh-intro-card h3{font-size:19px; font-weight:600;}
.fh-intro-card ul{margin:0; padding-left:18px; font-size:14px; color:rgba(246,245,239,0.75); line-height:1.7;}

/* SPONSOR */
.fh-sponsor{background:var(--ink); color:var(--paper); position:relative;}
.fh-sponsor .fh-section-body{color:rgba(246,245,239,0.62);}

.sponsor-content{position:relative; z-index:2;}

.sponsor-main{background:linear-gradient(135deg, var(--teal-deep), var(--teal)); color:var(--ink) !important; margin-bottom:24px;}

.sponsor-card{background:var(--ink-2); border:1px solid var(--line-on-ink); border-radius:20px; padding:32px; transition:transform .2s ease, border-color .2s ease; color:var(--paper) !important;}
.sponsor-card:hover{transform:translateY(-4px); border-color:var(--teal);}

.sponsor-header{display:flex; align-items:center; gap:16px; margin-bottom:16px; flex-wrap:wrap;}

.sponsor-badge{font-family:var(--mono); font-size:12px; font-weight:600; background:var(--ink); color:var(--teal) !important; padding:6px 14px; border-radius:100px; letter-spacing:0.05em;}

.sponsor-main h3{font-size:28px; font-weight:700; margin:0; color:var(--paper) !important;}
.sponsor-intro{font-size:16px; line-height:1.6; color:var(--ink) !important; margin:0; opacity:0.9;}

.sponsor-grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-bottom:32px;}

.sponsor-card h4{font-size:20px; font-weight:600; margin:16px 0 12px; color:var(--paper) !important;}
.sponsor-card p{font-size:15px; line-height:1.7; color:rgba(246,245,239,0.85) !important; margin:0;}

.sponsor-icon{font-size:32px; line-height:1;}

.sponsor-solution{background:linear-gradient(135deg, var(--teal-deep) 0%, var(--ink-2) 100%); border-color:var(--teal);}
.sponsor-solution h4{color:var(--teal) !important;}
.sponsor-solution p{color:rgba(246,245,239,0.9) !important;}

.solution-badges{display:flex; flex-wrap:wrap; gap:8px; margin-top:16px;}
.solution-badges span{font-family:var(--mono); font-size:11px; background:rgba(18,214,190,0.2); color:var(--teal) !important; padding:6px 12px; border-radius:100px; border:1px solid rgba(18,214,190,0.3);}

.sponsor-stats{display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:20px; background:var(--ink-2); border-radius:16px; padding:32px; border:1px solid var(--line-on-ink);}

.stat-item{text-align:center;}
.stat-value{font-family:var(--disp); font-size:36px; font-weight:700; color:var(--teal) !important; line-height:1;}
.stat-label{font-size:13px; color:rgba(246,245,239,0.7) !important; margin-top:8px; text-transform:uppercase; letter-spacing:0.05em; font-family:var(--mono);}

/* TEAM */
.fh-team{background:var(--paper-2);}
.fh-team-grid{display:flex; gap:26px; flex-wrap:wrap; margin-top:44px; justify-content:center;}

.fh-id-card{flex:1 1 280px; max-width:360px; background:var(--paper); border:2px solid var(--ink); border-radius:16px; padding:22px; position:relative; transition:transform .2s ease;}
.fh-id-card.fh-expanded{max-width:380px; padding:24px;}
.fh-id-card:nth-child(1){transform:rotate(-1.5deg);}
.fh-id-card:nth-child(2){transform:rotate(0deg);}
.fh-id-card:nth-child(3){transform:rotate(1.5deg);}
.fh-id-card:hover{transform:rotate(0deg) translateY(-4px);}

.fh-photo{width:100%; height:220px; border-radius:12px; overflow:hidden; margin-bottom:16px; border:2px solid var(--line);}
.fh-photo img{width:100%; height:100%; object-fit:cover;}

.fh-num{font-family:var(--mono); font-size:28px; font-weight:700; color:var(--crimson);}
.fh-name2{font-family:var(--disp); font-size:19px; font-weight:600; margin-top:10px; line-height:1.2;}
.fh-role{font-size:13.5px; color:var(--ink); font-weight:600; margin-top:6px; line-height:1.3;}

.fh-detail{font-size:12.5px; color:var(--muted-on-paper); margin-top:10px; line-height:1.5;}
.fh-detail strong{color:var(--ink); font-weight:600; display:block; margin-bottom:3px;}
.fh-contribution{margin-top:12px; padding-top:12px; border-top:1px solid var(--line);}

.fh-contact{margin-top:14px; font-size:11.5px; color:var(--muted-on-paper); display:flex; flex-direction:column; gap:4px; padding:10px; background:var(--paper-2); border-radius:8px;}
.fh-contact a{color:var(--teal-deep); text-decoration:underline;}

.fh-tag{margin-top:16px; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:var(--teal-deep); border-top:1px dashed var(--line); padding-top:12px;}

.fh-missing{border-style:dashed; border-color:var(--muted); display:flex; flex-direction:column; align-items:flex-start; justify-content:space-between; transform:rotate(-1deg); max-width:260px;}
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
.fh-journey{background:var(--paper); position:relative;}
.fh-timeline{display:flex; gap:0; margin-top:44px; overflow-x:auto; padding-bottom:20px; cursor:grab; position:relative; z-index:2;}
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
.fh-btn-teal{background:var(--teal); color:var(--ink) !important;}
.fh-btn-line{border:1.5px solid var(--line-on-ink); color:var(--paper) !important;}

/* FOOTER */
.fh-root footer{background:var(--ink); color:rgba(246,245,239,0.55); border-top:1px solid var(--line-on-ink); padding:32px 0;}
.fh-foot-row{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; font-size:13px;}
.fh-foot-row a{opacity:0.8;}

/* CLEANING ANIMATIONS */
.cleaning-bg-elements{position:absolute; inset:0; pointer-events:none; overflow:hidden; opacity:0.8; z-index:1;}

.floating-bubble{position:absolute; bottom:-50px; border-radius:50%; background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(18,214,190,0.5)); border:2px solid rgba(18,214,190,0.6); animation:floatUp 8s ease-in-out infinite; box-shadow:0 8px 20px rgba(18,214,190,0.4);}

@keyframes floatUp{
  0%{transform:translateY(0) scale(1); opacity:0;}
  10%{opacity:0.9;}
  90%{opacity:0.9;}
  100%{transform:translateY(-120vh) scale(0.8); opacity:0;}
}

.sparkle-effect{position:absolute; color:var(--teal); animation:sparkle 2s ease-in-out infinite; filter:drop-shadow(0 0 8px currentColor);}

@keyframes sparkle{
  0%, 100%{transform:scale(1) rotate(0deg); opacity:0.6;}
  50%{transform:scale(1.5) rotate(180deg); opacity:1;}
}

.sketched-broom{position:absolute; top:15%; right:10%; width:120px; height:120px; color:var(--crimson); opacity:0.6; animation:sweep 4s ease-in-out infinite; filter:drop-shadow(0 4px 8px rgba(255,75,75,0.3));}

@keyframes sweep{
  0%, 100%{transform:rotate(-10deg) translateX(0);}
  50%{transform:rotate(10deg) translateX(30px);}
}

.sketched-spray{position:absolute; top:20%; left:8%; width:80px; height:100px; color:var(--teal-deep); opacity:0.6; animation:spray 3s ease-in-out infinite;}

@keyframes spray{
  0%, 100%{transform:translateY(0) rotate(0deg);}
  50%{transform:translateY(-15px) rotate(-8deg);}
}

.sketched-bucket{position:absolute; bottom:15%; right:12%; width:90px; height:90px; color:var(--ink); opacity:0.5; animation:tilt 5s ease-in-out infinite;}

@keyframes tilt{
  0%, 100%{transform:rotate(0deg);}
  25%{transform:rotate(-12deg);}
  75%{transform:rotate(12deg);}
}

/* Scroll reveal animations */
@keyframes slideInLeft{
  from{opacity:0; transform:translateX(-50px);}
  to{opacity:1; transform:translateX(0);}
}

@keyframes slideInRight{
  from{opacity:0; transform:translateX(50px);}
  to{opacity:1; transform:translateX(0);}
}

@keyframes fadeInUp{
  from{opacity:0; transform:translateY(30px);}
  to{opacity:1; transform:translateY(0);}
}

.fh-intro-card, .fh-id-card, .fh-bento-item, .fh-proto-card{
  animation:fadeInUp 0.8s ease-out backwards;
}

.fh-intro-card:nth-child(1){animation-delay:0.2s;}
.fh-intro-card:nth-child(2){animation-delay:0.4s;}
.fh-intro-card:nth-child(3){animation-delay:0.6s;}

.fh-id-card:nth-child(1){animation:slideInLeft 0.8s ease-out 0.2s backwards;}
.fh-id-card:nth-child(2){animation:fadeInUp 0.8s ease-out 0.4s backwards;}
.fh-id-card:nth-child(3){animation:slideInRight 0.8s ease-out 0.6s backwards;}

.fh-bento-item{animation-delay:0.2s;}
.fh-bento-item:nth-child(2){animation-delay:0.3s;}
.fh-bento-item:nth-child(3){animation-delay:0.4s;}
.fh-bento-item:nth-child(4){animation-delay:0.5s;}
.fh-bento-item:nth-child(5){animation-delay:0.6s;}

/* Scroll progress indicator */
.scroll-indicator{position:fixed; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg, var(--teal), var(--crimson)); transform-origin:left; z-index:100; pointer-events:none; box-shadow:0 2px 8px rgba(18,214,190,0.5);}

/* FALLING MOP AND CATCHING BUCKET */
.falling-mop-container{position:fixed; inset:0; pointer-events:none; z-index:90;}

.falling-mop{position:fixed; right:15%; top:-10vh; width:120px; height:200px; pointer-events:none; filter:drop-shadow(0 10px 20px rgba(0,0,0,0.3)); transition:transform 0.1s linear, opacity 0.3s ease;}

.mop-svg{width:100%; height:100%;}

.mop-head{animation:mopSway 0.8s ease-in-out infinite alternate;}

@keyframes mopSway{
  from{transform:translateX(-5px);}
  to{transform:translateX(5px);}
}

.catching-bucket{position:fixed; bottom:80px; right:10%; width:200px; height:150px; animation:bucketAppear 0.5s ease-out; filter:drop-shadow(0 10px 30px rgba(74,144,226,0.5));}

.catching-bucket.caught{animation:bucketShake 0.5s ease-out;}

@keyframes bucketAppear{
  from{opacity:0; transform:translateY(50px) scale(0.8);}
  to{opacity:1; transform:translateY(0) scale(1);}
}

@keyframes bucketShake{
  0%, 100%{transform:rotate(0deg) scale(1);}
  25%{transform:rotate(-5deg) scale(1.1);}
  75%{transform:rotate(5deg) scale(1.1);}
}

.bucket-svg{width:100%; height:100%;}

.caught-message{position:absolute; top:-50px; left:50%; transform:translateX(-50%); background:var(--teal); color:var(--ink); padding:10px 20px; border-radius:100px; font-family:var(--disp); font-weight:700; font-size:18px; white-space:nowrap; animation:messagePopUp 0.5s ease-out; box-shadow:0 8px 20px rgba(18,214,190,0.5);}

@keyframes messagePopUp{
  from{opacity:0; transform:translateX(-50%) translateY(20px) scale(0.8);}
  to{opacity:1; transform:translateX(-50%) translateY(0) scale(1);}
}

.water-wave{animation:waveMove 1.5s ease-in-out infinite;}

@keyframes waveMove{
  0%, 100%{transform:translateY(0);}
  50%{transform:translateY(-3px);}
}
`;
