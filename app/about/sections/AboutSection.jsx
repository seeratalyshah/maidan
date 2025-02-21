import Image from "next/image";
import logo from "@/images/club_01.JPG"; // Replace with your actual logo path
import trophyPlayer from "@/images/club_01.JPG"; // Replace with your actual image path

const AboutSection = () => {
  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side - Player Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={trophyPlayer}
            alt="Player with Trophy"
            className="shadow-lg"
          />
          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
            <Image src={logo} alt="Atleticos Logo" className="w-24 md:w-32" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
            <span className="text-green-600"> Who We Are</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Maidaan is Pakistan’s largest grassroots football initiative,
            dedicated to empowering street-connected and marginalized youth
            through the transformative power of sports. Founded by Muslim Hands,
            Maidaan is more than just a football program—it is a social movement
            providing opportunity, hope, and a pathway to a brighter future for
            thousands of children who would otherwise be left behind.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We believe that every child deserves a chance—a chance to dream,
            play, learn, and thrive. Football is not just a game for these
            children; it is a tool for empowerment, building confidence,
            discipline, and resilience while opening doors to education,
            vocational training, and life-changing opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
