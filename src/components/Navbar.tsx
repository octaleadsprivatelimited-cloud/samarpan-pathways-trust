import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");

  const programs = [
    { name: "Education Initiatives", path: "/education" },
    { name: "Health & Wellness", path: "/health" },
    { name: "Women Empowerment", path: "/women-empowerment" },
    { name: "Rural Development", path: "/rural-development" },
    { name: "Youth Development", path: "/youth-development" },
  ];

  const about = [
    { name: "About Us", path: "/about" },
    { name: "Founder", path: "/founder" },
    { name: "Mission & Vision", path: "/mission" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <>
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImage} alt="Swamivivekananda Seva Brundam Logo" className="h-16 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              
              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  About <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {about.map((item) => (
                    <Link key={item.path} to={item.path} className="block px-4 py-3 hover:bg-muted transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Programs <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {programs.map((item) => (
                    <Link key={item.path} to={item.path} className="block px-4 py-3 hover:bg-muted transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Gallery</Link>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors">News</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" className="bg-secondary hover:bg-secondary/90">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground z-50 relative">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-0 right-0 bg-background border-b border-border shadow-2xl z-50 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <motion.div 
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="container-custom py-3 space-y-0.5"
              >
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to="/" 
                    className="block py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="border-t border-border/50 mt-1 pt-1"
                >
                  <button 
                    onClick={() => setDropdownOpen(dropdownOpen === "about" ? "" : "about")}
                    className="flex items-center justify-between w-full py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium"
                  >
                    <span>About</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen === "about" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === "about" && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pr-3 space-y-0.5 mt-1">
                          {about.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                to={item.path} 
                                className="block py-1.5 px-3 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all" 
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="border-t border-border/50 mt-1 pt-1"
                >
                  <button 
                    onClick={() => setDropdownOpen(dropdownOpen === "programs" ? "" : "programs")}
                    className="flex items-center justify-between w-full py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium"
                  >
                    <span>Programs</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen === "programs" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === "programs" && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pr-3 space-y-0.5 mt-1">
                          {programs.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link 
                                to={item.path} 
                                className="block py-1.5 px-3 rounded-lg text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all" 
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to="/events" 
                    className="block py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    Events
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to="/gallery" 
                    className="block py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to="/news" 
                    className="block py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    News
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link 
                    to="/contact" 
                    className="block py-2 px-3 rounded-lg text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium" 
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="border-t border-border/50 mt-2 pt-2"
                >
                  <Button asChild variant="default" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 text-sm">
                    <Link to="/donate" onClick={() => setIsOpen(false)}>Donate Now</Link>
                  </Button>
                </motion.div>

                {/* Contact Details Section */}
                <motion.div
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  className="mt-3 pt-3 border-t-2 border-border/50 bg-primary/5 rounded-lg p-3"
                >
                  <h3 className="font-heading font-semibold text-sm mb-2 text-primary">Contact Us</h3>
                  <div className="space-y-2">
                    <motion.div
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                      className="flex items-start gap-2 p-2 bg-background rounded-lg"
                    >
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={14} className="text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed">
                        H No 6-113, Gandhinagar Kalwakurthy Village & Mandal, Nagarkurnool District, Telangana State - 509324
                      </span>
                    </motion.div>
                    <motion.div
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                      className="flex items-center gap-2 p-2 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={14} className="text-primary" />
                      </div>
                      <a href="mailto:info@ysvsb.org" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                        info@ysvsb.org
                      </a>
                    </motion.div>
                    <motion.div
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: -20 }
                      }}
                      className="flex items-center gap-2 p-2 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={14} className="text-primary" />
                      </div>
                      <a href="tel:+917013570447" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                        +91 70135 70447
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
