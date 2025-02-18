import { FlowerCard } from '@/widgets/flowers';
import { getFlowers } from '@entities/flowers';
import { getTranslations } from 'next-intl/server';

export const ProductList = async () => {
  const flowers = await getFlowers();
  const t = await getTranslations('home_page');

  return (
    <section id="products" className="py-8">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair mb-8 text-center text-4xl font-bold">
          {t('best_sellers_title')}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {flowers.map((flower) => (
            <FlowerCard key={flower.id} {...flower} />
          ))}
        </div>
      </div>
    </section>
  );
};
