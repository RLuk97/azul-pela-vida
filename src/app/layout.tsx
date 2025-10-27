import type { Metadata } from "next";
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
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
