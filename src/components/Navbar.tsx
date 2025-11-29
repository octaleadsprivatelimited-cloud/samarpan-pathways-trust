import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="font-heading font-bold text-white text-xl">YS</span>
            </div>
            <span className="font-heading font-bold text-xl hidden md:block">Youth Service Trust</span>
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
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            
            <div>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === "about" ? "" : "about")}
                className="flex items-center justify-between w-full py-2 text-foreground"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen === "about" && (
                <div className="pl-4 space-y-2 mt-2">
                  {about.map((item) => (
                    <Link key={item.path} to={item.path} className="block py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === "programs" ? "" : "programs")}
                className="flex items-center justify-between w-full py-2 text-foreground"
              >
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen === "programs" && (
                <div className="pl-4 space-y-2 mt-2">
                  {programs.map((item) => (
                    <Link key={item.path} to={item.path} className="block py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/events" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Events</Link>
            <Link to="/gallery" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/news" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>News</Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
            <Button asChild variant="default" className="w-full bg-secondary hover:bg-secondary/90">
              <Link to="/donate" onClick={() => setIsOpen(false)}>Donate Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
