// components/AnimatedEducationCard.tsx
'use client';
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Image from "next/image";

interface AnimatedEducationCardProps {
  imageUrl: string;
  title: string;
  description: string;
  delay?: number;
}

const AnimatedEducationCard = ({
  imageUrl,
  title,
  description,
  delay = 0,
}: AnimatedEducationCardProps) => {
  // State to control visibility on touch devices
  const [isMobileActive, setIsMobileActive] = useState(false);
  // State to track if the device supports hover
  const [canHover, setCanHover] = useState(true); // Assume can hover initially

  useEffect(() => {
    // Check for hover capability on mount
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setCanHover(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleCardClick = () => {
    // Only toggle active state if the device does NOT support hover (i.e., touch device)
    if (!canHover) {
      setIsMobileActive(!isMobileActive);
    }
    // If it's a hover device, the CSS :hover handles it, and click might trigger a navigation later.
  };

  return (
    <div
      className="
        group relative flex flex-col items-center justify-start  bg-base-100 rounded-lg shadow-xl overflow-hidden
        hover:shadow-2xl transition-all duration-300 ease-in-out
        w-full max-w-[430px] md:w-auto h-64 mx-auto cursor-pointer
      "
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleCardClick} // Add click handler
    >
      {/* Initial Content - always present and fades out */}
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10
          transition-opacity duration-300 ease-in-out
          ${
            canHover // If hover is supported, use group-hover for desktop
              ? 'group-hover:opacity-0 group-hover:translate-y-[-20px]'
              : isMobileActive // If no hover, use isMobileActive state for touch
                ? 'opacity-0 translate-y-[-20px]'
                : 'opacity-100 translate-y-0'
          }
        `}
      >
        {/* Image Container - relative for Next/Image fill layout */}
        <div className="relative w-full h-3/5 mb-4 rounded-md overflow-hidden shadow-md">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain" // Changed back to contain to ensure image is not cut
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>

      {/* Hover Text Overlay - absolute, covers the whole card */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center text-justify p-6 rounded-lg z-20
          bg-gradient-to-b from-cyan-600 to-amber-600 text-white // Applied your gradient & white text
          transition-opacity duration-300 ease-in-out scale-105
          ${
            canHover // If hover is supported, use group-hover for desktop
              ? 'opacity-0 group-hover:opacity-100 group-hover:scale-100'
              : isMobileActive // If no hover, use isMobileActive state for touch
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
          }
        `}
      >
        <p className="text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedEducationCard;