"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Code, Database, Users, Brain, Settings, BarChartBig } from "lucide-react"; // Example icons

const skillsList = [
  { name: "Python", icon: <Code className="mr-1 h-4 w-4" /> },
  { name: "Machine Learning", icon: <Brain className="mr-1 h-4 w-4" /> },
  { name: "NumPy", icon: <BarChartBig className="mr-1 h-4 w-4" /> },
  { name: "Deep Learning", icon: <Cpu className="mr-1 h-4 w-4" /> },
  { name: "Natural Language Processing (NLP)", icon: <Settings className="mr-1 h-4 w-4" /> },
  { name: "HTML", icon: <Code className="mr-1 h-4 w-4" /> },
  { name: "MySQL", icon: <Database className="mr-1 h-4 w-4" /> },
  { name: "Teamwork", icon: <Users className="mr-1 h-4 w-4" /> },
  { name: "MongoDB", icon: <Database className="mr-1 h-4 w-4" /> },
  { name: "C++/Java", icon: <Code className="mr-1 h-4 w-4" /> },
  { name: "OpenCV", icon: <Cpu className="mr-1 h-4 w-4" /> },
  { name: "React Native", icon: <Code className="mr-1 h-4 w-4" /> },
  { name: "Web Development", icon: <Code className="mr-1 h-4 w-4" /> },
  { name: "Leadership", icon: <Users className="mr-1 h-4 w-4" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <Card className="max-w-3xl mx-auto bg-card text-card-foreground shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsList.map((skill) => (
              <Badge 
                key={skill.name} 
                variant="secondary" 
                className="text-base px-4 py-2 bg-secondary/80 hover:bg-secondary text-secondary-foreground transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {skill.icon}
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
