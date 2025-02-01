import BentoGrid from "@/components/BentoGrid";
import Chat from "@/components/Chat";
import Features from "@/components/Features";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoHand from "@/components/VideoHand";
import SuccessPage from "@/components/Success";
import ServicesGrid from "@/components/ServicesGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SuccessPage />
      <VideoHand />
      <ServicesGrid />
      <BentoGrid />
      <Features />
      <FeaturesGrid />
      <Chat />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}
