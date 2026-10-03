"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useDragControls, useReducedMotion } from "framer-motion";
import * as I from "lucide-react";
import { Terminal } from "./Terminal";
import { profile, projects, experience, skillGroups, certifications } from "@/data/portfolio";
import { filesystem, resolvePath } from "@/data/filesystem";

type App = { id: string; name: string; category: string; icon: keyof typeof I };
const apps: App[] = [
  { id: "about", name: "About Me", category: "Portfolio", icon: "UserRound" },
  { id: "projects", name: "SOC Projects", category: "Portfolio", icon: "FolderKanban" },
  { id: "skills", name: "Skills", category: "Portfolio", icon: "ShieldCheck" },
  { id: "experience", name: "Experience", category: "Portfolio", icon: "ScrollText" },
  { id: "education", name: "Education", category: "Portfolio", icon: "GraduationCap" },
  { id: "certifications", name: "Certifications", category: "Portfolio", icon: "BadgeCheck" },
  { id: "grecybersec", name: "GreCyberSec", category: "Portfolio", icon: "Radio" },
  { id: "contact", name: "Contact", category: "Portfolio", icon: "Send" },
  { id: "files", name: "File Manager", category: "System", icon: "FolderOpen" },
  { id: "terminal", name: "Terminal", category: "System", icon: "TerminalSquare" },
  { id: "monitor", name: "System Monitor", category: "System", icon: "Activity" },
  { id: "mitre", name: "ATT&CK Matrix", category: "Security", icon: "Grid3X3" },
  { id: "network", name: "Network Map", category: "Security", icon: "Network" },
  { id: "cv", name: "CV Viewer", category: "Portfolio", icon: "FileText" },
  { id: "settings", name: "Settings", category: "System", icon: "Settings" },
];
const icon = (name: keyof typeof I, size = 20) => {
  const C = I[name] as React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  return <C size={size} aria-hidden />;
};
type Win = { id: string; z: number; min?: boolean; max?: boolean; activation?: number };
const external = { target: "_blank", rel: "noopener noreferrer" };

export function Desktop({ goRecruiter, restart, initialApp }: { goRecruiter: () => void; restart: () => void; initialApp?: string }) {
  const [wins, setWins] = useState<Win[]>(initialApp ? [{ id: initialApp, z: 2 }] : []);
  const [launch, setLaunch] = useState(false);
  const [clock, setClock] = useState(new Date());
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
  const launcherButton = useRef<HTMLButtonElement>(null);
  const open = useCallback((id: string) => {
    setLaunch(false);
    setMenu(null);
    setWins(current => {
      const z = Math.max(...current.map(w => w.z), 1) + 1;
      return current.some(w => w.id === id)
        ? current.map(w => w.id === id ? { ...w, min: false, z, activation: (w.activation ?? 0) + 1 } : w)
        : [...current, { id, z }];
    });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 1000);
    const keydown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "t") { event.preventDefault(); open("terminal"); }
      if (event.ctrlKey && event.key.toLowerCase() === "k") { event.preventDefault(); setLaunch(true); }
      if (event.key === "Escape") { setLaunch(false); setMenu(null); launcherButton.current?.focus(); }
    };
    window.addEventListener("keydown", keydown);
    return () => { clearInterval(timer); window.removeEventListener("keydown", keydown); };
  }, [open]);
  const close = (id: string) => { setWins(current => current.filter(w => w.id !== id)); launcherButton.current?.focus(); };
  const update = (id: string, key: "min" | "max") => {
    setWins(current => current.map(w => w.id === id ? { ...w, [key]: !w[key] } : w));
    if (key === "min") launcherButton.current?.focus();
  };

  return <main className="desktop" onContextMenu={event => {
    if ((event.target as HTMLElement).closest(".window, a, input")) return;
    event.preventDefault();
    setMenu({ x: Math.max(8, Math.min(event.clientX, window.innerWidth - 182)), y: Math.max(48, Math.min(event.clientY, window.innerHeight - 210)) });
  }}>
    <header className="topbar">
      <button ref={launcherButton} className="brand" onClick={() => setLaunch(value => !value)} aria-label="Open AMS-sec applications" aria-expanded={launch} aria-controls="application-launcher">◈ <span>AMS-sec</span></button>
      <div className="quick"><button onClick={() => open("files")}>{icon("FolderOpen", 16)} Files</button><button onClick={() => open("terminal")}>{icon("TerminalSquare", 16)} Terminal</button><button onClick={() => open("projects")}>{icon("FolderKanban", 16)} Projects</button></div>
      <div className="status"><I.ShieldCheck size={15} aria-hidden /><time>{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time><button onClick={goRecruiter}>Recruiter Mode</button></div>
    </header>
    <section className="desktop-welcome" aria-labelledby="desktop-name">
      <p className="eyebrow">{profile.location} / {profile.professionalStatus}</p>
      <h1 id="desktop-name">{profile.name}</h1>
      <p className="desktop-role">{profile.role}</p><p className="desktop-focus">{profile.focus}</p>
      <div className="desktop-actions"><button className="primary" onClick={() => open("projects")}>View Projects <I.ArrowUpRight size={16} aria-hidden /></button><a href={profile.github} {...external}>GitHub</a><a href={profile.linkedin} {...external}>LinkedIn</a><button onClick={() => open("contact")}>Contact</button></div>
      <button className="profile-shortcut" onClick={goRecruiter}>Read my full profile <I.ArrowRight size={16} aria-hidden /></button>
    </section>
    <nav className="desktop-icons" aria-label="Portfolio applications">{apps.filter(app => ["about", "projects", "experience", "education", "certifications", "skills", "terminal", "contact"].includes(app.id)).map(app => <button className="deskicon" key={app.id} onClick={() => open(app.id)}>{icon(app.icon, 29)}<span>{app.id === "about" ? "about_me.txt" : app.name}</span></button>)}</nav>
    <AnimatePresence>{wins.filter(w => !w.min).map(w => <Window key={`${w.id}-${w.max ? "max" : "window"}`} win={w} app={apps.find(app => app.id === w.id) || { id: w.id, name: projects.find(p => `project:${p.id}` === w.id)?.title || (w.id === "research" ? "Research" : "Labs"), category: "", icon: "FileText" }} focus={() => setWins(current => current.map(x => x.id === w.id ? { ...x, z: Math.max(...current.map(v => v.z)) + 1 } : x))} close={close} update={update}>{content(w.id, open, goRecruiter)}</Window>)}</AnimatePresence>
    {wins.some(w => w.min) && <nav className="tasklist" aria-label="Minimized applications">{wins.filter(w => w.min).map(w => <button key={w.id} onClick={() => open(w.id)}>{apps.find(app => app.id === w.id)?.name || projects.find(p => `project:${p.id}` === w.id)?.title || w.id}</button>)}</nav>}
    <AnimatePresence>{launch && <Launcher open={open} />}</AnimatePresence>
    {menu && <div className="context" style={{ left: menu.x, top: menu.y }}><button onClick={() => open("terminal")}>Open Terminal</button><button onClick={() => setMenu(null)}>Refresh Desktop</button><button onClick={() => open("monitor")}>System Monitor</button><button onClick={goRecruiter}>Recruiter Mode</button><button onClick={() => open("about")}>About AMS-sec</button></div>}
    <button className="restart" onClick={restart}><I.RotateCcw size={15} aria-hidden /> Restart AMS-sec OS</button>
  </main>;
}

function Launcher({ open }: { open: (id: string) => void }) {
  const [query, setQuery] = useState("");
  const match = apps.filter(app => `${app.name} ${app.category} ${app.id}`.toLowerCase().includes(query.toLowerCase()));
  return <motion.div id="application-launcher" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="launcher"><div className="launcher-title">AMS-sec <small>APPLICATIONS</small></div><input autoFocus aria-label="Search applications" placeholder="Search applications (Ctrl K)" value={query} onChange={event => setQuery(event.target.value)} /><div className="appgrid">{match.map(app => <button key={app.id} onClick={() => open(app.id)}>{icon(app.icon)}<span>{app.name}<small>{app.category}</small></span></button>)}</div>{!match.length && <p className="note" role="status">No matching applications.</p>}</motion.div>;
}

function Window({ win, app, children, close, update, focus }: { win: Win; app: App; children: React.ReactNode; focus: () => void; close: (id: string) => void; update: (id: string, key: "min" | "max") => void }) {
  const dragControls = useDragControls();
  const reduceMotion = useReducedMotion();
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    const target = app.id === "terminal" ? panel.current?.querySelector<HTMLInputElement>("input") : panel.current;
    target?.focus();
  }, [app.id, win.activation]);
  return <motion.section ref={panel} tabIndex={-1} aria-label={app.name} role="dialog" drag={!win.max} dragControls={dragControls} dragListener={false} dragMomentum={false} dragElastic={0} dragConstraints={{ left: -190, right: 360, top: -5, bottom: 260 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .12 }} className={`window ${win.max ? "max" : ""} win-${app.id}`} style={{ zIndex: win.z + 20 }} onPointerDown={focus} onFocus={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) focus(); }}>
    <header className="windowbar" onPointerDown={event => { if (!win.max && window.matchMedia("(min-width: 701px) and (pointer: fine)").matches) dragControls.start(event); }}><span>{icon(app.icon, 16)} {app.name}</span><div onPointerDown={event => event.stopPropagation()}><button aria-label="Minimize" onClick={() => update(win.id, "min")}><I.Minus size={15} aria-hidden /></button><button aria-label={win.max ? "Restore window" : "Maximize"} onClick={() => update(win.id, "max")}><I.Square size={13} aria-hidden /></button><button aria-label="Close" className="close" onClick={() => close(win.id)}><I.X size={16} aria-hidden /></button></div></header>
    <div className={`windowcontent ${app.id === "terminal" ? "terminal-shell" : ""}`}>{children}</div>
  </motion.section>;
}

function content(id: string, open: (id: string) => void, recruiter: () => void): React.ReactNode {
  if (id === "terminal") return <Terminal openApp={open} />;
  if (id === "about") return <article className="about"><p className="eyebrow">ABOUT / PROFESSIONAL SUMMARY</p><h2>{profile.name}</h2><p>{profile.role}</p><p>{profile.summary}</p><div className="chips"><span>{profile.professionalStatus}</span><span>ISC² CC</span><span>{profile.location}</span></div><button className="primary" onClick={recruiter}>Read my full profile <I.ArrowRight size={16} aria-hidden /></button></article>;
  if (id === "projects" || id === "labs") return <Projects open={open} />;
  if (id.startsWith("project:")) return <Project p={projects.find(project => project.id === id.slice(8))} />;
  if (id === "experience") return <section className="operations"><p className="eyebrow">PROFESSIONAL EXPERIENCE</p>{experience.map(item => <article className="timeline" key={item.role}><div><i aria-hidden /><span>{item.dates}</span></div><h2>{item.role}</h2><p>{item.org}</p><p>{item.location}{item.arrangement ? ` · ${item.arrangement}` : ""}</p><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul></article>)}</section>;
  if (id === "files") return <Files open={open} />;
  if (id === "skills") return <section><p className="eyebrow">SKILLS / TOOLS & METHODS</p>{Object.entries(skillGroups).map(([group, skills]) => <div className="skillgroup" key={group}><h2>{group}</h2><div className="chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</section>;
  if (id === "certifications") return <section><p className="eyebrow">CERTIFICATIONS & PROFESSIONAL STATUS</p><div className="certs">{certifications.map((certification, index) => <article key={certification} className={index < 2 ? "featured" : ""}><I.BadgeCheck size={22} aria-hidden /><h2>{certification}</h2><p>{certification === profile.professionalStatus ? "Professional status" : "Certification / training"}</p></article>)}</div></section>;
  if (id === "education") return <section className="config"><p className="eyebrow">EDUCATION</p><h2>{profile.university}</h2><p>{profile.location}</p><hr /><h3>{profile.degree}</h3><p>{profile.dates}</p><h3>Relevant coursework</h3><ul className="coursework">{profile.coursework.map(course => <li key={course}>{course}</li>)}</ul></section>;
  if (id === "grecybersec") {
    const society = experience.find(item => item.org === profile.university);
    return <section className="command"><p className="eyebrow">GRECYBERSEC / STUDENT COMMUNITY</p><h2>President, Cyber Security Society</h2><p>{profile.university} · {society?.dates}</p><div className="metrics"><b>100+<small>STUDENTS</small></b><b>10+<small>EVENTS & WORKSHOPS</small></b></div><ul className="coursework">{society?.items.map(item => <li key={item}>{item}</li>)}</ul><a className="gre-link" href="https://www.grecybersec.co.uk/" {...external}>Visit the GreCyberSec website ↗</a></section>;
  }
  if (id === "research") return <section><p className="eyebrow">RESEARCH WORKSPACE</p><h2>Research notes</h2><p className="note">No research write-ups published yet. Explore the current SOC projects for my areas of practical focus.</p><button className="primary" onClick={() => open("projects")}>View Projects</button></section>;
  if (id === "mitre") return <section><p className="eyebrow">MITRE ATT&CK / PROJECT SCOPE</p><h2>Detection and investigation coverage</h2><p className="note">Planned areas of investigation in projects currently in progress. Validated detections will be documented as the labs develop.</p><div className="mitre">{["Initial Access", "Execution", "Persistence", "Privilege Escalation", "Credential Access", "Discovery", "Lateral Movement", "Command and Control"].map(tactic => <article key={tactic}><b>{tactic}</b><span>{projects.filter(project => project.mitre?.includes(tactic)).map(project => project.title.split(":")[0]).join(" · ") || "No project mapping yet"}</span></article>)}</div></section>;
  if (id === "network") return <section><p className="eyebrow">SKILLS / FOCUS MAP</p><div className="networkmap"><b>{profile.name}</b>{["SOC operations", "Threat detection", "Incident response", "Digital forensics", "Networking", "Security automation"].map(item => <span key={item}>↳ {item}</span>)}</div></section>;
  if (id === "monitor") return <section className="monitor"><p className="eyebrow">PORTFOLIO INVENTORY</p>{[["Applications", String(apps.length)], ["Projects in progress", String(projects.filter(project => project.status === "In Progress").length)], ["Skill categories", String(Object.keys(skillGroups).length)], ["Certifications and status", String(certifications.length)], ["Experience entries", String(experience.length)]].map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}<p className="note">Counts reflect the content in this portfolio.</p></section>;
  if (id === "contact") return <section className="contact"><p className="eyebrow">CONTACT / {profile.location.toUpperCase()}</p><h2>Let&apos;s connect.</h2><p>Interested in SOC Analyst, Cybersecurity Analyst and junior security opportunities.</p><a href={`mailto:${profile.email}`}>{profile.email}</a><div><a className="primary" href={`mailto:${profile.email}`}>Send Email</a><a href={profile.linkedin} {...external}>LinkedIn</a><a href={profile.github} {...external}>GitHub</a></div></section>;
  if (id === "cv") return <section className="cv"><I.FileText size={44} aria-hidden /><h2>CV available on request</h2><p>A downloadable CV has not been added yet.</p><a href={`mailto:${profile.email}?subject=CV%20request`}>Request my CV by email</a></section>;
  if (id === "settings") return <section className="settings"><p className="eyebrow">DESKTOP / PREFERENCES</p><h2>Choose how to explore</h2><p>Recruiter Mode presents the full portfolio in a single, readable page.</p><button className="primary" onClick={recruiter}>Open Recruiter Mode</button><h3>Accessibility</h3><p>Animations follow your device&apos;s reduced motion preference. Sound effects are off.</p><h3>Keyboard shortcuts</h3><p><kbd>Ctrl + K</kbd> opens applications.<br /><kbd>Ctrl + Alt + T</kbd> opens the terminal.<br /><kbd>Escape</kbd> dismisses the application menu.</p></section>;
  return <p>This application is unavailable.</p>
}

function Repository({ project }: { project: typeof projects[number] }) {
  return project.repository ? <a href={project.repository} {...external}>GitHub <I.ArrowUpRight size={14} aria-hidden /></a> : <button disabled aria-label={`GitHub repository for ${project.title} is not yet available`}>GitHub unavailable</button>;
}

function Projects({ open }: { open: (id: string) => void }) {
  return <section><p className="eyebrow">CASE FILES / SOC PROJECTS</p><h2 className="desktop-section-title">Detection, investigation and response</h2><p className="note">Projects are in progress. Repositories and findings will be linked when available.</p><div className="casegrid">{projects.map((project, index) => <article key={project.id} className={project.featured ? "featured-case" : ""}><div className="case-heading"><small>CASE {String(index + 1).padStart(2, "0")}{project.featured ? " / FEATURED" : ""}</small><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p className="case-purpose">{project.summary}</p><p>{project.description}</p><h4>Tools</h4><div className="project-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><h4>Security concepts</h4><p>{project.skills.join(" · ")}</p><div className="case-actions"><button onClick={() => open(`project:${project.id}`)} aria-label={`View project: ${project.title}`}>View Project <I.ArrowRight size={14} aria-hidden /></button><Repository project={project} /></div></article>)}</div></section>;
}

function Project({ p }: { p: typeof projects[number] | undefined }) {
  if (!p) return <p>Project not found. Open SOC Projects to browse current work.</p>;
  return <section className="project"><p className="eyebrow">CASE FILE / {p.status.toUpperCase()}</p><h2>{p.title}</h2><p>{p.summary}</p><p>{p.description}</p><article><h3>Lab environment</h3><p>{p.environment.join(" · ")}</p></article><article><h3>Core tools</h3><div className="project-tags">{p.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article><article><h3>Security concepts</h3><p>{p.skills.join(" · ")}</p></article>{!!p.methodology?.length && <article className="project-highlights"><h3>Planned workflow</h3><ul>{p.methodology.map(item => <li key={item}>{item}</li>)}</ul></article>}{!!p.mitre?.length && <article><h3>MITRE ATT&CK focus</h3><p>{p.mitre.join(" · ")}</p></article>}<p className="note">Implementation and investigation results will be published as this project develops.</p><div className="case-actions"><Repository project={p} /></div></section>;
}

function Files({ open }: { open: (id: string) => void }) {
  const [parts, setParts] = useState<string[]>([]);
  const node = resolvePath(parts) || filesystem;
  return <section><div className="filebar"><button aria-label="Parent folder" disabled={!parts.length} onClick={() => setParts(current => current.slice(0, -1))}>←</button><button aria-label="Home folder" onClick={() => setParts([])}>⌂</button><span>/home/almas{parts.length ? "/" + parts.join("/") : ""}</span></div><div className="filegrid">{node.children?.map(file => <button key={file.name} onClick={() => file.type === "folder" ? setParts(current => [...current, file.name]) : file.app && open(file.app)}>{file.type === "folder" ? <I.Folder aria-hidden /> : <I.FileText aria-hidden />}<b>{file.name}</b><small>{file.type}</small></button>)}</div>{!node.children?.length && <p className="note">No files published here yet.</p>}</section>;
}
