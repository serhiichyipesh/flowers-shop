import type { SORT_BY_VARIANTS } from './constants';

type TFlowerTag = 'HOT' | 'NEW';

export type TFlower = {
  id: number;
  name: string;
  price: number;
  image: string;
  tags?: TFlowerTag[];
};

export type TSortBy = keyof typeof SORT_BY_VARIANTS;

export type TFlowersFilters = {
  name?: string;
  toPrice?: string;
  fromPrice?: string;
  sortBy?: TSortBy;
};
