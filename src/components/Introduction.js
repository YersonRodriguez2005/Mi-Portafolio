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
    <section id='inicio' className="relative min-h-screen pt-24 pb-16 px-4 md:px-6 text-white overflow-hidden bg-[#121212]">
      {/* Estilos para las animaciones de gradiente */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 400% 100%;
          animation: gradientMove 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          background-image: linear-gradient(90deg, white, #999999, white, #999999, white);
        }
        .animate-border {
          border-image-source: linear-gradient(to right, white, #B0B0B0, white);
          border-image-slice: 1;
          background-size: 400% 100%;
          animation: gradientMove 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }
      `}</style>

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
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white animate-gradient">
              ¡Hola! Soy Yerson Rodriguez
            </span>
          </h1>

          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Desarrollador de Software Web
              <span className="absolute -right-4 top-0 w-2 h-8 bg-white animate-pulse"></span>
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
                <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap bg-gray-900 px-2 py-1 rounded">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16 mt-40"
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
              className="relative p-[2px] rounded-xl overflow-hidden"
            >
              {/* Borde con animación */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white animate-gradient rounded-xl"></div>

              {/* Contenido de la tarjeta */}
              <div className="relative h-full rounded-xl p-6 bg-[#121212] z-10">
                <item.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="w-30 h-0.5 bg-white mx-auto rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Introduction;