/**
 * Centralized image assets for SIMARA Asociación Cooperativa
 * High-quality imagery matching oil & construction industry.
 */
export const IMAGES = {
  // Official Logos provided by user
  logo: "https://i.postimg.cc/156r45J6/logoweb.png",
  logoWhite: "https://i.postimg.cc/5tKL1sZJ/logoweblbanco.png",

  // Hero background: Golden hour sunset with oil pumpjack silhouette and engineer
  heroSunsetRig: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1920&auto=format&fit=crop",

  // Internal page hero backgrounds
  nosotrosHero: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop",
  serviciosHero: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1920&auto=format&fit=crop",
  proyectosHero: "https://images.unsplash.com/photo-1541888946425-d0fbb18f707f?q=80&w=1920&auto=format&fit=crop",
  contactoHero: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1920&auto=format&fit=crop",
};

export interface ProjectPhoto {
  id: number;
  category: 'Petroleros' | 'Construcción Civil';
  url: string;
}

// FOTOS EXCLUSIVAS PROVISTAS POR EL CLIENTE:
// 16 fotos para Petroleros
// 48 fotos para Construcción Civil (las anteriores fueron completamente eliminadas)
export const USER_PROJECT_PHOTOS: ProjectPhoto[] = [
  // --- PETROLEROS (16 fotos exclusivas) ---
  { id: 1, category: 'Petroleros', url: 'https://i.postimg.cc/cL46wbtX/Whats-App-Image-2026-10-20-at-12-53-29-(1).jpg' },
  { id: 2, category: 'Petroleros', url: 'https://i.postimg.cc/1354wjVM/Whats-App-Image-2026-10-20-at-12-53-29-(2).jpg' },
  { id: 3, category: 'Petroleros', url: 'https://i.postimg.cc/zGX3KcH7/Whats-App-Image-2026-10-20-at-12-53-29-(3).jpg' },
  { id: 4, category: 'Petroleros', url: 'https://i.postimg.cc/mg2hC51y/Whats-App-Image-2026-10-20-at-12-53-29-(4).jpg' },
  { id: 5, category: 'Petroleros', url: 'https://i.postimg.cc/W1btgHq7/Whats-App-Image-2026-10-20-at-12-53-30.jpg' },
  { id: 6, category: 'Petroleros', url: 'https://i.postimg.cc/QdxV1yKQ/Whats-App-Image-2026-10-20-at-12-53-30-(1).jpg' },
  { id: 7, category: 'Petroleros', url: 'https://i.postimg.cc/8zPsM0fB/Whats-App-Image-2026-10-20-at-12-53-30-(2).jpg' },
  { id: 8, category: 'Petroleros', url: 'https://i.postimg.cc/NjfLmz21/Whats-App-Image-2026-10-20-at-12-53-30-(3).jpg' },
  { id: 9, category: 'Petroleros', url: 'https://i.postimg.cc/Z5K0pMv6/Whats-App-Image-2026-10-20-at-12-53-30-(4).jpg' },
  { id: 10, category: 'Petroleros', url: 'https://i.postimg.cc/jSdCPFnP/Whats-App-Image-2026-10-20-at-12-53-30-(5).jpg' },
  { id: 11, category: 'Petroleros', url: 'https://i.postimg.cc/HksjXh85/Whats-App-Image-2026-10-20-at-12-53-31.jpg' },
  { id: 12, category: 'Petroleros', url: 'https://i.postimg.cc/pLXyz659/Whats-App-Image-2026-10-20-at-12-53-31-(1).jpg' },
  { id: 13, category: 'Petroleros', url: 'https://i.postimg.cc/Z5K0pMvW/Whats-App-Image-2026-10-20-at-12-53-31-(2).jpg' },
  { id: 14, category: 'Petroleros', url: 'https://i.postimg.cc/L86hLbgg/Whats-App-Image-2026-10-20-at-12-53-31-(3).jpg' },
  { id: 15, category: 'Petroleros', url: 'https://i.postimg.cc/6p5Tnm4v/Whats-App-Image-2026-10-20-at-12-53-31-(4).jpg' },
  { id: 16, category: 'Petroleros', url: 'https://i.postimg.cc/kgXDKpRB/Whats-App-Image-2026-10-20-at-12-53-32.jpg' },

  // --- CONSTRUCCIÓN CIVIL (48 fotos exclusivas proporcionadas por el cliente) ---
  { id: 17, category: 'Construcción Civil', url: 'https://i.postimg.cc/3xV7NSXg/Whats-App-Image-2026-10-20-at-12-49-00-(3).jpg' },
  { id: 18, category: 'Construcción Civil', url: 'https://i.postimg.cc/0yFxjWYm/Whats-App-Image-2026-10-20-at-12-49-00-(4).jpg' },
  { id: 19, category: 'Construcción Civil', url: 'https://i.postimg.cc/fRpZy2cd/Whats-App-Image-2026-10-20-at-12-49-01.jpg' },
  { id: 20, category: 'Construcción Civil', url: 'https://i.postimg.cc/XYm3qHfC/Whats-App-Image-2026-10-20-at-12-49-01-(1).jpg' },
  { id: 21, category: 'Construcción Civil', url: 'https://i.postimg.cc/BnksbYTL/Whats-App-Image-2026-10-20-at-12-49-01-(2).jpg' },
  { id: 22, category: 'Construcción Civil', url: 'https://i.postimg.cc/L8wR5Ctq/Whats-App-Image-2026-10-20-at-12-49-01-(3).jpg' },
  { id: 23, category: 'Construcción Civil', url: 'https://i.postimg.cc/g2QdjSVx/Whats-App-Image-2026-10-20-at-12-49-01-(4).jpg' },
  { id: 24, category: 'Construcción Civil', url: 'https://i.postimg.cc/8z9DcKRc/Whats-App-Image-2026-10-20-at-12-49-01-(5).jpg' },
  { id: 25, category: 'Construcción Civil', url: 'https://i.postimg.cc/Jzvm06Nz/Whats-App-Image-2026-10-20-at-12-49-02.jpg' },
  { id: 26, category: 'Construcción Civil', url: 'https://i.postimg.cc/3xV7NSXJ/Whats-App-Image-2026-10-20-at-12-49-02-(1).jpg' },
  { id: 27, category: 'Construcción Civil', url: 'https://i.postimg.cc/YCZk0n62/Whats-App-Image-2026-10-20-at-12-49-02-(2).jpg' },
  { id: 28, category: 'Construcción Civil', url: 'https://i.postimg.cc/T3FG17VT/Whats-App-Image-2026-10-20-at-12-49-03.jpg' },
  { id: 29, category: 'Construcción Civil', url: 'https://i.postimg.cc/52T1y7Bx/Whats-App-Image-2026-10-20-at-12-49-04.jpg' },
  { id: 30, category: 'Construcción Civil', url: 'https://i.postimg.cc/nhgZrR4Z/Whats-App-Image-2026-10-20-at-12-49-04-(1).jpg' },
  { id: 31, category: 'Construcción Civil', url: 'https://i.postimg.cc/L8wR5CtS/Whats-App-Image-2026-10-20-at-12-49-05.jpg' },
  { id: 32, category: 'Construcción Civil', url: 'https://i.postimg.cc/t4wyJS3G/Whats-App-Image-2026-10-20-at-12-49-05-(1).jpg' },
  { id: 33, category: 'Construcción Civil', url: 'https://i.postimg.cc/K8wFjqP2/Whats-App-Image-2026-10-20-at-12-49-06.jpg' },
  { id: 34, category: 'Construcción Civil', url: 'https://i.postimg.cc/bwW8rCxc/Whats-App-Image-2026-10-20-at-12-49-06-(1).jpg' },
  { id: 35, category: 'Construcción Civil', url: 'https://i.postimg.cc/XYm3qHfM/Whats-App-Image-2026-10-20-at-12-49-06-(2).jpg' },
  { id: 36, category: 'Construcción Civil', url: 'https://i.postimg.cc/t4wyJShL/Whats-App-Image-2026-10-20-at-12-49-06-(3).jpg' },
  { id: 37, category: 'Construcción Civil', url: 'https://i.postimg.cc/ht6gvy9k/Whats-App-Image-2026-10-20-at-12-49-06-(4).jpg' },
  { id: 38, category: 'Construcción Civil', url: 'https://i.postimg.cc/8zjN1Q6D/Whats-App-Image-2026-10-20-at-12-49-06-(5).jpg' },
  { id: 39, category: 'Construcción Civil', url: 'https://i.postimg.cc/T3pfRMDR/Whats-App-Image-2026-10-20-at-12-49-07.jpg' },
  { id: 40, category: 'Construcción Civil', url: 'https://i.postimg.cc/BnX4q9K4/Whats-App-Image-2026-10-20-at-12-49-07-(1).jpg' },
  { id: 41, category: 'Construcción Civil', url: 'https://i.postimg.cc/XYp4VSCW/Whats-App-Image-2026-10-20-at-12-49-07-(2).jpg' },
  { id: 42, category: 'Construcción Civil', url: 'https://i.postimg.cc/6pyt9JvX/Whats-App-Image-2026-10-20-at-12-49-08.jpg' },
  { id: 43, category: 'Construcción Civil', url: 'https://i.postimg.cc/BnX4q9Kf/Whats-App-Image-2026-10-20-at-12-49-08-(1).jpg' },
  { id: 44, category: 'Construcción Civil', url: 'https://i.postimg.cc/cLr0sy8p/Whats-App-Image-2026-10-20-at-12-49-08-(2).jpg' },
  { id: 45, category: 'Construcción Civil', url: 'https://i.postimg.cc/g2nmYFZ9/Whats-App-Image-2026-10-20-at-12-49-09.jpg' },
  { id: 46, category: 'Construcción Civil', url: 'https://i.postimg.cc/YChMpKmT/Whats-App-Image-2026-10-20-at-12-49-09-(1).jpg' },
  { id: 47, category: 'Construcción Civil', url: 'https://i.postimg.cc/7Zfwx828/Whats-App-Image-2026-10-20-at-12-49-09-(2).jpg' },
  { id: 48, category: 'Construcción Civil', url: 'https://i.postimg.cc/fRJDwn0p/Whats-App-Image-2026-10-20-at-12-49-10.jpg' },
  { id: 49, category: 'Construcción Civil', url: 'https://i.postimg.cc/GmHdcwsf/Whats-App-Image-2026-10-20-at-12-49-10-(1).jpg' },
  { id: 50, category: 'Construcción Civil', url: 'https://i.postimg.cc/CxzSFTft/Whats-App-Image-2026-10-20-at-12-49-10-(2).jpg' },
  { id: 51, category: 'Construcción Civil', url: 'https://i.postimg.cc/526bxdFR/Whats-App-Image-2026-10-20-at-12-49-10-(3).jpg' },
  { id: 52, category: 'Construcción Civil', url: 'https://i.postimg.cc/Nj5BgqrP/Whats-App-Image-2026-10-20-at-12-49-11.jpg' },
  { id: 53, category: 'Construcción Civil', url: 'https://i.postimg.cc/8zjN1QrX/Whats-App-Image-2026-10-20-at-12-49-11-(1).jpg' },
  { id: 54, category: 'Construcción Civil', url: 'https://i.postimg.cc/mgtBbfFX/Whats-App-Image-2026-10-20-at-12-49-12.jpg' },
  { id: 55, category: 'Construcción Civil', url: 'https://i.postimg.cc/qvz4kVCj/Whats-App-Image-2026-10-20-at-12-49-12-(1).jpg' },
  { id: 56, category: 'Construcción Civil', url: 'https://i.postimg.cc/y8ksV4Sj/Whats-App-Image-2026-10-20-at-12-49-12-(2).jpg' },
  { id: 57, category: 'Construcción Civil', url: 'https://i.postimg.cc/htfcSW7r/Whats-App-Image-2026-10-20-at-12-49-12-(3).jpg' },
  { id: 58, category: 'Construcción Civil', url: 'https://i.postimg.cc/XYp4VSyk/Whats-App-Image-2026-10-20-at-12-49-12-(4).jpg' },
  { id: 59, category: 'Construcción Civil', url: 'https://i.postimg.cc/x1cn0Dby/Whats-App-Image-2026-10-20-at-12-49-13.jpg' },
  { id: 60, category: 'Construcción Civil', url: 'https://i.postimg.cc/5NPfdNjK/Whats-App-Image-2026-10-20-at-12-49-13-(1).jpg' },
  { id: 61, category: 'Construcción Civil', url: 'https://i.postimg.cc/qMmpVMgZ/Whats-App-Image-2026-10-20-at-12-49-13-(2).jpg' },
  { id: 62, category: 'Construcción Civil', url: 'https://i.postimg.cc/02t9R2rW/Whats-App-Image-2026-10-20-at-12-49-13-(3).jpg' },
  { id: 63, category: 'Construcción Civil', url: 'https://i.postimg.cc/MKsz2KXs/Whats-App-Image-2026-10-20-at-12-49-13-(4).jpg' },
  { id: 64, category: 'Construcción Civil', url: 'https://i.postimg.cc/X72nS7X8/Whats-App-Image-2026-10-20-at-12-49-13-(5).jpg' },
];

export const CONTACT_INFO = {
  email: "Cooperativasimara@gmail.com",
  phone: "04147650642",
  phoneFormatted: "0414-7650642",
  whatsappUrl: "https://wa.me/584147650642",
  location: "Venezuela (Cobertura Nacional)"
};
