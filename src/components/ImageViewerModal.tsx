import React from 'react';
import { X } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  category: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  imageUrl,
  title,
  category,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-4xl w-full bg-[#044027] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2.5 rounded-full transition-colors focus:outline-none"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-2 sm:p-4 bg-black/40 flex justify-center items-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

        <div className="p-6 bg-[#044027] text-white">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest">
            {category}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold mt-1">{title}</h3>
          <p className="text-gray-300 text-sm mt-2">
            SIMARA Asociación Cooperativa — Excelencia operativa y seguridad en cada obra.
          </p>
        </div>
      </div>
    </div>
  );
};
