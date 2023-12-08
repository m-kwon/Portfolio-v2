import { createContext, useState } from 'react';
import { LanguageType } from '../interfaces/customTypes';
import { FaGlobeAmericas } from 'react-icons/fa';

interface LanguageContextProviderProps {
  children: React.ReactElement;
}

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: {
    name: 'English',
    code: 'EN',
    icon: <FaGlobeAmericas size="2rem" />,
  },
  setLanguage: () => {},
});

export function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<LanguageType>({
    name: 'English',
    code: 'EN',
    icon: <FaGlobeAmericas size="2rem" />,
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;