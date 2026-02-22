import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 maroon-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Get Exclusive Offers
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Subscribe to receive the latest collections, gold rate updates, and exclusive member-only offers.
          </p>

          {submitted ? (
            <p className="text-primary font-sans font-semibold">Thank you for subscribing! ✨</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-input border border-border rounded px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="gold-gradient px-6 py-3 rounded font-sans text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
