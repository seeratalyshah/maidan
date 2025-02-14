"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

import slide1 from "@/images/slide1.jpg";
import slide2 from "@/images/slide2.jpg";
import slide3 from "@/images/slide3.jpg";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: slide1,
    title:
      "WHY <span class='text-green-500 italic'>ANDREW HARRIS</span> WAS MAN OF THE MATCH ON SATURDAY",
    buttonText: "Read More",
  },
  {
    id: 2,
    image: slide2,
    title:
      "A STAR PERFORMANCE <span class='text-green-500 italic'>BY JAMES DOE</span> LEADS TO A WIN",
    buttonText: "Read More",
  },
  {
    id: 3,
    image: slide3,
    title:
      "HOW <span class='text-green-500 italic'>EMILY SMITH</span> DOMINATED THE FIELD",
    buttonText: "Read More",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[100vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt="Slide Image"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-black bg-opacity-65"></div>
              <div className="absolute bottom-[100px] left-0 right-0">
                <div className="flex justify-between items-end w-full p-6 md:p-20">
                  <div className="flex flex-col items-start justify-center text-white gap-6">
                    <h1
                      className="text-4xl md:text-6xl font-bold leading-tight w-full max-w-[900px]"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    ></h1>
                    <button className="mt-4 px-10 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium flex items-center gap-4">
                      <span>{slide.buttonText}</span>
                      <FaArrowRight />
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-3 py-1 text-lg font-bold text-white ${
                          activeIndex === index ? "bg-green-600" : ""
                        }`}
                      >
                        0{index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
