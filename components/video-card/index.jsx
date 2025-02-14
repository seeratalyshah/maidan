import Image from "next/image";

const VideoCard = ({ wid, item }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.image}
          alt="Football Match"
          className={`"w-full ${wid ? "h-[200px]" : "h-[500px]"} object-cover"`}
        />
        <div className="absolute top-0 left-0 font-bold px-4 py-3">
          <button className="flex items-center hover:gap-2 transition-transform bg-white text-black font-bold py-1 px-2 rounded-full shadow-md border border-gray-300">
            {/* Play Icon */}
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            {/* Time Text */}
            <span className="text-md font-bold">16:49</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-2xl text-gray-900 mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
