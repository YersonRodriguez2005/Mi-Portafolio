import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Mi Portafolio</h1>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-4">
              <a href="#home" className="hover:text-blue-200 transition duration-300 font-medium">Inicio</a>
              <a href="#about" className="hover:text-blue-200 transition duration-300 font-medium">Sobre mí</a>
              <a href="#projects" className="hover:text-blue-200 transition duration-300 font-medium">Proyectos</a>
              <a href="#footer" className="hover:text-blue-200 transition duration-300 font-medium">Contacto</a>
            </nav>
            <ThemeSwitcher />
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-blue-200 transition duration-300 font-medium">Inicio</a>
            <a href="#about" className="hover:text-blue-200 transition duration-300 font-medium">Sobre mí</a>
            <a href="#projects" className="hover:text-blue-200 transition duration-300 font-medium">Proyectos</a>
            <a href="#contact" className="hover:text-blue-200 transition duration-300 font-medium">Contacto</a>
          </nav>
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;