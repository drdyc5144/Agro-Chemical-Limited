import React from "react";
import ProductCard from "./ProductCard";
import useWindowSize from "../../hooks/useWindowSize";

const ProductGrid = ({ products, columns = 3 }) => {
  const { isMobile, isTablet } = useWindowSize();

  // Auto-adjust columns based on screen size
  let actualColumns = columns;
  if (isMobile) actualColumns = 1;
  else if (isTablet) actualColumns = Math.min(columns, 2);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols[actualColumns] || gridCols[3]} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
