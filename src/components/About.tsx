/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, ShieldCheck, ShoppingBag, Award, Phone, Check } from 'lucide-react';
import { petShopConfig, getWhatsAppLink } from '../data';

export default function About() {
  const defaultMsg = 'Olá! Gostaria de agendar um serviço no Pet Feliz. Tem horário disponível?';
  const whatsappUrl = getWhatsAppLink(defaultMsg);

  const keyPoints = [
    { text: 'Atendimento com carinho', icon: Heart, description: 'Tratamos cada cão e gato como se fosse nosso próprio mascote residencial.' },
    { text: 'Ambiente limpo e seguro', icon: ShieldCheck, description: 'Instalações esterilizadas constantemente para garantir a saúde do seu pet.' },
    { text: 'Produtos adequados', icon: ShoppingBag, description: 'Shampoos neutros e hipoalergênicos próprios para o pH da pele animal.' },
    { text: 'Equipe cuidadosa', icon: Award, description: 'Profissionais experientes, calmos e apaixonados por estética e saúde pet.' },
    { text: 'Agendamento pelo WhatsApp', icon: Phone, description: 'Canal rápido de comunicação direta para responder suas dúvidas prontamente.' },
    { text: 'Opções para cães e gatos', icon: Check, description: 'Banhos e tosas especializados para felinos e caninos de todos os portes.' },
  ];

  return (
    <section id="sobre" className="py-20 bg-brand-beige-dark/25 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full select-none">
              Quem Somos
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
              Sobre o {petShopConfig.name}
            </h2>

            <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              O Pet Feliz Banho & Tosa nasceu para oferecer cuidado, carinho e atenção para cães e gatos. Trabalhamos com serviços de higiene, estética animal e produtos selecionados para o bem-estar do seu pet.
            </p>

            {/* Quote block */}
            <div className="border-l-4 border-brand-orange pl-4 py-1.5 bg-brand-orange-light/30 rounded-r-xl">
              <p className="text-sm font-semibold italic text-stone-800 font-sans">
                "Mais do que estética, promovemos saúde e felicidade para os animais em Nova Iguaçu."
              </p>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 px-6 rounded-full shadow-lg shadow-brand-orange/15 transition-transform hover:-translate-y-0.5"
              >
                <Phone size={16} />
                <span>Conversar com a Equipe</span>
              </a>
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-stone-100/80 hover:border-brand-teal/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3.5 mb-3">
                      <div className="bg-brand-teal/10 text-brand-teal p-2.5 rounded-xl shrink-0">
                        <IconComponent size={20} className="stroke-[2.5]" />
                      </div>
                      <h4 className="font-display font-bold text-stone-900 text-sm sm:text-base leading-tight">
                        {point.text}
                      </h4>
                    </div>
                    <p className="font-sans text-stone-500 text-xs sm:text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
