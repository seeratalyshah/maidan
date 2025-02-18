import FootballStandings from "@/components/football-standings";
import HeroSlider from "@/components/her-silder";
import MatchCard from "@/components/match-card";
import MatchSection from "@/components/match-section";
import MatchTicket from "@/components/match-ticket";
import NewssCard from "@/components/new-news-card";
import NewsCard from "@/components/news-card";
import PlayerCard from "@/components/player-card";
import TeamShowcase from "@/components/team-showcase";
import VideoCard from "@/components/video-card";
import bgImage from "@/images/tickets_BG.jpg";
import {
  mainVideo,
  matches,
  newsCards,
  shortNews,
  tickets,
  videoNews,
} from "./data";
import MatchSlider from "@/sections/MatchesSlider";
import TicketSlider from "@/sections/TicketsSlider";
import PlayerSlider from "@/sections/PlayersSlider";

export default function Home() {
  return (
    <div className="">
      <HeroSlider />
      <MatchSection />
      <MatchSlider />

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 2xl:px-16 gap-8 py-[80px] md:py-[120px] lg:py-[200px]">
        <div className="col-span-1 lg:col-span-2">
          <div className="mb-4">
            <p className="text-green-600 text-md font-bold">Our Blog</p>
            <h1 className="text-4xl font-bold">Recent club news</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsCards.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {shortNews.map((item) => (
              <NewssCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="mb-4">
            <p className="text-green-600 text-md font-bold">
              <span className="text-black">Season</span> 2023-2024
            </p>
            <h1 className="text-4xl font-bold">League Tables</h1>
          </div>
          <div className="">
            <FootballStandings />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 2xl:px-16 py-[80px] md:py-[120px] lg:py-[200px] bg-[#F5F5F5]">
        <VideoCard item={mainVideo} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoNews.map((item) => (
            <VideoCard key={item.id} item={item} wid={true} />
          ))}
        </div>
      </div>
      <TicketSlider />
      <div className="flex flex-col pt-[80px] pb-[60px] md:pt-[200px] md:pb-[100px]">
        <div className="px-4 2xl:px-16 mb-10">
          <p className="text-green-600 text-md font-bold text-center mb-3">
            Our Team
          </p>
          <h1 className="text-4xl font-bold text-center uppercase">
            meet atleticos players
          </h1>
        </div>
        <TeamShowcase />
        <PlayerSlider />
      </div>
    </div>
  );
}
