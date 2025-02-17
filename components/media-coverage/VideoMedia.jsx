"use client";

import { useState, useEffect } from "react";
import slide1 from "@/images/slide1.jpg";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { tickets, videoGallery } from "@/app/data";
import TweetCard from "./TweetCard";
import InstagramPostCard from "./InstagramPostCard";

const VideoSocialMediaCoverage = () => {
  const [tweets, setTweets] = useState([]);
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

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
    <section className="px-4 2xl:px-16 py-[100px] bg-[#F5F5F5]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Watch Our Journey</h1>

        {/* Video Gallery Section */}
        <div className="mb-12">
          <div className="">
            <div className="flex justify-between items-end gap-8">
              <h1 className="text-4xl font-bold text-green-600  w-full max-w-[700px] uppercase leading-1 text-left">
                Maidaan’s Journey
              </h1>
              <div className="flex items-center justify-center gap-8 mt-10">
                <button
                  onClick={handlePrev}
                  className="text-white bg-black p-3 cursor-pointer hover:bg-gray-400"
                >
                  <HiOutlineArrowNarrowLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="text-white bg-black p-3 cursor-pointer hover:bg-gray-400"
                >
                  <HiOutlineArrowNarrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="mt-8">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
                spaceBetween={15}
                breakpoints={{
                  480: { slidesPerView: 1 }, // Small screens: 1 slide
                  640: { slidesPerView: 2 }, // Medium screens: 2 slides
                  1024: { slidesPerView: 3 }, // Large screens: 3 slides
                }}
                onSwiper={setSwiperInstance}
                className="w-full"
              >
                {videoGallery.map((video) => (
                  <SwiperSlide key={video.id}>
                    <iframe
                      width="100%"
                      height="315"
                      src={video.link} // Replace with actual video URL
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Social Media Integration Section */}
        <div>
          <h2 className="text-3xl font-semibold my-24">
            Follow Us on Social Media
          </h2>

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
      </div>
    </section>
  );
};

export default VideoSocialMediaCoverage;
