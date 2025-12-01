import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    quickLinks: false,
    programs: false,
    contact: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Swamivivekananda Seva Brundam</h3>
            <p className="text-sm opacity-90 mb-4">
              Empowering rural communities through education, health, and sustainable development initiatives.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/SwamivivekanandaSevaBrundam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/swamivivekananda_seva_brundam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@swamivivekanandasevabrunda2675" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors" 
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://wa.me/917013570447?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20Swamivivekananda%20Seva%20Brundam." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Collapsible on Mobile */}
          <div>
            <button 
              onClick={() => toggleSection('quickLinks')}
              className="md:hidden w-full flex items-center justify-between mb-4"
            >
              <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
              {openSections.quickLinks ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h3 className="font-heading font-semibold text-lg mb-4 hidden md:block">Quick Links</h3>
            <div className={`md:block ${openSections.quickLinks ? 'block' : 'hidden'}`}>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link to="/founder" className="hover:text-secondary transition-colors">Founder</Link></li>
                <li><Link to="/programs" className="hover:text-secondary transition-colors">Our Programs</Link></li>
                <li><Link to="/events" className="hover:text-secondary transition-colors">Events</Link></li>
                <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
                <li><Link to="/news" className="hover:text-secondary transition-colors">News</Link></li>
              </ul>
            </div>
          </div>

          {/* Programs - Collapsible on Mobile */}
          <div>
            <button 
              onClick={() => toggleSection('programs')}
              className="md:hidden w-full flex items-center justify-between mb-4"
            >
              <h3 className="font-heading font-semibold text-lg">Our Programs</h3>
              {openSections.programs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h3 className="font-heading font-semibold text-lg mb-4 hidden md:block">Our Programs</h3>
            <div className={`md:block ${openSections.programs ? 'block' : 'hidden'}`}>
              <ul className="space-y-2 text-sm">
                <li><Link to="/education" className="hover:text-secondary transition-colors">Education</Link></li>
                <li><Link to="/health" className="hover:text-secondary transition-colors">Health & Wellness</Link></li>
                <li><Link to="/women-empowerment" className="hover:text-secondary transition-colors">Women Empowerment</Link></li>
                <li><Link to="/rural-development" className="hover:text-secondary transition-colors">Rural Development</Link></li>
                <li><Link to="/youth-development" className="hover:text-secondary transition-colors">Youth Development</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact - Collapsible on Mobile */}
          <div>
            <button 
              onClick={() => toggleSection('contact')}
              className="md:hidden w-full flex items-center justify-between mb-4"
            >
              <h3 className="font-heading font-semibold text-lg">Contact Us</h3>
              {openSections.contact ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <h3 className="font-heading font-semibold text-lg mb-4 hidden md:block">Contact Us</h3>
            <div className={`md:block ${openSections.contact ? 'block' : 'hidden'}`}>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="flex-shrink-0 mt-1" />
                  <span className="hover:text-secondary transition-colors">
                    H No 6-113, Gandhinagar Kalwakurthy Village & Mandal, Nagarkurnool District, Telangana State - 509324
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0" />
                  <a href="mailto:info@ysvsb.org" className="hover:text-secondary transition-colors">
                    info@ysvsb.org
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0" />
                  <a href="tel:+917013570447" className="hover:text-secondary transition-colors">
                    +91 70135 70447
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="flex-shrink-0" />
                  <a 
                    href="https://wa.me/917013570447?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20Swamivivekananda%20Seva%20Brundam." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
              <Link to="/donate" className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Support Our Cause
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p className="opacity-90 mb-2">
            © {new Date().getFullYear()} Swamivivekananda Seva Brundam. All rights reserved. | Founded by Shiva Kumar Gudlanaram - National Youth Awardee
          </p>
          <p className="opacity-90">
            Website donated by <a href="https://www.octaleads.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors underline"><strong>Octaleads Pvt Ltd</strong></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
