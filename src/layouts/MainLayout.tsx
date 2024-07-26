import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout">
        <SideMenu />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
