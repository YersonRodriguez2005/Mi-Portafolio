import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000",  // Fondo oscuro
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff",  // Color de las partículas (estrellas)
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,  // Velocidad del movimiento
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,  // Cantidad de partículas
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",  // Forma de las partículas
          },
          size: {
            random: true,
            value: 3,  // Tamaño de las partículas
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
