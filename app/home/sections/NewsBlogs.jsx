import React from "react";
import NewsCard from "../components/NewsCard";
import NewssCard from "../components/NewssCard";
import FootballStandings from "../components/FootballStandings";
import { newsCards, shortNews } from "@/app/data";

const NewsBlogs = () => {
  return (
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
  );
};

export default NewsBlogs;
