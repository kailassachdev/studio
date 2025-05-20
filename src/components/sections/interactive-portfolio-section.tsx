"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  longDescription: string;
  liveLink?: string;
  repoLink?: string;
  dataAiHint?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured online store with secure payments and inventory management.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "online store",
    tags: ["React", "Node.js", "Stripe"],
    longDescription: "This e-commerce platform was built from the ground up using modern web technologies. It includes features like user authentication, product listings, shopping cart, Stripe integration for payments, and an admin dashboard for managing products and orders. The focus was on creating a seamless and secure user experience.",
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: "2",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying complex datasets with D3.js.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "dashboard charts",
    tags: ["D3.js", "JavaScript", "API"],
    longDescription: "This project involved creating an interactive dashboard to visualize complex financial data. Using D3.js, various chart types were implemented to provide insightful analytics. The dashboard fetches real-time data from an API and allows users to customize views and reports.",
    liveLink: "#",
  },
  {
    id: "3",
    title: "Mobile Fitness App",
    description: "Cross-platform app for tracking workouts and nutrition.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app",
    tags: ["React Native", "Firebase", "HealthKit"],
    longDescription: "A mobile application designed to help users track their fitness goals, log workouts, and monitor nutrition. Built with React Native for cross-platform compatibility, it integrates with native health APIs (HealthKit/Google Fit) and uses Firebase for backend services and real-time data synchronization.",
    repoLink: "#",
  },
];

export default function InteractivePortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card 
            key={item.id} 
            className="bg-card text-card-foreground shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <div className="aspect-[3/2] relative mb-4">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-md"
                  data-ai-hint={item.dataAiHint}
                />
              </div>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="text-card-foreground/80">{item.description}</CardDescription>
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
              <div className="aspect-[16/9] relative mb-4 -mx-6 -mt-6">
                <Image 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-lg"
                  data-ai-hint={selectedItem.dataAiHint}
                />
              </div>
              <DialogTitle className="text-3xl text-primary">{selectedItem.title}</DialogTitle>
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
