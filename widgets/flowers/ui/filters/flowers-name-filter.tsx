'use client';
import { Input } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import type React from 'react';
import { memo } from 'react';

export const FlowersNameFilter = memo(
  ({ value, onChange }: React.ComponentProps<'input'>) => {
    const t = useTranslations('flowers_page');

    return (
      <Input
        value={value}
        className="flex flex-1"
        placeholder={t('name_title')}
        onChange={onChange}
      />
    );
  }
);
