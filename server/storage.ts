import { type MenuItem, type InsertMenuItem, type Category, type InsertCategory } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Menu Items
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getMenuItem(id: string): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
}

export class MemStorage implements IStorage {
  private menuItems: Map<string, MenuItem>;
  private categories: Map<string, Category>;

  constructor() {
    this.menuItems = new Map();
    this.categories = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories
    const categories: Category[] = [
      {
        id: "hot-drinks",
        name: "Hot Drinks",
        description: "Traditional and modern hot beverages",
        icon: "fas fa-fire",
        order: 1,
      },
      {
        id: "cold-drinks",
        name: "Cold Drinks",
        description: "Refreshing chilled beverages",
        icon: "fas fa-snowflake",
        order: 2,
      },
      {
        id: "food-meals",
        name: "Food & Meals",
        description: "Delicious meals and snacks",
        icon: "fas fa-utensils",
        order: 3,
      },
      {
        id: "desserts",
        name: "Desserts",
        description: "Sweet treats and traditional desserts",
        icon: "fas fa-birthday-cake",
        order: 4,
      },
    ];

    categories.forEach(category => {
      this.categories.set(category.id, category);
    });

    // Initialize menu items
    const menuItems: MenuItem[] = [
      // Hot Drinks
      {
        id: randomUUID(),
        name: "Arabic Coffee (Qahwah)",
        description: "Traditional Saudi coffee with cardamom and saffron",
        price: "15.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Turkish Coffee",
        description: "Rich and strong, served in traditional copper pot",
        price: "18.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Cappuccino",
        description: "Italian classic with steamed milk foam",
        price: "22.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Karak Tea",
        description: "Spiced tea with milk and cardamom",
        price: "12.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Espresso",
        description: "Pure Italian espresso shot",
        price: "16.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Saffron Latte",
        description: "Unique blend with premium saffron threads",
        price: "28.00",
        category: "Hot Drinks",
        isAvailable: "true",
      },
      // Cold Drinks
      {
        id: randomUUID(),
        name: "Iced Arabic Coffee",
        description: "Chilled traditional coffee with rose water",
        price: "18.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Cold Brew",
        description: "Smooth 12-hour cold extraction",
        price: "25.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Iced Cappuccino",
        description: "Cold version of our classic cappuccino",
        price: "24.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Mint Lemonade",
        description: "Fresh mint with lemon and sparkling water",
        price: "14.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Frappe",
        description: "Blended iced coffee with whipped cream",
        price: "26.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Tamarind Juice",
        description: "Traditional Middle Eastern refreshing drink",
        price: "16.00",
        category: "Cold Drinks",
        isAvailable: "true",
      },
      // Food & Meals
      {
        id: randomUUID(),
        name: "Manakish Za'atar",
        description: "Traditional flatbread with thyme and olive oil",
        price: "20.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Fatayer Spinach",
        description: "Baked pastries filled with seasoned spinach",
        price: "18.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Arabic Breakfast",
        description: "Hummus, labneh, olives, and fresh bread",
        price: "35.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Croissant Sandwich",
        description: "Buttery croissant with cheese and turkey",
        price: "28.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Shakshuka",
        description: "Eggs poached in spiced tomato sauce",
        price: "32.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Grilled Halloumi",
        description: "Pan-fried cheese with honey and herbs",
        price: "25.00",
        category: "Food & Meals",
        isAvailable: "true",
      },
      // Desserts
      {
        id: randomUUID(),
        name: "Baklava",
        description: "Layered pastry with nuts and honey syrup",
        price: "22.00",
        category: "Desserts",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Kunafa",
        description: "Shredded pastry with sweet cheese filling",
        price: "28.00",
        category: "Desserts",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Ma'amoul",
        description: "Traditional date-filled cookies",
        price: "15.00",
        category: "Desserts",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Umm Ali",
        description: "Warm bread pudding with nuts and raisins",
        price: "24.00",
        category: "Desserts",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        price: "26.00",
        category: "Desserts",
        isAvailable: "true",
      },
      {
        id: randomUUID(),
        name: "Saffron Ice Cream",
        description: "Creamy dessert infused with saffron",
        price: "20.00",
        category: "Desserts",
        isAvailable: "true",
      },
    ];

    menuItems.forEach(item => {
      this.menuItems.set(item.id, item);
    });
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category,
    );
  }

  async getMenuItem(id: string): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const item: MenuItem = { ...insertItem, id };
    this.menuItems.set(id, item);
    return item;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values()).sort((a, b) => a.order - b.order);
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }
}

export const storage = new MemStorage();
