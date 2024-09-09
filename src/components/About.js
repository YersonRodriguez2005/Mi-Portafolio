import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <motion.h2
          className={`text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>

        {/* Descripción de la sección */}
        <motion.p
          className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Me enfoco en el desarrollo de soluciones tecnológicas colaborativas que impacten positivamente.
          Tengo experiencia en equipos, aplicando prácticas de desarrollo estructurado y organizado.
          Siempre busco mejorar los procesos y optimizar la calidad de los proyectos.
        </motion.p>

        {/* Enlace para descargar CV */}
        {/* Contenedor centrado */}
        <div className="flex justify-center py-4">
          <motion.a
            href="/CV.pdf" // Asegúrate de que el archivo está en la carpeta public
            className={`text-center inline-block text-lg font-medium px-6 py-3 rounded-md transition-all duration-300 
                ${isDark ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-500'} shadow-md`}
            download
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileTap={{ scale: 0.95 }} // Animación al hacer clic
          >
            Descargar CV
          </motion.a>
        </div>

      </div>
    </section >
  );
};

export default About;
