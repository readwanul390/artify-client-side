import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE } from "../api";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

const ArtworkDetail = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext) || {};
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadArtwork = () => {
    setLoading(true);
    fetch(`${API_BASE}/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtwork(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    loadArtwork();
   
  }, [id]);

  const handleLike = () => {
    if (!user?.email) {
      Swal.fire("Info", "You must be logged in to like artworks.", "info");
      return;
    }

    fetch(`${API_BASE}/artworks/${id}/like`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setArtwork((prev) =>
          prev ? { ...prev, likes: data.likes } : prev
        );
      })
      .catch(() => Swal.fire("Error", "Failed to like artwork.", "error"));
  };

  const handleFavorite = () => {
    if (!user?.email) {
      Swal.fire("Info", "You must be logged in to favorite artworks.", "info");
      return;
    }
    const payload = { artworkId: id, userEmail: user.email };

    fetch(`${API_BASE}/favorites`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.added) {
          Swal.fire("Added", "Artwork added to favorites!", "success");
        } else {
          Swal.fire("Info", data.message || "Already in favorites.", "info");
        }
      })
      .catch(() => Swal.fire("Error", "Failed to add favorite.", "error"));
  };

  if (loading) {
    return <Loader />;
  }

  if (!artwork) {
    return <p>Artwork not found.</p>;
  }

  const {
    image,
    title,
    category,
    medium,
    description,
    dimensions,
    price,
    userName,
    userEmail,
    likes,
    artistPhoto,
    totalArtworks,
  } = artwork;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={image}
          alt={title}
          className="w-[50%] rounded-xl shadow-md object-cover h-[50%]"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          <p className="text-sm text-gray-500">
            Category: <span className="font-medium">{category}</span>
          </p>
        </div>

        <p>
          <span className="font-semibold">Medium / Tools:</span> {medium}
        </p>

        <p className="text-gray-700">{description}</p>

        {dimensions && (
          <p>
            <span className="font-semibold">Dimensions:</span> {dimensions}
          </p>
        )}

        {price && (
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
        )}

        {/* Artist info */}
        <div className="flex items-center gap-4 p-3 bg-base-200 rounded-xl">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={
                  artistPhoto ||
                  "https://i.ibb.co/4W2DGKm/default-avatar.png"
                }
                alt="artist"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">{userName}</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
            {totalArtworks && (
              <p className="text-xs text-gray-500">
                Total artworks: {totalArtworks}
              </p>
            )}
          </div>
        </div>

        {/* Like & favorite */}
        <div className="flex gap-3 mt-4">
          <button onClick={handleLike} className="btn btn-sm btn-outline">
            👍 Like ({likes || 0})
          </button>
          <button onClick={handleFavorite} className="btn btn-sm btn-primary">
            ❤️ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
