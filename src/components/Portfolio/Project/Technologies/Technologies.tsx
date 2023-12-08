import React, { useContext } from 'react';
import * as projectText from '../getProjectText';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../../contexts/LanguageContext';
import { revealCharacters, ignoreCharacters } from '../../../../utils/utils';
import './Technologies.css';

interface Props {
  technologies: string;
}

export default function Technologies({ technologies }: Props) {
  const { language } = useContext(LanguageContext);
  const projectTechnologiesText: string =
    projectText.getTechnologiesHeadingText(language);

  return (
    <div className="technologies-container">
      <h4 className="project-technologies-heading">
        <RandomReveal
          isPlaying
          duration={1}
          characters={projectTechnologiesText}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </h4>
      <p className="project-technologies">
        <RandomReveal
          isPlaying
          duration={1}
          characters={technologies}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </p>
    </div>
  );
}