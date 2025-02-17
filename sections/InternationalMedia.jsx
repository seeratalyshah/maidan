import React from "react";

const InternationalMedia = () => {
  return (
    <div className="px-4 2xl:px-16 py-[100px] bg-[#F5F5F5]">
      <div className="mb-4">
        <h1 className="text-4xl font-bold">Global Recognition</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
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

export default InternationalMedia;
