import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-jewellery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury South Indian Gold Jewellery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Est. 1985 • Polur
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Timeless
            <span className="gold-text-gradient block">Elegance</span>
            in Every Piece
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl font-body text-ivory-muted mb-8 max-w-lg"
          >
            Your one-stop shop for luxury jewellery. Handcrafted with passion,
            worn with pride — from our family to yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/shop"
              className="gold-gradient px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary-foreground rounded gold-glow-hover transition-all duration-300 hover:scale-105"
            >
              Explore Collection
            </Link>
            <Link
              to="/appointment"
              className="border border-primary px-8 py-3 font-sans text-sm font-semibold tracking-wider uppercase text-primary rounded hover:bg-primary/10 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
