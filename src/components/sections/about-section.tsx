
"use client";

import { GraduationCap, Award, Users, Zap } from "lucide-react";
import Image from "next/image";

const education = [
  {
    degree: "B. Tech, Computer Science & Engineering",
    institution: "Cochin University of Science and Technology, Kochi",
    years: "2022 - 2026",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary (XII), CBSE",
    institution: "The Greenhills Public School",
    years: "2021",
    details: "Percentage: 87.00%",
    icon: GraduationCap,
  },
  {
    degree: "Secondary (X), CBSE",
    institution: "Mount Tabor English School",
    years: "2019",
    details: "Percentage: 92.00%",
    icon: GraduationCap,
  },
];

const leadership = [
 {
    role: "President - IRES SEDS CUSAT",
    organization: "Students for the Exploration and Development of Space (SEDS CUSAT)",
    duration: "Present",
    points: [
      "Led student chapter, organizing workshops, outreach programs, and national-level space-tech events.",
      "Managed core team, built industry collaborations, and increased member engagement by 60%.",
      "Actively promoted STEM awareness through community initiatives and technical sessions."
    ],
    icon: Award,
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="md:col-span-2 flex justify-center md:justify-start animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
              <Image
                src="/images/pro.png"
                alt="Kailas Sachdev"
                layout="fill"
                objectFit="cover"
                unoptimized={true}
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m Kailas Sachdev, a driven and curious Software Engineer with a strong foundation in designing, developing, and optimizing scalable applications. My passion lies in leveraging technology for innovation and positive community impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving complex problems and am adept at coding and software architecture. I have experience working with various databases, algorithms, and modern frameworks, and I am deeply committed to continuous learning and staying at the forefront of technological advancements.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center md:text-left animate-fadeInUp" style={{ animationDelay: '0.3s' }}>Education</h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card animate-fadeInUp card-glow-hover" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground">{item.institution} ({item.years})</p>
                  {item.details && <p className="text-sm text-muted-foreground">{item.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center md:text-left animate-fadeInUp" style={{ animationDelay: '0.6s' }}>Leadership & Activities</h3>
           <div className="space-y-8">
            {leadership.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card animate-fadeInUp card-glow-hover" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">{item.role}</h4>
                  <p className="text-sm text-muted-foreground">{item.organization} ({item.duration})</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
