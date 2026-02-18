/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate } from "react-router-dom";
import type { JSX } from "react";

const isTokenValid = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  try {
    return true;
  } catch (error) {
    localStorage.removeItem("token");
    return false;
  }
};

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return isTokenValid() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
