
"use client";

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  // Initialize with the base hue of the --secondary color (33 from globals.css)
  const [dynamicHue, setDynamicHue] = useState(33);
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
      const scrollableDistance = Math.max(1, scrollMax);
      const scrollFraction = window.scrollY / scrollableDistance;

      // Calculate new hue
      const baseSecondaryHue = 33;
      const hueShiftRange = 120;
      let newHue = baseSecondaryHue + scrollFraction * hueShiftRange;
      newHue = ((newHue % 360) + 360) % 360;
      setDynamicHue(newHue);

      // Calculate new angle for the gradient
      const baseAngle = 270; // Start angle
      const angleShiftRange = 45; // Max shift in angle (e.g., 270 to 315)
      const newAngle = baseAngle + scrollFraction * angleShiftRange;
      setDynamicAngle(newAngle);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${dynamicAngle.toFixed(0)}deg,
      hsla(var(--background), 1.0), /* Explicit opaque base */
      hsl(${dynamicHue.toFixed(0)}, 100%, 50%, 0.6),  /* Dynamic color, increased lightness and alpha */
      hsla(var(--primary), 0.35), /* Primary color with increased alpha */
      hsla(var(--accent), 0.3))`, /* Accent color with increased alpha */
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
