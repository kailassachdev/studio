import Link from 'next/link';
import { Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Flame className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-foreground">Kailas Sachdev</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
