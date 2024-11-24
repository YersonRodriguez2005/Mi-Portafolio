import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiVuedotjs, SiPostgresql, SiVisualstudiocode, SiPostman, SiChatbot } from 'react-icons/si';

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
    { name: 'Django', Icon: SiDjango, color: '#092E20' },
    { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  ],
  "Bases de Datos": [
    { name: 'MySQL', Icon: FaDatabase, color: '#4479A1' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  ],
  "Herramientas": [
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', Icon: FaGithub, color: '#181717' },
    { name: 'VS Code', Icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'ChatGPT', Icon: SiChatbot, color: '#00A67E' },
    { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  ],
};

const SkillIcon = ({ Icon, name, color }) => (
  <motion.div
    className="group relative flex flex-col items-center justify-center p-4"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-purple-950 to-purple-500 group-hover:animate-gradient-diagonal bg-[length:200%_200%]">
      <div className="p-4 rounded-xl bg-gray-900 backdrop-blur-sm group-hover:bg-gray-900/80 transition-all duration-300">
        <Icon className="w-8 h-8 transition-all duration-300" style={{ color }} />
      </div>
    </div>
    <span className="mt-2 text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </motion.div>
);

const SkillCard = ({ category, items }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative p-[2px] rounded-2xl bg-gradient-to-br from-purple-500 via-purple-950 to-purple-500 animate-gradient-diagonal bg-[length:200%_200%]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="h-full rounded-2xl p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/50 backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white">
          {category.replace('_', ' ')}
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {items.map((item, index) => (
            <SkillIcon key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-24 min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente y efectos mejorados */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-60"></div>
        
        {/* Orbes de luz mejorados */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-purple-800/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0 rotate-180 transform-gpu"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white animate-gradient-background mb-4">
            Mis Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-900 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;