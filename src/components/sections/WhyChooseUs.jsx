import React from "react";
import {
  FaShieldAlt,
  FaLightbulb,
  FaTruck,
  FaHandshake,
  FaLeaf,
  FaChartLine,
} from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Quality Guaranteed",
      description:
        "All products are sourced from trusted manufacturers and rigorously checked for quality.",
      color: "text-primary-700",
    },
    {
      icon: FaLightbulb,
      title: "Expert Guidance",
      description:
        "Our knowledgeable team helps you find the right products for your specific needs.",
      color: "text-accent-500",
    },
    {
      icon: FaTruck,
      title: "Reliable Supply",
      description:
        "Consistent product availability when you need it, with efficient delivery options.",
      color: "text-blue-600",
    },
    {
      icon: FaHandshake,
      title: "Customer Focus",
      description:
        "We build lasting relationships through exceptional service and support.",
      color: "text-green-600",
    },
    {
      icon: FaLeaf,
      title: "Sustainable Approach",
      description:
        "Promoting responsible agricultural practices that protect the environment.",
      color: "text-emerald-600",
    },
    {
      icon: FaChartLine,
      title: "Results Driven",
      description:
        "Our solutions are designed to improve crop yield and agricultural productivity.",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="section-padding bg-bg-primary">
      <Container>
        <SectionHeading
          title="Why Choose Shadow Agro"
          subtitle="Your Trusted Agricultural Partner"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center group"
              >
                <div
                  className={`${benefit.color} bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform bg-${benefit.color.split("-")[1]}-50`}
                >
                  <Icon size={28} className={benefit.color} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
