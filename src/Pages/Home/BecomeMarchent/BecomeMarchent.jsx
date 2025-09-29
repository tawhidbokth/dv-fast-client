import React from 'react';
import location from "../../../assets/location-merchant.png"

const BecomeMarchent = () => {
  return (
    
  <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] p-20 bg-no-repeat rounded-4xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={location}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
          <button className="btn bg-[#CAEB66] text-black rounded-full">Become a Merchant</button>
          <button className="btn bg-[#CAEB66] text-black  outline ms-4">Earn with Profast Courier</button>
    </div>
  </div>
</div>
    
  );
};

export default BecomeMarchent;