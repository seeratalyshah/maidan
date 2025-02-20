"use client";
import Image from "next/image";
import heroImage from "@/images/support-bg.jpg";
import kidImage from "@/images/player_04.png"; // Replace with your image

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Football Stadium"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-end max-w-7xl mx-auto w-full px-6 h-full">
        {/* Left Image */}
        <div className="flex-1 hidden md:block relative h-full">
          <Image
            src={kidImage}
            alt="Kid with football"
            layout="intrinsic"
            width={500}
            height={700}
            className="object-cover absolute bottom-0"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-white text-left pb-20">
          <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight mb-1">
            <span className="text-green-500">Support  </span>Maidaan
          </h1>
          <h1 className="text-xl md:text-4xl font-bold uppercase leading-tight">
            Be Part of Pakistan’s Football Revolution
          </h1>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700 transition-all">
            Donate Now →
          </button>
        </div>
      </div>
    </section>
  );
}
