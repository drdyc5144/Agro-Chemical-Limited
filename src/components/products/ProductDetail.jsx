import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaCheck,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { getProductBySlug } from "../../data/products";
import useWhatsApp from "../../hooks/useWhatsApp";
import Badge from "../ui/Badge";
import WhatsAppButton from "../ui/WhatsAppButton";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState("description");
  const { sendWhatsAppMessage } = useWhatsApp();

  if (!product) {
    return (
      <div className="container-custom section-padding text-center">
        <h2 className="heading-3 mb-4">Product Not Found</h2>
        <p className="body-text mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="text-primary-700 hover:text-primary-800 font-semibold"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: "description", label: "Description", icon: FaInfoCircle },
    { id: "specifications", label: "Specifications", icon: FaCheck },
    { id: "safety", label: "Safety Information", icon: FaShieldAlt },
  ];

  return (
    <div className="container-custom section-padding overflow-x-hidden">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-muted mb-6 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-primary-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary-700">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text-secondary">{product.name}</span>
      </nav>

      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium mb-6"
      >
        <FaArrowLeft size={16} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Image */}
        <div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 sm:h-96 lg:h-[500px]">
            <img
              src={product.images[0] || "/images/placeholder-product.jpg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {product.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="overflow-x-hidden">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{product.category}</Badge>
            <Badge variant="success">{product.availability}</Badge>
            {product.featured && <Badge variant="accent">Featured</Badge>}
          </div>

          <h1 className="heading-3 sm:heading-2 mb-2 break-words">
            {product.name}
          </h1>

          {/* Price Section */}
          <div className="mb-4">
            <span className="text-2xl sm:text-3xl font-bold text-primary-700">
              {product.price}
            </span>
            {product.pricePerUnit && (
              <span className="text-base sm:text-lg text-text-muted ml-1">
                /{product.pricePerUnit}
              </span>
            )}
          </div>

          <p className="body-text sm:body-large mb-6 break-words">
            {product.shortDescription}
          </p>

          {/* Key Specs */}
          <div className="bg-bg-tertiary rounded-xl p-4 sm:p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specifications?.packSize && (
                <div>
                  <p className="text-xs sm:text-sm text-text-muted">
                    Pack Size
                  </p>
                  <p className="text-sm sm:text-base font-semibold break-words">
                    {product.specifications.packSize}
                  </p>
                </div>
              )}
              {product.specifications?.formulation && (
                <div>
                  <p className="text-xs sm:text-sm text-text-muted">
                    Formulation
                  </p>
                  <p className="text-sm sm:text-base font-semibold break-words">
                    {product.specifications.formulation}
                  </p>
                </div>
              )}
              {product.specifications?.targetCrops && (
                <div className="sm:col-span-2">
                  <p className="text-xs sm:text-sm text-text-muted">
                    Target Crops
                  </p>
                  <p className="text-sm sm:text-base font-semibold break-words">
                    {product.specifications.targetCrops.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons - Clean, no loading state */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => sendWhatsAppMessage(product)}
              className="w-full sm:flex-1 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold transition-colors text-base sm:text-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaWhatsapp size={20} />
              Order Now
            </button>
          </div>

          {/* Product Note */}
          <p className="text-xs text-text-muted mt-4">
            * Prices are subject to change. For bulk orders and delivery
            options, please contact our team.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16 overflow-x-hidden">
        <div className="flex border-b border-border-light overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 font-medium transition-colors text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "text-primary-700 border-b-2 border-primary-700"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="py-6 sm:py-8">
          {activeTab === "description" && (
            <div>
              <p className="body-text break-words mb-4">
                {product.fullDescription}
              </p>
              {product.specifications?.targetPests && (
                <div className="bg-bg-tertiary rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold mb-2">Target Pests/Diseases</h4>
                  <p className="text-text-secondary break-words">
                    {product.specifications.targetPests.join(", ")}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="bg-bg-tertiary rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold mb-4">Product Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(product.specifications || {}).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className="text-xs sm:text-sm text-text-muted capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="text-sm sm:text-base font-medium break-words">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </p>
                    </div>
                  ),
                )}
              </div>
              <p className="text-xs sm:text-sm text-text-muted mt-4">
                {product.applicationInfo}
              </p>
            </div>
          )}

          {activeTab === "safety" && (
            <div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 mb-6">
                <div className="flex items-start gap-3">
                  <FaShieldAlt
                    className="text-yellow-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-yellow-800">
                      Safety First
                    </h4>
                    <p className="text-yellow-700 text-sm break-words">
                      {product.safetyInfo}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-bg-tertiary rounded-xl p-4 sm:p-6">
                <h4 className="font-semibold mb-2">
                  Important Safety Guidelines
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 flex-shrink-0">•</span>
                    <span className="break-words">
                      Always read the product label before use
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 flex-shrink-0">•</span>
                    <span className="break-words">
                      Wear appropriate protective equipment during application
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 flex-shrink-0">•</span>
                    <span className="break-words">
                      Follow manufacturer's recommended application rates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500 flex-shrink-0">•</span>
                    <span className="break-words">
                      Store in a cool, dry place away from children and animals
                    </span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-text-muted mt-4">
                  For detailed safety information, please refer to the product
                  label or contact our team.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="floating" product={product} />
    </div>
  );
};

export default ProductDetail;
