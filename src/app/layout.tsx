import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prakash-rajendran.com"),
  title: "Prakash Rajendran | Deputy Manager – CRE Operations & AI Automation",
  description:
    "Official portfolio of Prakash Rajendran, Deputy Manager of Commercial Real Estate Operations at RECAM SOLUTIONS PVT LTD. 8+ years experience in multilingual lease abstraction, SLA governance, and Claude-powered AI document automation.",
  keywords: [
    "Prakash Rajendran",
    "Deputy Manager",
    "Lease Abstraction",
    "Commercial Real Estate",
    "CRE Operations",
    "RECAM SOLUTIONS",
    "Anthropic Claude Certified",
    "Multilingual Lease Review",
    "Quality Control SLA",
  ],
  authors: [{ name: "Prakash Rajendran" }],
  openGraph: {
    title: "Prakash Rajendran | Deputy Manager – CRE Operations & AI Automation",
    description:
      "8+ years leading commercial real estate lease abstraction, SLA governance, and Claude AI document intelligence.",
    url: "https://prakash-rajendran.com",
    siteName: "Prakash Rajendran Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/prakash-rajendran.jpg",
        width: 800,
        height: 1000,
        alt: "Prakash Rajendran - Deputy Manager, Commercial Real Estate & Operations",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#070a12] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
        {children}
      </body>
    </html>
  );
}
