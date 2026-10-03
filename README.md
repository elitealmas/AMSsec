# AMS-sec OS

An interactive, fully static cybersecurity portfolio for Mohammed Almas Akkalath. It presents a current professional profile and SOC projects through a browser-based AMS-sec OS desktop as well as a recruiter-friendly view at `/recruiter`.

## Stack

Next.js, React, TypeScript, Framer Motion, Lucide icons, and CSS. There are no backends, accounts, databases, or server actions.

## Data and customization

All professional data is centralised in `src/data/portfolio.ts`. Add or edit one project object in `projects` and it automatically appears in Case Files, Recruiter Mode, and the terminal. The shared virtual filesystem is in `src/data/filesystem.ts`; it powers both File Manager and terminal navigation.

All six SOC projects currently have an `In Progress` status. The first four use `featured: true`. Add a real `repository` URL to a project when it becomes available; repository controls remain disabled while that value is absent. Update status only when supported by the implementation and documentation.

No CV PDF is currently included. Both views explain its availability and offer email contact. When adding one, place the PDF under `public/documents/` and update the CV controls in `Desktop.tsx`, `Recruiter.tsx` and the virtual filesystem together. Desktop apps are registered in `src/components/Desktop.tsx`; recruiter styles are scoped in `src/components/Recruiter.css`.

The original GitHub, LinkedIn and GreCyberSec links are preserved. The desktop retains its launcher, file manager, terminal, window controls and boot options. Motion respects the device's reduced motion setting and there are no sound effects.

## Run and deploy

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The project uses static export (`output: "export"`) and can be deployed to Vercel or any static host from the generated `out/` folder.

The existing `lint` script runs the TypeScript checker; this project does not configure a separate ESLint task. Check both `/` and `/recruiter` on desktop and mobile after content or layout changes.

