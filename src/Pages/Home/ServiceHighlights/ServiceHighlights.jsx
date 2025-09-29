import React from 'react';
import { FaMapMarkedAlt, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function ServiceHighlights() {
  const items = [
    {
      icon: <FaMapMarkedAlt className="h-20 w-20 text-primary" />,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
      icon: <FaShieldAlt className="h-20 w-20 text-primary" />,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
      icon: <FaHeadset className="h-20 w-20 text-primary" />,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 space-y-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 md:flex md:items-center md:space-x-6 shadow-sm hover:shadow-md transition"
          >
            {/* Left Icon */}
            <div className="flex justify-center mb-4 md:mb-0">
              {item.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
