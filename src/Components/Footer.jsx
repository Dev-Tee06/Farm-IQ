import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden text-gray-200">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D2E] via-[#0B2F24] to-black" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#F4C430]/15 rounded-full blur-3xl" />

      <div className="relative z-10 py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">FARM-IQ</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Empowering young Africans to transform agriculture through
              innovation, technology, and knowledge.
            </p>

            <div className="flex gap-3 mt-4">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaLinkedinIn />,
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="
                    w-9 h-9 flex items-center justify-center rounded-full
                    bg-white/10 border border-white/20
                    hover:bg-gradient-to-br hover:from-[#F4C430] hover:to-yellow-400
                    hover:text-[#0F3D2E]
                    transition-all duration-300
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "Learn Agriculture", path: "/learn" },
                { label: "Agric-Tech", path: "/agric-tech" },
                { label: "Contact", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="hover:text-[#F4C430] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 +234 123 456 7890</p>
              <p>📧 info@farm-iq.com</p>
              <p>📍 Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-4 border-t border-white/15 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} FARM-IQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
