'use client';

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

export const useError = () => {
  const t = useTranslations('errors');

  const ERROR_MESSAGES = useMemo(
    () => ({
      ERROR_TITLE: t('error_title'),
      INVALID_PRICE_RANGE: t('invalid_price_range'),
      FETCH_ERROR: t('oops'),
    }),
    [t]
  );

  return { ERROR_MESSAGES };
};
