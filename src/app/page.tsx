
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section'; // New
import ProjectsSection from '@/components/sections/projects-section'; // New
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-form-section';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
