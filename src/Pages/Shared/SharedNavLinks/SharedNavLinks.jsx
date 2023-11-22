import { NavLink } from "react-router-dom";
import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { FaEnvelope, FaHome } from "react-icons/fa";
const SharedNavLinks = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default SharedNavLinks;
