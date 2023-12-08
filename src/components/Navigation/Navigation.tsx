import React, { FC, useContext, useEffect } from 'react';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import './Navigation.css';
import LanguageContext from '../../contexts/LanguageContext';
import * as panelText from './getPanelTexts';
import { fix100vhInChrome } from '../../utils/utils';

interface Panel {
  id: string;
  title: string;
  component: React.ReactElement;
}

interface Props {
  activePanel: string;
  setActivePanel: React.Dispatch<React.SetStateAction<string>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: FC<Props> = ({
  activePanel,
  setActivePanel,
  setShowPopup,
  setPopupMessage,
}) => {
  const { language } = useContext(LanguageContext);

  const panels: Panel[] = [
    {
      id: 'about',
      title: 'getAboutPanelText',
      component: <About active={activePanel === 'about' ? true : false} />,
    },
    {
      id: 'projects',
      title: 'getProjectsPanelText',
      component: (
        <Portfolio active={activePanel === 'projects' ? true : false} />
      ),
    },
    {
      id: 'skills',
      title: 'getSkillsPanelText',
      component: <Skills active={activePanel === 'skills' ? true : false} />,
    },
    {
      id: 'contact',
      title: 'getContactPanelText',
      component: (
        <Contact
          active={activePanel === 'contact' ? true : false}
          setShowPopup={setShowPopup}
          setPopupMessage={setPopupMessage}
        />
      ),
    },
  ];

  useEffect(() => {
    fix100vhInChrome();
  }, []);

  return (
    <div className="panels">
      {panels.map(({ id, title, component }) => {
        const panelTextFn = panelText[title as keyof typeof panelText];
        const panelTextValue = panelTextFn(language);

        return (
          <div
            key={id}
            className={`panel ${id} ${activePanel === id ? 'open' : 'closed'}`}
            onClick={() => {
              if (activePanel !== id) {
                setActivePanel(id);
              }
            }}
          >
            <h1 className={`panel-heading-${id}`}>
              <span>{panelTextValue}</span>
            </h1>
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;