import { Link } from '@tanstack/react-router';
import { ArrowRight, Zap, Shield, Trophy } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-banner.dim_1920x600.png"
            alt="Premium Car Toys Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              PRECISION
              <br />
              <span className="text-accent">ENGINEERED</span>
              <br />
              MINIATURES
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-medium leading-relaxed">
              Discover our exclusive collection of premium die-cast car toys. From sport cars to F1 racers, experience automotive excellence in miniature form.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-all shadow-premium hover:shadow-premium-lg group"
              >
                EXPLORE COLLECTION
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold border-2 border-foreground text-foreground rounded hover:bg-foreground hover:text-background transition-all"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              WHY CHOOSE <span className="text-accent">CARZZZ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality, authentic details, and collector-grade craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-background border border-border hover:border-accent transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">PREMIUM QUALITY</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meticulously crafted die-cast models with authentic details and superior finish
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-background border border-border hover:border-accent transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">EXCLUSIVE COLLECTION</h3>
              <p className="text-muted-foreground leading-relaxed">
                Curated selection of sport cars, hyper cars, and F1 racing legends
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-background border border-border hover:border-accent transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">COLLECTOR GRADE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Limited editions and authentic replicas perfect for serious collectors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            READY TO START YOUR <span className="text-accent">COLLECTION?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our complete catalog of premium car toys and find your next prized possession
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-foreground text-background rounded hover:bg-foreground/90 transition-all shadow-premium hover:shadow-premium-lg group"
          >
            VIEW ALL PRODUCTS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
