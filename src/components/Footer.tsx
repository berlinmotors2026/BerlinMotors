const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Inventory", href: "#inventory" },
  { label: "Consignment", href: "#consignment" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-white tracking-wider">
              BERLIN <span className="text-brand">MOTORS</span>
            </span>
            <p className="text-gray-500 text-sm mt-3 max-w-xs">
              Your trusted partner for quality pre-owned vehicles and
              hassle-free car consignment services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-gray-500 text-sm space-y-2">
              <p>(555) 123-4567</p>
              <p>info@berlinmotors.com</p>
              <p>123 Auto Drive, Your City, ST 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-10 pt-6 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Berlin Motors. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
