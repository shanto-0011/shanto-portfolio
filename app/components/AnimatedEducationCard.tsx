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
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [canHover, setCanHover] = useState(true); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      console.log("Media Query Matches:", mediaQuery.matches);
      setCanHover(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setCanHover(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleCardClick = () => {
    if (!canHover) {
      setIsMobileActive(!isMobileActive);
    }
  };

  return (
    <div
      className="
        group relative flex flex-col items-center justify-start  bg-base-100 rounded-lg shadow-xl overflow-hidden
        hover:shadow-2xl transition-all duration-300 ease-in-out
        bg-gradient-to-b from-amber-600 to-cyan-600
        w-full max-w-[430px] md:w-auto h-64 mx-auto cursor-pointer
      "
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleCardClick}
    >
     
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10
          transition-opacity duration-300 ease-in-out
          ${
            canHover 
              ? 'group-hover:opacity-0 group-hover:translate-y-[-20px]'
              : isMobileActive 
                ? 'opacity-0 translate-y-[-20px]'
                : 'opacity-100 translate-y-0'
          }
        `}
      >
       
        <div className="relative w-full h-3/5 mb-4 rounded-md overflow-hidden shadow-md">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="fill" 
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

   
        <h3 className="text-[16px] font-bold ">
          {title}
        </h3>
      </div>

      <div
        className={`
          absolute inset-0 flex items-center justify-center text-justify p-6 rounded-lg z-20
          bg-gradient-to-b from-cyan-600 to-amber-600 // Applied your gradient & white text
          transition-opacity duration-300 ease-in-out scale-105
          ${
            canHover 
              ? 'opacity-0 group-hover:opacity-100 group-hover:scale-100'
              : isMobileActive 
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
          }
        `}
      >
        <p className="text-[12px] font-medium">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedEducationCard;