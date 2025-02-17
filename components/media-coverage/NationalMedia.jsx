"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import mediaLogo1 from "@/images/fifa-logo.png";
import mediaLogo2 from "@/images/geo-logo.png";

const mediaCategories = [
  "FIFA",
  "UN",
  "Al Jazeera",
  "Euronews",
  "Norway Cup Media",
  "Geo",
];

const mediaCoverage = [
  {
    id: 1,
    outlet: "FIFA",
    logo: mediaLogo1,
    title: "Team’s progress in Norway Cup & Street Child World Cup",
    summary:
      "FIFA recognizes the efforts of Pakistan’s street football team...",
    link: "https://www.fifa.com/news",
    video: "",
  },
  {
    id: 2,
    outlet: "UN",
    logo: mediaLogo2,
    title: "Recognition by Pakistani Government Officials",
    summary: "Pakistan’s journey in sports is gaining global attention...",
    link: "https://www.aljazeera.com/news",
    video: "",
  },
  {
    id: 3,
    outlet: "UN",
    logo: mediaLogo2,
    title: "Press Releases on Training Camps & Team Selection",
    summary: "Pakistan’s journey in sports is gaining global attention...",
    link: "https://www.aljazeera.com/news",
    video: "",
  },
  {
    id: 4,
    outlet: "FIFA",
    logo: mediaLogo1,
    title: "Recognition by Pakistani Government Officials",
    summary: "Pakistan’s journey in sports is gaining global attention...",
    link: "https://www.aljazeera.com/news",
    video: "",
  },
  {
    id: 5,
    outlet: "FIFA",
    logo: mediaLogo1,
    title: "Press Releases on Training Camps & Team Selection",
    summary: "Pakistan’s journey in sports is gaining global attention...",
    link: "https://www.aljazeera.com/news",
    video: "",
  },
];

const NationalMedia = () => {
  const [selectedOutlet, setSelectedOutlet] = useState("FIFA");

  const filteredMedia = mediaCoverage.filter(
    (item) => item.outlet === selectedOutlet
  );

  return (
    <div className="px-4 2xl:px-16 py-[100px] bg-[#F5F5F5]">
      <h1 className="text-4xl font-bold mb-10">
        Pakistan’s Pride in the Media'n
      </h1>

      {/* Filters */}
      <div className="flex space-x-4 overflow-x-auto pb-4 border-b">
        {mediaCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-md font-medium border rounded-md hover:opacity-80 ${
              selectedOutlet === category
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedOutlet(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Media Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
                className="text-green-600 flex items-center"
              >
                Read More
                <FaExternalLinkAlt className="ml-2" />
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
    </div>
  );
};

export default NationalMedia;
