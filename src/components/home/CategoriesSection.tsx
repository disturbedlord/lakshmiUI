import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productNecklace from "@/assets/product-necklace.jpg";
import productBangles from "@/assets/product-bangles.jpg";
import productRing from "@/assets/product-ring.jpg";
import productChain from "@/assets/product-chain.jpg";

const cats = [
  { name: "Gold", image: productNecklace, desc: "22K & 24K Collections" },
  { name: "Silver", image: productChain, desc: "925 Sterling Silver" },
  { name: "Diamond", image: productRing, desc: "Certified Brilliance" },
  { name: "Gift Articles", image: productBangles, desc: "Perfect Gifting" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Our Collections</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/shop"
                className="group relative block overflow-hidden rounded-lg aspect-[3/4] gold-glow-hover transition-all duration-500"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-display font-bold text-foreground">{cat.name}</h3>
                  <p className="text-xs font-sans text-muted-foreground">{cat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
