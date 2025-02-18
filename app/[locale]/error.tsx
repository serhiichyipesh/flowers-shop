'use client';

import { useRouter } from '@/i18n/routing';
import { Button } from '@/shared/ui';
import { useTranslations } from 'next-intl';

export default function Error() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{t('errors.something_went_wrong')}</h2>
      <Button onClick={() => router.back()}>{t('common.go_back')}</Button>
    </main>
  );
}
