import type { TFlower } from './types';

export const flowersBouquets: TFlower[] = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 29.99,
    image: '/flowers.png',
  },
  {
    id: 2,
    name: 'Tulip Arrangement',
    price: 34.99,
    image: '/flowers.png',
  },
  {
    id: 3,
    name: 'Sunflower Bunch',
    price: 24.99,
    image: '/flowers.png',
  },
  {
    id: 4,
    name: 'Lily Vase',
    price: 39.99,
    image: '/flowers.png',
  },
  {
    id: 5,
    name: 'Lily Vase',
    price: 39.99,
    image: '/flowers.png',
  },
  {
    id: 6,
    name: 'Lily Vase',
    price: 39.99,
    image: '/flowers.png',
  },
  {
    id: 7,
    name: 'Lily Vase',
    price: 39.99,
    image: '/flowers.png',
  },
];

export const SORT_BY_VARIANTS = {
  RELEVANT: 'RELEVANT',
  FROM_EXPENSIVE: 'FROM_EXPENSIVE',
  FROM_CHEAP: 'FROM_CHEAP',
} as const;
