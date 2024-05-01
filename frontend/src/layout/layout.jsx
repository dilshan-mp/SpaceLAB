import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Router from "../router/router";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/ui/navbar";
import StarsCanvas from "../components/common/StarBackground";

const Layout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // to render the alternative Navbar or the default Navbar
  const showAdminNavbar =
    location.pathname === "/admin" ||
    location.pathname === "/users" ||
    location.pathname === "/hotels" ||
    location.pathname === "/tours" ||
    location.pathname === "/vehicle" ||
    location.pathname === "/train" ||
    location.pathname === "/adduser" ||
    location.pathname === "/userpage" ||
    location.pathname === "/update";

  const showFinaceNavbar =
    location.pathname === "/finace" ||
    location.pathname === "/finance/salary" ||
    location.pathname === "/finance/employee" ||
    location.pathname === "/finance/salarySheet" ||
    location.pathname === "/finance/FinanceHealth" ||
    location.pathname === "/finance/refund" ||
    location.pathname === "/finance/addRefund" ||
    location.pathname === "/finance/updateRefund/:id";

  return (
    <div className="flex-1 relative h-screen flex flex-col">
      <StarsCanvas />
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center flex-1">
        <Router />
      </div>
    </div>
  );
};

export default Layout;
