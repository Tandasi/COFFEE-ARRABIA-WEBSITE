import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Snowflake, Utensils, Cake } from "lucide-react";
import type { MenuItem, Category } from "@shared/schema";

const categoryIcons = {
  "Hot Drinks": Flame,
  "Cold Drinks": Snowflake,
  "Food & Meals": Utensils,
  "Desserts": Cake,
};

const categoryColors = {
  "Hot Drinks": "text-gold-dark",
  "Cold Drinks": "text-emerald",
  "Food & Meals": "text-gold-dark",
  "Desserts": "text-gold-dark",
};

const priceColors = {
  "Hot Drinks": "text-gold-dark",
  "Cold Drinks": "text-emerald",
  "Food & Meals": "text-gold-dark",
  "Desserts": "text-gold-dark",
};

export default function MenuSection() {
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: menuItems = [], isLoading: menuLoading } = useQuery<MenuItem[]>({
    queryKey: ["/api/menu"],
  });

  if (categoriesLoading || menuLoading) {
    return (
      <section id="menu" className="py-20 coffee-texture" data-testid="menu-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Menu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Loading our delicious offerings...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 coffee-texture" data-testid="menu-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4" data-testid="menu-title">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="menu-description">
            Discover our carefully curated selection of traditional and modern coffee experiences
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {categories.map((category) => {
            const categoryItems = menuItems.filter(item => item.category === category.name);
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons];
            const iconColor = categoryColors[category.name as keyof typeof categoryColors];
            const priceColor = priceColors[category.name as keyof typeof priceColors];

            return (
              <Card key={category.id} className="bg-card rounded-2xl p-8 shadow-lg" data-testid={`menu-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    {IconComponent && <IconComponent className={`w-8 h-8 mr-4 ${iconColor}`} />}
                    <h3 className="text-3xl font-serif font-bold text-primary" data-testid={`category-title-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {category.name}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="flex justify-between items-start border-b border-border pb-4"
                        data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-1" data-testid={`item-name-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.name}
                          </h4>
                          <p className="text-muted-foreground text-sm" data-testid={`item-description-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.description}
                          </p>
                        </div>
                        <span className={`text-lg font-bold ${priceColor}`} data-testid={`item-price-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item.price} SAR
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
