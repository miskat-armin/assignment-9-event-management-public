import { Avatar, Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import NavLinkItem from "./NavLinkItem";
import { GoSignIn } from "react-icons/go";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, Logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log(user);

  return (
    <header className="shadow-lg sticky top-0 w-full bg-white lg:bg-opacity-60 z-50">
      <div className="mx-auto flex lg:justify-between items-center py-4 px-4 md:px-10">
        <h1 className="text-2xl font-semibold mr-10">Your Logo</h1>
        {/* Hamburger menu button for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none ml-auto lg:ml-0"
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
          </ul>
        </nav>
        {user ? (
          <div className="ml-2">
            <Dropdown
              arrowIcon={true}
              inline
              label={<Avatar alt="User settings" img={user.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <li onClick={Logout} className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-red-500 flex justify-between">
                Logout <FiLogOut />
              </li>
            </Dropdown>
          </div>
        ) : (
          <Link to="/signin" className="hidden lg:block">
            <Button
              color=""
              size="xs"
              className="w-32 bg-[#7373E3] hover:bg-[#4D4DDB]  hover:scale-105 transform transition duration-500"
            >
              <p className="text-white font-semibold text-lg">Login</p>
            </Button>
          </Link>
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
               <NavLinkItem to="/signin" label={<span className="flex items-center">Log in <GoSignIn className="ml-2"/></span>} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
