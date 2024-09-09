import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Introduction.css';

const Introduction = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-16 px-4 md:px-8 ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
            <div className="container mx-auto max-w-4xl">
                {/* Animación con relleno de colores para el nombre */}
                <motion.h1
                    className="text-5xl md:text-6xl font-bold text-center mb-4 gradient-text"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Soy Yerson Fabian
                </motion.h1>

                {/* Título del cargo actual con animación */}
                <motion.h2
                    className={`text-4xl md:text-5xl font-extrabold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Desarrollador de Software Web en Formación
                </motion.h2>

                {/* Información adicional */}
                <motion.div
                    className={`shadow-lg rounded-lg p-6 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex items-center mb-4">
                        <GraduationCap className="text-blue-500 mr-3" size={24} />
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Estudiante de Análisis y Desarrollo de Software en el SENA
                        </p>
                    </div>
                    <div className="flex items-center mb-4">
                        <Code className="text-green-500 mr-3" size={24} />
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Conocimientos intermedios en frontend y manejo básico de backend
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Users className="text-purple-500 mr-3" size={24} />
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Experiencia en proyectos académicos simulando entornos laborales
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
