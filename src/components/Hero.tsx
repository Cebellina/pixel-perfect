import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";

function Hero() {
  return (
    <section className="relative h-[calc(100vh-115px)] overflow-hidden bg-[#d6cdb8]">
      <img
        src={`${import.meta.env.BASE_URL}hero-travel.png`}
        alt="Luxury beach resort"
        className="w-full h-full object-cover brightness-[1.03] contrast-[0.92] saturate-[0.86] sepia-[0.08]"
      />

      <button className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-3xl opacity-80 hover:opacity-100">
        <FaChevronLeft />
      </button>

      <button className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-3xl opacity-80 hover:opacity-100">
        <FaChevronRight />
      </button>

      <div className="absolute left-[4%] bottom-[12%] text-white">
        <h2 className="font-['Cormorant_Garamond'] text-[64px] font-light leading-none drop-shadow-sm">
          Experience the world{" "}
          <span className="italic">with ease.</span>
        </h2>
      </div>

      <button className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8f8768] text-white shadow-md">
        <MdAccessibility size={28} />
      </button>
    </section>
  );
}

export default Hero;