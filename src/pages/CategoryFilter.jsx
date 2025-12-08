import { useEffect, useState } from "react";
import { API_BASE } from "../api";
import Loader from "../components/Loader";
import ArtworkCard from "../components/ArtworkCard";

const CategoryFilter = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState("All");

  useEffect(() => {
    fetch(`${API_BASE}/artworks?visibility=public`)
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch(() => {
        setArtworks([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  const categories = ["All", ...new Set(artworks.map((a) => a.category))];

  const filtered =
    activeCat === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCat);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <p className="text-gray-500 mb-4">
        Browse artworks grouped by category in tabs.
      </p>

      <div role="tablist" className="tabs tabs-boxed">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            onClick={() => setActiveCat(cat)}
            className={`tab ${activeCat === cat ? "tab-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((art) => (
          <ArtworkCard key={art._id} artwork={art} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-400 mt-4 text-center">
          No artworks in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryFilter;
