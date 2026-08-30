import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mohammed Almas Akkalath | Cybersecurity & Digital Forensics",
  description: "Cybersecurity and Digital Forensics portfolio of Mohammed Almas Akkalath, University of Greenwich student, ISC² CC certified and President of GreCyberSec.",
  robots: { index: true, follow: true },
  openGraph: { title: "AMS-sec OS | Mohammed Almas Akkalath", description: "Interactive cybersecurity portfolio environment." }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

