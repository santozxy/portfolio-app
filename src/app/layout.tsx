import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Particles from "@/components/particles";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "monnuery.dev",
    template: "%s",
  },
  description: "Monnuery Júnior's personal website",
  openGraph: {
    title: "Monnuery Junior - Front-End Developer",
    description:
      "Discover Monnuery Junior's portfolio and his professional experience as a front-end specialist",
    url: "https://monnuery.dev",
    siteName: "monnuery.dev",
    images: [
      {
        url: "https://monnuery.dev/og.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "monnuery.vercel.app",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
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
