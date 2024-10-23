import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Headerr";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
