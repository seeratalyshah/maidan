import Image from "next/image";
import trophy1 from "@/images/scwc.jpg";
import trophy2 from "@/images/norway-cup.jpeg";
import trophy3 from "@/images/national.jpeg";
import trophy4 from "@/images/isb-conference.jpeg";

const awards = [
  {
    year: "2022",
    title: "Street Child World Cup Participants",
    desc: "Giving street-connected children a platform to shine. ",
    image: trophy1,
  },

  {
    year: "2023",
    title: "Advocating for child rights & welfare at a policy level",
    desc: "Street Child Resolution Passed in Pakistan’s National Assembly",
    image: trophy3,
  },
  {
    year: "2024",
    title: "Norway Cup Participation ",
    desc: "Showcasing Pakistan’s football talent on an international level.",
    image: trophy2,
  },
  {
    year: "2017",
    title: '"I Am Somebody" Conference in Islamabad',
    desc: "Bringing together government officials, sports bodies, and civil society leaders to discuss the rights of marginalized children.",
    image: trophy4,
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
        <span className="text-green-600">
          International Recognition & Achievements
        </span>
      </h2>
      <p className="mt-4 text-gray-600 leading-relaxed mb-10">
        Maidaan has received global recognition, representing Pakistan’s street
        children on the world football stage.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center shadow-xl">
            <Image
              src={award.image}
              alt={award.title}
              className="w-22 h-22 md:w-50 md:h-50 object-contain"
            />
            <div className="p-4">
              <p className="mt-4 text-green-600 font-semibold">{award.year}</p>
              <h3 className="text-lg font-bold uppercase">{award.title}</h3>
              <p className="text-sm">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
