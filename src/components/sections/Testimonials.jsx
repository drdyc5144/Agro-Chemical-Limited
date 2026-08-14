import React from "react";
import { FaStar } from "react-icons/fa";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chief Adebayo Ogunlesi",
      role: "Commercial Farmer, Oyo State",
      content:
        "Shadow Agro has been a reliable partner for our farm. Their products are consistently high quality, and their team provides excellent support when we need it.",
      rating: 5,
    },
    {
      name: "Mrs. Grace Eze",
      role: "Agro-dealer, Enugu State",
      content:
        "We have been distributing Shadow Agro products for two years now. Our customers trust these products, and the company provides great service and support.",
      rating: 5,
    },
    {
      name: "Mr. Ibrahim Musa",
      role: "Farm Manager, Kaduna State",
      content:
        "The expert advice and quality products from Shadow Agro have significantly improved our crop yields. I highly recommend their services to any serious farmer.",
      rating: 4,
    },
  ];

  return (
    <section className="section-padding bg-bg-primary">
      <Container>
        <SectionHeading title="What Our Clients Say" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < testimonial.rating
                        ? "text-accent-500"
                        : "text-gray-300"
                    }
                    size={16}
                  />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
