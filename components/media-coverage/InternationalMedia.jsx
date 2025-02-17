"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import fifaLogo from "@/images/fifa-logo.png";
import un from "@/images/un.jpg";
import arabNews from "@/images/arab-news.jpg";
import Jazeera from "@/images/jazeera.webp";
import euroLogo from "@/images/euro-logo.png";
import nrk from "@/images/nrk.png";

const mediaCategories = [
  "FIFA",
  "UN",
  "Al Jazeera",
  "Euronews",
  "Norway Cup Media",
  "NRK",
  "ARAB NEWS",
];

const mediaCoverage = [
  {
    id: 1,
    outlet: "FIFA",
    logo: fifaLogo,
    title: "FIFA Highlights Pakistan’s Football Talent",
    summary:
      "Recognized Pakistan’s Street Child Football Team among the best in the Street Child World Cup.",
    link: "https://www.fifa.com/news",
    video: "",
  },
  {
    id: 2,
    outlet: "Euronews",
    logo: euroLogo,
    title:
      "Meet the football team from Pakistan who won the hearts of crowds in Qatar",
    summary:
      "In Pakistan, more than 22 million children are out of school, and more than 7.5 million children are on the streets.",
    link: "https://www.euronews.com/culture/2023/04/10/meet-the-football-team-from-pakistan-who-won-the-hearts-of-crowds-in-qatar",
    video: "",
  },
  {
    id: 3,
    outlet: "Al Jazeera",
    logo: Jazeera,
    title: "Street Child World Cup: Pakistan's team share their experiences",
    summary:
      "Hundreds of millions of children all over the world live and work on the streets, facing numerous challenges. Those experiences have been shared by the young footballers from Pakistan who are among the teams taking part in the Street Child World Cup in Doha.",
    link: "https://www.aljazeera.com/news/",
    video: "https://www.youtube.com/embed/DKEaGvoFGLE",
  },
  {
    id: 4,
    outlet: "UN",
    logo: un,
    title:
      "Pakistan’s Street Child Football Team and UN Pakistan - Friendly Match",
    summary:
      "Pakistan’s Street Child Football⚽️ Team took on UN Pakistan in a friendly match on Sunday at the Sports Complex.",
    link: "https://pakistan.un.org/en/239929-pakistan%E2%80%99s-street-child-football-team-and-un-pakistan-friendly-match",
    video: "",
  },
  {
    id: 5,
    outlet: "NRK",
    logo: nrk,
    title:
      'From the Streets to the Norway Cup: "They Came with Worn-Out Football Shoes Taped Together"',
    summary:
      "The Pakistani street football team has sparked enormous enthusiasm. Now, the 17-year-olds are ready for the Norway Cup final.",
    link: "https://www.nrk.no/norge/muslim-hands-pakistan-_-et-lag-med-gategutter-pa-norway-cup-1.16504248",
    video: "",
  },
  {
    id: 5,
    outlet: "ARAB NEWS",
    logo: arabNews,
    title:
      "Pakistan PM promises to promote football after street team’s stellar Norway performance",
    summary:
      "Pakistan’s street child football team is primarily composed of underprivileged children with limited resources",
    link: "https://www.arabnews.com/node/2570967/pakistan",
    video: "https://www.youtube.com/embed/XQUEq6sKluc",
  },
];

const InternationalMedia = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("FIFA");

  const filteredMedia = mediaCoverage.filter(
    (item) => item.outlet === selectedOutlet
  );

  return (
    <div className="px-4 2xl:px-16 pb-[100px]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Global Recognition</h1>
      </div>

      {/* Dropdown Filter */}
      <p className="text-gray-600 mb-2">
        Select a media outlet to filter the news coverage.
      </p>

      {/* Dropdown Filter */}
      <div className="mb-4 relative w-full md:w-1/3">
        <select
          className="px-4 py-2 border border-green-600 font-medium rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-green-600 appearance-none hover:bg-slate-100"
          value={selectedOutlet}
          onChange={(e) => setSelectedOutlet(e.target.value)}
        >
          {mediaCategories.map((category) => (
            <option key={category} value={category} className="custom-dropdown">
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Media Display */}
      {filteredMedia.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredMedia.map((item) => (
            <div key={item.id} className="bg-white shadow-lg p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.logo}
                  alt="Outlet Logo"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-600 mt-2">{item.summary}</p>
              <div className="mt-4 flex justify-between items-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-500 "
                >
                  Read More <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
              {item.video && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="200"
                    src={item.video}
                    title="Media Coverage"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-6">
          No news available for the selected outlet.
        </p>
      )}
    </div>
  );
};

export default InternationalMedia;
