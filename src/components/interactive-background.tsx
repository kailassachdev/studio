
"use client";

import { useEffect, useState } from 'react';

// HSL values from your globals.css
// --background: 220 20% 7%; (Dark Blue-Gray - effectively black)
const BG_H = 220;
const BG_S = 20;
const BG_L = 7;

// Target: Very Dark Red (e.g., 348, 83%, 15%)
const PRIMARY_H = 348; // Red Hue
const PRIMARY_S = 83;  // Red Saturation
const PRIMARY_L = 15;  // Very Dark Red Lightness

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollBaseColor, setScrollBaseColor] = useState(`hsla(${BG_H}, ${BG_S}%, ${BG_L}%, 1.0)`);

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
      const scrollFraction = Math.min(1, Math.max(0, window.scrollY / scrollableDistance));

      // Interpolate base color from blackish to very dark red
      const interp_H = BG_H + scrollFraction * (PRIMARY_H - BG_H);
      const interp_S = BG_S + scrollFraction * (PRIMARY_S - BG_S);
      const interp_L = BG_L + scrollFraction * (PRIMARY_L - BG_L);
      setScrollBaseColor(`hsla(${interp_H.toFixed(0)}, ${interp_S.toFixed(0)}%, ${interp_L.toFixed(0)}%, 1.0)`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: scrollBaseColor,
  };

  return (
    <div
      className="fixed inset-0 -z-10 interactive-bg-element overflow-hidden"
      style={backgroundStyle}
      aria-hidden="true"
    >
      {/* Stars and Embers are defined in globals.css via ::before and ::after on interactive-bg-element */}
    </div>
  );
}
