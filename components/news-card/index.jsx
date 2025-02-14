import Image from "next/image";
import { FaRegEye, FaRegComment } from "react-icons/fa";

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
        <div className="absolute top-0 left-0 bg-green-600 text-white text-sm font-bold px-4 py-3">
          GOALKEEPERS
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-lg text-gray-900 mt-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>

        {/* Footer with icons */}
        <div className="flex items-center justify-start gap-4 mt-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <FaRegEye className="text-green-600" /> {item.views}
          </div>
          <div className="flex items-center gap-1">
            <FaRegComment className="text-green-600" /> {item.comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
