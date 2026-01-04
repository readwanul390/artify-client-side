
import { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import { API_BASE } from "../api";
import Loader from "../components/Loader";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  
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
      
      <section className="relative rounded-2xl overflow-hidden shadow-md h-[65vh]">
      {/* Scroll hint */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce text-white">
        ↓
      </div>

      <div className="carousel w-full h-full" data-carousel="slide">
        {/* SLIDE 1 */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

          <div className="absolute inset-0 flex items-center justify-between px-6">
            <a href="#slide3" className="btn btn-circle">❮</a>

            <div className="text-right text-white max-w-md">
              <h2 className="text-4xl font-bold mb-4 leading-tight">
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

              <p className="mb-6 opacity-90">
                Explore works from new and emerging artists every day.
              </p>
              <Link to="/explore" className="btn btn-primary rounded-full">
                Explore Artworks
              </Link>
            </div>

            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/374054/pexels-photo-374054.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-between px-6">
            <a href="#slide1" className="btn btn-circle">❮</a>

            <div className="text-right text-white max-w-md">
              <h2 className="text-4xl font-bold mb-4">
                Support Independent Artists
              </h2>
              <p className="mb-6">
                Like, favorite, and share artworks you love.
              </p>
             <Link to="/my-favorites" className="btn btn-primary rounded-full">
                My Favourites
              </Link>
            </div>

            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/103127/pexels-photo-103127.jpeg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-between px-6">
            <a href="#slide2" className="btn btn-circle">❮</a>

            <div className="text-right text-white max-w-md">
              <h2 className="text-4xl font-bold mb-4">
                Create Your Own Gallery
              </h2>
              <p className="mb-6">
                Upload your artwork and build a personal collection.
              </p>
              <Link to="/add-artwork" className="btn btn-primary rounded-full">
                Add Artwork
              </Link>
            </div>

            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      </section>


    
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
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Artists of the Week</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Readwanul</h3>
              <p>Abstract digital illustrations.</p>
              <div className="badge badge-primary mt-2">Trending</div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Taylor Swift</h3>
              <p>Surreal dreamlike landscapes.</p>
              <div className="badge badge-primary mt-2">Most Liked</div>
            </div>
          </div>
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Bad Bunny</h3>
              <p>Minimal line art inspired by daily life.</p>
              <div className="badge badge-primary mt-2">Editor&apos;s Pick</div>
            </div>
          </div>
        </div>
      </section>

     
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
      <section>
        <h2 className="text-2xl font-bold mb-4">Browse by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Digital Art", "Illustration", "3D Art", "Photography", "AI Art", "Abstract"].map(cat => (
            <div key={cat} className="card bg-base-200 shadow-sm p-4 text-center font-semibold">
              {cat}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-base-200 rounded-2xl p-10 text-center">
  <h2 className="text-3xl font-bold mb-4">
    Want to <span className="text-primary">Work Together?</span>
  </h2>

  <p className="text-gray-600 max-w-xl mx-auto mb-6">
    Have a project idea, collaboration, or just want to say hello?
    Feel free to reach out anytime.
  </p>

  <Link to="/Contact" className="btn btn-primary rounded-full px-8">
    Contact Me
  </Link>
</section>

      {/* <section>
  <h2 className="text-2xl font-bold mb-4">How Artify Works</h2>
  <div className="grid md:grid-cols-3 gap-4">
    <div className="card bg-base-200 p-4">🎨 Upload Your Artwork</div>
    <div className="card bg-base-200 p-4">❤️ Get Likes & Favorites</div>
    <div className="card bg-base-200 p-4">🌍 Share with Community</div>
  </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Why Choose Artify?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Free & easy artwork uploads</li>
          <li>Artist-focused community</li>
          <li>Modern UI with dark/light mode</li>
        </ul>
      </section> */}



    </div>
  );
};

export default Home;
