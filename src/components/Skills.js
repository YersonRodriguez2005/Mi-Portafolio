import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaPython, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiDjango, SiMysql, SiGithub } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

// Datos de las habilidades con iconos y colores
const skills = {
  Lenguajes: [
    { name: 'HTML5', icon: <FaHtml5 size={32} />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt size={32} />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJsSquare size={32} />, color: '#F7DF1E' },
    { name: 'PHP', icon: <FaPhp size={32} />, color: '#787CB5' },
    { name: 'Python', icon: <FaPython size={32} />, color: '#306998' }
  ],
  Frameworks: [
    { name: 'React', icon: <FaReact size={32} />, color: '#61DAFB' },
    { name: 'Django', icon: <SiDjango size={32} />, color: '#092E20' }
  ],
  Bases_de_Datos: [
    { name: 'MySQL/MariaDB', icon: <SiMysql size={32} />, color: '#4479A1' }
  ],
  Herramientas: [
    { name: 'Git', icon: <FaGit size={32} />, color: '#F1502F' },
    { name: 'GitHub', icon: <SiGithub size={32} />, color: '#181717' }
  ]
};

// Componente individual para cada categoría de habilidades
const SkillCard = ({ category, items, isDark }) => (
  <motion.div
    className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
  >
    <h3 className={`text-xl font-semibold mb-4 capitalize ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{category}</h3>
    <ul className="flex flex-wrap gap-4">
      {items.map((item, index) => (
        <motion.li 
          key={index}
          className="flex flex-col items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="p-3 rounded-full" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
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
