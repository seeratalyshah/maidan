import DonateSection from "@/app/support-maidaan/DonateSection";
import HeroSection from "@/app/support-maidaan/HeroSection";
import HowToDonate from "@/app/support-maidaan/HowToDonate";
import MainSection from "@/app/support-maidaan/MainSection";
import WhySupportMaidaan from "@/app/support-maidaan/WhySupportMaidan";
import React from "react";

const Support = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <HeroSection />
      <MainSection />
      <DonateSection />
      <HowToDonate />
      <WhySupportMaidaan />
    </div>
  );
};

export default Support;
