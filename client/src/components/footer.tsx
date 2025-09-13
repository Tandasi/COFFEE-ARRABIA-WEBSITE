import { Coffee } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-coffee-dark text-cream py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-bold">
                <span className="font-arabic">قهوة</span> Qahwah
              </span>
            </div>
            <p className="text-cream/80 mb-4">
              Preserving Saudi coffee heritage while crafting the future of café culture.
            </p>
          </div>
          
          <div data-testid="footer-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection("menu")}
                className="block text-cream/80 hover:text-gold transition-colors text-left"
                data-testid="footer-link-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block text-cream/80 hover:text-gold transition-colors text-left"
                data-testid="footer-link-about"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="block text-cream/80 hover:text-gold transition-colors text-left"
                data-testid="footer-link-gallery"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-cream/80 hover:text-gold transition-colors text-left"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div data-testid="footer-description">
            <h4 className="text-lg font-semibold mb-4">Experience Authentic Saudi Coffee</h4>
            <p className="text-cream/80 text-sm">
              From traditional qahwah served with dates to modern specialty blends, 
              we bring you the finest coffee experience rooted in Saudi culture and hospitality.
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center text-cream/60" data-testid="footer-copyright">
          <p>&copy; 2024 Qahwah. All rights reserved. | Crafted with ☕ in Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
}
