import type { TSupportedLanguage } from '../models';

export const SUPPORTED_LANGUAGES: TSupportedLanguage[] = ['en', 'ru', 'ua'];

export const LAYOUT_VARIANTS = {
  small: 'small',
  medium: 'medium',
} as const;

export const GRID_VARIANT_CLASSES = {
  [LAYOUT_VARIANTS.small]: 'lg:grid-cols-3',
  [LAYOUT_VARIANTS.medium]: 'lg:grid-cols-4',
};
