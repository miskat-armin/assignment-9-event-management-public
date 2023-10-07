import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around px-4 lg:px-0">
        {/* Logo and site info */}
        <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 lg:mr-12">
          <img src="/your-logo.png" alt="Your Logo" className="w-12 lg:w-16" />
          <h1 className="text-xl lg:text-2xl font-semibold">Your Website Name</h1>
          <p className="text-sm lg:text-base">Your website description goes here.</p>
        </div>
        {/* Footer links */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0">
          {/* Resources */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold">Resources</h2>
            <ul className="space-y-2">
              <li><a href="/articles">Articles</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/downloads">Downloads</a></li>
            </ul>
          </div>
          {/* Help */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold">Help</h2>
            <ul className="space-y-2">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <ul className="space-y-2">
              <li><a href="/facebook">Facebook</a></li>
              <li><a href="/twitter">Twitter</a></li>
              <li><a href="/instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
