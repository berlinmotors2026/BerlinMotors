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
