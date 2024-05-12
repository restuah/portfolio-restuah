// "use client";
import React from "react";
import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I&apos;m{" "}
            </span>
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Restu Agung Hardiwibowo👋",
                1000,
                "Full Stack Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            /> */}
          </h1>
          <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            ratione!
          </p>
          <div>
            <button className="mr-4 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit">
              Hire Me
            </button>
            <button className="mt-3 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 text-white hover:bg-slate-800 sm:w-fit">
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]">
            <Image
              src={"/images/profile-rounded.png"}
              alt="Profile"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
