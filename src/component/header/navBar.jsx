import React, { useState } from "react";
import NavLinkItem from "./NavLinkItem";
import { useAuth } from "../../context/authContext";
import { Avatar, Button } from "flowbite-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, Logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-lg sticky top-0 w-full z-50 bg-[#E6E6FA]">
      <div className="container mx-auto flex justify-between lg:justify-normal items-center py-4 px-4">
        <h1 className="text-2xl font-semibold mr-10">Your Logo</h1>
        {/* Hamburger menu button for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${
              isMobileMenuOpen ? "text-gray-500" : "text-gray-800"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {/* Desktop and tablet navigation */}
        <nav
          className={`hidden lg:flex space-x-4 items-center ${
            isMobileMenuOpen ? "hidden" : "block"
          }`}
        >
          <ul className="flex space-x-4">
            <li>
              <NavLinkItem to="/" label="Home" />
            </li>
            <li>
              <NavLinkItem to="/blog" label="Blog" />
            </li>
            <li>
              <NavLinkItem to="/history" label="History" />
            </li>
            <li>
              <NavLinkItem to="/signin" label="login" />
            </li>
          </ul>
        </nav>
        {user && (
          <div className="ml-auto hidden lg:block">
            <div className="flex flex-row items-center">
              <p className="mr-2">{user.displayName}</p>
              <Avatar
                className="mr-2"
                img={user.photoURL}
                rounded
                placeholder="Profile"
              />

              <Button color="" size="sm" className="w-24 bg-red-600">
                <p className="text-white font-semibold">Logout</p>
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="p-4 space-y-2">
            <li>
              <NavLinkItem to="/" label="Home" />
            </li>
            <li>
              <NavLinkItem to="/blog" label="Blog" />
            </li>
            <li>
              <NavLinkItem to="/history" label="History" />
            </li>
            <li>
              <NavLinkItem to="/contact" label="Contact" />
            </li>
            <li>
              <div onClick={Logout}>Logout</div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
