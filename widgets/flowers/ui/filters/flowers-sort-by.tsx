'use client';

import { useFlowerFilters, type TSortBy } from '@/entities/flowers';
import { cn } from '@/shared/lib';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui';
import { ChevronDownIcon } from 'lucide-react';
import type React from 'react';
import { memo } from 'react';

type TFlowersSortByProps = {
  isOpenedSortBy: boolean;
  setIsOpenedSortBy: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: TSortBy;
  setSortBy: React.Dispatch<React.SetStateAction<TSortBy>>;
};

export const FlowersSortBy = memo(
  ({
    isOpenedSortBy,
    setIsOpenedSortBy,
    sortBy,
    setSortBy,
  }: TFlowersSortByProps) => {
    const { sortByOptions } = useFlowerFilters();

    return (
      <DropdownMenu open={isOpenedSortBy} onOpenChange={setIsOpenedSortBy}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-[180px] justify-between"
            onClick={() => setIsOpenedSortBy((prev) => !prev)}
          >
            {sortByOptions[sortBy]}
            <ChevronDownIcon
              className={cn(
                'ml-2 h-4 w-4 transition-transform duration-300',
                isOpenedSortBy && '-rotate-180'
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.entries(sortByOptions).flatMap(([variant, translation]) => (
            <DropdownMenuItem
              key={variant}
              onClick={() => setSortBy(variant as TSortBy)}
            >
              {translation}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);
