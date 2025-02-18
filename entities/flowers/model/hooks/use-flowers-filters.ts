'use client';

import { useDebounce } from '@/shared/models';
import { useTranslations } from 'next-intl';
import { useCallback, useMemo, useState } from 'react';
import { SORT_BY_VARIANTS } from '../constants';
import type { TSortBy } from '../types';

export const useFlowerFilters = () => {
  const t = useTranslations('flowers_page');

  const [search, setSearch] = useState('');
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [sortBy, setSortBy] = useState<TSortBy>(SORT_BY_VARIANTS.RELEVANT);
  const [isOpenedSortBy, setIsOpenedSortBy] = useState(false);

  const initialPriceFiltersState = useMemo(
    () => ({
      fromPriceTerm: '',
      toPriceTerm: '',
    }),
    []
  );
  const [{ fromPriceTerm, toPriceTerm }, setPriceFilters] = useState(
    initialPriceFiltersState
  );

  const { debouncedValue: searchTerm } = useDebounce(search);

  const sortByOptions = useMemo(
    () => ({
      [SORT_BY_VARIANTS.RELEVANT]: t('by_relevancy'),
      [SORT_BY_VARIANTS.FROM_EXPENSIVE]: t('from_expensive'),
      [SORT_BY_VARIANTS.FROM_CHEAP]: t('from_cheap'),
    }),
    [t]
  );

  const handleResetFilters = useCallback(() => {
    setSearch('');
    setFromPrice('');
    setToPrice('');
    setPriceFilters(initialPriceFiltersState);
    setSortBy(SORT_BY_VARIANTS.RELEVANT);
  }, [initialPriceFiltersState]);

  const isSortedByRelevant = useMemo(
    () => sortBy === SORT_BY_VARIANTS.RELEVANT,
    [sortBy]
  );

  const isAnyFilterApplied = useMemo(
    () => !!search || !!fromPriceTerm || !!toPriceTerm || !isSortedByRelevant,
    [search, fromPriceTerm, toPriceTerm, isSortedByRelevant]
  );

  return {
    search,
    setSearch,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    sortBy,
    setSortBy,
    isOpenedSortBy,
    setIsOpenedSortBy,
    searchTerm,
    handleResetFilters,
    sortByOptions,
    fromPriceTerm,
    toPriceTerm,
    setPriceFilters,
    isAnyFilterApplied,
  };
};
