import { ArrowLeft, Github, Linkedin } from "lucide-react";
import {Link} from "@/routing";

import { NextIntlClientProvider, useMessages } from "next-intl";
import { LocaleSwitcher } from "./locale-switcher";
export function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className=" px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <ArrowLeft size={20} />
          <h1 className="max-sm:hidden text-2xl font-bold">Monnuery Junior</h1>
          <h1 className="sm:hidden font-bold">Monnuery.J</h1>
        </Link>
        <div className="flex items-center gap-4">
          <NextIntlClientProvider messages={useMessages()}>
            <LocaleSwitcher />
          </NextIntlClientProvider>
          <div className=" flex items-center gap-3">
            <Link
              href="https://github.com/santozxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6  text-muted-foreground" />
            </Link>
            <Link
              href="https://linkedin.com/in/monnuery-junior"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6  text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
