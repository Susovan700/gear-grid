"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import AccountModal from "../../account/page.js";
import "./nav.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openAccountModal = () => setShowAccountModal(true);
  const closeAccountModal = () => setShowAccountModal(false);
  
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  
  const isActive = (path) => {
    return pathname === path;
  };

  const handleNavigation = (path) => {
    router.push(path);
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  return (
    <>
      <div className="nav-main">
        <div className="nav-left">
          <span className="logo-q">G</span>
          <span className="logo-rest">earGrid</span>
        </div>

        {/* Regular navigation - visible on desktop */}
        <div className="nav-mid">
          <button 
            onClick={() => router.push("/")} 
            className={isActive("/") ? "active" : ""}
          >
            Home
          </button>
          <button 
            onClick={() => router.push("/shop")} 
            className={isActive("/shop") ? "active" : ""}
          >
            Shop
          </button>
          <button 
            onClick={() => router.push("/about")} 
            className={isActive("/about") ? "active" : ""}
          >
            About Us
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="nav-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ⋯
          {/* Mobile dropdown menu */}
          <div className={`mobile-menu ${showMobileMenu ? 'show' : ''}`}>
            <button 
              onClick={() => handleNavigation("/")}
              className={isActive("/") ? "active" : ""}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation("/shop")}
              className={isActive("/shop") ? "active" : ""}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavigation("/about")}
              className={isActive("/about") ? "active" : ""}
            >
              About Us
            </button>
          </div>
        </button>

        <div className="nav-right">
          <button
            onClick={() => (window.location.href = "/search")}
            aria-label="Search"
            className="nav-button search-button"
          >
            <img src="/search_icon.svg" alt="search icon" />
          </button>
          <button
            onClick={openAccountModal}
            className="nav-button account-button"
          >
            <span>
              <img src="user_icon.svg" alt="User" />
            </span>
            <span>Account</span>
          </button>
        </div>
      </div>

      <hr className="nav-separator" />
      {showAccountModal && <AccountModal onClose={closeAccountModal} />}
    </>
  );
}