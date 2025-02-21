import {
  FaFutbol,
  FaGlobe,
  FaBookOpen,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

export default function WhySupportMaidaan() {
  return (
    <section className="bg-[#F5F5F5] p-4 md:p-16 lg:p-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
          Why Support <span className="text-green-600">Maidaan?</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Empowering street-connected youth through football, education, and
          life-changing opportunities.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 bg-white p-5 shadow-md">
          <FaFutbol className="text-green-600 text-3xl" />
          <p className="text-gray-700">
            <strong>Pakistan’s Largest Grassroots Football Initiative</strong> –
            A project that empowers street-connected youth.
          </p>
        </div>
        <div className="flex items-start gap-4 bg-white p-5 shadow-md">
          <FaGlobe className="text-green-600 text-3xl" />
          <p className="text-gray-700">
            <strong>Global Recognition & Impact</strong> – Representing Pakistan
            in Norway Cup, Street Child World Cup & international tournaments.
          </p>
        </div>
        <div className="flex items-start gap-4 bg-white p-5 shadow-md">
          <FaBookOpen className="text-green-600 text-3xl" />
          <p className="text-gray-700">
            <strong>More than Football</strong> – Providing education, legal
            identity, meals, and life-changing opportunities.
          </p>
        </div>
        <div className="flex items-start gap-4 bg-white p-5 shadow-md">
          <FaCheckCircle className="text-green-600 text-3xl" />
          <p className="text-gray-700">
            <strong>Transparent & Accountable</strong> – Donations are monitored
            & audited, ensuring maximum impact.
          </p>
        </div>
      </div>

      {/* Corporate Sponsorships */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-6 shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Corporate & Large-Scale Sponsorships
        </h3>
        <p className="text-gray-600 mt-2 text-center">
          Want to make a larger impact? We offer custom sponsorship packages for
          companies and donors who want to fund:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 pl-4">
          <li>⚽ Nationwide Football Trials</li>
          <li>🌍 International Player Sponsorships</li>
          <li>🏟️ Infrastructure & Equipment Support</li>
        </ul>
      </div>

      <p className="mt-8 text-center text-gray-600">
        Thank you for being part of Maidaan’s mission to change lives through
        football! ⚽💙
      </p>
    </section>
  );
}
