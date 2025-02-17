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
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
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
    <div className="bg-[#F5F5F5] px-4 2xl:px-16 py-[100px]">
      <div className="flex items-center gap-4 mt-10" style={{width: "100%", maxWidth: "600px", marginInline: "auto"}}>
        <button
          onClick={handlePrev}
          className="z-10 text-black  bg-white p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowLeft size={32} />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 1 },
            740: { slidesPerView: 1 },
            1275: { slidesPerView: 1 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {players.map((player) => (
            <SwiperSlide key={player.id} className="">
              <PlayerCard item={player} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handleNext}
          className="z-10 text-black  bg-white p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default PlayersSlider;
