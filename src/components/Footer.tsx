/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { petShopConfig, getWhatsAppLink } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const defaultMsg = 'Olá! Vi o site Pet Feliz e gostaria de agendar um serviço para meu pet.';
  const whatsappUrl = getWhatsAppLink(defaultMsg);

  return (
    <footer className="bg-stone-900 text-stone-200 pt-16 pb-12 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <a href="#inicio" className="inline-flex items-center space-x-3 group">
              <div className="bg-brand-teal p-2.5 rounded-xl text-white font-display font-black text-lg">
                PF
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight leading-tight block">
                  {petShopConfig.name}
                </span>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                  {petShopConfig.tagline}
                </span>
              </div>
            </a>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Cuidado, higiene e carinho para cães e gatos. Oferecendo sempre os melhores tratamentos estéticos e produtos de primeira linha para o seu pet especial.
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-4">
              <a
                href={petShopConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-brand-teal text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-200"
                aria-label="Acessar Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={petShopConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-brand-teal text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-200"
                aria-label="Acessar Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-brand-teal text-stone-300 hover:text-white p-2.5 rounded-xl transition-all duration-200"
                aria-label="Acessar WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">Link rápidos</h4>
            <nav className="flex flex-col space-y-2.5 text-sm text-stone-400">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-teal transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4 text-sm text-stone-400">
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase">Atendimento</h4>
            <div className="space-y-3">
              <p className="leading-relaxed">
                <strong className="text-white block text-xs uppercase tracking-wider font-sans mb-0.5">Endereço</strong>
                {petShopConfig.address} <br />
                {petShopConfig.city}
              </p>
              <p>
                <strong className="text-white block text-xs uppercase tracking-wider font-sans mb-0.5">Horário</strong>
                {petShopConfig.hoursWeekdays} <br />
                {petShopConfig.hoursSaturday}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Credit bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <p>
            &copy; {currentYear} {petShopConfig.name} {petShopConfig.tagline}. Todos os direitos reservados.
          </p>
          <p className="flex items-center space-x-1">
            <span>Desenvolvido com carinho para o bem-estar animal</span>
            <Heart size={12} className="text-brand-orange fill-brand-orange animate-pulse" />
          </p>
        </div>

      </div>
    </footer>
  );
}
