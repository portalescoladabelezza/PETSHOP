/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Heart, Compass, Navigation } from 'lucide-react';
import { petShopConfig } from '../data';

export default function ContactLocation() {
  return (
    <section id="contato" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full select-none">
            Venha Nos Visitar
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Atendimento e localização
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Estamos localizados no coração de Nova Iguaçu, com instalações preparadas para o seu animalzinho.
          </p>
        </div>

        {/* Dual Layout: Info Card + Stylized Map UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information blocks */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Group */}
            <div className="bg-brand-beige p-8 rounded-3xl border border-stone-100 space-y-4 shadow-xs">
              <div className="flex items-center space-x-3 text-brand-teal">
                <MapPin size={24} className="stroke-[2.5]" />
                <h3 className="font-display font-bold text-lg text-stone-900">Endereço</h3>
              </div>
              <div className="font-sans text-stone-600 text-base space-y-1">
                <p className="font-semibold text-stone-800">{petShopConfig.address}</p>
                <p>{petShopConfig.city}</p>
                <p className="text-xs text-stone-400 mt-2">Próximo aos principais comércios regionais.</p>
              </div>
            </div>

            {/* Operating Hours Group */}
            <div className="bg-brand-beige p-8 rounded-3xl border border-stone-100 space-y-4 shadow-xs">
              <div className="flex items-center space-x-3 text-brand-orange">
                <Clock size={24} className="stroke-[2.5]" />
                <h3 className="font-display font-bold text-lg text-stone-900">Horário de Funcionamento</h3>
              </div>
              <div className="font-sans text-stone-600 text-base space-y-2">
                <p className="flex justify-between border-b border-stone-200/50 pb-2">
                  <span className="font-medium text-stone-700">Segunda a Sexta</span>
                  <span className="font-bold text-stone-900">9h às 18h</span>
                </p>
                <p className="flex justify-between pb-1">
                  <span className="font-medium text-stone-700">Sábado</span>
                  <span className="font-bold text-stone-900">9h às 14h</span>
                </p>
                <p className="text-xs text-stone-400 font-medium">Domingos e Feriados: Fechado</p>
              </div>
            </div>

            {/* Atendimento Specialties */}
            <div className="bg-brand-teal-light p-6 rounded-3xl border border-brand-teal/10 space-y-2">
              <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-wider">
                <Heart size={14} className="fill-brand-teal" />
                <span>Atendimento</span>
              </div>
              <p className="font-sans text-stone-700 font-semibold text-sm">
                Especialistas em Banho, tosa e produtos pet para cães e gatos de pequeno, médio e grande porte.
              </p>
            </div>

          </div>

          {/* Interactive Styled Map Container */}
          <div className="lg:col-span-7 bg-stone-50 border border-stone-200/60 rounded-3xl overflow-hidden relative min-h-[300px] flex flex-col justify-between p-8 shadow-xs">
            
            {/* Background design representing stylized maps/routes abstractly */}
            <div className="absolute inset-0 bg-brand-beige opacity-40 select-none pointer-events-none"></div>
            <div className="absolute top-[20%] left-[30%] w-[180px] h-1.5 bg-brand-teal-light rounded-full rotate-45 select-none pointer-events-none"></div>
            <div className="absolute top-[30%] left-[40%] w-[120px] h-1.5 bg-brand-orange-light rounded-full -rotate-12 select-none pointer-events-none"></div>
            
            {/* Big floating map icon */}
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-brand-teal text-white p-5 rounded-full shadow-2xl relative animate-bounce duration-[2500ms]">
                <MapPin size={32} className="fill-white/20" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-orange"></span>
                </span>
              </div>
              <span className="font-display font-black text-sm text-brand-teal mt-3 uppercase tracking-widest bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-stone-150">
                {petShopConfig.name}
              </span>
            </div>

            {/* Simulated GPS Compass and Scale controls */}
            <div className="relative z-10 self-start bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl border border-stone-100 shadow-sm flex items-center space-x-3 text-stone-800">
              <Compass size={20} className="text-brand-teal animate-spin duration-3000" />
              <div className="text-left font-sans">
                <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Direção</p>
                <p className="text-xs font-extrabold text-stone-800">Nova Iguaçu Centro</p>
              </div>
            </div>

            {/* Bottom visual overlay & Action trigger */}
            <div className="relative z-10 self-end w-full sm:max-w-xs bg-white/95 backdrop-blur-xs p-6 rounded-2xl border border-stone-150 shadow-xl flex flex-col space-y-3">
              <p className="font-sans text-xs text-stone-500">
                Clique no botão abaixo para abrir o mapa em seu aplicativo de navegação favorito (Google Maps, Waze ou Apple Maps).
              </p>
              
              <a
                href={petShopConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-colors shadow-lg shadow-brand-orange/15 w-full"
              >
                <Navigation size={16} />
                <span>Como chegar</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
