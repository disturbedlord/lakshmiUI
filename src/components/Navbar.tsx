import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Heart, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Appointment", path: "/appointment" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="top-0 static md:fixed left-0 right-0 z-20 bg-background/90 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary/10 py-1.5">
        <div className="mx-auto px-4 sm:px-4 flex justify-between items-center text-xs font-sans">
          <div className="flex items-center gap-1 text-primary">
            <Phone className="w-3 h-3" />
            <span>+91 9500405009</span>
          </div>
          <span className="text-muted-foreground hidden sm:block">
            Store Timings: 9:00 AM – 9:00 PM
          </span>
          <div className="flex gap-3">
            <Link
              to="/shop"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Heart className="w-4 h-4" />
            </Link>
            <Link
              to="/shop"
              className="text-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center">
          <h1 className="text-xl md:text-2xl font-display font-bold gold-text-gradient leading-tight">
            Lakshmi Thanga Maligai
          </h1>
          <span className="text-[10px] font-sans tracking-[0.3em] text-muted-foreground uppercase">
            Since 1985 • Polur
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-sans tracking-wider uppercase transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-sans tracking-wider uppercase transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
