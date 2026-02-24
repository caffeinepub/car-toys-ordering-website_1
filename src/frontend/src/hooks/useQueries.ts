import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Category, Product } from '../types/product';
import { getProductsByCategory } from '../data/mockProducts';

// Query to get products by category (using mock data since backend is empty)
export function useGetProductsByCategory(category: Category) {
  return useQuery<Product[]>({
    queryKey: ['products', category],
    queryFn: async () => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      return getProductsByCategory(category);
    },
  });
}

// Mutation to submit contact inquiry (mock implementation since backend is empty)
export function useSubmitInquiry() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Log the inquiry (in real app, this would go to backend)
      console.log('Contact inquiry submitted:', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
