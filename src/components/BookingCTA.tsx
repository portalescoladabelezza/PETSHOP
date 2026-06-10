/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Heart, Sparkles } from 'lucide-react';
import { petShopConfig, getWhatsAppLink } from '../data';

export default function BookingCTA() {
  const customMessage = 'Olá! Vi o site Pet Feliz e gostaria de agendar um serviço para meu pet.';
  const whatsappUrl = getWhatsAppLink(customMessage);

  return (
    <section className="py-16 sm:py-24 bg-brand-teal text-white relative overflow-hidden shadow-inner">
      {/* Abstract warm overlays */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-orange-light/10 to-transparent pointer-events-none"></div>
      
      {/* Flowing background shapes */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-orange/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Playful Floating Hearts & Stars */}
        <div className="flex items-center justify-center space-x-3 text-brand-orange-light">
          <Sparkles size={20} className="animate-pulse" />
          <Heart size={24} className="fill-brand-orange-light animate-bounce" />
          <Sparkles size={20} className="animate-pulse" />
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
          Quer agendar um cuidado para seu pet?
        </h2>

        <p className="font-sans text-brand-teal-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Fale agora pelo WhatsApp e consulte horários disponíveis para banho, tosa ou outros serviços. Nossa equipe está pronta para lhe atender!
        </p>

        <div className="pt-4">
          <a
            id="cta-booking-section"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-5 px-10 rounded-full text-base sm:text-lg shadow-2xl shadow-brand-orange/30 hover:shadow-brand-orange/45 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone size={20} />
            <span>Agendar pelo WhatsApp</span>
          </a>
        </div>

        {/* Micro-trust stats */}
        <p className="text-xs text-brand-teal-light/80 font-sans">
          Resposta média em menos de 5 minutos durante o horário de funcionamento
        </p>

      </div>
    </section>
  );
}
