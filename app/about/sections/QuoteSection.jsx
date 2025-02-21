import Image from "next/image";
import coachImage from "@/images/general-coach.jpg";

const QuoteSection = () => {
  return (
    <section className="">
      <div className="flex flex-row items-center bg-green-600 text-white">
        {/* Right Side: Coach Image (2/3 Width) - Slightly Shifted Left */}
        <div className="lg:w-1/3 w-full text-left lg:text-left p-4 md:px-16 lg:px-24">
          <h2 className="text-sm text-left md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-snug">
            “THE SECRET OF VICTORY IS SIMPLE: <br />
            WORK, DISCIPLINE AND UNSHAKABLE <br />
            FAITH IN ONE’S STRENGTH”
          </h2>
          <div className="mt-6">
            <p className="font-bold uppercase">Ryan Mitchell</p>
            <p className="text-sm uppercase opacity-80">General Coach</p>
          </div>
        </div>

        {/* Left Side: Quote Text (1/3 Width) */}
        <div className="lg:w-2/3 w-full h-full relative px-4 md:px0 lg:px-0">
          <Image
            src={coachImage}
            alt="Coach Ryan Mitchell"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
