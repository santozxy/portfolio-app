import { Progress } from "@/components/ui/progress";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";

export function Skills() {
  const skills = [
    {
      title: "React Native",
    },
    { title: "ReactJS" },
    { title: "NextJS" },
    { title: "TypeScript" },
    { title: "Tanstack React Query" },
    { title: "Redux Toolkit, Zustand" },
    { title: "Shadcn UI, Radix, TailwindCSS" },
    { title: "CSS, SCSS, SASS" },
    { title: "UI UX Designer | Figma" },
    { title: "Agile, Scrum" },
    { title: "Git, GitHub e GitLab" },
    { title: "Facilidade de Comunicação" },
    { title: "Pensamento Analítico" },
    { title: "Cumprimento de Prazos" },
    { title: "Aprendizado Contínuo" },
    { title: "Resiliência " },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Habilidades e Competências</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-muted rounded-md p-2 text-center"
            >
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
