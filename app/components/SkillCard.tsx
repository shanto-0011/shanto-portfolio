import React from "react";
import Image from "next/image";

interface cardProperty {
  cardImageUrl: string;
  cardTitle: string;
  cardProperty: { name: string; icon: React.ReactNode }[];
}

const SkillCard = ({ cardImageUrl, cardTitle, cardProperty }: cardProperty) => {
  return (
    <div className="card rounded-[12px] px-4 pb-2 max-w-[500px] mx-auto my-auto shadow-lg shadow-gray-400">
      <div className="card-body">
        <div className="text-center  ">
          <Image
            src={cardImageUrl}
            alt={`${cardTitle} Image`}
            width={45}
            height={45}
            className="mx-auto p-2 max-h-18 max-w-[320] bg-[#61e6f0] rounded-[6px]"
            priority
          />
        </div>
        <h3 className="card-title text-[24px] text-center justify-center mb-4 flex items-center gap-3">
          {cardTitle}
        </h3>

        
        <ul className="list-none space-y-2 text-lg">
          {cardProperty.map((skill, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 flex-shrink-0">{skill.icon}</span>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
