// src/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignInPassword from "../SignIn/SignInPassword";
import MainDashBoard from "../../Components/DashBoard/MainDashBoard";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn-password" element={<SignInPassword />} />
        <Route path="/dashboard" element={<MainDashBoard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
