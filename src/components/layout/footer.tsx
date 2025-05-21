
// Footer content has been moved to the Sidebar for desktop and mobile sheet for this new design.
// This component can be simplified or removed if not used elsewhere.
export default function AppFooter() {
  return (
    <footer className="md:hidden py-6 border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-2 text-center">
        {/* Social links could be repeated here for mobile if not in a sheet footer */}
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Kailas Sachdev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// If you want to completely remove the footer for desktop:
// export default function AppFooter() {
//   return null;
// }
