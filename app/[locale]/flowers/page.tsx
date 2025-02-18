'use client';

import { getFlowers, useFlowerFilters } from '@/entities/flowers';
import { GRID_VARIANT_CLASSES, LAYOUT_VARIANTS } from '@/shared/config';
import { cn } from '@/shared/lib';
import { type TLayoutVariant, useError, useToast } from '@/shared/models';
import { Button } from '@/shared/ui';
import {
  FlowersList,
  FlowersNameFilter,
  FlowersPricesFilters,
  FlowersSortBy,
} from '@/widgets/flowers';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Grid2x2, Grid3x3 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';

const FlowersPage = () => {
  const {
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
    fromPriceTerm,
    toPriceTerm,
    setPriceFilters,
    isAnyFilterApplied,
  } = useFlowerFilters();

  const t = useTranslations('flowers_page');
  const { toast } = useToast();
  const { ERROR_MESSAGES } = useError();

  const [gridVariant, setGridVariant] = useState<TLayoutVariant>(
    LAYOUT_VARIANTS.medium
  );

  const isFromPriceValid = useMemo(
    () => +fromPrice < +toPrice,
    [fromPrice, toPrice]
  );
  const bothPricesSelected = useMemo(
    () => !!fromPrice && !!toPrice,
    [fromPrice, toPrice]
  );

  const {
    data: flowers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['flowers', searchTerm, fromPriceTerm, toPriceTerm, sortBy],
    queryFn: () =>
      getFlowers({
        name: searchTerm,
        fromPrice: fromPriceTerm,
        toPrice: toPriceTerm,
        sortBy,
      }),
    placeholderData: keepPreviousData,
  });

  const handleApplyPriceFilters = useCallback(() => {
    if (!fromPrice && !toPrice) return;

    if (bothPricesSelected && !isFromPriceValid) {
      setPriceFilters({ fromPriceTerm: fromPrice, toPriceTerm: fromPrice });
      setToPrice(fromPrice);
      return;
    }

    setPriceFilters({ fromPriceTerm: fromPrice, toPriceTerm: toPrice });
  }, [
    fromPrice,
    toPrice,
    isFromPriceValid,
    bothPricesSelected,
    setPriceFilters,
    setToPrice,
  ]);

  useEffect(() => {
    if (bothPricesSelected && !isFromPriceValid) {
      toast({
        title: ERROR_MESSAGES.ERROR_TITLE,
        description: ERROR_MESSAGES.INVALID_PRICE_RANGE,
        variant: 'destructive',
      });
    }
  }, [isFromPriceValid, toast, bothPricesSelected, ERROR_MESSAGES]);

  useEffect(() => {
    if (error) {
      toast({
        title: ERROR_MESSAGES.ERROR_TITLE,
        description: ERROR_MESSAGES.FETCH_ERROR,
        variant: 'destructive',
      });
    }
  }, [error, ERROR_MESSAGES, toast]);

  const isSmallGrid = gridVariant === LAYOUT_VARIANTS.small;

  const listClassName = cn(
    'grid grid-cols-2 gap-6 px-5 transition-all duration-300 md:grid-cols-2',
    GRID_VARIANT_CLASSES[gridVariant]
  );

  return (
    <section className="flex flex-1">
      <div className="container mx-auto rounded-md pt-12 pb-5">
        {/* <Typography className="font-playfair mb-8 text-center text-3xl font-extrabold md:text-4xl">
          {t('title')}
        </Typography> */}

        <div className="mx-6 mb-4 flex gap-4">
          <FlowersNameFilter
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />

          <FlowersSortBy
            sortBy={sortBy}
            setSortBy={setSortBy}
            isOpenedSortBy={isOpenedSortBy}
            setIsOpenedSortBy={setIsOpenedSortBy}
          />

          <div className="flex flex-[2.5] items-center gap-2">
            <FlowersPricesFilters
              toPrice={toPrice}
              fromPrice={fromPrice}
              setToPrice={setToPrice}
              setFromPrice={setFromPrice}
              bothPricesSelected={bothPricesSelected}
            />

            <div className="flex items-center gap-0.5 rounded-md px-0.5">
              <Button
                size="sm"
                variant={isSmallGrid ? 'default' : 'ghost'}
                onClick={() => setGridVariant(LAYOUT_VARIANTS.small)}
              >
                <Grid2x2 />
              </Button>

              <Button
                size="sm"
                variant={isSmallGrid ? 'ghost' : 'default'}
                onClick={() => setGridVariant(LAYOUT_VARIANTS.medium)}
              >
                <Grid3x3 />
              </Button>
            </div>

            <Button
              disabled={
                (!!fromPrice && !!toPrice && !isFromPriceValid) ||
                (!fromPrice && !toPrice)
              }
              onClick={handleApplyPriceFilters}
            >
              {t('apply_price_filters')}
            </Button>

            <Button
              disabled={!isAnyFilterApplied}
              variant="destructive"
              onClick={handleResetFilters}
            >
              {t('reset_filters')}
            </Button>
          </div>
        </div>

        <FlowersList
          flowers={flowers}
          isLoading={isLoading}
          listClassName={listClassName}
        />
      </div>
    </section>
  );
};

export default FlowersPage;
