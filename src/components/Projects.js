import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiFlask, SiVite, SiComposer } from 'react-icons/si';

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
    description: 'Note app web diseñada para facilitar la gestión de notas personales. Los usuarios pueden agregar, actualizar y eliminar notas, así como clasificarlas en diferentes categorías.',
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
];

const TechIcon = ({ tech }) => {
  const { icon: IconComponent, color } = techIcons[tech] || {};
  return IconComponent ? (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="group relative"
    >
      <IconComponent
        className="text-3xl transition-all duration-300 group-hover:shadow-lg"
        style={{ color }}
        title={tech}
      />
      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white bg-gray-900 px-2 py-1 rounded whitespace-nowrap">
        {tech}
      </span>
    </motion.div>
  ) : null;
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5 }}
    className="h-full"
  >
    <div className="relative h-full p-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-purple-950 to-purple-500 animate-gradient-diagonal bg-[length:200%_200%] group">
      <div className="h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/50 backdrop-blur-sm shadow-xl">
        <div className="p-6 h-full flex flex-col">
          <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white animate-gradient-background">
            {project.name}
          </h3>
          <p className="mb-6 text-gray-300 flex-grow">
            {project.description}
          </p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6 mb-4">
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} tech={tech} />
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300 group"
              >
                <FaGithub className="w-5 h-5" />
                <span>Ver Repositorio</span>
                <FaExternalLinkAlt className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 min-h-screen relative">
    {/* Fondo con gradiente y efectos */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white animate-gradient-background mb-4">
          Mis Proyectos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;