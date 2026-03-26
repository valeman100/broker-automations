import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import RoiCalculator from "@/components/RoiCalculator";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <RoiCalculator />
      <VideoSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
