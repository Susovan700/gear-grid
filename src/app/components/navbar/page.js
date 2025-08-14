"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AccountModal from "../../account/page.js";
import "./nav.css";

export default function Navbar() {
  const router = useRouter();
  const [showAccountModal, setShowAccountModal] = useState(false);

  const openAccountModal = () => setShowAccountModal(true);
  const closeAccountModal = () => setShowAccountModal(false);

  return (
    <>
      <div className="nav-main">
        <div className="nav-left">
          <span className="logo-q">G</span>
          <span className="logo-rest">earGrid</span>
        </div>

        <div className="nav-mid">
          <button onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/shop")}>Shop</button>
          <button onClick={() => router.push("/about")}>About Us</button>
          {/* <button onClick={() => router.push("/contact")}>Contact</button> */}
        </div>
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
