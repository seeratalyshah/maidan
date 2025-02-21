import MatchSlider from "@/app/home/sections/MatchesSlider";
import TicketSlider from "@/app/home/sections/TicketsSlider";
import NewsBlogs from "./home/sections/NewsBlogs";
import ClubNews from "./home/sections/ClubNews";
import TeamShowcase from "./home/components/TeamShowcase";
import HeroSlider from "./home/components/HeroSlider";
import MatchSection from "./home/sections/MatchSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <div>
        <HeroSlider />
        <MatchSection />
        <MatchSlider />
      </div>
      <NewsBlogs />
      <ClubNews />
      <TicketSlider />
      <div className="flex flex-col">
        <div className="px-16 md:px-24 mb-10">
          <p className="text-green-600 text-md font-bold text-center mb-3">
            Our Team
          </p>
          <h1 className="text-4xl font-bold text-center uppercase">
            meet atleticos players
          </h1>
        </div>
        <TeamShowcase />
        {/* <PlayerSlider /> */}
      </div>
    </div>
  );
}
