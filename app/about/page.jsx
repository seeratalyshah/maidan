import AboutSection from "@/app/about/AboutSection";
import AwardsSection from "@/app/about/AwardsSection";
import BenefitsSection from "@/app/about/BenefitsSection";
import CoachesSection from "@/app/about/CoachesSection";
import HeroSection from "@/app/about/HeroSection";
import QuoteSection from "@/app/about/QuoteSection";
import VideoSection from "@/app/about/VideoSection";
import WhatWeDo from "@/app/about/WhatWeDo";
import WhyMaidaan from "@/app/about/WhyMaidaan";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <AboutSection />
      <WhyMaidaan />
      <WhatWeDo />
      <div>
        <AwardsSection />
        <QuoteSection />
      </div>
      <CoachesSection />
      <BenefitsSection />
      <VideoSection />
    </div>
  );
};

export default AboutUs;
