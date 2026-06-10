/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PetShopConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  address: string;
  city: string;
  hoursWeekdays: string;
  hoursSaturday: string;
  mapLink: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  text: string;
  price: string;
  iconName: string; // Corresponds to key of Lucide Icons
}

export interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: string;
  tag?: 'Novo' | 'Promoção' | 'Mais vendido' | 'Consulte';
  image: string;
}
