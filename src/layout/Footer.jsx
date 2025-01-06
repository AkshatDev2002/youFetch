import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // GitHub and LinkedIn icons

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Display current year dynamically */}
      <p>© {new Date().getFullYear()} AKSHAT DEV. All rights reserved.</p>

      {/* GitHub Profile Link */}
      <a
        href="https://github.com/AkshatDev2002/Youtube_Video_Downloader"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.githubLink}
      >
        <FaGithub size={24} style={styles.githubIcon} />
      </a>

      {/* LinkedIn Profile Link */}
      <a
        href="https://www.linkedin.com/in/akshat-dev-14ad/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.linkedinLink}
      >
        <FaLinkedin size={24} style={styles.linkedinIcon} />
      </a>
    </footer>
  );
};

// Inline Styles for the Footer Component
const styles = {
  footer: {
    textAlign: 'center', // Center-align the footer content
    padding: '10px', // Add inner spacing
    backgroundColor: '#f8f8f8', // Light gray background
    position: 'fixed', // Fix footer position at the bottom
    left: '0', // Align to the left edge
    bottom: '0', // Stick to the bottom edge
    width: '100%', // Span the full width of the page
    fontSize: '12px', // Small font size for text
    color: '#555', // Dark gray text color
  },
  githubLink: {
    position: 'absolute',
    left: '30px', // Position GitHub icon from the left
    bottom: '15px', // Position from the bottom edge
    textDecoration: 'none', // Remove underline from the link
  },
  linkedinLink: {
    position: 'absolute',
    right: '50px', // Position LinkedIn icon from the right
    bottom: '15px', // Position from the bottom edge
    textDecoration: 'none', // Remove underline from the link
  },
  githubIcon: {
    color: '#333', // Dark gray color for GitHub icon
    cursor: 'pointer', // Pointer cursor on hover
  },
  linkedinIcon: {
    color: '#0e76a8', // LinkedIn blue color for the icon
    cursor: 'pointer', // Pointer cursor on hover
  },
};

export default Footer;
