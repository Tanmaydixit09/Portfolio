import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ring-offset-2 ring-offset-transparent
                 dark:bg-zinc-900/60 dark:border-zinc-700 dark:text-zinc-300 
                 light:bg-zinc-100/60 light:border-zinc-300 light:text-zinc-700
                 hover:dark:bg-zinc-800 hover:light:bg-zinc-200"
    >
      {theme === 'dark' ? (
        <FiSun size={18} className="dark:text-amber-400 light:text-amber-600" />
      ) : (
        <FiMoon size={18} className="dark:text-zinc-400 light:text-zinc-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
