# AmsSec OS

An interactive, fully static cybersecurity portfolio for Mohammed Almas Akkalath. It presents portfolio evidence through a browser-based AmsSec OS desktop as well as a clean recruiter-friendly view at `/recruiter`.

## Stack

Next.js, React, TypeScript, Framer Motion, Lucide icons, and CSS. There are no backends, accounts, databases, or server actions.

## Data and customization

All professional data is centralised in `src/data/portfolio.ts`. Add or edit one project object in `projects` and it automatically appears in Case Files, Recruiter Mode, and the terminal. The shared virtual filesystem is in `src/data/filesystem.ts`; it powers both File Manager and terminal navigation.

Set a CV URL/path in the portfolio data and place the PDF under `public/documents/` when it is ready. Desktop apps are registered in `src/components/Desktop.tsx`.

## Run and deploy

```bash
npm install
npm run dev
npm run build
```

The project uses static export (`output: "export"`) and can be deployed to Vercel or any static host from the generated `out/` folder.
