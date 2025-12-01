import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm" 
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 overflow-visible">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Swamivivekananda Seva Brundam Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/" 
                className={`text-sm font-normal transition-colors ${
                  location.pathname === "/" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
              
              <div className="relative group">
                <button 
                  className={`text-sm font-normal transition-colors flex items-center gap-0.5 ${
                    location.pathname.startsWith("/about") || 
                    location.pathname.startsWith("/founder") || 
                    location.pathname.startsWith("/mission") || 
                    location.pathname.startsWith("/team")
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                  <ChevronDown className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                  {about.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button 
                  className={`text-sm font-normal transition-colors flex items-center gap-0.5 ${
                    location.pathname.startsWith("/education") || 
                    location.pathname.startsWith("/health") || 
                    location.pathname.startsWith("/women-empowerment") || 
                    location.pathname.startsWith("/rural-development") || 
                    location.pathname.startsWith("/youth-development")
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Programs
                  <ChevronDown className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                  {programs.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/events" 
                className={`text-sm font-normal transition-colors ${
                  location.pathname === "/events" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Events
              </Link>
              <Link 
                to="/gallery" 
                className={`text-sm font-normal transition-colors ${
                  location.pathname === "/gallery" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/news" 
                className={`text-sm font-normal transition-colors ${
                  location.pathname === "/news" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                News
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-normal transition-colors ${
                  location.pathname === "/contact" 
                    ? "text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Donate Button - Right */}
            <div className="hidden lg:block">
              <Button 
                asChild 
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-normal px-5 py-2 rounded-full transition-all"
              >
                <Link to="/donate">Donate</Link>
              </Button>
            </div>

            {/* Mobile Header Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <Button 
                asChild 
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-normal px-4 py-1.5 rounded-full transition-all"
              >
                <Link to="/donate">Donate</Link>
              </Button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-900 z-50 relative"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-14 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg z-50 lg:hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-1">
                <Link 
                  to="/" 
                  className="block py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal" 
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <div>
                  <button 
                    onClick={() => setDropdownOpen(dropdownOpen === "about" ? "" : "about")}
                    className="flex items-center justify-between w-full py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal"
                  >
                    <span>About</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === "about" ? "rotate-180" : ""}`} />
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
                        <div className="pl-4 pr-3 space-y-1 mt-1">
                          {about.map((item) => (
                            <Link 
                              key={item.path} 
                              to={item.path} 
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" 
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button 
                    onClick={() => setDropdownOpen(dropdownOpen === "programs" ? "" : "programs")}
                    className="flex items-center justify-between w-full py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal"
                  >
                    <span>Programs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === "programs" ? "rotate-180" : ""}`} />
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
                        <div className="pl-4 pr-3 space-y-1 mt-1">
                          {programs.map((item) => (
                            <Link 
                              key={item.path} 
                              to={item.path} 
                              className="block py-2 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" 
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/events" 
                  className="block py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal" 
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  to="/gallery" 
                  className="block py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal" 
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  to="/news" 
                  className="block py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal" 
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2.5 px-3 text-base text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-normal" 
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <Button 
                    asChild 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-normal py-2.5 text-base rounded-lg"
                  >
                    <Link to="/donate" onClick={() => setIsOpen(false)}>Donate</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
