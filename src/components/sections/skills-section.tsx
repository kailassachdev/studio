
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Code, Database, Users, Brain, Settings, BarChartBig } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const skillsList: Skill[] = [
  {
    name: "Python",
    icon: <Code className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A versatile, high-level language prized for its readability and vast ecosystem.\nIt excels in web development, data science, AI, and automation.\nIts simple syntax lowers the barrier to entry for new programmers.\nSupports multiple programming paradigms for flexible development."
  },
  {
    name: "Machine Learning",
    icon: <Brain className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "Enables systems to learn from data and improve without explicit programming.\nUtilizes algorithms to identify patterns, make predictions, and inform decisions.\nPowers applications like recommendation engines, image recognition, and NLP.\nA cornerstone technology for building intelligent, adaptive software solutions."
  },
  {
    name: "NumPy",
    icon: <BarChartBig className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A fundamental Python library for numerical computing, providing powerful array objects.\nOffers comprehensive mathematical functions and tools for data manipulation.\nEssential for scientific computing, data analysis, and machine learning tasks.\nOptimized for performance, enabling efficient operations on large datasets."
  },
  {
    name: "Deep Learning",
    icon: <Cpu className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A subset of machine learning using neural networks with many layers (deep architectures).\nExcels at complex tasks like image and speech recognition, and natural language understanding.\nRequires large datasets and significant computational power for training models.\nDrives advancements in AI, enabling human-like performance in various domains."
  },
  {
    name: "Natural Language Processing (NLP)",
    icon: <Settings className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "Focuses on enabling computers to understand, interpret, and generate human language.\nInvolves techniques like sentiment analysis, machine translation, and text summarization.\nPowers chatbots, voice assistants, and tools for analyzing large text corpora.\nBridging the gap between human communication and computer understanding."
  },
  {
    name: "HTML",
    icon: <Code className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "The standard markup language for creating the structure of web pages and web applications.\nUses tags to define elements like headings, paragraphs, images, and links.\nForms the foundational layer of most websites, working alongside CSS and JavaScript.\nEssential for anyone involved in front-end web development and content creation."
  },
  {
    name: "MySQL",
    icon: <Database className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A popular open-source relational database management system (RDBMS) using SQL.\nKnown for its reliability, scalability, and ease of use in various applications.\nStores data in structured tables, allowing for efficient querying and data integrity.\nWidely adopted for web applications, e-commerce platforms, and data warehousing."
  },
  {
    name: "Teamwork",
    icon: <Users className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "The collaborative effort of a group to achieve a common goal or complete a task effectively.\nInvolves communication, mutual respect, shared responsibility, and conflict resolution.\nCrucial for success in complex projects, fostering innovation and diverse perspectives.\nEnhances productivity, morale, and the overall quality of outcomes in any setting."
  },
  {
    name: "MongoDB",
    icon: <Database className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A NoSQL document-oriented database that stores data in flexible, JSON-like documents.\nOffers scalability and flexibility, ideal for applications with evolving data structures.\nSupports dynamic schemas, allowing for easier integration of diverse data types.\nPopular for modern web applications, big data, and real-time data processing."
  },
  {
    name: "C++/Java",
    icon: <Code className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "C++ and Java are powerful, object-oriented languages widely used in system and app development.\nC++ offers high performance and low-level memory manipulation, great for games and OS.\nJava is platform-independent ('write once, run anywhere'), excelling in enterprise applications.\nBoth possess strong typing, extensive libraries, and large developer communities."
  },
  {
    name: "OpenCV",
    icon: <Cpu className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "An open-source computer vision and machine learning software library with many algorithms.\nProvides tools for image and video processing, object detection, and feature extraction.\nWidely used in robotics, augmented reality, medical imaging, and autonomous vehicles.\nSupports multiple programming languages, including Python, C++, and Java."
  },
  {
    name: "React Native",
    icon: <Code className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "A JavaScript framework for building natively rendering mobile applications for iOS and Android.\nAllows developers to use React along with native platform capabilities for rich UIs.\nPromotes code reusability across platforms, speeding up development cycles.\nBacked by Facebook, it has a large community and a growing ecosystem of libraries."
  },
  {
    name: "Web Development",
    icon: <Code className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "Encompasses the design, creation, and maintenance of websites and web applications.\nInvolves front-end (user interface) and back-end (server-side logic) technologies.\nUtilizes languages like HTML, CSS, JavaScript, and various frameworks and databases.\nA dynamic field constantly evolving with new tools, trends, and best practices."
  },
  {
    name: "Leadership",
    icon: <Users className="mr-2 h-5 w-5 text-primary group-hover:text-accent" />,
    description: "The ability to inspire, guide, and motivate individuals or groups towards achieving a common vision.\nInvolves setting clear goals, making decisions, and fostering a positive, productive environment.\nRequires strong communication, empathy, strategic thinking, and problem-solving skills.\nEssential for driving change, managing teams, and achieving organizational success."
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <Card className="max-w-4xl mx-auto bg-card text-card-foreground shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsList.map((skill) => (
              <div
                key={skill.name}
                tabIndex={0} // For keyboard accessibility
                className="skill-item group relative cursor-default rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground 
                           transition-all duration-300 ease-in-out 
                           hover:bg-background/80 hover:backdrop-blur-md hover:border hover:border-border/30
                           hover:shadow-2xl hover:w-72 hover:min-h-48 hover:rounded-xl hover:p-4 
                           hover:flex hover:flex-col hover:items-start hover:text-foreground
                           focus:bg-background/80 focus:backdrop-blur-md focus:border focus:border-border/30
                           focus:shadow-2xl focus:w-72 focus:min-h-48 focus:rounded-xl focus:p-4 
                           focus:flex focus:flex-col focus:items-start focus:text-foreground outline-none ring-primary focus:ring-2"
              >
                <div className="skill-header flex items-center w-full transition-all duration-300 ease-in-out group-hover:mb-2">
                  {skill.icon}
                  <span className="skill-name font-semibold text-base transition-all duration-300 ease-in-out group-hover:text-xl group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
                <div className="skill-description-wrapper w-full opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:max-h-60">
                  <p className="text-sm text-foreground/80 leading-relaxed pt-1">
                    {skill.description.split('\n').map((line, i, arr) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
