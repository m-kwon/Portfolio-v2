import React, { FC } from 'react';
import { RandomReveal } from 'react-random-reveal';
import './Footer.css';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';

const Footer: FC = () => {
  const footerText: string = '2023 | Matthew Kwon';
  return (
    <footer className="contact-footer">
      <RandomReveal
        isPlaying
        duration={1}
        characters={footerText}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </footer>
  );
};

export default Footer;