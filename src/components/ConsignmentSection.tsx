const steps = [
  {
    number: "01",
    title: "Publicamos Tu Auto",
    description:
      "Nos encargamos de fotos, descripción y publicación en los principales portales. Tu auto listo para venderse sin que pierdas tiempo.",
  },
  {
    number: "02",
    title: "Filtramos Compradores Reales",
    description:
      "Solo te presentamos interesados verificados. Nada de curiosos ni pérdidas de tiempo.",
  },
  {
    number: "03",
    title: "Negociamos Por Vos",
    description:
      "Respondemos consultas, coordinamos visitas y negociamos para que obtengas el mejor precio posible.",
  },
  {
    number: "04",
    title: "Cobrás Rápido y Seguro",
    description:
      "Gestionamos la operación completa hasta que el dinero esté en tu cuenta. Sin vueltas. Sin riesgos.",
  },
];

export default function ConsignmentSection() {
  return (
    <section id="consignment" className="py-20 md:py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-16">
          {/* Left - heading & description */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vende Tu Auto<br />
              <span className="text-brand">Con Nosotros</span>
            </h2>
            <div className="w-16 h-1 bg-brand mb-4" />
            <p className="text-gray-400 mb-6">
              Déjanos encargarnos del trabajo difícil de vender tu vehículo.
              Nuestro programa de consignación está diseñado para conseguirte el
              mejor precio sin complicaciones.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand hover:bg-brand-light text-dark-900 font-semibold px-6 py-3 rounded transition-colors"
            >
              Comenzar
            </a>
          </div>

          {/* Right - steps */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-dark-700 border border-dark-600 rounded-lg p-6 hover:border-brand/30 transition-colors"
              >
                <span className="text-brand text-3xl font-bold opacity-40">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
