"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { filesystem, flatten, resolvePath, VFile } from "@/data/filesystem";
import { profile, projects, experience, certifications } from "@/data/portfolio";

type Props = { openApp: (id: string) => void };
type Line = { input?: string; output?: string };

function pathStr(parts: string[]) {
  return "/home/almas" + (parts.length ? "/" + parts.join("/") : "");
}

function list(node: VFile | undefined) {
  return node?.children?.map(item => item.name + (item.type === "folder" ? "/" : "")).join("  ") || "";
}

function destination(path: string, cwd: string[]) {
  if (path.startsWith("/") && path !== "/home/almas" && !path.startsWith("/home/almas/")) return undefined;
  const absolute = path.startsWith("/") || path === "~" || path.startsWith("~/");
  const parts = absolute ? [] : [...cwd];
  const relative = path.replace(/^\/home\/almas\/?|^~\/?/, "");
  for (const part of relative.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return parts;
}

export function Terminal({ openApp }: Props) {
  const [cwd, setCwd] = useState<string[]>([]);
  const [lines, setLines] = useState<Line[]>([{ output: "Welcome to AMS-sec OS. This portfolio terminal explores local profile content. Type 'help' for commands." }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "auto" }); }, [lines]);

  const run = (raw: string) => {
    const command = raw.trim();
    if (!command) return;
    let output = "";
    const [head, ...args] = command.split(/\s+/);
    const arg = args.join(" ");
    const parts = destination(arg, cwd);
    const target = parts ? resolvePath(parts) : undefined;
    setHistory(items => [...items, command]);
    setHistoryIndex(-1);

    if (head === "help") {
      output = "help ls cd pwd cat tree clear whoami uname history echo date find grep open neofetch skills projects experience education certifications contact society research github linkedin cv\n\nUse ls to list files, cat <path> to read one, or open <name> to open a portfolio section.\nThis is a browser-based portfolio terminal; it does not execute system commands.";
    } else if (head === "ls") {
      output = target?.type === "folder" ? list(target) : `ls: ${arg}: No such directory`;
    } else if (head === "pwd") {
      output = pathStr(cwd);
    } else if (head === "whoami") {
      output = `${profile.name}\n${profile.role}\n${profile.location}\n${profile.professionalStatus}`;
    } else if (head === "uname") {
      output = "AMS-sec OS 1.0.0 browser portfolio";
    } else if (head === "date") {
      output = new Date().toString();
    } else if (head === "echo") {
      output = arg;
    } else if (head === "clear") {
      setLines([]);
      setValue("");
      return;
    } else if (head === "history") {
      output = history.map((item, index) => `${index + 1}  ${item}`).join("\n");
    } else if (head === "cd") {
      if (!arg) setCwd([]);
      else if (parts && target?.type === "folder") setCwd(parts);
      else output = `cd: ${arg}: No such directory`;
    } else if (command === "cat /etc/motd") {
      output = `Welcome to AMS-sec OS.\n\n${profile.focus}\nExplore current projects, experience and skills.`;
    } else if (head === "cat") {
      output = target?.content ?? `cat: ${arg}: No such file`;
    } else if (head === "tree") {
      output = flatten(filesystem).map(({ path, file }) => `${"  ".repeat(path.split("/").length - 3)}${file.type === "folder" ? "▸ " : "· "}${file.name}`).join("\n");
    } else if (head === "find") {
      output = flatten(filesystem).filter(item => item.file.name.toLowerCase().includes(arg.toLowerCase())).map(item => item.path).join("\n") || "No matches.";
    } else if (head === "grep") {
      output = arg ? flatten(filesystem).flatMap(({ path, file }) => (file.content?.split("\n") ?? []).filter(line => line.toLowerCase().includes(arg.toLowerCase())).map(line => `${path}: ${line}`)).join("\n") || "No matches." : "Usage: grep <text>\nSearch the portfolio's file contents.";
    } else if (head === "open") {
      const found = target?.app ? target : flatten(filesystem).find(item => item.file.name === arg || item.file.name.replace(/\..*/, "") === arg)?.file;
      if (found?.app) {
        openApp(found.app);
        output = `Opening ${found.name}...`;
      } else output = `open: ${arg}: not found`;
    } else if (head === "neofetch") {
      output = `AMS-sec OS\n\nName: ${profile.name}\nRole: ${profile.role}\nUniversity: ${profile.university}\nLocation: ${profile.location}\nStatus: ${profile.professionalStatus}\nFocus: ${profile.focus}\nShell: amssec-shell (portfolio simulation)`;
    } else if (head === "skills") {
      openApp("skills");
      output = "Opening security operations, forensics, programming and automation skills...";
    } else if (head === "projects") {
      openApp("projects");
      output = projects.map(project => `${project.title} | ${project.status}`).join("\n");
    } else if (head === "experience") {
      openApp("experience");
      output = experience.map(item => `${item.role} | ${item.org} | ${item.dates}`).join("\n");
    } else if (head === "education") {
      openApp("education");
      output = `${profile.university}\n${profile.degree}\n${profile.dates}\n\n${profile.coursework.join("\n")}`;
    } else if (head === "certifications") {
      openApp("certifications");
      output = certifications.join("\n");
    } else if (head === "contact") {
      openApp("contact");
      output = `Email: ${profile.email}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`;
    } else if (head === "society") {
      openApp("grecybersec");
      output = "Opening Cyber Security Society leadership experience...";
    } else if (head === "research") {
      openApp("research");
      output = "No research publications or write-ups are currently available. See Projects for current SOC project work.";
    } else if (head === "github" || head === "linkedin") {
      window.open(head === "github" ? profile.github : profile.linkedin, "_blank", "noopener,noreferrer");
      output = `Opening ${head === "github" ? "GitHub" : "LinkedIn"}...`;
    } else if (head === "cv") {
      openApp("cv");
      output = "A downloadable CV is not currently available. Please contact me for a current copy.";
    } else if (command === "sudo hire almas") {
      openApp("contact");
      output = "Interested in discussing a SOC Analyst, Cybersecurity Analyst or junior security role? Opening contact details...";
    } else if (command === "sudo su") {
      output = "This portfolio terminal does not provide system access.";
    } else if (command === "rm -rf /") {
      output = "This portfolio terminal does not execute system commands or delete files.";
    } else if (command === "nmap almas") {
      output = "Portfolio simulation: no network scan is performed.\n\nFocus areas:\nSOC operations\nThreat detection\nIncident response\nDigital forensics\nSecurity monitoring";
    } else if (command === "ping recruiter") {
      output = "Portfolio simulation: no network request is made. Type contact to get in touch.";
    } else if (command === "fortune") {
      output = "Stay curious. Investigate carefully. Document what you find.";
    } else {
      output = `amssec-shell: ${head}: command not found`;
    }

    setLines(items => [...items, { input: `almas@amssec:${cwd.length ? "~/" + cwd.join("/") : "~"}$ ${command}`, output }]);
    setValue("");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    run(value);
  };

  return <div className="terminal" onClick={() => input.current?.focus()}>
    {lines.map((line, index) => <div key={index}>
      {line.input && <div className="prompt">{line.input}</div>}
      {line.output && <pre>{line.output}</pre>}
    </div>)}
    <form onSubmit={submit}>
      <span>almas@amssec:{cwd.length ? "~/" + cwd.join("/") : "~"}$</span>
      <input
        ref={input}
        aria-label="Terminal command"
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={event => {
          if (event.key === "ArrowUp") {
            event.preventDefault();
            const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(next);
            setValue(history[next] || "");
          }
          if (event.key === "ArrowDown") {
            event.preventDefault();
            if (historyIndex < 0) return;
            const next = Math.min(history.length, historyIndex + 1);
            setHistoryIndex(next);
            setValue(history[next] || "");
          }
        }}
      />
    </form>
    <div ref={bottom}/>
  </div>;
}
