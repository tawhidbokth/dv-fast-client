import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navabr/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer> </Footer>
    </div>
  );
};

export default RootLayout;