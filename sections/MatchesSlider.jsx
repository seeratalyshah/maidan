"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { useState } from "react";
import MatchCard from "@/components/match-card";
import atleticos from "@/images/atleticos.png";
import ailton from "@/images/ailton.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export const matches = [
  {
    id: 1,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
  {
    id: 2,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
  {
    id: 3,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
  {
    id: 4,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
  {
    id: 5,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
  {
    id: 6,
    team_one: "ATLETICOS FC",
    team_one_icon: atleticos,
    team_two: "AILTON FC",
    team_two_icon: ailton,
    date: "MAY 6, 2024, EMIRATES STADIUM",
    time: "2:51 pm",
  },
];

const MatchSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="py-[100px] bg-[#F5F5F5] px-4 2xl:px-16">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {matches.map((match) => (
            <SwiperSlide key={match.id}>
              <MatchCard item={match} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center gap-8 mt-10">
        <button
          onClick={handlePrev}
          className="text-white bg-black p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-black p-3 cursor-pointer transition-opacity duration-300 hover-bg"
        >
          <HiOutlineArrowNarrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MatchSlider;
