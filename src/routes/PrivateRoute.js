import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";

const PrivateRoute = ({ authenticate }) => {
  console.log("auth", authenticate);
  return authenticate == 1 ? <Home /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
