import Image from "next/image";
import React from "react";
import atleticos from "@/images/atleticos.png";
import ailton from "@/images/ailton.png";
import bgImage from "@/images/bg-img.png";

const MatchSection = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="text-white w-full px-5 gap-4 flex flex-col items-center bg-black opacity-90 py-[80px] md:py-[100px]">
        <div className="bg-green-600 text-white px-8 py-3 text-lg">
          UPCOMING MATCH
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <div className="flex items-center gap-4">
            <Image src={atleticos} alt="Atleticos FC" className="h-10 w-10 md:w-16 md:h-16" />
            <p className="text-sm md:text-xl font-bold mt-2">ATLETICOS FC</p>
          </div>
          <p className="text-sm md:text-4xl font-bold">— : —</p>
          <div className="flex items-center gap-4">
            <p className="text-sm md:text-xl font-bold mt-2">AILTON FC</p>
            <Image src={ailton} alt="Ailton FC" className="h-10 w-10 md:w-16 md:h-16" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">MAY 6, 2024, EMIRATES STADIUM</p>
        <p className="text-lg font-bold mt-1">2:51 pm</p>
      </div>
    </div>
  );
};

export default MatchSection;
