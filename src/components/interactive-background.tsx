
"use client";

import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [dynamicHue, setDynamicHue] = useState(35); 
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
      const scrollFraction = window.scrollY / scrollableDistance;

      const baseHue = 35; 
      const hueShiftAmount = -30; 
      let newHue = baseHue + scrollFraction * hueShiftAmount;
      newHue = ((newHue % 360) + 360) % 360;
      setDynamicHue(newHue);

      const baseAngle = 270;
      const angleShiftRange = 60; 
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
      hsla(var(--background), 1.0),
      hsla(${dynamicHue.toFixed(0)}, 100%, 55%, 0.95), 
      hsla(var(--primary), 0.9), 
      hsla(15, 100%, 50%, 0.85))`,
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
