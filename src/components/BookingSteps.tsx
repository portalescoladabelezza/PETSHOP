/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, MessageSquare, CalendarRange, HeartHandshake } from 'lucide-react';

export default function BookingSteps() {
  const steps = [
    {
      number: '01',
      title: 'Escolha o serviço',
      text: 'Veja as opções de banho, tosa e cuidados disponíveis.',
      icon: CheckCircle2,
      color: 'text-brand-teal bg-brand-teal-light border-brand-teal/10',
    },
    {
      number: '02',
      title: 'Chame no WhatsApp',
      text: 'Clique no botão e envie sua mensagem para a equipe.',
      icon: MessageSquare,
      color: 'text-brand-orange bg-brand-orange-light border-brand-orange/10',
    },
    {
      number: '03',
      title: 'Combine o horário',
      text: 'Consulte disponibilidade e escolha o melhor dia para seu pet.',
      icon: CalendarRange,
      color: 'text-brand-teal bg-brand-teal-light border-brand-teal/10',
    },
    {
      number: '04',
      title: 'Traga seu pet',
      text: 'Nossa equipe recebe seu pet com carinho e cuidado.',
      icon: HeartHandshake,
      color: 'text-brand-orange bg-brand-orange-light border-brand-orange/10',
    },
  ];

  return (
    <section className="py-20 bg-brand-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full select-none">
            Simples & Rápido
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Como agendar pelo WhatsApp
          </h2>
          <p className="font-sans text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Reservar um horário para a higiene ou embelezamento do seu pet leva menos de dois minutos.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop Layouts */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[12%] right-[12%] h-[2px] bg-stone-200/60 z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-stone-100 hover:border-brand-teal/15 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Number Badge */}
                <span className="absolute -top-3.5 right-6 font-display font-black text-4xl text-stone-100 group-hover:text-brand-orange/10 transition-colors pointer-events-none select-none">
                  {step.number}
                </span>

                {/* Step Icon */}
                <div className={`p-4 rounded-2xl border flex items-center justify-center mb-6 shrink-0 shadow-sm ${step.color} group-hover:scale-105 transition-transform duration-300`}>
                  <IconComponent size={24} />
                </div>

                {/* Step Metadata */}
                <h3 className="font-display font-black text-lg text-stone-900 mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-stone-500 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
