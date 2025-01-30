import BentoGrid from "@/components/BentoGrid";
import Chat from "@/components/Chat";
import Features from "@/components/Features";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import PocketHero from "@/components/PocketHero";
import PopularCourses from "@/components/PopularCourses";
import About from "@/components/About";
import SecurityPage from "@/components/SecurityPage";
import VideoHand from "@/components/VideoHand";
import SuccessPage from "@/components/Success";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SuccessPage />
      <VideoHand />
      <Features />
      <BentoGrid />
      <Chat />
      <SecurityPage />
      <PocketHero />
      <FeaturesGrid />
      <PopularCourses />
    </>
  );
}
