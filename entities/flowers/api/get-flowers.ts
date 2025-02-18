import { fetcher } from '@/shared/lib';
import type { TFlower, TFlowersFilters } from '../model';

export const getFlowers = async (filters?: TFlowersFilters) => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/flowers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filters ?? {}),
  });

  const flowers = await res.json();

  return flowers.data as TFlower[];
};
