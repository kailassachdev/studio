
"use client";

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  // Initialize with the base hue of the --secondary color (33 from globals.css)
  // Let's try a hue that can shift towards reds/oranges for the "fire" theme.
  // Starting around orange (e.g., 30-40) and shifting towards red or deeper orange.
  const [dynamicHue, setDynamicHue] = useState(35); // Start a bit more orange
  const [dynamicAngle, setDynamicAngle] = useState(270); // Initial angle for the gradient

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrollMax = scrollHeight - clientHeight;
      const scrollableDistance = Math.max(1, scrollMax); // Avoid division by zero if scrollMax is 0
      const scrollFraction = window.scrollY / scrollableDistance;

      // Calculate new hue: Start at 35 (orange) and shift towards red (e.g., 0 or 360) or deeper orange.
      // Let's make it shift downwards towards red.
      const baseHue = 35;
      const hueShiftAmount = -35; // Shift by -35, so it goes from 35 towards 0 (red)
      let newHue = baseHue + scrollFraction * hueShiftAmount;
      newHue = ((newHue % 360) + 360) % 360; // Ensure hue is within 0-360
      setDynamicHue(newHue);

      // Calculate new angle for the gradient
      const baseAngle = 270; // Start angle
      const angleShiftRange = 45; // Max shift in angle (e.g., 270 to 315)
      const newAngle = baseAngle + scrollFraction * angleShiftRange;
      setDynamicAngle(newAngle);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call to set values

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null; // Or a fallback static background
  }

  // Style for the gradient background
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${dynamicAngle.toFixed(0)}deg,
      hsla(var(--background), 1.0), /* Explicit opaque base dark theme color */
      hsla(${dynamicHue.toFixed(0)}, 100%, 60%, 0.7),  /* Dynamic color, more towards orange/red, more opaque */
      hsla(var(--primary), 0.8), /* Primary color (current deep red) */
      hsla(15, 100%, 50%, 0.6))`, /* Added a more explicit orange/red tone */
    backgroundSize: '400% 400%',
    animation: 'subtleGradientShift 30s ease infinite',
  };

  return (
    <div
      className="fixed inset-0 -z-10 interactive-bg-element"
      style={gradientStyle}
      aria-hidden="true"
    />
  );
}
