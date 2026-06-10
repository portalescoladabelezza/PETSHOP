/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bath, Scissors, Flame, ShoppingBag, PhoneCall } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    { text: 'Banho', icon: Bath },
    { text: 'Tosa', icon: Scissors },
    { text: 'Hidratação', icon: Flame },
    { text: 'Produtos Pet', icon: ShoppingBag },
    { text: 'Agendamento pelo WhatsApp', icon: PhoneCall },
  ];

  return (
    <section className="bg-brand-teal text-white py-5 shadow-inner overflow-hidden select-none relative">
      {/* Dynamic flowing bar wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between text-sm md:text-base font-bold tracking-wide uppercase font-display">
          
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center space-x-2.5 shrink-0 bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full transition-colors duration-200"
              >
                <IconComponent size={20} className="text-brand-orange-light animate-pulse" />
                <span>{item.text}</span>
                {index < highlights.length - 1 && (
                  <span className="hidden md:inline-block ml-4 text-brand-orange text-lg font-black">•</span>
                )}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
