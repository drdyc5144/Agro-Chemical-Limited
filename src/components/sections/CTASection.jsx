import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Button from "../ui/Button";
import useWhatsApp from "../../hooks/useWhatsApp";

const CTASection = () => {
  const { sendWhatsAppMessage } = useWhatsApp();

  return (
    <section className="section-padding bg-gradient-to-r from-primary-800 to-secondary-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Find the Right Agricultural Solutions?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Contact our team for product information, availability, and expert
            guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Us
              </Button>
            </Link>
            <button
              onClick={sendWhatsAppMessage}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
