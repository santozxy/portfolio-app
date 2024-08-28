import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "DESENVOLVEDOR FRONT END PLENO",
      company: "Syslae Solutions",
      location: "Teresina, Piauí",
      period: "10/2023 - atual",
      description:
        "Criação de aplicações web e aplicativos móveis utilizando as tecnologias: ReactJS, NextJS, React Native, Typescript, Javascript, Scrum, Figma, tendo Git, Gitlab e Github como ferramentas de versionamento. Responsável pela manutenção, gerenciamento de versões, publicação de Apps Android e IOS e suporte aos usuários.",
      projects: [
        {
          title: "Sistema de Gestão de Projetos",
          description:
            "Desenvolvimento de um sistema de gestão de projetos para a empresa, utilizando as tecnologias: ReactJS, NextJS, Typescript, Javascript, Scrum, Figma, Git, Gitlab e Github.",
        },
        {
          title: "Aplicativo de Delivery",
          description:
            "Desenvolvimento de um aplicativo de delivery para um restaurante local, utilizando as tecnologias: React Native, Typescript, Javascript, Scrum, Figma, Git, Gitlab e Github.",
        },
      ],
    },
    {
      title: "DESENVOLVEDOR FRONT END",
      company: "Autônomo",
      location: "Teresina, Piauí",
      period: "11/2022 - atual",
      description:
        "Como freelancer, trabalho como desenvolvedor Front-End utilizando as tecnologias: HTML, CSS, SASS, SCSS, JavaScript, Typescript, ReactJS, React Native com foco em criação de: Apps, Landing Pages, Web Sites, Design Mobile e Web.",
    },
    {
      title: "DESENVOLVEDOR FRONT-END - ESTÁGIO",
      company: "Tribunal Regional Eleitoral do Piauí",
      location: "Teresina, Piauí",
      period: "05/2023 - 01/2024",
      description:
        "Desenvolvimento de Aplicações Web, Manutenção e Implementações de Projetos Internos utilizando as tecnologias: HTML, SCSS, Angular 15+, ReactJS, React Native, TypeScript, Javascript e Git | Gitlab como ferramentas de versionamento.",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Experiência Profissional</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {experiences.map((experience, index) => (
            <li key={index} className="p-4 rounded-md border-b">
              <h4 className="font-semibold">{experience.title}</h4>

              <p className="text-sm text-gray-500">
                {experience.company}, {experience.location} |{" "}
                {experience.period}
              </p>
              <p className="mt-2">{experience.description}</p>
              <ul className="mt-2 ml-4 space-y-2 list-disc">
                {experience.projects?.map((project, index) => (
                  <li key={index}>
                    <h5 className="font-semibold">{project.title}</h5>
                    <p>{project.description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
