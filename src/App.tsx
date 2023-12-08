import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
// import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Loading from './components/Loading/Loading';
import Navigation from './components/Navigation/Navigation';
import Popup from './components/Popup/Popup';

const App: FC = () => {
  const [activePanel, setActivePanel] = useState<string>('initial');
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }, [showPopup]);

  return (
    <div className={`App app-bg ${activePanel}`}>
      <Navigation
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        setShowPopup={setShowPopup}
        setPopupMessage={setPopupMessage}
      />
      {activePanel === 'initial' && !showLoading && <Footer />}
      {activePanel === 'initial' && !showLoading}
      {showLoading && <Loading />}
      {showPopup && <Popup popupMessage={popupMessage} />}
    </div>
  );
};

export default App;