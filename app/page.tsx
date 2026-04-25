


import ButtonShadow from "@/components/ui/button-shadow";
import Spline from "@/components/ui/spline";
import Scrollpage from "./scrollpage";
import Service from "./service";
import About from "./about";
import { carousel } from "@/constants";
import Slide from "@/components/common/slide";
import Recent from "./recent";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import Contact from "./contact";



export default function Home() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-transparent">
      <Scrollpage />
      <About />
      <div className="w-full h-100  text-white flex flex-col items-center justify-center z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl text-center mb-8">
          I'm Miguel, a dedicated developer with a passion for creating innovative digital solutions. With expertise in various programming languages and frameworks, I strive to turn ideas into reality through clean and efficient code.
        </p>
        <ButtonShadow className="rounded-full font-bold text-white text-2xl bg-amber-500 hover:bg-amber-600 p-6">Learn More</ButtonShadow>
      </div>
      <div className="w-full  h-150  text-white flex flex-col items-center justify-center z-10">
        <Spline />
      </div>
      <Service />
      <div className="w-full h-100  flex items-center justify-center py-20 my-20 overflow-hidden  relative ">
        <div className="w-100 h-80 absolute z-30 bg-gradient-to-l from-black via-transparent to-transparent top-0 right-0"></div>
        <div className="w-100 h-80 absolute z-30 bg-gradient-to-r from-black via-transparent to-transparent top-0 left-0"></div>
        <Slide />
      </div>
      <Recent />
      <Contact />
    </div>
  );
}
