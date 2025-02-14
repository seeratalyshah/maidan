"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { tickets } from "@/app/data";
import MatchTicket from "@/components/match-ticket";

const TicketSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="px-4 2xl:px-16 py-[100px] bg-green-600">
      <div className="flex justify-between items-end gap-8">
        <h1 className="text-4xl font-bold text-white  w-full max-w-[700px] uppercase leading-1">
          Be part of football history tickets for key matches are now on sale
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <button
            onClick={handlePrev}
            className="text-white bg-black p-3 cursor-pointer hover:bg-gray-400"
          >
            <HiOutlineArrowNarrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-black p-3 cursor-pointer hover:bg-gray-400"
          >
            <HiOutlineArrowNarrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {tickets.map((ticket) => (
            <SwiperSlide key={ticket.id}>
              <MatchTicket item={ticket} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TicketSlider;
