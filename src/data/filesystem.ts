import { profile, projects, certifications } from "./portfolio";
export type VFile = {name:string; type:"file"|"folder"; content?:string; app?:string; children?:VFile[]};
export const filesystem: VFile = { name:"almas",type:"folder",children:[
 {name:"about_me.txt",type:"file",app:"about",content:profile.summary},
 {name:"education.md",type:"file",app:"education",content:`# ${profile.university}\n${profile.degree}\n${profile.dates}`},
 {name:"skills.json",type:"file",app:"skills",content:"Evidence-based cybersecurity skills. Open Skills for the full inventory."},
 {name:"experience",type:"folder",app:"experience",children:[]},
 {name:"projects",type:"folder",app:"projects",children:projects.map(p=>({name:p.id,type:"folder",app:`project:${p.id}`,children:[{name:"README.md",type:"file",app:`project:${p.id}`,content:p.summary}]}))},
 {name:"research",type:"folder",app:"research",children:[{name:"llm-iac-verification.md",type:"file",app:"research",content:"LLM-Assisted Security Verification of Infrastructure-as-Code\nStatus: Research Concept"}]},
 {name:"grecybersec",type:"folder",app:"grecybersec",children:[]},
 {name:"certifications",type:"folder",app:"certifications",children:certifications.map(name=>({name:name.replaceAll(" ","-").toLowerCase()+".pem",type:"file",app:"certifications",content:name}))},
 {name:"documents",type:"folder",children:[{name:"Mohammed-Almas-CV.pdf",type:"file",app:"cv",content:"CV file not yet installed."}]},
 {name:"contact.vcf",type:"file",app:"contact",content:`EMAIL:${profile.email}\nURL:${profile.linkedin}`} ] };
export function resolvePath(parts:string[]) { let cur=filesystem; for(const part of parts){const next=cur.children?.find(x=>x.name===part); if(!next) return undefined; cur=next;} return cur; }
export function flatten(node:VFile, base="/home/almas"): {path:string; file:VFile}[]{ const path=node===filesystem?base:`${base}/${node.name}`; return [{path,file:node},...(node.children?.flatMap(c=>flatten(c,path))??[])]; }
