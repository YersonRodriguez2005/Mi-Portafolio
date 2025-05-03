import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Code, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 min-h-screen bg-[#121212]">
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

      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-white animate-gradient">
              Sobre Mí
            </span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="relative h-full p-[2px] rounded-xl overflow-hidden">
                {/* Borde animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-500 to-white animate-gradient"></div>

                {/* Contenido de la tarjeta */}
                <div className="h-full rounded-xl overflow-hidden bg-[#121212] relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <Code className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Web</h3>
                      <p className="text-white/90 leading-relaxed">
                        Especializado en desarrollo frontend con React o Vue y backend con Node/Express o PHP, creando aplicaciones web eficientes y con excelente experiencia de usuario.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="relative h-full p-[2px] rounded-xl overflow-hidden">
                {/* Borde animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-500 to-white animate-gradient"></div>

                {/* Contenido de la tarjeta */}
                <div className="h-full rounded-xl overflow-hidden bg-[#121212] relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Formación Académica</h3>
                      <p className="text-white/90 leading-relaxed">
                        Tecnología en Análisis y Desarrollo de Software en el SENA, con enfoque en desarrollo web y aplicaciones interactivas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="relative h-full p-[2px] rounded-xl overflow-hidden">
                {/* Borde animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-500 to-white animate-gradient"></div>

                {/* Contenido de la tarjeta */}
                <div className="h-full rounded-xl overflow-hidden bg-[#121212] relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Trabajo en Equipo</h3>
                      <p className="text-white/90 leading-relaxed">
                        Experiencia colaborando en entornos de equipo para desarrollar soluciones web eficientes, con comunicación efectiva y distribución organizada de tareas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="relative h-full p-[2px] rounded-xl overflow-hidden">
                {/* Borde animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-500 to-white animate-gradient"></div>

                {/* Contenido de la tarjeta */}
                <div className="h-full rounded-xl overflow-hidden bg-[#121212] relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Enfoque y Objetivos</h3>
                      <p className="text-white/90 leading-relaxed">
                        Orientado a la optimización de procesos y mejora continua en el desarrollo de productos, con atención al detalle y enfoque en la calidad final.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="/cv.pdf"
            download
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[#121212] font-medium rounded-xl shadow-lg"
          >
            <FileDown className="w-5 h-5" />
            <span className="text-lg font-medium">Descargar CV</span>
          </motion.a>
        </div>
      </div>
      <div className="w-30 h-0.5 bg-white mx-auto rounded-full mt-20"></div>
    </section>
  );
};

export default About;