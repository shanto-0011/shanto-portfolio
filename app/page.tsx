import Image from "next/image";
import CustomTheme from "./theme/CustomTheme";
import CurvedNavbar from "./components/CurvedNavbar";
import Intro from "./components/Intro";
import EducationSection from "./components/EduSection";

export default function Home() {
  return (
    <>
      <Intro
        imageUrl="/images/g_1.jpg"
        text={`<p>
              Hello! I'm <strong>Shanto</strong> — a passionate Full Stack Developer with expertise in building dynamic, responsive web and mobile applications.
              I enjoy writing clean, efficient code and continuously exploring the latest technologies in the world of development.
              Currently, I use <strong>Flutter</strong> for cross-platform mobile app development, and <strong>Laravel</strong> and <strong>Next.js</strong> for web development.
              </p>`}
      ></Intro>
      <EducationSection />
    </>
  );
}
