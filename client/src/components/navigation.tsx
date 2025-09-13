import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3" data-testid="logo">
            <Coffee className="w-8 h-8 text-gold-dark" />
            <span className="text-2xl font-serif font-bold text-primary">
              <span className="font-arabic">قهوة</span> Qahwah
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-menu"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
