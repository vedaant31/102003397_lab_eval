import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display"
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial"
});

export const metadata: Metadata = {
  title: "Salesforce + AI Automation Engineer | Portfolio",
  description:
    "Startup-style portfolio landing page for an AI & Salesforce automation engineer helping teams reduce manual work and accelerate revenue.",
  metadataBase: new URL("https://your-domain.vercel.app"),
  openGraph: {
    title: "Salesforce + AI Automation Engineer",
    description:
      "Automate support, sales workflows, and integrations with AI + Salesforce systems.",
    type: "website"
  },
  keywords: [
    "Salesforce Automation",
    "AI Automation Engineer",
    "n8n integrations",
    "Revenue Operations"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
