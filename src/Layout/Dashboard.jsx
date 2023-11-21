import { Outlet } from "react-router-dom";
import DashBoardMenuUser from "../Pages/Dashboard/DashboardMenu/DashBoardMenuUser";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[336px] lg:pl-16 pr-4 bg-[#D1A054] min-h-screen">
        <div className="text-3xl  uppercase mb-16">
          <h1 className="font-extrabold">BISTRO BOSS</h1>
          <h3 className="font-semibold mt-2">Restaurant</h3>
        </div>
        <DashBoardMenuUser></DashBoardMenuUser>
      </div>
      <div className="flex-1 bg-[#F6F6F6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
