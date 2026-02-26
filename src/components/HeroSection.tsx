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
          Ventas &bull; Consignación &bull; Calidad
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          Encontrá Tu Próximo{" "}
          <span className="text-brand">Auto</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Vehiculos seminuevos y servicios de consignación sin
          complicaciones. Tu socio de confianza en la compra y venta de autos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inventory"
            className="w-full sm:w-auto bg-brand hover:bg-brand-light text-dark-900 font-semibold px-8 py-3.5 rounded transition-colors text-center"
          >
            Ver Inventario
          </a>
          <a
            href="#consignment"
            className="w-full sm:w-auto border border-brand text-brand hover:bg-brand/10 font-semibold px-8 py-3.5 rounded transition-colors text-center"
          >
            Vende Tu Auto
          </a>
        </div>
      </div>
    </section>
  );
}
