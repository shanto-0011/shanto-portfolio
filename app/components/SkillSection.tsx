// components/SkillsSection.tsx
import React from "react";
import Image from "next/image";
import { FaDatabase, FaJava, FaGitAlt, FaFileExcel } from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiJavascript,
  SiTailwindcss,
  SiC,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiPusher,
} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import SkillCard from "./SkillCard";

// const GraduateIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-12 w-12"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a42.022 42.022 0 011.97 3.657L12 21.23l-7.447-4.136a42.02 42.02 0 011.97-3.657L12 14zm0 0l-9 5h18l-9-5zm0 0h.01"
//     />
//   </svg>
// );

const SkillsSection = () => {
  return (
    <section id="skills" className="py-8 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 ">
          <Image
            src="/images/skills.png"
            alt="My Skills Header"
            width={320}
            height={18}
            className="mx-auto max-h-18  max-w-[320] rounded-[12px]"
            priority
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-8">
          {/* Full-Stack Development */}

          <SkillCard
            cardImageUrl="/images/website.png"
            cardTitle="Full-Stack Development"
            cardProperty={[
              {
                name: "Next.js (TypeScript)",
                icon: (
                  <SiNextdotjs className="inline-block mr-2 text-blue-500" />
                ),
              },
              {
                name: "Laravel (PHP)",
                icon: <SiLaravel className="inline-block mr-2 text-red-500" />,
              },
              {
                name: "JavaScript / ES6+",
                icon: (
                  <SiJavascript className="inline-block mr-2 text-yellow-500" />
                ),
              },
              {
                name: "PHP",
                icon: <SiPhp className="inline-block mr-2 text-purple-500" />,
              },
              {
                name: "Tailwind CSS",
                icon: (
                  <SiTailwindcss className="inline-block mr-2 text-cyan-500" />
                ),
              },
              {
                name: "Databases (SQL, NoSQL)",
                icon: (
                  <FaDatabase className="inline-block mr-2 text-green-500" />
                ),
              },
            ]}
          />

          <SkillCard
            cardImageUrl="/images/mobile.png"
            cardTitle="Mobile Development"
            cardProperty={[
              {
                name: "Flutter (Dart)",
                icon: <SiFlutter className="inline-block mr-2 text-blue-500" />,
              },
            ]}
          />

          <SkillCard
            cardImageUrl="/images/settings.png"
            cardTitle="Programming & Tools"
            cardProperty={[
              {
                name: "Java",
                icon: <FaJava className="inline-block mr-2 text-blue-600" />,
              },
              {
                name: "C / C++",
                icon: <SiC className="inline-block mr-2 text-blue-600" />,
              },
              {
                name: "Version Control (Git)",
                icon: <FaGitAlt className="inline-block mr-2 text-gray-400" />,
              },
              {
                name: "Databases: MySQL, MongoDB",
                icon: <SiMongodb className="inline-block mr-2 text-green-500" />,
              },
              {
                name: "Firebase",
                icon: (
                  <RiFirebaseFill className="inline-block mr-2 text-yellow-500" />
                ),
              },
              {
                name: "Pusher",
                icon: (
                  <SiPusher className="inline-block mr-2 text-purple-500" />
                ),
              },
              
              {
                name: "Excel Automation",
                icon: (
                  <FaFileExcel className="inline-block mr-2 text-green-600" />
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
