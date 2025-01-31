import BentoGrid from "@/components/BentoGrid";
import Chat from "@/components/Chat";
import Features from "@/components/Features";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import PocketHero from "@/components/PocketHero";
import About from "@/components/About";
import SecurityPage from "@/components/SecurityPage";
import VideoHand from "@/components/VideoHand";
import SuccessPage from "@/components/Success";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SuccessPage />
      <VideoHand />
      <ServicesGrid />
      <Features />
      <BentoGrid />
      <FeaturesGrid />
      <Chat />
      <SecurityPage />
      <PocketHero />
    </>
  );
}
