import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "./constants";

export const openWhatsApp = (product = null) => {
  const message = encodeURIComponent(WHATSAPP_MESSAGE(product));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};

export const getWhatsAppLink = (product = null) => {
  const message = encodeURIComponent(WHATSAPP_MESSAGE(product));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
