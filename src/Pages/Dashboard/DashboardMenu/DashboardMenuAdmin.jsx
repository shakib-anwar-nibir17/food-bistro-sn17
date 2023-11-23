import { NavLink } from "react-router-dom";
import { FaBook, FaHome, FaListAlt, FaUsers } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import SharedNavLinks from "../../Shared/SharedNavLinks/SharedNavLinks";

const DashboardMenuAdmin = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaHome className="text-2xl" />
            </span>
            ADMIN HOME
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add_items"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <GiForkKnifeSpoon className="text-2xl" />
            </span>
            ADD ITEMS
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaListAlt className="text-2xl" />
            </span>
            MANAGE ITEMS
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/pizza"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaBook className="text-2xl" />
            </span>
            MANAGE BOOKINGS
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all_user"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaUsers className="text-2xl" />
            </span>
            ALL USERS
          </p>
        </NavLink>
      </li>
      {/* -----------------------------------admin menu -------------------------------- */}
      <div className="pt-2 pb-6">
        <hr className="border-2 border-white" />
      </div>
      <SharedNavLinks></SharedNavLinks>
    </>
  );
  return (
    <div>
      <ul className="font-medium text-xl space-y-6">{navLinks}</ul>
    </div>
  );
};

export default DashboardMenuAdmin;
