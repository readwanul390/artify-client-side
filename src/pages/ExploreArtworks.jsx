import { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import { API_BASE } from "../api";
import Loader from "../components/Loader";

const CATEGORIES = [
  "All",
  "Digital Art",
  "Surreal",
  "Minimal",
  "Abstract",
  "Landscape",
  "Illustration",
];

const ITEMS_PER_PAGE = 8;

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const loadArtworks = () => {
    setLoading(true);
    const params = new URLSearchParams();
    params.append("visibility", "public");
    if (search.trim()) params.append("search", search.trim());
    if (category !== "All") params.append("category", category);

    fetch(`${API_BASE}/artworks?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setCurrentPage(1); // reset page on new filter/search
      })
      .catch(() => setArtworks([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadArtworks();
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    loadArtworks();
  };

  // 🔢 Pagination logic
  const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArtworks = artworks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Explore Artworks</h1>
          <p className="text-gray-500">
            Browse public artworks from the community.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Search by title or artist..."
            className="input input-bordered input-sm w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`btn btn-xs md:btn-sm ${
              category === cat ? "btn-primary" : "btn-ghost"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {currentArtworks.map((art) => (
              <ArtworkCard key={art._id} artwork={art} />
            ))}
          </div>

          {artworks.length === 0 && (
            <p className="text-center text-gray-400 mt-6">
              No artworks found. Try a different search or category.
            </p>
          )}

          {/* 🔽 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              <button
                className="btn btn-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Prev
              </button>

              {[...Array(totalPages).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num + 1)}
                  className={`btn btn-sm ${
                    currentPage === num + 1
                      ? "btn-primary"
                      : "btn-ghost"
                  }`}
                >
                  {num + 1}
                </button>
              ))}

              <button
                className="btn btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExploreArtworks;
