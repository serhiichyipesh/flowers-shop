'use client';

import { Link } from '@/i18n/routing';
import type { TLocaleParams } from '@/shared/models';
import { Button } from '@/shared/ui';
import { CircleChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from './language-switcher';

export const Header = ({ locale }: TLocaleParams) => {
  const pathname = usePathname();

  const t = useTranslations('nav_bar');

  const isHome = pathname === `/${locale}`;

  const navLinks = [
    {
      href: '/',
      text: t('home'),
    },
    {
      href: '/flowers',
      text: t('flowers'),
    },
    {
      href: '/#contact',
      text: t('contact'),
    },
  ];

  return (
    <header className="relative z-20">
      <nav className="relative z-10 w-full px-6 py-4">
        <div className="flex flex-col items-center gap-3">
          <div className="absolute top-2 left-2 flex flex-row items-center gap-2">
            {/* <ThemeToggle /> */}

            {!isHome && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.history.back()}
              >
                <CircleChevronLeft />
              </Button>
            )}
          </div>

          <div className="flex w-full justify-center">
            <Link href="/" className="font-playfair text-2xl font-bold italic">
              {"Natalia's Flower Shop"}
            </Link>
          </div>

          <LanguageSwitcher locale={locale} />

          <div className="flex w-full justify-center">
            {navLinks.map(({ href, text }) => (
              <Link key={href} href={href}>
                <Button variant="link">{text}</Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
