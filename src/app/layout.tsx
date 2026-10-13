import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Morsalin Khan Noyon | Founder of Nexhardtech Power Ltd. & ECE Engineer",
  description:
    "Official portfolio of Md. Morsalin Khan Noyon — Founder & Managing Director of Nexhardtech Power Ltd., and Electronics & Communication Engineering (ECE) Student at the Institute of Science & Technology (IST).",
  keywords: [
    "Md. Morsalin Khan Noyon",
    "Noyon",
    "Nexhardtech Power Ltd",
    "ECE",
    "Institute of Science and Technology",
    "IST",
    "Electronics Engineer",
    "Hardware Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Md. Morsalin Khan Noyon" }],
  creator: "Md. Morsalin Khan Noyon",
  openGraph: {
    title: "Md. Morsalin Khan Noyon | Founder, Nexhardtech Power Ltd.",
    description:
      "Electronics & Communication Engineering Student at IST & Founder of Nexhardtech Power Ltd. Innovating next-gen power hardware and embedded technology.",
    type: "website",
    locale: "en_US",
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
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#08090A] text-white selection:bg-[#00FF88]/20 selection:text-[#00FF88] antialiased relative">
        <CustomCursor />
        <AmbientBackground />
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
