import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Shield,
  Award,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { CalculateLatestPrice } from "@/components/common/productInfoConverter";
import { useEffect, useState } from "react";
import { getPrice } from "@/components/contextProvider/PriceContext";
import { Loader } from "@/components/common/reusableComponents";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [loading, setLoading] = useState(true);
  const priceData = getPrice();

  useEffect(() => {
    if (priceData && Object.entries(priceData).length > 0) {
      setLoading(false);
    }
  }, [priceData]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-primary font-sans text-sm hover:underline"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden border border-border gold-glow group cursor-zoom-in">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-150"
                />
              </div>
              {product.isNew && (
                <span className="absolute top-4 left-4 gold-gradient text-primary-foreground text-xs font-sans font-bold tracking-wider uppercase px-4 py-1.5 rounded">
                  New Arrival
                </span>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-2">
                {product.metalType} • {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {product.name}
              </h1>
              {loading ? (
                <Loader />
              ) : (
                <p className="text-2xl font-sans font-bold text-primary mb-6">
                  ₹
                  {CalculateLatestPrice(priceData, product).toLocaleString(
                    "en-IN",
                  )}
                </p>
              )}
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-[10px] font-sans tracking-wider uppercase text-muted-foreground mb-1">
                    Weight
                  </p>
                  <p className="font-sans font-semibold text-foreground">
                    {`${product.weight * 100}g`}
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-[10px] font-sans tracking-wider uppercase text-muted-foreground mb-1">
                    Purity
                  </p>
                  <p className="font-sans font-semibold text-foreground">
                    {product.purity}
                  </p>
                </div>
                {product.stoneDetails && (
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-[10px] font-sans tracking-wider uppercase text-muted-foreground mb-1">
                      Stones
                    </p>
                    <p className="font-sans font-semibold text-foreground text-sm">
                      {product.stoneDetails}
                    </p>
                  </div>
                )}
                {product.makingCharges && (
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-[10px] font-sans tracking-wider uppercase text-muted-foreground mb-1">
                      Making Charges
                    </p>
                    <p className="font-sans font-semibold text-foreground">
                      {product.makingCharges}%
                    </p>
                  </div>
                )}
              </div>

              {/* EMI */}
              <div className="bg-card border border-border rounded-lg p-4 mb-8">
                <p className="font-sans text-sm font-semibold text-foreground mb-1">
                  EMI Available
                </p>
                {loading ? (
                  <Loader />
                ) : (
                  <p className="text-xs text-muted-foreground font-body">
                    Starting from ₹
                    {(
                      CalculateLatestPrice(priceData, product) / 12
                    ).toLocaleString("en-IN")}
                    /month for 12 months. No Cost EMI on select banks.
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 gold-gradient px-6 py-3.5 rounded font-sans text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> Buy Now
                </button>
                <button className="px-6 py-3.5 rounded border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 text-xs font-sans">
                  <Shield className="w-4 h-4 text-primary" /> BIS Hallmark
                </div>
                <div className="flex items-center gap-2 text-xs font-sans">
                  <Award className="w-4 h-4 text-primary" /> Certified
                </div>
                <div className="flex items-center gap-2 text-xs font-sans">
                  <Truck className="w-4 h-4 text-primary" /> Insured Delivery
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
