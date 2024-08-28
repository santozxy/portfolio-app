import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Particles from "@/components/particles";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Monnuery Junior's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={plusJakartaSans.className}>
      <body className="antialiased dark">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={150}
        />
        {children}
      </body>
    </html>
  );
}
