import { useState } from 'react';
import { Minus, Plus, Loader2 } from 'lucide-react';
import { Product } from '../types/product';
import { useOrderForm } from '../hooks/useOrderForm';

interface OrderFormProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onOrderSuccess: () => void;
}

export default function OrderForm({ product, quantity, onQuantityChange, onOrderSuccess }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formData, errors, handleChange, handleSubmit, resetForm } = useOrderForm();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    onQuantityChange(newQuantity);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = handleSubmit(e);
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    resetForm();
    onOrderSuccess();
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8 shadow-premium">
      <h2 className="font-display text-2xl font-bold mb-6">SHIPPING INFORMATION</h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Customer Name */}
        <div>
          <label htmlFor="name" className="block font-display font-bold mb-2">
            FULL NAME *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
              errors.name ? 'border-destructive' : 'border-input'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-display font-bold mb-2">
            EMAIL ADDRESS *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
              errors.email ? 'border-destructive' : 'border-input'
            }`}
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-display font-bold mb-2">
            PHONE NUMBER *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
              errors.phone ? 'border-destructive' : 'border-input'
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
          )}
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="street" className="block font-display font-bold mb-2">
            STREET ADDRESS *
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
              errors.street ? 'border-destructive' : 'border-input'
            }`}
            placeholder="123 Main Street, Apt 4B"
          />
          {errors.street && (
            <p className="mt-1 text-sm text-destructive">{errors.street}</p>
          )}
        </div>

        {/* City and Postal Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block font-display font-bold mb-2">
              CITY *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                errors.city ? 'border-destructive' : 'border-input'
              }`}
              placeholder="New York"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-destructive">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="postalCode" className="block font-display font-bold mb-2">
              POSTAL CODE *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                errors.postalCode ? 'border-destructive' : 'border-input'
              }`}
              placeholder="10001"
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-destructive">{errors.postalCode}</p>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block font-display font-bold mb-2">
            COUNTRY *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-background border rounded focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
              errors.country ? 'border-destructive' : 'border-input'
            }`}
            placeholder="United States"
          />
          {errors.country && (
            <p className="mt-1 text-sm text-destructive">{errors.country}</p>
          )}
        </div>

        {/* Quantity Selector */}
        <div>
          <label className="block font-display font-bold mb-2">
            QUANTITY
          </label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              className="w-12 h-12 flex items-center justify-center bg-background border border-input rounded hover:bg-muted transition-all"
              disabled={quantity <= 1}
            >
              <Minus className="h-5 w-5" />
            </button>
            <span className="font-display text-2xl font-bold w-16 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              className="w-12 h-12 flex items-center justify-center bg-background border border-input rounded hover:bg-muted transition-all"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 font-display font-bold bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-all shadow-premium hover:shadow-premium-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              PROCESSING ORDER...
            </>
          ) : (
            'PLACE ORDER'
          )}
        </button>
      </form>
    </div>
  );
}
