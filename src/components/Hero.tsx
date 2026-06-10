/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowDown, Heart, Sparkles } from 'lucide-react';
import { petShopConfig, getWhatsAppLink } from '../data';

const heroDogImg = "/src/assets/images/hero_dog_1781057922158.png";

export default function Hero() {
  const defaultMsg = 'Olá! Vi o site Pet Feliz e gostaria de agendar um serviço para meu pet.';
  const whatsappUrl = getWhatsAppLink(defaultMsg);

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-brand-teal-light/60 via-brand-beige to-brand-beige py-12 lg:py-24">
      {/* Decorative background paw-prints and floating circles */}
      <div className="absolute top-12 left-10 text-brand-teal/5 animate-pulse select-none pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-4.34-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8.68 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-6.68-4.2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4.68 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </div>

      <div className="absolute right-1/3 bottom-12 text-brand-orange/5 select-none pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-4.34-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8.68 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-6.68-4.2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4.68 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-teal-light px-4 py-2 rounded-full border border-brand-teal/10">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal font-sans">
                Agenda aberta para Banho & Tosa
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] tracking-tight">
              Cuidado, carinho e higiene para o seu <span className="text-brand-teal underline decoration-brand-orange decoration-wavy decoration-3 underline-offset-8">pet</span>.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-stone-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Banho, tosa, hidratação, produtos pet e atendimento especial para cães e gatos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                id="hero-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/35 hover:-translate-y-0.5 transition-all text-base"
              >
                <Phone size={18} />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-stone-50 text-stone-800 font-semibold py-4 px-8 border border-stone-200 rounded-full hover:border-stone-300 transition-colors text-base"
              >
                <span>Ver serviços</span>
                <ArrowDown size={16} className="text-stone-500 animate-bounce" />
              </a>
            </div>

            {/* Micro Badges of Quality */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-100 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center text-brand-teal mb-1">
                  <Heart size={16} className="fill-brand-teal mr-1" />
                  <span className="font-bold text-stone-900">100%</span>
                </div>
                <span className="text-xs text-stone-500">Amor e carinho</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center text-brand-teal mb-1">
                  <Sparkles size={16} className="mr-1" />
                  <span className="font-bold text-stone-900">Premium</span>
                </div>
                <span className="text-xs text-stone-500">Higiene e cuidado</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center text-brand-orange mb-1">
                  <span className="font-bold text-stone-900">Veterinary</span>
                </div>
                <span className="text-xs text-stone-500">Produtos adequados</span>
              </div>
            </div>

          </div>

          {/* Hero Right Media Panel */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft backdrop blobs representing care & hydration */}
            <div className="absolute -inset-4 bg-brand-teal/10 rounded-[3rem] rotate-3 blur-md scale-95"></div>
            <div className="absolute inset-2 bg-brand-orange-light rounded-[3.5rem] -rotate-3 scale-100"></div>

            <div className="relative z-10 w-full max-w-[420px] shadow-2xl rounded-[3rem] overflow-hidden border-4 border-white bg-white">
              <img
                src={heroDogImg}
                alt="Golden Retriever super limpo e alegre pós banho no Pet Feliz"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating badges on top of image */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-100">
                <div className="flex items-center space-x-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <p className="text-xs font-semibold text-stone-800 font-sans">
                    “Olha como o Billy voltou cheiroso e macio!”
                  </p>
                </div>
              </div>
              
              {/* Small floating badge */}
              <div className="absolute -top-3 -right-3 bg-brand-teal text-white rounded-full p-3.5 shadow-lg flex items-center justify-center animate-bounce duration-[3000ms]">
                <Heart size={20} className="fill-white" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
