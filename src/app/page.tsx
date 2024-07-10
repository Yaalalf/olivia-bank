import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";
import PathSection from "@/sections/path-section/PathSection";
import FromAllWorldSection from "@/sections/from-all-world-section/FromAllWorldSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <FromAllWorldSection />

      {/* <OnBoardingSection /> */}
      <PathSection />
    </>
  );
}
