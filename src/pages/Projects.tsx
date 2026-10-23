import React, { useState } from 'react';
import { Maximize2, ArrowRightLeft } from 'lucide-react';
import { IMAGES, USER_PROJECT_PHOTOS } from '../constants/images';
import { ImageViewerModal } from '../components/ImageViewerModal';

interface ProjectsProps {
  setCurrentTab: (tab: string) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'Petroleros' | 'Construcción Civil'>('Petroleros');
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; category: string } | null>(null);

  const filteredPhotos = USER_PROJECT_PHOTOS.filter((p) => p.category === activeFilter);

  const beforeAfterSets = [
    {
      title: "Transformación de Proyecto de Adecuación Civil I",
      before: [
        "https://i.postimg.cc/XJTrd9t8/Whats-App-Image-2026-10-20-at-22-16-25.jpg",
        "https://i.postimg.cc/FR2Y30wx/Whats-App-Image-2026-10-20-at-22-16-25-(1).jpg",
        "https://i.postimg.cc/9MvDZysP/Whats-App-Image-2026-10-20-at-22-16-25-(2).jpg"
      ],
      after: [
        "https://i.postimg.cc/0ycrZThT/Whats-App-Image-2026-10-20-at-22-17-49.jpg",
        "https://i.postimg.cc/vZQcrYSY/Whats-App-Image-2026-10-20-at-22-17-49-(1).jpg"
      ]
    },
    {
      title: "Transformación de Proyecto de Edificación e Infraestructura II",
      before: [
        "https://i.postimg.cc/W4yzcMp4/Whats-App-Image-2026-10-20-at-22-20-29.jpg",
        "https://i.postimg.cc/hGYvR94P/Whats-App-Image-2026-10-20-at-22-20-29-(1).jpg",
        "https://i.postimg.cc/HLNn1QWk/Whats-App-Image-2026-10-20-at-22-20-29-(2).jpg",
        "https://i.postimg.cc/fbPyQxWw/Whats-App-Image-2026-10-20-at-22-20-30.jpg"
      ],
      after: [
        "https://i.postimg.cc/brcvsp2m/Whats-App-Image-2026-10-20-at-22-21-08.jpg"
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero interno */}
      <section className="relative py-20 sm:py-24 bg-[#044027] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.proyectosHero})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest block mb-3">
            GALERÍA DE OPERACIONES
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Proyectos Ejecutados</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Registro fotográfico de nuestras obras e intervenciones en servicios petroleros y construcción civil a nivel nacional.
          </p>
        </div>
      </section>

      {/* Galería exclusiva: Únicamente Petroleros y Construcción Civil */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('Petroleros')}
              className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                activeFilter === 'Petroleros'
                  ? 'bg-[#03633C] text-white shadow-xl shadow-[#03633C]/30 scale-105 ring-2 ring-[#5CE08A]'
                  : 'bg-[#F5F7F5] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              Petroleros
            </button>

            <button
              onClick={() => setActiveFilter('Construcción Civil')}
              className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                activeFilter === 'Construcción Civil'
                  ? 'bg-[#03633C] text-white shadow-xl shadow-[#03633C]/30 scale-105 ring-2 ring-[#5CE08A]'
                  : 'bg-[#F5F7F5] text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              Construcción Civil
            </button>
          </div>

          {/* Si es Construcción Civil, mostramos primero las secciones de ANTES y DESPUÉS */}
          {activeFilter === 'Construcción Civil' && (
            <div className="mb-20 space-y-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-[#03633C] text-xs font-bold uppercase tracking-widest block mb-2">
                  EVOLUCIÓN DE PROYECTOS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#044027]">
                  Comparativa: Antes y Después
                </h2>
                <p className="text-gray-600 mt-2">
                  Evidencia visual de la transformación y ejecución de nuestros proyectos de construcción civil e infraestructura.
                </p>
              </div>

              {beforeAfterSets.map((set, sIdx) => (
                <div key={sIdx} className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#044027] mb-8 text-center flex items-center justify-center gap-2">
                    <ArrowRightLeft className="w-6 h-6 text-[#03633C]" />
                    {set.title}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ANTES */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="inline-block bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                        Estado Inicial (Antes)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {set.before.map((url, bIdx) => (
                          <div
                            key={bIdx}
                            onClick={() => setSelectedPhoto({ url, category: 'Construcción Civil (Antes)' })}
                            className="group relative h-48 rounded-xl overflow-hidden shadow cursor-pointer bg-gray-900 border border-gray-200"
                          >
                            <img
                              src={url}
                              alt="Antes"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DESPUÉS */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="inline-block bg-emerald-100 text-[#03633C] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                        Resultado Final (Después)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {set.after.map((url, aIdx) => (
                          <div
                            key={aIdx}
                            onClick={() => setSelectedPhoto({ url, category: 'Construcción Civil (Después)' })}
                            className="group relative h-48 rounded-xl overflow-hidden shadow cursor-pointer bg-gray-900 border border-gray-200"
                          >
                            <img
                              src={url}
                              alt="Después"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                              <Maximize2 className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-bold text-[#044027] mb-6 text-center">
                  Galería Completa de Construcción Civil
                </h3>
              </div>
            </div>
          )}

          {/* Grid de fotos puras sin numeraciones ni nombres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto({
                  url: photo.url,
                  category: photo.category
                })}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer bg-gray-900 border border-gray-100 transition-all duration-300"
              >
                <img
                  src={photo.url}
                  alt={`SIMARA ${photo.category}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay sutil al pasar el mouse con icono de ampliación */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 p-3 rounded-full shadow-lg text-[#044027]">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal visor de foto limpia */}
      {selectedPhoto && (
        <ImageViewerModal
          isOpen={!!selectedPhoto}
          imageUrl={selectedPhoto.url}
          category={selectedPhoto.category}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
};
