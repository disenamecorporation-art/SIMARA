import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants/images';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Servicios Petroleros',
    message: '',
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Por favor complete todos los campos obligatorios (*).');
      return;
    }
    if (!formData.privacy) {
      setError('Debe aceptar la política de privacidad para enviar el mensaje.');
      return;
    }
    setError('');
    setSubmitted(true);

    // Construct WhatsApp message URL
    const text = encodeURIComponent(
      `*Nuevo Contacto desde la Web SIMARA*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Empresa:* ${formData.company || 'N/A'}\n` +
      `*Servicio:* ${formData.service}\n\n` +
      `*Mensaje:* \n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/584147650642?text=${text}`;

    // Trigger WhatsApp after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero interno */}
      <section className="relative py-24 bg-[#044027] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMAGES.contactoHero})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#5CE08A] text-xs font-bold uppercase tracking-widest block mb-3">
            ESTAMOS PARA ATENDERLE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Contáctanos</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Comuníquese con SIMARA Asociación Cooperativa. Soluciones profesionales en servicios petroleros y construcción civil en Maturín, Edo. Monagas.
          </p>
        </div>
      </section>

      {/* Main Content: 2 Columns */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#044027] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8">
                <div>
                  <h3 className="text-2xl font-extrabold mb-2">Información de Contacto</h3>
                  <p className="text-gray-300 text-sm">
                    Utilice cualquiera de nuestros canales oficiales para solicitar cotizaciones o asesoría técnica.
                  </p>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                      <MapPin className="w-6 h-6 text-[#5CE08A]" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[#5CE08A]">Cobertura</strong>
                      <span className="text-gray-200 text-sm leading-relaxed">A nivel nacional (Venezuela)</span>
                    </div>
                  </li>

                  <li className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                      <Phone className="w-6 h-6 text-[#5CE08A]" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[#5CE08A]">Teléfono de Contacto</strong>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-200 text-sm hover:text-white transition-colors">
                        {CONTACT_INFO.phoneFormatted}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center space-x-4">
                    <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                      <Mail className="w-6 h-6 text-[#5CE08A]" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[#5CE08A]">Correo Electrónico</strong>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-200 text-sm hover:text-white transition-colors break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                      <Clock className="w-6 h-6 text-[#5CE08A]" />
                    </div>
                    <div>
                      <strong className="block text-sm font-semibold text-[#5CE08A]">Horario de Atención</strong>
                      <span className="text-gray-200 text-sm">Lunes a Viernes: 8:00 AM – 5:00 PM</span>
                    </div>
                  </li>
                </ul>

                {/* WhatsApp Quick Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-lg transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>Escribir por WhatsApp Directo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#FBFBFB] p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#044027] mb-2">Envíanos un Mensaje</h3>
              <p className="text-gray-600 text-sm mb-8">
                Complete el formulario a continuación y nos pondremos en contacto con usted a la brevedad posible.
              </p>

              {submitted ? (
                <div className="bg-[#03633C]/10 border border-[#03633C]/30 text-[#044027] p-8 rounded-3xl text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-[#03633C] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#03633C]">¡Mensaje enviado con éxito!</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Gracias por contactar a SIMARA Asociación Cooperativa. Hemos abierto su cliente de correo para enviar su solicitud a <strong>{CONTACT_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Servicios Petroleros',
                        message: '',
                        privacy: false,
                      });
                    }}
                    className="mt-4 bg-[#03633C] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-[#025A37]"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Nombre completo *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Carlos Pérez"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Correo electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0414-0000000"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Empresa u Organización</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de su empresa"
                        className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Tipo de servicio</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm"
                    >
                      <option value="Servicios Petroleros">Servicios Petroleros (Tuberías / Tanques / Soldadura)</option>
                      <option value="Construcción Civil">Construcción Civil</option>
                      <option value="Equipos y Maquinaria">Equipos y Maquinaria (Brazos hidráulicos / Torres de iluminación / Pesca)</option>
                      <option value="Talento Humano">Talento Humano Calificado</option>
                      <option value="Otro">Otro servicio</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Mensaje o requerimiento *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describa los detalles de su proyecto, ubicación y plazos estimados..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:border-[#03633C] text-sm resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#03633C] rounded border-gray-300 focus:ring-[#03633C]"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-600">
                      Acepto el tratamiento de mis datos para gestionar esta solicitud de cotización. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#03633C] hover:bg-[#025A37] text-white py-4 rounded-full font-bold shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Enviar mensaje</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
