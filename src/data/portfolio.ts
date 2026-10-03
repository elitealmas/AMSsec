export type Project = {
  id: string;
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  summary: string;
  description: string;
  featured: boolean;
  repository?: string;
  environment: string[];
  tools: string[];
  skills: string[];
  methodology?: string[];
  mitre?: string[];
};

export const profile = {
  name: "Mohammed Almas Akkalath",
  shortName: "Almas",
  role: "Cybersecurity and Digital Forensics Student",
  focus: "SOC | Threat Detection | Incident Response | Digital Forensics",
  professionalStatus: "Associate of ISC²",
  location: "London, UK",
  email: "akkalath.malmas123@gmail.com",
  linkedin: "https://linkedin.com/in/akkalathmohammedalmas/",
  github: "https://github.com/elitealmas",
  degree: "BSc Cybersecurity and Digital Forensics (Hons)",
  university: "University of Greenwich",
  dates: "Sep 2024 to July 2027",
  coursework: [
    "Cybersecurity Fundamentals",
    "Networking and Network Security",
    "Digital Forensics and Incident Response",
    "Ethical Hacking",
    "Vulnerability Analysis",
  ],
  summary: "Cybersecurity and Digital Forensics student with a strong interest in SOC operations, threat detection and incident response. I enjoy working with logs, investigating suspicious activity and understanding how attacks happen. I have hands-on experience with Splunk, Wireshark, Kali Linux, Sysmon and Windows Event Logs, along with practical knowledge of networking, digital forensics and security monitoring.",
};

export const projects: Project[] = [
  {
    id: "signalforge",
    title: "SignalForge: Detection Engineering Lab",
    status: "In Progress",
    featured: true,
    summary: "Identify suspicious Windows activity with custom detection rules and reduce noisy alerts.",
    description: "A detection engineering lab for building and testing Splunk and Sigma rules against Sysmon events. The work focuses on simulated PowerShell execution, credential access and persistence, with MITRE ATT&CK mapping and false-positive tuning.",
    environment: ["Windows", "Detection lab"],
    tools: ["Splunk", "Sigma", "Sysmon", "MITRE ATT&CK"],
    skills: ["Detection engineering", "Log analysis", "False-positive tuning"],
    methodology: [
      "Build custom detection rules using Splunk, Sigma and Sysmon telemetry.",
      "Test against simulated PowerShell execution, credential access and persistence in a controlled lab.",
      "Map detections to MITRE ATT&CK and tune rules to reduce false positives.",
    ],
    mitre: ["Execution", "Credential Access", "Persistence"],
  },
  {
    id: "phantomtrail",
    title: "PhantomTrail: End-to-End Incident Investigation",
    status: "In Progress",
    featured: true,
    summary: "Reconstruct a simulated Windows compromise from host, network and forensic evidence.",
    description: "An incident investigation combining Sysmon and Windows Event Logs with network traffic, memory and disk analysis. The aim is to build an attack timeline, identify IOCs and explain initial access, persistence and movement through the environment.",
    environment: ["Windows", "Simulated compromise"],
    tools: ["Sysmon", "Windows Event Logs", "Wireshark", "Volatility", "Autopsy"],
    skills: ["Incident response", "Digital forensics", "IOC analysis", "Attack timelines"],
    methodology: [
      "Investigate a simulated Windows compromise using host logs, network traffic and forensic evidence.",
      "Reconstruct the attack timeline and identify indicators of compromise.",
      "Document how the attacker gained access, maintained persistence and moved through the environment.",
    ],
    mitre: ["Initial Access", "Persistence", "Lateral Movement"],
  },
  {
    id: "soclens",
    title: "SOCLens: Alert Triage and Enrichment Platform",
    status: "In Progress",
    featured: true,
    summary: "Give analysts useful context for suspicious indicators during alert triage.",
    description: "A Python-based SOC tool designed to enrich IP addresses, hashes, domains and URLs through threat intelligence APIs. Planned features include a simple risk score, analyst notes, IOC history and automated investigation summaries.",
    environment: ["Python application", "Threat intelligence APIs"],
    tools: ["Python", "Threat intelligence APIs"],
    skills: ["Alert triage", "IOC enrichment", "Security automation", "Risk scoring"],
    methodology: [
      "Accept IP addresses, hashes, domains and URLs for investigation.",
      "Enrich indicators using threat intelligence APIs and produce a simple risk score.",
      "Include analyst notes, IOC history and automated investigation summaries.",
    ],
  },
  {
    id: "ghostbeacon",
    title: "GhostBeacon: Command-and-Control Detection",
    status: "In Progress",
    featured: true,
    summary: "Spot beaconing patterns that can indicate command-and-control communication.",
    description: "A network detection project using safe simulated command-and-control style traffic. Analysis focuses on connection intervals, DNS patterns, unusual destinations and repeated outbound traffic using Wireshark, Zeek and Splunk.",
    environment: ["Controlled network lab", "Simulated traffic"],
    tools: ["Wireshark", "Zeek", "Splunk"],
    skills: ["Network traffic analysis", "Beaconing detection", "DNS analysis"],
    methodology: [
      "Generate safe simulated command-and-control style traffic in a controlled lab.",
      "Analyse traffic with Wireshark, Zeek and Splunk.",
      "Look for regular connection intervals, suspicious DNS patterns, unusual destinations and repeated outbound traffic.",
    ],
    mitre: ["Command and Control"],
  },
  {
    id: "loghunter",
    title: "LogHunter: Threat Hunting Across Mixed Logs",
    status: "In Progress",
    featured: false,
    summary: "Find suspicious activity by correlating evidence across different log sources.",
    description: "A threat hunting project bringing Windows, Linux, firewall, authentication and web server logs into a central SIEM. Searches will cover brute-force attacks, suspicious logins, privilege escalation, lateral movement and suspicious PowerShell activity.",
    environment: ["Windows", "Linux", "Firewall and web server logs"],
    tools: ["SIEM", "Windows Event Logs", "Authentication logs"],
    skills: ["Threat hunting", "Log correlation", "Authentication analysis", "SIEM monitoring"],
    methodology: [
      "Collect Windows, Linux, firewall, authentication and web server logs into a central SIEM.",
      "Create searches for brute-force attacks and suspicious logins.",
      "Hunt for privilege escalation, lateral movement and suspicious PowerShell activity.",
    ],
    mitre: ["Credential Access", "Privilege Escalation", "Lateral Movement", "Execution"],
  },
  {
    id: "caseflow-ir",
    title: "CaseFlow IR: SOC Case Management Platform",
    status: "In Progress",
    featured: false,
    summary: "Keep incident evidence, analyst notes and timelines together during a SOC investigation.",
    description: "A lightweight incident response dashboard for tracking alerts, IOCs, evidence, MITRE ATT&CK techniques and incident timelines. The proposed stack uses Python, Flask or FastAPI, SQLite or PostgreSQL and a simple frontend.",
    environment: ["Web dashboard", "Database"],
    tools: ["Python", "Flask / FastAPI", "SQLite / PostgreSQL", "MITRE ATT&CK"],
    skills: ["Incident response", "Case management", "Evidence tracking", "Incident timelines"],
    methodology: [
      "Build a lightweight incident response dashboard with Python and a simple frontend.",
      "Track alerts, indicators of compromise, evidence and MITRE ATT&CK techniques.",
      "Organise analyst notes and incident timelines for consistent case documentation.",
    ],
  },
];

export const experience: {
  role: string;
  org: string;
  location: string;
  arrangement?: string;
  dates: string;
  items: string[];
}[] = [
  {
    role: "Generalist Expert",
    org: "Mercor",
    location: "London, UK",
    arrangement: "Remote, Contract",
    dates: "Aug 2026 to Present",
    items: [
      "Evaluated 100+ AI-generated responses and artifacts for technical accuracy, reasoning quality, instruction adherence and overall output quality.",
      "Completed 50+ structured AI evaluation and quality assurance tasks, identifying errors, inconsistencies and reasoning gaps.",
      "Applied knowledge across cybersecurity, networking, IT systems and technical problem-solving when reviewing complex technical outputs.",
    ],
  },
  {
    role: "President, Cyber Security Society",
    org: "University of Greenwich",
    location: "London, UK",
    dates: "Jan 2025 to Present",
    items: [
      "Led 10+ cybersecurity events and workshops covering threat analysis, network security and attack simulations.",
      "Coordinated technical sessions and practical challenges involving incident response, detection and security operations.",
      "Managed and grew a cybersecurity student community with 100+ students through technical workshops, industry talks, labs and career events.",
    ],
  },
  {
    role: "Crew Member",
    org: "Domino's Pizza",
    location: "London, UK",
    arrangement: "On-site, Part-time",
    dates: "June 2025 to Present",
    items: [
      "Provided customer service in a fast-paced environment, handling orders, payments and enquiries.",
      "Worked with team members to prepare orders accurately, maintain food safety standards and meet service targets.",
      "Developed communication, teamwork, time-management and problem-solving skills while working under pressure.",
    ],
  },
  {
    role: "Data Entry Specialist",
    org: "Waves Craft",
    location: "Abu Dhabi, UAE",
    arrangement: "Hybrid",
    dates: "Sep 2023 to June 2026",
    items: [
      "Entered and maintained operational records including maintenance logs and client invoices.",
      "Performed regular data verification, cleansing and quality checks.",
      "Assisted with recurring operational reports and data analysis.",
    ],
  },
];

export const skillGroups = {
  "Security Operations": ["Splunk", "SIEM monitoring", "Alert triage", "Log analysis", "Incident response", "Threat hunting", "IOC analysis", "Detection engineering", "MITRE ATT&CK"],
  "Security, Networking and Forensics": ["Wireshark", "Sysmon", "Windows Event Logs", "TCP/IP", "DNS", "HTTP/HTTPS", "Active Directory", "Nmap", "Vulnerability assessment", "Volatility", "Autopsy", "FTK Imager", "Kali Linux"],
  Programming: ["Python", "SQL", "Bash", "Basic JavaScript"],
  Automation: ["Basic security automation", "Log parsing", "IOC enrichment", "Repetitive SOC tasks"],
};

export const certifications = [
  "ISC² Certified in Cybersecurity, CC",
  "Associate of ISC²",
  "Tata Cybersecurity Analyst Job Simulation",
  "Google Cybersecurity Professional Certificate: Foundations of Cybersecurity",
  "Emergency First Aid at Work",
];
