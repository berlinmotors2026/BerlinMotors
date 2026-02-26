const steps = [
  {
    number: "01",
    title: "Free Evaluation",
    description:
      "Bring your vehicle in for a no-obligation appraisal. We'll assess its condition and market value to set the right price.",
  },
  {
    number: "02",
    title: "Professional Marketing",
    description:
      "We photograph, detail, and list your vehicle across multiple platforms to reach the widest pool of buyers.",
  },
  {
    number: "03",
    title: "Hassle-Free Sale",
    description:
      "We handle all inquiries, test drives, negotiations, and paperwork. You sit back while we sell your car.",
  },
  {
    number: "04",
    title: "Get Paid",
    description:
      "Once sold, you receive your payment quickly. Transparent pricing with no hidden fees — just a competitive commission.",
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
              Sell Your Car<br />
              <span className="text-brand">With Us</span>
            </h2>
            <div className="w-16 h-1 bg-brand mb-4" />
            <p className="text-gray-400 mb-6">
              Let us handle the hard work of selling your vehicle. Our
              consignment program is designed to get you the best price with
              zero hassle.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand hover:bg-brand-light text-dark-900 font-semibold px-6 py-3 rounded transition-colors"
            >
              Get Started
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
