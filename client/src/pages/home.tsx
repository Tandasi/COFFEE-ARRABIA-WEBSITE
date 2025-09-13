import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import GallerySection from "@/components/gallery-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
