import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Phone, User, Gem } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jewelleryTypes = ["Gold Necklace", "Gold Bangles", "Gold Earrings", "Gold Rings", "Diamond Jewellery", "Silver Jewellery", "Bridal Set", "Custom Design", "Other"];

const Appointment = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", jewelleryType: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I'd like to book an appointment on ${form.date} for ${form.jewelleryType}. Contact: ${form.phone}`;
    window.open(`https://wa.me/919500405009?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Book a Visit</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2">Book an Appointment</h1>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
              Schedule a personalised showroom experience. Our experts will guide you through our exclusive collections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Gem className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-display font-bold text-xl mb-2">Appointment Request Sent!</h2>
                <p className="text-muted-foreground font-body">
                  We've opened WhatsApp with your details. Our team will confirm your appointment shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-muted-foreground mb-2">
                    <User className="w-3.5 h-3.5" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-input border border-border rounded px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-muted-foreground mb-2">
                    <Phone className="w-3.5 h-3.5" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-input border border-border rounded px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-muted-foreground mb-2">
                    <CalendarDays className="w-3.5 h-3.5" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-input border border-border rounded px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-muted-foreground mb-2">
                    <Gem className="w-3.5 h-3.5" /> Jewellery Type
                  </label>
                  <select
                    required
                    value={form.jewelleryType}
                    onChange={(e) => setForm({ ...form, jewelleryType: e.target.value })}
                    className="w-full bg-input border border-border rounded px-4 py-3 text-sm font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select type</option>
                    {jewelleryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full gold-gradient px-6 py-3.5 rounded font-sans text-sm font-semibold tracking-wider uppercase text-primary-foreground hover:scale-[1.02] transition-transform"
                >
                  Book via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
