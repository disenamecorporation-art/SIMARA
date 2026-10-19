import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../constants/images';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top utility bar for quick contacts */}
      <div className="bg-[#044027] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 hover:text-[#5CE08A] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#5CE08A]" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-2 hover:text-[#5CE08A] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#5CE08A]" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>
            <span className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#5CE08A]" />
              <span>Cobertura Nacional (Venezuela)</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#5CE08A] font-medium">Asociación Cooperativa de Servicios Petroleros y Construcción</span>
          </div>
        </div>
      </div>

      {/* Main sticky header with Ultra Glassmorphism */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-2xl border-b border-white/60 ${
          isScrolled ? 'shadow-xl shadow-black/5 py-3' : 'shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo large, no text next to it */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center focus:outline-none group transition-transform hover:scale-105"
          >
            <img
              src={IMAGES.logo}
              alt="SIMARA Asociación Cooperativa"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-md"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-semibold transition-colors uppercase tracking-wider ${
                    isActive ? 'text-[#03633C] font-bold' : 'text-gray-800 hover:text-[#03633C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#03633C] rounded-full animate-fade-in shadow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('contacto')}
              className="bg-[#03633C] hover:bg-[#025A37] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#03633C]/25 transition-all duration-200 hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>Solicita una cotización</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#044027] bg-white/50 backdrop-blur-md hover:bg-white/80 rounded-xl transition-colors focus:outline-none shadow-sm border border-white/80"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu with Ultra Glass */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/70 backdrop-blur-3xl border-b border-white/60 shadow-2xl py-6 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#03633C]/15 text-[#03633C] border-l-4 border-[#03633C]'
                        : 'text-gray-800 hover:bg-white/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200/50 flex flex-col space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center space-x-3 text-sm text-gray-800 px-4 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/80"
                >
                  <Phone className="w-4 h-4 text-[#03633C]" />
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                </a>
                <button
                  onClick={() => handleNavClick('contacto')}
                  className="w-full bg-[#03633C] text-white py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Solicita una cotización</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
