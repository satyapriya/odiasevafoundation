import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Odia Seva Foundation
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Serving and protecting our sacred cows with love and care. Every donation helps us provide food, shelter, and medical care to 20 cows.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-cows" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Cows
                </Link>
              </li>
              <li>
                <Link to="/expenses" className="text-muted-foreground hover:text-primary transition-colors">
                  Expenses
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Office Address - Room No. 01, Jai Jagannath CHSL, Nandadeep Nagar, Chakkinaka, Kalyan (E.) - 421306.</li>
              <li>Gousala Address - Gothanipada Village, Kakadwal, Shrimalang Road, Nevali, Kalyan (E.)</li>
              <li>
                <a href="mailto:odiasevafoundation@gmail.com" className="hover:text-primary transition-colors">
                  odiasevafoundation@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:info@odiasevafoundation.com" className="hover:text-primary transition-colors">
                  info@odiasevafoundation.com
                </a>
              </li>
              <li>
                <a href="tel:+918928887070" className="hover:text-primary transition-colors">
                  +918928887070
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for our sacred cows
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Odia Seva Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
