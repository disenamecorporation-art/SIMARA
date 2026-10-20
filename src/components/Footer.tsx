import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../constants/images';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#044027] text-white relative overflow-hidden">
      {/* Background subtle overlay / pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroSunsetRig})` }}
      />

      {/* CTA Band before footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 border-b border-[#03633C]">
        <div className="bg-gradient-to-r from-[#03633C]/40 to-transparent p-8 sm:p-12 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div>
              <img src={IMAGES.logoWhite} alt="SIMARA Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md" />
            </div>
            <div>
              <p className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest mb-1">
                — ¿Listo para tu próximo proyecto?
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Trabajemos juntos
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Contáctanos y descubre cómo podemos ayudarte a hacer realidad tus proyectos en el sector petrolero y de la construcción.
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleNavClick('contacto')}
              className="bg-transparent hover:bg-white hover:text-[#044027] text-white border-2 border-white px-8 py-3.5 rounded-full font-semibold transition-all duration-200 flex items-center space-x-2 group shadow-lg"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer 4 Columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo & description */}
          <div className="space-y-4">
            <div>
              <img src={IMAGES.logoWhite} alt="SIMARA" className="h-12 w-auto object-contain drop-shadow-sm" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Asociación Cooperativa SIMARA. Soluciones integrales, seguras y de alta calidad para la industria energética y la construcción civil en Venezuela.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#03633C] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#03633C] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#03633C] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#03633C] flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase border-b border-[#03633C] pb-2">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'nosotros', label: 'Sobre Nosotros' },
                { id: 'servicios', label: 'Nuestros Servicios' },
                { id: 'proyectos', label: 'Proyectos Ejecutados' },
                { id: 'contacto', label: 'Contacto Directo' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-300 hover:text-[#5CE08A] text-sm transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE08A]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase border-b border-[#03633C] pb-2">
              Servicios Principales
            </h4>
            <ul className="space-y-2.5">
              {[
                'Servicios Petroleros',
                'Construcción Civil',
                'Alquiler de Maquinaria y Equipos',
                'Talento Humano Calificado',
                'Líneas de Tuberías y Tanques',
                'Infraestructura Energética',
              ].map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick('servicios')}
                    className="text-gray-300 hover:text-[#5CE08A] text-sm transition-colors flex items-center space-x-2 text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CE08A]" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide uppercase border-b border-[#03633C] pb-2">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#5CE08A] shrink-0 mt-1" />
                <span>Cobertura a nivel nacional (Venezuela)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#5CE08A] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#5CE08A] transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#5CE08A] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#5CE08A] transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#012C1C] py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} SIMARA Asociación Cooperativa. Hecho por Legaint Corporation.</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-[#5CE08A] font-semibold">Comprometidos con el desarrollo</span>
            <span>•</span>
            <button onClick={() => handleNavClick('contacto')} className="hover:text-white transition-colors">
              Política de Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
