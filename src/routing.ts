import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["en", "pt", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
