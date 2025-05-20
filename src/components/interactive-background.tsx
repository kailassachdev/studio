
"use client";

import { useEffect, useState } from 'react';

// HSL values from your globals.css
// --background: 220 20% 7%; (Dark Blue-Gray)
const BG_H = 220;
const BG_S = 20;
const BG_L = 7;

// --primary: 348 83% 47%; (Deep Red)
const PRIMARY_H = 348;
const PRIMARY_S = 83;
const PRIMARY_L = 47;

// --accent: 51 100% 50%; (Bright Yellow for initial dynamicHue)
const ACCENT_H = 51; // Using the H value from the accent color for the base of dynamicHue

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrollBaseColor, setScrollBaseColor] = useState(`hsla(${BG_H}, ${BG_S}%, ${BG_L}%, 1.0)`);
  const [dynamicHue, setDynamicHue] = useState(ACCENT_H);
  const [dynamicAngle, setDynamicAngle] = useState(270);

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

      const interp_H = BG_H + scrollFraction * (PRIMARY_H - BG_H);
      const interp_S = BG_S + scrollFraction * (PRIMARY_S - BG_S);
      const interp_L = BG_L + scrollFraction * (PRIMARY_L - BG_L);
      setScrollBaseColor(`hsla(${interp_H.toFixed(0)}, ${interp_S.toFixed(0)}%, ${interp_L.toFixed(0)}%, 1.0)`);

      const baseAccentHue = ACCENT_H;
      const hueShiftAmount = -90; // Increased shift for more noticeable change
      let newAccentHue = baseAccentHue + scrollFraction * hueShiftAmount;
      newAccentHue = ((newAccentHue % 360) + 360) % 360;
      setDynamicHue(newAccentHue);

      const baseAngle = 270;
      const angleShiftRange = 120; // Increased angle shift
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
      ${scrollBaseColor}, /* Dark to Red scroll-driven base */
      hsla(${dynamicHue.toFixed(0)}, 95%, 60%, 0.85) /* Accent shimmer, more opaque */
    )`,
    backgroundSize: '400% 400%',
    animation: 'subtleGradientShift 25s ease infinite',
  };

  return (
    <div
      className="fixed inset-0 -z-10 interactive-bg-element overflow-hidden"
      style={gradientStyle}
      aria-hidden="true"
    >
      <div className="flaming-snake snake-1"></div>
      <div className="flaming-snake snake-2"></div>
      <div className="flaming-snake snake-3"></div>
      <div className="floating-cube cube-1"></div>
      <div className="floating-cube cube-2"></div>
      <div className="floating-cube cube-3"></div>
      <div className="floating-cube cube-4"></div>
      <div className="floating-cube cube-5"></div>
    </div>
  );
}
