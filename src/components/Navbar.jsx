import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext) || {};
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    if (!logoutUser) return;
    logoutUser().catch((err) => console.error(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Explore Artworks
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Categories
        </NavLink>
      </li>

      {/* ✅ Dashboard link only when logged in */}
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl font-bold">
          🎨 Artify
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {!user && (
          <>
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4W2DGKm/default-avatar.png"
                  }
                  alt="user"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-2 py-1 text-sm font-semibold">
                {user.displayName || "User"}
              </li>

              <li>
                <Link to="/dashboard/profile">Profile</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
