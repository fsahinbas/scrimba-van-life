import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./head/Head";
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
