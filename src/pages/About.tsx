import { motion } from "framer-motion";
import { Shield, Award, Users, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Shield, title: "BIS Hallmark Certified", desc: "Every piece of gold and silver jewellery is BIS hallmark certified for guaranteed purity." },
  { icon: Award, title: "40 Years of Trust", desc: "Serving families across Polur and Tamil Nadu since 1985 with unwavering commitment to quality." },
  { icon: Users, title: "Family Legacy", desc: "Three generations of master craftsmen dedicated to preserving traditional South Indian jewellery art." },
  { icon: Gem, title: "Finest Craftsmanship", desc: "Each piece is handcrafted by skilled artisans using time-honoured techniques passed through generations." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Our Story</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2 mb-6">A Legacy of Gold & Trust</h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded in 1985, Lakshmi Thanga Maligai began as a humble gold shop on Chinthathiripettai Street in Polur.
              What started as one family's passion for fine jewellery has blossomed into a beloved institution trusted by
              thousands of families for their most cherished moments — from weddings and festivals to daily adornment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 gold-glow-hover transition-all duration-500"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-display font-bold mb-4 gold-text-gradient">Our Promise</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              At Lakshmi Thanga Maligai, we believe jewellery is more than ornament — it's emotion, tradition, and legacy.
              Every piece that leaves our showroom carries the weight of our reputation: pure metals, transparent pricing,
              and designs that honour the timeless beauty of South Indian jewellery while embracing contemporary elegance.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
