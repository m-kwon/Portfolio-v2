import React, { FC, useContext, useRef } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../contexts/LanguageContext';
import * as getContactHeaderText from '../getContactText';
import './HoverItemEffect.css';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';

const HoverItemEffect: FC = () => {
  const { language } = useContext(LanguageContext);
  const hoverElementRef = useRef<HTMLHeadingElement>(null);

  const contactHeaderText: string =
    getContactHeaderText.getContactHeaderText(language);

  const followImageCursor = (
    e: React.MouseEvent,
    menuItem: HTMLElement | null
  ): void => {
    if (menuItem) {
      const contentBox = menuItem.getBoundingClientRect();
      const dx = e.pageX - contentBox.x;
      const dy = e.pageY - contentBox.y;
      (
        menuItem.children[1] as HTMLElement
      ).style.transform = `translate(${dx}px, ${dy}px)`;
    }
  };

  return (
    <h2
      ref={hoverElementRef}
      className="contact-hoverElement"
      onMouseMove={(e) => {
        followImageCursor(e, hoverElementRef.current);
      }}
    >
      <span
        data-menu-item-text={contactHeaderText}
        className="contact-hoverElement-title"
      >
        <RandomReveal
          isPlaying
          duration={1}
          characters={contactHeaderText}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </span>
      <span
        className="menu-item-hover-image"
      ></span>
    </h2>
  );
};

export default HoverItemEffect;