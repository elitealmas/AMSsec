"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/data/portfolio";

type Mode = "desktop" | "recruiter" | "recovery";
type Props = { onComplete: (mode?: Mode) => void };
const logs = ["Loading AMS-sec desktop...", "Loading professional profile...", "Opening SOC project workspace..."];
const options: [string, Mode][] = [["AMS-sec OS", "desktop"], ["Recruiter Mode", "recruiter"], ["Recovery Mode", "recovery"]];

export function Boot({ onComplete }: Props) {
  const [grub, setGrub] = useState(true);
  const [selected, setSelected] = useState(0);
  const [shown, setShown] = useState(0);
  const reducedMotion = useReducedMotion();
  const select = (index: number) => {
    setSelected(index);
    if (options[index][1] !== "desktop" || reducedMotion) onComplete(options[index][1]);
    else setGrub(false);
  };
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (!grub || event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) return;
      if (event.key === "ArrowDown") { event.preventDefault(); setSelected(value => (value + 1) % options.length); }
      if (event.key === "ArrowUp") { event.preventDefault(); setSelected(value => (value + options.length - 1) % options.length); }
      if (event.key === "Enter") {
        if (options[selected][1] !== "desktop" || reducedMotion) onComplete(options[selected][1]);
        else setGrub(false);
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [grub, selected, reducedMotion, onComplete]);
  useEffect(() => {
    if (grub) return;
    const timer = setTimeout(() => shown < logs.length ? setShown(value => value + 1) : onComplete("desktop"), reducedMotion ? 0 : 180);
    return () => clearTimeout(timer);
  }, [grub, shown, reducedMotion, onComplete]);
  if (grub) return <main className="boot"><div className="grub"><p className="eyebrow">AMS-sec / CYBERSECURITY PORTFOLIO</p><h1>{profile.name}</h1><p className="boot-intro">{profile.role}<br />{profile.focus}<br />{profile.location} · {profile.professionalStatus}</p>{options.map(([name], index) => <button key={name} onClick={() => select(index)} className={index === selected ? "selected" : ""}>{name}{index === 1 ? " / Full profile" : ""}</button>)}<div className="boot-entry-links"><a href="/recruiter#projects">View Projects</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Contact</a></div><small>Choose the interactive desktop or read the full profile in Recruiter Mode.</small><button className="skip" onClick={() => onComplete("desktop")}>Skip Boot</button></div></main>;
  return <main className="boot"><div className="bootlog"><div className="bootbrand"><svg viewBox="0 0 74 74" aria-hidden="true"><path d="M37 4 64 18v22L37 69 10 40V18L37 4Z" /><path d="m22 39 10-17 5 10 6-10 10 17-8 12H30l-8-12Z" /></svg><div><h1>AMS-sec <span>Cybersecurity &amp; Digital Forensics</span></h1></div></div><div role="status">{logs.slice(0, shown).map(log => <p key={log}>{log}</p>)}</div></div><button className="skip" onClick={() => onComplete("desktop")}>Skip Boot</button></main>;
}
