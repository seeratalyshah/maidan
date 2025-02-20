import { FaDonate } from "react-icons/fa";

export default function HowToDonate() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-snug">
          <span className="text-green-600"></span>How to Donate?
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          We’ve partnered with{" "}
          <span className="font-semibold">JustGiving.com</span> to make
          donations secure and hassle-free. All donations will be received by{" "}
          <span className="font-semibold">Muslim Hands UK</span> and directly
          allocated to Maidaan's operations.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="YOUR_JUSTGIVING_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white uppercase px-6 py-3 text-lg font-semibold shadow-md hover:bg-green-700 transition"
          >
            <FaDonate className="text-xl" />
            Donate via JustGiving
          </a>
        </div>
      </div>
    </section>
  );
}
