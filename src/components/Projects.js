import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaReact, FaPython, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaDatabase } from 'react-icons/fa';
import { SiFlask, SiVite, SiComposer } from 'react-icons/si';
import '../App.css'

// Mapeo de tecnologías a iconos con sus colores representativos
const techIcons = {
  'React': { icon: FaReact, color: '#61DAFB' },
  'Vite': { icon: SiVite, color: '#646CFF' },
  'Python': { icon: FaPython, color: '#3776AB' },
  'Flask': { icon: SiFlask, color: '#000000' },
  'HTML': { icon: FaHtml5, color: '#E34F26' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'PHP': { icon: FaPhp, color: '#777BB4' },
  'Laravel': { icon: FaLaravel, color: '#FF2D20' },
  'Composer': { icon: SiComposer, color: '#885630' },
  'MySQL': { icon: FaDatabase, color: '#00758F' }
};

// Datos de los proyectos
const projects = [
  {
    name: 'FYLEC',
    description: 'FYLEC es un software web diseñado para la compra y venta de productos de ferreterías en línea, optimizando la experiencia del usuario y la gestión eficiente de productos.',
    technologies: ['React', 'Vite', 'Python', 'Flask'],
    live: 'https://github.com/LuisCabrera03/FYLEC.git'
  },
  {
    name: 'CRUD Laravel',
    description: 'El CRUD en Laravel gestiona Crear, Leer, Actualizar, Eliminar y filtrar registros usando Eloquent ORM, controladores, migraciones, validaciones y relaciones entre modelos.',
    technologies: ['PHP', 'Composer', 'Laravel'],
    live: 'https://github.com/YersonRodriguez2005/crud-laravel.git'
  },
  {
    name: 'System-POS',
    description: 'Sistema de Punto de Venta (POS) diseñado para un restaurante de comidas rápidas, que permite gestionar el inventario y registrar las ventas de manera eficiente.',
    technologies: ['React', 'Flask', 'MySQL', 'CSS'],
    live: 'https://github.com/YersonRodriguez2005/system-pos.git'
  },
  {
    name: 'Note-App',
    description: 'Note app web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías (Personal, Trabajo, Estudio, Ideas, Proyecto).',
    technologies: ['React', 'Python', 'Flask', 'MySQL'],
    live: 'https://github.com/YersonRodriguez2005/note-app.git'
  },
  {
    name: 'Task-Manager-App',
    description: 'Task Manager es una aplicación web diseñada para facilitar la gestión eficiente de tareas de manera colaborativa. Los usuarios pueden agregar, actualizar, priorizar y eliminar tareas fácilmente.',
    technologies: ['React', 'Python', 'Flask', 'MySQL'],
    live: 'https://github.com/YersonRodriguez2005/task-manager-app.git'
  },
  {
    name: 'User-Login-JWT',
    description: 'Web de inicio de sesión y registro de usuarios utilizando JSON Web Tokens (JWT) para la autenticación segura, manejo de sesiones persistentes y protección contra ataques de seguridad comunes.',
    technologies: ['React', 'Python', 'Flask', 'MySQL'],
    live: 'https://github.com/YersonRodriguez2005/user-login.git'
  },
  {
    name: 'Restaurant-Interactive-Menu',
    description: 'Es un proyecto que presenta el menú de un restaurante de forma interactiva, organizado por categorías como entradas, platos principales, postres y bebidas.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://github.com/YersonRodriguez2005/restaurant-interactive-menu.git'
  }
  // Puedes agregar más proyectos según sea necesario
];


const TechIcon = ({ tech }) => {
  const { icon: IconComponent, color } = techIcons[tech] || {};
  return IconComponent ? (
    <IconComponent
      className="text-3xl"
      style={{ color: color }}
      title={tech}
    />
  ) : null;
};

const ProjectCard = ({ project, isDark }) => (
  <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-purple-950 to-purple-500 animate-gradient-border bg-[length:200%_200%]">
    <div
      className={`rounded-lg overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
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
            <TechIcon key={i} tech={tech} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${isDark ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-800'} transition-colors duration-300`}
          >
            <FaExternalLinkAlt className="mr-2" />
            Ver Repositorio
          </a>
        </div>
      </div>
    </div>
  </div>
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
