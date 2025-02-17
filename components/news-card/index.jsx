import Image from "next/image";
import { FaRegEye, FaRegComment } from "react-icons/fa";
import geoLogo from "@/images/geo-logo.png";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={item.image}
          alt="Football Match"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-2 left-2 bg-white border text-sm font-bold px-1 py-1 rounded-lg">
          <Image src={geoLogo} alt="geo-logo" className="w-8 h-8 rounded-lg" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>

        {/* Footer with icons */}
        <div className="flex justify-between items-center gap-2 mt-4">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <FaRegEye className="text-green-600" /> {item.views}
            </div>
            <div className="flex items-center gap-1">
              <FaRegComment className="text-green-600" /> {item.comments}
            </div>
          </div>
            <span className="text-sm text-green-600 hover:text-green-700 cursor-pointer">Read More</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
