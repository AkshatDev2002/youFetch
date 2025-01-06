import React, { useState } from 'react';
import Navbar from './Navbar'; // Import Navbar component
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
  const [isNavOpen, setIsNavOpen] = useState(false); // Manage navbar open state

  // Toggle the navbar visibility 🔽
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      {/* Title of the website, styled with individual letters 📝 */}
      <h1 className="text">
        <span className="letter">y</span>
        <span className="letter">o</span>
        <span className="letter">u</span>
        <span className="letter letter-f">F</span>
        <span className="letter">e</span>
        <span className="letter">t</span>
        <span className="letter">c</span>
        <span className="letter">h</span>
      </h1>

      {/* Logo Clickable Area 🖼️ */}
      <div className="logo-container">
        <img
          src="https://i.postimg.cc/8C89q8Ty/385aefca-8477-4dac-b700-9818e39c1df7.png"
          alt="Center Logo"
          className="logo"
          onClick={toggleNav} // Toggle navbar visibility only
        />
      </div>

      {/* Navbar Component with props for state and toggle function 📱 */}
      <Navbar isOpen={isNavOpen} toggleNav={toggleNav} />
    </header>
  );
}

export default Header;
