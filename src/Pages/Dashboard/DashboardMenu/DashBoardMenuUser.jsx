import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
  FaEnvelope,
  FaCalendarCheck,
} from "react-icons/fa";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const DashBoardMenuUser = () => {
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
            USER HOME
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
              <FaCalendarAlt className="text-2xl" />
            </span>
            RESERVATION
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
              <FaWallet className="text-2xl" />
            </span>
            PAYMENT HISTORY
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <p className="flex items-center gap-1">
            <span>
              <FaShoppingCart className="text-2xl" />
            </span>
            MY CART
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
              <VscFeedback className="text-2xl" />
            </span>
            ADD REVIEW
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
              <FaCalendarCheck className="text-2xl" />
            </span>
            MY BOOKING
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

export default DashBoardMenuUser;
