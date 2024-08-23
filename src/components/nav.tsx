"use client";
import { BriefcaseBusinessIcon, GraduationCap, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Nav() {
  const path = usePathname();
  return (
    <nav className=" flex items-center gap-6 mt-10">
      <div className="flex items-center gap-2">
        <User size={20} />
        <Link href="/about">Sobre</Link>
      </div>
      <div className="flex items-center gap-2">
        <BriefcaseBusinessIcon size={20} />
        <Link href="/experience">Experiência</Link>
      </div>
      <div className="flex items-center gap-2">
        <GraduationCap size={20} />
        <Link href="/education">Formação</Link>
      </div>
    </nav>
  );
}
