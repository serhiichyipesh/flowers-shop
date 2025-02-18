'use client';

import { SUPPORTED_LANGUAGES } from '@/shared/config';
import type { TLocaleParams } from '@/shared/models';
import {
  Button,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui';
import { Tooltip } from '@radix-ui/react-tooltip';
// eslint-disable-next-line no-restricted-imports
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const LanguageSwitcher = ({ locale }: TLocaleParams) => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = useCallback(
    (newLocale: string) => {
      const segments = pathname.split('/');

      segments[1] = newLocale;

      const newPath = segments.join('/');

      router.replace(newPath);
    },
    [pathname, router]
  );

  return (
    <div className="absolute top-2 right-2 flex space-x-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="text-md font-inter font-bold" variant="link">
              {locale?.toUpperCase() || 'UA'}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="px-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <div
                key={lang}
                onClick={() => switchLanguage(lang)}
                className="hover:bg-secondary cursor-pointer rounded-sm px-6 py-2 hover:text-white"
              >
                {lang.toUpperCase()}
              </div>
            ))}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
