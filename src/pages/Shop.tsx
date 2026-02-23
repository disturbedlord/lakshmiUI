import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories, metalTypes, occasions } from "@/data/products";
import { getPrice } from "@/components/contextProvider/PriceContext";
import { CalculateLatestPrice } from "@/components/common/productInfoConverter";

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedMetal, setSelectedMetal] = useState<string>("");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);

  const priceData = getPrice();

  useEffect(() => {
    if (priceData && Object.entries(priceData).length > 0) {
      setLoading(false);
    }
  }, [priceData]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory)
      result = result.filter((p) => p.category === selectedCategory);
    if (selectedMetal)
      result = result.filter((p) => p.metalType === selectedMetal);
    if (selectedOccasion)
      result = result.filter((p) => p.occasion === selectedOccasion);
    return result;
  }, [selectedCategory, selectedMetal, selectedOccasion]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedMetal("");
    setSelectedOccasion("");
  };

  const FilterChip = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 border ${
        active
          ? "gold-gradient text-primary-foreground border-primary"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
              Explore
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-1">
              Our Collection
            </h1>
          </motion.div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 mb-4 text-sm font-sans text-primary"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          {/* Filters */}
          <div
            className={`${showFilters ? "block" : "hidden"} md:block mb-8 space-y-4`}
          >
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={selectedCategory === c}
                    onClick={() =>
                      setSelectedCategory(selectedCategory === c ? "" : c)
                    }
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Metal Type
              </p>
              <div className="flex flex-wrap gap-2">
                {metalTypes.map((m) => (
                  <FilterChip
                    key={m}
                    label={m}
                    active={selectedMetal === m}
                    onClick={() =>
                      setSelectedMetal(selectedMetal === m ? "" : m)
                    }
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Occasion
              </p>
              <div className="flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <FilterChip
                    key={o}
                    label={o}
                    active={selectedOccasion === o}
                    onClick={() =>
                      setSelectedOccasion(selectedOccasion === o ? "" : o)
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {(selectedCategory || selectedMetal || selectedOccasion) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-xs font-sans text-primary hover:underline"
                >
                  <X className="w-3 h-3" /> Clear All
                </button>
              )}
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border gold-glow-hover transition-all duration-500"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 gold-gradient text-primary-foreground text-[10px] font-sans font-bold tracking-wider uppercase px-3 py-1 rounded">
                        New
                      </span>
                    )}
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-sans tracking-wider uppercase text-primary mb-1">
                      {product.metalType} • {product.purity}
                    </p>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-sans font-semibold text-primary">
                        ₹
                        {CalculateLatestPrice(
                          priceData,
                          product,
                        ).toLocaleString("en-IN")}
                      </p>
                      <span className="text-[10px] font-sans text-muted-foreground">
                        {product.weight}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-body text-lg">
                No products found matching your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-primary font-sans text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
