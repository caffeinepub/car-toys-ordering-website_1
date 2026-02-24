import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductCategoryProps {
  title: string;
  description: string;
  products: Product[];
  categoryColor?: 'accent' | 'gold' | 'silver';
}

export default function ProductCategory({ title, description, products, categoryColor = 'accent' }: ProductCategoryProps) {
  const colorClasses = {
    accent: 'text-accent border-accent',
    gold: 'text-gold border-gold',
    silver: 'text-silver border-silver',
  };

  return (
    <section className="animate-fade-in">
      <div className="mb-10">
        <div className={`inline-block border-l-4 ${colorClasses[categoryColor]} pl-4 mb-4`}>
          <h2 className={`font-display text-3xl sm:text-4xl font-black ${colorClasses[categoryColor].split(' ')[0]}`}>
            {title}
          </h2>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 bg-card border border-border rounded-lg">
          <p className="text-muted-foreground">No products available in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id.toString()} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
