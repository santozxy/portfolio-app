import {Link} from "@/routing";
import React from "react";
import { Rocket } from "lucide-react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Home() {
  const t = useTranslations("indexPage");
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800/20 to-black">
      <div className="absolute top-4 right-4">
      <NextIntlClientProvider messages={useMessages()}>
        <LocaleSwitcher />
      </NextIntlClientProvider>
      </div>
      <div className="my-16 animate-fade-in">
        <h2 className="text-base duration-500 text-zinc-500 hover:text-zinc-300">
          {t("messageWelcome")}
        </h2>
      </div>
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Monnuery Júnior
      </h1>
      <Link
        href="/about"
        className="my-16 flex items-center gap-4 text-center animate-fade-in duration-500  hover:text-zinc-300 p-3  rounded-md bg-gradient-to-tl from-zinc-800 via-zinc-600/20 to-zinc-800/20 hover:animate-pulse"
      >
        <h2>{t("buttonDiscover")}</h2>
        <Rocket className="h-6 w-6 hover:animate-pulse " />
      </Link>
    </div>
  );
}
