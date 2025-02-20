import FeaturedMedia from "@/app/media-coverage/FeaturedMedia";
import HeroSection from "@/app/media-coverage/HeroSection";
import InternationalMedia from "@/app/media-coverage/InternationalMedia";
import MediaContact from "@/app/media-coverage/MediaContact";
import NationalMedia from "@/app/media-coverage/NationalMedia";
import SocialMedia from "@/app/media-coverage/SocialMedia";
import VideoSocialMediaCoverage from "@/app/media-coverage/VideoMedia";
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
