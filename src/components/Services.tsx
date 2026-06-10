/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Bath, Scissors, Sparkles, Flame, CheckCircle, ShieldAlert, Phone } from 'lucide-react';
import { servicesList, getWhatsAppLink } from '../data';

// Map icons dynamically
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bath: Bath,
  Scissors: Scissors,
  Sparkles: Sparkles,
  Flame: Flame,
  CheckCircle: CheckCircle,
  ShieldAlert: ShieldAlert,
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-brand-beige-dark/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full select-none">
            Especialistas em Bem-Estar
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Serviços para o seu pet
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Confira os principais cuidados disponíveis no Pet Feliz. Todo processo é feito com paciência, higiene e carinho.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.iconName] || Bath;
            const messageText = `Olá! Gostaria de agendar o serviço ${service.name} que vi no site Pet Feliz. Tem horário disponível?`;
            const whatsappUrl = getWhatsAppLink(messageText);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-3xl p-8 border border-stone-100 flex flex-col justify-between group hover:border-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/5 transition-all duration-300"
              >
                <div>
                  {/* Top Header with Icon and Label badges */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-brand-teal-light text-brand-teal p-4 rounded-2xl group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <IconComponent size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    
                    {/* Price tag */}
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Valor</span>
                      <span className="font-display font-bold text-lg text-brand-teal group-hover:text-brand-teal-hover transition-colors">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-3 group-hover:text-brand-teal transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="font-sans text-stone-500 text-sm leading-relaxed mb-8">
                    {service.text}
                  </p>
                </div>

                {/* WhatsApp call-to-action button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-brand-teal-light group-hover:bg-brand-orange text-brand-teal group-hover:text-white font-bold py-3.5 px-5 rounded-2xl transition-all duration-300 text-sm hover:-translate-y-0.5"
                >
                  <Phone size={16} />
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Notice of dynamic and safe care */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 max-w-lg mx-auto font-sans leading-relaxed">
            * Os valores podem variar conforme o porte do animal, estado geral dos pelos e comportamento do pet. Fale conosco para um orçamento personalizado.
          </p>
        </div>

      </div>
    </section>
  );
}
