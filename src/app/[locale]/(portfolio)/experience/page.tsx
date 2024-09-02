import { useTranslations } from "next-intl";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Particles from "@/components/particles";

export default function Component() {
  const t = useTranslations("experience");

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
          responsibilities: {
            title: t("job1.projects.project1.responsibilities.title"),
            description: t(
              "job1.projects.project1.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job1.projects.project1.technologies.title"),
            list: t.raw("job1.projects.project1.technologies.list"),
          },
          links: {
            playstore: t("job1.projects.project1.links.playstore"),
            appstore: t("job1.projects.project1.links.appstore"),
          },
        },
        {
          title: t("job1.projects.project2.title"),
          description: t("job1.projects.project2.description"),
          responsibilities: {
            title: t("responsibilities"),
            description: t(
              "job1.projects.project2.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job1.projects.project2.technologies.title"),
            list: t.raw("job1.projects.project2.technologies.list"),
          },
          links: {
            playstore: t("job1.projects.project2.links.playstore"),
            appstore: t("job1.projects.project2.links.appstore"),
          },
        },
        {
          title: t("job1.projects.project3.title"),
          description: t("job1.projects.project3.description"),
          responsibilities: {
            title: t("job1.projects.project3.responsibilities.title"),
            description: t(
              "job1.projects.project3.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job1.projects.project3.technologies.title"),
            list: t.raw("job1.projects.project3.technologies.list"),
          },
          links: {
            website: t("job1.projects.project3.links.website"),
          },
        },
        {
          title: t("job1.projects.project4.title"),
          description: t("job1.projects.project4.description"),
          responsibilities: {
            title: t("job1.projects.project4.responsibilities.title"),
            description: t(
              "job1.projects.project4.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job1.projects.project4.technologies.title"),
            list: t.raw("job1.projects.project4.technologies.list"),
          },
          links: {
            website: t("job1.projects.project4.links.website"),
          },
        },
        {
          title: t("job1.projects.project5.title"),
          description: t("job1.projects.project5.description"),
          responsibilities: {
            title: t("job1.projects.project5.responsibilities.title"),
            description: t(
              "job1.projects.project5.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job1.projects.project5.technologies.title"),
            list: t.raw("job1.projects.project5.technologies.list"),
          },
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
          responsibilities: {
            title: t("job3.projects.project1.responsibilities.title"),
            description: t(
              "job1.projects.project1.responsibilities.description"
            ),
          },
          technologies: {
            title: t("job3.projects.project1.technologies.title"),
            list: t.raw("job3.projects.project1.technologies.list"),
          },
          links: {
            website: t("job3.projects.project1.links.website"),
          },
        },
      ],
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div>
                  <h3 className="text-lg font-semibold">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.company} - {experience.period}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-2">{experience.description}</p>
                {experience.projects && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">
                      {experience.titleProjects}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {experience.projects.map((project, projectIndex) => (
                        <Sheet key={projectIndex}>
                          <SheetTrigger asChild>
                            <Button
                              variant="secondary"
                              className="w-full text-left bg-zinc-600 hover:bg-zinc-700 justify-start h-auto py-2"
                            >
                              {project.title}
                            </Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <Particles
                                className="absolute inset-0 -z-10 animate-fade-in"
                                quantity={150}
                              />
                              <SheetTitle>{project.title}</SheetTitle>
                              <SheetDescription>
                                {project.description}
                              </SheetDescription>
                            </SheetHeader>
                            <div className="mt-4">
                              <h5 className="font-semibold mb-1">
                                {project.responsibilities.title}
                              </h5>
                              <p className="text-sm">
                                {project.responsibilities.description}
                              </p>
                            </div>
                            <div className="mt-4">
                              <h5 className="font-semibold mb-1">
                                {project.technologies.title}
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.list.map(
                                  (tech: string) => (
                                    <Badge key={tech} variant="secondary">
                                      {tech}
                                    </Badge>
                                  )
                                )}
                              </div>
                            </div>
                            {project.links &&
                              Object.keys(project.links).length > 0 && (
                                <div className="mt-4">
                                  <h5 className="font-semibold mb-1">Links</h5>
                                  <div className="flex flex-wrap gap-2">
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
                          </SheetContent>
                        </Sheet>
                      ))}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
