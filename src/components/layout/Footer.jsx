import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { COMPANY } from "../../utils/constants";
import useWhatsApp from "../../hooks/useWhatsApp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { sendWhatsAppMessage } = useWhatsApp();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Shadow Agro</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted supplier of quality agricultural inputs and agrochemical
              products for farmers and agricultural businesses across Nigeria.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-500 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={sendWhatsAppMessage}
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Make Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Herbicides
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Insecticides
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Fungicides
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-accent-500 transition-colors text-sm"
                >
                  Adjuvants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone
                  size={18}
                  className="text-accent-500 mt-1 flex-shrink-0"
                />
                <div>
                  <span className="text-sm text-gray-300 block">Call Us</span>
                  <a
                    href="tel:07071340780"
                    className="text-sm text-white hover:text-accent-500 transition-colors"
                  >
                    0707 134 0780
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaWhatsapp
                  size={18}
                  className="text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <span className="text-sm text-gray-300 block">WhatsApp</span>
                  <a
                    href="https://wa.me/2349060796189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-green-500 transition-colors"
                  >
                    0906 079 6189
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope
                  size={18}
                  className="text-accent-500 mt-1 flex-shrink-0"
                />
                <div>
                  <span className="text-sm text-gray-300 block">Email</span>
                  <a
                    href="mailto:Yongkotnanep19@gmail.com"
                    className="text-sm text-white hover:text-accent-500 transition-colors break-all"
                  >
                    Yongkotnanep19@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt
                  size={18}
                  className="text-accent-500 mt-1 flex-shrink-0"
                />
                <div>
                  <span className="text-sm text-gray-300 block">Address</span>
                  <span className="text-sm text-white">
                    Poediel, Shendam Local Government, Plateau State, Nigeria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} Shadow Agro Chemical Limited. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Designed with care for agricultural excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
