const About = () => {
  return (
    <div className="bg-base-200">
      {/* ========= HERO SECTION ========= */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-primary">Artify</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Artify is a modern digital art management platform designed to help
          artists organize, showcase, and control their creative work with ease.
        </p>
      </section>

      {/* ========= FEATURE CARDS ========= */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-base-100 shadow-lg p-6">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">
              Artist-Centered Design
            </h3>
            <p className="text-gray-600 text-sm">
              Built specifically for artists to manage artworks, profiles,
              and creative identity in one dashboard.
            </p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <div className="text-4xl mb-3">🔐</div>
            <h3 className="text-xl font-semibold mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-600 text-sm">
              Full control over artwork visibility with a private artist
              workspace and secure authentication.
            </p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-semibold mb-2">
              Powerful Dashboard
            </h3>
            <p className="text-gray-600 text-sm">
              Insightful dashboard with real-time statistics, charts,
              and activity overview.
            </p>
          </div>
        </div>
      </section>

      {/* ========= HOW IT WORKS ========= */}
      <section className="bg-base-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            How Artify Works
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="mt-4 font-semibold">Create Account</h4>
              <p className="text-sm text-gray-600 mt-1">
                Sign up securely using email or Google authentication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="mt-4 font-semibold">Upload Artworks</h4>
              <p className="text-sm text-gray-600 mt-1">
                Add artworks with details, images, and categories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="mt-4 font-semibold">Manage Dashboard</h4>
              <p className="text-sm text-gray-600 mt-1">
                Track likes, favorites, and artwork statistics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="mt-4 font-semibold">Grow Portfolio</h4>
              <p className="text-sm text-gray-600 mt-1">
                Build and maintain a professional digital art portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= WHY ARTIFY ========= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Artify?
            </h2>
            <p className="text-gray-600 mb-4">
              Artify is more than just an art gallery. It is a complete
              management system for digital artists who want control,
              clarity, and professionalism.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Private artist dashboard</li>
              <li>✔ Clean and modern UI</li>
              <li>✔ Real-time analytics</li>
              <li>✔ Secure authentication</li>
              <li>✔ Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-base-100 shadow-xl rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm">
              To empower artists by giving them a secure, simple, and
              professional platform where creativity meets technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
