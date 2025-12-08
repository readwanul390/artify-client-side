// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-base-200 mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">🎨 Artify</h3>
          <p className="text-sm text-gray-500">
            A creative hub for artists &amp; art lovers.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Contact:{" "}
            <a
              href="mailto:support@artify.com"
              className="link link-hover"
            >
              support@artify.com
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Artify. All rights reserved.
          </p>
          <div className="flex gap-3 text-sm">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover flex items-center gap-1"
            >
              <span>📘</span> <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover flex items-center gap-1"
            >
              <span>📸</span> <span>Instagram</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover flex items-center gap-1"
            >
              <span>𝕏</span> <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
