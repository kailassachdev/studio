
"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  longDescription: string;
  liveLink?: string;
  repoLink?: string;
  dates?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "AI Personal Protection Detection",
    description: "Used object detection for personal safety analysis.",
    tags: ["OpenCV", "TensorFlow"],
    longDescription: "Developed an AI system using OpenCV and TensorFlow for object detection, specifically focusing on personal safety equipment analysis in various environments.",
    liveLink: undefined,
    repoLink: undefined,
    dates: "Feb 2023 - Mar 2023",
  },
  {
    id: "2",
    title: "Library Management System",
    description: "Efficient and searchable system designed using Java and DSA concepts.",
    tags: ["Java", "DSA"],
    longDescription: "Created a comprehensive library management system focusing on efficiency and searchability. The system was designed using core Java principles and Data Structures & Algorithms (DSA) concepts for optimal performance.",
    liveLink: undefined,
    repoLink: undefined,
    dates: "Nov 2023",
  },
  {
    id: "3",
    title: "AI Sign Language Detection",
    description: "Trained a deep learning model to recognize static ISL signs for real-time gesture translation.",
    tags: ["OpenCV", "ML", "DL"],
    longDescription: "This project involved training a deep learning model with OpenCV to recognize static Indian Sign Language (ISL) signs, enabling real-time gesture translation to improve accessibility.",
    liveLink: undefined,
    repoLink: undefined,
    dates: "Dec 2024 - Mar 2025",
  },
   {
    id: "4",
    title: "AI Garbage Detection",
    description: "Built a waste image classifier using machine learning and vision algorithms to promote environmental sustainability.",
    tags: ["Computer Vision", "PyTorch"],
    longDescription: "Developed a waste image classifier leveraging machine learning and computer vision algorithms with PyTorch. The system aims to promote environmental sustainability by automating garbage detection and classification.",
    liveLink: undefined,
    repoLink: undefined,
    dates: "Feb 2024 - Apr 2025",
  },
  {
    id: "5",
    title: "AI Traffic Density and Violation Detection System",
    description: "Ongoing project to develop an AI system for traffic monitoring.",
    tags: ["Arduino", "ML", "DL"],
    longDescription: "Currently building an AI-powered system using Arduino, Machine Learning (ML), and Deep Learning (DL) for real-time traffic density analysis and violation detection.",
    liveLink: undefined,
    repoLink: undefined,
    dates: "Apr 2025 - Present",
  },
];

export default function InteractivePortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="bg-background/80 backdrop-blur-md border border-border/30 text-foreground shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              {item.dates && <CardDescription className="text-sm text-muted-foreground">{item.dates}</CardDescription>}
              <CardDescription className="text-foreground/90 pt-1">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setSelectedItem(item)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="sm:max-w-[625px] bg-background text-foreground border-border">
            <DialogHeader>
              <DialogTitle className="text-3xl text-primary">{selectedItem.title}</DialogTitle>
               {selectedItem.dates && <p className="text-sm text-muted-foreground -mt-1">{selectedItem.dates}</p>}
              <DialogDescription className="text-muted-foreground pt-2">
                {selectedItem.longDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="my-4">
              <h4 className="font-semibold mb-2 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <DialogFooter className="sm:justify-start gap-2">
              {selectedItem.liveLink && (
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <a href={selectedItem.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {selectedItem.repoLink && (
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.5s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
}
