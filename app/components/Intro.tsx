import React from "react";
import Image from "next/image";

interface BubbleRowProps {
  imageUrl: string;
  text: string;
}

const Intro = ({ imageUrl, text }: BubbleRowProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-1">
      {/* Image on the left (bubble style) */}
      <div className="sm:flex-1 flex items-center justify-center">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 mb-4 md:mb-0 md:mr-8">
          <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-primary">
            <Image
              src={imageUrl}
              alt="Bubble image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Text on the right */}
      <div className="sm:flex-1 items-center">
        <div className="sm:text-start text-justify max-w-md pl-2">
          <p className="text-lg ">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
