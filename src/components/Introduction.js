import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Introduction = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section
            className="py-16 px-6 md:px-12 text-white bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]"
        >
            <div className="container mx-auto max-w-4xl">
                {/* Título con animación */}
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-500"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    ¡Hola! Soy Yerson Rodriguez
                </motion.h1>

                {/* Subtítulo */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
                >
                    Desarrollador de Software Web
                </motion.h2>

                {/* Caja informativa */}
                <motion.div
                    className={`rounded-xl shadow-2xl p-8 transition-transform duration-300 hover:scale-105 ${isDark ? 'bg-gray-800' : 'bg-white'
                        }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                >
                    <div className="space-y-6">
                        {/* Elemento 1 */}
                        <div className="flex items-center">
                            <GraduationCap
                                className="text-red-400 mr-4 hover:scale-110 transition-transform duration-300"
                                size={32}
                            />
                            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                                Aprendiz de la Tecnología en Análisis y Desarrollo de Software en el SENA.
                            </p>
                        </div>

                        {/* Elemento 2 */}
                        <div className="flex items-center">
                            <Code
                                className="text-green-400 mr-4 hover:scale-110 transition-transform duration-300"
                                size={32}
                            />
                            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                                Conocimientos en frontend y backend.
                            </p>
                        </div>

                        {/* Elemento 3 */}
                        <div className="flex items-center">
                            <Users
                                className="text-purple-400 mr-4 hover:scale-110 transition-transform duration-300"
                                size={32}
                            />
                            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                                Experiencia en proyectos académicos simulando entornos laborales.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
