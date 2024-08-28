"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      const segments = pathname.split("/").filter(Boolean);
      segments[0] = nextLocale;
      const newPathname = `/${segments.join("/")}`;
      router.push(newPathname);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-6 w-6  text-muted-foreground" aria-hidden="true" />
      <Select
        defaultValue={locale}
        onValueChange={onLocaleChange}
        disabled={isPending}
      >
        <SelectTrigger
          className="sm:w-[130px] bg-opacity-10 bg-gradient-to-tl from-black via-zinc-700/30 to-zinc-900 "
          aria-label={t("changeLanguage")}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-opacity-10 bg-gradient-to-tl from-black via-zinc-700/30 to-zinc-900 ">
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="pt">{t("portuguese")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}