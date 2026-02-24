# Specification

## Summary
**Goal:** Add a product ordering page where users can purchase cars from the catalog.

**Planned changes:**
- Create a new order page route at `/order/:productId` displaying product details (image, name, description, price)
- Add an order form with fields for customer information (name, email, phone, shipping address) and quantity selector
- Display order summary showing product, quantity, unit price, and calculated total
- Implement form validation with error messages for invalid or missing fields
- Add "Place Order" button that validates and shows success confirmation with order details
- Update ProductCard "Order Now" button to navigate to the order page for each product
- Add navigation link to return to products page from order page

**User-visible outcome:** Users can click "Order Now" on any car product to access a dedicated order page where they can fill out their information, select quantity, review the order summary with calculated total, and place an order with form validation and confirmation.
