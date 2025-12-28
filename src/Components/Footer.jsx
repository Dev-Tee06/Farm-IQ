import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F3D2E] text-gray-200 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">FARM-IQ</h3>
          <p className="text-gray-300">
            Empowering young Africans to transform agriculture through
            innovation, technology, and knowledge.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#F4C430] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#F4C430] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#F4C430] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#F4C430] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-[#F4C430] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#F4C430] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-[#F4C430] transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/learn"
                className="hover:text-[#F4C430] transition-colors"
              >
                Learn Agriculture
              </a>
            </li>
            <li>
              <a
                href="/agric-tech"
                className="hover:text-[#F4C430] transition-colors"
              >
                Agric-Tech
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#F4C430] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
          <p className="text-gray-300">📞 +234 123 456 7890</p>
          <p className="text-gray-300">📧 info@farm-iq.com</p>
          <p className="text-gray-300">📍 Lagos, Nigeria</p>
        </div>

        {/* Newsletter */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} FARM-IQ. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
