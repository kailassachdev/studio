"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

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
    date: "2023 - Present",
    title: "Lead Developer at Tech Solutions Inc.",
    description: "Leading a team of 5 developers in creating innovative web solutions. Spearheaded the development of a major client portal, improving user engagement by 40%.",
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    category: "Career",
  },
  {
    id: "2",
    date: "2022",
    title: "Innovation Award Winner",
    description: "Received the company-wide innovation award for a project that streamlined internal workflows, saving an estimated 200 hours per month.",
    icon: <Award className="h-6 w-6 text-primary" />,
    category: "Achievement",
  },
  {
    id: "3",
    date: "2019 - 2023",
    title: "B.S. in Computer Science, Stanford University",
    description: "Graduated with honors, focusing on artificial intelligence and human-computer interaction. Active member of the coding club and contributor to open-source projects.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    category: "Education",
  },
];

export default function AnimatedTimelineSection() {
  return (
    <section id="timeline" className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Central line */}
        <div className="absolute top-0 h-full w-1 bg-border left-1/2 -translate-x-1/2 hidden md:block"></div>
        
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id} 
            className={`mb-12 flex md:items-center w-full animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-1'}`}>
              <Card className="bg-card text-card-foreground shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between md:justify-normal md:gap-4">
                    <div className={`mb-2 md:mb-0 ${index % 2 === 0 ? '' : 'md:order-1'}`}>{event.icon}</div>
                    <CardTitle className={`text-xl font-semibold ${index % 2 === 0 ? '' : 'md:text-left'}`}>{event.title}</CardTitle>
                  </div>
                  <CardDescription className={`text-sm text-muted-foreground ${index % 2 === 0 ? '' : 'md:text-left'}`}>{event.date} - {event.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-card-foreground/90 ${index % 2 === 0 ? '' : 'md:text-left'}`}>{event.description}</p>
                </CardContent>
              </Card>
            </div>
            {/* Dot on the timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-primary h-4 w-4 rounded-full border-4 border-background hidden md:block"></div>
          </div>
        ))}
      </div>
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
