export const COMPANY = {
  name: "Shadow Agro Chemical Limited",
  shortName: "Shadow Agro",
  phone: "07071340780",
  whatsapp: "2349060796189",
  email: "Yongkotnanep19@gmail.com",
  address: "Poediel, Shendam Local Government, Plateau State, Nigeria",
  businessHours: "Monday - Friday: 8:00 AM - 6:00 PM",
};

export const WHATSAPP_NUMBER = COMPANY.whatsapp;

export const WHATSAPP_MESSAGE = (product = null) => {
  if (product) {
    // Build a clean, simple product order message
    let message = `Hello Shadow Agro Chemical Limited,\n\n`;
    message += `I would like to place an order for:\n\n`;
    message += `📦 Product: ${product.name}\n`;

    if (product.price) {
      message += `💰 Price: ${product.price}`;
      if (product.pricePerUnit) {
        message += ` / ${product.pricePerUnit}`;
      }
      message += `\n`;
    }

    if (product.specifications?.packSize) {
      message += `📏 Available Sizes: ${product.specifications.packSize}\n`;
    }

    message += `\nPlease let me know the delivery options and payment methods.\n\n`;
    message += `Thank you!`;

    return message;
  }

  // Generic inquiry message
  return `Hello Shadow Agro Chemical Limited,\n\nI would like to make an inquiry about your products.\n\nThank you!`;
};

export const SITE_CONFIG = {
  title: "Shadow Agro Chemical Limited - Trusted Agricultural Solutions",
  description:
    "Professional agrochemical products and agricultural inputs for farmers and agricultural businesses.",
  url: "https://shadowagro.com",
};
