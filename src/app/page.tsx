import BentoGrid from "@/components/BentoGrid";
import Features from "@/components/Features";
import FeaturesGrid from "@/components/FeaturesGrid";
import Hero from "@/components/Hero";
import PocketHero from "@/components/PocketHero";
import PopularCourses from "@/components/PopularCourses";
import ResponsiveText from "@/components/ResponsiveText";
import SecurityPage from "@/components/SecurityPage";
import VideoHand from "@/components/VideoHand";

export default function Home() {
  return (
    <>
      <Hero />
      <ResponsiveText />
      <VideoHand />
      <Features />
      <BentoGrid />
      <SecurityPage />
      <PocketHero />
      <FeaturesGrid />
      <PopularCourses />
    </>
  );
}
