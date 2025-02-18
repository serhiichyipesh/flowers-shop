'use client';

import type { TFlower } from '@/entities/flowers';
import { useTranslations } from 'next-intl';

import { Skeleton, Typography } from '@/shared/ui';
import { memo } from 'react';
import { FlowerCard } from './flower-card';

type TFlowersListProps = {
  flowers: TFlower[];
  listClassName: string;
  isLoading: boolean;
};

export const FlowersList = memo(
  ({ flowers, listClassName, isLoading }: TFlowersListProps) => {
    const t = useTranslations('flowers_page');

    if (flowers.length) {
      return (
        <div className={listClassName}>
          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id + flower.name + flower.price}
              {...flower}
            />
          ))}
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className={listClassName}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-[336px] w-full" />
          ))}
        </div>
      );
    }

    return (
      <Typography className="text-center text-xl font-semibold">
        {t('no_flowers_found')}
      </Typography>
    );
  }
);
