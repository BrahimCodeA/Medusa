import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cinzel_Decorative } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEDUSA",
  description: "Restaurant MEDUSA — Paris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} ${cinzel.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
