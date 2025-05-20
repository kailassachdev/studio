
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
  // Initialize scrollBaseColor with the starting dark background color
  const [scrollBaseColor, setScrollBaseColor] = useState(`hsla(${BG_H}, ${BG_S}%, ${BG_L}%, 1.0)`);
  const [dynamicHue, setDynamicHue] = useState(ACCENT_H); // Start with accent hue
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
      const scrollableDistance = Math.max(1, scrollMax); // Avoid division by zero
      const scrollFraction = Math.min(1, Math.max(0, window.scrollY / scrollableDistance)); // Clamp between 0 and 1

      // Interpolate base background color (black to red)
      const interp_H = BG_H + scrollFraction * (PRIMARY_H - BG_H);
      const interp_S = BG_S + scrollFraction * (PRIMARY_S - BG_S);
      const interp_L = BG_L + scrollFraction * (PRIMARY_L - BG_L);
      setScrollBaseColor(`hsla(${interp_H.toFixed(0)}, ${interp_S.toFixed(0)}%, ${interp_L.toFixed(0)}%, 1.0)`);

      // Interpolate accent hue for the shimmer effect
      const baseAccentHue = ACCENT_H; // Start with theme's accent color's hue
      const hueShiftAmount = -60; // Shift hue more significantly for a noticeable change
      let newAccentHue = baseAccentHue + scrollFraction * hueShiftAmount;
      newAccentHue = ((newAccentHue % 360) + 360) % 360; // Ensure positive hue value
      setDynamicHue(newAccentHue);

      // Interpolate gradient angle
      const baseAngle = 270; // Initial angle
      const angleShiftRange = 90; // Total change in angle over scroll distance
      const newAngle = baseAngle + scrollFraction * angleShiftRange;
      setDynamicAngle(newAngle);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call to set values based on current scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]); // Re-run effect if isMounted changes

  if (!isMounted) {
    return null; // Or a fallback static background
  }

  // Simplified gradient. The black-to-red transition is handled by scrollBaseColor.
  // The dynamicHue provides a secondary color that also shifts with scroll.
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${dynamicAngle.toFixed(0)}deg,
      ${scrollBaseColor}, /* This color transitions from dark to red based on scroll */
      hsla(${dynamicHue.toFixed(0)}, 90%, 55%, 0.75))`, /* Accent shimmer, also scroll-driven */
    backgroundSize: '400% 400%', // For the subtleGradientShift animation
    animation: 'subtleGradientShift 25s ease infinite', // Animates background-position
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
