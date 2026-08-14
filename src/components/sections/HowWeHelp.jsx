import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBookOpen, FaComment, FaBox, FaArrowRight } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const HowWeHelp = () => {
  const steps = [
    {
      icon: FaSearch,
      title: "Discover",
      description:
        "Browse our comprehensive range of agricultural products and solutions.",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      number: "01",
    },
    {
      icon: FaBookOpen,
      title: "Learn",
      description:
        "Explore detailed product information to find the right solution for your needs.",
      color: "bg-green-50 text-green-600 border-green-200",
      number: "02",
    },
    {
      icon: FaComment,
      title: "Inquire",
      description:
        "Contact our team for product information, availability, and expert advice.",
      color: "bg-accent-50 text-accent-600 border-accent-200",
      number: "03",
    },
    {
      icon: FaBox,
      title: "Receive",
      description:
        "Get the products you need with reliable service and support.",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      number: "04",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="How We Can Help You"
          subtitle="Simple Steps to Get Started"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 bg-primary-700 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10">
                      {step.number}
                    </div>
                    
                    {/* Icon Circle */}
                    <div
                      className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl border-2 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon size={30} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps - only on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-gray-300">
                    <FaArrowRight size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="accent" size="lg" className="hover:scale-105 transition-transform duration-300">
              Get Started Today
            </Button>
          </Link>
          <p className="text-sm text-text-muted mt-3">
            Ready to take the next step? Contact us for expert guidance.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HowWeHelp;