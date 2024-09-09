import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-gray-100'} border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>

        {/* Información de contacto */}
        <div className="flex justify-center gap-8 mb-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaEnvelope className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            <a
              href="mailto:rodriguezyerson2005@gmail.com"
              className={`text-lg ${isDark ? 'text-gray-300 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            >
              rodriguezyerson2005@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhoneAlt className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            <a
              href="tel:+57 3216393715"
              className={`text-lg ${isDark ? 'text-gray-300 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            >
              +57 321 639 3715
            </a>
          </motion.div>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-8">
          <motion.a
            href="https://www.linkedin.com/in/yerson-rodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://github.com/YersonRodriguez2005"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${isDark ? 'text-gray-300 hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
