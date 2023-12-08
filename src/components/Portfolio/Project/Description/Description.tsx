import React, { useContext } from 'react';
import * as projectText from '../getProjectText';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../../contexts/LanguageContext';
import { revealCharacters, ignoreCharacters } from '../../../../utils/utils';
import './Description.css';

interface Props {
  description_EN: string;
}

export default function Description({
  description_EN,
}: Props) {
  const { language } = useContext(LanguageContext);
  const projectDescriptionText: string =
    projectText.getDescriptionHeadingText(language);
  return (
    <div className="description-container">
      <h4 className="project-description-heading">
        <RandomReveal
          isPlaying
          duration={1}
          characters={projectDescriptionText}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </h4>
      {
        <p className="project-description">
          <RandomReveal
            isPlaying
            duration={1}
            characters={description_EN}
            characterSet={revealCharacters}
            ignoreCharacterSet={ignoreCharacters}
          />
        </p>
      }
    </div>
  );
}