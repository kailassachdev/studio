"use client";

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on server to prevent hydration mismatch for time-based logic if added later
  }

  // Example: Time-based gradient. Could be expanded with mouse interaction.
  // For simplicity, using a CSS animation defined in globals.css
  const gradientStyle = {
    background: `linear-gradient(270deg, hsl(var(--background)), hsl(var(--secondary) / 0.3), hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.1))`,
    backgroundSize: '400% 400%',
    animation: 'subtleGradientShift 30s ease infinite',
  };

  return (
    <div
      className="fixed inset-0 -z-10"
      style={gradientStyle}
      aria-hidden="true"
    />
  );
}
