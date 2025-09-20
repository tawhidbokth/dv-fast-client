import React from 'react';
import { FaTruck, FaHome, FaBoxOpen, FaBuilding, FaUndo, FaGlobe } from 'react-icons/fa';

export default function OurServices() {
  const services = [
    {
      icon: <FaTruck className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: <FaGlobe className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: <FaBoxOpen className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: <FaHome className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: <FaBuilding className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: <FaUndo className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="bg-[#0c3b34] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-200 mb-10 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition bg-white hover:bg-lime-300 p-6 text-center cursor-pointer"
            >
              {service.icon}
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
