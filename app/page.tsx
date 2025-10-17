import Image from "next/image";
import CustomTheme from "./theme/CustomTheme";
import CurvedNavbar from "./components/CurvedNavbar";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <>
      <Intro
        imageUrl="/images/g_1.jpg"
        text="Hello! I'm Shanto, a passionate Full Stack Developer with expertise in building dynamic and responsive web applications. I love crafting clean and efficient code while exploring the latest technologies in the web development world."
      ></Intro>
      {/* <CurvedNavbar /> */}
      {/*  <CustomTheme />
      <h1 className="text-3xl font-bold p-4">Hello Bangladesh</h1>
      <p className="p-4">
        This text will change color based on the theme.
      </p>

      <div className="card w-96 bg-base-200 shadow-xl m-4">
        <div className="card-body">
          <h2 className="card-title">DaisyUI Card!</h2>
          <p>This card's background and text will also change with the theme.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Buy Now</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
