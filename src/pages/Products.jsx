import React, { useState, useMemo } from "react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import { products } from "../data/products";
import { categories } from "../data/categories";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const categoryOptions = ["All", ...categories.map((c) => c.name)];

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
