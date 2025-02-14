import Image from "next/image";
import { FaRegEye, FaRegComment } from "react-icons/fa";
import slide1 from "@/images/slide1.jpg"; 


const NewssCard = ({ item }) => {
  return (
    <div className="flex bg-white overflow-hidden p-4 items-center gap-4">
      {/* Image Section */}
      <div className="w-32 h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt="Football Match"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <p className="text-gray-500 text-xs">{item.date}</p>
        <h3 className="font-bold text-sm text-gray-900 mt-1">{item.title}</h3>

        {/* Footer with icons */}
        <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs">
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

export default NewssCard;
