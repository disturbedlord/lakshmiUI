import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-2">Contact Us</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {[
                { icon: MapPin, label: "Visit Our Showroom", value: "23/24, Chinthathiripettai St, Polur, Tamil Nadu" },
                { icon: Phone, label: "Call Us", value: "+91 9500405009" },
                { icon: Clock, label: "Store Timings", value: "9:00 AM – 9:00 PM (All Days)" },
                { icon: Mail, label: "Email", value: "info@lakshmithangamaligai.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
                  <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="font-body text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="rounded-lg overflow-hidden border border-border h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d79.12!3d12.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDMwJzM2LjAiTiA3OcKwMDcnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lakshmi Thanga Maligai Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
