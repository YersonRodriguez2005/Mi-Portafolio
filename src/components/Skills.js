import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiPostgresql, SiVisualstudiocode, SiPostman, SiChatbot, SiTailwindcss, SiMui, SiExpress, SiVite } from 'react-icons/si';

const skills = {
  "Lenguajes": [
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
    { name: 'Python', Icon: FaPython, color: '#3776AB' },
  ],
  "Frameworks": [
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
    { name: 'Express', Icon: SiExpress, color: '#f5f5f5' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Material UI', Icon: SiMui, color: '#0081CB' },
  ],
  "Bases de Datos": [
    { name: 'MySQL', Icon: FaDatabase, color: '#4479A1' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  ],
  "Herramientas": [
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', Icon: FaGithub, color: '#cccccc' },
    { name: 'VS Code', Icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'ChatGPT', Icon: SiChatbot, color: '#00A67E' },
    { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
    { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  ],
};

const SkillIcon = ({ Icon, name, color }) => (
  <motion.div
    className="group relative flex flex-col items-center justify-center p-4"
    whileHover={{ scale: 1.2 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Icon className="w-10 h-10 transition-all duration-300" style={{ color }} />
    <span className="mt-1 text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </motion.div>
);

const SkillCard = ({ category, items }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full p-[2px] rounded-xl overflow-hidden">
        {/* Borde animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-500 to-white"></div>

        {/* Contenido de la tarjeta */}
        <div className="h-full rounded-xl overflow-hidden bg-[#121212] relative z-10">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white animate-gradient">
              {category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {items.map((item, index) => (
                <SkillIcon key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 min-h-screen bg-[#121212]">
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
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white animate-gradient">
              Skills
            </span>
          </h2>

          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
      <div className="w-30 h-0.5 bg-white mx-auto rounded-full mt-20"></div>
    </section>
  );
};

export default Skills;