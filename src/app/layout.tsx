import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Particles from "@/components/particles";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "monnuery.vercel.app",
    template: "%s | monnuery.vercel.app",
  },
  description: "Monnuery Júnior's personal website",
  openGraph: {
    title: "monnuery.vercel.app",
    description: "Monnuery Júnior's personal website",
    url: "https://monnuery.vercel.app",
    siteName: "monnuery.vercel.app",
    images: [
      {
        url: "https://monnuery.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
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
