"use client";
import { useState } from "react";
import Image from "next/image";
import slide1 from "@/images/media.jpg";
import { IoTriangle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full px-4 md:px-16 lg:px-24 mb-16 md:mb-24 lg:mb-32">
      <div className="relative h-[200px] md:h-[600px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Full Overlay */}
        <div className="absolute inset-0">
          <Image
            src={slide1}
            alt="Football Match"
            fill
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Content (Centered) */}
        <div className="relative z-10 flex justify-between items-center text-center px-2 w-full max-w-7xl mx-auto">
          <h2 className="text-md md:text-4xl max-w-xl text-left uppercase font-extrabold">
            Watch the amazing training atmosphere at our club with talented
            coaches
          </h2>

          {/* Play Button with Smooth Hover Animation */}
          <button onClick={() => setIsOpen(true)} className="group">
            <div className="bg-white p-8 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out group-hover:p-2">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center">
                <IoTriangle size={24} className="text-white" />
              </div>
            </div>
          </button>
        </div>

        {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 w-[90%] md:w-[60%] lg:w-[50%] rounded-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-green-600 text-white p-2 rounded-full text-lg shadow-lg hover:bg-green-700 transition-all"
            >
              <RxCross2 />
            </button>
            <div className="relative pt-[56.25%]">
              <video className="absolute top-0 left-0 w-full h-full" controls autoPlay>
                <source src="/videos/training-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
