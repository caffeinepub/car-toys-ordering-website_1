import { Product } from '../types/product';

interface OrderSummaryProps {
  product: Product;
  quantity: number;
}

export default function OrderSummary({ product, quantity }: OrderSummaryProps) {
  const unitPrice = Number(product.price) / 100;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-premium sticky top-24">
      <h2 className="font-display text-2xl font-bold mb-6">ORDER SUMMARY</h2>
      
      {/* Product Image and Name */}
      <div className="mb-6">
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted mb-4">
          <img
            src={`/assets/generated/${product.image}`}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display font-bold text-lg">{product.name}</h3>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-4 border-t border-border pt-4">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Unit Price</span>
          <span className="font-display font-bold">${unitPrice.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Quantity</span>
          <span className="font-display font-bold">{quantity}</span>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="font-display text-lg font-bold">Total</span>
            <span className="font-display text-2xl font-bold text-accent">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start space-x-2">
            <span className="text-accent">✓</span>
            <span>Free shipping on all orders</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-accent">✓</span>
            <span>Secure payment processing</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-accent">✓</span>
            <span>7-10 business days delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
