"use client";
import { useLocale } from "next-intl";
import {Link} from "@/routing";
import { usePathname } from "next/navigation";
import React from "react";

export function Nav() {
  const path = usePathname();
  const locale = useLocale();
  const links = [
    { href: "/about", text: locale === "en" ? "About" : "Sobre" },
    {
      href: "/experience",
      text: locale === "en" ? "Experience" : "Experiência",
    },
    { href: "/education", text: locale === "en" ? "Education" : "Formação" },
  ];
  const active =
    "bg-gradient-to-tl from-zinc-800 via-zinc-600/20 to-zinc-800/20 hover:animate-pulse";
  return (
    <nav className=" flex items-center sm:gap-6 ">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center gap-4 text-center animate-fade-in duration-500  hover:text-zinc-300 p-3 rounded-md ${
            path.includes(link.href) ? active : ""
          }`}
        >
          <h2>{link.text}</h2>
        </Link>
      ))}
    </nav>
  );
}
