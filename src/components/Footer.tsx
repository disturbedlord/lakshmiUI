import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold gold-text-gradient mb-3">
              Lakshmi Thanga Maligai
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Your one-stop shop for luxury jewellery. Trusted by families for
              generations in Polur.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Shop", "About", "Contact", "Appointment"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              Categories
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Gold Jewellery",
                "Silver Jewellery",
                "Diamond Jewellery",
                "Gift Articles",
              ].map((cat) => (
                <Link
                  key={cat}
                  to="/shop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold tracking-wider uppercase text-primary mb-4">
              Visit Us
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground font-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>23/24, Chinthathiripettai St, Polur</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 9500405009</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>lakshmithangamaaligai2009@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-sans">
            © 2025 Lakshmi Thanga Maligai. All rights reserved. BIS Hallmark
            Certified.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
