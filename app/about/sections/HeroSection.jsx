import React from "react";
import Image from "next/image";
import maidanPlayers from "@/images/slide3.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={maidanPlayers}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/2 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight mb-1 text-white">
            About Us – Maidaan
          </h1>
          <h1 className="text-xl md:text-4xl font-bold uppercase leading-tight text-white">
            The Future of Football and Social Change in Pakistan
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
