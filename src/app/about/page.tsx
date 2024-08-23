import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo Profissional</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Desenvolvedor com experiência em React Native, ReactJS e NextJS,
          habilidades sólidas em HTML, CSS, JavaScript e TypeScript.
          Comunicativo e comprometido, cumpro prazos com eficiência.
          Familiarizado com metodologias ágeis como Scrum e ferramentas de
          versionamento como Git, GitHub e GitLab. Experiência em projetos
          mobile e web, tanto como colaborador de equipe quanto como autônomo.
          Em constante busca por evolução e aprimoramento profissional.
        </p>
      </CardContent>
    </Card>
  );
}
