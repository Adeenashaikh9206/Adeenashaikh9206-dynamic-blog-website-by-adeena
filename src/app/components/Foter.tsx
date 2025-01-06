import Link from 'next/link';
import React from 'react';

const Foter = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-200 via-pink-100 to-pink-300 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">My Blog</h2>
            <p className="mt-2 text-sm text-black-200">
              Dive into the world of coding, creativity, and inspiration.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <Link
              href="/"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Home
              </Link>
              <Link
              href="/about"
              className="text-black hover:text-blue-600 transition-colors"
            >
              About
              
              </Link>
              <Link
              href="/blog"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Blog
              </Link>
              <Link
              href="/contact"
              className="text-black hover:text-blue-600 transition-colors"
            >
              Contact
              </Link>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
          <Link
              href="#"
              className="text-black hover:text-blue-600-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 4.56v15.09c0 .98-.79 1.77-1.77 1.77H1.77C.79 21.42 0 20.63 0 19.65V4.56C0 3.58.79 2.79 1.77 2.79h20.46c.98 0 1.77.79 1.77 1.77zM9.54 8.58H6.42v6.84h3.12V8.58zm-1.56 1.39c1.02 0 1.65-.68 1.65-1.55 0-.87-.63-1.55-1.64-1.55-1.02 0-1.65.68-1.65 1.55 0 .87.63 1.55 1.65 1.55zm9.12 4.87h-2.7V11.3c0-.77-.3-1.3-.94-1.3-.51 0-.78.34-.91.67-.05.14-.06.33-.06.53v3.85h-2.7V9.57h2.6v1.15h.03c.36-.6.99-1.08 2.01-1.08 1.46 0 2.54 1.06 2.54 3.35v3.8z" />
              </svg>
              </Link>
              <Link
              href="#"
              className="text-black hover:text-blue-600-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M23.98 4.57a10 10 0 0 1-2.89.79 5 5 0 0 0 2.17-2.75 9.87 9.87 0 0 1-3.12 1.2 4.94 4.94 0 0 0-8.4 4.49 14 14 0 0 1-10.16-5.16 4.92 4.92 0 0 0 1.53 6.59 4.88 4.88 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.43 9.91 9.91 0 0 1-6.1 2.11c-.39 0-.77-.02-1.15-.07a14 14 0 0 0 7.56 2.22c9.05 0 14-7.49 14-13.98 0-.21 0-.42-.02-.63a9.97 9.97 0 0 0 2.46-2.54z" />
              </svg>
              </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-400 pt-6 text-center text-sm text-black">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Foter;

