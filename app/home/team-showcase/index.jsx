import Image from "next/image";
import player1 from "@/images/player-01.png";
import player2 from "@/images/player_02.png";
import player3 from "@/images/player_03.png";
import player4 from "@/images/player_04.png";
import goalkeeper from "@/images/golkeeper.png";
import bgImg from "@/images/bg-img.png";

const TeamShowcase = () => {
  return (
    <div
      className="relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      {/* Dark overlay behind players */}
      <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

      <div className="relative flex items-end justify-center gap-4 px-5 max-w-7xl mx-auto pt-12">
        {/* Left Side Players */}
        <Image
          src={player4}
          alt="Player 1"
          className="w-24 md:w-32 lg:w-52 relative z-10"
        />
        <Image
          src={player2}
          alt="Player 2"
          className="w-28 md:w-36 lg:w-64 relative z-10"
        />

        {/* Center Goalkeeper - adjusted positioning */}
        <Image
          src={goalkeeper}
          alt="Goalkeeper"
          className="w-40 md:w-52 lg:w-80 relative z-10 -mt-10"
        />

        {/* Right Side Players */}
        <Image
          src={player1}
          alt="Player 3"
          className="w-28 md:w-36 lg:w-64 relative z-10"
        />
        <Image
          src={player3}
          alt="Player 4"
          className="w-24 md:w-32 lg:w-52 relative z-10"
        />
      </div>
    </div>
  );
};

export default TeamShowcase;
