import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Experience 🖥️",
  description: "My experience 🧑🏽‍💻",
};

export default function Experience() {
  const t = useTranslations("experience");
  const experiences = [
    {
      title: t("job1.title"),
      company: t("job1.company"),
      period: t("job1.period"),
      description: t("job1.description"),
    },
    {
      title: t("job2.title"),
      company: t("job2.company"),
      period: t("job2.period"),
      description: t("job2.description"),
    },
    {
      title: t("job3.title"),
      company: t("job3.company"),
      period: t("job3.period"),
      description: t("job3.description"),
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {experiences.map((experience, index) => (
            <li key={index} className="p-4 rounded-md border-b">
              <h4 className="font-semibold">{experience.title}</h4>

              <p className="text-sm text-gray-500">
                {experience.company} - {experience.period}
              </p>
              <p className="mt-2">{experience.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
