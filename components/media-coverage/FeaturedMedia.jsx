import React from "react";
import news1 from "@/images/news1.JPG";
import news4 from "@/images/news4.JPG";
import Image from "next/image";
import geoLogo from "@/images/geo-logo.png";
import fifaLogo from "@/images/fifa-logo.png";
import euroLogo from "@/images/euro-logo.png";
import nationLogo from "@/images/nation-logo.png";
import appLogo from "@/images/app-logo.png";
import samaLogo from "@/images/sama-logo.jpg";

const featuredNews = [
  {
    id: 1,
    image: news1,
    newsChannels: [fifaLogo],
    title:
      "Recognized Pakistan’s Street Child Football Team among the best in the Street Child World Cup",
    date: "October 14, 2022",
    description:
      "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley ...",
  },
  {
    id: 2,
    image: news4,
    newsChannels: [euroLogo],
    title:
      "Highlighted Maidaan’s impact, showcasing Pakistan’s team winning the hearts of crowds in Qatar",
    date: "October 14, 2022",
    description:
      "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley ...",
  },
  {
    id: 3,
    image: news4,
    newsChannels: [geoLogo, nationLogo],
    title:
      "Reported on Pakistan’s qualification for the Norway Cup 2024 playoffs and the official squad announcement",
    date: "October 14, 2022",
    description:
      "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley ...",
  },
  {
    id: 4,
    image: news4,
    newsChannels: [appLogo, samaLogo],
    title:
      "Covered the Pakistan team’s arrival in Oslo and their journey in the Norway Cup 2024",
    date: "October 14, 2022",
    description:
      "National league football stadiums serve as iconic symbols of passion, rivalry, and sporting excellence around the world. From the grandeur of Wembley ...",
  },
];

const FeaturedMedia = () => {
  return (
    <div className="px-4 2xl:px-16  py-[200px]">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Latest Headlines</h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {featuredNews.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg overflow-hidden border-t border-slate-100 h-full flex flex-col"
          >
            <div className="flex justify-between items-end px-4 pb-2">
              <span className="text-md text-green-600 font-semibold">
                News Channels
              </span>
              <div className="flex items-center gap-2 mt-2">
                {item.newsChannels.map((news, index) => (
                  <Image
                    src={news}
                    alt="news-logo"
                    className="w-8 h-8 rounded-md"
                    key={index}
                  />
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div>
              <Image
                src={item.image}
                alt="Football Match"
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-gray-500 text-xs">{item.date}</p>
              <h3 className="font-bold text-lg text-gray-900 mt-1 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                {item.description}
              </p>

              {/* Button at the bottom */}
              <div className="mt-auto">
                <button className="w-full px-8 py-2 bg-green-600 hover:bg-green-700 text-white text-md font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMedia;
