import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import useScroll from "../../hooks/useScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScroll();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
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
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={28} className="text-primary-700" /> : <HiMenu size={28} className="text-primary-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Dropdown */}
      <div
        ref={menuRef}
        className={`fixed left-0 right-0 z-40 bg-white shadow-2xl transform transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ 
          top: '72px',
          backgroundColor: 'white',
          borderRadius: '0 0 20px 20px',
          overflow: 'hidden'
        }}
      >
        <div className="flex flex-col p-6 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-semibold transition-colors border-b border-gray-100 pb-3 ${
                isActive(item.path)
                  ? "text-primary-700"
                  : "text-gray-800 hover:text-primary-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay - Click to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ top: '72px', backgroundColor: 'rgba(0,0,0,0.3)' }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;