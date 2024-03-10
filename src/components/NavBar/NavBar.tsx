import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";

/**
 * Navbar is a functional component that renders the top navigation bar of the application.
 * It displays a logo and a title for the  application.
 *
 * @returns {React.ReactElement} TSX representation of the navigation bar.
 */
const Navbar: React.FC = () => {
  // Title
  const title: string = "MVST. Coding Challenge";
  // Source path for the logo .
  const logoSrc: string = logo;

  return (
    <div className="navbar">
      <div className="navbar-content">
        <img src={logoSrc} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">{title}</h1>
      </div>
    </div>
  );
};

export default Navbar;
