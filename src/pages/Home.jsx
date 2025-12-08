// src/pages/Home.jsx
import { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import { API_BASE } from "../api";
import Loader from "../components/Loader";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load 6 most recent public artworks from backend
  useEffect(() => {
    fetch(`${API_BASE}/artworks/featured`)
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Featured load error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-12">
      {/* 🔹 Banner / Slider with 3 slides */}
      <section className="rounded-2xl overflow-hidden shadow-md relative">
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
              className="w-full object-cover max-h-[420px]"
            />
            <div className="absolute flex items-center gap-4 justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <div className="text-right bg-black/50 text-white p-4 rounded-xl max-w-md ml-auto">
                <h2 className="text-3xl font-bold mb-2">
                  <Typewriter
                    words={[
                      "Discover Stunning Digital Art",
                      "Explore a World of Creativity",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                </h2>
                <p>Explore works from new and emerging artists every day.</p>
              </div>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/374054/pexels-photo-374054.jpeg"
              className="w-full object-cover max-h-[420px]"
            />
            <div className="absolute flex items-center gap-4 justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <div className="text-right bg-black/50 text-white p-4 rounded-xl max-w-md ml-auto">
                <h2 className="text-3xl font-bold mb-2">
                  Support Independent Artists
                </h2>
                <p>Like, favorite, and share artworks you love.</p>
              </div>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/103127/pexels-photo-103127.jpeg"
              className="w-full object-cover max-h-[420px]"
            />
            <div className="absolute flex items-center gap-4 justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <div className="text-right bg-black/50 text-white p-4 rounded-xl max-w-md ml-auto">
                <h2 className="text-3xl font-bold mb-2">
                  Create Your Own Gallery
                </h2>
                <p>Upload your artwork and build a personal collection.</p>
              </div>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Featured Artworks: 6 most recent */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Artworks</h2>
          <p className="text-sm text-gray-500">
            Showing 6 most recent artworks
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <Fade cascade damping={0.1} triggerOnce>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((art) => (
                  <ArtworkCard key={art._id} artwork={art} />
                ))}
              </div>
            </Fade>
            {!loading && featured.length === 0 && (
              <p className="text-gray-400 mt-4">
                No artworks yet. Add from{" "}
                <span className="font-semibold">Add Artwork</span> page.
              </p>
            )}
          </>
        )}
      </section>

      {/* 🔹 Extra Section 1: Top Artists of the Week */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Artists of the Week</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Amina Rahman</h3>
              <p>Abstract digital illustrations.</p>
              <div className="badge badge-primary mt-2">Trending</div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Liam Rodriguez</h3>
              <p>Surreal dreamlike landscapes.</p>
              <div className="badge badge-secondary mt-2">Most Liked</div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Maya Patel</h3>
              <p>Minimal line art inspired by daily life.</p>
              <div className="badge badge-accent mt-2">Editor&apos;s Pick</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Extra Section 2: Community Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-title">Artworks Uploaded</div>
            <div className="stat-value">1.2k+</div>
            <div className="stat-desc">Last 30 days</div>
          </div>
          <div className="stat">
            <div className="stat-title">Active Artists</div>
            <div className="stat-value">350+</div>
            <div className="stat-desc">From 20+ countries</div>
          </div>
          <div className="stat">
            <div className="stat-title">Favorites</div>
            <div className="stat-value">8.4k</div>
            <div className="stat-desc">and counting</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
