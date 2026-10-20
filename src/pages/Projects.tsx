import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { IMAGES, USER_PROJECT_PHOTOS } from '../constants/images';
import { ImageViewerModal } from '../components/ImageViewerModal';

interface ProjectsProps {
  setCurrentTab: (tab: string) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'Petroleros' | 'Construcción Civil'>('Petroleros');
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; category: string } | null>(null);

  const filteredPhotos = USER_PROJECT_PHOTOS.filter((p) => p.category === activeFilter);

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
          
          {/* Filter Tabs: Solo las dos secciones solicitadas */}
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
