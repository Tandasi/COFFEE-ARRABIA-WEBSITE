import { MapPin, Clock, Phone, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-coffee text-cream" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="contact-title">
            Visit Us
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto" data-testid="contact-description">
            Experience authentic Saudi coffee culture in the heart of Riyadh
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Location */}
          <div className="text-center lg:text-left" data-testid="contact-location">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6">
              <MapPin className="w-8 h-8 text-coffee" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Location</h3>
            <div className="space-y-2 text-cream/90">
              <p>King Fahd Road</p>
              <p>Al Olaya District</p>
              <p>Riyadh 12213, Saudi Arabia</p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center lg:text-left" data-testid="contact-hours">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6">
              <Clock className="w-8 h-8 text-coffee" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-cream/90">
              <div className="flex justify-between">
                <span>Saturday - Thursday</span>
                <span>6:30 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>2:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left" data-testid="contact-info">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6">
              <Phone className="w-8 h-8 text-coffee" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-cream/90">
              <p>+966 11 123 4567</p>
              <p>info@qahwah.sa</p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <Button variant="ghost" size="icon" className="text-cream hover:text-gold" data-testid="social-instagram">
                  <Instagram className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-cream hover:text-gold" data-testid="social-twitter">
                  <Twitter className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-cream hover:text-gold" data-testid="social-facebook">
                  <Facebook className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 max-w-md mx-auto" data-testid="newsletter">
          <h4 className="text-lg font-semibold mb-4 text-center">Newsletter</h4>
          <p className="text-cream/80 mb-4 text-sm text-center">Stay updated with our latest offerings and events.</p>
          <div className="flex">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 bg-cream/10 border-cream/20 text-cream placeholder-cream/60"
              data-testid="newsletter-email"
            />
            <Button className="ml-2 bg-gold text-coffee hover:bg-gold-light" data-testid="newsletter-subscribe">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16" data-testid="map-placeholder">
          <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
