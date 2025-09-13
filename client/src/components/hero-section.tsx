import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center geometric-pattern" data-testid="hero-section">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-primary" data-testid="hero-title">
            <span className="block text-gold-dark font-arabic">قهوة أصيلة</span>
            <span className="block mt-2">Authentic Saudi Coffee</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="hero-description">
            Experience the rich heritage of Saudi coffee culture in our modern café. 
            From traditional Arabic coffee to contemporary blends, every cup tells a story of tradition and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("menu")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-view-menu"
            >
              View Our Menu
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
              data-testid="button-our-story"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
