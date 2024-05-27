// localization.js
import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('selectedLanguage') || i18n.language);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage); // Store selected language in local storage
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <LocalizationContext.Provider value={{ t, changeLanguage, currentLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
