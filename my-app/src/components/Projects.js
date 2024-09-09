import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaReact, FaPython, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlask, SiVite } from 'react-icons/si';

// Mapeo de tecnologías a iconos con sus colores representativos
const techIcons = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Python': { icon: FaPython, color: '#3776AB' },
  'Flask': { icon: SiFlask, color: '#000000' }
};

// Datos de los proyectos
const projects = [
  {
    name: 'FYLEC',
    description: 'FYLEC es un software web diseñado para la compra y venta de productos de ferreterías en línea, optimizando la experiencia del usuario y la gestión eficiente de productos.',
    technologies: ['React', 'Vite', 'Python', 'Flask'],
    live: 'https://fylec.com.co'
  },
  // Puedes agregar más proyectos según sea necesario
];

const TechIcon = ({ tech, isDark }) => {
  const { icon: IconComponent, color } = techIcons[tech] || {};
  return IconComponent ? (
    <IconComponent 
      className="text-2xl" 
      style={{ color: color }}
      title={tech}
    />
  ) : null;
};

const ProjectCard = ({ project, isDark }) => (
  <motion.div
    className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6">
      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {project.name}
      </h3>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        {project.technologies.map((tech, i) => (
          <TechIcon key={i} tech={tech} isDark={isDark} />
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center ${isDark ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'}`}
        >
          <FaExternalLinkAlt className="mr-2" />
          Ver en vivo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
