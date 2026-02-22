import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldParticles from "@/components/GoldParticles";
import HeroSection from "@/components/home/HeroSection";
import GoldRateTicker from "@/components/home/GoldRateTicker";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GoldParticles />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <GoldRateTicker />
        <CategoriesSection />
        <FeaturedSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
