"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Github, Mail, MapPin, Menu, Minus, Plus, X } from "lucide-react";
import { profile, projects, experience, skillGroups, certifications, type Project } from "@/data/portfolio";
import "./Recruiter.css";

const navigation = [
  ["About", "about"], ["Projects", "projects"], ["Skills", "skills"],
  ["Experience", "experience"], ["Education", "education"],
  ["Certifications", "certifications"], ["Contact", "contact"],
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `recruiter-project-${project.id}`;

  return (
    <article className={`r-project-card${project.featured ? " r-project-featured" : ""}`}>
      <div className="r-project-meta">
        <span>{String(index + 1).padStart(2, "0")} / {project.featured ? "FEATURED PROJECT" : "SOC PROJECT"}</span>
        <span className="r-status"><span aria-hidden="true" />{project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="r-project-purpose">{project.summary}</p>
      <p className="r-project-description">{project.description}</p>
      <div className="r-project-tools">
        <h4>Core tools</h4>
        <ul className="r-tags" aria-label={`${project.title} tools`}>
          {project.tools.map(tool => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
      <div className="r-project-concepts"><h4>Security concepts</h4><p>{project.skills.join(" · ")}</p></div>
      <div className="r-project-actions">
        <button className="r-project-toggle" type="button" aria-expanded={expanded} aria-controls={detailsId} aria-label={`${expanded ? "Hide" : "View"} project details for ${project.title}`} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "View Project"}
          {expanded ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
        </button>
        {project.repository ? (
          <a className="r-repository" href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository (opens in a new tab)`}>
            <Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <button className="r-repository" type="button" disabled title="Repository not yet available" aria-label={`${project.title} GitHub repository not yet available`}><Github size={15} aria-hidden="true" /> GitHub</button>
        )}
      </div>
      <div id={detailsId} className="r-project-details" hidden={!expanded}>
        <h4>Project scope</h4>
        {project.methodology?.length ? <ul>{project.methodology.map(step => <li key={step}>{step}</li>)}</ul> : <p>{project.description}</p>}
        {project.environment.length > 0 && <p><strong>Environment:</strong> {project.environment.join(" · ")}</p>}
        {Boolean(project.mitre?.length) && <p><strong>MITRE ATT&amp;CK:</strong> {project.mitre?.join(" · ")}</p>}
        {!project.repository && <p className="r-repository-note">In progress. The repository and investigation write-up are not yet available.</p>}
      </div>
    </article>
  );
}

export function Recruiter({ back }: { back?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <div className="recruiter">
      <a className="r-skip-link" href="#profile-content">Skip to profile</a>
      <header className="r-header">
        <nav className="r-nav" aria-label="Portfolio navigation" onKeyDown={event => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}>
          <a className="r-brand" href="#top" onClick={() => setMenuOpen(false)}>AMS-sec<span> / PROFILE</span></a>
          <button ref={menuButton} className="r-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="recruiter-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
          <div className={`r-nav-links${menuOpen ? " is-open" : ""}`} id="recruiter-navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            {back ? <button className="r-os-link" type="button" onClick={back}>Return to AMS-sec OS <ArrowUpRight size={14} aria-hidden="true" /></button> : <a className="r-os-link" href="/">Open AMS-sec OS <ArrowUpRight size={14} aria-hidden="true" /></a>}
          </div>
        </nav>
      </header>
      <main id="profile-content" tabIndex={-1}>
        <section id="top" className="r-hero" aria-labelledby="r-name">
          <div className="r-container">
            <p className="r-eyebrow">CYBERSECURITY &amp; DIGITAL FORENSICS / PORTFOLIO</p>
            <h1 id="r-name">{profile.name}</h1>
            <p className="r-hero-role">{profile.role}</p>
            <p className="r-hero-focus">{profile.focus}</p>
            <div className="r-profile-meta"><span><MapPin size={15} aria-hidden="true" />{profile.location}</span><span><Check size={15} aria-hidden="true" />{profile.professionalStatus}</span></div>
            <div className="r-hero-actions">
              <a className="r-button r-button-primary" href="#projects">View Projects <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="r-button" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="r-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="r-button" href="#contact">Contact <Mail size={16} aria-hidden="true" /></a>
            </div>
            <div className="r-hero-bottom"><span>LOGS. EVIDENCE. UNDERSTANDING.</span><a href="#about">Explore my profile <ArrowDown size={13} aria-hidden="true" /></a></div>
          </div>
        </section>
        <section id="about" className="r-section" aria-labelledby="r-about-title">
          <div className="r-container r-about-grid">
            <div><p className="r-eyebrow">01 / ABOUT</p><h2 id="r-about-title">Understanding attacks.<br />Building practical skills.</h2></div>
            <div className="r-about-copy"><p>{profile.summary}</p><dl className="r-about-facts"><div><dt>Studying</dt><dd>{profile.degree}<span>{profile.university}</span></dd></div><div><dt>Professional status</dt><dd>{profile.professionalStatus}</dd></div></dl></div>
          </div>
        </section>
        <section id="projects" className="r-section r-projects-section" aria-labelledby="r-projects-title">
          <div className="r-container">
            <div className="r-section-heading"><div><p className="r-eyebrow">02 / PROJECTS</p><h2 id="r-projects-title">Featured SOC projects</h2></div><p>Practical work across detection, investigation and security operations. These projects are in progress; repositories will be linked when available.</p></div>
            <div className="r-project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
          </div>
        </section>
        <section id="skills" className="r-section" aria-labelledby="r-skills-title">
          <div className="r-container">
            <div className="r-section-heading"><div><p className="r-eyebrow">03 / SKILLS</p><h2 id="r-skills-title">Tools, techniques &amp; foundations</h2></div><p>Hands-on learning in security operations, networking, digital forensics and programming.</p></div>
            <div className="r-skills-grid">{Object.entries(skillGroups).map(([group, skills], index) => <article key={group}><span className="r-skill-index" aria-hidden="true">0{index + 1}</span><h3>{group}</h3><ul className="r-tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>
        <section id="experience" className="r-section r-experience-section" aria-labelledby="r-experience-title">
          <div className="r-container">
            <div className="r-section-heading"><div><p className="r-eyebrow">04 / EXPERIENCE</p><h2 id="r-experience-title">Experience &amp; leadership</h2></div></div>
            <div className="r-experience-list">{experience.map(item => <article className="r-experience" key={`${item.org}-${item.role}`}><div className="r-experience-meta"><p>{item.dates}</p><span>{item.location}</span>{item.arrangement && <span>{item.arrangement}</span>}</div><div><h3>{item.role}</h3><p className="r-organization">{item.org}</p><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul></div></article>)}</div>
          </div>
        </section>
        <section id="education" className="r-section" aria-labelledby="r-education-title">
          <div className="r-container r-education-grid">
            <div><p className="r-eyebrow">05 / EDUCATION</p><h2 id="r-education-title">{profile.university}</h2><p className="r-degree">{profile.degree}</p><p className="r-education-meta">{profile.location}<span aria-hidden="true"> / </span>{profile.dates}</p></div>
            <div className="r-coursework"><h3>Relevant coursework</h3><ul>{profile.coursework.map(course => <li key={course}><Check size={15} aria-hidden="true" />{course}</li>)}</ul></div>
          </div>
        </section>
        <section id="certifications" className="r-section r-certifications-section" aria-labelledby="r-certifications-title">
          <div className="r-container">
            <div className="r-section-heading"><div><p className="r-eyebrow">06 / CERTIFICATIONS</p><h2 id="r-certifications-title">Certifications &amp; professional development</h2></div></div>
            <ul className="r-certifications">{certifications.map((certification, index) => <li key={certification}><span className="r-cert-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{certification}</span><Check size={17} aria-hidden="true" /></li>)}</ul>
          </div>
        </section>
        <section id="contact" className="r-contact" aria-labelledby="r-contact-title">
          <div className="r-container">
            <p className="r-eyebrow">07 / CONTACT</p><h2 id="r-contact-title">Let&apos;s talk security.</h2>
            <p className="r-contact-intro">Interested in SOC Analyst, Cybersecurity Analyst and junior security opportunities.</p>
            <a className="r-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} aria-hidden="true" /></a>
            <div className="r-contact-bottom"><div className="r-contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div><p>CV download is not yet available. Please contact me by email.</p></div>
          </div>
        </section>
      </main>
      <footer className="r-footer"><div className="r-container"><p>© {new Date().getFullYear()} {profile.name}<span>{profile.location}</span></p><a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
    </div>
  );
}

