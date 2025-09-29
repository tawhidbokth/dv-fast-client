import { useState } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, the posture corrector is designed to fit most ages and body types comfortably."
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Regular use can help reduce back pain and encourage proper posture over time."
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some models include vibration alerts to remind you to maintain correct posture."
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe to our email alerts to be notified as soon as the product is restocked."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-600 mt-2">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
            Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* See more button */}
        <div className="text-center mt-10">
          <button className="flex items-center justify-center mx-auto bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow">
            See More FAQ's
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

