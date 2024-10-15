import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: ["400", "700"] });

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "SB2 Drink – Você na sua melhor forma – Monetizze – SB2 Drink – Solução Solúvel para Emagrecimento Rápido e Saudável",
  description:
    "SB2 Drink – Você na sua melhor forma – Monetizze – SB2 Drink – Solução Solúvel para Emagrecimento Rápido e Saudável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistMono.variable} font-sans`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
