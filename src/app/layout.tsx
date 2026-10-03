import type { Metadata } from "next";
import "./globals.css";

const title = "Mohammed Almas Akkalath | Cybersecurity Portfolio";
const description = "Cybersecurity and Digital Forensics student focused on SOC operations, threat detection, incident response, digital forensics and security monitoring.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
    siteName: "Mohammed Almas Akkalath | AMS-sec",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
