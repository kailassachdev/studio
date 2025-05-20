import HeroSection from '@/components/sections/hero-section';
import AnimatedTimelineSection from '@/components/sections/animated-timeline-section';
import InteractivePortfolioSection from '@/components/sections/interactive-portfolio-section';
import ContactFormSection from '@/components/sections/contact-form-section';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      
      <section id="ai-bio-teaser" className="text-center py-16 bg-card/10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">Craft Your Story with AI</h2>
        <p className="text-lg text-card-foreground/80 mb-8 max-w-2xl mx-auto">
          Let our AI-powered bio generator help you create a compelling personal statement.
          Turn your keywords and experiences into a narrative that shines.
        </p>
        <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/bio-generator">
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Your Bio
          </Link>
        </Button>
      </section>

      <AnimatedTimelineSection />
      <InteractivePortfolioSection />
      <ContactFormSection />
    </div>
  );
}
