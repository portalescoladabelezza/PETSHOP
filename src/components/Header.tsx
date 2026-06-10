/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { petShopConfig, getWhatsAppLink } from '../data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const defaultMsg = 'Olá! Vi o site Pet Feliz e gostaria de agendar um serviço para meu pet.';
  const whatsappUrl = getWhatsAppLink(defaultMsg);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Subtitle Badge */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="bg-brand-teal p-2.5 rounded-2xl flex items-center justify-center text-white shadow-md shadow-brand-teal/20 group-hover:scale-105 transition-transform">
              {/* Pet representation badge */}
              <span className="font-display font-black text-xl tracking-tighter">PF</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-stone-900 block leading-tight">
                {petShopConfig.name}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-orange-light text-brand-orange">
                {petShopConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-stone-600 hover:text-brand-teal transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-teal after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop & Mobile Call-to-action Button */}
          <div className="hidden sm:flex items-center">
            <a
              id="cta-header"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold py-3 px-5 rounded-full shadow-lg shadow-brand-teal/10 hover:shadow-brand-teal/25 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <Phone size={16} />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-700 hover:text-brand-teal p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-brand-teal transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Show on very small devices where sm:hidden hides the main header cta */}
            <div className="pt-4 sm:hidden">
              <a
                id="cta-mobile-menu"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-brand-teal hover:bg-brand-teal-hover text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition-transform active:scale-95 text-center"
              >
                <Phone size={18} />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
