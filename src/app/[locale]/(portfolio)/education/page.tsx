import { Progress } from "@/components/ui/progress";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Education",
  description: "My education",
};

export default function Education() {
  const t = useTranslations("education");
  const educations = [
    {
      title: t("degree1.title"),
      institution: t("degree1.institution"),
      period: t("degree1.period"),
      progress: 60,
    },
    {
      title: t("degree2.title"),
      institution: t("degree2.institution"),
      period: t("degree2.period"),
      progress: 90,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {educations.map((education, index) => (
            <li key={index} className="bg-secondary/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-1">{education.title}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {education.institution} • {education.period}
              </p>
              <div className="flex items-center gap-2">
                <Progress value={education.progress} className="flex-grow" />
                <span className="text-sm font-medium">
                  {education.progress}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
