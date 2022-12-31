import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Header } from "./Header/Header";

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "85vh",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
