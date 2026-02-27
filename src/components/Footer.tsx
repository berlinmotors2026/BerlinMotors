const quickLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Inventario", href: "#inventory" },
  { label: "Consignación", href: "#consignment" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white tracking-wider">
              BERLIN <span className="text-brand">PRESTIGE</span>
            </span>
            <p className="text-gray-500 text-sm mt-3 max-w-xs">
              Tu socio de confianza para vehículos seminuevos de calidad y
              servicios de consignación sin complicaciones.
            </p>
            <a
              href="https://www.instagram.com/berlinprestige.cars"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-block mt-4 text-gray-500 hover:text-brand transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="text-gray-500 text-sm space-y-2">
              <p>+54 9 11 2616-0829</p>
              <p>Berlinprestige2026@gmail.com</p>
              <p>Villa del Parque, CABA, Argentina</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-10 pt-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Berlin Prestige. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
