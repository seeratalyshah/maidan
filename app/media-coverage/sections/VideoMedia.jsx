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
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      setTimeout(() => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      }, 100);
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      setTimeout(() => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      }, 100);
    }
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
                  className={`p-3 cursor-pointer transition ${
                    isBeginning
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-black text-white hover:opacity-65"
                  }`}
                  disabled={isBeginning}
                >
                  <HiOutlineArrowNarrowLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className={`p-3 cursor-pointer transition ${
                    isEnd
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-black text-white hover:opacity-65"
                  }`}
                  disabled={isEnd}
                >
                  <HiOutlineArrowNarrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="mt-8 w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                direction="horizontal"
                slidesPerView={3} // Ensures 3 videos are shown initially
                spaceBetween={15}
                breakpoints={{
                  320: { slidesPerView: 1 }, // Mobile: 1 video
                  768: { slidesPerView: 2 }, // Tablets: 2 videos
                  1024: { slidesPerView: 3 }, // Desktop: 3 videos
                }}
                onSwiper={setSwiperInstance}
                className="w-full"
              >
                {videoGallery.map((video) => (
                  <SwiperSlide key={video.id} className="flex justify-center">
                    <div className="w-[500px] h-[300px] bg-black overflow-hidden">
                      {video.type === "youtube" ? (
                        <iframe
                          className="w-full h-full"
                          src={video.link}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video className="w-full h-full object-cover" controls>
                          <source src={video.link} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
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
