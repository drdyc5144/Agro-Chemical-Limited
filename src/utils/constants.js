export const COMPANY = {
  name: 'Shadow Agro Chemical Limited',
  shortName: 'Shadow Agro',
  phone: '07071340780',
  whatsapp: '2349060796189',
  email: 'Yongkotnanep19@gmail.com',
  address: 'Poediel, Shendam Local Government, Plateau State, Nigeria',
  businessHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
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