import { useCallback } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../utils/constants";

/**
 * Custom hook for WhatsApp functionality
 * @param {string} defaultProductName - Optional default product name for inquiry
 * @returns {Object} { sendWhatsAppMessage, getWhatsAppLink }
 */
export const useWhatsApp = (defaultProductName = "") => {
  /**
   * Send a WhatsApp message
   * @param {string} productName - Optional product name for the inquiry
   */
  const sendWhatsAppMessage = useCallback(
    (productName = defaultProductName) => {
      const message = encodeURIComponent(WHATSAPP_MESSAGE(productName));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(url, "_blank");
    },
    [defaultProductName],
  );

  /**
   * Get the WhatsApp link without opening it
   * @param {string} productName - Optional product name for the inquiry
   * @returns {string} WhatsApp URL
   */
  const getWhatsAppLink = useCallback(
    (productName = defaultProductName) => {
      const message = encodeURIComponent(WHATSAPP_MESSAGE(productName));
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    },
    [defaultProductName],
  );

  return {
    sendWhatsAppMessage,
    getWhatsAppLink,
  };
};

export default useWhatsApp;
