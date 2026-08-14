import React, { useState, useEffect, useMemo } from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call to fetch products
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800ms delay to simulate API call

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const categoryOptions = ["All", ...categories.map((c) => c.name)];

  // Loading Skeleton
  if (isLoading) {
    return (
      <div className="section-padding">
        <Container>
          {/* Heading Skeleton */}
          <div className="text-center mb-12">
            <div className="h-4 w-32 bg-gray-200 rounded mx-auto animate-pulse mb-2"></div>
            <div className="h-10 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
            <div className="w-20 h-1 bg-gray-200 mx-auto mt-4 animate-pulse"></div>
          </div>

          {/* Category Filters Skeleton */}
          <div className="flex flex-wrap gap-3 justify-center mt-8 mb-12">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Product Count Skeleton */}
          <div className="h-5 w-40 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>

          {/* Product Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="h-56 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse mb-4"></div>
                  <div className="flex gap-3">
                    <div className="h-10 flex-1 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <Container>
        <SectionHeading
          title="Our Products"
          subtitle="Quality Agricultural Inputs"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mt-8 mb-12">
          {categoryOptions.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary-700 text-white"
                  : "bg-bg-tertiary text-text-secondary hover:bg-primary-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-text-muted text-center mb-8">
          Showing {filteredProducts.length} products
        </p>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} columns={3} />
      </Container>
    </div>
  );
};

export default Products;
