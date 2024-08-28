import { Github, Linkedin, Mail } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  return (
    <header className="sticky top-0 z-10 ">
      <div className=" px-4 py-4 flex justify-between items-end">
        <h1 className="text-2xl font-bold">Monnuery Junior</h1>
        <div className="flex items-center gap-4">
          <div className=" flex items-center gap-3">
            <a
              href="https://github.com/santozxy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/monnuery-junior"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          </div>
          {/* <ToggleTheme /> */}
        </div>
      </div>
    </header>
  );
}
