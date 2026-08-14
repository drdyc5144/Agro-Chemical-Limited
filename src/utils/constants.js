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
    // Build a detailed product inquiry message with price
    let message = `Hello Shadow Agro Chemical Limited,\n\n`;
    message += `I would like to place an order for the following product:\n\n`;
    message += `📦 Product: ${product.name}\n`;
    message += `📂 Category: ${product.category}\n`;

    // Add price if available
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

    if (product.specifications?.formulation) {
      message += `🧪 Formulation: ${product.specifications.formulation}\n`;
    }

    if (
      product.specifications?.targetCrops &&
      product.specifications.targetCrops.length > 0
    ) {
      message += `🌾 Target Crops: ${product.specifications.targetCrops.join(", ")}\n`;
    }

    message += `\n📝 Description: ${product.shortDescription}\n\n`;
    message += `Please provide me with more information about:\n`;
    message += `- Price and availability\n`;
    message += `- Delivery options\n`;
    message += `- Payment methods\n\n`;
    message += `Thank you!`;

    return message;
  }

  // Generic inquiry message
  return `Hello Shadow Agro Chemical Limited,\n\nI would like to make an inquiry about your products. Please provide me with more information.\n\nThank you!`;
};

export const SITE_CONFIG = {
  title: "Shadow Agro Chemical Limited - Trusted Agricultural Solutions",
  description:
    "Professional agrochemical products and agricultural inputs for farmers and agricultural businesses.",
  url: "https://shadowagro.com",
};
