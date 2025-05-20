export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative z-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Luminous Persona. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
