import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noNavAndFooter = location.pathname.includes("login");
  return (
    <div className="container mx-auto ">
      {noNavAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
