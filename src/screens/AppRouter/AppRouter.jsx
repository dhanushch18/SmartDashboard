import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignInPassword from "../SignIn/SignInPassword";
import Menu from "../../layout/Menu";
import MainDashBoard from "../../Components/DashBoard/MainDashBoard";
import Employees from "../../Components/Employees/Employees";
import Payroll from "../../Components/Payroll/Payroll";
import Reports from "../../Components/Reports/Reports";
import Setup from "../../Components/Setup/Setup";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn-password" element={<SignInPassword />} />

        <Route path="/menu" element={<Menu />}>
          <Route index element={<MainDashBoard />} /> 
          <Route path="dashboard" element={<MainDashBoard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="reports" element={<Reports />} />
          <Route path="setup" element={<Setup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
