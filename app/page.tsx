import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoiCalculator from "@/components/RoiCalculator";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RoiCalculator />
        <ProblemSection />
        <ServicesSection />
        <VideoSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
