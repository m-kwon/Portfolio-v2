import React, { FC, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './ContactIcons.css';

const ContactIcons: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      const contactButtons = document.querySelectorAll('.contact-button');
      contactButtons.forEach((button, index) => {
        setTimeout(() => {
          button.classList.add('skill-item-fadeIn');
        }, 200 * (index + 1));
      });
    }, 200);
  }, []);

  return (
    <>
      <div className="contact-buttons-container">
        <a
          href="mailto:matthew.o.kwon@gmail.com?subject=Contact from website"
          className="contact-button-wrapper"
        >
          <FaEnvelope className="contact-button" size="3rem" />
        </a>
        <a
          href="https://github.com/m-kwon"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button-wrapper"
        >
          <FaGithub className="contact-button" size="3rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthewkwon"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button-wrapper"
        >
          <FaLinkedin className="contact-button" size="3rem" />
        </a>
      </div>
    </>
  );
};

export default ContactIcons;