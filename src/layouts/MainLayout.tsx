import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation();
  const showLayout =
    location.pathname !== "/login" && location.pathname !== "/signup";
  return (
    <div className="flex flex-col min-h-screen">
      {showLayout && <Header />}
      <div className="flex flex-1">
        {showLayout && <SideMenu />}
        <main className="flex-1 p-6">{children}</main>
      </div>
      {showLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
