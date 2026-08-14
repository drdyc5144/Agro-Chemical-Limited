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
    <div className="container-custom section-padding">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-muted mb-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-[500px]">
            <img
              src={product.images[0] || "/images/placeholder-product.jpg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden"
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
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{product.category}</Badge>
            <Badge variant="success">{product.availability}</Badge>
            {product.featured && <Badge variant="accent">Featured</Badge>}
          </div>

          <h1 className="heading-2 mb-4">{product.name}</h1>
          <p className="body-large mb-6">{product.shortDescription}</p>

          {/* Key Specs */}
          <div className="bg-bg-tertiary rounded-xl p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {product.specifications?.packSize && (
                <div>
                  <p className="text-sm text-text-muted">Pack Size</p>
                  <p className="font-semibold">
                    {product.specifications.packSize}
                  </p>
                </div>
              )}
              {product.specifications?.formulation && (
                <div>
                  <p className="text-sm text-text-muted">Formulation</p>
                  <p className="font-semibold">
                    {product.specifications.formulation}
                  </p>
                </div>
              )}
              {product.specifications?.targetCrops && (
                <div className="col-span-2">
                  <p className="text-sm text-text-muted">Target Crops</p>
                  <p className="font-semibold">
                    {product.specifications.targetCrops.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => sendWhatsAppMessage(product)}
              className="flex-1 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
            >
              <FaWhatsapp size={24} />
              Order Now
            </button>
            <button className="flex-1 bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg">
              Request Information
            </button>
          </div>

          {/* Product Note */}
          <p className="text-xs text-text-muted mt-4">
            * For detailed application rates and safety information, please
            contact our team.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        <div className="flex border-b border-border-light">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-primary-700 border-b-2 border-primary-700"
                    : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="py-8">
          {activeTab === "description" && (
            <div>
              <p className="body-text mb-4">{product.fullDescription}</p>
              {product.specifications?.targetPests && (
                <div className="bg-bg-tertiary rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Target Pests/Diseases</h4>
                  <p className="text-text-secondary">
                    {product.specifications.targetPests.join(", ")}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="bg-bg-tertiary rounded-xl p-6">
              <h4 className="font-semibold mb-4">Product Specifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications || {}).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-text-muted capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </p>
                      <p className="font-medium">
                        {Array.isArray(value) ? value.join(", ") : value}
                      </p>
                    </div>
                  ),
                )}
              </div>
              <p className="text-sm text-text-muted mt-4">
                {product.applicationInfo}
              </p>
            </div>
          )}

          {activeTab === "safety" && (
            <div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-yellow-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-yellow-800">
                      Safety First
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      {product.safetyInfo}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-bg-tertiary rounded-xl p-6">
                <h4 className="font-semibold mb-2">
                  Important Safety Guidelines
                </h4>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500">•</span>
                    Always read the product label before use
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500">•</span>
                    Wear appropriate protective equipment during application
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500">•</span>
                    Follow manufacturer's recommended application rates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-500">•</span>
                    Store in a cool, dry place away from children and animals
                  </li>
                </ul>
                <p className="text-sm text-text-muted mt-4">
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
