import fifa from "@/images/fifa.png";
import expanding from "@/images/expanding.png";
import football from "@/images/workout.png";
import social from "@/images/social.png";
import Image from "next/image";

const benefits = [
  {
    id: 1,
    icon: fifa,
    title: "FIFA/AFC Partnership",
    description:
      "Become Pakistan’s official grassroots football development program.",
  },

  {
    id: 3,
    icon: social,
    title: "Self-Sustaining Social Enterprise",
    description:
      "Funding Maidaan through merchandise, sponsorships, and events.",
  },

  {
    id: 4,
    icon: expanding,
    title: "Expanding to 50+ Cities",
    description: "Reaching more underserved communities",
  },
  {
    id: 2,
    icon: football,
    title: "Women’s Football Initiative",
    description: "Launching female-focused training programs",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Text Section */}
        <div>
          <h4 className="text-green-600 font-bold text-sm">What’s Next?</h4>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 uppercase">
            The Future of Maidaan
          </h2>
          <p className="text-gray-600 mt-4">
            Maidaan's future is focused on becoming Pakistan’s official
            grassroots football development program through a FIFA/AFC
            partnership. As a self-sustaining social enterprise, it aims to
            secure funding via merchandise, sponsorships, and events. Expansion
            plans include reaching over 50 cities to bring football to
            underserved communities. Additionally, Maidaan is committed to
            launching dedicated training programs for women, fostering
            inclusivity and growth in Pakistan’s football scene.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-green-700 transition">
            Help Us Build the Future of Pakistani Football! →
          </button>
        </div>

        {/* Right Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((item) => (
            <BenefitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

// Benefit Card Component
function BenefitCard({ item }) {
  return (
    <div className="bg-white p-6 shadow-md flex flex-col justify-center items-center text-center">
      <div className="text-green-600 text-5xl">
        <Image src={item.icon} alt="icon" />
      </div>
      <h3 className="font-bold text-lg mt-4 uppercase">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.description}</p>
    </div>
  );
}
