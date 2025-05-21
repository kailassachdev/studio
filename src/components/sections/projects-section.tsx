
"use client";

import { useState } from 'react';
import Image from 'next/image'; // Added import
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  longDescription: string;
  imageUrl?: string; // Added
  dataAiHint?: string; // Added
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
    dates: "Feb 2023 - Mar 2023",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "safety gear",
  },
  {
    id: "2",
    title: "Library Management System",
    description: "Efficient and searchable system designed using Java and DSA concepts.",
    tags: ["Java", "DSA"],
    longDescription: "Created a comprehensive library management system focusing on efficiency and searchability. The system was designed using core Java principles and Data Structures & Algorithms (DSA) concepts for optimal performance.",
    dates: "Nov 2023",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "library books",
  },
  {
    id: "3",
    title: "AI Sign Language Detection",
    description: "Trained a deep learning model to recognize static ISL signs for real-time gesture translation.",
    tags: ["OpenCV", "ML", "DL"],
    longDescription: "This project involved training a deep learning model with OpenCV to recognize static Indian Sign Language (ISL) signs, enabling real-time gesture translation to improve accessibility.",
    dates: "Dec 2024 - Mar 2025",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "hand signs",
  },
   {
    id: "4",
    title: "AI Garbage Detection",
    description: "Built a waste image classifier using machine learning and vision algorithms to promote environmental sustainability.",
    tags: ["Computer Vision", "PyTorch"],
    longDescription: "Developed a waste image classifier leveraging machine learning and computer vision algorithms with PyTorch. The system aims to promote environmental sustainability by automating garbage detection and classification.",
    dates: "Feb 2024 - Apr 2025",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "waste recycling",
  },
  {
    id: "5",
    title: "AI Traffic Density & Violation Detection",
    description: "Developed an AI system for traffic monitoring.",
    tags: ["Arduino", "ML", "DL"],
    longDescription: "Built an AI-powered system using Arduino, Machine Learning (ML), and Deep Learning (DL) for real-time traffic density analysis and violation detection.",
    dates: "Apr 2025 - May 2025",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "traffic jam",
  },
  {
    id: "6",
    title: "Cansat",
    description: "Developed a Cansat which determines temp and humid at a specific altitude.",
    tags: ["Arduino", "Esp32"],
    longDescription: "Developed a Cansat which determines temperature and humidity at a specific altitude using Arduino and Esp32.",
    dates: "Mar 2025",
    imageUrl: "https://placehold.co/640x360.png",
    dataAiHint: "satellite space",
  },
];

export default function ProjectsSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-background/80 backdrop-blur-md border border-border/30 text-foreground shadow-lg flex flex-col animate-fadeInUp card-glow-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedItem(item)}
            >
              {item.imageUrl && (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={item.dataAiHint}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                {item.dates && <CardDescription className="text-xs text-muted-foreground">{item.dates}</CardDescription>}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/90 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View Details <Eye className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="sm:max-w-[625px] bg-card text-card-foreground border-border">
            {selectedItem.imageUrl && (
              <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={selectedItem.dataAiHint}
                />
              </div>
            )}
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">{selectedItem.title}</DialogTitle>
               {selectedItem.dates && <p className="text-sm text-muted-foreground -mt-1">{selectedItem.dates}</p>}
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground">{selectedItem.longDescription}</p>
              <h4 className="font-semibold mt-4 mb-2 text-card-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <DialogFooter className="sm:justify-start gap-2 pt-4">
              {selectedItem.liveLink && (
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={selectedItem.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
              {selectedItem.repoLink && (
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href={selectedItem.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              )}
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
