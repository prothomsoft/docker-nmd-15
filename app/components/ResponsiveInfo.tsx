"use client";

import { useState, useEffect } from "react";

export default function ResponsiveInfo() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBreakpoint = () => {
    if (windowWidth === null) return "Unknown";
    if (windowWidth >= 1024) return "Desktop (>= 1024px)";
    if (windowWidth >= 768) return "Tablet (768px - 1023px)";
    return "Mobile (< 768px)";
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
      <p>Width: {windowWidth}px</p>
      <p>Breakpoint: {getBreakpoint()}</p>
    </div>
  );
}