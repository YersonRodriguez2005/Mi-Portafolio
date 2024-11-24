import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import { Loader2 } from 'lucide-react';
import './App.css';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));

const App = () => (
  <React.StrictMode>
    <div className="relative">
      <div className="min-h-screen dark-theme">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Introduction />
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            }
          >
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
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

export default App;
