import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/YersonRodriguez2005' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/3216393715' }
  ];
  

  const pulseAnimation = {
    animate: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <footer className="py-16 bg-[#121212]">
      {/* Estilos CSS para animación de gradiente */}
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
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white animate-gradient">
              Contáctame
            </span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex justify-center items-center space-x-6 md:space-x-10">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={pulseAnimation}
              whileHover="animate"
              className="transform transition-all duration-300 hover:text-white"
            >
              <social.icon className="text-3xl md:text-4xl text-white hover:text-opacity-80" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Yerson Rodriguez. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Desarrollado con React y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;