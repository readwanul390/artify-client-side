import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getDashboardStats,getRecentArtworks, getCategoryStats} from "../../api";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({});
  const [recent, setRecent] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    getDashboardStats(user.email).then((res) => setStats(res.data));
    getRecentArtworks(user.email).then((res) => setRecent(res.data));
    getCategoryStats(user.email).then((res) => setChartData(res.data));
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow p-6">
          <h2>Total Artworks</h2>
          <p className="text-3xl font-bold">{stats.totalArtworks}</p>
        </div>

        <div className="card bg-base-100 shadow p-6">
          <h2>Total Likes</h2>
          <p className="text-3xl font-bold">{stats.totalLikes}</p>
        </div>

        <div className="card bg-base-100 shadow p-6">
          <h2>My Favorites</h2>
          <p className="text-3xl font-bold">{stats.totalFavorites}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-12 bg-base-100 shadow p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">
          Artworks by Category
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Recent Artworks</h2>

        <div className="overflow-x-auto bg-base-100 shadow rounded">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Likes</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((art) => (
                <tr key={art._id}>
                  <td>{art.title}</td>
                  <td>{art.category}</td>
                  <td>{art.likes}</td>
                  <td>
                    {new Date(art.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
