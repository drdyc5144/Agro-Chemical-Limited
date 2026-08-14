import React from "react";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { companyInfo } from "../data/company";

const About = () => {
  const valueIcons = {
    "Quality First": FaLeaf,
    "Expert Support": FaLightbulb,
    Reliability: FaHandshake,
    "Safety & Responsibility": FaHeart,
    Integrity: FaBullseye,
    Innovation: FaEye,
  };

  return (
    <div className="section-padding">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="heading-1 text-primary-700 mb-6">
            About Shadow Agro Chemical Limited
          </h1>
          <p className="body-large text-text-secondary">
            We are a trusted supplier of quality agricultural inputs and
            agrochemical products, dedicated to supporting farmers and
            agricultural businesses across Nigeria.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="heading-3 mb-4">Who We Are</h2>
            <p className="body-text mb-4">
              Shadow Agro Chemical Limited was established with a clear vision:
              to provide high-quality agricultural inputs and agrochemical
              solutions that empower farmers and agricultural businesses to
              achieve optimal productivity.
            </p>
            <p className="body-text">
              With a deep understanding of the agricultural sector, we combine
              technical expertise with a commitment to quality and service. Our
              team is dedicated to helping our clients find the right products
              and solutions for their specific needs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-xl font-semibold text-primary-700">
                Based in Shendam
              </p>
              <p className="text-text-secondary">
                Poediel, Plateau State, Nigeria
              </p>
              <p className="text-sm text-text-muted mt-2">
                Serving farmers nationwide
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye size={28} />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <FaEye size={28} />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <SectionHeading title="Our Core Values" subtitle="What Drives Us" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {companyInfo.values.map((value, index) => {
              const Icon = valueIcons[value.title] || FaHeart;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="bg-primary-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-bg-tertiary rounded-2xl p-8 lg:p-12">
          <h2 className="heading-3 text-center mb-4">Our Approach</h2>
          <p className="body-text max-w-3xl mx-auto text-center">
            {companyInfo.approach}
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-primary-700">Quality</p>
                <p className="text-sm text-text-muted">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-500">Expert</p>
                <p className="text-sm text-text-muted">Support</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary-700">
                  Reliable
                </p>
                <p className="text-sm text-text-muted">Service</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
