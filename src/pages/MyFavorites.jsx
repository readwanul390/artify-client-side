// src/pages/MyFavorites.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { API_BASE } from "../api";
import Swal from "sweetalert2";
import ArtworkCard from "../components/ArtworkCard";
import Loader from "../components/Loader";

const MyFavorites = () => {
  const { user } = useContext(AuthContext) || {};
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`${API_BASE}/favorites?email=${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch(() => setFavorites([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadFavorites();
    
  }, [user]);

  const handleUnfavorite = (favId) => {
    fetch(`${API_BASE}/favorites/${favId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Removed", "Artwork removed from favorites.", "success");
          setFavorites((prev) => prev.filter((f) => f._id !== favId));
        } else {
          Swal.fire("Error", "Failed to remove favorite.", "error");
        }
      })
      .catch(() =>
        Swal.fire("Error", "Server error while removing favorite.", "error")
      );
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">My Favorites</h1>
      <p className="text-gray-500">
        Artworks you have added to your favorites.
      </p>

      {favorites.length === 0 ? (
        <p className="text-gray-400 mt-4">
          You haven&apos;t favorited any artwork yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((fav) => (
            <div key={fav._id} className="relative">
              <ArtworkCard artwork={fav.artwork} />
              <button
                className="btn btn-xs btn-error text-white absolute top-2 right-2"
                onClick={() => handleUnfavorite(fav._id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
