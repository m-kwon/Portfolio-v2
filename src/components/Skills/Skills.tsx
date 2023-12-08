import React, { FC, useContext, useEffect, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import LanguageContext from '../../contexts/LanguageContext';
import VisibleSectionEffect from '../VisibleSectionEffect/VisibleSectionEffect';
import * as skillsText from './getSkillsText';
import skillList from './SkillList';
import './Skills.css';
import {
  revealCharacters,
  ignoreCharacters,
  fix100vhInChrome,
} from '../../utils/utils';

interface Props {
  active: boolean;
}

const Skills: FC<Props> = ({ active }) => {
  const { language } = useContext(LanguageContext);
  const [currentlyVisible, setCurrentlyVisible] = useState<boolean>(false);

  const skills: {
    name: string;
    icon: any;
    color: string;
  }[] = skillList;

  const skillsHeaderText: string = skillsText.getSkillsHeaderText(language);

  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item-wrapper');

    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('skill-item-fadeIn');
      }, 200 * (index + 1));
    });
  }, [currentlyVisible]);

  useEffect(() => {
    fix100vhInChrome();
  }, []);

  return (
    <VisibleSectionEffect setCurrentlyVisible={setCurrentlyVisible}>
      <section className={` skills-container ${!active ? 'hide' : ''}`}>
        {currentlyVisible && (
          <>
            <h2 className="skills-header">
              <RandomReveal
                isPlaying
                duration={1}
                characters={skillsHeaderText}
                characterSet={revealCharacters}
                ignoreCharacterSet={ignoreCharacters}
              />
            </h2>
            <div className="skills-list">
              {skills.map((skill) => {
                return (
                  <div key={skill.name} className="skill-item-wrapper">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-name" style={{ color: skill.color }}>
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </VisibleSectionEffect>
  );
};

export default Skills;