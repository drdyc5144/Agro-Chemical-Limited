import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import useWhatsApp from "../../hooks/useWhatsApp";
import { COMPANY } from "../../utils/constants";

const WhatsAppButton = ({
  product = null,
  className = "",
  size = "md",
  variant = "floating",
  type = "whatsapp",
}) => {
  const { sendWhatsAppMessage } = useWhatsApp();

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${COMPANY.phone}`;
  };

  if (variant === "floating") {
    return (
      <button
        onClick={() => sendWhatsAppMessage(product)}
        className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 ${className}`}
        aria-label="Order on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    );
  }

  if (type === "phone") {
    return (
      <button
        onClick={handlePhoneCall}
        className={`flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors ${sizes[size]} ${className}`}
      >
        <FaPhone size={20} />
        Call Us
      </button>
    );
  }

  return (
    <button
      onClick={() => sendWhatsAppMessage(product)}
      className={`flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors ${sizes[size]} ${className}`}
    >
      <FaWhatsapp size={20} />
      Order Now
    </button>
  );
};

export default WhatsAppButton;
