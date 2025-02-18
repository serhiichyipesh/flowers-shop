import {
  flowersBouquets,
  SORT_BY_VARIANTS,
  type TFlowersFilters,
} from '@/entities/flowers';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(flowersBouquets);
}

export async function POST(req: Request) {
  const body: TFlowersFilters = await req.json();

  let filteredFlowers = flowersBouquets.filter((flower) => {
    if (body.name) {
      return flower.name.toLowerCase().includes(body.name.toLowerCase());
    }

    if (body.fromPrice && body.toPrice) {
      return flower.price >= +body.fromPrice && flower.price <= +body.toPrice;
    }

    if (body.toPrice) {
      return flower.price <= +body.toPrice;
    }

    if (body.fromPrice) {
      return flower.price >= +body.fromPrice;
    }

    return true;
  });

  if (body.sortBy) {
    filteredFlowers = filteredFlowers.sort((a, b) => {
      if (body.sortBy === SORT_BY_VARIANTS.FROM_EXPENSIVE) {
        return b.price - a.price;
      }

      if (body.sortBy === SORT_BY_VARIANTS.FROM_CHEAP) {
        return a.price - b.price;
      }

      return 0;
    });
  }

  return NextResponse.json({ message: 'ok', data: filteredFlowers });
}
