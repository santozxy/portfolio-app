import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black">
      <div className="my-16 animate-fade-in">
        <h2 className="text-base duration-500 text-zinc-500 hover:text-zinc-300">
          Welcome to my portfólio
        </h2>
      </div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Monnuery Júnior
      </h1>
      <Link
        href="/about"
        className="my-16 flex items-center gap-4 text-center animate-fade-in duration-500  hover:text-zinc-300 p-3  rounded-md bg-gradient-to-tl from-zinc-800 via-zinc-600/20 to-zinc-800/20 hover:animate-pulse"
      >
        <h2>Discover now</h2>
        <Rocket className="h-6 w-6 hover:animate-pulse " />
      </Link>
    </div>
  );
}
