import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noNavAndFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="container mx-auto ">
      {noNavAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
