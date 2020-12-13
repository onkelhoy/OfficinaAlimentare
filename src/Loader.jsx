import React from 'react';

import i18n from 'translation/i18n';
import Context from 'context';

export default ({ children }) => {
  const timer = React.useRef();
  const [loading, setLoading] = React.useState("loading");
  const [language, _setLanguage] = React.useState('it');

  React.useEffect(() => {
    setLoading("loading");
    timer.current = setTimeout(() => {
      setLoading("");
    }, 520);
    return () => {
      clearTimeout(timer.current);
    }
  }, [language]);

  const provides = {
    language,
    setLanguage,
  };

  function setLanguage (language) {
    i18n.changeLanguage(language);
    _setLanguage(language);
  }

  console.log('loading', loading);

  return (
    <Context.Provider value={provides}>
      <div className={`loader ${loading}`}>{children}</div>
    </Context.Provider>
  );
}