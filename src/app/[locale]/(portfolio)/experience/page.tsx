import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Component() {
  const t = useTranslations("experience");
  console.log(t.raw("job1.projects.project1.technologies.list"));
  const experiences = [
    {
      title: t("job1.title"),
      company: t("job1.company"),
      period: t("job1.period"),
      description: t("job1.description"),
      titleProjects: t("job1.projects.title"),
      projects: [
        {
          title: t("job1.projects.project1.title"),
          description: t("job1.projects.project1.description"),
          responsibilities: t("job1.projects.project1.responsibilities"),
          technologies: t
            .raw("job1.projects.project1.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            playstore: t("job1.projects.project1.links.playstore"),
            appstore: t("job1.projects.project1.links.appstore"),
          },
        },
        {
          title: t("job1.projects.project2.title"),
          description: t("job1.projects.project2.description"),
          responsibilities: t("job1.projects.project2.responsibilities"),
          technologies: t
            .raw("job1.projects.project2.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            playstore: t("job1.projects.project2.links.playstore"),
            appstore: t("job1.projects.project2.links.appstore"),
          },
        },
        {
          title: t("job1.projects.project3.title"),
          description: t("job1.projects.project3.description"),
          responsibilities: t("job1.projects.project3.responsibilities"),
          technologies: t
            .raw("job1.projects.project3.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            website: t("job1.projects.project3.links.website"),
          },
        },
        {
          title: t("job1.projects.project4.title"),
          description: t("job1.projects.project4.description"),
          responsibilities: t("job1.projects.project4.responsibilities"),
          technologies: t
            .raw("job1.projects.project4.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            website: t("job1.projects.project4.links.website"),
          },
        },
        {
          title: t("job1.projects.project5.title"),
          description: t("job1.projects.project5.description"),
          responsibilities: t("job1.projects.project5.responsibilities"),
          technologies: t
            .raw("job1.projects.project5.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            website: t("job1.projects.project5.links.website"),
          },
        },
      ],
    },
    {
      title: t("job2.title"),
      company: t("job2.company"),
      period: t("job2.period"),
      description: t("job2.description"),
      titleProjects: t("job2.projects.title"),
    },
    {
      title: t("job3.title"),
      company: t("job3.company"),
      period: t("job3.period"),
      description: t("job3.description"),
      titleProjects: t("job3.projects.title"),
      projects: [
        {
          title: t("job3.projects.project1.title"),
          description: t("job3.projects.project1.description"),
          responsibilities: t("job3.projects.project1.responsibilities"),
          technologies: t
            .raw("job3.projects.project1.technologies.list")
            .map((technology: string) => (
              <Badge key={technology}>{technology}</Badge>
            )),
          links: {
            website: t("job3.projects.project1.links.website"),
          },
        },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {experiences.map((experience, index) => (
            <li key={index} className="p-4 rounded-md border">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <p className="text-sm text-muted-foreground">
                {experience.company} - {experience.period}
              </p>
              <p className="mt-2">{experience.description}</p>
              {experience.projects && (
                <Accordion type="single" collapsible className="w-full mt-4">
                  {experience.projects.map((project, projectIndex) => (
                    <AccordionItem
                      key={projectIndex}
                      value={`project-${index}-${projectIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        <h4 className="font-semibold">{project.title}</h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mt-2 text-sm">{project.description}</p>
                        <p className="mt-2 text-sm">
                          <strong>Responsibilities:</strong>{" "}
                          {project.responsibilities}
                        </p>
                        <div className="mt-2">
                          <strong className="text-sm">Technologies:</strong>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.technologies}
                          </div>
                        </div>
                        {project.links && (
                          <div className="mt-2">
                            <strong className="text-sm">Links:</strong>
                            <div className="flex gap-2 mt-1">
                              {Object.entries(project.links).map(
                                ([key, value]) =>
                                  value && (
                                    <Link
                                      key={key}
                                      href={value}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center text-sm text-primary hover:underline"
                                    >
                                      {key.charAt(0).toUpperCase() +
                                        key.slice(1)}
                                      <ExternalLink className="w-4 h-4 ml-1" />
                                    </Link>
                                  )
                              )}
                            </div>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
