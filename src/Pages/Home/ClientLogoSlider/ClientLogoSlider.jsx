import React from 'react';
import logo1 from '../../../assets/brands/start-people 1.png'
import logo2 from '../../../assets/brands/start.png'
import logo3 from '../../../assets/brands/randstad.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/casio.png'
import logo6 from '../../../assets/brands/amazon_vector.png'
import logo7 from '../../../assets/brands/amazon.png'
import Marquee from 'react-fast-marquee';

const Logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];


const ClientLogoSlider = () => {
  return (
    <div>
        <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Clients
        </h2>

        {/* react-fast-marquee ব্যবহার */}
        <Marquee
          speed={50}              // স্লাইডের গতি (ডিফল্ট 50)
          gradient={false}        // পাশে fade effect বন্ধ রাখতে
          pauseOnHover={true}     // মাউস hover করলে থেমে যাবে
        >
          {Logos.map((logo, index) => (
            <div key={index} className="mx-8 flex justify-center">
              <img
                src={logo}
                alt={`Client logo ${index}`}
                className=" w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
    </div>
  );
};

export default ClientLogoSlider;