import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must be logged in.",
          pathname: location?.pathname,
        }}
        replace={true}
      />
    );
  }
  return <Outlet />;
};

export default AuthRequired;
