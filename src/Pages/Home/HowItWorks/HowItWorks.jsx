import React from 'react';
import { FaTruck, FaDollarSign, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaTruck className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaDollarSign className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMapMarkerAlt className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="h-12 w-12 text-primary mx-auto mb-4" />,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="rounded-xl shadow-sm hover:shadow-md transition bg-white p-6 text-center">
              {step.icon}
              <h3 className="text-lg text-gray-950 font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
