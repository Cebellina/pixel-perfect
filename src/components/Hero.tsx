function Hero() {
  return (
    <section className="relative h-[calc(100vh-145px)] overflow-hidden">
      <img
        src="/hero-travel.png"
        alt="Luxury beach resort"
        className="w-full h-full object-cover"
      />

      <button className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-5xl font-light">
        ‹
      </button>

      <button className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-5xl font-light">
        ›
      </button>

      <div className="absolute left-[10%] bottom-[12%] text-white">
        <h2 className="font-serif text-[48px] md:text-[58px] leading-tight drop-shadow-md">
          Experience the world{" "}
          <span className="italic">with ease.</span>
        </h2>
      </div>

      <button className="absolute left-5 bottom-5 w-12 h-12 rounded-full bg-[#9d9671] text-white text-3xl flex items-center justify-center">
        ♿
      </button>
    </section>
  );
}

export default Hero;