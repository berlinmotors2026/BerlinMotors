export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand)_0%,_transparent_50%)] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand uppercase tracking-[0.3em] text-sm font-medium mb-4">
          Sales &bull; Consignment &bull; Quality
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          Find Your Next{" "}
          <span className="text-brand">Drive</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Premium pre-owned vehicles and hassle-free consignment services.
          Your trusted partner in buying and selling quality cars.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inventory"
            className="w-full sm:w-auto bg-brand hover:bg-brand-light text-dark-900 font-semibold px-8 py-3.5 rounded transition-colors text-center"
          >
            Browse Inventory
          </a>
          <a
            href="#consignment"
            className="w-full sm:w-auto border border-brand text-brand hover:bg-brand/10 font-semibold px-8 py-3.5 rounded transition-colors text-center"
          >
            Sell Your Car
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
