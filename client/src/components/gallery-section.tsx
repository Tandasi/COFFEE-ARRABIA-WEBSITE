export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Traditional Arabic coffee service",
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Modern coffee shop interior",
    },
    {
      src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Middle Eastern pastries and desserts",
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Saudi traditional coffee service",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Arabic coffee preparation",
    },
    {
      src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Modern coffee shop seating",
    },
    {
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Traditional Middle Eastern sweets",
    },
    {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
      alt: "Coffee beans and spices",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="gallery-title">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="gallery-description">
            A visual journey through our coffee culture and culinary artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl aspect-square"
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
