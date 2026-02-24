import { Category } from '../types/product';
import { useGetProductsByCategory } from '../hooks/useQueries';
import ProductCategory from '../components/ProductCategory';
import { Loader2 } from 'lucide-react';

export default function ProductsPage() {
  const sportCarsQuery = useGetProductsByCategory(Category.SportCars);
  const hyperSportCarsQuery = useGetProductsByCategory(Category.HyperSportCars);
  const f1CarsQuery = useGetProductsByCategory(Category.F1Cars);

  const isLoading = sportCarsQuery.isLoading || hyperSportCarsQuery.isLoading || f1CarsQuery.isLoading;
  const hasError = sportCarsQuery.isError || hyperSportCarsQuery.isError || f1CarsQuery.isError;

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-accent mx-auto mb-4" />
          <p className="text-muted-foreground font-semibold">Loading collection...</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive font-semibold text-lg">Failed to load products</p>
          <p className="text-muted-foreground mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4">
            OUR <span className="text-accent">COLLECTION</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our premium selection of die-cast car toys, meticulously crafted for collectors and enthusiasts
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-20">
          <ProductCategory
            title="SPORT CARS"
            description="High-performance sports cars with stunning detail and authentic styling"
            products={sportCarsQuery.data || []}
            categoryColor="accent"
          />

          <ProductCategory
            title="HYPER SPORT CARS"
            description="Ultra-exclusive hypercars representing the pinnacle of automotive engineering"
            products={hyperSportCarsQuery.data || []}
            categoryColor="gold"
          />

          <ProductCategory
            title="F1 RACING CARS"
            description="Formula 1 racing legends with precision engineering and racing liveries"
            products={f1CarsQuery.data || []}
            categoryColor="silver"
          />
        </div>
      </div>
    </div>
  );
}
