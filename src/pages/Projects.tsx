import React, { useState } from 'react';
import { IMAGES, USER_PROJECT_PHOTOS } from '../constants/images';
import { ImageViewerModal } from '../components/ImageViewerModal';

interface ProjectsProps {
  setCurrentTab: (tab: string) => void;
}

export const Projects: React.FC<ProjectsProps> = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const filteredPhotos =
    activeFilter === 'Todos'
      ? USER_PROJECT_PHOTOS
      : USER_PROJECT_PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero interno */}
      <section className="relative py-24 bg-[#044027] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.proyectosHero})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest block mb-3">
            GALERÍA DE OBRAS Y PROYECTOS
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Proyectos Realizados</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Registro fotográfico oficial de nuestras operaciones y proyectos.
          </p>
        </div>
      </section>

      {/* Pure Photo Gallery Grid for Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
            {['Todos', 'Petroleros', 'Obra Civil', 'Infraestructura', 'Equipos'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#03633C] text-white shadow-lg shadow-[#03633C]/30 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedImageUrl(photo.url)}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-xl cursor-pointer bg-gray-900"
              >
                <img
                  src={photo.url}
                  alt="Proyecto SIMARA"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedImageUrl && (
        <ImageViewerModal
          isOpen={!!selectedImageUrl}
          imageUrl={selectedImageUrl}
          title="Proyecto SIMARA"
          category="Galería Oficial"
          onClose={() => setSelectedImageUrl(null)}
        />
      )}
    </div>
  );
};
