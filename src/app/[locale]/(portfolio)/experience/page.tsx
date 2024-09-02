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

export default function Experience() {
  const t = useTranslations("experiences");

  const experiences = t.raw("jobs") as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    projects?: Array<{
      finalized: boolean;
      type: string;
      title: string;
      description: string;
      responsibilities: string;
      technologies: string[];
      links: Record<string, string>;
    }>;
  }>;

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
                {experience.projects && experience.projects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">{t("titleProjects")}</h4>
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
                                {t("titleResponsibilities")}
                              </h5>
                              <p className="text-sm">{project.responsibilities}</p>
                            </div>
                            <div className="mt-4">
                              <h5 className="font-semibold mb-1">
                                {t("titleTechnologies")}
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {project.links && Object.keys(project.links).length > 0 && (
                              <div className="mt-4">
                                <h5 className="font-semibold mb-1">
                                  {t("titleLinks")}
                                </h5>
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
                                          {key.charAt(0).toUpperCase() + key.slice(1)}
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