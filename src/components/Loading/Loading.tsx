import React, { FC, useEffect } from 'react';
import { RandomReveal } from 'react-random-reveal';
import './Loading.css';
import { fix100vhInChrome, revealCharacters } from '../../utils/utils';

const Loading: FC = () => {
  const message: string = 'loading';

  useEffect(() => {
    fix100vhInChrome();
  }, []);

  return (
    <div className="loading-container">
      <div className="loading">
        <span>
          <RandomReveal
            isPlaying
            duration={2}
            characters={message}
            characterSet={revealCharacters}
          />
        </span>
      </div>
    </div>
  );
};
export default Loading;