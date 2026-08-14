import React from "react";
import Hero from "../components/sections/Hero";
import ProductCategories from "../components/sections/ProductCategories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowWeHelp from "../components/sections/HowWeHelp";
import Testimonials from "../components/sections/Testimonials";
import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <HowWeHelp />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
