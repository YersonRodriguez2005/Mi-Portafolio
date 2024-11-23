import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">¡Conéctemos!</p>

        {/* Contenedor de iconos de contacto */}
        <div className="flex justify-center space-x-6">
          {/* Icono de Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezyerson2005@gmail.com"
            className="text-3xl transition-transform transform hover:scale-110 hover:text-purple-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* Icono de GitHub */}
          <a
            href="https://github.com/YersonRodriguez2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform transform hover:scale-110 hover:text-purple-500"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Icono de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yerson-rodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform transform hover:scale-110 hover:text-purple-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Icono de WhatsApp */}
          <a
            href="https://wa.me/573216393715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform transform hover:scale-110 hover:text-purple-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Información adicional del pie de página */}
        <p className="mt-8 text-sm text-gray-400">© 2024 Yerson Rodríguez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
