import React, { useEffect } from 'react';
import { RandomReveal } from 'react-random-reveal';
import {
  fix100vhInChrome,
  ignoreCharacters,
  revealCharacters,
} from '../../utils/utils';
import './Popup.css';

interface Props {
  popupMessage: string;
}

export const Popup: React.FC<Props> = ({ popupMessage }: Props) => {
  useEffect(() => {
    fix100vhInChrome();
  }, []);

  return (
    <div className="popup-overlay">
      <RandomReveal
        isPlaying
        duration={1}
        characters={popupMessage}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </div>
  );
};

export default Popup;