import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="text-center py-20 md:py-32">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Illuminate Your <span className="text-primary">Digital Presence</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
        Luminous Persona helps you craft a narrative that captivates and inspires. Showcase your journey, your work, and connect with your audience like never before.
      </p>
      <div className="space-x-4">
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="#portfolio">
            View My Work
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
          <Link href="#contact">
            Get In Touch <ArrowDown className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
