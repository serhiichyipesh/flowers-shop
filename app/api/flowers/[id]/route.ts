import { flowersBouquets } from '@/entities/flowers';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  return Response.json(flowersBouquets.find((flower) => flower.id === +id));
}
