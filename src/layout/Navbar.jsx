import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ isOpen, toggleNav }) {
  const navigate = useNavigate(); // Initialize useNavigate hook 🧭

  // Render navbar only if it is open 👀
  if (!isOpen) return null;

  return (
    <nav className="vertical-navbar">
      <ul>
        <li onClick={() => { toggleNav(); navigate('/download'); }}>
          Convert Videos 📥
        </li>
       
        <li onClick={() => { toggleNav(); navigate('/contact'); }}>
          Contact Me! ✉️
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;