import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  HardHat,
  Cog,
  Users,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Leaf,
  Building2,
  Wrench,
  Layers,
  Award
} from 'lucide-react';
import { IMAGES, CONTACT_INFO, USER_PROJECT_PHOTOS } from '../constants/images';
import { ImageViewerModal } from '../components/ImageViewerModal';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentTab }) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    category: string;
  } | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Líneas de Tuberías',
      category: 'Petroleros',
      image: USER_PROJECT_PHOTOS[0].url,
      colSpan: 'col-span-1 sm:col-span-2 row-span-2',
    },
    {
      id: 2,
      title: 'Fabricación de Tanques',
      category: 'Petroleros',
      image: USER_PROJECT_PHOTOS[1].url,
      colSpan: 'col-span-1',
    },
    {
      id: 3,
      title: 'Brazos Hidráulicos y Equipos',
      category: 'Equipos',
      image: USER_PROJECT_PHOTOS[2].url,
      colSpan: 'col-span-1',
    },
    {
      id: 4,
      title: 'Obra Civil',
      category: 'Construcción',
      image: USER_PROJECT_PHOTOS[3].url,
      colSpan: 'col-span-1 sm:col-span-2',
    },
    {
      id: 5,
      title: 'Soldadura Industrial',
      category: 'Petroleros',
      image: USER_PROJECT_PHOTOS[4].url,
      colSpan: 'col-span-1',
    },
    {
      id: 6,
      title: 'Torres de Iluminación',
      category: 'Equipos',
      image: USER_PROJECT_PHOTOS[5].url,
      colSpan: 'col-span-1 sm:col-span-2',
    },
    {
      id: 7,
      title: 'Pesca en Pozos',
      category: 'Petroleros',
      image: USER_PROJECT_PHOTOS[6].url,
      colSpan: 'col-span-1',
    },
    {
      id: 8,
      title: 'Parque de Equipos',
      category: 'Equipos',
      image: USER_PROJECT_PHOTOS[7].url,
      colSpan: 'col-span-1',
    },
  ];

  const filteredGallery =
    activeGalleryTab === 'Todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeGalleryTab);

  return (
    <div className="bg-white text-gray-800">
      {/* 1. HERO GRANDE (Exact replica of screenshot) */}
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden pb-20">
        {/* Background image with golden hour sunset & oil pump */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${IMAGES.heroSunsetRig})` }}
        />
        {/* Overlay gradient dark left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            {/* H1 in three lines with last line in bright green #5CE08A */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Servicios Petroleros
              <br />
              y de Construcción
              <br />
              <span className="text-[#5CE08A]">Obra Civil</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-light mb-10 max-w-2xl leading-relaxed">
              Especialistas en líneas de tuberías, fabricación de tanques petroleros, soldadura industrial, herramientas para pesca en pozos y alquiler de equipos especializados.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => {
                  const el = document.getElementById('servicios-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#03633C] hover:bg-[#025A37] text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-[#03633C]/40 transition-all duration-200 flex items-center justify-center space-x-3 group"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setCurrentTab('contacto')}
                className="bg-white/10 hover:bg-white hover:text-[#044027] text-white border-2 border-white/80 px-8 py-4 rounded-full font-semibold backdrop-blur-md transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                <span>Solicita una cotización</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Desliza</span>
          <div className="w-5 h-9 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#5CE08A] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ORIGINAL FLOATING GLASS BRIDGE SEPARATOR / BANNER */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-12 sm:-mt-16 mb-16">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#03633C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start space-x-4">
            <div className="p-3.5 bg-[#03633C] text-white rounded-2xl shadow-lg shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#044027] mb-1">Seguridad Estricta</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Protocolos SSA certificados en cada faena petrolera.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3.5 bg-[#03633C] text-white rounded-2xl shadow-lg shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#044027] mb-1">Calidad Garantizada</h4>
              <p className="text-gray-600 text-xs leading-relaxed">Fabricación de tanques y soldadura especializada.</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#F5F7F5] p-4 rounded-2xl border border-gray-200/60">
            <div>
              <span className="text-xs font-bold text-[#03633C] uppercase block">Asociación Cooperativa</span>
              <span className="text-xs text-gray-600 font-medium">Especialistas petroleros</span>
            </div>
            <button
              onClick={() => setCurrentTab('nosotros')}
              className="w-10 h-10 rounded-full bg-[#03633C] text-white flex items-center justify-center hover:bg-[#025A37] transition-colors shadow-md"
              aria-label="Ver más"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FRANJA DE 4 SERVICIOS */}
      <section id="servicios-section" className="bg-[#FBFBFB] py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {[
              {
                icon: <Cog className="w-10 h-10 text-[#03633C]" />,
                title: 'Servicios Petroleros',
                desc: 'Líneas de tuberías, fabricación de tanques petroleros y soldadura en general en el área.',
              },
              {
                icon: <HardHat className="w-10 h-10 text-[#03633C]" />,
                title: 'Construcción y Obra Civil',
                desc: 'Desarrollo de proyectos de infraestructura, edificaciones y obras civiles industriales.',
              },
              {
                icon: <Wrench className="w-10 h-10 text-[#03633C]" />,
                title: 'Equipos y Herramientas',
                desc: 'Alquiler de herramientas para pesca en pozos, brazos hidráulicos y torres de iluminación.',
              },
              {
                icon: <Users className="w-10 h-10 text-[#03633C]" />,
                title: 'Talento Humano',
                desc: 'Personal técnico calificado y comprometido con la seguridad y la excelencia.',
              },
            ].map((s, idx) => (
              <div key={idx} className="px-6 py-4 flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-3 bg-white shadow-md rounded-2xl inline-block group-hover:bg-[#03633C] transition-colors duration-300">
                    {React.cloneElement(s.icon, {
                      className: 'w-10 h-10 text-[#03633C] group-hover:text-white transition-colors duration-300',
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-[#044027] mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
                <button
                  onClick={() => setCurrentTab('servicios')}
                  className="text-[#03633C] hover:text-[#025A37] font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOBRE NOSOTROS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#025A37] to-[#044027] rounded-3xl z-0 transform -rotate-6 shadow-xl flex items-center justify-center p-4">
                <div className="w-full h-full border-2 border-white/30 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold text-center">SIMARA</span>
                </div>
              </div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={USER_PROJECT_PHOTOS[8].url}
                  alt="Cooperativa SIMARA"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-[2px] bg-[#03633C]" />
                <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest">
                  SOBRE NOSOTROS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#044027] mb-6 leading-tight">
                Una cooperativa que impulsa el desarrollo
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                En SIMARA, nos especializamos en líneas de tuberías, fabricación de tanques petroleros, soldadura general en el área petrolera, herramientas para pesca en pozos y alquiler de equipos como brazos hidráulicos y torres de iluminación.
              </p>
              <button
                onClick={() => setCurrentTab('nosotros')}
                className="bg-[#03633C] hover:bg-[#025A37] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-[#03633C]/20 transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FRANJA DE CIFRAS */}
      <section className="bg-[#F5F7F5] py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
            {[
              { number: 'Equipo', label: 'Especializado y certificado', icon: <Users className="w-8 h-8 text-[#03633C] mb-2" /> },
              { number: '100%', label: 'Compromiso con la seguridad', icon: <ShieldCheck className="w-8 h-8 text-[#03633C] mb-2" /> },
              { number: '+50', label: 'Proyectos ejecutados', icon: <Building2 className="w-8 h-8 text-[#03633C] mb-2" /> },
              { number: 'Sostenibilidad', label: 'en cada operación', icon: <Leaf className="w-8 h-8 text-[#03633C] mb-2" /> },
            ].map((stat, idx) => (
              <div key={idx} className="pt-6 sm:pt-0 sm:px-6 flex flex-col items-center text-center">
                {stat.icon}
                <div className="text-3xl sm:text-4xl font-extrabold text-[#044027] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NUESTROS PROYECTOS (Pure Photos Only, No Titles) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-[2px] bg-[#03633C]" />
                <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest">
                  NUESTROS PROYECTOS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027] mb-6 leading-tight">
                Obras que generan progreso
              </h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Fabricación de tanques, líneas de tuberías y servicios especializados para la industria petrolera y civil.
              </p>
              <button
                onClick={() => setCurrentTab('proyectos')}
                className="bg-[#03633C] hover:bg-[#025A37] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>Ver todos los proyectos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right 3 Pure Photo Cards (No titles) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                USER_PROJECT_PHOTOS[9].url,
                USER_PROJECT_PHOTOS[10].url,
                USER_PROJECT_PHOTOS[11].url,
              ].map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentTab('proyectos')}
                  className="group relative h-[380px] rounded-3xl overflow-hidden shadow-xl cursor-pointer bg-gray-900"
                >
                  <img
                    src={imgUrl}
                    alt="Proyecto SIMARA"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED SECTION: Dedicated Amazing Service Gallery (Pure Photos) */}
      <section className="py-24 bg-[#FBFBFB] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
              GALERÍA VISUAL DE OPERACIONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#044027] mb-6">
              Nuestra Experiencia en Acción
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Registro fotográfico de tanques petroleros, líneas de tuberías, soldadura industrial y equipos especializados.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
              {['Todos', 'Petroleros', 'Obra Civil', 'Infraestructura', 'Equipos'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryTab(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeGalleryTab === cat
                      ? 'bg-[#03633C] text-white shadow-lg shadow-[#03633C]/30 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pure Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage({ url: item.image, title: item.title, category: item.category })}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE SIMARA? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
              EXCELENCIA COOPERATIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027]">
              ¿Por qué elegir SIMARA?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Seguridad Primero',
                desc: 'Estrictos protocolos SSA en cada faena petrolera y obra civil para proteger a nuestro personal y activos.',
                icon: <ShieldCheck className="w-8 h-8 text-[#03633C]" />,
              },
              {
                title: 'Personal Certificado',
                desc: 'Asociados profesionales y técnicos altamente capacitados en soldadura y tuberías.',
                icon: <Users className="w-8 h-8 text-[#03633C]" />,
              },
              {
                title: 'Equipos Modernos',
                desc: 'Brazos hidráulicos, torres de iluminación y herramientas de pesca en pozos actualizadas.',
                icon: <Cog className="w-8 h-8 text-[#03633C]" />,
              },
              {
                title: 'Cumplimiento de Plazos',
                desc: 'Planificación rigurosa y gestión de proyectos orientada a entregar en tiempo y forma.',
                icon: <Calendar className="w-8 h-8 text-[#03633C]" />,
              },
              {
                title: 'Sostenibilidad Ambiental',
                desc: 'Operaciones eco-responsables que minimizan el impacto ambiental y promueven el desarrollo verde.',
                icon: <Leaf className="w-8 h-8 text-[#03633C]" />,
              },
              {
                title: 'Respaldo Cooperativo',
                desc: 'Modelo solidario donde cada asociado es dueño y se esmera por la máxima calidad y lealtad.',
                icon: <Building2 className="w-8 h-8 text-[#03633C]" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FBFBFB] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-white shadow-md rounded-2xl inline-block mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#044027] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERMEDIATE CTA FULL WIDTH */}
      <section className="py-20 bg-[#03633C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.heroSunsetRig})` }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            ¿Necesitas tanques petroleros, líneas de tuberías o alquiler de equipos?
          </h2>
          <p className="text-gray-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
            Estamos listos para asociarnos con tu empresa y garantizar el éxito de tu próximo proyecto en Maturín y todo el oriente del país.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => setCurrentTab('contacto')}
              className="bg-white hover:bg-gray-100 text-[#044027] px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              Solicitar cotización
            </button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. CÓMO TRABAJAMOS (Timeline) */}
      <section className="py-24 bg-[#F5F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
              PROCESO EFICIENTE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027]">
              Cómo Trabajamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contacto y Diagnóstico', desc: 'Analizamos los requerimientos técnicos y operativos de su empresa.' },
              { step: '02', title: 'Propuesta y Cotización', desc: 'Diseñamos un plan adaptado con cronograma, presupuesto y normativas SSA.' },
              { step: '03', title: 'Ejecución Segura', desc: 'Despliegue de personal certificado, maquinaria y supervisión continua.' },
              { step: '04', title: 'Entrega y Seguimiento', desc: 'Satisfacción garantizada, pruebas de calidad y soporte post-obra.' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 relative group hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-black text-[#03633C]/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-[#044027] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <ImageViewerModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.title || ''}
        category={selectedImage?.category || ''}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
