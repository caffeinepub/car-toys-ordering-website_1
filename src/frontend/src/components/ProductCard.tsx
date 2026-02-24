import { Link } from '@tanstack/react-router';
import { Product } from '../types/product';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Get image path from product data
const getImagePath = (product: Product): string => {
  // Use the image field if available, otherwise fallback to a placeholder
  if (product.image) {
    return `/assets/generated/${product.image}`;
  }
  
  // Fallback to a default image if no image is specified
  return '/assets/generated/sport-car-1.dim_800x600.png';
};

export default function ProductCard({ product }: ProductCardProps) {
  const imagePath = getImagePath(product);
  const priceFormatted = `$${(Number(product.price) / 100).toFixed(2)}`;

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 shadow-premium hover:shadow-premium-lg">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imagePath}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/assets/generated/sport-car-1.dim_800x600.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-accent">
            {priceFormatted}
          </span>
          <Link
            to="/order/$productId"
            params={{ productId: product.id.toString() }}
            className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground rounded font-bold text-sm hover:bg-accent/90 transition-all group/btn"
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            ORDER
          </Link>
        </div>
      </div>
    </div>
  );
}
