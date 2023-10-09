import React, { useState } from 'react';
import NavLinkItem from './NavLinkItem';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  return (
    <header className="bg-white shadow-lg sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between lg:justify-normal items-center py-4 px-4">
        <h1 className="text-2xl font-semibold mr-10">Your Logo</h1>
        {/* Hamburger menu button for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none">
          <svg
            className={`w-6 h-6 ${isMobileMenuOpen ? 'text-gray-500' : 'text-gray-800'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isMobileMenuOpen ?
                "M6 18L18 6M6 6l12 12" :
                "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Desktop and tablet navigation */}
        <nav className={`hidden lg:flex space-x-4 items-center ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
          <ul className="flex space-x-4">
          <li><NavLinkItem to="/" label="Home" /></li>
            <li><NavLinkItem to="/blog" label="Blog" /></li>
            <li><NavLinkItem to="/history" label="History" /></li>
            <li><NavLinkItem to="/contact" label="Contact" /></li>
          </ul>
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="p-4 space-y-2">
            <li><NavLinkItem to="/" label="Home" /></li>
            <li><NavLinkItem to="/blog" label="Blog" /></li>
            <li><NavLinkItem to="/history" label="History" /></li>
            <li><NavLinkItem to="/contact" label="Contact" /></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
