import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manejar el efecto del scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", icon: FaHome },
    { name: "Sobre mí", icon: FaUser },
    { name: "Proyectos", icon: FaFolderOpen }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled
        ? 'bg-[#121212] shadow-lg py-2'
        : 'bg-[#121212] backdrop-blur-sm py-4'
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Título con animación simple de izquierda a derecha */}
          <h1 className="relative text-2xl md:text-3xl font-extrabold tracking-tight group">
            <style jsx>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% 100%;
            animation: gradientMove 2s linear infinite;
          }
        `}</style>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white animate-gradient">
              Mi Portafolio
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-600 group-hover:w-full transition-all duration-200"></span>
          </h1>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase().replace(" ", "")}`}
                className="relative group flex items-center space-x-2 px-3 py-2"
              >
                <item.icon className="w-4 h-4 text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white to-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Botón de menú para móvil */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="text-white transition-all duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Menu size={24} className="text-white transition-all duration-300 hover:scale-110" />
              )}
            </div>
            <span className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/60 transition-colors duration-300"></span>
          </button>
        </div>

        {/* Menú móvil con animación mejorada */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-[#121212] backdrop-blur-lg rounded-lg shadow-lg p-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase().replace(" ", "")}`}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-lg text-white group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
