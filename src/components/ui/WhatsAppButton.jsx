import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "../../hooks/useWhatsApp";

const WhatsAppButton = ({
  productName = "",
  className = "",
  size = "md",
  variant = "floating",
}) => {
  const { sendWhatsAppMessage } = useWhatsApp();

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  if (variant === "floating") {
    return (
      <button
        onClick={() => sendWhatsAppMessage(productName)}
        className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    );
  }

  return (
    <button
      onClick={() => sendWhatsAppMessage(productName)}
      className={`flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors ${sizes[size]} ${className}`}
    >
      <FaWhatsapp size={20} />
      Make Inquiry
    </button>
  );
};

export default WhatsAppButton;
