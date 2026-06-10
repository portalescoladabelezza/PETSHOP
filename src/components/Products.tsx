/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag } from 'lucide-react';
import { productsList, getWhatsAppLink } from '../data';

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange bg-brand-orange-light px-4 py-1.5 rounded-full select-none">
            Nossa Vitrine Premium
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight">
            Produtos em destaque
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Algumas opções para cuidado, alimentação e bem-estar do seu pet. Compre diretamente pelo WhatsApp e retire em nossa loja.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product) => {
            const messageText = `Olá! Tenho interesse no produto ${product.name} que vi no site Pet Feliz. Ainda está disponível?`;
            const whatsappUrl = getWhatsAppLink(messageText);

            // Determine tag style based on category / tag type
            let tagColorClasses = "bg-stone-100 text-stone-700";
            if (product.tag === "Mais vendido") {
              tagColorClasses = "bg-amber-100 text-amber-800 border-amber-200";
            } else if (product.tag === "Promoção") {
              tagColorClasses = "bg-rose-100 text-rose-800 border-rose-200";
            } else if (product.tag === "Novo") {
              tagColorClasses = "bg-emerald-100 text-emerald-800 border-emerald-200";
            }

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-brand-beige border border-stone-100 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-brand-teal/20 hover:shadow-xl transition-all duration-300"
              >
                
                {/* Image Container with Badge */}
                <div className="relative aspect-4/3 bg-stone-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <span className={`absolute top-4 left-4 inline-flex items-center px-3 py-1 border rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10 ${tagColorClasses}`}>
                      {product.tag}
                    </span>
                  )}
                  {/* Category overlay */}
                  <span className="absolute bottom-4 left-4 bg-stone-900/40 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="mb-6">
                    <h3 className="font-display font-black text-lg text-stone-900 mb-2 leading-tight group-hover:text-brand-teal transition-colors duration-200">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider font-sans">Preço</span>
                      <span className="font-display font-semibold text-xl text-stone-800">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Button - full width, nowrap text, no other buttons */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-brand-teal/5 hover:shadow-brand-teal/20 transition-all duration-300 text-sm whitespace-nowrap"
                  >
                    <ShoppingBag size={16} />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Help Banner beneath products */}
        <div className="mt-16 bg-brand-orange-light/40 border border-brand-orange/10 rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left gap-4">
            <div className="bg-brand-orange text-white p-4 rounded-2xl flex items-center justify-center shrink-0">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-stone-900 mb-1">
                Procurando outro produto ou marca específica?
              </h4>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Temos medicamentos, rações especiais, acessórios diversos, brinquedos e pacotes promocionais mensais. Chame no WhatsApp e tire suas dúvidas com nossos atendentes!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
