import React from 'react';
import { ArrowRight, ShieldCheck, Users, Target, Eye, Award, CheckCircle2, Building2 } from 'lucide-react';
import { IMAGES, CONTACT_INFO, USER_PROJECT_PHOTOS } from '../constants/images';

interface AboutProps {
  setCurrentTab: (tab: string) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentTab }) => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero interno */}
      <section className="relative py-24 bg-[#044027] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.nosotrosHero})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest block mb-3">
            ASOCIACIÓN COOPERATIVA SIMARA
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Sobre Nosotros</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Especialistas en líneas de tuberías, fabricación de tanques petroleros, soldadura general, pesca en pozos y alquiler de equipos en Venezuela.
          </p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
                NUESTRA HISTORIA Y MISIÓN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027] mb-6">
                Unidos por el trabajo y la calidad profesional
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Fundada en Maturín, Estado Monagas, <strong>SIMARA Asociación Cooperativa</strong> se especializa en brindar soluciones técnicas de alta calidad para la industria petrolera, abarcando líneas de tuberías, fabricación de tanques, soldadura industrial, pesca en pozos y alquiler de equipos especializados como brazos hidráulicos y torres de iluminación.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Como asociación cooperativa, fomentamos el trabajo digno, la participación democrática y el beneficio mutuo. Cada miembro asociado aporta su experiencia especializada en las respectivas áreas de trabajo lo que garantiza el éxito en cada proyecto.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Equipo técnico especializado',
                  'Certificación SSA vigente',
                  'Equipos y maquinaria propia',
                  'Presencia en oriente venezolano',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-[#FBFBFB] p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#03633C] shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={USER_PROJECT_PHOTOS[12].url}
                  alt="Equipo SIMARA"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-24 bg-[#FBFBFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
              FILOSÓFIA CORPORATIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027]">
              Misión, Visión y Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <div className="p-3 bg-[#03633C]/10 rounded-2xl inline-block mb-6">
                <Target className="w-8 h-8 text-[#03633C]" />
              </div>
              <h3 className="text-xl font-bold text-[#044027] mb-3">Misión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Brindar soluciones integrales de ingeniería, construcción civil y servicios especializados para la industria petrolera y energética, garantizando altos estándares de calidad, seguridad industrial y responsabilidad ambiental. Tambien nos comprometemos a ejecutar proyectos de infraestructura y soporte operativo que impulsen el desarrollo sostenible y la eficiencia de nuestros clientes."
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <div className="p-3 bg-[#03633C]/10 rounded-2xl inline-block mb-6">
                <Eye className="w-8 h-8 text-[#03633C]" />
              </div>
              <h3 className="text-xl font-bold text-[#044027] mb-3">Visión</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Consolidarnos como el socio estratégico de mayor confianza y Liderar la transformación de la infraestructura petrolera y civil, siendo la primera opción para clientes que buscan excelencia técnica y desarrollo sostenible."
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <div className="p-3 bg-[#03633C]/10 rounded-2xl inline-block mb-6">
                <Award className="w-8 h-8 text-[#03633C]" />
              </div>
              <h3 className="text-xl font-bold text-[#044027] mb-3">Valores</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Como asociación cooperativa, fomentamos el trabajo digno, la participación democrática y el beneficio mutuo. Cada miembro asociado aporta su experiencia especializada en las respectivas áreas de trabajo lo que garantiza el éxito en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo Cooperativo y SSA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#F5F7F5] p-10 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-extrabold text-[#044027] mb-4">Modelo Cooperativo</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Como asociación cooperativa, fomentamos el trabajo digno, la participación democrática y el beneficio mutuo. Cada miembro asociado aporta su experiencia especializada en las respectivas áreas de trabajo lo que garantiza el éxito en cada proyecto.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#03633C]" />
                  <span>Democracia y autogestión en el trabajo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#03633C]" />
                  <span>Capacitación continua en soldadura y seguridad</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#044027] text-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-extrabold text-white mb-4">Política SSA (Seguridad, Salud y Ambiente)</h3>
              <p className="text-gray-200 text-base leading-relaxed mb-6">
                Para SIMARA, la seguridad no es negociable. Cumplimos rigurosamente con las normativas nacionales e internacionales de prevención de riesgos laborales y protección ambiental.
              </p>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#5CE08A]" />
                  <span>Cero accidentes como meta permanente</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#5CE08A]" />
                  <span>Protección y conservación de ecosistemas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-[#03633C] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">¿Deseas asociarte o contratarnos?</h2>
          <p className="text-gray-100 mb-8 text-base">Cobertura a nivel nacional en toda Venezuela. Contáctanos hoy mismo.</p>
          <button
            onClick={() => {
              setCurrentTab('contacto');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white hover:bg-gray-100 text-[#044027] px-8 py-4 rounded-full font-bold shadow-xl transition-all"
          >
            Ir a Contacto
          </button>
        </div>
      </section>
    </div>
  );
};
