import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { FaLightbulb } from 'react-icons/fa';

const themeType = {
  dark: 'dark',
  light: 'light',
};

const Darkmode = () => {
  // using a useState hook to toggle between modes
  // local storage preserves the users' choice
  const [mode, setMode] = useState(() => {
    // this is because of the app is a gatsbyJS project
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('theme');
      return val ? JSON.parse(val) : themeType.light;
    }
    return themeType.light;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(mode));
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light);
  };

  return (
    <>
      <Helmet>
        <body className={mode} />
      </Helmet>

      <div
        className='theme-mode'
        onClick={toggleMode}
        role='button'
        tabIndex='0'
        onKeyDown={toggleMode}
      >
        {mode === themeType.light ? (
          <FaLightbulb
            style={{ color: 'gold' }}
            className='darkmode-toggler-icon'
          />
        ) : (
          <FaLightbulb
            style={{ color: 'grey' }}
            className='darkmode-toggler-icon'
          />
        )}
      </div>
    </>
  );
};

export default Darkmode;
