import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./constants";

export const openWhatsApp = (productName = "") => {
  const message = encodeURIComponent(WHATSAPP_MESSAGE(productName));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};

export const getWhatsAppLink = (productName = "") => {
  const message = encodeURIComponent(WHATSAPP_MESSAGE(productName));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
