import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import ResetPassword from "../pages/resetPassword";
import Profile from "../pages/profile";
import Earth from "../pages/earth";

const Router = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/earth" element={<Earth />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
