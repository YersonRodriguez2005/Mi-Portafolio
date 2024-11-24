import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-16">
      {/* Background with gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_100%,#000_70%,transparent_110%)]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute -top-48 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        {/* Contact Title with animation */}
        <h2 className="text-center mb-8">
          <span className="relative text-2xl md:text-3xl font-bold group inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white animate-gradient-background bg-[length:200%_auto]">
              ¡Contáctame!
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </h2>

        {/* Social Icons Container */}
        <div className="flex justify-center space-x-8 mb-12">
          {/* Email Icon */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezyerson2005@gmail.com"
            className="group relative"
            aria-label="Email"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:scale-150 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/25">
              <FaEnvelope className="w-6 h-6 text-white/90 group-hover:text-purple-400 transition-colors duration-300" />
            </div>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/YersonRodriguez2005"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:scale-150 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/25">
              <FaGithub className="w-6 h-6 text-white/90 group-hover:text-purple-400 transition-colors duration-300" />
            </div>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/yerson-rodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:scale-150 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/25">
              <FaLinkedin className="w-6 h-6 text-white/90 group-hover:text-purple-400 transition-colors duration-300" />
            </div>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/573216393715"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="WhatsApp"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:scale-150 opacity-0 group-hover:opacity-100"></div>
            <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/25">
              <FaWhatsapp className="w-6 h-6 text-white/90 group-hover:text-purple-400 transition-colors duration-300" />
            </div>
          </a>
        </div>

        {/* Copyright Text with gradient */}
        <div className="text-center">
          <p className="text-sm text-white/60 bg-gradient-to-br from-gray-900/95 via-gray-900/95 to-purple-900/95 backdrop-blur-sm py-2 px-4 rounded-full inline-block border border-purple-500/10">
            © 2024 Yerson Rodríguez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;