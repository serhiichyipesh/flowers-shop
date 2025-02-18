import { SUPPORTED_LANGUAGES } from '@/shared/config';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: SUPPORTED_LANGUAGES,

  defaultLocale: 'ua',
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
