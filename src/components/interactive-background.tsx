
"use client";

import { useEffect, useState } from 'react';

// HSL values from your globals.css
// --background: 220 20% 7%;
const BG_H = 220;
const BG_S = 20;
const BG_L = 7;

// --primary: 348 83% 47%;
const PRIMARY_H = 348;
const PRIMARY_S = 83;
const PRIMARY_L = 47;

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [dynamicHue, setDynamicHue] = useState(35);
  const [dynamicAngle, setDynamicAngle] = useState(270);
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
      const scrollableDistance = Math.max(1, scrollMax); // Avoid division by zero
      const scrollFraction = Math.min(1, Math.max(0, window.scrollY / scrollableDistance)); // Clamp between 0 and 1

      // Interpolate base background color
      const interp_H = BG_H + scrollFraction * (PRIMARY_H - BG_H);
      const interp_S = BG_S + scrollFraction * (PRIMARY_S - BG_S);
      const interp_L = BG_L + scrollFraction * (PRIMARY_L - BG_L);
      setScrollBaseColor(`hsla(${interp_H.toFixed(0)}, ${interp_S.toFixed(0)}%, ${interp_L.toFixed(0)}%, 1.0)`);

      // Existing dynamic hue for the accent shimmer
      const baseAccentHue = 35; // Initial orange/yellow for the shifting accent
      const hueShiftAmount = -30; // Shifts towards greenish/cyan or magenta/purple
      let newAccentHue = baseAccentHue + scrollFraction * hueShiftAmount;
      newAccentHue = ((newAccentHue % 360) + 360) % 360; // Ensure positive hue value
      setDynamicHue(newAccentHue);

      // Existing dynamic angle for gradient rotation
      const baseAngle = 270;
      const angleShiftRange = 60; // How much the angle shifts
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
    return null;
  }

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${dynamicAngle.toFixed(0)}deg,
      ${scrollBaseColor}, /* Dynamically transitions from dark to red */
      hsla(${dynamicHue.toFixed(0)}, 100%, 60%, 0.9), /* Adjusted accent shimmer */
      hsla(${PRIMARY_H}, ${PRIMARY_S}%, ${PRIMARY_L}%, 0.85), /* Theme primary red, slightly more opaque */
      hsla(25, 100%, 55%, 0.8))`, /* Another fiery color, slightly more opaque */
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
      <div className="floating-cube cube-1"></div>
      <div className="floating-cube cube-2"></div>
      <div className="floating-cube cube-3"></div>
    </div>
  );
}
