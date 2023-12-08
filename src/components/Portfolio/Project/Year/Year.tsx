import React, { useContext } from 'react';
import * as projectText from '../getProjectText';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../../contexts/LanguageContext';
import { revealCharacters, ignoreCharacters } from '../../../../utils/utils';
import './Year.css';

interface Props {
  year: number;
}

export default function Year({ year }: Props) {
  const { language } = useContext(LanguageContext);
  const projectYearText: string = projectText.getYearHeadingText(language);

  return (
    <div className="year-container">
      <h4 className="project-year-heading">
        <RandomReveal
          isPlaying
          duration={1}
          characters={projectYearText}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </h4>
      <p className="project-year">
        <RandomReveal
          isPlaying
          duration={1}
          characters={year.toString()}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </p>
    </div>
  );
}