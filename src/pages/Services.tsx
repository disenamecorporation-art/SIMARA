import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cog, HardHat, Wrench, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../constants/images';

interface ServicesProps {
  setCurrentTab: (tab: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setCurrentTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesList = [
    {
      id: 'petroleros',
      title: 'Servicios Petroleros',
      subtitle: 'Operación, mantenimiento y perforación',
      desc: 'Ofrecemos soporte técnico integral para la industria de hidrocarburos, abarcando desde la perforación de pozos hasta el mantenimiento preventivo y correctivo de instalaciones de superficie, líneas de flujo y sistemas de bombeo.',
      features: [
        'Perforación y completamiento de pozos',
        'Mantenimiento de balancines y equipos de extracción',
        'Construcción y mantenimiento de líneas de flujo',
        'Inspección técnica y pruebas no destructivas',
      ],
      image: IMAGES.drillingRig,
      icon: <Cog className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'construccion',
      title: 'Construcción y Obra Civil',
      subtitle: 'Infraestructura y edificaciones industriales',
      desc: 'Desarrollamos proyectos de infraestructura civil e industrial con estricto apego a los planos de ingeniería, normas técnicas y estándares de seguridad para garantizar obras duraderas y funcionales.',
      features: [
        'Edificaciones industriales y campamentos',
        'Pavimentación y vialidad petrolera',
        'Vaciado de concreto estructural y fundaciones',
        'Montaje de estructuras metálicas',
      ],
      image: IMAGES.projectConstruction,
      icon: <HardHat className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'equipos',
      title: 'Equipos y Maquinaria',
      subtitle: 'Alquiler y gestión de flota especializada',
      desc: 'Disponemos de un parque moderno de maquinaria pesada, vehículos operativos y equipos especializados para respaldar cada fase de sus operaciones en campo.',
      features: [
        'Alquiler de grúas y camiones de carga',
        'Maquinaria para movimiento de tierra',
        'Generadores eléctricos y torres de iluminación',
        'Mantenimiento mecánico preventivo en sitio',
      ],
      image: IMAGES.heavyMachinery,
      icon: <Wrench className="w-8 h-8 text-[#03633C]" />,
    },
    {
      id: 'talento',
      title: 'Talento Humano',
      subtitle: 'Personal calificado y certificado',
      desc: 'Proveemos cuadrillas de profesionales, técnicos, soldadores certificados y operadores con amplia experiencia y certificaciones SSA vigentes para garantizar faenas seguras y eficientes.',
      features: [
        'Supervisores de seguridad industrial (SSA)',
        'Soldadores calificados ASME / AWS',
        'Operadores de maquinaria pesada',
        'Personal de apoyo logístico y técnico',
      ],
      image: IMAGES.safetyPersonnel,
      icon: <Users className="w-8 h-8 text-[#03633C]" />,
    },
  ];

  const faqs = [
    {
      q: '¿Cómo puedo solicitar una cotización para un servicio petrolero?',
      a: 'Puede ponerse en contacto con nosotros a través de nuestro formulario en la pestaña Contacto, enviando un correo a Cooperativasimara@gmail.com o escribiéndonos directamente vía WhatsApp al 04147650642.',
    },
    {
      q: '¿SIMARA cuenta con personal certificado para áreas operativas de PDVSA y operadores privados?',
      a: 'Sí, todo nuestro personal posee inducciones SSA vigentes, carnets de certificación y amplia experiencia comprobada en campos petroleros y obras civiles en el Estado Monagas y la región oriental.',
    },
    {
      q: '¿Cuál es el tiempo de respuesta para la evaluación de un proyecto?',
      a: 'Nuestro equipo técnico evalúa los requerimientos y emite una propuesta preliminar o cotización en un plazo no mayor a 24-48 horas hábiles.',
    },
    {
      q: '¿Trabajan fuera del Estado Monagas?',
      a: 'Sí, aunque nuestra sede principal está en Maturín, Edo. Monagas (Urb. Altos de Tipuro C-15), ejecutamos proyectos en todo el territorio nacional según los requerimientos del cliente.',
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
            SOLUCIONES INTEGRALES
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Nuestros Servicios</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Alta capacidad técnica, maquinaria especializada y talento humano comprometido con la seguridad y el éxito de sus operaciones.
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
