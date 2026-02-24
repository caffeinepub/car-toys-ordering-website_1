import { useState } from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import OrderForm from '../components/OrderForm';
import OrderSummary from '../components/OrderSummary';

export default function OrderPage() {
  const { productId } = useParams({ from: '/order/$productId' });
  const [quantity, setQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Find product by ID
  const product = mockProducts.find((p) => p.id.toString() === productId);

  if (!product) {
    return (
      <div className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded font-display font-bold hover:bg-accent/90 transition-all"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleOrderSuccess = () => {
    // Generate mock order number
    const orderNum = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setOrderNumber(orderNum);
    setOrderSuccess(true);
    // Reset quantity
    setQuantity(1);
  };

  const handlePlaceAnotherOrder = () => {
    setOrderSuccess(false);
    setOrderNumber('');
  };

  if (orderSuccess) {
    return (
      <div className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-card border border-border rounded-lg p-8 shadow-premium text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
              </div>
            </div>
            
            <h1 className="font-display text-4xl font-bold mb-4">
              ORDER <span className="text-accent">CONFIRMED!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your order. Your premium car toy is on its way!
            </p>

            <div className="bg-background border border-border rounded-lg p-6 mb-8 text-left">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                  <p className="font-display font-bold text-lg">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                  <p className="font-display font-bold text-lg">7-10 Business Days</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Order Details</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={`/assets/generated/${product.image}`}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-display font-bold">{product.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {quantity}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded font-display font-bold hover:bg-accent/90 transition-all"
              >
                Continue Shopping
              </Link>
              <button
                onClick={handlePlaceAnotherOrder}
                className="inline-flex items-center justify-center px-6 py-3 bg-background border border-border text-foreground rounded font-display font-bold hover:bg-muted transition-all"
              >
                Place Another Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/products"
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8 font-display font-bold"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Continue Shopping
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4">
            COMPLETE YOUR <span className="text-accent">ORDER</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You're one step away from owning this premium car toy
          </p>
        </div>

        {/* Product Details Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-lg p-6 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src={`/assets/generated/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-display text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="font-display text-4xl font-bold text-accent">
                    ${(Number(product.price) / 100).toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">per unit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Form and Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <OrderForm
              product={product}
              quantity={quantity}
              onQuantityChange={setQuantity}
              onOrderSuccess={handleOrderSuccess}
            />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}
