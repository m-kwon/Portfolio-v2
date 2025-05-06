import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const footerText: string = '  2025 | Matthew Kwon';
  return (
    <div className="app-footer">
      {footerText}
      {/* <a
        href="https://github.com/m-kwon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="footer-gh-link" size="1rem" />
      </a> */}
    </div>
  );
}