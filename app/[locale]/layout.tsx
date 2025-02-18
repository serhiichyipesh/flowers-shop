import './globals.css';

import React from 'react';

import { Inter, Playfair_Display } from 'next/font/google';

import { routing } from '@/i18n/routing';
import { QueryProvider, ThemeProvider } from '@shared/ui';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { TLocaleParams } from '@/shared/models';
import { Toaster } from '@/shared/ui';
import { Footer, Header } from '@/widgets/home';
import { NextIntlClientProvider } from 'next-intl';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Flowers By Natalia',
  description: 'Flowers Kharkiv',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: TLocaleParams;
}>) {
  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="flex min-h-screen flex-1 flex-col justify-between">
              <Header locale={locale} />

              <QueryProvider>{children}</QueryProvider>

              <Toaster />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
