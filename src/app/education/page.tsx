import { Progress } from "@radix-ui/react-progress";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formação</CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">Graduação</h4>
        <ul className="space-y-2">
          <li>
            <div className="flex justify-between mb-1">
              <span>Engenharia de Computação</span>
              <span>2018 - 2023</span>
            </div>
            <Progress value={80} className="w-full" />
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
