import type { LAYOUT_VARIANTS } from '../config';

export type TSupportedLanguage = 'en' | 'ru' | 'ua';

export type TLocaleParams = { locale: TSupportedLanguage };

export type TLayoutVariant =
  (typeof LAYOUT_VARIANTS)[keyof typeof LAYOUT_VARIANTS];
