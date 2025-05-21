
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Flame, Home, User, Briefcase, MessageSquare, Menu, X, Linkedin, Github, Mail } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Briefcase }, // Re-using briefcase, consider a specific skills icon
  { href: '#contact', label: 'Contact', icon: MessageSquare },
];

const socialLinks = [
  { href: "https://linkedin.com/in/kailassachdev", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:kailassachdev@gmail.com", label: "Email", icon: Mail },
  // Add GitHub if Kailas has one
  // { href: "https://github.com/yourusername", label: "GitHub", icon: Github },
];


export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <nav className={`flex flex-col ${inSheet ? 'gap-y-4 p-4' : 'gap-y-2'}`}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => inSheet && setIsMobileMenuOpen(false)}
          className={`
            flex items-center gap-x-3 py-2 px-3 rounded-md text-sm font-medium
            transition-colors duration-150
            ${activeSection === item.href.substring(1)
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }
          `}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );

  const SocialIcons = ({ inSheet = false }: { inSheet?: boolean }) => (
    <div className={`flex ${inSheet ? 'justify-center gap-x-6 mt-8' : 'gap-x-4'}`}>
        {socialLinks.map((social) => (
          <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors">
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </Link>
        ))}
      </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 border-r border-border bg-background p-6 space-y-6 sticky top-0 h-screen">
        <Link href="#home" className="flex items-center gap-2 mb-4">
          <Flame className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Kailas Sachdev</span>
        </Link>
        <div className="flex-grow">
         <NavLinks />
        </div>
        <SocialIcons />
        <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Kailas Sachdev</p>
      </aside>

      {/* Mobile Top Bar & Sheet Menu */}
      <div className="md:hidden sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="#home" className="flex items-center gap-2">
            <Flame className="h-7 w-7 text-primary" />
            <span className="text-lg font-bold text-foreground">Kailas S.</span>
          </Link>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0 bg-background">
               <div className="flex flex-col h-full p-6 space-y-6">
                <div className="flex items-center justify-between mb-4">
                    <Link href="#home" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Flame className="h-8 w-8 text-primary" />
                      <span className="text-xl font-bold text-foreground">Kailas Sachdev</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="md:hidden">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <div className="flex-grow">
                  <NavLinks inSheet={true} />
                </div>
                <SocialIcons inSheet={true} />
                <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Kailas Sachdev</p>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
