import axios from "axios";
const envBase = import.meta.env.VITE_API_BASE;
export const API_BASE =
  envBase ||
  "https://artify-server-side-eosin.vercel.app";

export const getDashboardStats = (email) =>
  axios.get(`${API_BASE}/dashboard/stats`, {
    params: { email },
  });

export const getRecentArtworks = (email) =>
  axios.get(`${API_BASE}/dashboard/recent-artworks`, {
    params: { email },
  });

export const getCategoryStats = (email) =>
  axios.get(`${API_BASE}/dashboard/category-stats`, {
    params: { email },
  });

