
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Code, Database, Users, Brain, Settings, BarChartBig, Zap, GitBranch, Layers, Smartphone } from "lucide-react"; // Added more icons

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: { name: string, icon?: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Natural Language Processing (NLP)" },
      { name: "Computer Vision (OpenCV)" },
      { name: "NumPy" },
      { name: "PyTorch" }, // Added from project tags
      { name: "TensorFlow" }, // Added from project tags
    ]
  },
  {
    name: "Web & Mobile Development",
    icon: <Zap className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Web Development (General)" },
      { name: "React Native" },
      // Add Next.js, React if proficient
    ]
  },
  {
    name: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
    ]
  },
  {
    name: "Other Tools & Concepts",
    icon: <Settings className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Data Structures & Algorithms (DSA)" }, // Added from project tags
      { name: "Arduino" }, // Added from project tags
      { name: "Git & Version Control" , icon: <GitBranch className="h-4 w-4 mr-1 inline"/>},
    ]
  },
  {
    name: "Soft Skills",
    icon: <Users className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Teamwork" },
      { name: "Leadership" },
      { name: "Problem Solving" },
      { name: "Communication" },
    ]
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.name} className="bg-card text-card-foreground shadow-lg animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                {category.icon}
                <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center text-muted-foreground text-sm">
                      {skill.icon ? skill.icon : <Zap className="h-4 w-4 mr-2 text-primary/70" />} 
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
