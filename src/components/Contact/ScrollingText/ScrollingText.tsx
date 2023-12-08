import React, { FC, useContext, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../contexts/LanguageContext';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';
import * as scrollingText from './getScrollingText';
import './ScrollingText.css';

const ScrollingText: FC = () => {
  const { language } = useContext(LanguageContext);
  const [hideScrollingText, setHideScrollingText] = useState<boolean>(true);
  const messages = scrollingText.getScrollingTexMessages(language);

  const [message1, message2, message3, message4, message5] = messages;

  const animateScrollingText = () => {
    setTimeout(() => {
      setHideScrollingText(false);
    }, 1000);
  };

  useEffect(() => {
    animateScrollingText();
  }, []);

  return (
    <h2 className="scrolling-text-container">
      <RandomReveal
        isPlaying
        duration={1}
        characters={scrollingText.getScrollingTextHeading(language)}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />

      <div
        className={`scrolling-text-content ${!hideScrollingText ? 'show' : ''}`}
      >
        <span>
          <span className="item1 pink">
            <RandomReveal
              isPlaying
              duration={1}
              characters={message1}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </span>
          <br />
          <span className="item2 red">{message2}</span>
          <br />
          <span className="item3 orange">{message3}</span>
          <br />
          <span className="item4 blue">{message4}</span>
          <br />
          <span className="item5 pink">{message5}</span>
        </span>
      </div>
    </h2>
  );
};

export default ScrollingText;