import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import rivewimg from "../../../assets/customer-top.png"

const reviews = [
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
  },
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day."
  }
];

export default function ReviewSection() {
  const [current, setCurrent] = useState(1); // middle card active

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Title */}
        <div className="mb-6">
          <img className="mx-auto mb-4" src={rivewimg} alt="Customer Reviews" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What our customers are sayings
          </h2>
          <p className="text-gray-600 mt-2">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
            Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-10 bg-white rounded-full p-3 shadow hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>

          {/* Cards */}
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-500 p-6 rounded-xl shadow 
                w-72 md:w-80 text-left bg-white
                ${index === current ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
              >
                <p className="text-gray-700 italic mb-6">“{review.text}”</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-10 bg-white rounded-full p-3 shadow hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer w-3 h-3 rounded-full 
              ${current === index ? "bg-green-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
