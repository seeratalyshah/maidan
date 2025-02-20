"use client";

import { useState } from "react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { videoGallery } from "@/app/data";

const VideoSocialMediaCoverage = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-10">
          Watch Our Journey
        </h1>

        {/* Video Gallery Section */}
        <div className="mb-12">
          <div className="">
            <div className="flex justify-between items-end gap-8">
              <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug text-green-600">
                Maidaan’s Journey
              </h1>
              <div className="flex items-center justify-center gap-6 mt-10">
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

            <div className="mt-8 w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={15}
                breakpoints={{
                  374: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 3 },
                }}
                onSwiper={setSwiperInstance}
                className="w-full"
              >
                {videoGallery.map((video) => (
                  <SwiperSlide key={video.id}>
                    <iframe
                      width="100%"
                      height="315"
                      src={video.link} // Replace with actual video URL
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSocialMediaCoverage;
