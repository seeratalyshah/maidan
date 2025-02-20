import Image from "next/image";
import slide1 from "@/images/coach1.jpg";

export default function CoachesSection() {
  const coaches = [
    { name: "Andrew Harris", position: "Mail Coach", image: slide1 },
    { name: "David Bennett", position: "Coach", image: slide1 },
    { name: "John Foster", position: "Coach", image: slide1 },
    { name: "Ethan Brooks", position: "Strategy Coach", image: slide1 },
  ];

  return (
    <section className="px-4 md:px-16 lg:px-24">
      <div className="mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold uppercase leading-snug mb-10 text-center">OUR COACHES</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white">
              {/* Ensure the image fills the container */}
              <div className="relative w-full h-80">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4 pl-2">{coach.name}</h3>
              <p className="text-gray-600 pl-2">Position: {coach.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
