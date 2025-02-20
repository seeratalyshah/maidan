import FootballStandings from "@/app/home/football-standings";
import HeroSlider from "@/app/home/her-silder";
import MatchCard from "@/app/home/match-card";
import MatchSection from "@/app/home/match-section";
import MatchTicket from "@/app/home/match-ticket";
import NewssCard from "@/app/home/new-news-card";
import NewsCard from "@/app/home/news-card";
import PlayerCard from "@/app/home/player-card";
import TeamShowcase from "@/app/home/team-showcase";
import VideoCard from "@/app/home/video-card";
import bgImage from "@/images/tickets_BG.jpg";
import {
  mainVideo,
  matches,
  newsCards,
  shortNews,
  tickets,
  videoNews,
} from "./data";
import MatchSlider from "@/app/home/MatchesSlider";
import TicketSlider from "@/app/home/TicketsSlider";
import PlayerSlider from "@/app/home/PlayersSlider";
import OurTeam from "@/app/home/OurTeam";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
      <div>
        <HeroSlider />
        <MatchSection />
        <MatchSlider />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-16 lg:px-24 gap-8">
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

      <div className="p-4 md:p-16 lg:p-24 bg-[#F5F5F5]">
        <div className="mb-4">
          <p className="text-green-600 text-md font-bold">Our Blog</p>
          <h1 className="text-4xl font-bold">Recent club news</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VideoCard item={mainVideo} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoNews.map((item) => (
              <VideoCard key={item.id} item={item} wid={true} />
            ))}
          </div>
        </div>
      </div>
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
      {/* <OurTeam /> */}
    </div>
  );
}
