import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPage from './page/HeaderPage';

const Layout = () => {
  return (
    <div>
      <HeaderPage />
      <Outlet />
    </div>
  );
};

export default Layout;