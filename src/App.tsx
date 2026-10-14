import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  const [currentTab, setCurrentTab] = useState('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen flex flex-col font-['Montserrat',sans-serif] bg-white text-gray-800 antialiased selection:bg-[#03633C] selection:text-white">
      {/* Header */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentTab === 'inicio' && <Home setCurrentTab={setCurrentTab} />}
        {currentTab === 'nosotros' && <About setCurrentTab={setCurrentTab} />}
        {currentTab === 'servicios' && <Services setCurrentTab={setCurrentTab} />}
        {currentTab === 'proyectos' && <Projects setCurrentTab={setCurrentTab} />}
        {currentTab === 'contacto' && <Contact />}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
