import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashboardLayout = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-lg hidden md:block">
        <div className="p-6 font-bold text-xl">Dashboard</div>

        <ul className="menu px-4 space-y-2">
          <li>
            <NavLink to="/dashboard" end>
              Dashboard Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-gallery">
              My Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/add-artwork">
              Add Artwork
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/my-favorites">
              My Favorites
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/profile">
              Profile
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="navbar bg-base-100 shadow px-6">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">User Dashboard</h2>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://i.ibb.co/3sY3Q8Q/user.png"} />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/dashboard/profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard Home</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
