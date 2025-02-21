import Image from "next/image";
import React from "react";

const MatchCard = ({item}) => {
  return (
    <div className="text-black px-5 flex flex-col items-center gap-4 bg-white opacity-90 shadow-md">
      <div className="bg-green-600 text-white px-6 py-2 text-sm">
        UPCOMING MATCH
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-8">
        <div className="flex items-center gap-4">
          <Image src={item.team_one_icon} alt="Atleticos FC" className="w-6 h-6 md:w-10 md:h-10" />
          <p className="text-sm font-bold mt-2">{item.team_one}</p>
        </div>
        <p className="text-sm md:text-lg font-bold">— : —</p>
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold mt-2">{item.team_two}</p>
          <Image src={item.team_two_icon} alt="Ailton FC" className="w-6 h-6 md:w-10 md:h-10" />
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-500 text-center">
          {item.date}
        </p>
        <p className="text-sm mb-4 text-center mt-1">{item.time}</p>
      </div>
    </div>
  );
};

export default MatchCard;
