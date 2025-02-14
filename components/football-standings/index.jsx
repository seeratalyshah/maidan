import React from "react";
import Image from "next/image";
import icon from "@/images/ailton.png";

const teams = [
  {
    rank: 1,
    name: "HEREFORD UNITED",
    played: 16,
    won: 10,
    draw: 3,
    lost: 3,
    gd: 16,
    pts: 33,
    logo: icon,
  },
  {
    rank: 2,
    name: "CRESTWOOD CITY FC",
    played: 15,
    won: 10,
    draw: 2,
    lost: 3,
    gd: 6,
    pts: 32,
    logo: icon,
  },
  {
    rank: 3,
    name: "IAMASINIA CLUB",
    played: 14,
    won: 8,
    draw: 2,
    lost: 4,
    gd: 7,
    pts: 26,
    logo: icon,
  },
  {
    rank: 4,
    name: "SALFORD RANGERS",
    played: 16,
    won: 8,
    draw: 1,
    lost: 7,
    gd: 2,
    pts: 25,
    logo: icon,
  },
  {
    rank: 5,
    name: "RIVERSIDE ROVERS",
    played: 17,
    won: 7,
    draw: 2,
    lost: 8,
    gd: 3,
    pts: 23,
    logo: icon,
  },
  {
    rank: 6,
    name: "CORTRAIK FC",
    played: 13,
    won: 7,
    draw: 0,
    lost: 6,
    gd: 13,
    pts: 21,
    logo: icon,
  },
  {
    rank: 7,
    name: "CRIMSON CITY FC",
    played: 15,
    won: 6,
    draw: 1,
    lost: 8,
    gd: -8,
    pts: 19,
    logo: icon,
  },
  {
    rank: 8,
    name: "AILTON FC",
    played: 13,
    won: 5,
    draw: 3,
    lost: 5,
    gd: -2,
    pts: 18,
    logo: icon,
  },
  {
    rank: 9,
    name: "FC SPARTANS",
    played: 13,
    won: 4,
    draw: 3,
    lost: 6,
    gd: -6,
    pts: 15,
    logo: icon,
  },
  {
    rank: 10,
    name: "ATLETICOS FC",
    played: 15,
    won: 4,
    draw: 3,
    lost: 8,
    gd: -10,
    pts: 15,
    logo: icon,
  },
  {
    rank: 11,
    name: "FORGEFIELD FC",
    played: 14,
    won: 3,
    draw: 3,
    lost: 8,
    gd: -10,
    pts: 12,
    logo: icon,
  },
  {
    rank: 12,
    name: "TOLUSIA FC",
    played: 15,
    won: 3,
    draw: 3,
    lost: 9,
    gd: -11,
    pts: 12,
    logo: icon,
  },
];

const FootballStandings = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-600 text-white text-left">
            <th className="p-3">Football Club</th>
            <th className="p-3">PL</th>
            <th className="p-3">W</th>
            <th className="p-3">D</th>
            <th className="p-3">L</th>
            <th className="p-3">GD</th>
            <th className="p-3">PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.rank}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-3 py-4 flex items-center gap-3">
                <span className="font-semibold text-sm">{team.rank}</span>
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="text-sm font-semibold">{team.name}</span>
              </td>
              <td className="font-semibold text-md">{team.played}</td>
              <td className="font-semibold text-md">{team.won}</td>
              <td className="font-semibold text-md">{team.draw}</td>
              <td className="font-semibold text-md">{team.lost}</td>
              <td className="font-semibold text-md">{team.gd}</td>
              <td className="font-semibold text-md">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FootballStandings;
