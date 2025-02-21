import { FaFutbol, FaGraduationCap, FaHandsHelping } from "react-icons/fa";

export default function DonateSection() {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
          <span className="text-green-600"> Donate Now – </span>Make a Real
          Difference
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Every contribution brings us one step closer to empowering children
          through football. Your generosity ensures that they have the right to
          play, learn, and succeed.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        {/* Football Development */}
        <div className="bg-white p-6 shadow-md">
          <div className="flex items-center gap-3">
            <FaFutbol className="text-green-600 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-800">
              Football Development & Training
            </h3>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              ⚽ <strong>£50</strong> – Provides a full kit & football gear for
              one child.
            </li>
            <li>
              ⚽ <strong>£150</strong> – Covers one month of elite coaching for
              a player.
            </li>
            <li>
              ⚽ <strong>£500</strong> – Sponsors a child's full training &
              tournament participation.
            </li>
            <li>
              ⚽ <strong>£1,000+</strong> – Helps fund nationwide football
              trials & international travel.
            </li>
          </ul>
        </div>

        {/* Education & Welfare */}
        <div className="bg-white p-6 shadow-md">
          <div className="flex items-center gap-3">
            <FaGraduationCap className="text-green-600 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-800">
              Education & Welfare
            </h3>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              📚 <strong>£20</strong> – Registers the birth of a street child,
              giving them legal identity.
            </li>
            <li>
              📚 <strong>£27</strong> – Ensures a street child is enrolled in
              school with basic supplies.
            </li>
            <li>
              📚 <strong>£90</strong> – Provides meals for street-connected
              youth for a month.
            </li>
            <li>
              📚 <strong>£300</strong> – Supports vocational training for a
              youth who cannot return to school.
            </li>
          </ul>
        </div>

        {/* Sponsorship & Long-Term Support */}
        <div className="bg-white p-6 shadow-md md:col-span-2">
          <div className="flex items-center gap-3">
            <FaHandsHelping className="text-green-600 text-3xl" />
            <h3 className="text-xl font-semibold text-gray-800">
              Sponsorship & Long-Term Support
            </h3>
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              🤝 <strong>£500</strong> – Sponsor a child for one full year,
              including football training, education, and meals.
            </li>
            <li>
              🤝 <strong>£1,500+</strong> – Corporate Sponsorship opportunities,
              including branding on kits, tournaments, and training camps.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-600 text-white px-6 py-3 text-lg font-semibold uppercase shadow-md hover:bg-green-700 transition">
          Donate Now
        </button>
      </div>
    </section>
  );
}
