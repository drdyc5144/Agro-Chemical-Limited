import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBookOpen, FaComment, FaBox } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const HowWeHelp = () => {
  const steps = [
    {
      icon: FaSearch,
      title: "1. Discover",
      description:
        "Browse our comprehensive range of agricultural products and solutions.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FaBookOpen,
      title: "2. Learn",
      description:
        "Explore detailed product information to find the right solution for your needs.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: FaComment,
      title: "3. Inquire",
      description:
        "Contact our team for product information, availability, and expert advice.",
      color: "bg-accent-100 text-accent-600",
    },
    {
      icon: FaBox,
      title: "4. Receive",
      description:
        "Get the products you need with reliable service and support.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="How We Can Help You"
          subtitle="Simple Steps to Get Started"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div
                  className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}
                >
                  <Icon size={30} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HowWeHelp;
