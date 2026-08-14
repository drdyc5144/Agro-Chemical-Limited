import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "../../data/categories";

const ProductCategories = () => {
  return (
    <section className="section-padding bg-bg-primary">
      <Container>
        <SectionHeading
          title="Our Agricultural Solutions"
          subtitle="Product Categories"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/products"
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <div
                className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-text-muted">{category.description}</p>
              <span className="inline-block mt-4 text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
