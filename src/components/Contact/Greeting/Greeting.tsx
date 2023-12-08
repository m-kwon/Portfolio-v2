import React, { FC, useContext } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../contexts/LanguageContext';
import * as getGreetingText from '../getContactText';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';
import './Greeting.css';

const Greeting: FC = () => {
  const { language } = useContext(LanguageContext);

  const greetingText: string = getGreetingText.getGreetingText(language);

  return (
    <h2 className="contact-main-greeting">
      <RandomReveal
        isPlaying
        duration={1}
        characters={greetingText}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </h2>
  );
};

export default Greeting;