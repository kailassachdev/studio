
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react"; // Added Award back

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "2022 - 2026",
    title: "B. Tech, Computer Science & Engineering",
    description: "Cochin University of Science and Technology, Kochi.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    category: "Education",
  },
  {
    id: "2",
    date: "2021",
    title: "Senior Secondary (XII), CBSE",
    description: "The Greenhills Public School. Percentage: 87.00%.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    category: "Education",
  },
  {
    id: "3",
    date: "2019",
    title: "Secondary (X), CBSE",
    description: "Mount Tabor English School. Percentage: 92.00%.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    category: "Education",
  },
  {
    id: "4",
    date: "Present", // Assuming 'Present' or a relevant timeframe
    title: "President - IRES SEDS CUSAT",
    description: "Led student chapter, organized workshops, outreach programs, and national-level space-tech events. Managed core team, built industry collaborations, and increased member engagement by 60%. Actively promoted STEM awareness.",
    icon: <Award className="h-6 w-6 text-primary" />,
    category: "Leadership & Extracurricular",
  },
];

export default function AnimatedTimelineSection() {
  return (
    <section id="timeline" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
      <div className="max-w-3xl mx-auto space-y-12">
        {timelineEvents.map((event, index) => (
          <Card 
            key={event.id} 
            className="bg-background/80 backdrop-blur-md border border-border/30 text-foreground shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp w-full"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div>{event.icon}</div>
                <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground mt-1">{event.date} - {event.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
