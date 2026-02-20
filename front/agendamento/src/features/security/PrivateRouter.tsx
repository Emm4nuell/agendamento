/* eslint-disable @typescript-eslint/no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";

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

const PrivateRoute = () => {
  return isTokenValid() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
