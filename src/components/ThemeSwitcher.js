import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Asegúrate de la ruta correcta

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition-colors"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;
