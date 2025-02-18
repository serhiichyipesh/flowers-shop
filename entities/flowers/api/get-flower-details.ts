import { fetcher } from '@/shared/lib';
import { notFound } from 'next/navigation';
import type { TFlower } from '../model';

export const getFlowerDetails = async (id: string) => {
  const res = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/flowers/${id}`);

  if (!res.ok) {
    notFound();
  }

  const flower: TFlower = await res.json();

  return flower;
};
