import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azul Pela Vida — Novembro Azul",
  description:
    "Conscientização sobre o câncer de próstata. Deixe sua mensagem de apoio e incentivo.",
  openGraph: {
    title: "Azul Pela Vida — Novembro Azul",
    description:
      "Conscientização sobre o câncer de próstata. Deixe sua mensagem de apoio e incentivo.",
    url: "https://azul-pela-vida.example",
    siteName: "Azul Pela Vida",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function getTickerDuration(): string {
    const raw = process.env.NEXT_PUBLIC_TICKER_DURATION ?? process.env.TICKER_DURATION;
    if (!raw) return "185s";
    const v = String(raw).trim().toLowerCase();
    if (/^\d+(\.\d+)?$/.test(v)) return `${v}s`;
    if (/^\d+(\.\d+)?s$/.test(v)) return v;
    if (/^\d+(\.\d+)?ms$/.test(v)) {
      const ms = parseFloat(v.replace("ms", ""));
      const sec = ms / 1000;
      return `${sec}s`;
    }
    return "185s";
  }

  const tickerDuration = getTickerDuration();
  const cssVars: CSSProperties = { ["--ticker-duration" as any]: tickerDuration };
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={cssVars}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
