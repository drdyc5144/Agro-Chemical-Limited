export const COMPANY = {
  name: import.meta.env.VITE_COMPANY_NAME || 'Shadow Agro Chemical Limited',
  shortName: 'Shadow Agro',
  phone: import.meta.env.VITE_PHONE || '+2348000000000',
  whatsapp: import.meta.env.VITE_WHATSAPP || '2348000000000',
  email: import.meta.env.VITE_EMAIL || 'info@shadowagro.com',
  address: import.meta.env.VITE_ADDRESS || '123 Agricultural Road, Lagos, Nigeria',
  businessHours: import.meta.env.VITE_BUSINESS_HOURS || 'Monday - Friday: 8:00 AM - 6:00 PM',
}

export const WHATSAPP_NUMBER = COMPANY.whatsapp

export const WHATSAPP_MESSAGE = (productName = '') => {
  const base = `Hello Shadow Agro Chemical Limited, I would like to make an inquiry`
  if (productName) {
    return `${base} about ${productName}. Please provide more information.`
  }
  return `${base}. Please provide more information.`
}

export const SITE_CONFIG = {
  title: 'Shadow Agro Chemical Limited - Trusted Agricultural Solutions',
  description: 'Professional agrochemical products and agricultural inputs for farmers and agricultural businesses.',
  url: 'https://shadowagro.com',
}