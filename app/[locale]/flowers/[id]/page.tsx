import { getFlowerDetails } from '@/entities/flowers';
import { Typography } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const BouquetPage = async ({ params }: { params: { id: string } }) => {
  const { image, name, price } = await getFlowerDetails(params.id);
  const t = await getTranslations('flower_card');

  return (
    <div className="container mx-auto flex flex-1">
      <div className="bg-chart-1 flex h-fit w-full rounded-lg p-3">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          width={200}
          height={200}
          objectFit="cover"
          className="rounded-sm"
        />

        <div className="p-4">
          <Typography className="text-xl font-semibold text-white">
            {name}
          </Typography>
          <Typography className="mt-2 font-bold text-white">{`${price.toFixed(2)} ₴`}</Typography>
          <button className="mt-4 w-full rounded bg-pink-600 px-4 py-2 text-white transition duration-300 hover:bg-pink-700">
            {t('add_to_cart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BouquetPage;
