import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <BookingSection />
      <Footer />
    </div>
  );
}
