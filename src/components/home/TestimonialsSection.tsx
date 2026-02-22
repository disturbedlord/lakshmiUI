import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Shankar",
    text: "The most beautiful wedding jewellery I've ever worn. The craftsmanship at Lakshmi Thanga Maligai is unmatched. Every piece tells a story of tradition.",
    rating: 5,
    occasion: "Wedding Collection",
  },
  {
    name: "Meena Rajesh",
    text: "Trusted this shop for 3 generations now. Their purity and hallmark certification gives us complete confidence. Best gold rates in Polur!",
    rating: 5,
    occasion: "Gold Bangles",
  },
  {
    name: "Kumar Velu",
    text: "Bought an engagement ring here and my fiancée was thrilled! The diamond quality and attention to detail exceeded all expectations.",
    rating: 5,
    occasion: "Diamond Ring",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What Our Customers Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 gold-glow-hover transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body text-base leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs font-sans text-muted-foreground">{t.occasion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
