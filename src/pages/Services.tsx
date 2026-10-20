import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cog, HardHat, Wrench, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { IMAGES, CONTACT_INFO, USER_PROJECT_PHOTOS } from '../constants/images';

interface ServicesProps {
  setCurrentTab: (tab: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesList = [
    {
      id: 'petroleros',
      title: 'Servicios Petroleros',
      subtitle: 'Líneas de tuberías, tanques y soldadura',
      desc: 'Especialistas en la construcción y mantenimiento de líneas de tuberías, fabricación de tanques petroleros y soldadura industrial general para la industria de hidrocarburos.',
      features: [
        'Construcción y mantenimiento de líneas de tuberías y flujo',
        'Fabricación de tanques petroleros y almacenamiento',
        'Soldadura general especializada para el sector petrolero',
        'Soporte técnico y mantenimiento industrial',
      ],
      image: USER_PROJECT_PHOTOS[0].url,
      icon: <Cog className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'equipos',
      title: 'Equipos y Herramientas',
      subtitle: 'Alquiler especializado',
      desc: 'Disponemos de alquiler de herramientas para pesca en pozos, así como equipos especializados de apoyo operacional como brazos hidráulicos y torres de iluminación.',
      features: [
        'Alquiler de herramientas para pesca en pozos',
        'Alquiler de brazos hidráulicos (camiones grúa)',
        'Alquiler de torres de iluminación para operaciones nocturnas',
        'Equipos actualizados para máxima eficiencia en campo',
      ],
      image: USER_PROJECT_PHOTOS[10].url,
      icon: <Wrench className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'construccion',
      title: 'Construcción Civil',
      subtitle: 'Infraestructura industrial',
      desc: 'Desarrollamos proyectos de infraestructura civil e industrial con estricto apego a los planos de ingeniería, normas técnicas y estándares de seguridad para garantizar obras duraderas y funcionales.',
      features: [
        'Edificaciones industriales y campamentos',
        'Pavimentación y vialidad petrolera',
        'Vaciado de concreto estructural y fundaciones',
        'Montaje de estructuras metálicas',
      ],
      image: USER_PROJECT_PHOTOS[16].url,
      icon: <HardHat className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'talento',
      title: 'Talento Humano',
      subtitle: 'Personal calificado y certificado',
      desc: 'Proveemos cuadrillas de profesionales, técnicos, soldadores certificados y operadores con amplia experiencia y certificaciones SSA vigentes para garantizar faenas seguras y eficientes.',
      features: [
        'Supervisores de seguridad industrial (SSA)',
        'Soldadores calificados ASME / AWS para tuberías y tanques',
        'Operadores de brazos hidráulicos y maquinaria',
        'Personal técnico de apoyo',
      ],
      image: USER_PROJECT_PHOTOS[5].url,
      icon: <Users className="w-8 h-8 text-[#03633C]" />,
    },
  ];

  const faqs = [
    {
      q: '¿Ofrecen servicio de perforación de pozos?',
      a: 'No. SIMARA Asociación Cooperativa no realiza perforación de pozos. Nos especializamos en líneas de tuberías, fabricación de tanques petroleros, soldadura industrial en el área petrolera, herramientas para pesca en pozos y alquiler de equipos como brazos hidráulicos y torres de iluminación.',
    },
    {
      q: '¿Cómo puedo solicitar una cotización de alquiler de equipos o tanques?',
      a: 'Puede ponerse en contacto con nosotros a través de nuestro formulario en la pestaña Contacto, enviando un correo a Cooperativasimara@gmail.com o escribiéndonos directamente vía WhatsApp al 04147650642.',
    },
    {
      q: '¿Cuál es el tiempo de respuesta para la evaluación de un proyecto de tuberías o tanques?',
      a: 'Nuestro equipo técnico evalúa los requerimientos y emite una propuesta preliminar o cotización en un plazo no mayor a 24-48 horas hábiles.',
    },
    {
      q: '¿Trabajan fuera del Estado Monagas?',
      a: 'Sí, aunque nuestra sede principal está en Maturín, Edo. Monagas, ejecutamos proyectos en todo el territorio nacional según los requerimientos del cliente.',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero interno */}
      <section className="relative py-24 bg-[#044027] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.serviciosHero})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest block mb-3">
            SOLUCIONES ESPECIALIZADAS
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Nuestros Servicios</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Líneas de tuberías, fabricación de tanques petroleros, soldadura general, herramientas de pesca y alquiler de equipos con los más altos estándares.
          </p>
        </div>
      </section>

      {/* Alternating Service Blocks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesList.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="p-3 bg-[#03633C]/10 rounded-2xl inline-block mb-4">
                    {service.icon}
                  </div>
                  <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-1">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-[#03633C] shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setCurrentTab('contacto');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#03633C] hover:bg-[#025A37] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all flex items-center space-x-2 group"
                  >
                    <span>Solicita una cotización</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FBFBFB] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
              RESOLVEMOS SUS DUDAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027]">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-[#044027] hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#03633C]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
