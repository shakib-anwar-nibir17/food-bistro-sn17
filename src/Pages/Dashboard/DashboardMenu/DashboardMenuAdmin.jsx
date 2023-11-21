import { NavLink } from "react-router-dom";
import { FaBook, FaEnvelope, FaHome, FaListAlt, FaUsers } from "react-icons/fa";
import {
  GiForkKnifeSpoon,
  GiHamburgerMenu,
  GiShoppingBag,
} from "react-icons/gi";

const DashboardMenuAdmin = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard"
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
          to="/"
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
          to="/donation"
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
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          <p className="flex items-center gap-1">
            <span>
              <FaHome className="text-2xl" />
            </span>
            HOME
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
              <GiHamburgerMenu className="text-2xl" />
            </span>
            MENU
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
              <GiShoppingBag className="text-2xl" />
            </span>
            SHOP
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaEnvelope className="text-2xl" />
            </span>
            CONTACT
          </p>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <ul className="font-medium text-xl space-y-6">{navLinks}</ul>
    </div>
  );
};

export default DashboardMenuAdmin;
