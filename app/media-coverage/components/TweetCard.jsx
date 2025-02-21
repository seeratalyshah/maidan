import { useEffect, useState } from "react";
import Image from "next/image";

const TweetCard = ({ tweet }) => {
  return (
    <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-6 cursor-pointer shadow-lg transition-transform transform hover:scale-105 duration-300">
      {/* Profile Section */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-blue-400">
          <Image
            src={tweet.profileImage}
            alt={tweet.username}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div className="ft">
          <h5 className="font-semibold text-black">{tweet.name}</h5>
          <p className="text-gray-500 text-sm text-left">@{tweet.username}</p>
        </div>
      </div>

      {/* Tweet Content */}
      <p className="text-gray-700 text-left">{tweet.content}</p>

      {/* Extracted Hashtags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tweet.hashtags.map((tag, index) => (
          <span key={index} className="text-blue-400 text-sm font-medium">
            #{tag}
          </span>
        ))}
      </div>

      {/* Twitter Icon */}
      <div className="absolute bottom-4 right-4 text-blue-400 text-lg">
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default TweetCard;
