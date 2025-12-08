import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                🎨
              </div>
              <span className="text-2xl font-bold">Artify</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              A creative hub for artists & art lovers. Explore, create, and share your passion for art with a global community.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-xl">📸</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="X"
              >
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@artify.com" 
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  support@artify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Artify. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Cookies
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;