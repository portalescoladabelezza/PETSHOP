/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PetShopConfig, ServiceItem, ProductItem } from './types';

// ==========================================
// 1. CONFIGURAÇÕES GERAIS EDITÁVEIS
// ==========================================
export const petShopConfig: PetShopConfig = {
  name: "Pet Feliz",
  tagline: "Banho & Tosa",
  whatsappNumber: "5521969060505", // Número fornecido nas instruções
  instagramUrl: "https://instagram.com", // Link amigável para Instagram
  facebookUrl: "https://facebook.com", // Link amigável para Facebook
  address: "Rua Exemplo, 123 — Centro",
  city: "Nova Iguaçu — RJ",
  hoursWeekdays: "Segunda a sexta: 9h às 18h",
  hoursSaturday: "Sábado: 9h às 14h",
  mapLink: "https://maps.google.com/?q=Rua+Exemplo,+123+-+Centro,+Nova+Iguaçu+-+RJ", // Link fictício editável do Google Maps
};

// ==========================================
// 2. LISTA DE SERVIÇOS (FÁCIL EDITAR)
// ==========================================
export const servicesList: ServiceItem[] = [
  {
    id: 1,
    name: "Banho completo",
    text: "Higienização com produtos adequados para deixar seu pet cheiroso e confortável.",
    price: "A partir de R$ 45,00",
    iconName: "Bath"
  },
  {
    id: 2,
    name: "Tosa higiênica",
    text: "Cuidado essencial para manter a higiene e o bem-estar do seu pet.",
    price: "A partir de R$ 35,00",
    iconName: "Scissors"
  },
  {
    id: 3,
    name: "Tosa na máquina",
    text: "Corte prático para manter o pelo do seu pet mais leve e fácil de cuidar.",
    price: "A partir de R$ 55,00",
    iconName: "Sparkles"
  },
  {
    id: 4,
    name: "Hidratação pet",
    text: "Tratamento para deixar os pelos mais macios, bonitos e saudáveis.",
    price: "A partir de R$ 40,00",
    iconName: "Flame" // can represent moisture / gentle warmth or we map to other icon
  },
  {
    id: 5,
    name: "Corte de unhas",
    text: "Serviço rápido para mais conforto e segurança no dia a dia.",
    price: "A partir de R$ 15,00",
    iconName: "CheckCircle"
  },
  {
    id: 6,
    name: "Limpeza de ouvidos",
    text: "Cuidado delicado para ajudar na higiene do seu pet.",
    price: "Consulte",
    iconName: "ShieldAlert"
  }
];

// ==========================================
// 3. LISTA DE PRODUTOS EM DESTAQUE (6 UNIDADES)
// ==========================================
export const productsList: ProductItem[] = [
  {
    id: 1,
    name: "Ração Premium Cães 10kg",
    category: "Alimentação",
    price: "R$ 139,90",
    tag: "Mais vendido",
    // Unsplash: premium kibble in bowl or healthy food
    image: "https://images.unsplash.com/photo-1589724155133-c247dc72a721?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Shampoo Pet Neutro",
    category: "Higiene",
    price: "R$ 29,90",
    tag: "Novo",
    // Unsplash: cute wet dog having bubble bath
    image: "https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Coleira Ajustável",
    category: "Acessórios",
    price: "R$ 24,90",
    tag: "Promoção",
    // Unsplash: stylish dog collar or leash accessory
    image: "https://images.unsplash.com/photo-1591946614421-1fbf521c8a7e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Brinquedo Mordedor",
    category: "Brinquedos",
    price: "R$ 19,90",
    tag: "Novo",
    // Unsplash: dog holding colorful rope or ball
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Areia Higiênica Gatos",
    category: "Higiene",
    price: "R$ 34,90",
    tag: "Mais vendido",
    // Unsplash: gorgeous kitten looking proud
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Petisco Natural",
    category: "Alimentação",
    price: "R$ 15,90",
    tag: "Promoção",
    // Unsplash: happy dogs receiving a delicious treat
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600"
  }
];

// ==========================================
// 4. FUNÇÃO AUXILIAR PARA GERAR LINK DO WHATSAPP
// ==========================================
export function getWhatsAppLink(text: string): string {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${petShopConfig.whatsappNumber}?text=${encodedText}`;
}
