import React from "react";
import Image from "next/image";

interface BubbleRowProps {
  imageUrl: string;
  text: string;
}

const Intro = ({ imageUrl, text }: BubbleRowProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-4 py-1">
      <div className="sm:flex-1 flex items-center justify-center">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 mb-4 md:mb-0 md:mr-8">
          <div className="w-full h-full  rounded-full overflow-hidden shadow-lg border-4 border-[#973bee]">
            <Image
              src={imageUrl}
              alt="Bubble image"
              layout="fill"
              objectFit="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex-1 items-center">
        <div className="sm:text-start text-justify max-w-md pl-2">
          <div className="text-sm sm:text-md leading-relaxed " dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
};
export default Intro;
