import React from 'react';

function Footer() {
  return (
    <footer className="bg-red-600 text-white px-6 py-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-3">Movie.Lk</h3>
          <p>Your source for the latest movies, reviews, and trailers. Stay updated and entertained.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/movies" className="hover:underline">Movies</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Genres</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Action</a></li>
            <li><a href="#" className="hover:underline">Drama</a></li>
            <li><a href="#" className="hover:underline">Comedy</a></li>
            <li><a href="#" className="hover:underline">Horror</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs text-white border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Movie.Lk. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
