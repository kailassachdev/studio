import HeroSection from '@/components/sections/hero-section';
import AnimatedTimelineSection from '@/components/sections/animated-timeline-section';
import InteractivePortfolioSection from '@/components/sections/interactive-portfolio-section';
import ContactFormSection from '@/components/sections/contact-form-section';
import SkillsSection from '@/components/sections/skills-section'; // Added SkillsSection

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <AnimatedTimelineSection />
      <InteractivePortfolioSection />
      <SkillsSection /> 
      <ContactFormSection />
    </div>
  );
}
