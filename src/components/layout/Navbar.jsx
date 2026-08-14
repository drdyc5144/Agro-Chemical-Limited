import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";
import useWindowSize from "../../hooks/useWindowSize";
import useWhatsApp from "../../hooks/useWhatsApp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScroll();
  const { isMobile } = useWindowSize();
  const { sendWhatsAppMessage } = useWhatsApp();
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleInquiry = () => {
    sendWhatsAppMessage();
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-700">
              Shadow Agro
            </span>
            <span className="text-sm text-secondary-700 font-medium hidden sm:inline">
              Chemical Limited
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? "text-primary-700"
                    : "text-text-secondary hover:text-primary-700"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-700 transition-transform origin-left ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}

            <button
              onClick={handleInquiry}
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <FaPhone size={18} />
              Make Inquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-[72px] bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-colors border-b border-gray-100 pb-4 ${
                isActive(item.path)
                  ? "text-primary-700"
                  : "text-text-secondary hover:text-primary-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={handleInquiry}
            className="flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-xl font-semibold transition-colors text-lg"
          >
            <FaPhone size={22} />
            Make an Inquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;