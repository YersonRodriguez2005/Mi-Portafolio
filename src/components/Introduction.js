import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../static/Introduction.css';

const Introduction = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`introduction-section ${isDark ? 'dark-theme' : 'light-theme'} py-16 px-4 md:px-8`}>
            <div className="container mx-auto max-w-4xl">
                {/* Animación con gradiente para el nombre */}
                <motion.h1
                    className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    ¡Hola! Soy Yerson Rodriguez
                </motion.h1>

                {/* Título del cargo actual */}
                <motion.h2
                    className={`text-4xl md:text-5xl font-extrabold mb-8 text-center transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-800'}`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                >
                    Desarrollador de Software Web
                </motion.h2>

                {/* Información adicional */}
                <motion.div
                    className={`info-box shadow-lg rounded-lg p-8 mb-8 transform transition-all duration-500 hover:scale-105 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                >
                    <div className="flex items-center mb-4">
                        <GraduationCap className="icon-style text-blue-500 mr-3" size={28} />
                        <p className={`text-lg transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Aprendiz de la Tecnología en Análisis y Desarrollo de Software en el SENA.
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <Code className="icon-style text-green-500 mr-3" size={28} />
                        <p className={`text-lg transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Conocimientos en frontend y backend.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Users className="icon-style text-purple-500 mr-3" size={28} />
                        <p className={`text-lg transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Experiencia en proyectos académicos simulando entornos laborales.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
