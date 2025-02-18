'use client';

import type { TFlower } from '@/entities/flowers';
import { Link } from '@/i18n/routing';
import { Button } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { memo } from 'react';

export const FlowerCard = memo(({ id, image, name, price }: TFlower) => {
  const t = useTranslations('flower_card');

  return (
    <div className="overflow-hidden rounded-sm bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <Link href={`/flowers/${id}`}>
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          width={300}
          height={300}
          objectFit="cover"
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="mt-2 text-gray-600">{`${price.toFixed(2)} ₴`}</p>

          <Button className="mt-4 w-full" variant="card">
            {t('add_to_cart')}
          </Button>
        </div>
      </Link>
    </div>
  );
});
