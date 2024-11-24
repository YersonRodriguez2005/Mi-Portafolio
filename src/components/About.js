import React from 'react';
import { FileDown, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente y efectos mejorados */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-gradient-diagonal bg-[length:200%_200%]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-60"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-purple-800/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0 rotate-180 transform-gpu"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 relative inline-block group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white animate-gradient-background bg-[length:200%_auto]">
            Sobre Mí
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-500"></span>
        </h2>

        <div className="grid gap-8 mb-12">
          <div className="group bg-gradient-to-br from-gray-900/95 via-gray-900/95 to-purple-900/95 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 rounded-xl p-8 shadow-lg backdrop-blur-sm hover:shadow-purple-500/10 hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <Rocket className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Innovador</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  Me enfoco en el desarrollo de soluciones tecnológicas colaborativas que impacten positivamente, buscando siempre la innovación y la excelencia en cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/cv.pdf"
            download
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            <FileDown className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-medium text-white">Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
