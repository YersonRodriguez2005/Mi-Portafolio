import React, { lazy, Suspense } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import { Loader2 } from 'lucide-react';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'}`}>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        }>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="about">
            <About />
          </section>
        </Suspense>
      </main>
    <Footer></Footer>
    </div >
  );
};

const App = () => (
  <ThemeProvider>
    <React.StrictMode>
      <AppContent />
    </React.StrictMode>
  </ThemeProvider>
);

export default App;