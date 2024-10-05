import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import '../static/Header.css';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-red-900 text-white py-4 shadow-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Título del portafolio */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Mi Portafolio
          </h1>

          {/* Navegación para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="space-x-6 flex items-center">
              <a
                href="#home"
                className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
              >
                <FaHome /> <span>Inicio</span>
              </a>
              <a
                href="#about"
                className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
              >
                <FaUser /> <span>Sobre mí</span>
              </a>
              <a
                href="#projects"
                className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
              >
                <FaFolderOpen /> <span>Proyectos</span>
              </a>
              <a
                href="#footer"
                className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
              >
                <FaEnvelope /> <span>Contacto</span>
              </a>
            </nav>
          </div>

          {/* Botón del menú hamburguesa para pantallas móviles */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <nav className="flex flex-col space-y-4 bg-black bg-opacity-90 rounded-lg p-4">
            <a
              href="#home"
              className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
            >
              <FaHome /> <span>Inicio</span>
            </a>
            <a
              href="#about"
              className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
            >
              <FaUser /> <span>Sobre mí</span>
            </a>
            <a
              href="#projects"
              className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
            >
              <FaFolderOpen /> <span>Proyectos</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 hover:text-red-400 transition duration-300 font-medium"
            >
              <FaEnvelope /> <span>Contacto</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
