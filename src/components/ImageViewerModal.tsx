import React from 'react';
import { X } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  imageUrl: string;
  category?: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  imageUrl,
  category,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#044027] rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors focus:outline-none"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-3 sm:p-6 bg-black/50 flex justify-center items-center">
          <img
            src={imageUrl}
            alt="SIMARA Operaciones"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {category && (
          <div className="px-6 py-4 bg-[#044027] text-white flex items-center justify-between">
            <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest">
              {category}
            </span>
            <span className="text-gray-300 text-xs">
              SIMARA Asociación Cooperativa
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
