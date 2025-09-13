export default function AboutSection() {
  return (
    <section id="about" className="py-20 geometric-pattern" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8" data-testid="about-title">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p data-testid="about-paragraph-1">
                Qahwah was born from a deep passion for preserving the rich coffee heritage of Saudi Arabia 
                while embracing contemporary café culture. Our journey began with a simple mission: to create 
                a space where tradition meets innovation.
              </p>
              <p data-testid="about-paragraph-2">
                Every cup we serve tells the story of centuries-old Arabian coffee traditions. From the 
                aromatic cardamom-infused qahwah to modern specialty blends, we honor the past while 
                crafting the future of coffee culture in the Kingdom.
              </p>
              <p data-testid="about-paragraph-3">
                Our café serves as a cultural bridge, where locals and visitors can experience authentic 
                Saudi hospitality alongside world-class coffee preparation techniques. We source our beans 
                ethically and prepare each drink with the care and respect it deserves.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="text-center" data-testid="stat-varieties">
                <div className="text-3xl font-bold text-gold-dark">15+</div>
                <div className="text-muted-foreground">Coffee Varieties</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-gold-dark">5</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Traditional Arabic coffee preparation"
                className="w-full h-auto"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 to-transparent" />
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-gold rounded-full opacity-20" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-gold rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
