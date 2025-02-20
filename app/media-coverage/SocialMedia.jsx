"use client";
import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";
import InstagramPostCard from "./InstagramPostCard";
import slide1 from "@/images/slide1.jpg";

const SocialMedia = () => {
  const [tweets, setTweets] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  // Fetch latest tweets and Instagram posts (You can replace this with API calls to your backend)
  useEffect(() => {
    // Mocking tweet fetching
    setTweets([
      {
        id: 1,
        name: "Maidaan Official",
        username: "MaidaanPK",
        profileImage: slide1, // Replace with actual profile URL
        content:
          "Our team is ready for the next challenge! ⚽🔥 #FootballForAll #MaidaanPakistan",
        hashtags: ["FootballForAll", "MaidaanPakistan"],
      },
      {
        id: 2,
        name: "Football Fan",
        username: "SoccerLover99",
        profileImage: slide1,
        content:
          "Amazing performance by Maidaan's team today! 🎉👏 #StreetFootball",
        hashtags: ["StreetFootball"],
      },
      {
        id: 3,
        name: "Sports Analyst",
        username: "SportsGuru",
        profileImage: slide1,
        content:
          "Maidaan is making waves in the football world! 🌎⚽ #FootballForAll",
        hashtags: ["FootballForAll"],
      },
    ]);

    // Mocking Instagram post fetching
    setInstagramPosts([
      {
        id: 1,
        imageUrl: slide1,
        caption: "Team Maidaan at the street football tournament!",
      },
      {
        id: 2,
        imageUrl: slide1,
        caption: "Celebrating another victory for Maidaan! #FootballForAll",
      },
    ]);
  }, []);
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-10">Follow Us on Social Media</h1>

        {/* Latest Tweets Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-green-600 text-left">
            Latest Tweets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>

        {/* Latest Instagram Posts Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-6 text-green-600 text-left">
            Latest Instagram Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <InstagramPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
