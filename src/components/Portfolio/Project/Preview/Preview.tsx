import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlitchHandle, useGlitch } from 'react-powerglitch';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../../../contexts/LanguageContext';
import * as projectText from '../getProjectText';
import { revealCharacters, ignoreCharacters } from '../../../../utils/utils';
import './Preview.css';

interface Props {
  previewImageURL: string;
  previewVideoURL: string;
  githubLink: string;
  liveLink: string;
}

export default function Preview({
  previewImageURL,
  previewVideoURL,
  githubLink,
  liveLink,
}: Props) {
  const { language } = useContext(LanguageContext);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [showPreviewImageEffect, setShowPreviewImageEffect] =
    useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isTextRevealTriggered2, setIsTextRevealTriggered2] =
    useState<boolean>(false);
  const [isTextRevealTriggered1, setIsTextRevealTriggered1] =
    useState<boolean>(true);
  const [previewPlayButtonText, setPreviewPlayButtonText] = useState<string>(
    projectText.getPreviewButtonText(language)
  );
  const sourceButtonText: string = projectText.getSourceButtonText(language);
  const liveButtonText: string = projectText.getLiveButtonText(language);
  const glitch: GlitchHandle = useGlitch({
    playMode: 'always',
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 1000,
      iterations: 1,
      easing: 'ease-in-out',
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 5,
      amplitudeX: 0.05,
      amplitudeY: 0.1,
    },
    slice: {
      count: 2,
      velocity: 11,
      minHeight: 0.15,
      maxHeight: 0.05,
      hueRotate: true,
    },
    pulse: false,
  });

  const handlePreviewButtonClick = () => {
    if (isVideoPlaying) {
      handlePreviewStop();
    } else {
      handlePreviewPlay();
    }
  };

  const handlePreviewPlay = () => {
    const video = vidRef.current;
    if (video) {
      video.play();
    }

    setPreviewPlayButtonText(projectText.getStopButtonText(language));

    setIsVideoPlaying(true);
  };

  const handlePreviewStop = () => {
    const video = vidRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setPreviewPlayButtonText(projectText.getPreviewButtonText(language));
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    setShowPreviewImageEffect(true);
    setTimeout(() => {
      setShowPreviewImageEffect(false);
    }, 500);

    setIsTextRevealTriggered1(!isTextRevealTriggered1);
    setIsTextRevealTriggered2(!isTextRevealTriggered2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVideoPlaying]);

  return (
    <div>
      <div className="preview-container" ref={glitch.ref}>
        <img
          src={previewImageURL}
          alt="preview-placeholder"
          className={`preview-image ${isVideoLoaded ? 'hidden' : ''}`}
        />
        <video
          ref={vidRef}
          poster={previewImageURL}
          muted
          playsInline
          preload="auto"
          onEnded={handlePreviewStop}
          className={` ${showPreviewImageEffect ? 'showFilter' : ''} ${
            isVideoLoaded ? '' : 'hidden'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={previewVideoURL} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="project-icons-container">
          <button className="github-link-button">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <RandomReveal
                isPlaying
                duration={1}
                characters={sourceButtonText}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </a>
          </button>

          <button className="live-link-button">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              <RandomReveal
                isPlaying
                duration={1}
                characters={liveButtonText}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}