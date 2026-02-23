import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product, products } from "@/data/products";
import { getPrice } from "../contextProvider/PriceContext";
import { useEffect, useState } from "react";
import { Loader } from "../common/reusableComponents";
import { CalculateLatestPrice } from "../common/productInfoConverter";

const FeaturedSection = () => {
  const [loading, setLoading] = useState(true);

  const featured = products.filter((p) => p.isFeatured);

  const priceData = getPrice();

  useEffect(() => {
    if (priceData && Object.entries(priceData).length > 0) {
      setLoading(false);
    }
  }, [priceData]);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">
            Handpicked
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Featured Collections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  {loading ? (
                    <Loader />
                  ) : (
                    <p className="font-sans font-semibold text-primary">
                      ₹
                      {CalculateLatestPrice(priceData, product).toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-primary px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary rounded hover:bg-primary/10 transition-all duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
