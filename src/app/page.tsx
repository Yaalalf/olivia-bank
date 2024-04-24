import { Header } from "@/components";
import "./desktop.css";
import { HeroSection, OnBoardingSection } from "@/sections";

export default function Home({ name }: { name: string }) {
  return (
    <>
      <Header />
      <HeroSection />
      <OnBoardingSection />
    </>
  );
}
