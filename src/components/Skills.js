import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Datos de las habilidades con logos
const skills = {
  Lenguajes: [
    { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' }
  ],
  Frameworks: [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' }
  ],
  Bases_de_Datos: [
    { name: 'MySQL/MariaDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg' }
  ],
  Herramientas: [
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Visual Studio Code', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' }
  ]
};

// Componente individual para cada categoría de habilidades
const SkillCard = ({ category, items, isDark }) => (
  <motion.div
    className={`${isDark ? 'bg-gray-800' : 'bg-white'} 
                shadow-lg rounded-lg p-6 
                border-4 border-transparent 
                border-image 
                animate-border-pulse
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
  >
    <h3 className={`text-xl font-semibold mb-4 capitalize ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{category}</h3>
    <ul className="flex flex-wrap gap-4 justify-center">
      {items.map((item, index) => (
        <motion.li 
          key={index}
          className="flex flex-col items-center gap-2"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={item.logo} alt={item.name} style={{ width: '48px', height: '48px' }} />
          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.name}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

// Componente principal de habilidades
const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
