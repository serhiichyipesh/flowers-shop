import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const Hero = async () => {
  const t = await getTranslations('home_page');

  return (
    <div className="bg-mono-4 relative mx-3 h-96">
      <Image
        src="/flowers_bg.webp"
        alt="Beautiful flower arrangement"
        layout="fill"
        objectFit="cover"
        className="rounded-sm brightness-60"
      />
      <div className="absolute top-8 flex h-full justify-start pl-12">
        <div>
          <h2 className="font-inter mt-8 text-4xl font-bold text-white">
            {t('hero_title_1')}
          </h2>
          <h2 className="font-inter mt-2 text-4xl font-bold text-white">
            {t('hero_title_2')}
          </h2>

          <div className="relative top-30">
            <Link
              href="/flowers"
              className="bg-mono-1 hover:bg-mono-2 rounded-full px-26 py-3 text-white transition duration-300"
            >
              {t('shop_now')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
