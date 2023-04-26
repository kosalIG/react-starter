import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import { NavLIst } from './interface';
import Header from './components/Header';

const Layout: React.FC<LayoutProps> = ({ navList }) => {
  return (
    <div className="flex h-screen">
      <SideBar navList={navList} />
      <main className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;

interface LayoutProps {
  navList: NavLIst[];
}
