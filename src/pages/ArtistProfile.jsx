import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE } from "../api";
import Loader from "../components/Loader";
import ArtworkCard from "../components/ArtworkCard";

const ArtistProfile = () => {
  const { email } = useParams();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/artworks?email=${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch(() => {
        setArtworks([]);
        setLoading(false);
      });
  }, [email]);

  if (loading) return <Loader />;

  if (artworks.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-2">Artist Profile</h1>
        <p className="text-gray-500 mb-4">No artworks found for this artist.</p>
      </div>
    );
  }

  const first = artworks[0];
  const totalArtworks = artworks.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src={
                first.artistPhoto ||
                "https://i.ibb.co/4W2DGKm/default-avatar.png"
              }
              alt={first.userName}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{first.userName}</h1>
          <p className="text-gray-500 text-sm">{first.userEmail}</p>
          <p className="mt-2">
            <span className="font-semibold">Total artworks:</span>{" "}
            {totalArtworks}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Followers: <span className="font-semibold">0</span> (demo)
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Artist bio coming soon. This section can show the artist&apos;s
            story, inspiration, and style.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Artworks by {first.userName}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art) => (
            <ArtworkCard key={art._id} artwork={art} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;
