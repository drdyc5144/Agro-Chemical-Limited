import { useCallback } from "react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../utils/constants";

/**
 * Custom hook for WhatsApp functionality
 * @param {Object} defaultProduct - Optional default product for inquiry
 * @returns {Object} { sendWhatsAppMessage, getWhatsAppLink }
 */
export const useWhatsApp = (defaultProduct = null) => {
  /**
   * Send a WhatsApp message
   * @param {Object} product - Product object with details
   */
  const sendWhatsAppMessage = useCallback(
    (product = defaultProduct) => {
      const message = encodeURIComponent(WHATSAPP_MESSAGE(product));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(url, "_blank");
    },
    [defaultProduct],
  );

  /**
   * Get the WhatsApp link without opening it
   * @param {Object} product - Product object with details
   * @returns {string} WhatsApp URL
   */
  const getWhatsAppLink = useCallback(
    (product = defaultProduct) => {
      const message = encodeURIComponent(WHATSAPP_MESSAGE(product));
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    },
    [defaultProduct],
  );

  return {
    sendWhatsAppMessage,
    getWhatsAppLink,
  };
};

export default useWhatsApp;
