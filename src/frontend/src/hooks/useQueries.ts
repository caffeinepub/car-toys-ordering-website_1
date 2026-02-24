import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Category, Product } from '../types/product';
import { getProductsByCategory } from '../data/mockProducts';
import { useActor } from './useActor';
import type { UserProfile } from '../backend';

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

// Query to get the authenticated user's profile
export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  // Return custom state that properly reflects actor dependency
  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

// Mutation to save the user's profile
export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.registerAndStoreUser(name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}
