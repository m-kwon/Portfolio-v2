import React, { FC, useContext, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import VisibleSectionEffect from '../../VisibleSectionEffect/VisibleSectionEffect';
import { FaAngleUp, FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa';
import './Project.css';
import ProjectList from '../ProjectList';
import LanguageContext from '../../../contexts/LanguageContext';
import * as projectText from './getProjectText';
import { revealCharacters, ignoreCharacters } from '../../../utils/utils';
import Preview from './Preview/Preview';
import Description from './Description/Description';
import Technologies from './Technologies/Technologies';
import Year from './Year/Year';

interface Props {
  project: {
    id: number;
    title: string;
    previewImageURL: string;
    previewVideoURL: string;
    description_EN: string;
    githubLink: string;
    liveLink: string;
    technologies: string;
    year: number;
  };
  scrollToProject: (projectId: number) => void;
}

const Project: FC<Props> = ({
  project: {
    id,
    title,
    previewImageURL,
    previewVideoURL,
    description_EN,
    githubLink,
    liveLink,
    technologies,
    year,
  },
  scrollToProject,
}) => {
  // Component Logic
  const { language } = useContext(LanguageContext);
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  // UI Elements
  const portfolioHeaderText: string =
    projectText.getPortfolioHeaderText(language);
  const projectListLength = ProjectList.length;

  // Project Text
  const projectTitle: string = title;

  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
      <div className="project-container">
        {id === 1 && currentlyVisible && (
          <h2 className="portfolio-header">
            <RandomReveal
              isPlaying
              duration={1}
              characters={portfolioHeaderText}
              characterSet={revealCharacters}
              ignoreCharacterSet={ignoreCharacters}
            />
          </h2>
        )}
        {id > 1 && (
          <button
            className="prev-project-button"
            onClick={() => {
              scrollToProject(id - 1);
            }}
          >
            <FaAngleUp size="2.5rem" />
          </button>
        )}
        <div className="project-card">
          <h4 className="project-title">
            {currentlyVisible && (
              <RandomReveal
                isPlaying
                duration={1}
                characters={projectTitle}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            )}
          </h4>
          <div className="preview-container">
            {currentlyVisible && (
              <Preview
                previewImageURL={previewImageURL}
                previewVideoURL={previewVideoURL}
                githubLink={githubLink}
                liveLink={liveLink}
              />
            )}
          </div>
          <div className="text-container">
            {currentlyVisible && (
              <>
                <Description
                  description_EN={description_EN}
                />
                <Technologies technologies={technologies} />
                <Year year={year} />
              </>
            )}
          </div>
        </div>
        {id < projectListLength && (
          <button
            className="next-project-button"
            onClick={() => {
              scrollToProject(id + 1);
            }}
          >
            <FaAngleDown size="2.5rem" />
          </button>
        )}
        {id === projectListLength && (
          <a
            className="repo-link"
            href="https://github.com/m-kwon?tab=repositories"
          >
            View More <FaExternalLinkAlt size="1rem" />
          </a>
        )}
      </div>
    </VisibleSectionEffect>
  );
};

export default Project;