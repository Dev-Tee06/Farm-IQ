import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Learn", path: "/learn" },
    { name: "Agric-Tech", path: "/tech" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#F5F5F5] shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold"
            style={{ color: "#0F3D2E" }}
          >
            FARM-IQ
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-[#F4C430]"
                    : "text-gray-700 hover:text-[#F4C430]"
                }`}
              >
                {link.name}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F4C430] transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-[#0F3D2E] focus:outline-none transition"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transform transition-transform duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-[#F4C430]"
                  : "text-gray-700 hover:text-[#F4C430]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
