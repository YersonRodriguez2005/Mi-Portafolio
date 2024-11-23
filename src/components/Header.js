import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%] text-white py-4 shadow-lg animate-gradient-x bg-[length:200%_200%]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Título del portafolio */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight hover:scale-105 transition-transform">
            Mi Portafolio
          </h1>

          {/* Navegación para pantallas grandes */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {["Inicio", "Sobre mí", "Proyectos"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="relative text-lg font-medium group"
                >
                  <span className="group-hover:text-red-400 transition duration-300">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Botón del menú hamburguesa */}
          <button
            className="md:hidden text-white hover:text-red-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} className="transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 bg-opacity-95 rounded-lg shadow-lg p-6 space-y-4">
          {["Inicio", "Sobre mí", "Proyectos"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="flex items-center space-x-2 text-lg text-white hover:text-red-400 transition duration-300"
            >
              {item === "Inicio" && <FaHome />}
              {item === "Sobre mí" && <FaUser />}
              {item === "Proyectos" && <FaFolderOpen />}
              <span>{item}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
