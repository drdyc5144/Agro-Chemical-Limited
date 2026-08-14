import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { COMPANY } from '../utils/constants'
import useWhatsApp from '../hooks/useWhatsApp'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { sendWhatsAppMessage } = useWhatsApp()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 5000)
  }

  return (
    <div className="section-padding">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="heading-4 mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg">
                <p className="font-semibold">✅ Message Sent!</p>
                <p className="text-sm">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="0707 134 0780"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Product Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-text-muted text-center">* Required fields</p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="heading-4 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <FaPhone className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Call Us</p>
                    <a href="tel:07071340780" className="text-text-secondary hover:text-primary-700 transition">
                      0707 134 0780
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <FaWhatsapp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">WhatsApp</p>
                    <a href="https://wa.me/2349060796189" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-green-600 transition">
                      0906 079 6189
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <FaEnvelope className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <a href="mailto:Yongkotnanep19@gmail.com" className="text-text-secondary hover:text-primary-700 transition break-all">
                      Yongkotnanep19@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Address</p>
                    <p className="text-text-secondary">
                      Poediel, Shendam Local Government, Plateau State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <FaClock className="text-primary-700" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Business Hours</p>
                    <p className="text-text-secondary">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-8 border border-green-200">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <FaWhatsapp className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Quick Inquiry via WhatsApp</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Get instant responses from our team on WhatsApp.
                  </p>
                  <button
                    onClick={sendWhatsAppMessage}
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaWhatsapp size={20} />
                    Chat with Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact