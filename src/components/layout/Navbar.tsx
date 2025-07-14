
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className={cn(
                "rounded-md p-1.5 mr-2 transition-all duration-300",
                isScrolled ? "bg-gradient-to-r from-aws-blue to-aws-darkgrey" : "bg-gradient-to-r from-aws-blue to-aws-orange"
              )}>
                <div className="text-white font-bold text-lg">AWS</div>
              </div>
              <span className={cn(
                "font-poppins font-bold transition-colors duration-300",
                isScrolled ? "text-aws-blue" : "text-aws-blue"
              )}>Cloud Club</span>
              <span className={cn(
                "hidden md:inline ml-1.5 transition-colors duration-300",
                isScrolled ? "text-aws-darkgrey" : "text-aws-darkgrey"
              )}>— IIT Madras</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group", 
                    location.pathname === item.path
                      ? isScrolled ? "text-aws-blue font-semibold" : "text-aws-blue font-semibold"
                      : isScrolled ? "text-aws-darkgrey hover:text-aws-blue" : "text-aws-darkgrey hover:text-aws-blue"
                  )}
                >
                  {item.name}
                  <div className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    location.pathname === item.path ? "bg-aws-orange scale-x-100" : "bg-aws-orange"
                  )}></div>
                </Link>
              ))}
            </div>
            <Button 
              className={cn(
                "ml-4 transition-all duration-300 hover-lift",
                isScrolled 
                  ? "bg-aws-orange hover:bg-aws-lightorange text-white" 
                  : "bg-aws-orange hover:bg-aws-lightorange text-white"
              )}
            >
              <Link to="https://forms.gle/WNhhN8ung7MmQfhJ7">Join Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none transition-colors",
                isScrolled ? "text-aws-darkgrey hover:text-aws-blue" : "text-aws-darkgrey hover:text-aws-blue"
              )}
              aria-expanded="false"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "text-aws-blue font-semibold border-l-4 border-aws-orange pl-2"
                    : "text-aws-darkgrey hover:text-aws-blue"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                className="w-full bg-aws-orange hover:bg-aws-lightorange text-white hover-lift"
              >
                <Link to="https://forms.gle/WNhhN8ung7MmQfhJ7">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
