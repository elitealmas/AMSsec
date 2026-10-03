"use client";

import { useEffect, useState } from "react";
import { Boot } from "@/components/Boot";
import { Desktop } from "@/components/Desktop";
import { Recruiter } from "@/components/Recruiter";
import { profile } from "@/data/portfolio";

type Mode = "loading" | "boot" | "desktop" | "recruiter" | "recovery";
export default function Home() {
  const [state, setState] = useState<Mode>("loading");
  useEffect(() => {
    try { setState(localStorage.getItem("amssec-booted") === "true" ? "desktop" : "boot"); }
    catch { setState("boot"); }
  }, []);
  const done = (mode: "desktop" | "recruiter" | "recovery" = "desktop") => {
    try { localStorage.setItem("amssec-booted", "true"); } catch { /* The portfolio also works without browser storage. */ }
    setState(mode);
  };
  if (state === "loading") return <main className="loading"><div><p>Loading AMS-sec portfolio...</p><a href="/recruiter">Read the full profile</a></div></main>;
  if (state === "boot") return <Boot onComplete={done} />;
  if (state === "recruiter") return <Recruiter back={() => setState("desktop")} />;
  if (state === "recovery") return <main className="recovery"><div><pre>AMS-sec / Recovery Mode{`\n\n`}Need a simpler way to explore?{`\n`}Read the full profile or get in touch directly.</pre><div className="desktop-actions"><button onClick={() => setState("desktop")}>Return to desktop</button><a href="/recruiter">Read full profile</a><a href={`mailto:${profile.email}`}>Contact</a></div></div></main>;
  return <Desktop goRecruiter={() => setState("recruiter")} restart={() => {
    try { localStorage.removeItem("amssec-booted"); } catch { /* Restart does not require storage. */ }
    setState("boot");
  }} />;
}
