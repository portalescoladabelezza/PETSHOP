/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';
import { getWhatsAppLink } from '../data';

export default function FloatingWhatsApp() {
  const customMessage = 'Olá! Vi o site Pet Feliz e gostaria de agendar um serviço para meu pet.';
  const whatsappUrl = getWhatsAppLink(customMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 group font-sans">
      
      {/* Decorative pulse ring backgrounds */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping duration-1500 pointer-events-none"></span>

      {/* Main floating button containing the brand-teal / WhatsApp emerald styling */}
      <a
        id="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group-hover:shadow-emerald-500/20"
      >
        {/* Simple phone or chat representation from Lucide-react */}
        <Phone size={18} className="fill-white stroke-none animate-pulse" />
        <span className="text-sm tracking-wide">WhatsApp</span>
      </a>

    </div>
  );
}
