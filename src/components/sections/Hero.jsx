import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import useWhatsApp from "../../hooks/useWhatsApp";

const Hero = () => {
  const { sendWhatsAppMessage } = useWhatsApp();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-accent-500"></div>
            <span className="text-accent-400 font-medium text-sm uppercase tracking-wider">
              Trusted Agricultural Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Empowering Agriculture
            <span className="block text-accent-400">for a Growing Future</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Shadow Agro Chemical Limited provides professional agrochemical
            products and agricultural inputs to farmers and agricultural
            businesses across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button variant="accent" size="lg">
                Explore Products
              </Button>
            </Link>
            <button
              onClick={() => sendWhatsAppMessage()}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <FaWhatsapp size={20} />
              Make an Inquiry
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">
                ✓
              </div>
              <div>
                <p className="text-white font-semibold">Quality Products</p>
                <p className="text-gray-400 text-sm">
                  From trusted manufacturers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                ✓
              </div>
              <div>
                <p className="text-white font-semibold">Expert Support</p>
                <p className="text-gray-400 text-sm">Knowledgeable team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400 font-bold">
                ✓
              </div>
              <div>
                <p className="text-white font-semibold">Reliable Supply</p>
                <p className="text-gray-400 text-sm">Consistent availability</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
