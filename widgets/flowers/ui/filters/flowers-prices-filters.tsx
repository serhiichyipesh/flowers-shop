'use client';

import { Input } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import type React from 'react';
import { memo } from 'react';

type TFlowersPricesFiltersProps = {
  fromPrice: string;
  toPrice: string;
  setFromPrice: React.Dispatch<React.SetStateAction<string>>;
  setToPrice: React.Dispatch<React.SetStateAction<string>>;
  bothPricesSelected: boolean;
};

export const FlowersPricesFilters = memo(
  ({
    fromPrice,
    toPrice,
    setFromPrice,
    setToPrice,
    bothPricesSelected,
  }: TFlowersPricesFiltersProps) => {
    const t = useTranslations('flowers_page');

    return (
      <>
        <Input
          value={fromPrice}
          placeholder={t('from_price')}
          onChange={({ target }) => setFromPrice(target.value)}
          className={
            bothPricesSelected && +fromPrice > +toPrice
              ? 'border-destructive'
              : ''
          }
        />
        {'–'}
        <Input
          value={toPrice}
          placeholder={t('to_price')}
          onChange={({ target }) => setToPrice(target.value)}
        />
      </>
    );
  }
);
