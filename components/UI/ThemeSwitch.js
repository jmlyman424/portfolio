'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSpinner, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse" />;

  return (
    <FontAwesomeIcon
      icon={resolvedTheme === 'dark' ? faSun : faMoon}
      onClick={() => {
        resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark');
      }}
      className="inline text-xl transition-transform duration-300 cursor-pointer fa-fw hover:text-accent-1"
    />
  );
};

export default ThemeSwitch;
