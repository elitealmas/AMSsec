import { profile, projects, certifications, experience, skillGroups } from "./portfolio";

export type VFile = {
  name: string;
  type: "file" | "folder";
  content?: string;
  app?: string;
  children?: VFile[];
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const society = experience.find(item => item.role === "President, Cyber Security Society");

export const filesystem: VFile = {
  name: "almas",
  type: "folder",
  children: [
    {
      name: "about_me.txt",
      type: "file",
      app: "about",
      content: [profile.name, profile.role, profile.focus, profile.location, profile.professionalStatus, "", profile.summary].join("\n"),
    },
    {
      name: "education.md",
      type: "file",
      app: "education",
      content: [`# ${profile.university}`, profile.location, profile.degree, profile.dates, "", "## Relevant coursework", ...profile.coursework.map(item => `- ${item}`)].join("\n"),
    },
    {
      name: "skills.json",
      type: "file",
      app: "skills",
      content: JSON.stringify(skillGroups, null, 2),
    },
    {
      name: "experience",
      type: "folder",
      app: "experience",
      children: experience.map(item => ({
        name: `${slug(item.org)}.md`,
        type: "file",
        app: "experience",
        content: [`# ${item.role}`, item.org, item.location, item.arrangement, item.dates, "", ...item.items.map(line => `- ${line}`)].filter(line => line !== undefined).join("\n"),
      })),
    },
    {
      name: "projects",
      type: "folder",
      app: "projects",
      children: projects.map(project => ({
        name: project.id,
        type: "folder",
        app: `project:${project.id}`,
        children: [{
          name: "README.md",
          type: "file",
          app: `project:${project.id}`,
          content: [
            `# ${project.title}`,
            `Status: ${project.status}`,
            "",
            project.summary,
            project.description,
            "",
            `Tools: ${project.tools.join(", ")}`,
            `Security concepts: ${project.skills.join(", ")}`,
            `Environment: ${project.environment.join(", ")}`,
            "",
            "## Project scope",
            ...(project.methodology ?? []).map(item => `- ${item}`),
            ...(project.mitre?.length ? ["", `Planned MITRE ATT&CK coverage: ${project.mitre.join(", ")}`] : []),
            "",
            project.repository ? `Repository: ${project.repository}` : "Repository: Not yet available. Project in progress.",
          ].join("\n"),
        }],
      })),
    },
    {
      name: "research",
      type: "folder",
      app: "research",
      children: [{
        name: "README.md",
        type: "file",
        app: "research",
        content: "# Research\nNo research publications or write-ups are currently available. See Projects for current SOC project work.",
      }],
    },
    {
      name: "grecybersec",
      type: "folder",
      app: "grecybersec",
      children: [{
        name: "society.md",
        type: "file",
        app: "grecybersec",
        content: society ? [`# ${society.role}`, society.org, society.location, society.dates, "", ...society.items.map(item => `- ${item}`)].join("\n") : "Cyber Security Society, University of Greenwich",
      }],
    },
    {
      name: "certifications",
      type: "folder",
      app: "certifications",
      children: certifications.map(name => ({ name: `${slug(name)}.txt`, type: "file", app: "certifications", content: name })),
    },
    {
      name: "documents",
      type: "folder",
      children: [{ name: "cv-status.txt", type: "file", app: "cv", content: "A downloadable CV is not currently available. Contact Mohammed Almas Akkalath for a current copy." }],
    },
    {
      name: "contact.vcf",
      type: "file",
      app: "contact",
      content: ["BEGIN:VCARD", "VERSION:3.0", `FN:${profile.name}`, `TITLE:${profile.role}`, `EMAIL:${profile.email}`, `URL:${profile.linkedin}`, `URL:${profile.github}`, "END:VCARD"].join("\n"),
    },
  ],
};

export function resolvePath(parts: string[]) {
  let current = filesystem;
  for (const part of parts) {
    const next = current.children?.find(item => item.name === part);
    if (!next) return undefined;
    current = next;
  }
  return current;
}

export function flatten(node: VFile, base = "/home/almas"): { path: string; file: VFile }[] {
  const path = node === filesystem ? base : `${base}/${node.name}`;
  return [{ path, file: node }, ...(node.children?.flatMap(child => flatten(child, path)) ?? [])];
}
