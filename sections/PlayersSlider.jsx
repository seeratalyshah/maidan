"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import PlayerCard from "@/components/player-card";

const players = [
  {
    id: 1,
    number: "1",
    name: "HENRY WILSON",
    position: "GOALKEEPER",
  },
  {
    id: 2,
    number: "2",
    name: "HENRY WILSON",
    position: "GOALKEEPER",
  },
  {
    id: 3,
    number: "3",
    name: "HENRY WILSON",
    position: "GOALKEEPER",
  },
];

const PlayersSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="bg-[#F5F5F5] px-4 2xl:px-16">
      <div
        className="flex items-center gap-4 mt-10"
        style={{ width: "100%", maxWidth: "600px", marginInline: "auto" }}
      >
        <button
          onClick={handlePrev}
          className="z-10 text-black bg-white p-2 md:p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowLeft size={24} />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1} // Always show 1 card per screen size
          spaceBetween={15}
          onSwiper={setSwiperInstance}
          className="w-full"
          direction="horizontal"
        >
          {players.map((player) => (
            <SwiperSlide key={player.id}>
              <PlayerCard item={player} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handleNext}
          className="z-10 text-black bg-white p-2 md:p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PlayersSlider;
