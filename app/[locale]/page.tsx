import { ProductList } from '@/widgets/flowers';
import { Hero } from '@/widgets/home';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <main className="flex-grow">
        <ProductList />
      </main>
    </div>
  );
}
