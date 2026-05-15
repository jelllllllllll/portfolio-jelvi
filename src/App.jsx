import { useState, useEffect, useRef } from "react";
import { Mail, FileText, ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profileData, projectsData } from "./data"; 

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const Tag = ({ label, accent }) => (
  <span
    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide"
    style={{
      backgroundColor: accent + "22",
      color: accent,
      border: `1px solid ${accent}44`,
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: "0.04em",
    }}
  >
    {label}
  </span>
);

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => project.link && window.open(project.link, '_blank')}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${project.delay}ms, transform 0.7s ease ${project.delay}ms`,
        background: hovered ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.62)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered ? `1px solid ${project.accent}55` : "1px solid rgba(210,195,175,0.45)",
        borderRadius: "20px",
        boxShadow: hovered ? `0 20px 48px -8px ${project.accent}28, 0 4px 16px rgba(160,140,110,0.12)` : "0 4px 24px rgba(160,140,110,0.10)",
        cursor: project.link ? "pointer" : "default",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ height: "160px", background: `linear-gradient(135deg, ${project.accentLight} 0%, ${project.accent}18 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transform: hovered ? "scale(1.06)" : "scale(1)", 
              transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
        ) : (
          <>
            <div style={{ position: "absolute", width: "160px", height: "160px", borderRadius: "50%", border: `1px solid ${project.accent}28`, top: "-40px", right: "-40px" }} />
            <div style={{ position: "absolute", width: "100px", height: "100px", borderRadius: "50%", border: `1px solid ${project.accent}20`, bottom: "-30px", left: "20px" }} />
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${project.accent}22`, border: `1px solid ${project.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", color: project.accent, backdropFilter: "blur(8px)" }}>
              {project.icon}
            </div>
          </>
        )}
      </div>

      <div style={{ padding: "24px 26px 26px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, color: "#3A3028", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
            {project.title}
          </h3>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: hovered ? project.accent : "transparent", color: hovered ? "white" : project.accent, border: `1px solid ${project.accent}55`, transition: "all 0.3s ease", flexShrink: 0, marginLeft: "10px", marginTop: "2px" }}>
            <ArrowUpRight size={14} />
          </div>
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.845rem", color: "#7A6E63", lineHeight: 1.7, marginBottom: "18px" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map(t => <Tag key={t} label={t} accent={project.accent} />)}
        </div>
      </div>
    </div>
  );
};

const SocialBtn = ({ icon, label, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        width: "44px", height: "44px", borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hovered ? "rgba(180,155,110,0.14)" : "rgba(255,255,255,0.55)",
        border: hovered ? "1px solid rgba(180,155,110,0.55)" : "1px solid rgba(210,195,175,0.55)",
        color: hovered ? "#A07840" : "#9A8E82",
        backdropFilter: "blur(10px)",
        transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "scale(1.12) translateY(-2px)" : "scale(1) translateY(0)",
        textDecoration: "none", cursor: "pointer",
        boxShadow: hovered ? "0 6px 20px rgba(160,120,64,0.18)" : "none",
      }}
    >
      {icon}
    </a>
  );
};

export default function App() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [projectsRef, projectsInView] = useInView(0.05);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #EAE6D7; }
        ::-webkit-scrollbar-thumb { background: #C9B89A; border-radius: 99px; }
        body { overflow-x: hidden; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FAF9F6 0%, #F5F1E8 35%, #EDE8DA 65%, #E8E2D0 100%)", position: "relative", overflowX: "hidden" }}>

        <div style={{ position: "fixed", top: "-120px", right: "-80px", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(210,188,145,0.18) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "fixed", bottom: "80px", left: "-100px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(175,195,165,0.14) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <nav style={{ position: "sticky", top: 0, zIndex: 100, padding: "0 32px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(250,249,246,0.72)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderBottom: "1px solid rgba(210,195,175,0.35)" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 500, color: "#4A3F32", letterSpacing: "0.02em" }}>
            {profileData.name.toLowerCase()}<span style={{ color: "#C9A96E" }}>.</span>
          </span>
          <div style={{ display: "flex", gap: "28px" }}>
            {["Work", "About", "Contact"].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 400, color: "#8A7E72", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#A07840"} onMouseLeave={e => e.target.style.color = "#8A7E72"}>
                {item}
              </a>
            ))}
          </div>
        </nav>

        <section style={{ minHeight: "calc(100vh - 60px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px 60px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.8s ease 0s, transform 0.8s ease 0s", display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(255,255,255,0.65)", border: "1px solid rgba(210,195,175,0.6)", backdropFilter: "blur(12px)", marginBottom: "32px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#8E9E7E", display: "inline-block" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#8A7E72", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {profileData.status}
            </span>
          </div>

          <h1 style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease 0.12s, transform 0.9s ease 0.12s", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(3.2rem, 9vw, 7rem)", fontWeight: 300, color: "#3A3028", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "12px" }}>
            Hi, I'm <span style={{ fontStyle: "italic", fontWeight: 400, background: "linear-gradient(135deg, #C9A96E 0%, #A07840 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{profileData.name}.</span>
          </h1>

          <p style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.9s ease 0.22s, transform 0.9s ease 0.22s", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.95rem, 2.2vw, 1.12rem)", fontWeight: 300, color: "#7A6E63", lineHeight: 1.75, maxWidth: "520px", marginBottom: "44px" }}>
            {profileData.bio}
          </p>

          <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.9s ease 0.32s, transform 0.9s ease 0.32s", display: "flex", gap: "12px", alignItems: "center", marginBottom: "28px" }}>
            <SocialBtn icon={<FaGithub size={18} />} label="GitHub" href={profileData.links.github} />
            <SocialBtn icon={<FaLinkedin size={18} />} label="LinkedIn" href={profileData.links.linkedin} />
            <SocialBtn icon={<Mail size={17} />} label="Email" href={profileData.links.email} />
          </div>

          <CvButton visible={heroVisible} url={profileData.links.cvUrl} />

          <div style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 1.2s ease 1s", position: "absolute", bottom: "36px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#B0A496", letterSpacing: "0.1em", textTransform: "uppercase" }}>scroll</span>
            <ChevronDown size={14} color="#C9B89A" style={{ animation: "bounce 2s ease-in-out infinite" }} />
          </div>
        </section>

        <section ref={projectsRef} style={{ padding: "80px 24px 100px", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ opacity: projectsInView ? 1 : 0, transform: projectsInView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease", marginBottom: "56px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "1px", background: "linear-gradient(to right, transparent, #C9A96E)" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#C9A96E", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>Selected Work</span>
              <div style={{ width: "36px", height: "1px", background: "linear-gradient(to left, transparent, #C9A96E)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "#3A3028", letterSpacing: "-0.02em", lineHeight: 1.15 }}>Things I've built</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px" }}>
            {projectsData.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        <footer style={{ borderTop: "1px solid rgba(210,195,175,0.4)", padding: "32px 24px", textAlign: "center", background: "rgba(250,249,246,0.5)", backdropFilter: "blur(8px)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#B0A496", letterSpacing: "0.04em" }}>
            Crafted with care by <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", color: "#9A8070" }}>{profileData.name}</span> · {new Date().getFullYear()}
          </p>
        </footer>

      </div>
      <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }`}</style>
    </>
  );
}

function CvButton({ visible, url }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.9s ease 0.42s, transform 0.9s ease 0.42s, background 0.3s ease, box-shadow 0.3s ease, scale 0.25s ease`,
        display: "inline-flex", alignItems: "center", gap: "9px", padding: "13px 28px", borderRadius: "14px",
        background: hovered ? "linear-gradient(135deg, #C9A96E 0%, #A07840 100%)" : "linear-gradient(135deg, #D4B97A 0%, #BFA060 100%)",
        color: "white", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.03em",
        boxShadow: hovered ? "0 12px 32px rgba(160,120,64,0.38), 0 4px 12px rgba(160,120,64,0.22)" : "0 4px 18px rgba(160,120,64,0.22)",
        scale: hovered ? "1.04" : "1",
      }}
    >
      <FileText size={15} /> Download CV
    </a>
  );
}