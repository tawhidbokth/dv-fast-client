import React from 'react';
import { Outlet } from 'react-router';
import authimage from '../assets/authImage.png'
import Logo from '../Pages/Shared/Logo/Logo';

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200 ">
      <Logo></Logo>
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
           <img
      src={authimage}
      alt="Auth Illustration"
      className="max-w-sm rounded-lg shadow-2xl"
    />
   </div>
    <div className='flex-1'>
   <Outlet></Outlet>
    </div>
  </div>
</div>
  );
};

export default AuthLayout;