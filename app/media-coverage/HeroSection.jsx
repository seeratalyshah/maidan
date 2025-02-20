import React from "react";
import { FaArrowRight } from "react-icons/fa";
import maidanPlayers from "@/images/news4.JPG";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={maidanPlayers}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Over Image */}
      <div className="absolute bottom-[100px] left-0 right-0">
        <div className="flex justify-between items-end w-full p-4 md:p-16 lg:p-24 md:p-20">
          <div className="flex flex-col items-start justify-center text-white gap-6 max-w-[900px]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Maidaan in the Spotlight – <span className="text-green-600">Global & National</span> Recognition
            </h1>
            <p className="text-lg md:text-xl font-bold leading-tight">
              Discover how Maidaan’s football initiative is transforming lives
              and gaining global recognition.
            </p>
            <button className="mt-4 px-10 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium flex items-center gap-4">
              <span>Read Featured News</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
