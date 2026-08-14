import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Card, { CardBody, CardFooter } from "../ui/Card";
import Badge from "../ui/Badge";
import useWhatsApp from "../../hooks/useWhatsApp";

const ProductCard = ({ product }) => {
  const { sendWhatsAppMessage } = useWhatsApp();
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = () => {
    setIsLoading(true);
    sendWhatsAppMessage(product);
    // Reset loading state after a moment
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card hover className="h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img
          src={product.images[0] || "/images/placeholder-product.jpg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-primary-600 text-white">
          {product.category}
        </Badge>
        {product.featured && (
          <Badge variant="accent" className="absolute top-3 left-3">
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <CardBody className="flex-grow">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {product.name}
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          {product.shortDescription}
        </p>

        {/* Price Section */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-primary-700">
            {product.price}
          </span>
          {product.pricePerUnit && (
            <span className="text-sm text-text-muted ml-1">
              /{product.pricePerUnit}
            </span>
          )}
        </div>

        {product.specifications?.packSize && (
          <p className="text-sm text-text-muted">
            Pack Size: {product.specifications.packSize}
          </p>
        )}
        <Badge variant="success" className="mt-2">
          {product.availability}
        </Badge>
      </CardBody>

      {/* Footer */}
      <CardFooter className="flex gap-3">
        <Link
          to={`/products/${product.slug}`}
          className="flex-1 text-center bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          View Details
        </Link>
        <button
          onClick={handleOrder}
          disabled={isLoading}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          aria-label="Order on WhatsApp"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Opening...
            </>
          ) : (
            <>
              <FaWhatsapp size={16} />
              Order Now
            </>
          )}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
