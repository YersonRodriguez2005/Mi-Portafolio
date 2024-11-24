import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Users, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/YersonRodriguez2005", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yerson-rodriguez/", label: "LinkedIn" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezyerson2005@gmail.com", label: "Email" }
];

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-4 md:px-6 text-white overflow-hidden">
      {/* Fondo con gradiente similar al header */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Efectos de luz */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-800/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="relative container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header content */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white animate-gradient-background">
              ¡Hola! Soy Yerson Rodriguez
            </span>
          </h1>
          
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300">
              Desarrollador de Software Web
              <span className="absolute -right-4 top-0 w-2 h-8 bg-purple-400 animate-pulse"></span>
            </h2>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 pt-4"
            variants={itemVariants}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group relative p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {[
            {
              icon: GraduationCap,
              title: "Formación Académica",
              description: "Aprendiz de la Tecnología en Análisis y Desarrollo de Software en el SENA."
            },
            {
              icon: Code,
              title: "Competencias Técnicas",
              description: "Conocimientos en frontend y backend."
            },
            {
              icon: Users,
              title: "Experiencia Práctica",
              description: "Experiencia en proyectos académicos simulando entornos laborales."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-purple-950 to-purple-500 animate-gradient-diagonal bg-[length:200%_200%]"
            >
              <div className="h-full rounded-xl p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/50 backdrop-blur-sm">
                <item.icon className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-light to-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;