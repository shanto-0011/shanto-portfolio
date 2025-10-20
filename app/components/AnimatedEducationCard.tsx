// components/AnimatedEducationCard.tsx
import React from "react";
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
  return (
    <div
      className="
        group relative flex flex-col items-center justify-start  bg-base-100 rounded-lg shadow-xl overflow-hidden
        hover:shadow-2xl transition-all duration-300 ease-in-out
        w-full max-w-[430px] md:w-auto h-64 mx-auto
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Initial Content - always present and fades out */}
      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10
          transition-opacity duration-300 ease-in-out
          group-hover:opacity-0 group-hover:translate-y-[-20px]
        "
      >
        {/* Image Container - relative for Next/Image fill layout */}
        <div className="relative w-full h-3/5 mb-4 rounded-md overflow-hidden shadow-md">
          
          <Image
            src={imageUrl}
            alt={title} 
            layout="fill"
            objectFit="fill"
            className="group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold ">
          {title}
        </h3>
      </div>

      {/* Hover Text Overlay - absolute, covers the whole card */}
      <div
        className="
          absolute inset-0 flex items-center justify-center text-center p-6 bg-transparent text-primary-content rounded-lg
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
          scale-105 group-hover:scale-100
          z-20
        "
      >
        <p className="text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedEducationCard;
