import { Link } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Youth Service Trust</h3>
            <p className="text-sm opacity-90 mb-4">
              Empowering rural communities through education, health, and sustainable development initiatives.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/founder" className="hover:text-secondary transition-colors">Founder</Link></li>
              <li><Link to="/programs" className="hover:text-secondary transition-colors">Our Programs</Link></li>
              <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/news" className="hover:text-secondary transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/education" className="hover:text-secondary transition-colors">Education</Link></li>
              <li><Link to="/health" className="hover:text-secondary transition-colors">Health & Wellness</Link></li>
              <li><Link to="/women-empowerment" className="hover:text-secondary transition-colors">Women Empowerment</Link></li>
              <li><Link to="/rural-development" className="hover:text-secondary transition-colors">Rural Development</Link></li>
              <li><Link to="/youth-development" className="hover:text-secondary transition-colors">Youth Development</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@ysvsb.org" className="hover:text-secondary transition-colors">
                  info@ysvsb.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919966395037" className="hover:text-secondary transition-colors">
                  +91 99663 95037
                </a>
              </li>
            </ul>
            <Link to="/donate" className="inline-block mt-4 px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
              Support Our Cause
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="opacity-90">
            © {new Date().getFullYear()} Youth Service Trust. All rights reserved. | Founded by Shiva Kumar Gudlanaram - National Youth Awardee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
