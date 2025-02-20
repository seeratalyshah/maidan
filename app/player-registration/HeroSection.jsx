import React from "react";
import Image from "next/image";
import heroImage from "@/images/support-bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/2 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl md:text-5xl font-extrabold uppercase leading-tight mb-1 text-white">
            Player Registration Form
          </h1>
          <h1 className="text-md md:text-2xl font-bold leading-tight text-green-600">
            All shortlisted players must register digitally before the training
            camp starts.
          </h1>
          <p className="text-white max-w-4xl text-center text-md">
            All shortlisted players must register digitally before the training
            camp starts tomorrow. This registration form will also be used for
            future players joining Maidaan. Please ensure all fields are filled
            accurately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
