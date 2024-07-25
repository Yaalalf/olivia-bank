import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";
import PathSection from "@/sections/path-section/PathSection";
import FromAllWorldSection from "@/sections/from-all-world-section/FromAllWorldSection";
import { HeaderSection } from "@/components";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />

      <FromAllWorldSection />

      {/* <OnBoardingSection /> */}
      <PathSection />
    </>
  );
}
