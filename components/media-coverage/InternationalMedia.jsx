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
];

const mediaCoverage = [
  {
    id: 1,
    outlet: "FIFA",
    logo: mediaLogo1,
    title: "FIFA Highlights Pakistan’s Football Talent",
    summary:
      "FIFA recognizes the efforts of Pakistan’s street football team...",
    link: "https://www.fifa.com/news",
    video: "https://www.youtube.com/embed/sample-video1",
  },
  {
    id: 2,
    outlet: "FIFA",
    logo: mediaLogo1,
    title: "FIFA Highlights Pakistan’s Football Talent",
    summary:
      "FIFA recognizes the efforts of Pakistan’s street football team...",
    link: "https://www.fifa.com/news",
    video: "https://www.youtube.com/embed/sample-video1",
  },
  {
    id: 3,
    outlet: "Al Jazeera",
    logo: mediaLogo2,
    title: "Al Jazeera Reports on Pakistan’s Sports Impact",
    summary: "Pakistan’s journey in sports is gaining global attention...",
    link: "https://www.aljazeera.com/news",
    video: "",
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
            <option
              key={category}
              value={category}
              className="custom-dropdown"
            >
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
