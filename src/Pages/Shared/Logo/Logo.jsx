import React from 'react';
import logo from '../../../assets/logo.png'

const Logo = () => {
  return (
    <div className='flex items-center '>
      <img src={logo} alt="" />
      <h1 className='font-bold text-2xl mt-4'>Dev-Fast</h1>
    </div>
  );
};

export default Logo;