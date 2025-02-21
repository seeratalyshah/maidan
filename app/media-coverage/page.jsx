import FeaturedMedia from "@/app/media-coverage/sections/FeaturedMedia";
import HeroSection from "@/app/media-coverage/sections/HeroSection";
import InternationalMedia from "@/app/media-coverage/sections/InternationalMedia";
import MediaContact from "@/app/media-coverage/sections/MediaContact";
import NationalMedia from "@/app/media-coverage/sections/NationalMedia";
import SocialMedia from "@/app/media-coverage/sections/SocialMedia";
import VideoSocialMediaCoverage from "@/app/media-coverage/sections/VideoMedia";
import React from "react";

const MediaCoverage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <FeaturedMedia />
      <InternationalMedia />
      <NationalMedia />
      <VideoSocialMediaCoverage />
      <SocialMedia />
      <MediaContact />
    </div>
  );
};

export default MediaCoverage;
