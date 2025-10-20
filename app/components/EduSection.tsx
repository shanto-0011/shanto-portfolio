import React from "react";
import AnimatedEducationCard from "./AnimatedEducationCard";

// You can use actual SVG icons or import them, for simplicity here are some placeholders
const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const GraduateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a42.022 42.022 0 011.97 3.657L12 21.23l-7.447-4.136a42.02 42.02 0 011.97-3.657L12 14zm0 0l-9 5h18l-9-5zm0 0h.01"
    />
  </svg>
);

const LaptopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-0.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const EducationSection = () => {
  return (
    <section
      className="
        w-full py-6 px-4 md:px-8 my-4 rounded-[10px]
        bg-gradient-to-br from-[#bd89ee] to-purple-800
        dark:from-purple-900 dark:to-purple-950
        flex flex-col items-center justify-center
      "
    >
      <h2 className="text-[24px] md:text-[32px] font-[600] text-white mb-6 text-center">
        Educational Institutes 
      </h2>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl   
          "
      >
        <div className="group">
          {" "}
          {/* Add group to parent of card for hover effect */}
          <AnimatedEducationCard
            imageUrl="/images/annada.jpg"
            title="Annada Govt. High School"
            description="Our programs cover a wide range of subjects, ensuring a holistic learning experience."
          />
        </div>
        <div className="group">
          <AnimatedEducationCard
            imageUrl="/images/bbaria.jpg"
            title="Brahmanbaria Govt. College"
            description="Learn from industry leaders and experienced educators passionate about teaching."
          />
        </div>
        <div className="group">
          <AnimatedEducationCard
            imageUrl="/images/aust.jpg"
            title="Ahsanullah University of Science and Technology"
            description="Engage with dynamic content, practical exercises, and collaborative projects."
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

////////////////////////////////////////

/* const EduSection = () => {
  return <div>EduSection</div>;
};

export default EduSection; */
