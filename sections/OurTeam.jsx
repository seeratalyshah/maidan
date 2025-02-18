"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { useState } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import player1 from "@/images/player-01.png";
import player2 from "@/images/player_02.png";
import player3 from "@/images/player_03.png";
import player4 from "@/images/player_04.png";
import goalkeeper from "@/images/golkeeper.png";
import bgImg from "@/images/bg-img.png";

const players = [
  { id: 1, number: "1", name: "HENRY WILSON", position: "GOALKEEPER", image: goalkeeper },
  { id: 2, number: "2", name: "PLAYER 2", position: "DEFENDER", image: player2 },
  { id: 3, number: "3", name: "PLAYER 3", position: "MIDFIELDER", image: player3 },
  { id: 4, number: "4", name: "PLAYER 4", position: "FORWARD", image: player4 },
  { id: 5, number: "5", name: "PLAYER 5", position: "DEFENDER", image: player1 },
];

const OurTeam = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="flex flex-col pt-[80px] pb-[60px] md:pt-[200px] md:pb-[100px]">
      <div className="px-4 2xl:px-16 mb-10">
        <p className="text-green-600 text-md font-bold text-center mb-3">Our Team</p>
        <h1 className="text-4xl font-bold text-center uppercase">meet atleticos players</h1>
      </div>
      <div className="relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bgImg.src})` }}>
        <div className="absolute inset-0 bg-black opacity-85 z-0"></div>
        <div className="relative flex items-end justify-center gap-4 px-5 max-w-7xl mx-auto pt-12">
          {players.map((player, index) => (
            <Image
              key={player.id}
              src={players[(index + activeIndex) % players.length].image}
              alt={player.name}
              className={`w-24 md:w-32 lg:w-52 relative z-10 ${index === 2 ? 'w-40 md:w-52 lg:w-80 -mt-10' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#F5F5F5] px-4 2xl:px-16">
        <div className="flex items-center gap-4 mt-10" style={{ width: "100%", maxWidth: "600px", marginInline: "auto" }}>
          <button onClick={handlePrev} className="z-10 text-black bg-white p-2 md:p-3 cursor-pointer transition-opacity duration-300">
            <HiOutlineArrowNarrowLeft size={24} />
          </button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1}
            spaceBetween={15}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
            direction="horizontal"
          >
            {players.map((player) => (
              <SwiperSlide key={player.id}>
                <div className="p-6 text-center relative md:w-[500px] flex flex-col items-center justify-center z-10 w-full h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <span className="text-[300px] font-bold text-white opacity-60">{player.number}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-black">{player.name}</h2>
                  <p className="text-sm font-semibold mt-3">POSITION: <span className="text-green-600">{player.position}</span></p>
                  <button className="mt-4 bg-green-600 text-white py-2 px-6 font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition">
                    FULL INFO →
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button onClick={handleNext} className="z-10 text-black bg-white p-2 md:p-3 cursor-pointer transition-opacity duration-300">
            <HiOutlineArrowNarrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
