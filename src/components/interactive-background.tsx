
"use client";

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  // Initialize with the base hue of the --secondary color (33 from globals.css)
  const [dynamicHue, setDynamicHue] = useState(33); 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // If there's no scrollbar (content fits within viewport), scrollMax can be 0 or negative.
      const scrollMax = scrollHeight - clientHeight;
      
      // Use at least 1 for scrollableDistance to prevent division by zero if no scrollbar.
      const scrollableDistance = Math.max(1, scrollMax); 
      
      const scrollFraction = window.scrollY / scrollableDistance;
      
      const baseSecondaryHue = 33; // Base hue from --secondary: 33 100% 40%;
      const hueShiftRange = 120; // The hue will shift by up to 120 degrees over the full scroll
      
      // Calculate new hue, ensuring it wraps around 360 degrees
      let newHue = baseSecondaryHue + scrollFraction * hueShiftRange;
      newHue = ((newHue % 360) + 360) % 360; // Ensures positive modulo (e.g., -10 % 360 = 350)

      setDynamicHue(newHue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial hue based on current scroll position (e.g. if page reloads scrolled down)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  if (!isMounted) {
    // Avoid rendering on server to prevent hydration mismatch for window/document access
    return null; 
  }

  const gradientStyle = {
    background: `linear-gradient(270deg, 
      hsl(var(--background)), 
      hsl(${dynamicHue.toFixed(0)}, 100%, 40% / 0.3),  /* Dynamic secondary color hue */
      hsl(var(--primary) / 0.2), 
      hsl(var(--accent) / 0.1))`,
    backgroundSize: '400% 400%',
    animation: 'subtleGradientShift 30s ease infinite', // Keep the existing animation
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={gradientStyle}
      aria-hidden="true"
    />
  );
}
