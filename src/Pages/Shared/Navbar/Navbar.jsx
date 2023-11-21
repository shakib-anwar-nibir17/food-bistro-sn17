import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import defaultUserPic from "../../../assets/others/profile.png";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import { BsCart4 } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Congrats",
          text: "Log out Successful",
          icon: "success",
        });
      })
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="dashboard/user_home"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/pizza"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25] underline" : ""
          }
        >
          LOGIN
        </NavLink>
      </li>
      <div>
        <button className="flex justify-center items-center">
          <BsCart4 className="text-3xl text-[#EEFF25]"></BsCart4>
          <div className="badge">+{cart.length}</div>
        </button>
      </div>
      <div>
        {user?.email ? (
          <p>
            <button
              onClick={handleLogOut}
              className=" text-[#EEFF25] underline"
            >
              Sign Out
            </button>
          </p>
        ) : (
          <p>
            <Link to="/login">
              <button className=" text-[#EEFF25] underline">Sign In</button>
            </Link>
          </p>
        )}
      </div>
      <div className="h-[50px] w-[55px] rounded-full bg-blue-400">
        {user?.photoURL ? (
          <img
            className="h-full w-full rounded-full"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <img
            className="h-full w-full rounded-full"
            src={defaultUserPic}
            alt=""
          />
        )}
      </div>
    </>
  );
  return (
    <div className="navbar container justify-between text-white lg:fixed lg:z-10 lg:bg-opacity-50 bg-[#151515]">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="btn btn-ghost text-left mb-2 normal-case text-xl flex items-end">
          <img className="h-[60px] w-[50px] hidden" src={logo} alt="" />
          BISTRO BOSS <br /> Restaurant
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-4 px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
