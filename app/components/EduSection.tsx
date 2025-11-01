import React from "react";
import AnimatedEducationCard from "./AnimatedEducationCard";
import Image from "next/image";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="
        w-full py-4 px-4 md:px-8 my-8 rounded-[10px]
       
        
        flex flex-col items-center justify-center
      "
    >
      <div className="text-center mb-12  flex justify-center  md:justify-end w-full">
        <Image
          src="/images/institute.png"
          alt="Institute Header"
          width={310}
          height={18}
          className=" max-h-20  max-w-[400] md:w-[40%] rounded-[12px] shadow-2xs shadow-amber-300"
          priority
        />
      </div>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl   
          "
      >
        <div className="group">
          <AnimatedEducationCard
            imageUrl="/images/annada.jpg"
            title="Annada Govt. High School"
            description="I complete my secondary education here with excellent academic performance and extracurricular involvement."
          />
        </div>
        <div className="group">
          <AnimatedEducationCard
            imageUrl="/images/bbaria.jpg"
            title="Brahmanbaria Govt. College"
            description="I pursued my higher secondary education here, focusing on science subjects and actively participating in various clubs and activities."
          />
        </div>
        <div className="group">
          <AnimatedEducationCard
            imageUrl="/images/aust.jpg"
            title="Ahsanullah University of Science and Technology"
            description="I am pursuing my Bachelor's degree in Computer Science and Engineering, gaining hands-on experience in software development and research."
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;


