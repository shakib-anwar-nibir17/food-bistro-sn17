import { Outlet } from "react-router-dom";
import DashBoardMenuUser from "../Pages/Dashboard/DashboardMenu/DashBoardMenuUser";
import DashboardMenuAdmin from "../Pages/Dashboard/DashboardMenu/DashBoardMenuAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Dashboard = () => {
  const { isAdmin } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="w-[336px] lg:pl-16 pr-4 bg-[#D1A054] min-h-screen">
        <div className="text-3xl  uppercase mb-16">
          <h1 className="font-extrabold">BISTRO BOSS</h1>
          <h3 className="font-semibold mt-2">Restaurant</h3>
        </div>
        {isAdmin ? (
          <DashboardMenuAdmin></DashboardMenuAdmin>
        ) : (
          <DashBoardMenuUser></DashBoardMenuUser>
        )}
      </div>
      <div className="flex-1 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
