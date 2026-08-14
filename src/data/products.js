export const products = [
  {
    id: "prod-001",
    name: "AgroShield Herbicide",
    slug: "agroshield-herbicide",
    category: "Herbicides",
    price: "₦8,500",
    pricePerUnit: "per litre",
    shortDescription: "Effective broad-spectrum weed control for major crops",
    fullDescription:
      "AgroShield Herbicide provides comprehensive weed management for maize, rice, and wheat crops. It controls both broadleaf and grassy weeds with excellent crop safety.",
    images: ["/images/products/herbicide-1.jpg"],
    specifications: {
      packSize: "1L, 5L, 20L",
      formulation: "Suspension Concentrate (SC)",
      targetCrops: ["Maize", "Rice", "Wheat", "Soybean"],
      targetPests: ["Broadleaf Weeds", "Grassy Weeds"],
      activeIngredient: "Placeholder Active Ingredient",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: true,
    availability: "In Stock",
  },
  {
    id: "prod-002",
    name: "CropGuard Insecticide",
    slug: "cropguard-insecticide",
    category: "Insecticides",
    price: "₦12,000",
    pricePerUnit: "per litre",
    shortDescription:
      "Broad-spectrum insect control for vegetable and fruit crops",
    fullDescription:
      "CropGuard Insecticide offers effective control against major insect pests affecting vegetables, fruits, and field crops. Provides long-lasting protection with minimal environmental impact.",
    images: ["/images/products/insecticide-1.jpg"],
    specifications: {
      packSize: "100ml, 500ml, 1L",
      formulation: "Emulsifiable Concentrate (EC)",
      targetCrops: ["Vegetables", "Fruits", "Maize", "Cotton"],
      targetPests: ["Aphids", "Caterpillars", "Beetles", "Thrips"],
      activeIngredient: "Placeholder Active Ingredient",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: true,
    availability: "In Stock",
  },
  {
    id: "prod-003",
    name: "FungoMax Fungicide",
    slug: "fungomax-fungicide",
    category: "Fungicides",
    price: "₦15,000",
    pricePerUnit: "per litre",
    shortDescription:
      "Preventive and curative fungicide for disease management",
    fullDescription:
      "FungoMax Fungicide provides broad-spectrum disease control for various crops. Effective against major fungal diseases with both preventive and curative action.",
    images: ["/images/products/fungicide-1.jpg"],
    specifications: {
      packSize: "250ml, 1L, 5L",
      formulation: "Suspension Concentrate (SC)",
      targetCrops: ["Wheat", "Maize", "Vegetables", "Fruits"],
      targetPests: ["Rust", "Mildew", "Blight", "Spot Diseases"],
      activeIngredient: "Placeholder Active Ingredient",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: false,
    availability: "In Stock",
  },
  {
    id: "prod-004",
    name: "NitroGrow Fertilizer",
    slug: "nitrogrow-fertilizer",
    category: "Fertilizers",
    price: "₦45,000",
    pricePerUnit: "per 50kg bag",
    shortDescription: "Balanced NPK fertilizer for optimal crop growth",
    fullDescription:
      "NitroGrow Fertilizer provides essential nutrients for healthy crop development and maximum yield. Formulated for balanced nutrition throughout the growing season.",
    images: ["/images/products/fertilizer-1.jpg"],
    specifications: {
      packSize: "50kg, 100kg, Bulk",
      formulation: "Granular",
      targetCrops: ["All Crops"],
      targetPests: ["N/A"],
      nutrientContent: "NPK 15-15-15",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: true,
    availability: "In Stock",
  },
  {
    id: "prod-005",
    name: "CropShield Adjuvant",
    slug: "cropshield-adjuvant",
    category: "Adjuvants",
    price: "₦6,500",
    pricePerUnit: "per litre",
    shortDescription: "Enhances effectiveness of crop protection products",
    fullDescription:
      "CropShield Adjuvant improves the performance of herbicides, insecticides, and fungicides. Enhances spreading, wetting, and penetration for better results.",
    images: ["/images/products/adjuvant-1.jpg"],
    specifications: {
      packSize: "250ml, 1L, 5L",
      formulation: "Liquid",
      targetCrops: ["All Crops"],
      targetPests: ["N/A"],
      compatibility: "Compatible with most crop protection products",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: false,
    availability: "In Stock",
  },
  {
    id: "prod-006",
    name: "AgroShield Plus Herbicide",
    slug: "agroshield-plus-herbicide",
    category: "Herbicides",
    price: "₦11,000",
    pricePerUnit: "per litre",
    shortDescription: "Advanced weed control for tough weed species",
    fullDescription:
      "AgroShield Plus Herbicide provides enhanced control of difficult weed species. Formulated for optimal performance under challenging conditions.",
    images: ["/images/products/herbicide-2.jpg"],
    specifications: {
      packSize: "1L, 5L, 20L",
      formulation: "Suspension Concentrate (SC)",
      targetCrops: ["Maize", "Sugarcane", "Rice"],
      targetPests: ["Tough Weeds", "Perennial Weeds"],
      activeIngredient: "Placeholder Active Ingredient",
    },
    applicationInfo:
      "Application information will be provided by the manufacturer.",
    safetyInfo: "Safety information will be provided by the manufacturer.",
    featured: false,
    availability: "In Stock",
  },
];

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getCategories = () => {
  const categories = [...new Set(products.map((p) => p.category))];
  return categories;
};
