import React from "react";
import VideoCard from "../components/VideoCard";
import { mainVideo, videoNews } from "@/app/data";

const ClubNews = () => {
  return (
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
  );
};

export default ClubNews;
